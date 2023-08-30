# set working directory to directory of script
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

library(tidyverse)
library(tidyselect)
library(readr)
library(dplyr)

### Raw data joined in one file #######
# set directory of importing data
setwd('../data/raw_data')
data_raw <- readr::read_csv(list.files(pattern ="*.csv"))
#set back directory to current one
setwd(this.dir)

#check how many participants
data_raw$participant <- as.factor(data_raw$participant)
nlevels(data_raw$participant)
# -> 90 participants

#save participant data
demographics<- data_raw %>% select(one_of('participant','age_enter.text','gender_slider.response','lang_enter.text')) 
demographics<- demographics[!is.na(demographics$gender_slider.response) | 
                              !is.na(demographics$age_enter.text) | 
                              !is.na(demographics$lang_enter.text),]
write.table(demographics, file="../data/preprocessed_data/demographics.csv", row.names = FALSE, col.names = TRUE, sep = ";")

demographics$age_enter.text <- as.numeric(demographics$age_enter.text)
#filled in mean age for persons who did not enter age
demographics <- demographics %>%  mutate(age_enter.text = case_when(
    (is.na(age_enter.text)) ~ 36.40244,
    (!is.na(age_enter.text)) ~ age_enter.text,
  ))

mean(demographics$age_enter.text)
# 36.68008
sd(demographics$age_enter.text)
#age range
min(demographics$age_enter.text)
# 18
max(demographics$age_enter.text)
# 80
# Check genders, where 1= female, 2 = male, 3 = non-binary, 4 = other
table(demographics$gender_slider.response)
# 1  2  3  4  NA
#50 36  2  1  1

nrow(demographics)

#remove columns which are of no use
data_wrong_coding <- data_raw %>% select(one_of('participant','item_no','list','condition',
                                                'block','exp_rate1.response','certainty_rate.response'))




# fix incorrect coding for condition in list 5 and list 6
data_coding_corrected <- data_wrong_coding %>%
mutate(condition = case_when(
  (condition=="c" & list == "5") ~ "nc1",
  (condition=="nc" & list == "5") ~ "c1",
  (condition=="c" & list == "6") ~ "nc1",
  (condition=="nc" & list == "6") ~ "c1",
  (condition!="nc" & condition!= "c") ~ condition,
  (list != "5" & list != "6") ~ condition,
))

data <- data_coding_corrected %>%
  mutate_at("condition", str_replace, "c1", "c") %>%
  mutate_at("condition", str_replace, "nc1", "nc")
# fix done

#Remove NA lines
data<- data[!is.na(data$item_no),]

# on how many trials was the slider not moved?
summary(data)
length(which(is.na(data[data$block=="2",]$certainty_rate.response))) #8
length(which(is.na(data[data$block=="1",]$exp_rate1.response))) #12

#replacing NA in certainty rating by 0.5 assuming participants just didn't move the marker
data <- data %>%
  mutate(certainty_rate.response = case_when(
    (block=="2" & is.na(certainty_rate.response)) ~ 0.5,
    (block=="2" & !is.na(certainty_rate.response)) ~ certainty_rate.response,
  ))

#replacing NA in expectedness rating by 0.5 assuming participants just didn't move the marker
data <- data %>%
  mutate(exp_rate1.response = case_when(
    (block=="1" & is.na(exp_rate1.response)) ~ 0.5,
    (block=="1" & !is.na(exp_rate1.response)) ~ exp_rate1.response,
  ))



#move certainty rating next to expectedness ratings
# subframe only expectedness ratings
data_exp <- data[is.na(data$certainty_rate.response),] %>% select(one_of('participant','item_no','list','condition','exp_rate1.response'))
# subframe only certainty ratings
data_certainty <- data[!is.na(data$certainty_rate.response),] %>% select(one_of('participant','item_no','list','condition','certainty_rate.response'))
# Merge the two frames: Data still including fillers and controls
data_final <- merge(x = data_exp, y = data_certainty, by = c("participant","item_no","list","condition"), all.x = TRUE)

data_final$exp_rate1.response <- as.numeric(data_final$exp_rate1.response)
data_final$certainty_rate.response <- as.numeric(data_final$certainty_rate.response)

#evaluating controls: means and standard deviations
#control c1 for expectedness block should be rather high
mean.c1_exp <- mean(data_final$exp_rate1.response[data_final$item_no=="c1"]) #NA for one control replaced by 0.5
sd.c1_exp <- sd(data_final$exp_rate1.response[data_final$item_no=="c1"])
#control c2 for expectedness block should be very low
mean.c2_exp <- mean(data_final$exp_rate1.response[data_final$item_no=="c2"])
sd.c2_exp <- sd(data_final$exp_rate1.response[data_final$item_no=="c2"])
#control c1 for certainty block should be rather low
mean.c1_cer <- mean(data_final$certainty_rate.response[data_final$item_no=="c1"])
sd.c1_cer <- sd(data_final$certainty_rate.response[data_final$item_no=="c1"])
#control c2 for certainty block should be very high
mean.c2_cer <- mean(data_final$certainty_rate.response[data_final$item_no=="c2"])
sd.c2_cer <- sd(data_final$certainty_rate.response[data_final$item_no=="c2"])

mean.c1_exp #.67
mean.c2_exp #.07
mean.c1_cer #.27
mean.c2_cer #.95

# plot responses to controls
theme_set(theme_bw()) 
controls <- droplevels(subset(data_final, item_no == "c1" | item_no == "c2"))
#view(controls)

ggplot(controls, aes(x=participant,y=certainty_rate.response)) +
  geom_point(shape=20, size=1, alpha=1,colour="black") +
  xlab("Participant") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ item_no)
# c2 seems to work as intended
# more variability on c1 (...She was annoyed by the film score. ...certain that she didn't like the ending of the movie?)

ggplot(controls, aes(x=participant,y=exp_rate1.response)) +
  geom_point(shape=20, size=1, alpha=1,colour="black") +
  xlab("Participant") +
  ylab("Expectedness rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ item_no)
# c2 seems to work as intended
# more variability on c1 (...Joy was bothered by something...what Joy didn't like about the movie?)

table(data_final$list)
#  1   2   3   4   5   6 
#180 180 180 180 180 180 


#2. creating the subset of excluded participants
excludedpersons_exp <- subset(data_final, (item_no == "c1" & exp_rate1.response < (mean.c1_exp-2*sd.c1_exp)|
                                         item_no == "c2" & exp_rate1.response > (mean.c2_exp+2*sd.c2_exp)))
length(unique(excludedpersons_exp$participant)) #10
excludedpersons_cer <- subset(data_final, (item_no == "c1" & certainty_rate.response > (mean.c1_cer+2*sd.c1_cer)|
                                        item_no == "c2" & certainty_rate.response < (mean.c2_cer-2*sd.c2_cer)))
length(unique(excludedpersons_cer$participant)) #13

excluded_data <- subset(data_final, participant %in% excludedpersons_exp$participant & 
                          participant %in% excludedpersons_cer$participant)
length(unique(excluded_data$participant)) #2
write.table(excluded_data, file="../data/preprocessed_data/excluded_data.csv", row.names = FALSE, col.names = TRUE, sep = ";")

#Exclude data from final data
`%notin%` <- Negate(`%in%`)
data_final <- subset(data_final, participant %notin% excluded_data$participant)
length(unique(data_final$participant)) #88

# participants excluded due to controls
nlevels(data_fin$participant) # JT: this doesn't run for me because data_fin is only created later
#-> 2 participants excluded: 88 left

nrow(data_final)
#delete fillers
data_fin <- data_final[(data_final$item_no!="f1" & data_final$item_no!="f2" & data_final$item_no!="f3"
                        & data_final$item_no!="f4" & data_final$item_no!="f5" & data_final$item_no!="c1"
                        & data_final$item_no!="c2"),]

colnames(data_fin) <- c("participant", "item_no", "list", "condition", "exp", "cer")

table(data_fin$list)

data_fin$pair = data_fin$item_no

data_fin$pair <- gsub("t23","aware2",data_fin$pair)
data_fin$pair <- gsub("t24","aware2",data_fin$pair)
data_fin$pair <- gsub("t26","aware3",data_fin$pair)
data_fin$pair <- gsub("t25","aware3",data_fin$pair)


data_fin$pair <- gsub("t12","discover2",data_fin$pair)
data_fin$pair <- gsub("t11","discover2",data_fin$pair)
data_fin$pair <- gsub("t13","discover3",data_fin$pair)
data_fin$pair <- gsub("t14","discover3",data_fin$pair)


data_fin$pair <- gsub("t10","know1",data_fin$pair)
data_fin$pair <- gsub("t28","know2",data_fin$pair)
data_fin$pair <- gsub("t27","know2",data_fin$pair)
data_fin$pair <- gsub("t29","know3",data_fin$pair)
data_fin$pair <- gsub("t30","know3",data_fin$pair)


data_fin$pair <- gsub("t15","realize2",data_fin$pair)
data_fin$pair <- gsub("t16","realize2",data_fin$pair)
data_fin$pair <- gsub("t18","realize3",data_fin$pair)
data_fin$pair <- gsub("t17","realize3",data_fin$pair)


data_fin$pair <- gsub("t20","notice2",data_fin$pair)
data_fin$pair <- gsub("t19","notice2",data_fin$pair)
data_fin$pair <- gsub("t21","notice3",data_fin$pair)
data_fin$pair <- gsub("t22","notice3",data_fin$pair)
data_fin$pair <- gsub("t5","discover1",data_fin$pair)
data_fin$pair <- gsub("t6","discover1",data_fin$pair)
data_fin$pair <- gsub("t4","notice1",data_fin$pair)
data_fin$pair <- gsub("t3","notice1",data_fin$pair)
data_fin$pair <- gsub("t1","realize1",data_fin$pair)
data_fin$pair <- gsub("t2","realize1",data_fin$pair)
data_fin$pair <- gsub("t9","know1",data_fin$pair)
data_fin$pair <- gsub("t8","aware1",data_fin$pair)
data_fin$pair <- gsub("t7","aware1",data_fin$pair)

data_fin$verb = data_fin$pair
data_fin$verb <- gsub("aware1","aware",data_fin$verb)
data_fin$verb <- gsub("aware2","aware",data_fin$verb)
data_fin$verb <- gsub("aware3","aware",data_fin$verb)
data_fin$verb <- gsub("discover1","discover",data_fin$verb)
data_fin$verb <- gsub("discover2","discover",data_fin$verb)
data_fin$verb <- gsub("discover3","discover",data_fin$verb)
data_fin$verb <- gsub("know1","know",data_fin$verb)
data_fin$verb <- gsub("know2","know",data_fin$verb)
data_fin$verb <- gsub("know3","know",data_fin$verb)
data_fin$verb <- gsub("notice1","notice",data_fin$verb)
data_fin$verb <- gsub("notice2","notice",data_fin$verb)
data_fin$verb <- gsub("notice3","notice",data_fin$verb)
data_fin$verb <- gsub("realize1","realize",data_fin$verb)
data_fin$verb <- gsub("realize2","realize",data_fin$verb)
data_fin$verb <- gsub("realize3","realize",data_fin$verb)


#creating new column for item name
data_fin$item_name = data_fin$item_no
#naming items by verb the x.1 versions are not-committed, x.2 are committed
data_fin$item_name <- gsub("t23","aware2.1",data_fin$item_name)
data_fin$item_name <- gsub("t24","aware2.2",data_fin$item_name)
data_fin$item_name <- gsub("t26","aware3.2",data_fin$item_name)
data_fin$item_name <- gsub("t25","aware3.1",data_fin$item_name)
data_fin$item_name <- gsub("t12","discover2.2",data_fin$item_name)
data_fin$item_name <- gsub("t11","discover2.1",data_fin$item_name)
data_fin$item_name <- gsub("t13","discover3.1",data_fin$item_name)
data_fin$item_name <- gsub("t14","discover3.2",data_fin$item_name)
data_fin$item_name <- gsub("t10","know1.1",data_fin$item_name)
data_fin$item_name <- gsub("t28","know2.2",data_fin$item_name)
data_fin$item_name <- gsub("t27","know2.1",data_fin$item_name)
data_fin$item_name <- gsub("t29","know3.1",data_fin$item_name)
data_fin$item_name <- gsub("t30","know3.2",data_fin$item_name)
data_fin$item_name <- gsub("t15","realize2.1",data_fin$item_name)
data_fin$item_name <- gsub("t16","realize2.2",data_fin$item_name)
data_fin$item_name <- gsub("t18","realize3.2",data_fin$item_name)
data_fin$item_name <- gsub("t17","realize3.1",data_fin$item_name)
data_fin$item_name <- gsub("t20","notice2.2",data_fin$item_name)
data_fin$item_name <- gsub("t19","notice2.1",data_fin$item_name)
data_fin$item_name <- gsub("t21","notice3.1",data_fin$item_name)
data_fin$item_name <- gsub("t22","notice3.2",data_fin$item_name)
data_fin$item_name <- gsub("t5","discover1.2",data_fin$item_name)
data_fin$item_name <- gsub("t6","discover1.1",data_fin$item_name)
data_fin$item_name <- gsub("t4","notice1.1",data_fin$item_name)
data_fin$item_name <- gsub("t3","notice1.2",data_fin$item_name)
data_fin$item_name <- gsub("t1","realize1.1",data_fin$item_name)
data_fin$item_name <- gsub("t2","realize1.2",data_fin$item_name)
data_fin$item_name <- gsub("t9","know1.2",data_fin$item_name)
data_fin$item_name <- gsub("t8","aware1.1",data_fin$item_name)
data_fin$item_name <- gsub("t7","aware1.2",data_fin$item_name)


#Save preprocessed data without fillers and controls
#data of two participants is excluded (this will be input for analysis)
write.table(data_fin, file="../data/preprocessed_data/data.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

#data without confounding items
d_no_confound <- data_fin[(data_fin$item_name!="aware1.1" & data_fin$item_name!="aware2.1" &
                             data_fin$item_name!="aware2.2" & data_fin$item_name!="aware3.2" &
                             data_fin$item_name!="aware3.1" & data_fin$item_name!="discover2.1" &
                             data_fin$item_name!="discover3.1" & data_fin$item_name!="realize2.1" &
                             data_fin$item_name!="notice2.2"),]

nrow(d_no_confound)
nrow(data_fin)

#save data without confounding items
write.table(d_no_confound, file="../data/preprocessed_data/d_no_confound.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

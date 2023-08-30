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
# -> 30 participants

#save participant data
demographics<- data_raw %>% select(one_of('participant','age_enter.text','gender_slider.response','lang_enter.text')) 
demographics<- demographics[!is.na(demographics$gender_slider.response) | 
                              !is.na(demographics$age_enter.text) | 
                              !is.na(demographics$lang_enter.text),]
write.table(demographics, file="../data/preprocessed_data/demographics.csv", row.names = FALSE, col.names = TRUE, sep = ";")

demographics$age_enter.text <- as.numeric(demographics$age_enter.text)

# calculate mean age
mean(demographics$age_enter.text)
# 39.43333

#filled in mean age for persons who did not enter age 
demographics <- demographics %>%  mutate(age_enter.text = case_when(
  (is.na(age_enter.text)) ~ mean(demographics$age_enter.text),
  (!is.na(age_enter.text)) ~ age_enter.text,
))



#age range
min(demographics$age_enter.text)
# 19
max(demographics$age_enter.text)
# 76
# Check genders, where 1= female, 2 = male, 3 = non-binary, 4 = other
table(demographics$gender_slider.response)
# 1  2  3  4  NA
# 11 18 1  0  0

nrow(demographics)

### End participant data

#Remove NA lines
data<- data_raw[!is.na(data_raw$item_no),]

#move certainty rating next to aboutness ratings
# subframe only aboutness ratings
data_about <- data[!is.na(data$position_prop),] %>% select(one_of('position_prop','participant','item_no','item_name','list','condition',
                                                                           'about_rate1.response','about_rate2.response'))
# subframe only certainty ratings
data_certainty <- data[is.na(data$position_prop),] %>% select(one_of('participant','item_no','item_name','list','condition','certainty_rate.response'))
# Merge the two frames: Data still including fillers and controls
data_final <- merge(x = data_about, y = data_certainty, by = c("participant","item_no","item_name","list","condition"), all.x = TRUE)

data_final$about_rate1.response <- as.numeric(data_final$about_rate1.response)
data_final$about_rate2.response <- as.numeric(data_final$about_rate2.response)
data_final$certainty_rate.response <- as.numeric(data_final$certainty_rate.response)




#remove columns which are of no use
d <- data_final%>% select(one_of('position_prop','participant','item_no','item_name','list','condition',
                                          'about_rate1.response','about_rate2.response','certainty_rate.response'))

#Swap aboutness ratings if order was reversed, i.e. [[0,-0.25],[0,-0.08]] in column position_prop
d$about1 = d$about_rate1.response
d$about2 = d$about_rate2.response

d <- d %>%
  mutate(about1 = case_when(
    (position_prop == "[[0,-0.25],[0,-0.08]]") ~ about_rate2.response,
    (position_prop != "[[0,-0.25],[0,-0.08]]") ~ about_rate1.response,
  ))

d <- d %>%
  mutate(about2 = case_when(
    (position_prop == "[[0,-0.25],[0,-0.08]]") ~ about_rate1.response,
    (position_prop != "[[0,-0.25],[0,-0.08]]") ~ about_rate2.response,
  ))


# on how many trials was the slider not moved?
summary(d)

#replacing NA in certainty rating by 0.5 assuming participants just didn't move the marker
d <- d %>%
  mutate(certainty_rate.response = case_when(
    (is.na(certainty_rate.response)) ~ 0.5,
    (!is.na(certainty_rate.response)) ~ certainty_rate.response,
  ))

#replacing NA in aboutness rating by 0.5 assuming participants just didn't move the marker
d <- d %>%
  mutate(about1 = case_when(
    (is.na(about1)) ~ 0.5,
    (!is.na(about1)) ~ about1,
  ))
d <- d %>%
  mutate(about2 = case_when(
    (is.na(about2)) ~ 0.5,
    (!is.na(about2)) ~ about2,
  ))


#evaluating controls: means and standard deviations
#control c1 should be rather high for about_rate1 
mean.c1_about1 <- mean(d$about1[d$item_no=="c1"]) 
mean.c1_about1 # 0.9010755
sd.c1_about1 <- sd(d$about1[d$item_no=="c1"])
#and very low for about_rate2
mean.c1_about2 <- mean(d$about2[d$item_no=="c1"]) 
mean.c1_about2 # 0.05393908
sd.c1_about2 <- sd(d$about2[d$item_no=="c1"])
#control c2 should be rather high for about_rate1
mean.c2_about1 <- mean(d$about1[d$item_no=="c2"])
mean.c2_about1 # 0.9149825
sd.c2_about1 <- sd(d$about1[d$item_no=="c2"])
#and very low for about_rate2
mean.c2_about2 <- mean(d$about2[d$item_no=="c2"])
mean.c2_about2 # 0.0924296
sd.c2_about2 <- sd(d$about2[d$item_no=="c2"])
#control c1 for certainty block should be rather low
mean.c1_cer <- mean(d$certainty_rate.response[d$item_no=="c1"])
mean.c1_cer # 0.2464776
sd.c1_cer <- sd(d$certainty_rate.response[d$item_no=="c1"])
#control c2 for certainty block should be very high
mean.c2_cer <- mean(d$certainty_rate.response[d$item_no=="c2"])
mean.c2_cer # 0.986699
sd.c2_cer <- sd(d$certainty_rate.response[d$item_no=="c2"])



# plot responses to controls
theme_set(theme_bw()) 
controls <- droplevels(subset(d, item_no == "c1" | item_no == "c2"))
#view(controls)

ggplot(controls, aes(x=participant,y=certainty_rate.response)) +
  geom_point(shape=20, size=1, alpha=1,colour="black") +
  xlab("Participant") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ item_no)
# c2 seems to work as intended
# more variability on c1 (... I am not sure, but possibly she was annoyed by the film score. ...certain that she annoyed by the film score?)



# aboutness1 controls
ggplot(controls, aes(x=participant,y=about1)) +
  geom_point(shape=20, size=1, alpha=1,colour="black") +
  xlab("Participant") +
  ylab("Aboutness rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ item_no)
# both c1 and c2 seem to work (with some variability)

# aboutness2 controls
ggplot(controls, aes(x=participant,y=about2)) +
  geom_point(shape=20, size=1, alpha=1,colour="black") +
  xlab("Participant") +
  ylab("Aboutness rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ item_no)
# both c1 and c2 seem to work


table(d$list)
# 1  2  3  4  5  6 
#60 60 60 60 60 60 

#Exclude data of participants who deviate more than 2 sd from mean of at least one control mean
# c1 expectedness: expected high, found variability
#view(subset(data_final, (item_no == "c1" & exp_rate1.response < (mean.c1_exp-2*sd.c1_exp)))) #5
# c2 expectedness: expected low, seems to work
#view(subset(data_final, (item_no == "c2" & exp_rate1.response > (mean.c2_exp+2*sd.c2_exp)))) #6
# c1 certainty: expected low, found variability
#view(subset(data_final, (item_no == "c1" & certainty_rate.response > (mean.c1_cer+2*sd.c1_cer)))) #7
# c2 certainty: expected high, seems to work
#view(subset(data_final, (item_no == "c2" & certainty_rate.response < (mean.c2_cer-2*sd.c2_cer)))) #6


# creating the subset of excluded participants
#aboutness block
excludedpersons_about <- subset(d, (item_no == "c1" & about1 < (mean.c1_about1-2*sd.c1_about1)|
                                         item_no == "c2" & about1 < (mean.c2_about1-2*sd.c2_about1)|
                                      item_no == "c1" & about2 > (mean.c1_about2+2*sd.c1_about2)|
                                      item_no == "c2" & about2 > (mean.c2_about2+2*sd.c2_about2)))
length(unique(excludedpersons_about$participant)) #4

#certainty block
excludedpersons_cer <- subset(d, (item_no == "c1" & certainty_rate.response > (mean.c1_cer+2*sd.c1_cer)|
                                        item_no == "c2" & certainty_rate.response < (mean.c2_cer-2*sd.c2_cer)))
length(unique(excludedpersons_cer$participant)) #3


excluded_data <- subset(d, participant %in% excludedpersons_about$participant | 
                          participant %in% excludedpersons_cer$participant)
length(unique(excluded_data$participant)) #5
write.table(excluded_data, file="../data/preprocessed_data/excluded_data.csv", row.names = FALSE, col.names = TRUE, sep = ";")

#Exclude data from final data
`%notin%` <- Negate(`%in%`)
d_fin <- subset(d, participant %notin% excluded_data$participant)
length(unique(d_fin$participant)) #25: 5 excluded



#delete fillers
d_final <- d_fin[(d_fin$item_name!="filler"),]
data_final <- d_final%>% select(one_of('participant','item_no','item_name','list','condition',
                            'about1','about2','certainty_rate.response'))


colnames(data_final) <- c("participant", "item_no", "item_name", "list", "condition", "about1", "about2", "cer")

table(data_final$list)

data_final$pair = data_final$item_no

data_final$pair <- gsub("t23","aware2",data_final$pair)
data_final$pair <- gsub("t24","aware2",data_final$pair)
data_final$pair <- gsub("t26","aware3",data_final$pair)
data_final$pair <- gsub("t25","aware3",data_final$pair)


data_final$pair <- gsub("t12","discover2",data_final$pair)
data_final$pair <- gsub("t11","discover2",data_final$pair)
data_final$pair <- gsub("t13","discover3",data_final$pair)
data_final$pair <- gsub("t14","discover3",data_final$pair)


data_final$pair <- gsub("t10","know1",data_final$pair)
data_final$pair <- gsub("t28","know2",data_final$pair)
data_final$pair <- gsub("t27","know2",data_final$pair)
data_final$pair <- gsub("t29","know3",data_final$pair)
data_final$pair <- gsub("t30","know3",data_final$pair)


data_final$pair <- gsub("t15","realize2",data_final$pair)
data_final$pair <- gsub("t16","realize2",data_final$pair)
data_final$pair <- gsub("t18","realize3",data_final$pair)
data_final$pair <- gsub("t17","realize3",data_final$pair)


data_final$pair <- gsub("t20","notice2",data_final$pair)
data_final$pair <- gsub("t19","notice2",data_final$pair)
data_final$pair <- gsub("t21","notice3",data_final$pair)
data_final$pair <- gsub("t22","notice3",data_final$pair)
data_final$pair <- gsub("t5","discover1",data_final$pair)
data_final$pair <- gsub("t6","discover1",data_final$pair)
data_final$pair <- gsub("t4","notice1",data_final$pair)
data_final$pair <- gsub("t3","notice1",data_final$pair)
data_final$pair <- gsub("t1","realize1",data_final$pair)
data_final$pair <- gsub("t2","realize1",data_final$pair)
data_final$pair <- gsub("t9","know1",data_final$pair)
data_final$pair <- gsub("t8","aware1",data_final$pair)
data_final$pair <- gsub("t7","aware1",data_final$pair)

data_final$verb = data_final$pair
data_final$verb <- gsub("aware1","aware",data_final$verb)
data_final$verb <- gsub("aware2","aware",data_final$verb)
data_final$verb <- gsub("aware3","aware",data_final$verb)
data_final$verb <- gsub("discover1","discover",data_final$verb)
data_final$verb <- gsub("discover2","discover",data_final$verb)
data_final$verb <- gsub("discover3","discover",data_final$verb)
data_final$verb <- gsub("know1","know",data_final$verb)
data_final$verb <- gsub("know2","know",data_final$verb)
data_final$verb <- gsub("know3","know",data_final$verb)
data_final$verb <- gsub("notice1","notice",data_final$verb)
data_final$verb <- gsub("notice2","notice",data_final$verb)
data_final$verb <- gsub("notice3","notice",data_final$verb)
data_final$verb <- gsub("realize1","realize",data_final$verb)
data_final$verb <- gsub("realize2","realize",data_final$verb)
data_final$verb <- gsub("realize3","realize",data_final$verb)


#Save preprocessed data without fillers and controls
#data of two participants is excluded (this will be input for analysis)
write.table(data_final, file="../data/preprocessed_data/data.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

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
# -> 40 participants

#save participant data
demographics<- data_raw %>% select(one_of('participant','age_enter.text','gender_slider.response','lang_enter.text')) 
demographics<- demographics[!is.na(demographics$gender_slider.response) | 
                              !is.na(demographics$age_enter.text) | 
                              !is.na(demographics$lang_enter.text),]
write.table(demographics, file="../data/preprocessed_data/demographics.csv", row.names = FALSE, col.names = TRUE, sep = ";")

demographics$age_enter.text <- as.numeric(demographics$age_enter.text)

# calculate mean age
mean(demographics$age_enter.text)
# 34.95

#filled in mean age for persons who did not enter age 
demographics <- demographics %>%  mutate(age_enter.text = case_when(
  (is.na(age_enter.text)) ~ mean(demographics$age_enter.text),
  (!is.na(age_enter.text)) ~ age_enter.text,
))



#age range
min(demographics$age_enter.text)
# 20
max(demographics$age_enter.text)
# 63
# Check genders, where 1= female, 2 = male, 3 = non-binary, 4 = other
table(demographics$gender_slider.response)
#  1  2  3 
# 22 14  1

nrow(demographics)

### End participant data

#Remove NA lines
data<- data_raw[!is.na(data_raw$item),]

#move continuation rating next to q expectedness ratings
# subframe only exp ratings
data_about <- data[!is.na(data$position_prop),] %>% select(one_of('position_prop','participant','item','list','condition',
                                                                           'about_rate1.response','about_rate2.response'))
# subframe only certainty ratings
data_continue <- data[is.na(data$position_prop),] %>% select(one_of('participant','item','list','condition','continue_rate.response'))
# Merge the two frames: Data still including fillers and controls
data_final <- merge(x = data_about, y = data_continue, by = c("participant","item","list","condition"), all.x = TRUE)

data_final$about_rate1.response <- as.numeric(data_final$about_rate1.response)
data_final$about_rate2.response <- as.numeric(data_final$about_rate2.response)
data_final$continue_rate.response <- as.numeric(data_final$continue_rate.response)




#remove columns which are of no use
d <- data_final%>% select(one_of('position_prop','participant','item','list','condition',
                                          'about_rate1.response','about_rate2.response','continue_rate.response'))

#Swap expectedness ratings if order was reversed, i.e. [[0,-0.25],[0,-0.08]] in column position_prop
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
  mutate(continue_rate.response = case_when(
    (is.na(continue_rate.response)) ~ 0.5,
    (!is.na(continue_rate.response)) ~ continue_rate.response,
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



#delete fillers
d_final <- d[(d$condition!="filler"),]
data_final <- d_final%>% select(one_of('participant','item','list','condition',
                            'about1','about2','continue_rate.response'))


colnames(data_final) <- c("participant", "item", "list", "condition", "exp1", "exp2", "continue")

table(data_final$list)

#Save preprocessed data without fillers and controls
#data of two participants is excluded (this will be input for analysis)
write.table(data_final, file="../data/preprocessed_data/data.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

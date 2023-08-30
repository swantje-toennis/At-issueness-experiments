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
# -> 20 participants

#save participant data
demographics<- data_raw %>% select(one_of('participant','age_enter.text','gender_slider.response','lang_enter.text')) 
demographics<- demographics[!is.na(demographics$gender_slider.response) | 
                              !is.na(demographics$age_enter.text) | 
                              !is.na(demographics$lang_enter.text),]
write.table(demographics, file="../data/preprocessed_data/demographics.csv", row.names = FALSE, col.names = TRUE, sep = ";")

demographics$age_enter.text <- as.numeric(demographics$age_enter.text)

# calculate mean age
mean(demographics$age_enter.text)
# 38.15

#filled in mean age for persons who did not enter age 
demographics <- demographics %>%  mutate(age_enter.text = case_when(
  (is.na(age_enter.text)) ~ mean(demographics$age_enter.text),
  (!is.na(age_enter.text)) ~ age_enter.text,
))



#age range
min(demographics$age_enter.text)
# 24
max(demographics$age_enter.text)
# 66
# Check genders, where 1= female, 2 = male, 3 = non-binary, 4 = other
table(demographics$gender_slider.response)
#  1  2  3  4 
# 12  7  0  0

nrow(demographics) #-> 20

### End participant data

#Remove NA lines
data<- data_raw[!is.na(data_raw$item),]

#create new columns for responses
data$exp1 <- data$exp1.response #at-issue question
data$exp2 <- data$exp2.response #not-at-issue question
data$pref <- data$pref.response

#Swap exp1 and exp2 if position_prop = [[0,-0.25],[0,-0.08]]
data <- data %>%
  mutate(exp1 = case_when(
    (position_prop == "[[0,-0.25],[0,-0.08]]") ~ exp2.response,
    (position_prop != "[[0,-0.25],[0,-0.08]]") ~ exp1.response,
  ))

data <- data %>%
  mutate(exp2 = case_when(
    (position_prop == "[[0,-0.25],[0,-0.08]]") ~ exp1.response,
    (position_prop != "[[0,-0.25],[0,-0.08]]") ~ exp2.response,
  ))

#Swap polarity of preference ratings if position_prop2 = [[0,-0.1],[0,0]]
#negative value means mc at-issue better
#positive value means rc at-issue better
data <- data %>%
  mutate(pref = case_when(
    (position_prop2 == "[[0,-0.1],[0,0]]") ~ -pref.response,
    (position_prop2 != "[[0,-0.1],[0,0]]") ~ pref.response,
  ))

#move preference rating next to q expectedness ratings
# subframe only exp ratings
data_exp <- data[!is.na(data$position_prop),] %>% select(one_of('participant','item','list','exp1','exp2'))
# subframe only certainty ratings
data_pref <- data[!is.na(data$position_prop2),] %>% select(one_of('participant','item','list','pref'))
# Merge the two frames: Data still including fillers and controls
d <- merge(x = data_exp, y = data_pref, by = c("participant","item","list"), all.x = TRUE)

d$exp1 <- as.numeric(d$exp1)
d$exp2 <- as.numeric(d$exp2)
d$pref <- as.numeric(d$pref)


# on how many trials was the slider not moved?
summary(d)

#replacing NA in exp1 and exp2 rating by 0.5 
#assuming participants just didn't move the slider
d <- d %>%
  mutate(exp1 = case_when(
    (is.na(exp1)) ~ 0.5,
    (!is.na(exp1)) ~ exp1,
  ))

d <- d %>%
  mutate(exp2 = case_when(
    (is.na(exp2)) ~ 0.5,
    (!is.na(exp2)) ~ exp2,
  ))

#replacing NA in pref rating by 0 
#assuming participants just didn't move the slider
d <- d %>%
  mutate(pref = case_when(
    (is.na(pref)) ~ 0,
    (!is.na(pref)) ~ pref,
  ))


#Save preprocessed data without fillers and controls
#data of two participants is excluded (this will be input for analysis)
write.table(d, file="../data/preprocessed_data/data.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

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
#   1  2  3 
#  13 24  2

nrow(demographics)

### End participant data

#Remove NA lines
data<- data_raw[!is.na(data_raw$condition) | !is.na(data_raw$explanation_enter.text),]

nlevels(data$participant) 
# still 40 (1 person did not provide an explanation: participant 435970)

#move ratings into one line. Order: expectedness, certainty, explanation
# subframe only exp ratings
data_exp <- data[!is.na(data$exp.response),] %>% select(one_of('participant','condition','exp.response'))
# subframe only certainty ratings
data_cer <- data[!is.na(data$certainty_rate.response),] %>% select(one_of('participant','condition','certainty_rate.response'))
# subframe only explanations
data_explanation <- data[!is.na(data$explanation_enter.text),] %>% select(one_of('participant','explanation_enter.text'))

# Merge data_exp and data_cer
data_final <- merge(x = data_exp, y = data_cer, by = c("participant", "condition"), all.x = TRUE)

# Merge data_final and data_explanation
d <- merge(x = data_final, y = data_explanation, by = c("participant"), all.x = TRUE)

d$exp.response <- as.numeric(d$exp.response)
d$certainty_rate.response <- as.numeric(d$certainty_rate.response)



# on how many trials was the slider not moved?
summary(d)

#replacing NA in certainty rating by 0.5 assuming participants just didn't move the marker
d <- d %>%
  mutate(certainty_rate.response = case_when(
    (is.na(certainty_rate.response)) ~ 0.5,
    (!is.na(certainty_rate.response)) ~ certainty_rate.response,
  ))

#replacing NA in exp rating by 0.5 assuming participants just didn't move the marker
d <- d %>%
  mutate(exp.response = case_when(
    (is.na(exp.response)) ~ 0.5,
    (!is.na(exp.response)) ~ exp.response,
  ))

#replacing NA in explanation by "no explanation given"
d <- d %>%
  mutate(explanation_enter.text = case_when(
    (is.na(explanation_enter.text)) ~ "no explanation given",
    (!is.na(explanation_enter.text)) ~ explanation_enter.text,
  ))



colnames(d) <- c("participant","condition", "exp", "cer", "explanation")

table(d$condition)

d$exp <- as.numeric(d$exp)
d$cer <- as.numeric(d$cer)

#Save preprocessed data without fillers and controls
#data of two participants is excluded (this will be input for analysis)
write.table(d, file="../data/preprocessed_data/data.csv",
            row.names = FALSE, col.names = TRUE, sep = ";")

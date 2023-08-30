# set working directory to directory of script
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

# Load libraries
library(readr)
library(lme4)
library(tidyverse)
library(ggrepel)
library(lsmeans)
library(lmerTest)
theme_set(theme_bw()) 


########################################################
source("C:/Arbeit/R statistics/helpers.r")

#### load data ###########
data <- read.csv("../data/preprocessed_data/data.csv", sep = ";")
nrow(data) #40 10 per list
length(unique(data$participant))
summary(data)
table(data$list)
#### Interpret exp (expectedness rating) as factor and continue (continuetainty rating) as numbers
data$exp1<-as.numeric(data$exp1)
data$exp2<-as.numeric(data$exp2)
data$continue<-as.numeric(data$continue)

data$at_issue <- data$condition

data <- data %>%
  mutate(at_issue = case_when(
    (at_issue == "look_ai" | at_issue == "food_ai") ~ "at-issue",
    (at_issue == "look_nai" | at_issue == "food_nai") ~ "not at-issue",
  ))

data$item_type <- data$condition

data <- data %>%
  mutate(item_type = case_when(
    (condition == "look_ai" | condition == "look_nai") ~ "look",
    (condition == "food_ai" | condition == "food_nai") ~ "food",
  ))


data$exp_match <- data$condition

data <- data %>%
  mutate(exp_match = case_when(
    (condition == "look_ai" | condition == "look_nai") ~ exp1,
    (condition == "food_ai" | condition == "food_nai") ~ exp2,
  ))

data$exp_mismatch <- data$condition

data <- data %>%
  mutate(exp_mismatch = case_when(
    (condition == "look_ai" | condition == "look_nai") ~ exp2,
    (condition == "food_ai" | condition == "food_nai") ~ exp1,
  ))

mean(data$exp_match)
mean(data$exp_mismatch)
sd(data$exp_match)
sd(data$exp_mismatch)
q_type <- c("match", "mismatch")
exp <- c(mean(data$exp_match), mean(data$exp_mismatch))
sd <- c(sd(data$exp_match), sd(data$exp_mismatch))

df <- data.frame(q_type, exp, sd)

# Expectedness by context question (mis)match
ggplot(df, aes(x=q_type, y=exp)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  geom_errorbar(aes(x=q_type, ymin=exp-sd, ymax=exp+sd), width=0.25) +
  xlab("Context-question match") +
  ylab("Expectedness rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(-0.01,1.1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #facet_wrap(. ~ at_issue)
ggsave("../graphs/exp_by_q_type.png",height=4,width=5)

#correlation between expectedness of matching question (exp_match) and continue
ggplot(data, aes(x=exp_match, y=continue)) +
  geom_point(shape=20, size=5, alpha=.3,colour="blue") +
  #geom_errorbar(aes(x=item_no, ymin=Mean.exp1-sd.exp1, ymax=Mean.exp1+sd.exp1), width=0.25) +
  xlab("Expectedness for matching question") +
  ylab("Continuation rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ at_issue)

#correlation between expectedness of mismatching question (exp_mismatch) and continue
ggplot(data, aes(x=exp_mismatch, y=continue)) +
  geom_point(shape=20, size=5, alpha=.3,colour="blue") +
  #geom_errorbar(aes(x=item_no, ymin=Mean.exp1-sd.exp1, ymax=Mean.exp1+sd.exp1), width=0.25) +
  xlab("Expectedness for matching question") +
  ylab("Continuation rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ at_issue)


issue1.item = data %>%
  group_by(at_issue) %>%
  summarize(Mean.cont = mean(continue), sd.cont = sd(continue)) %>%
  ungroup()

#Plot continuation rating depending on at-issueness (mis)match
ggplot(issue1.item, aes(x=at_issue, y=Mean.cont)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  geom_errorbar(aes(x=at_issue, ymin=Mean.cont-sd.cont, ymax=Mean.cont+sd.cont), width=0.25) +
  xlab("At-issueness") +
  ylab("Continuation rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #facet_wrap(. ~ condition)
ggsave("../graphs/continue_by_at_issue.png",height=4,width=4)

type1.item = data %>%
  group_by(item_type) %>%
  summarize(Mean.exp1 = mean(exp1), sd.exp1 = sd(exp1)) %>%
  ungroup()

#Plot exp1 (Where is Peter?) depending on item type
ggplot(type1.item, aes(x=item_type, y=Mean.exp1)) +
  geom_point(shape=20, size=5, alpha=.3,colour="blue") +
  geom_errorbar(aes(x=item_type, ymin=Mean.exp1-sd.exp1, ymax=Mean.exp1+sd.exp1), width=0.25) +
  xlab("Item type") +
  ylab("Expectedness rating of Where is Peter?") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
#facet_wrap(. ~ condition)
ggsave("../graphs/q_loc_by_item_type.png",height=4,width=4)

type2.item = data %>%
  group_by(item_type) %>%
  summarize(Mean.exp2 = mean(exp2), sd.exp2 = sd(exp2)) %>%
  ungroup()

#Plot exp2 (What does Peter like?) depending on item type
ggplot(type2.item, aes(x=item_type, y=Mean.exp2)) +
  geom_point(shape=20, size=5, alpha=.3,colour="blue") +
  geom_errorbar(aes(x=item_type, ymin=Mean.exp2-sd.exp2, ymax=Mean.exp2+sd.exp2), width=0.25) +
  xlab("Item type") +
  ylab("Expectedness rating of What does Peter like?") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
#facet_wrap(. ~ condition)
ggsave("../graphs/q_like_by_item_type.png",height=4,width=4)













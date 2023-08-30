# set working directory to directory of script
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

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
nrow(data) #40 = 40 participants x 1 target item
summary(data)
table(data$condition)
#### Interpret exp (expectedness rating) as factor and continue (continuetainty rating) as numbers
data$exp<-as.numeric(data$exp)
data$cer<-as.numeric(data$cer)

#Plot means
means.exp = data %>%
  group_by(condition) %>%
  summarize(Mean.exp = mean(exp), sd.exp = sd(exp)) %>%
  ungroup()

means.cer = data %>%
  group_by(condition) %>%
  summarize(Mean.cer = mean(cer), sd.cer = sd(cer)) %>%
  ungroup()



# plot expectedness ratings by condition
ggplot(means.exp, aes(x=condition, y=Mean.exp)) +
  geom_point(shape=20, size=5, alpha=0.4,colour="blue") +
  geom_point(data = data, aes(x=condition, y=exp)) +
  geom_errorbar(aes(x=condition, ymin=Mean.exp-sd.exp, ymax=Mean.exp+sd.exp), width=0.25) +
  xlab("Condition") +
  ylab("Expectedness rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(-0.01,1.1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #facet_wrap(. ~ at_issue)
ggsave("../graphs/exp_by_condition.png",height=4,width=5)

# plot certainty ratings by condition
ggplot(means.cer, aes(x=condition, y=Mean.cer)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  geom_point(data=data, aes(x=condition,y=cer))+
  geom_errorbar(aes(x=condition, ymin=Mean.cer-sd.cer, ymax=Mean.cer+sd.cer), width=0.25) +
  xlab("Condition") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(-0.01,1.1)) +
  theme(panel.spacing.x = unit(4, "mm"))
ggsave("../graphs/cer_by_condition.png",height=4,width=5)

#plot correlation between exp and cer
ggplot(data, aes(x=exp, y=cer)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  #geom_errorbar(aes(x=condition, ymin=mean(exp)-sd(exp), ymax=mean(exp)+sd(exp)), width=0.25) +
  xlab("Expectedness rating") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(-0.01,1)) +
  theme(panel.spacing.x = unit(4, "mm"))
ggsave("../graphs/correlation_exp_cer.png",height=4,width=5)

#plot correlation between exp and cer, by condition
ggplot(data, aes(x=exp, y=cer)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  #geom_errorbar(aes(x=condition, ymin=mean(exp)-sd(exp), ymax=mean(exp)+sd(exp)), width=0.25) +
  xlab("Expectedness rating") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(-0.01,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ condition)
ggsave("../graphs/correlation_exp_cer_by_condition.png",height=4,width=5)


issue1.item = data %>%
  group_by(at_issue) %>%
  summarize(Mean.cont = mean(continue), sd.cont = sd(continue)) %>%
  ungroup()

#Plot continuation rating depending on exp1 (Where is Peter?)
ggplot(issue1.item, aes(x=at_issue, y=Mean.cont)) +
  geom_point(shape=20, size=5, alpha=1,colour="blue") +
  geom_errorbar(aes(x=at_issue, ymin=Mean.cont-sd.cont, ymax=Mean.cont+sd.cont), width=0.25) +
  xlab("At-issueness") +
  ylab("Continuation rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #facet_wrap(. ~ condition)
ggsave("../graphs/certainty_by_at_issue.png",height=4,width=4)





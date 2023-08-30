# set working directory to directory of script
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

# load libraries
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
nrow(data) #440 = 88 participants x 5 target items
length(unique(data$participant))
summary(data)
table(data$list)
#### Interpret exp (expectedness rating) as factor and cer (certainty rating) as numbers
data$exp<-as.numeric(data$exp)
data$cer<-as.numeric(data$cer)

## plot mean certainty and mean expectedness ratings separately for the items 
#expectedness mean per item
exp.item = data %>%
  group_by(item_no,condition) %>%
  summarize(Mean.exp = mean(exp), sd.exp = sd(exp)) %>%
  ungroup() %>%
  mutate(item_no = fct_reorder(as.factor(item_no),Mean.exp))

summary(exp.item)
summary(data)
table(data$condition)

ggplot(exp.item, aes(x=item_no, y=Mean.exp)) +
  geom_point(shape=20, size=1, alpha=1,colour="blue") +
  geom_errorbar(aes(x=item_no, ymin=Mean.exp-sd.exp, ymax=Mean.exp+sd.exp), width=0.25) +
  xlab("Item") +
  ylab("Expectedness rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ condition)


#certainty mean per item
cer.item = data %>%
  group_by(item_no,condition) %>%
  summarize(Mean.cer = mean(cer), sd.cer = sd(cer)) %>%
  ungroup() %>%
  mutate(item_no = fct_reorder(as.factor(item_no),Mean.cer))

ggplot(cer.item, aes(x=item_no, y=Mean.cer)) +
  geom_point(shape=20, size=1, alpha=1,colour="blue") +
  geom_errorbar(aes(x=item_no, ymin=Mean.cer-sd.cer, ymax=Mean.cer+sd.cer), width=0.25) +
  xlab("Item") +
  ylab("Certainty rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  facet_wrap(. ~ condition)

# Figure 1 in XPrag abstract
#Plot of correlation between expectedness and certainty
ggplot(data, aes(x=exp, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab(expression("Expectedness rating of Q"[CC]))+
  ylab(expression(paste("Certainty rating of CC under ", italic("perhaps")))) +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1)
#facet_wrap(. ~ item_no)
ggsave("../graphs/correlation_exp_cer.png",height=3,width=4)

# Figure 2 in XPrag abstract
#Plot of correlation between expectedness and certainty by item
ggplot(data, aes(x=exp, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab(expression("Expectedness rating of Q"[CC]))+
  ylab(expression(paste("Certainty rating of CC under ", italic("perhaps")))) +
  #ggtitle("...") +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) +
  facet_wrap(. ~ item_name)
ggsave("../graphs/correlation_exp_cer_by_item.png",height=5.4,width=5)

#####################################################
##### Graphs for data without confounding items ##### 

#### load data without confounding items ###########
d_no_confound <- read.csv("../data/preprocessed_data/d_no_confound.csv", sep = ";")
nrow(d_no_confound) #308
table(d_no_confound$list)


#### Interpret exp (expectedness rating) as factor and cer (certainty rating) as numbers
d_no_confound$exp<-as.numeric(d_no_confound$exp)
d_no_confound$cer<-as.numeric(d_no_confound$cer)

#Plot of correlation between expectedness and certainty without confounds
ggplot(d_no_confound, aes(x=exp, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating") +
  ylab("Certainty rating") +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1)
#facet_wrap(. ~ item_no)
ggsave("../graphs/correlation_exp_cer_no_confound.png",height=3,width=4)

#Plot of correlation between expectedness and certainty by item
#without confound
ggplot(d_no_confound, aes(x=exp, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating") +
  ylab("Certainty rating") +
  #ggtitle("...") +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) +
  facet_wrap(. ~ item_name)
ggsave("../graphs/correlation_exp_cer_by_item_no_confound.png",height=5.4,width=5)

### End graphs without confounding items #########
##################################################





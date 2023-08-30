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
nrow(data) #150 = 30 participants x 5 target items
length(unique(data$participant))
summary(data)
table(data$list)
#### Interpret exp (expectedness rating) as factor and cer (certainty rating) as numbers
data$about1<-as.numeric(data$about1)
data$about2<-as.numeric(data$about2)
data$cer<-as.numeric(data$cer)

#add column for the difference between aboutness rating 1 and 2
# about1 = person main clause, about2 = person complement clause
# if difference is high, rating for complement person is higher.
# if difference is very low (towards -1), rating for main clause person is higher
# if it is around 0 the ratings for the two persons were similar
data$diff = data$about2-data$about1
data$rel_diff = 2*data$about2-data$about1
#data$ratio = data$about2/data$about1

#Plot about2 (complement person) depending on about1 (main clause person) 
ggplot(data, aes(x=about1, y=about2)) +
  geom_jitter(shape=20, size=5, alpha=.3,colour="blue") +
  #geom_errorbar(aes(x=item_no, ymin=Mean.about1-sd.about1, ymax=Mean.about1+sd.about1), width=0.25) +
  xlab("Aboutness rating main clause") +
  ylab("Aboutness rating complement person") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
#facet_wrap(. ~ condition)


## plot mean certainty and mean aboutness1 ratings separately for the items 
#aboutness1 mean per item
about1.item = data %>%
  group_by(item_no,condition) %>%
  summarize(Mean.about1 = mean(about1), sd.about1 = sd(about1)) %>%
  ungroup() %>%
  mutate(item_no = fct_reorder(as.factor(item_no),Mean.about1))

summary(about1.item)

ggplot(about1.item, aes(x=item_no, y=Mean.about1)) +
  geom_point(shape=20, size=1, alpha=1,colour="blue") +
  geom_errorbar(aes(x=item_no, ymin=Mean.about1-sd.about1, ymax=Mean.about1+sd.about1), width=0.25) +
  xlab("Item") +
  ylab("Aboutness main clause rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #facet_wrap(. ~ condition)

#aboutness2 mean per item
about2.item = data %>%
  group_by(item_no,condition) %>%
  summarize(Mean.about2 = mean(about2), sd.about2 = sd(about2)) %>%
  ungroup() %>%
  mutate(item_no = fct_reorder(as.factor(item_no),Mean.about2))

summary(about2.item)

ggplot(about2.item, aes(x=item_no, y=Mean.about2)) +
  geom_point(shape=20, size=1, alpha=1,colour="blue") +
  geom_errorbar(aes(x=item_no, ymin=Mean.about2-sd.about2, ymax=Mean.about2+sd.about2), width=0.25) +
  xlab("Item") +
  ylab("Aboutness compl clause rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm"))

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


#Plot of correlation between aboutness 1 of main clause person and certainty
ggplot(data, aes(x=about1, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating main clause person") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_x_continuous(breaks=c(0,0.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) #+
  #facet_wrap(. ~ item_no)
ggsave("../graphs/correlation_main_cl_cer.png",height=3,width=4)

#Plot of correlation between aboutness 2 of complement clause person and certainty
ggplot(data, aes(x=about2, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating complement clause person") +
  ylab("Certainty rating") +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_x_continuous(breaks=c(0,0.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) #+
#facet_wrap(. ~ item_no)
ggsave("../graphs/correlation_compl_cl_cer.png",height=3,width=4)

#Plot of correlation between difference of two aboutness ratings and certainty
ggplot(data, aes(x=diff, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Difference between the two expectedness ratings") +
  ylab("Certainty rating") #+
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_x_continuous(breaks=c(0,0.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) #+
  #coord_fixed(ratio = 1) #+
#facet_wrap(. ~ item_no)
ggsave("../graphs/correlation_difference_cer.png",height=3,width=4)


#Plot correlation between about1/about2 (complement person) and certainty for subset of data:
#when complement is above 0.5 and main clause is below 0.5
#or complement is below 0.5 and main clause is above 0.5
data_q <- subset(data, ((about1 > 0.5 & about2 < 0.5) | (about1 < 0.5 & about2 > 0.5)))
nrow(data_q)
nrow(data)


#about1 - main clause
ggplot(data_q, aes(x=about1, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating main clause person") +
  ylab("Certainty rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_x_continuous(breaks=c(0,0.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1)
#about2 - complement
ggplot(data_q, aes(x=diff, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating complement clause person") +
  ylab("Certainty rating") +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_x_continuous(breaks=c(0,0.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1)

#Plot of correlation between expectedness for main clause
#clause person and certainty by item
ggplot(data, aes(x=about1, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating main clause person") +
  ylab("Certainty rating") +
  #ggtitle("...") +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) +
  facet_wrap(. ~ item_name)
ggsave("../graphs/correlation_main_clause_cer_by_item.png",height=5.4,width=5)

#Plot of correlation between expectedness for complement clause
# person and certainty by item
ggplot(data, aes(x=about2, y=cer)) +
  geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=1, alpha=.3,colour="black") +
  xlab("Expectedness rating complement clause person") +
  ylab("Certainty rating") +
  #ggtitle("...") +
  scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  theme(panel.spacing.x = unit(4, "mm")) +
  coord_fixed(ratio = 1) +
  facet_wrap(. ~ item_name)
ggsave("../graphs/correlation_compl_clause_cer_by_item.png",height=5.4,width=5)




#Plot of aboutness1 (main clause) mean rating by commitment item pair
exp.item.pair1 = data %>%
  group_by(pair,item_no,condition) %>%
  summarize(Mean = mean(about1)) %>%
  ungroup() %>%
  mutate(item_new = fct_reorder(as.factor(item_no),Mean)) 

theme_set(theme_bw())
ggplot(exp.item.pair1, aes(x=condition, y=Mean)) +
  #geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=2, alpha=1,colour="black") +
  xlab("Item pair") +
  ylab("Aboutness mean main clause") +
  #scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #theme(panel.spacing.x = unit(4, "mm")) +
  #coord_fixed(ratio = 1) 
  facet_wrap(. ~ pair)

#Plot of aboutness2 (complement clause) mean rating by commitment item pair
exp.item.pair2 = data %>%
  group_by(pair,item_no,condition) %>%
  summarize(Mean = mean(about2)) %>%
  ungroup() %>%
  mutate(item_new = fct_reorder(as.factor(item_no),Mean)) 

theme_set(theme_bw())
ggplot(exp.item.pair2, aes(x=condition, y=Mean)) +
  #geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=2, alpha=1,colour="black") +
  xlab("Item pair") +
  ylab("Aboutness mean complement clause") +
  #scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #theme(panel.spacing.x = unit(4, "mm")) +
  #coord_fixed(ratio = 1) 
  facet_wrap(. ~ pair)

#Plot of certainty mean rating by commitment item pair
cer.item.pair = data %>%
  group_by(pair,item_no,condition) %>%
  summarize(Mean = mean(cer)) %>%
  ungroup() %>%
  mutate(item_new = fct_reorder(as.factor(item_no),Mean)) 

ggplot(cer.item.pair, aes(x=condition, y=Mean)) +
  #geom_smooth(method="lm",colour="black") +
  geom_point(shape=20, size=2, alpha=1,colour="black") +
  xlab("Item pair") +
  ylab("Certainty mean") +
  #scale_x_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #scale_y_continuous(breaks=c(0,.5,1),labels=c("0",".5","1"), limits = c(0,1)) +
  #theme(panel.spacing.x = unit(4, "mm")) +
  #coord_fixed(ratio = 1) 
  facet_wrap(. ~ pair)




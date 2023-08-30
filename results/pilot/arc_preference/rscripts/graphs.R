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
nrow(data) #20 
summary(data)
table(data$list)
# 10 per list
#### Interpret exp (expectedness rating) and pref (preference rating) as numeric
data$exp1<-as.numeric(data$exp1) #exp1 = at-issue question
data$exp2<-as.numeric(data$exp2) #exp2 = not-at-issue question
data$pref<-as.numeric(data$pref) 
#negative pref value means mc at-issue better
#positive value means rc at-issue better

data$Q_where <- data$exp1
data$Q_food <- data$exp2
data <- data %>%
  mutate(Q_where = case_when(
    (item == "t2") ~ exp2,
    (item == "t1") ~ exp1,
  ))

data <- data %>%
  mutate(Q_food = case_when(
    (item == "t2") ~ exp1,
    (item == "t1") ~ exp2,
  ))

data <- data %>%
  mutate(item = case_when(
    (item == "t2") ~ "(5b)",
    (item == "t1") ~ "(5a)",
  ))

#expectedness means by context for question "Where is Peter?" 
means.q_where = data %>%
  group_by(item) %>%
  summarize(Mean.Q_where = mean(Q_where), CILow=ci.low(Q_where),CIHigh=ci.high(Q_where))%>%
  ungroup() %>%
  mutate(YMin=Mean.Q_where-CILow,YMax=Mean.Q_where+CIHigh)
#add column for question
means.q_where$question <- "Where is Peter?"

#expectedness means by context for question "What food does Peter like?" 
means.q_food = data %>%
  group_by(item) %>%
  summarize(Mean.Q_food = mean(Q_food), CILow=ci.low(Q_food),CIHigh=ci.high(Q_food))%>%
  ungroup() %>%
  mutate(YMin=Mean.Q_food-CILow,YMax=Mean.Q_food+CIHigh)
#add column for question
means.q_food$question <- "What food does Peter like?"

# Expectedness means by context and question (in XPrag Poster)
ggplot() +
  geom_point(data = means.q_where, aes(x = item, y = Mean.Q_where), alpha = 1, shape=16, color="blue", size=4)+
  geom_text(data = means.q_where, aes(x = item, y = Mean.Q_where, label = question, vjust=3))+
  geom_errorbar(data = means.q_where, aes(x = item, ymin=YMin,ymax=YMax),width=.05,color="black") +
  geom_point(data = means.q_food, aes(x = item, y = Mean.Q_food), alpha = 1, shape=17, color="orange", size=4)+
  geom_text(data = means.q_food, aes(x = item, y = Mean.Q_food, label = question, vjust=3.5))+
  geom_errorbar(data = means.q_food, aes(x = item, ymin=YMin,ymax=YMax),width=.05,color="black") +
  xlab("Context") +
  ylab("Expectedness rating") +
  scale_y_continuous(breaks=c(0,1),labels=c("absolutely\nunexpected","absolutely\nexpected"),
                     limits = c(0,1)) +
theme(panel.spacing.x = unit(4, "mm"))
ggsave("../graphs/exp_by_item_and_question.png",height=3,width=4.5)


#preference means by item 
means.item = data %>%
  group_by(item) %>%
  summarize(Mean.pref = mean(pref), CILow=ci.low(pref),CIHigh=ci.high(pref))%>%
  ungroup() %>%
  mutate(YMin=Mean.pref-CILow,YMax=Mean.pref+CIHigh)

#new column for swapped pref ratings if item (5b)
data$pref_swapped <- data$pref
data <- data %>%
  mutate(pref_swapped = case_when(
    (item == "(5a)") ~ pref,
    (item == "(5b)") ~ -pref,
  ))


#preference means by item ((5b) swapped)
means.item2 = data %>%
  group_by(item) %>%
  summarize(Mean.pref2 = mean(pref_swapped), CILow2=ci.low(pref_swapped),CIHigh2=ci.high(pref_swapped))%>%
  ungroup() %>%
  mutate(YMin=Mean.pref2-CILow2,YMax=Mean.pref2+CIHigh2)

#violin plot preference per item ((5b) swapped) (in XPrag Poster)
ggplot() +
  geom_violin(data = data, aes(x = item, y = pref_swapped), alpha = .5)+
  geom_point(data = means.item2, aes(x = item, y = Mean.pref2, color = item, shape = item, legend = NULL), size=3, alpha=1) +
  guides(color = "none") +
  guides(shape = "none") +
  scale_color_manual(values = c("(5a)" = "blue", "(5b)" = "orange"))+
  geom_dotplot(data = data, aes(x = item, y = pref_swapped), binaxis = "y", binwidth=0.2,
               stackdir = "center", dotsize = 0.2, fill="gray40", alpha=.6, color="gray20") +
  geom_errorbar(data = means.item2, aes(x = item, ymin=YMin,ymax=YMax),width=.05,color="black") +
  xlab("Context") +
  ylab("Preference rating") +
  scale_y_continuous(breaks=c(-1,0,1),labels=c("A much better","equally good","B much better"),
                     limits = c(-1,1)) 
#theme(panel.spacing.x = unit(4, "mm"))
ggsave("../graphs/preference_by_item_swapped.png",height=3,width=3)








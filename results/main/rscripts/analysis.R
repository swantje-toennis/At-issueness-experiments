# set working directory to directory of script
this.dir <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this.dir)

#install.packages("remotes")
#remotes::install_github("dmirman/gazer")

library(readr)
library(lme4)
library(tidyverse)
library(ggrepel)
library(lsmeans)
library(lmerTest)


########################################################
source("C:/Arbeit/R statistics/mer-utils.r")
source("C:/Arbeit/R statistics/regression-utils.r")
source("C:/Arbeit/R statistics/diagnostic_fcns.r")
source("C:/Arbeit/R statistics/boot_glmm.r")
source("C:/Arbeit/R statistics/helpers.r")

#### load data ###########
data <- read.csv("../data/preprocessed_data/data.csv", sep = ";")
nrow(data) #440


#### Interpret exp (expectedness rating) as factor and cer (certainty rating) as numbers
data$exp<-as.numeric(data$exp)
data$cer<-as.numeric(data$cer)

# center the exp variable (because it is a continuous predictor) and cer variable
#data = cbind(data,myCenter(data[,c("exp","cer")]))


#######################
####   Models ----
######################

# Stepwise comparison of a more specified model to a less specified model
# Used anova to compare two models


#### model 1 -- cer (certainty rating) as dependent variable 
# with varying intercepts and slopes for participant ('participant')
# and varying intercepts for item ('item_no'),
#exp ('expectedness rating') and verb as fixed effects interaction
model1 <- lmer(cer ~ exp * verb + (1 + exp|participant) + (1|item_no), data = data, 
               REML=F,control = lmerControl(optimizer ='optimx', optCtrl=list(method='L-BFGS-B')))
#get p-values
summary(model1) # exp not significant


#### model 2 -- model 1 witout interaction between verb and expectedness
model2 <- lmer(cer ~ exp + verb + (1 + exp|participant) + (1|item_no), data = data, 
               REML=F,control = lmerControl(optimizer ='optimx', optCtrl=list(method='L-BFGS-B')))

summary(model2)  # exp not significant


# comparison of model 1 and 2
anova(model1,model2)   #not significantly different -> continue with model 2

#### model 3 -- model 2 without verb
model3 <- lmer(cer ~ exp + (1|item_no) + (1 + exp|participant), data = data, 
               REML=F,control = lmerControl(optimizer ='optimx', optCtrl=list(method='L-BFGS-B')))
summary(model3)  # exp not significant

# comparison of model 2 and 3 
anova(model2,model3)#not significantly different -> continue with model 3


#### model 4 -- model 3 without participant slope
model4 <- lmer(cer ~ exp + (1|item_no) + (1|participant), data = data, 
               REML=F,control = lmerControl(optimizer ='optimx', optCtrl=list(method='L-BFGS-B')))
summary(model4) #exp weakly significant
#                Estimate   Std. Error  df      t value Pr(>|t|)    
#(Intercept)     0.49153    0.05464  56.58016   8.996 1.67e-12 ***
#  exp           0.08021    0.04774 424.45417   1.680   0.0937 . 

anova(model4,model3) #not significantly different -> continue with model 4


##############################
#-> Pick model 4
##############################

### Sanity check for model 4 ######
#<10 is reasonable collinearity, <30 is moderate collinearity, over 30 is troubling
kappa.mer(model4)   ## 4.550629  -> good!   
#vif over 5 is troubling, over 2.5 is moderate (checks collinearity)
max(vif.mer(model4)) ## 1 -> good! 
# dispersion parameter should not be much larger than 1
overdisp.test(model4) ## error -> not good!
# residuals should be normally distributed, qq-plot plot should not show strong deviations from the line, 
# residuals against fitted values should show a rather random pattern
diagnostics.plot(model4) ## ok-ish. residuals against fitted values do not look that random...
#lev.thresh should be close to 0, means that there are no influential cases
lev.thresh(model4) ## 0.01363636 -> good.


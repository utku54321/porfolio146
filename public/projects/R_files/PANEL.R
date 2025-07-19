# Load required libraries
library(readxl)
library(fBasics)
library(plm)
library(lmtest)

# Load the data
bank_data <- read_excel("C:/Users/ASUS/Downloads/kjdshcoewhcioes.xlsx")

# Clean and rename columns
names(bank_data)[names(bank_data) == "Share Returns"] <- "Return"
names(bank_data)[names(bank_data) == "Capiatl Adequay Ratio"] <- "CAR"
names(bank_data)[names(bank_data) == "Net NPA to Net Advances"] <- "NPA"
names(bank_data)[names(bank_data) == "P/B"] <- "PB"
# Check structure
str(bank_data)

# Descriptive Statistics for Return (Share Returns)
basicStats(bank_data$Return)

# Convert to panel data format
bank_panel <- pdata.frame(bank_data, index = c("Bank", "Year"))

# Pooled OLS model
pooled_model <- plm(Return ~ CAR + NPA + PB + NIM, data = bank_panel, model = "pooling")
summary(pooled_model)

# LM test to choose between pooled and random effects
plmtest(pooled_model, type = "bp")

# Fixed Effects model
fe_model <- plm(Return ~ CAR + NPA + PB + NIM, data = bank_panel, model = "within")
summary(fe_model)

# Random Effects model
re_model <- plm(Return ~ CAR + NPA + PB + NIM, data = bank_panel, model = "random")
summary(re_model)

# Hausman Test to choose between fixed and random effects
phtest(fe_model, re_model)


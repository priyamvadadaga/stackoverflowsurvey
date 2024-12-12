# StackOverflow 2024 Survey Analysis

## Project Overview

This project analyzes data from the Stack Overflow Developer Survey using R to generate insights into developer trends. Through the exploration and visualizations, we explore relationships between key variables such as demographics (industries of respondents, education level), participation on Stack Overflow, and insights on future AI usage/trends.

### Key Features
- **Data Preparation**: Cleaning, transforming, and summarizing survey data using R.
- **Static Visualizations**: Comprehensive static plots generated with `ggplot2` and other R libraries.
- **Interactive D3 Visualization**: A dynamic D3.js-based bar chart embedded in a Quarto document, showcasing industry-wise respondent distribution.
- **Reproducible Workflow**: Quarto `.qmd` files for report generation and `.js` scripts for interactive visualizations.

### Prerequisites

Make sure you have the following software installed:
1. **R** (>= 4.0.0) - For data preparation and static visualizations.
2. **Quarto** (>= 1.0.0) - For rendering reports.
3. **JavaScript** (D3.js) - For interactive visualizations.


## Dataset Description

The dataset used in this project contains responses from a **developer survey** aimed at understanding various aspects of the professional and educational background of developers. The survey data includes demographic details, job-related information, and self-reported skills, allowing for insightful analysis and visualizations.

### Dataset Overview

The dataset consists of various variables that capture key information about respondents' backgrounds, job roles, experiences, and preferences. The variables in the dataset are as follows:

- **MainBranch**: What type of coder the responder is.
- **Age**: Age of the respondent.
- **RemoteWork**: Whether the respondent works remotely or in person or hybrid.
- **Check**: General status or indication of whether respondents were paying attention.
- **EdLevel**: Highest level of formal education achieved by the respondent.
- **YearsCode**: Total years of experience coding.
- **YearsCodePro**: Total years of professional coding experience.
- **DevType**: Type(s) of developer roles the respondent identifies with (e.g., "Backend Developer", "Full-stack Developer").
- **Country**: Country in which the respondent is based.
- **ConvertedCompYearly**: Respondent's yearly compensation (salary).
- **SOVisitFreq**: Frequency of visiting Stack Overflow (survey-specific).
- **SOAccount**: Whether the respondent has an account on Stack Overflow.
- **SOPartFreq**: Frequency of participation on Stack Overflow (survey-specific).
- **SOComm**: Do you consider yourself a member of the Stack Overflow community?
- **AISelect**: Do you currently use AI tools in your development process? *
- **AISent**: How favorable is your stance on using AI tools as part of your development workflow?
- **AIAcc**: How much do you trust the accuracy of the output from AI tools as part of your development workflow?
- **AIComplex**: How well do the AI tools you use in your development workflow handle complex tasks?
- **AIThreat**: Respondent's thoughts on AI as a potential threat.
- **ICorPM**: Indication of interest in ICorPM-related topics (could represent a specialized area of work).
- **WorkExp**: Work experience of the respondent.
- **Knowledge_1** to **Knowledge_9**: Respondent’s proficiency in various skills or technologies.
- **TimeSearching**: Time spent searching on StackOverflow.
- **TimeAnswering**: Time spent answering questions on forums like Stack Overflow.
- **ProfessionalCloud**: At my company, our applications, databases and services are hosted:
- **ProfessionalQuestion**: When you have a technical question at work, where do you first go to get an answer?
- **Industry**: The industry in which the respondent is employed (e.g., "Banking/Financial Services", "Healthcare").
- **JobSat**: Job satisfaction rating of the respondent.
- **SurveyLength**: Length of the survey taken by the respondent.
- **SurveyEase**: Ease of filling out the survey, based on the respondent's feedback.

### Data Types

- **Categorical Variables**: MainBranch, EdLevel, DevType, Country, SOVisitFreq, SOAccount, SOPartFreq, SOComm, AISelect, AISent, AIAcc, AIComplex, AIThreat, ICorPM, ProfessionalCloud, ProfessionalQuestion, Industry, JobSat, SurveyLength, SurveyEase.
- **Numerical Variables**: Age, YearsCode, YearsCodePro, ConvertedCompYearly, TimeSearching, TimeAnswering, Knowledge_1 through Knowledge_9.

We also separately parsed other variables with multiple responses using Python using `preprocess.ipynb`.
### Usage

This dataset allows you to perform various analyses, including:
- **Exploring developer demographics**: By analyzing variables like Age, EdLevel, Country, and Industry.
- **Job satisfaction and professional experience**: Analyzing the relationship between JobSat, YearsCodePro, and other work-related variables.
- **Stack Overflow usage patterns**: Investigating how developers use Stack Overflow based on variables like SOVisitFreq, SOPartFreq, and SOComm.
- **AI-related work trends**: Analyzing how developers engage with AI-related topics through variables like AISelect, AIAcc, and AIComplex.

The dataset is used to generate various visualizations and insights, such as identifying trends in developer roles, education levels, and industry distribution.

### Sources

* Data: This dataset is based on the **Stack Overflow Developer Survey**, which is publicly available on [Stack Overflow Insights](https://insights.stackoverflow.com/survey).

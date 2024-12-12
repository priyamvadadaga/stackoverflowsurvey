### StackOverflow 2024 Survey Analysis

## Project Overview

This project analyzes data from the Stack Overflow Developer Survey using R and Quarto to generate insights into developer trends. The analysis includes various interactive and static visualizations created with R libraries and the D3.js JavaScript library. These visualizations explore relationships between key variables such as demographics (industries of respondents, education level), participation on Stack Overflow, insights on future AI usage/trends and more.

### Key Features
- **Data Preparation**: Cleaning, transforming, and summarizing survey data using R.
- **Static Visualizations**: Comprehensive static plots generated with `ggplot2` and other R visualization tools.
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

- **MainBranch**: The primary branch of work of the respondent (e.g., "Software Developer", "Data Scientist").
- **Age**: Age of the respondent.
- **RemoteWork**: Whether the respondent works remotely or not.
- **Check**: General status or indication of whether certain conditions were met.
- **EdLevel**: Highest level of formal education achieved by the respondent.
- **YearsCode**: Total years of experience coding.
- **YearsCodePro**: Total years of professional coding experience.
- **DevType**: Type(s) of developer roles the respondent identifies with (e.g., "Backend Developer", "Full-stack Developer").
- **Country**: Country in which the respondent is based.
- **ConvertedCompYearly**: Respondent's yearly compensation (salary).
- **SOVisitFreq**: Frequency of visiting Stack Overflow (survey-specific).
- **SOAccount**: Whether the respondent has an account on Stack Overflow.
- **SOPartFreq**: Frequency of participation on Stack Overflow (survey-specific).
- **SOComm**: How often the respondent communicates with other developers.
- **AISelect**: Indication of interest in AI-related topics.
- **AISent**: Whether the respondent has sent any AI-related content.
- **AIAcc**: Whether the respondent has used AI in their work.
- **AIComplex**: Respondent's self-assessment of AI complexity.
- **AIThreat**: Respondent's thoughts on AI as a potential threat to their role.
- **ICorPM**: Indication of interest in ICorPM-related topics (could represent a specialized area of work).
- **WorkExp**: Work experience of the respondent.
- **Knowledge_1** to **Knowledge_9**: Respondent’s proficiency in various skills or technologies.
- **TimeSearching**: Time spent searching for programming-related information.
- **TimeAnswering**: Time spent answering questions on forums like Stack Overflow.
- **ProfessionalCloud**: Respondent's experience with professional cloud technologies.
- **ProfessionalQuestion**: Experience in answering professional questions in the respondent’s field.
- **Industry**: The industry in which the respondent is employed (e.g., "Banking/Financial Services", "Healthcare").
- **JobSat**: Job satisfaction rating of the respondent.
- **SurveyLength**: Length of the survey taken by the respondent.
- **SurveyEase**: Ease of filling out the survey, based on the respondent's feedback.

### Data Type

- **Categorical Variables**: MainBranch, EdLevel, DevType, Country, SOVisitFreq, SOAccount, SOPartFreq, SOComm, AISelect, AISent, AIAcc, AIComplex, AIThreat, ICorPM, ProfessionalCloud, ProfessionalQuestion, Industry, JobSat, SurveyLength, SurveyEase.
- **Numerical Variables**: Age, YearsCode, YearsCodePro, ConvertedCompYearly, TimeSearching, TimeAnswering, Knowledge_1 through Knowledge_9.

We also separately parsed other variables with multiple responses using Python.
### Usage

This dataset allows you to perform various analyses, including:
- **Exploring developer demographics**: By analyzing variables like Age, EdLevel, Country, and Industry.
- **Job satisfaction and professional experience**: Analyzing the relationship between JobSat, YearsCodePro, and other work-related variables.
- **Stack Overflow usage patterns**: Investigating how developers use Stack Overflow based on variables like SOVisitFreq, SOPartFreq, and SOComm.
- **AI-related work trends**: Analyzing how developers engage with AI-related topics through variables like AISelect, AIAcc, and AIComplex.

The dataset is used to generate various visualizations and insights, such as identifying trends in developer roles, education levels, and industry distribution.

### Data Source

This dataset is based on the **Stack Overflow Developer Survey**, which is publicly available on [Stack Overflow Insights](https://insights.stackoverflow.com/survey).

### File Formats

The data is available in CSV format (`survey.csv`) and is processed using R for analysis and visualization.



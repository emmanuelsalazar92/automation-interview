
# README

**Author:** Emmanuel Salazar  
**Date:** August 2025  

# QA Automation Interview Project

This project was implemented using **Playwright** for end-to-end automation testing.  
It validates critical flows on **Desktop** and **Mobile** browsers, and includes detailed reports with **Playwright HTML** and **Allure**.

## Project Description

- Automated functional tests using **Playwright Test Runner**.  
- Validations executed on **multiple devices and browsers** (desktop + mobile).   
- Two reporting formats provided:
  - Playwright native **HTML Report**
  - **Allure Report** for advanced analytics

## How to Run

### 1️⃣ Clone the project

```git clone https://github.com/emmanuelsalazar92/automation-interview.git```

```cd automation-interview```

### 2️⃣ Install dependencies
```npm install```

### 3️⃣ Run the tests
Execute all Playwright tests (desktop + mobile):

```npm run test```

## Reports

### Playwright HTML Report (native)

Run tests and open the HTML report:

```npm run test:html```

### Allure Report 
Install Allure CLI:

```npm i -D allure-commandline```

Run tests, generate and open report:

```npm run test:allure```

## CleanCity App – Test Plan
### Objective
Ensure the CleanCity App delivers a seamless, secure, and scalable experience for users reporting urban cleanliness issues, tracking waste pickup, and engaging in community initiatives.

### Strategy Overview
This test plan adopts a Behavior-Driven Development (BDD) mindset, focusing on how real users interact with the app. It emphasizes:

User stories as the foundation for test scenarios

Impact-based prioritization (e.g., public health, civic engagement)

Continuous feedback loops with testers, users, and city officials

Agile sprint-based execution with evolving test artifacts

### Scope

Geo-tagged issue reporting

Push notifications for waste pickup

Admin dashboard for municipal staff

Community leaderboard and gamification

Accessibility features (e.g., screen reader support)

❌ Out of Scope:
Payment integrations

Third-party analytics (Phase 2)

## 🧪 Test Types & Techniques

| **Test Type**            | **Technique Used**                         | **Purpose**                                                                 |
|--------------------------|--------------------------------------------|------------------------------------------------------------------------------|
| ✅ Functional Testing     | BDD with Gherkin syntax                    | Validates expected app behavior against business/user scenarios              |
| 🎯 Usability Testing      | Heuristic evaluation + user surveys       | Evaluates ease of use, navigation clarity, and user satisfaction             |
| ♿ Accessibility Testing  | WCAG 2.1 compliance checks                 | Ensures inclusive design: screen reader support, contrast, keyboard access   |
| 🚀 Performance Testing    | Load simulation via JMeter                 | Assesses responsiveness under normal and high usage loads                    |
| 🔒 Security Testing       | OWASP Mobile Top 10 audit                  | Identifies vulnerabilities like insecure storage, improper authentication    |
| 🌍 Localization Testing   | Language toggling + RTL support           | Confirms support for multiple languages and correct layout for RTL users     |

## 🧼 BDD Test Scenario
### 🧪 Feature: Report a Cleanliness Issue

```gherkin
Scenario: Citizen reports overflowing garbage bin
  Given the user is logged in
  And is within GPS range of a public bin
  When they tap "Report Issue"
  And upload a photo and select "Overflowing Bin"
  Then the issue should be logged with timestamp and location
  And a confirmation message should be displayed

### Test Strategy

| **Component**   | **Description**                                                                 |
|----------------|----------------------------------------------------------------------------------|
| **Test Levels** | Unit, Integration, System, and Acceptance testing will be conducted to ensure quality at each development stage. |
| **Test Types**  | Testing will cover Functional, Usability, Performance, Security, and Regression aspects. |
| **Techniques**  | Test design techniques include Black-box testing, Exploratory testing, Boundary Value Analysis, and Equivalence Partitioning. |
| **Approach**    | UI/UX tests will be performed manually for user experience evaluation. Automated testing will be used for regression and API endpoints to ensure efficiency and consistency. |

### Test Environments
Platforms: Android (10+), iOS (13+)

Browsers (Admin Panel): Chrome, Firefox, Safari

Devices: Smartphones, tablets

Network Conditions: Wi-Fi, 4G, offline mode simulation

Environments:

QA: qa.cleancityapp.com

UAT: uat.cleancityapp.com

Production: cleancityapp.com

###  Test Schedule

| **Task**                   | **Timeline**   |
|---------------------------|----------------|
| Test Plan Creation         | Week 1         |
| Test Case Design           | Week 2         |
| Test Execution (Sprint 1)  | Week 3–4       |
| Regression Testing         | Week 5         |
| Final Report & Closure     | Week 6         |


### Test Deliverables
Test Plan Document

Test Cases and Scenarios

Defect Logs (via JIRA)

Test Summary Report

Performance Test Report

### Entry & Exit Criteria
Entry Criteria:

Stable build deployed to QA

Test cases reviewed and approved

Test environment configured

Exit Criteria:

95% test case pass rate

All critical defects resolved

Test summary report submitted

### Defect Reporting Procedure
Defects logged in JIRA with screenshots/logs

Severity and priority assigned

Daily triage meetings with dev team

Status updates shared via Slack/email

###  Risks & Mitigations

| **Risk**                     | **Mitigation Strategy**                                               |
|-----------------------------|----------------------------------------------------------------------|
| Delayed builds               | Add buffer time in the schedule; enable parallel testing workflows   |
| Device compatibility issues | Utilize cloud-based device farms (e.g., BrowserStack, Sauce Labs)   |
| Unclear requirements         | Conduct early stakeholder reviews and seek timely clarifications     |

###  Tools Used

| **Tool**              | **Purpose**                   |
|-----------------------|-------------------------------|
| JIRA                  | Bug tracking and task management |
| Postman               | API testing                   |
| Appium                | Mobile test automation        |
| Figma                 | UI design review and validation |
| Excel / Google Sheets | Test case creation and management |

# 👥 Team Roles and Responsibilities

## Project Team – Week 1 Setup


| Name               | Role                   Responsibilities                                                                 |
|--------------------|--------------------------|----------------------------------------------------------------------------------|
| Mobilei Amdany     | QA Lead / Test Manager   | Oversees QA process, coordinates testing efforts, reports progress              |
| Lungiswa Solani    | Test Analyst             | Designs test cases, performs functional and regression testing, logs bugs       |
| Hidaya Vanessa     | Automation Engineer      | Develops test scripts, manages automation framework, integrates with CI/CD      |
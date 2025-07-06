## CleanCity App – Test Plan
# 👾 Team: TestH@cks

**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

Built with precision, passion, and purpose.

## Introduction
This test plan outlines the testing approach, strategy, and activities for the CleanCity Waste Pickup Scheduler web application. The goal is to ensure functional accuracy, usability, performance, accessibility, and compatibility across platforms.

---

### Objective
Identify and log functional and non-functional defects


Ensure cross-browser and cross-device usability


Verify WCAG 2.1 AA accessibility compliance


Validate performance under various network conditions


Test data persistence via browser localStorage

---
### Strategy Overview
This test plan adopts a Behavior-Driven Development (BDD) mindset, focusing on how real users interact with the app. It emphasizes:

User stories as the foundation for test scenarios

Impact-based prioritization (e.g., public health, civic engagement)

Continuous feedback loops with testers, users, and city officials

Agile sprint-based execution with evolving test artifacts

---

### Features to be Tested(Scope)
-  **User registration, login, logout**
-  **Password validation and error handling**
-  **Scheduling waste pickups**
-  **Dashboard charts and statistics**
-  **Blog, community feed, awareness content**
-  **User settings and profile updates**
-  **Admin panel management**
-  **Accessibility and responsiveness**




❌ Out of Scope:
- **Payment integrations**
- **Backend/API functionality (no backend)**
- **Third-party analytics (Phase 2)**

##  Test Strategy

This strategy outlines the approaches, techniques, and tools used to ensure CleanCity App meets its functional, non-functional, compatibility, and accessibility goals across platforms.

---

### Test Types & Approaches

| **Test Type**       | **Approach**                                                  |
|---------------------|---------------------------------------------------------------|
| Functional          | Manual testing of core features (e.g., issue reporting, alerts)|
| Non-Functional       | Accessibility, usability, performance evaluations             |
| Compatibility       | Validation across major browsers and device types              |
| Accessibility       | Audit using axe DevTools, NVDA, Lighthouse, keyboard navigation|

---

### 🧰 Tools Used

| **Category**           | **Tool**                    |
|------------------------|-----------------------------|
| Test Management        | Jira, GitHub Projects        |
| Performance & Audit    | Lighthouse                   |
| Accessibility Testing  | axe DevTools, NVDA           |
| Developer Tools        | Chrome DevTools              |

---


### 🚦 Entry Criteria

Testing activities for the CleanCity App will commence only when the following conditions are met:

-  **Functional Features Deployed to Netlify**
  A stable build of core functionalities—such as login, issue reporting, and dashboard access—is live on Netlify and ready for validation.

-  **Requirements and FRS Available**
  Functional Requirements Specification (FRS) documents are complete, reviewed, and accessible to all QA stakeholders for reference and traceability.

-  **Browsers, Devices & Tools Accessible**
  Required hardware, browsers (Chrome, Firefox, Safari), mobile devices (Android/iOS), and testing tools (JIRA, Appium, Postman, axe DevTools) are set up and operational.

---

## 🚦 Exit Criteria

Testing activities for the CleanCity App will be considered complete when all of the following conditions are met:

- **All Critical Test Cases Executed**
  All prioritized scenarios (e.g. cleanliness issue reporting, dashboard updates, notifications) have been tested across environments and devices.

- 🐞 **All Major Bugs Reported and Triaged**
  High and critical severity defects have been logged, assigned, resolved, and verified, with no blockers remaining for production deployment.

- 📊 **Final Report and Metrics Compiled**
  A comprehensive test summary, defect analysis, and performance benchmark report has been generated and shared with stakeholders.

- 🎥 **Video Presentation Complete**
  A walkthrough or demo video showcasing core features, test coverage, and quality outcomes has been recorded and submitted for project review.

---

## 📦 Test Deliverables

The following artifacts and outputs will be produced as part of the testing lifecycle:

| **Deliverable**                | **Description**                                                          |
|-------------------------------|--------------------------------------------------------------------------|
| `test-plan.md`                | Detailed plan outlining the objectives, scope, strategy, and schedule   |
| `test-cases.md`               | Comprehensive list of scenarios, steps, and expected results             |
| `defect-log.md`               | Log of reported bugs with severity, status, reproduction steps, and links|
| `final-report.md`             | Summary of execution metrics, coverage, defect trends, and closure notes |
| Screenshots & Logs            | Visual and technical evidence for all reported issues                    |
| JIRA Exports                  | Dashboards, ticket reports, comments, and audit trail from project board |

---


## 🧪 Test Environment

This section defines the hardware, software, and testing tools required to validate the CleanCity App across multiple platforms and user conditions.

---

### 💻 Devices

- **Desktop Computers**
- **Tablets**
- **Mobile Phones** (Android & iOS)

---

### 🌐 Browsers

- **Google Chrome**
- **Mozilla Firefox**
- **Safari** (macOS and iOS)
- **Microsoft Edge**

---

### 🧰 Tools

| **Category**             | **Tools Used**                            |
|--------------------------|-------------------------------------------|
| Performance & Accessibility | Lighthouse, axe DevTools                  |
| Screen Reader Support     | NVDA                                      |
| Test Planning & Tracking  | GitHub Kanban, Jira                        |

---

Each environment is configured to reflect real-world usage patterns, ensuring wide compatibility and compliance with accessibility standards.

---

### ## 📆 Condensed Test Schedule (3 Weeks)

| **Task**                   | **Timeline**        |
|---------------------------|---------------------|
| ✅ Test Plan & Case Design | Week 1 (Days 1–5)   |
| 🚀 Test Execution (Sprint) | Week 2 (Days 6–12)  |
| 🔁 Regression & Closure    | Week 3 (Days 13–15) |

---

### ⏱ Breakdown:
- **Week 1**: Plan creation, requirement review, test case writing
- **Week 2**: Execute key functional, usability, and accessibility tests
- **Week 3**: Perform regression testing, defect verification, and compile final report


---


### ## ⚠️ Risks and Mitigations

This section outlines potential risks identified during the CleanCity App testing lifecycle, along with corresponding mitigation strategies to reduce impact and ensure consistent progress.

| **Risk**                             | **Mitigation Strategy**                                       |
|--------------------------------------|---------------------------------------------------------------|
| Data loss due to localStorage clearing | Take frequent screenshots and create backups of key test data |
| Missed edge cases                    | Conduct peer reviews of test cases and perform exploratory testing |
| Time constraints                     | Hold regular QA standups and use milestone-based planning      |



These mitigations should be monitored throughout the project and updated as new risks emerge or evolve.

---
## 📊 Metrics to Track

Tracking the following key metrics ensures transparency, quality assurance, and continuous improvement throughout the CleanCity App testing lifecycle:

| **Metric**                  | **Description**                                                                 |
|-----------------------------|---------------------------------------------------------------------------------|
| 🧪 **Total Test Cases Executed** | Number of test cases run across all environments and platforms                    |
| ✅ **Test Pass Rate (%)**         | Percentage of executed test cases that passed successfully                       |
| 🐞 **Bug Count by Severity**      | Number of defects reported, categorized by severity level (Critical, Major, Minor)|
| 📌 **Coverage of Functional Areas**| Percentage of core features covered by executed test cases                        |
| ⚠️ **Defect Density**            | Ratio of defects identified per module or per 1,000 lines of tested code         |



Regular reporting on these metrics helps validate test effectiveness, highlight risk zones, and guide resource planning for future releases.

---

# 👥 Team Roles and Responsibilities



| Name               | Role                   Responsibilities                                                                 |
|--------------------|--------------------------|----------------------------------------------------------------------------------|
| Mobilei Amdany     | QA Lead / Test Manager   | Oversees QA process, coordinates testing efforts, reports progress              |
| Lungiswa Solani    | Test Analyst             | Designs test cases, performs functional and regression testing, logs bugs       |
| Hidaya Vanessa     | Automation Engineer      | Develops test scripts, manages automation framework, integrates with CI/CD      |
# Test Plan: cleancity-waste-scheduler@1.0.0
**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

## 📌 Introduction
This document outlines the strategy for validating core functionality of the `cleancity-waste-scheduler` application, focusing on rendering behavior, form validation, and interaction quality.

## 🧠 Testing Objectives
- Verify that users can schedule waste pickups through the Home component.
- Ensure form validation logic is robust across edge cases.
- Address any UI rendering issues and deprecated API usage.

## 🧬 Scope of Testing
- Home page component rendering
- Input validation and submission workflows
- Automated unit test coverage using Jest

## 🛠️ Tools & Frameworks
| Tool                   | Purpose                                     |
|------------------------|---------------------------------------------|
| Jest                   | Test execution and reporting                 |
| React Testing Library  | UI behavior and accessibility verification |
| Node.js (v18+)         | Runtime environment for application         |
| React (v18+)           | UI library used by the project              |

## ✅ Test Types
- Unit Testing
- Functional Testing
- Negative Testing
- Accessibility Testing

## 💻 Environment
- macOS 13 & Windows 11 VMs
- Chrome v116, Firefox v120
- Local development server with mocked API

## 👥 Roles & Collaborators

| Role             | Name               | Responsibility                             |
|------------------|--------------------|---------------------------------------------|
| Test Author      | Mobilei Amdany     | Designed test plan, created test cases/scripts |
| UI Validator     | Lungiswa Solani    | Reviewed component rendering and accessibility |
| Test Executor    | Hidaya Vanessa     | Ran automated scripts and logged defects      |
| QA Coordinator   | [Your Name]        | Oversaw workflow, milestones, documentation   |

## 🎯 Entry Criteria
- Feature implementation of the Home component is complete.
- Form input fields and submission logic are available.
- Development server runs successfully with test environment prepared.

## 🧱 Exit Criteria
- All critical tests pass across supported browsers.
- No major open defects remain unresolved.
- Deprecation warnings and refactors logged or fixed.

## ⚠️ Risks & Mitigations
| Risk                                     | Mitigation Strategy                              |
|------------------------------------------|--------------------------------------------------|
| Deprecated React Testing methods used    | Updated test scripts to use `React.act()`        |
| Form accepts incomplete inputs           | Adjust validation logic and add unit checks      |
| UI inconsistency across browsers         | Add cross-browser test cases with coverage logs  |


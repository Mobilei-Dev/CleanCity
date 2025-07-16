# 📸🧪 CleanCity App – Test Execution Evidence Summary

**Project Name:** CleanCity Waste Pickup Scheduler
**Contributors:** Mobilei Amdany, Lungiswa Solani, Hidaya Vanessa
**Testing Frameworks:** Jest, React Testing Library
**Date of Execution:** 16 July 2025
**Environment:** Windows 11, Node.js v18, React 18

---

## 🖼️ Screenshots (`/tests/evidence/screenshots/`)

| Screenshot File                | Description                                                               |
|-------------------------------|---------------------------------------------------------------------------|
| `test-results-terminal.png`   | Terminal showing `npm test` output, all suites passed                     |
| `dashboard-loaded.png`        | Admin dashboard with summary and request rows visible                     |
| `form-validation-error.png`   | Alert triggered when empty form is submitted on Home component            |
| `form-submission-success.png` | Success message shown after valid pickup request is submitted             |
| `login-success.png`           | Login form filled and confirmation message displayed                      |
| `coverage-summary.png` *(opt)*| Visual report from Jest/Istanbul (if coverage report was generated)        |
| `router-warnings.png`         | Console warnings showing React Router v7 future flags                     |

---

## 📄 Logs (`/tests/evidence/logs/`)

### `test-run-output.txt`
- Captures full command-line execution from `npm test -- --watch`
- Includes timestamps, suite status, console warnings, and stack traces

### `console-warnings.txt`
- Extracted warning logs:
  - `ReactDOMTestUtils.act` deprecation
  - React Router v7 transition flags

### `test-summary.md`
- Summarizes test files, number of tests executed, and final status

---

## 📊 Execution Summary (`tests/execution-report.md`)

```markdown
# 🧪 Test Execution Summary

**Command Run:** `npm test -- --watch`
**Suite Coverage:** App, Admin, Home, Login
**Total Tests:** 12
**Passed:** 12
**Failed:** 0
**Warnings Observed:**
- Deprecated usage of `ReactDOMTestUtils.act`
- React Router future flag notices

**Final Verdict:** ✅ All tests passed, no regressions

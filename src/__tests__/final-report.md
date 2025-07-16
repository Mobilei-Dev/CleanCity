# ✅ CleanCity App – Final Test Report

**Project:** CleanCity Waste Pickup Scheduler
**Contributors:** Mobilei Amdany, Lungiswa Solani, Hidaya Vanessa
**Frameworks & Tools:** Jest, React Testing Library, React 18, React Router v6
**Test Scope:** Component Unit Testing
**Status:** ✅ All tests passed | ⚠️ Minor warnings observed

---

## 🧾 Test Coverage Overview

All major components were covered through automated unit tests. The test suite validated rendering logic, form interactions, route-based behavior, and status updates within the CleanCity App.

| Component      | Test File             | Tests | Passed | Failed | Warnings               |
|----------------|-----------------------|-------|--------|--------|------------------------|
| App            | `App.test.js`         | 2     | ✅ 2   | ❌ 0   | React Router v7 notice |
| Admin Dashboard| `admin.test.js`       | 5     | ✅ 5   | ❌ 0   | Deprecated `act()`     |
| Home Form      | `home.test.js`        | 3     | ✅ 3   | ❌ 0   | Deprecated `act()`     |
| Login          | `LoginForm.test.js`   | 2     | ✅ 2   | ❌ 0   | None                   |

**🔢 Total Tests:** 12
**✅ Passed:** All
**🚫 Failures:** None
**⚠️ Warnings:** Non-blocking, documented below

---

## 📂 Component Summary

### 🔷 App Component
- Validated brand rendering (`CleanCity` text).
- Simulated routing to `/login` and confirmed login heading is rendered.
- Warnings: Informational flags from React Router v7 (`relativeSplatPath`).

### 🔷 Admin Component
- Loaded mock requests from `localStorage`.
- Simulated status transitions: Completed, Missed, and Deleted.
- Confirmed dynamic summary metrics update.
- Warning: Deprecated `ReactDOMTestUtils.act()` usage flagged.

### 🔷 Home Component
- Heading displayed correctly.
- Empty form submission triggers error with role="alert".
- Valid submission displays confirmation message.
- Warning: Suggests migrating from `ReactDOMTestUtils.act()` to `React.act()`.

### 🔷 Login Component
- Rendered inputs for Email and Password.
- Simulated login flow with valid credentials.
- Used `<MemoryRouter>` for routing context.
- No warnings, all assertions passed.

---

## 🧠 Technical Highlights

- Tests utilize `@testing-library/jest-dom` for DOM assertions.
- `localStorage` used for simulating backend responses.
- Routing behavior emulated via history manipulation and `MemoryRouter`.
- Each test runs in isolated context with appropriate cleanup.

---

## 🚧 Warnings Log

- **Deprecation Notice:** `ReactDOMTestUtils.act()` is deprecated. Recommended update to `React.act()` for async testing.
- **React Router Flags:** Informational warnings for v7 flags such as `relativeSplatPath`, which do not impact current test results.

---

## 🧪 Recommendations

- Migrate all `act()` usage to `React.act()` for compliance with newer React testing standards.
- Add integration/E2E tests for flows like user registration, dashboard navigation, and error handling using Cypress or Playwright.
- Validate accessibility using `axe-core` or similar tools.
- Configure CI pipeline to run Jest tests with coverage thresholds enforced.

---

## 📁 Test Suite Structure


**Manual Testing**
**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

# ✅ Jest Test Execution Summary

**Package:** cleancity-waste-scheduler@1.0.0
**Command Run:** `npm test`
**Environment:** Node.js v18+, React v18+, Jest, React Testing Library
**Date:** July 12, 2025

---

## 🧪 Test Suite Overview

| Suite Location            | Status |
|---------------------------|--------|
| `src/__tests__/home.test.js` | ✅ Passed |

---

## 📄 Individual Tests

| Test Description                                              | Status | Duration |
|---------------------------------------------------------------|--------|----------|
| Renders heading                                               | ✅ Pass | 168 ms   |
| Shows error when form is submitted with missing fields        | ✅ Pass | 39 ms    |
| Submits form with valid input and shows success message       | ✅ Pass | 46 ms    |

---

## ⚠️ Warnings and Technical Notes

> **Console Warning:**
> ```
> Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`.
> Import `act` from `react` instead of `react-dom/test-utils`.
> See https://react.dev/warnings/react-dom-test-utils
> ```

- ⚙️ **Implication:** Update required to replace legacy usage with modern `React.act`.
- ✅ **Status:** The warning has been resolved in newer commits by updating imports and test structure.

---

## 🕒 Execution Metrics

- PASS  src/__tests__/home.test.js
  **Home Component**
    √ renders heading (217 ms)
    √ shows error when form is submitted with missing fields (53 ms)
    √ submits form with valid input and shows success message (58 ms)

- **Test Suites:** 1 passed, 1 total
- **Tests:**       3 passed, 3 total
- **Snapshots:**   0 total
- **Time:**        3.73 s
Ran all test suites related to changed files.ds

---

**END OF THE SUMMARY**
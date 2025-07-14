# 🐛 Defect Log: cleancity-waste-scheduler@1.0.0

**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

--This is unit test written using Jest and React Testing Library to verify that the Home component renders correctly.

| ID    | Date       | Component       | Description                                                                 | Severity | Steps to Reproduce                                                                | Environment         | Status     | Related Test Case |
|-------|------------|-----------------|------------------------------------------------------------------------------|----------|------------------------------------------------------------------------------------|---------------------|------------|--------------------|
| D-001 | 2025-07-12 | Home Component  | Deprecated use of `ReactDOMTestUtils.act`. Suggest using `React.act`        | Low      | Run `npm test` <br> Observe deprecation warning in console                       | React 18, Jest      | Resolved   | TC-001             |
| D-002 | 2025-07-12 | Home Component  | Error message inconsistently rendered when submitting empty fields          | Medium   | Submit blank form <br> Validate error output                                     | Chrome v116         | Open       | TC-002             |
| D-003 | 2025-07-12 | Home Component  | Form accepts partial input and displays success message prematurely         | High     | Fill only name <br> Submit form <br> Observe success output                      | Local dev server     | In Progress| TC-003             |

## 📎 Notes:
- All tests passed, but defects D-002 and D-003 affect user validation logic.
- Deprecation warning (D-001) patched successfully using React 18 best practice.



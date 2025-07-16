# 🐞 CleanCity App – Defect and Issue Log

**Project Module:** CleanCity Waste Pickup Scheduler
**Phase:** Component Unit Testing
**QA Contributors:** Mobilei Amdany, Lungiswa Solani, Hidaya Vanessa
**Environment:** React 18, Jest, React Testing Library

---

## 🔍 Defect Summary Table

| Defect ID | Component   | Description                                      | Severity | Status     | Resolution Plan / Notes                                 |
|-----------|-------------|--------------------------------------------------|----------|------------|----------------------------------------------------------|
| DEF001    | Admin       | `ReactDOMTestUtils.act` deprecation warning      | Minor    | Open       | Migrate to `React.act()` from `react` module             |
| DEF002    | App         | React Router v7 future flags (`startTransition`) | Trivial  | Informational | Safe to ignore or suppress with config flags         |
| DEF003    | App         | Future flag warning: `relativeSplatPath`         | Trivial  | Informational | Monitor React Router upgrade notes                     |
| DEF004    | Admin       | Summary values not instantly updating on UI      | Major    | Resolved   | State synced after localStorage mutation                |
| DEF005    | Login       | Success message overlaps with redirect behavior  | Minor    | Resolved   | Adjusted component structure for display sequence       |
| DEF006    | Home        | Error alert missing in some browsers             | Minor    | Resolved   | Enforced semantic roles with fallback attributes        |
| DEF007    | Admin       | Row deletion not reflected visually              | Major    | Resolved   | Updated DOM manipulation logic post-deletion            |
| DEF008    | All Tests   | Console output noise during test run             | Trivial  | Acknowledged | Consider suppressing logs in Jest config for clarity  |

---

## 🧠 Observations & Warnings

- Multiple components reference `ReactDOMTestUtils.act()`, which is deprecated. Migration to `React.act()` is recommended to avoid future regressions.
- React Router v7 future flags (`startTransition`, `relativeSplatPath`) emit warnings. These are expected and not test-breaking, but upgrades should be tracked.
- Console noise (warnings and errors) is common in test output; consider using `jest.spyOn(console, 'warn')` and silencing expected logs during CI runs.

---

## 🚧 Next Steps

- ✅ Migrate deprecated testing utilities where flagged.
- 🔍 Audit remaining warnings for suppressibility or upgrade readiness.
- 🧪 Run full suite with upgraded React and Router versions on staging branch.
- 📝 Document mitigation steps and verify defect closure in GitHub Issues or JIRA if applicable.

---

_End of Updated Defect and Issue Log_

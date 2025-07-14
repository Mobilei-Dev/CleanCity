# 🚧 Week 2: Challenges & Adjustments

**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

## 🔍 Identified Issues
- Deprecated API usage causing warnings.
- Form validation logic lacks granular field checks.
- Success message can trigger prematurely with incomplete data.

## 🛠️ Actions Taken
- Replaced `ReactDOMTestUtils.act` with `React.act` across components.
- Added edge test cases for blank and partial input scenarios.
- Flagged field logic for revision in next sprint (Week 3).

## 🗓️ Recommendations
- Review validation function for completeness on submit.
- Schedule UX design audit to improve error messaging.
- Assign D-003 as a blocker for next release until resolved.

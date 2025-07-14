# 🧪 Test Cases: Home Component
**Collaborators:**
1. Mobilei Amdany
2. Lungiswa Solani
3. Hidaya Vanessa

# ✅ Test Cases for Login and Register (Signup) Components

--

## 🔐 LOGIN COMPONENT

---

### 🧪 TC-L001: Successful Login
- **Component**: `Login`
- **Description**: Verifies that users can log in with valid credentials.
- **Preconditions**: Login form is visible.
- **Test Steps**:
  1. Enter valid email (e.g., `user@example.com`).
  2. Enter correct password.
  3. Click the "Login" button.
- **Expected Result**: User is redirected to the dashboard or a success message is displayed.
- **Priority**: High

---

### 🧪 TC-L002: Login with Invalid Credentials
- **Component**: `Login`
- **Description**: Ensures login fails when email or password is incorrect.
- **Preconditions**: Login form is rendered.
- **Test Steps**:
  1. Enter invalid email or incorrect password.
  2. Click "Login".
- **Expected Result**: Error message appears, e.g., "Invalid email or password".
- **Priority**: High

---

### 🧪 TC-L003: Email Format Validation
- **Component**: `Login`
- **Description**: Ensures invalid email formats are rejected.
- **Preconditions**: Login form is displayed.
- **Test Steps**:
  1. Enter `user@com` or `userexample.com` in email field.
  2. Enter any password.
  3. Click "Login".
- **Expected Result**: Validation error appears for invalid email format.
- **Priority**: Medium

---

### 🧪 TC-L004: Required Fields Validation
- **Component**: `Login`
- **Description**: Ensures the form doesn’t submit if fields are empty.
- **Preconditions**: Login form is loaded.
- **Test Steps**:
  1. Leave email and/or password field blank.
  2. Click "Login".
- **Expected Result**: Field-specific validation errors are displayed.
- **Priority**: High

---

### 🧪 TC-L005: Submit Button Disabled on Empty Fields
- **Component**: `Login`
- **Description**: Prevents form submission when fields are empty.
- **Preconditions**: Form is initially empty.
- **Test Steps**:
  1. Do not fill email and password.
  2. Observe the state of the "Login" button.
- **Expected Result**: Submit button remains disabled.
- **Priority**: Medium

---

## 📝 REGISTER (SIGNUP) COMPONENT

---

### 🧪 TC-R001: Successful Registration
- **Component**: `Register`
- **Description**: Ensures users can register with valid data.
- **Preconditions**: Registration form is available.
- **Test Steps**:
  1. Enter valid name, email, and password.
  2. Confirm the password correctly.
  3. Click "Register".
- **Expected Result**: User sees a success message or is redirected to login.
- **Priority**: High

---

### 🧪 TC-R002: Password Confirmation Mismatch
- **Component**: `Register`
- **Description**: Checks for mismatch between password and confirm password fields.
- **Preconditions**: Register form is displayed.
- **Test Steps**:
  1. Enter a valid password.
  2. Enter a different confirm password.
  3. Click "Register".
- **Expected Result**: Error message appears indicating passwords do not match.
- **Priority**: High

---

### 🧪 TC-R003: Email Already Registered
- **Component**: `Register`
- **Description**: Prevents duplicate registration with an existing email.
- **Preconditions**: The email is already used in the system.
- **Test Steps**:
  1. Enter name, email already registered, and password.
  2. Click "Register".
- **Expected Result**: Message displayed like "Email already exists".
- **Priority**: High

---

### 🧪 TC-R004: Required Fields Validation
- **Component**: `Register`
- **Description**: Ensures all required fields must be filled.
- **Preconditions**: Register form is blank.
- **Test Steps**:
  1. Leave any of the required fields empty.
  2. Click "Register".
- **Expected Result**: Each empty field displays a validation error.
- **Priority**: Medium

---

### 🧪 TC-R005: Invalid Email Format
- **Component**: `Register`
- **Description**: Checks for proper email validation.
- **Preconditions**: Email field is visible.
- **Test Steps**:
  1. Enter an email like `test@invalid` or `test.com`.
  2. Fill other fields correctly.
  3. Click "Register".
- **Expected Result**: Validation message for invalid email format is shown.
- **Priority**: Medium

---

### 🧪 TC-R006: Weak Password Rejection
- **Component**: `Register`
- **Description**: Ensures system rejects weak passwords.
- **Preconditions**: Password strength policy is defined.
- **Test Steps**:
  1. Enter a weak password (e.g., `1234`, `password`, etc.).
  2. Fill other fields correctly.
  3. Click "Register".
- **Expected Result**: Message appears requesting a stronger password.
- **Priority**: Medium

---

### 🧪 TC-R007: Fields Reset on Successful Signup
- **Component**: `Register`
- **Description**: Ensures form resets after successful registration.
- **Preconditions**: Register form is filled.
- **Test Steps**:
  1. Enter valid name, email, password, and confirm password.
  2. Click "Register".
  3. Observe the form fields.
- **Expected Result**: All input fields are cleared after success.
- **Priority**: Low

---

---

## TC-008: Heading Renders Correctly
- **Component**: `Home`
- **Description**: Ensures the schedule heading is visible when the component loads.
- **Preconditions**: The component is rendered in the test environment.
- **Test Steps**:
  1. Render `<Home />`.
  2. Locate the heading element using role `heading` with the text matching `/schedule a waste pickup/i`.
- **Expected Result**: Heading is present in the document and its text matches the expected content.
- **Priority**: High

---

## TC-009: Form Submission with Missing Fields
- **Component**: `Home`
- **Description**: Validates that submitting an incomplete form triggers validation errors.
- **Preconditions**: The submit button and all form fields are present.
- **Test Steps**:
  1. Leave required fields (e.g., name and address) blank.
  2. Click the submit button.
- **Expected Result**: An error message appears indicating that required fields are missing.
- **Priority**: Medium

---

## TC-010: Valid Submission Produces Success Message
- **Component**: `Home`
- **Description**: Ensures submitting valid input shows a success message.
- **Preconditions**: All form fields are rendered and interactable.
- **Test Steps**:
  1. Enter `"John Doe"` in the name field.
  2. Enter `"123 Main St"` in the address field.
  3. Click the submit button.
- **Expected Result**: A confirmation message appears indicating that the pickup has been successfully scheduled.
- **Priority**: High

---

## TC-011: Address Field Rejects Invalid Characters
- **Component**: `Home`
- **Description**: Checks whether the address field properly rejects special characters.
- **Preconditions**: The form and fields are rendered.
- **Test Steps**:
  1. Enter `"123 Main St !@#"` in the address field.
  2. Enter `"John Doe"` in the name field.
  3. Click the submit button.
- **Expected Result**: Error message appears for invalid address input.
- **Priority**: Low

---

## TC-012: Name Field Accepts Only Alphabets
- **Component**: `Home`
- **Description**: Validates that the name field restricts numeric/special characters.
- **Preconditions**: Name input is present.
- **Test Steps**:
  1. Enter `"John123!"` in the name field.
  2. Fill address field with valid input.
  3. Click submit.
- **Expected Result**: Error message shown for invalid name input

---
**END OF TEST CASES**

---
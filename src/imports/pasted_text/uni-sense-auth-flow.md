Add a complete authentication and account flow for the UniSense system.

I want the design to clearly show the full flow for:

1. Creating an account
2. Logging in
3. Logging out
4. Choosing account role
5. Applying as a University Representative
6. Waiting for admin approval
7. Getting approved or rejected
8. Accessing the correct dashboard based on role and account status

The flow must be designed specifically for UniSense, not as a generic login system.

Required screens and flow:

SCREEN 1: Landing / Welcome Screen
Purpose:
Introduce UniSense and guide users to login or create account.

Content:

* UniSense logo
* Hero text: “Find the right university program with AI-powered guidance.”
* Buttons:

  * Login
  * Create Account
* Small links:

  * Continue as Student
  * Apply as University Representative

SCREEN 2: Create Account Screen
Purpose:
Allow a new user to register.

Fields:

* Full Name
* Email
* Password
* Confirm Password
* Role selection:

  * Student
  * University Representative
* Create Account button
* Link: Already have an account? Login

Logic:

* If user selects Student, account is created and user can access Student dashboard immediately.
* If user selects University Representative, account is created but representative access is not active until application is submitted and approved.

SCREEN 3: Role Selection / Account Type Screen
Purpose:
Make role selection clearer and more premium.

Cards:

1. Student

   * Search programs
   * Get AI recommendations
   * Save and compare programs
   * Access immediately

2. University Representative

   * Apply to manage university information
   * Submit official university details
   * Requires admin approval
   * Access only after verification

Buttons:

* Continue as Student
* Apply as University Representative

SCREEN 4: Login Screen
Purpose:
Allow existing users to access the system.

Fields:

* Email
* Password
* Remember me
* Forgot password
* Login button

Logic after login:

* Student → Student Dashboard
* Admin → Admin Dashboard
* University Representative approved → University Representative Dashboard
* University Representative pending → Pending Approval Screen
* University Representative rejected → Rejected Application Screen
* Suspended account → Suspended Account Screen

SCREEN 5: Apply as University Representative Form
Purpose:
Allow a user to request authorization to manage a specific university.

Form sections:

A. Representative Information

* Full name
* Email
* Position / job title
* Department / office
* Contact number

B. University Information

* University name
* Country
* City
* Official website URL
* Official contact email
* Address

C. Authorization Proof

* Upload proof document / authorization letter
* Staff email verification note
* Official university source link
* Checkbox: “I confirm that I am authorized to represent this university.”

D. Submit

* Save Draft
* Preview Application
* Submit for Verification

SCREEN 6: Application Preview Screen
Purpose:
Let the representative review details before submitting.

Content:

* Representative information summary
* University information summary
* Official source links
* Uploaded proof document card
* Completeness score
* Buttons:

  * Back to Edit
  * Submit Application

SCREEN 7: Pending Approval Screen
Purpose:
Show restricted state after representative submits application.

Content:

* Status badge: Pending Review
* Message: “Your University Representative application is under admin review.”
* Timeline:

  * Account Created
  * Application Submitted
  * Source Verification
  * Admin Review
  * Final Decision
* Submitted university preview
* Button:

  * Logout
  * View Application

Logic:

* User cannot access University Representative dashboard until Admin approves.
* User can still view application status.

SCREEN 8: Rejected Application Screen
Purpose:
Show rejection and allow correction.

Content:

* Status badge: Rejected
* Admin feedback / rejection reason
* Highlight missing or invalid information
* Buttons:

  * Edit Application
  * Resubmit
  * Logout

SCREEN 9: Approved Representative Dashboard
Purpose:
Main dashboard after admin approval.

Content:

* Welcome message
* Assigned university card
* Verification status: Verified Representative
* University profile completion
* Program data status
* Imported program count
* Quick actions:

  * View University Profile
  * Request University Detail Update
  * View Imported Programs
  * Submit Source Update
  * Logout

Important rule:
An approved University Representative can only manage their assigned university. They cannot access or edit other universities.

SCREEN 10: Student Dashboard After Login
Purpose:
Show student role landing.

Content:

* Search programs
* AI recommendations
* Saved programs
* Compare programs
* Chatbot assistant
* Logout button

SCREEN 11: Admin Dashboard After Login
Purpose:
Show admin role landing.

Content:

* Pending representative applications
* Pending university verification
* User management
* University management
* Analytics
* Audit logs
* Logout button

SCREEN 12: Logout Flow
Purpose:
Show logout clearly in all dashboards.

Required design:

* Logout button in sidebar or top navigation
* Confirmation modal:
  “Are you sure you want to log out?”
  Buttons:

  * Cancel
  * Logout
* After logout, user returns to Landing / Login screen
* Show toast message: “You have been logged out successfully.”

SCREEN 13: Forgot Password Flow
Purpose:
Complete account recovery.

Screens:

1. Forgot Password

   * Enter email
   * Send reset link
2. Check Email

   * Message saying reset instructions were sent
3. Reset Password

   * New password
   * Confirm password
   * Reset password button
4. Password Reset Success

   * Button to Login

SCREEN 14: Suspended Account Screen
Purpose:
Show blocked access.

Content:

* Status badge: Suspended
* Message: “Your account has been suspended. Please contact the administrator.”
* Button:

  * Contact Support
  * Logout

Prototype flow requirements:
Connect the screens in Figma prototype mode:

* Landing → Login
* Landing → Create Account
* Create Account → Role Selection
* Student registration → Student Dashboard
* University Representative registration → Apply as University Representative
* Apply form → Preview Application
* Preview Application → Pending Approval
* Pending Approval → Logout
* Rejected Application → Edit Application → Resubmit
* Approved Representative Login → Representative Dashboard
* Admin Login → Admin Dashboard
* Student Login → Student Dashboard
* Any dashboard → Logout Confirmation → Landing/Login
* Login → Forgot Password → Reset Password → Login

Design style:
Use the same premium dark UniSense style:

* Dark background
* Modern SaaS dashboard aesthetic
* Glass cards
* Gradient accents
* Clean icons
* Professional but creative
* Stylish enough to look like a real AI-powered education web app

Important:
This flow must clearly show account authorization logic, especially for University Representatives. A University Representative account should not automatically access the dashboard. It must go through application submission, admin verification, and approval first.
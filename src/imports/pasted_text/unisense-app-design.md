Redesign the UniSense Program Data Management screens in Figma.

Important correction:
The current design is too detailed around submitting individual programs manually. I want the flow to be changed. The main submission flow should NOT be program-by-program. Instead, it should work like this:

A University Representative applies to manage a university by submitting university details and proof of authorization. The Admin verifies the university details and representative authorization. After approval, the representative becomes authorized to manage that specific university. Programs will later be imported/attached from a JSON file or dataset for all universities, so the main verification flow should focus on the university and representative first, not manually entering every program.

Think of the technical flow like the SchoolSense web app:

1. User registers or logs in.
2. User applies as University Representative.
3. User submits university details and proof/official source.
4. Admin reviews the application.
5. Admin verifies the university details, official source, and representative proof.
6. Admin approves or rejects.
7. If approved, the user becomes authorized representative for that university.
8. Authorized representative can access their university dashboard.
9. Representative can view university profile, uploaded/imported programs, source status, and update requests.
10. Admin can manage universities, users, approvals, and analytics.

Make the design more professional and stylish:
The previous design is too basic. I want a premium dark web app design, not a plain dashboard.

Design style:

* Dark background, modern SaaS dashboard
* Premium AI education platform look
* Stylish, polished, futuristic, and professional
* Dark navy / charcoal / black background
* Glassmorphism cards where suitable
* Clean gradients, subtle glow, soft shadows
* Beautiful accent colors such as electric blue, violet, cyan, or red accent
* Modern typography
* Smooth spacing and hierarchy
* Creative Gen Z but still suitable for a university project report
* Make it look like a real production web app, not a basic student UI
* Screens should be screenshot-ready for the Progress 2 Software Design report

Core roles:

1. Student
2. University Representative
3. Admin

Authentication and account logic:
Design the login/account flow clearly.

Required auth screens:

1. Landing / Login choice screen
2. Login screen
3. Register screen
4. Choose role screen:

   * Student
   * Apply as University Representative
5. University Representative application form
6. Waiting for approval / pending account screen
7. Rejected application screen with admin feedback
8. Approved representative dashboard

Login rules:

* Student can log in and access student features.
* Admin can log in and access admin dashboard.
* University Representative can log in, but if not approved yet, they only see pending/rejected status.
* Approved University Representative can access only their own assigned university dashboard.
* Representative must not manage other universities.
* Admin has full access to all universities, users, applications, and analytics.

New main submission flow:
Replace “Submit New Program” with “Apply to Manage University” / “Submit University Verification”.

University Representative Application Form should include:
A. Representative Details

* Full name
* Email
* Position / role in university
* Department or office
* Contact number

B. University Details

* University name
* Country
* City
* Official website URL
* Contact email
* Contact phone
* Address
* University type / category if needed

C. Official Verification Sources

* Official university website link
* Official program catalogue link
* Admissions page link
* Tuition / fees page link
* Optional additional sources

D. Proof of Authorization

* Upload authorization letter / proof document
* University staff email verification note
* Checkbox confirming information is accurate

E. Submission actions

* Save Draft
* Preview Application
* Submit for Admin Verification

Required screens to design:

SCREEN 1: Dark Landing / Auth Entry

* UniSense logo
* Hero text about AI-powered university program discovery
* Buttons: Login, Register
* Premium dark AI SaaS style

SCREEN 2: Login Screen

* Email
* Password
* Role-aware login message
* Login button
* Forgot password
* Link to register
* Modern dark card layout

SCREEN 3: Register / Choose Role Screen

* Student card
* Apply as University Representative card
* Short explanation for each role
* Stylish selection UI

SCREEN 4: University Representative Application Form

* Multi-step form:
  Step 1: Representative Details
  Step 2: University Details
  Step 3: Official Sources
  Step 4: Proof of Authorization
  Step 5: Preview & Submit
* Dark premium form design
* Progress stepper at top
* Clear validation hints

SCREEN 5: Application Preview

* Summary of representative details
* Summary of university details
* Official sources list
* Uploaded proof card
* Completeness score
* Buttons: Back to Edit, Submit for Verification

SCREEN 6: Pending Approval Screen

* Message: “Your application is under admin review”
* Status timeline:
  Submitted → Source Verification → Admin Review → Decision
* Estimated review time
* Submitted university details preview
* Disable dashboard access until approved

SCREEN 7: Rejected Application Screen

* Red/amber status banner
* Admin feedback section
* Reasons for rejection
* Button: Edit and Resubmit

SCREEN 8: Approved University Representative Dashboard

* Welcome message
* Assigned university card
* Authorization status: Verified
* University profile completeness
* Program data source status
* Imported programs summary
* Recent update requests
* Quick actions:

  * View University Profile
  * Update University Details
  * View Imported Programs
  * Submit Source Update
  * Contact Admin

SCREEN 9: University Profile Management

* View/edit university details only for assigned university
* University name, country, city, website, contact, address
* Official source links
* Verification status
* Save changes / Submit update request
* Note: changes require admin approval

SCREEN 10: Imported Programs View

* This is not a manual program submission screen
* Show programs imported from JSON/dataset
* Table/cards:

  * Program name
  * Degree level
  * Field of study
  * Tuition range
  * Intake
  * Source status
  * Last updated
* Filters and search
* Button: Request correction / update source
* Show message: “Programs are imported from official data sources and verified before publication.”

SCREEN 11: Admin Review Queue

* Admin sees pending representative/university applications
* Stats cards:

  * Pending Applications
  * Verified Universities
  * Rejected Applications
  * Source Issues
* Table:

  * Application ID
  * Representative name
  * University name
  * Country
  * Submitted date
  * Source status
  * Proof status
  * Action: Review

SCREEN 12: Admin Application Review Details

* Split layout:
  Left: representative details + university details
  Right: verification panel
* Official source links with buttons:

  * Open Source
  * Mark Verified
  * Mark Invalid
* Proof document card
* Admin notes / feedback text area
* Buttons:

  * Approve Representative
  * Reject Application
  * Request Correction
* Confirmation modal before approve/reject

SCREEN 13: Admin Manage Universities

* Table of universities:

  * University name
  * Country
  * Representative
  * Verification status
  * Program count
  * Last updated
  * Status
  * Actions
* Add / edit / activate / deactivate university
* Dark premium admin dashboard style

SCREEN 14: Admin Manage Users

* Table of users:

  * Name
  * Email
  * Role
  * Assigned university
  * Account status
  * Last login
  * Actions: View, Suspend, Activate
* Filters by Student, University Representative, Admin, Pending, Suspended

SCREEN 15: Admin Analytics Dashboard

* Dark premium analytics screen
* Summary cards:

  * Total Users
  * Verified Universities
  * Pending Applications
  * Imported Programs
  * Approved Submissions
  * Rejected Applications
* Charts:

  * Application status distribution
  * Universities by country
  * Program import status
  * Monthly verification trend
* Recent admin actions table

SCREEN 16: Audit Logs / Admin Actions

* Table:

  * Action ID
  * Admin
  * Target Type
  * Target Name
  * Action Type
  * Reason
  * Timestamp
* Filter by approve, reject, verify, suspend, activate

Important UI states:

* Pending approval
* Approved representative
* Rejected application
* Source verified
* Source invalid
* Missing required source URL
* Upload proof missing
* Success toast
* Error toast
* Confirmation modal
* Empty state
* Loading state

Important data/entities to reflect:

* users
* university_rep_profiles
* universities
* representative_applications or program_submissions if keeping existing naming
* submission_sources
* submission_logs
* admin_actions
* system_analytics_snapshots
* programs imported from JSON later

Important change in wording:
Use “University Verification” and “Representative Authorization” more than “Program Submission”.
Programs are not manually entered one by one now. They are imported later through JSON/dataset and shown under the verified university.

Design system requirements:
Create a mini design system page with:

* Dark color palette
* Accent colors
* Typography
* Buttons
* Form fields
* Cards
* Status badges
* Tables
* Modals
* Toasts
* Sidebar/navigation
* Icons

Quality target:
I want the final UI to look like a 10/10 professional dark AI SaaS web application. It should feel stylish, futuristic, premium, and creative — not basic. Make it suitable for a software design report and impressive enough to present.

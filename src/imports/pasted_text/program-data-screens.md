Design a complete high-fidelity UI/UX screen set for the UniSense web application, specifically for the Program Data Management Subsystem.

Project context:
UniSense is an AI-enhanced university program discovery platform. Students use it to search, compare, save, and get recommendations for university programs. University Representatives submit and update official program information. Admins review, verify, approve, reject, manage users/universities, and monitor system analytics.

Subsystem to design:
Program Data Management Subsystem.

This subsystem manages the full lifecycle of university and program information:

1. University Representative submits new program information.
2. University Representative adds at least one official source link.
3. Submission is stored as Pending.
4. University Representative can track submission status.
5. University Representative can edit and resubmit rejected or pending data.
6. Admin reviews submitted program data.
7. Admin verifies the official source link.
8. Admin approves or rejects the submission.
9. Approved programs become visible to students.
10. Rejected submissions return to the representative with a rejection reason.
11. Admin can manage users, manage universities, and view system analytics.

Important note:
There are some existing screens in this repo that can be used only as rough functional reference:
https://github.com/Moayed8728/AppDev-project.git

However, do NOT copy the design style from the existing repo. I want a completely improved, modern, creative, premium, Gen Z, 10/10 design. Make it feel magical, polished, fresh, and professional at the same time. The design should look like a high-quality SaaS dashboard for an AI-powered education platform.

Design style direction:

* Modern Gen Z SaaS aesthetic
* Clean, premium, creative, and slightly futuristic
* White or soft off-white background
* Elegant cards with rounded corners
* Soft shadows and glass-like panels where suitable
* Beautiful spacing and hierarchy
* Strong visual clarity for academic report screenshots
* Use a consistent design system across all screens
* Use tasteful accent colors, but keep it professional
* Use modern typography
* Make the UI feel alive, not boring
* Add small details like status pills, progress indicators, icons, empty states, alerts, and smart microcopy
* The screens should be screenshot-ready for a university software design report

Core navigation:
Use a consistent top navigation or sidebar for the University Representative and Admin dashboards.

University Representative navigation:

* Dashboard
* Submit Program
* My Submissions
* Program Updates
* Source Links
* Profile

Admin navigation:

* Review Queue
* Pending Submissions
* Source Verification
* Universities
* Users
* Analytics
* Audit Logs

Required screens to design:

SCREEN 1: University Representative Dashboard
Purpose:
Show a quick overview for a university representative.

Content:

* Welcome message: “Welcome back, University Representative”
* Summary cards:

  * Total Submitted Programs
  * Pending Review
  * Approved Programs
  * Rejected Submissions
* Recent submissions table/card list
* Quick action button: “Submit New Program”
* Notification card for rejected submissions or required corrections
* Small AI-style helper card: “Need help improving your program data?”

SCREEN 2: Submit New Program Form
Purpose:
Allow a University Representative to submit a new program.

Form sections:
A. Basic Program Information

* University
* Program Name
* Degree Level: Bachelor, Master, PhD
* Field of Study
* Country
* City

B. Academic Details

* Program Duration
* Intake Period
* Admission Requirements
* Program Description

C. Tuition and Fees

* Minimum Tuition Fee
* Maximum Tuition Fee
* Currency

D. Official Source Link

* Source URL
* Source Description, for example “Official tuition page” or “Admission requirements page”
* Source category: Program Overview, Tuition, Admission, Intake
* Add another source link button

E. Final Actions

* Save Draft
* Preview Submission
* Submit for Review

Design details:

* Use multi-section form layout
* Add progress stepper at top: Program Info → Academic Details → Fees → Source Link → Review
* Show validation hints
* Use a beautiful “source credibility” card explaining that official links help admins verify the program faster

SCREEN 3: Preview Program Submission
Purpose:
Allow the representative to preview data before submitting.

Content:

* Program preview card similar to what students will see
* Program name, university, degree level, field, country, tuition range, duration, intake
* Official source links section
* Data completeness score, for example “92% Complete”
* Warning if source link is missing
* Buttons:

  * Back to Edit
  * Submit for Review

SCREEN 4: My Submitted Programs / Submission Tracking
Purpose:
Allow representative to track all submitted programs.

Content:

* Page title: “My Submitted Programs”
* Filter tabs:

  * All
  * Pending
  * Approved
  * Rejected
  * Drafts
* Search bar
* Submission cards or table with:

  * Program Name
  * University
  * Action Type: Create / Update
  * Status pill: Pending / Approved / Rejected / Draft
  * Source Status: Pending / Verified / Invalid
  * Submitted Date
  * Last Updated
  * Admin Feedback
  * Actions: View, Edit, Resubmit, Withdraw

Design details:

* Make status pills visually clear
* Use a timeline/progress indicator for each submission:
  Submitted → Source Check → Admin Review → Decision

SCREEN 5: Submission Details / Status Page
Purpose:
Show full details of one submitted program.

Content:

* Submission ID
* Program information summary
* Current status banner:

  * Pending Review
  * Approved
  * Rejected
* Timeline:

  * Submitted
  * Source Verification
  * Admin Review
  * Final Decision
* Official source links with verification status
* Admin comments section
* Buttons:

  * Edit Submission
  * Resubmit
  * Download Summary

SCREEN 6: Edit Submitted Information / Resubmission
Purpose:
Allow representative to edit submitted or rejected data.

Content:

* Same fields as Submit New Program Form, but pre-filled
* Rejection reason banner if rejected
* Highlight fields that need correction
* Source link editing section
* Buttons:

  * Cancel
  * Save Changes
  * Resubmit for Review

Design details:

* Add correction guidance, for example:
  “Admin requested a more specific official tuition source.”
* Make it clear that edited data returns to Pending Review.

SCREEN 7: Admin Review Dashboard
Purpose:
Admin sees all submissions requiring review.

Content:

* Page title: “Review Queue”
* Stats cards:

  * Pending Submissions
  * Sources Pending Verification
  * Approved This Week
  * Rejected This Week
* Priority queue table:

  * Submission ID
  * Program Name
  * University
  * Submitted By
  * Action Type
  * Source Status
  * Submission Date
  * Risk / Completeness
  * Action: Review
* Filters:

  * Pending
  * Source Pending
  * High Priority
  * Rejected
  * Approved
* Search bar

Design details:

* Make this screen look like a premium admin command center
* Add visual indicators for urgent or incomplete submissions

SCREEN 8: Admin Review Submission Details
Purpose:
Admin reviews one submitted program.

Content:

* Left side: submitted program details
* Right side: verification panel
* Data sections:

  * Program Info
  * Academic Details
  * Tuition and Fees
  * Admission Requirements
  * Official Source Links
* Source link cards:

  * URL
  * Source category
  * Open link button
  * Mark as Verified
  * Mark as Invalid
* Admin decision panel:

  * Approve
  * Reject
  * Request Correction
  * Rejection reason / feedback text area
* Audit preview:

  * Admin name
  * Date/time
  * Action will be recorded

Design details:

* Use a split-screen layout
* Make approve/reject actions visually strong but not aggressive
* Use confirmation modal before approval/rejection

SCREEN 9: Source Verification Screen
Purpose:
Admin verifies source links.

Content:

* List of submitted source links
* Each source card:

  * Program name
  * University
  * Submitted URL
  * Source category
  * Status: Pending / Verified / Invalid
  * Submitted by
  * Open Source
  * Verify
  * Mark Invalid
* Add small checklist:

  * Is it official university domain?
  * Does it match submitted program?
  * Does it include tuition/admission/intake details?
  * Is it up to date?

SCREEN 10: Manage Universities
Purpose:
Admin manages university records.

Content:

* University list/table:

  * University Name
  * Country
  * City
  * Website
  * Number of Programs
  * Status
  * Last Updated
  * Actions: View, Edit, Activate, Deactivate
* Add University button
* Search and filter by country/status
* University details drawer/modal

SCREEN 11: Manage Users
Purpose:
Admin manages users.

Content:

* User table:

  * Name
  * Email
  * Role
  * University if representative
  * Status
  * Last Login
  * Actions: View, Suspend, Activate
* Filters:

  * Student
  * University Representative
  * Admin
  * Pending
  * Suspended
* User profile side panel

SCREEN 12: System Analytics Dashboard
Purpose:
Admin views system-level analytics.

Content:

* Summary cards:

  * Total Users
  * Total Programs
  * Active Universities
  * Pending Submissions
  * Approved Submissions
  * Rejected Submissions
* Charts:

  * Submission status distribution
  * Monthly submission trend
  * Top universities by program count
  * Source verification status
* Recent admin actions
* Export report button

SCREEN 13: Audit Logs / Admin Actions
Purpose:
Show traceability of admin operations.

Content:

* Table:

  * Action ID
  * Admin
  * Target Type
  * Target ID
  * Action Type
  * Reason
  * Timestamp
* Filters:

  * Approve
  * Reject
  * Verify
  * Invalidate
  * Suspend
  * Activate

Functional states to design:

* Empty state: no submissions yet
* Loading state
* Success toast: “Program submitted for review”
* Error state: missing required official source link
* Rejected submission state
* Approved submission state
* Pending review state
* Source verified state
* Source invalid state
* Confirmation modal for approve/reject
* Admin feedback modal

Important data entities to reflect in UI:

* users
* university_rep_profiles
* universities
* programs
* program_submissions
* submission_sources
* submission_logs
* admin_actions
* system_analytics_snapshots

Important statuses:

* Submission status: pending, approved, rejected
* Source status: pending, verified, invalid
* Account status: active, pending, suspended
* Program status: draft, published, archived
* Action type: create, update, delete

Make sure the final Figma output includes:

1. A mini design system page:

   * Colors
   * Typography
   * Buttons
   * Cards
   * Form fields
   * Status badges
   * Tables
   * Modals
2. All screens organized into frames with clear names
3. Prototype flow connections between major screens
4. Desktop web layout, preferably 1440px width
5. Screens should be clean enough to paste directly into the Progress 2 report

Design quality target:
Make it feel like a 10/10 premium Gen Z AI education dashboard — creative, modern, elegant, professional, and screenshot-ready for an academic software design report.

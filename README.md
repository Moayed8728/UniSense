# UniSense

> AI-powered university program discovery and management platform.

**Group:** ERROR503 | **Course:** SCSE2243 – Application Development Project 1 | **University:** Universiti Teknologi Malaysia (UTM)

The original Figma design is available at <https://www.figma.com/design/RkB79uqoUuhWdKrzP1JBe3/Web-app-conversion>.

---

## Running the project

```bash
npm install        # install dependencies
npm run dev        # start development server (http://localhost:5173)
npm run build      # production build
```

---

## Module to Frontend Script Index

### 0 · Intro

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 0.1 | Intro | Intro Splash Screen | `/` | [src/app/pages/IntroSplash.tsx](src/app/pages/IntroSplash.tsx) |
| 0.2 | Intro | Landing Page | `/landing` | [src/app/pages/Landing.tsx](src/app/pages/Landing.tsx) |

### 1 · Authentication

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 1.1 | Authentication | Welcome | `/welcome` | [src/app/pages/auth/Welcome.tsx](src/app/pages/auth/Welcome.tsx) |
| 1.2 | Authentication | Login | `/auth/login` | [src/app/pages/auth/Login.tsx](src/app/pages/auth/Login.tsx) |
| 1.3 | Authentication | Create Account | `/auth/create-account` | [src/app/pages/auth/CreateAccount.tsx](src/app/pages/auth/CreateAccount.tsx) |
| 1.4 | Authentication | Role Selection | `/auth/role-selection` | [src/app/pages/auth/RoleSelection.tsx](src/app/pages/auth/RoleSelection.tsx) |
| 1.5 | Authentication | Apply as Representative | `/auth/apply-representative` | [src/app/pages/auth/ApplyRepresentative.tsx](src/app/pages/auth/ApplyRepresentative.tsx) |
| 1.6 | Authentication | Application Preview | `/auth/application-preview` | [src/app/pages/auth/ApplicationPreview.tsx](src/app/pages/auth/ApplicationPreview.tsx) |
| 1.7 | Authentication | Pending Approval | `/auth/pending` | [src/app/pages/auth/PendingApproval.tsx](src/app/pages/auth/PendingApproval.tsx) |
| 1.8 | Authentication | Rejected Application | `/auth/rejected` | [src/app/pages/auth/RejectedApplication.tsx](src/app/pages/auth/RejectedApplication.tsx) |
| 1.9 | Authentication | Suspended Account | `/auth/suspended` | [src/app/pages/auth/SuspendedAccount.tsx](src/app/pages/auth/SuspendedAccount.tsx) |
| 1.10 | Authentication | Forgot Password | `/auth/forgot-password` | [src/app/pages/auth/ForgotPassword.tsx](src/app/pages/auth/ForgotPassword.tsx) |
| 1.11 | Authentication | Check Email | `/auth/check-email` | [src/app/pages/auth/CheckEmail.tsx](src/app/pages/auth/CheckEmail.tsx) |
| 1.12 | Authentication | Reset Password | `/auth/reset-password` | [src/app/pages/auth/ResetPassword.tsx](src/app/pages/auth/ResetPassword.tsx) |
| 1.13 | Authentication | Reset Success | `/auth/reset-success` | [src/app/pages/auth/ResetSuccess.tsx](src/app/pages/auth/ResetSuccess.tsx) |

### 2 · Student

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 2.1 | Student | Student Dashboard | `/student` | [src/app/pages/student/Dashboard.tsx](src/app/pages/student/Dashboard.tsx) |
| 2.2 | Student | Saved Programs | `/student/saved` | [src/app/pages/student/SavedPrograms.tsx](src/app/pages/student/SavedPrograms.tsx) |
| 2.3 | Student | Compare Programs | `/student/compare` | [src/app/pages/student/ComparePrograms.tsx](src/app/pages/student/ComparePrograms.tsx) |
| 2.4 | Student | Recommendations | `/student/recommendations` | [src/app/pages/student/Recommendations.tsx](src/app/pages/student/Recommendations.tsx) |
| 2.5 | Student | Study Preferences | `/student/preferences` | [src/app/pages/student/StudyPreferences.tsx](src/app/pages/student/StudyPreferences.tsx) |
| 2.6 | Student | AI Assistant | `/student/ai-assistant` | [src/app/pages/student/AIAssistant.tsx](src/app/pages/student/AIAssistant.tsx) |
| 2.7 | Student | AI Recommendations | `/student/ai-recommendations` | [src/app/pages/student/AIRecommendations.tsx](src/app/pages/student/AIRecommendations.tsx) |

### 3 · Programme Discovery

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 3.1 | Programme Discovery | Discover / Search | `/discover` | [src/app/pages/discover/Search.tsx](src/app/pages/discover/Search.tsx) |
| 3.2 | Programme Discovery | Browse Programs | `/browse` | [src/app/pages/discover/Browse.tsx](src/app/pages/discover/Browse.tsx) |
| 3.3 | Programme Discovery | Smart Search | `/smart-search` | [src/app/pages/discover/SmartSearch.tsx](src/app/pages/discover/SmartSearch.tsx) |
| 3.4 | Programme Discovery | Program Details | `/programs/:id` | [src/app/pages/discover/ProgramDetails.tsx](src/app/pages/discover/ProgramDetails.tsx) |
| 3.5 | Programme Discovery | University Details | `/universities/:id` | [src/app/pages/discover/UniversityDetails.tsx](src/app/pages/discover/UniversityDetails.tsx) |

### 4 · University Representative

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 4.1 | Representative | Rep Dashboard | `/rep` | [src/app/pages/rep/Dashboard.tsx](src/app/pages/rep/Dashboard.tsx) |
| 4.2 | Representative | My University | `/rep/university` | [src/app/pages/rep/MyUniversity.tsx](src/app/pages/rep/MyUniversity.tsx) |
| 4.3 | Representative | Program Imports | `/rep/imports` | [src/app/pages/rep/ProgramImports.tsx](src/app/pages/rep/ProgramImports.tsx) |
| 4.4 | Representative | Imported Programs | `/rep/imported-programs` | [src/app/pages/rep/ImportedPrograms.tsx](src/app/pages/rep/ImportedPrograms.tsx) |
| 4.5 | Representative | Update Requests | `/rep/update-requests` | [src/app/pages/rep/UpdateRequests.tsx](src/app/pages/rep/UpdateRequests.tsx) |
| 4.6 | Representative | Source Links | `/rep/source-links` | [src/app/pages/rep/SourceLinks.tsx](src/app/pages/rep/SourceLinks.tsx) |
| 4.7 | Representative | Submission History | `/rep/history` | [src/app/pages/rep/SubmissionHistory.tsx](src/app/pages/rep/SubmissionHistory.tsx) |
| 4.8 | Representative | Profile | `/rep/profile` | [src/app/pages/rep/Profile.tsx](src/app/pages/rep/Profile.tsx) |
| 4.9 | Representative | Submit Program | `/rep/submit` | [src/app/pages/rep/SubmitProgram.tsx](src/app/pages/rep/SubmitProgram.tsx) |
| 4.10 | Representative | My Submissions | `/rep/submissions` | [src/app/pages/rep/MySubmissions.tsx](src/app/pages/rep/MySubmissions.tsx) |
| 4.11 | Representative | Submission Details | `/rep/submissions/:id` | [src/app/pages/rep/SubmissionDetails.tsx](src/app/pages/rep/SubmissionDetails.tsx) |
| 4.12 | Representative | Edit Submission | `/rep/submissions/:id/edit` | [src/app/pages/rep/EditSubmission.tsx](src/app/pages/rep/EditSubmission.tsx) |
| 4.13 | Representative | Preview Submission | `/rep/submissions/:id/preview` | [src/app/pages/rep/PreviewSubmission.tsx](src/app/pages/rep/PreviewSubmission.tsx) |

### 5 · Admin

| # | Subsystem | Page / Component | Route | Frontend Script |
|---|-----------|-----------------|-------|----------------|
| 5.1 | Admin | Admin Dashboard | `/admin` | [src/app/pages/admin/Dashboard.tsx](src/app/pages/admin/Dashboard.tsx) |
| 5.2 | Admin | Rep Applications | `/admin/rep-applications` | [src/app/pages/admin/RepApplications.tsx](src/app/pages/admin/RepApplications.tsx) |
| 5.3 | Admin | Program Imports | `/admin/imports` | [src/app/pages/admin/ProgramImports.tsx](src/app/pages/admin/ProgramImports.tsx) |
| 5.4 | Admin | Review Submission | `/admin/review/:id` | [src/app/pages/admin/ReviewSubmission.tsx](src/app/pages/admin/ReviewSubmission.tsx) |
| 5.5 | Admin | Source Verification | `/admin/sources` | [src/app/pages/admin/SourceVerification.tsx](src/app/pages/admin/SourceVerification.tsx) |
| 5.6 | Admin | Manage Universities | `/admin/universities` | [src/app/pages/admin/ManageUniversities.tsx](src/app/pages/admin/ManageUniversities.tsx) |
| 5.7 | Admin | Manage Users | `/admin/users` | [src/app/pages/admin/ManageUsers.tsx](src/app/pages/admin/ManageUsers.tsx) |
| 5.8 | Admin | System Analytics | `/admin/analytics` | [src/app/pages/admin/SystemAnalytics.tsx](src/app/pages/admin/SystemAnalytics.tsx) |
| 5.9 | Admin | Audit Logs | `/admin/audit` | [src/app/pages/admin/AuditLogs.tsx](src/app/pages/admin/AuditLogs.tsx) |
| 5.10 | Admin | Settings | `/admin/settings` | [src/app/pages/admin/Settings.tsx](src/app/pages/admin/Settings.tsx) |

### Shared – Components & Routing

| # | Subsystem | Component | Route | Frontend Script |
|---|-----------|-----------|-------|----------------|
| S.1 | Routing | App Router | — | [src/app/routes.tsx](src/app/routes.tsx) |
| S.2 | Layout | Admin Layout | — | [src/app/components/AdminLayout.tsx](src/app/components/AdminLayout.tsx) |
| S.3 | Layout | Rep Layout | — | [src/app/components/RepLayout.tsx](src/app/components/RepLayout.tsx) |
| S.4 | Layout | Student Layout | — | [src/app/components/StudentLayout.tsx](src/app/components/StudentLayout.tsx) |
| S.5 | UI | Program Card | — | [src/app/components/ProgramCard.tsx](src/app/components/ProgramCard.tsx) |
| S.6 | UI | Stats Card | — | [src/app/components/StatsCard.tsx](src/app/components/StatsCard.tsx) |
| S.7 | UI | Status Badge | — | [src/app/components/StatusBadge.tsx](src/app/components/StatusBadge.tsx) |
| S.8 | UI | UniSense Logo | — | [src/app/components/UniSenseLogo.tsx](src/app/components/UniSenseLogo.tsx) |

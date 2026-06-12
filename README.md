# UniSense

> AI-powered university program discovery and management platform.

**Group:** ERROR503 &nbsp;|&nbsp; **Course:** SCSE2243 – Application Development Project 1 &nbsp;|&nbsp; **University:** Universiti Teknologi Malaysia (UTM)

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

<table style="border-collapse:collapse;width:100%;">
  <thead>
    <tr style="background:#1e293b;color:#f8fafc;">
      <th style="padding:8px 12px;text-align:left;border:1px solid #334155;">#</th>
      <th style="padding:8px 12px;text-align:left;border:1px solid #334155;">Subsystem / Module</th>
      <th style="padding:8px 12px;text-align:left;border:1px solid #334155;">Page / Component</th>
      <th style="padding:8px 12px;text-align:left;border:1px solid #334155;">Route</th>
      <th style="padding:8px 12px;text-align:left;border:1px solid #334155;">Frontend Script</th>
    </tr>
  </thead>
  <tbody>

    <!-- ── Subsystem 0 · Intro ─────────────────────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">0 · Intro</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">0.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Intro</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Intro Splash Screen</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/IntroSplash.tsx">src/app/pages/IntroSplash.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">0.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Intro</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Landing Page</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/landing</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/Landing.tsx">src/app/pages/Landing.tsx</a></td>
    </tr>

    <!-- ── Subsystem 1 · Authentication ───────────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">1 · Authentication</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Welcome</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/welcome</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/Welcome.tsx">src/app/pages/auth/Welcome.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Login</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/login</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/Login.tsx">src/app/pages/auth/Login.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Create Account</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/create-account</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/CreateAccount.tsx">src/app/pages/auth/CreateAccount.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Role Selection</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/role-selection</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/RoleSelection.tsx">src/app/pages/auth/RoleSelection.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Apply as Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/apply-representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/ApplyRepresentative.tsx">src/app/pages/auth/ApplyRepresentative.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.6</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Application Preview</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/application-preview</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/ApplicationPreview.tsx">src/app/pages/auth/ApplicationPreview.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.7</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Pending Approval</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/pending</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/PendingApproval.tsx">src/app/pages/auth/PendingApproval.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.8</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Rejected Application</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/rejected</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/RejectedApplication.tsx">src/app/pages/auth/RejectedApplication.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.9</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Suspended Account</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/suspended</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/SuspendedAccount.tsx">src/app/pages/auth/SuspendedAccount.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.10</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Forgot Password</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/forgot-password</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/ForgotPassword.tsx">src/app/pages/auth/ForgotPassword.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.11</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Check Email</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/check-email</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/CheckEmail.tsx">src/app/pages/auth/CheckEmail.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.12</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Reset Password</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/reset-password</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/ResetPassword.tsx">src/app/pages/auth/ResetPassword.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">1.13</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Authentication</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Reset Success</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/auth/reset-success</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/auth/ResetSuccess.tsx">src/app/pages/auth/ResetSuccess.tsx</a></td>
    </tr>

    <!-- ── Subsystem 2 · Student ───────────────────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">2 · Student</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student Dashboard</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/Dashboard.tsx">src/app/pages/student/Dashboard.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Saved Programs</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/saved</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/SavedPrograms.tsx">src/app/pages/student/SavedPrograms.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Compare Programs</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/compare</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/ComparePrograms.tsx">src/app/pages/student/ComparePrograms.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Recommendations</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/recommendations</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/Recommendations.tsx">src/app/pages/student/Recommendations.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Study Preferences</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/preferences</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/StudyPreferences.tsx">src/app/pages/student/StudyPreferences.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.6</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">AI Assistant</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/ai-assistant</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/AIAssistant.tsx">src/app/pages/student/AIAssistant.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">2.7</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student</td>
      <td style="padding:6px 12px;border:1px solid #334155;">AI Recommendations</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/student/ai-recommendations</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/student/AIRecommendations.tsx">src/app/pages/student/AIRecommendations.tsx</a></td>
    </tr>

    <!-- ── Subsystem 3 · Programme Discovery ──────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">3 · Programme Discovery</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">3.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Programme Discovery</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Discover / Search</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/discover</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/discover/Search.tsx">src/app/pages/discover/Search.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">3.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Programme Discovery</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Browse Programs</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/browse</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/discover/Browse.tsx">src/app/pages/discover/Browse.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">3.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Programme Discovery</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Smart Search</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/smart-search</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/discover/SmartSearch.tsx">src/app/pages/discover/SmartSearch.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">3.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Programme Discovery</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Program Details</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/programs/:id</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/discover/ProgramDetails.tsx">src/app/pages/discover/ProgramDetails.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">3.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Programme Discovery</td>
      <td style="padding:6px 12px;border:1px solid #334155;">University Details</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/universities/:id</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/discover/UniversityDetails.tsx">src/app/pages/discover/UniversityDetails.tsx</a></td>
    </tr>

    <!-- ── Subsystem 4 · University Representative ────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">4 · University Representative</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Rep Dashboard</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/Dashboard.tsx">src/app/pages/rep/Dashboard.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">My University</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/university</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/MyUniversity.tsx">src/app/pages/rep/MyUniversity.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Program Imports</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/imports</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/ProgramImports.tsx">src/app/pages/rep/ProgramImports.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Imported Programs</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/imported-programs</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/ImportedPrograms.tsx">src/app/pages/rep/ImportedPrograms.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Update Requests</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/update-requests</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/UpdateRequests.tsx">src/app/pages/rep/UpdateRequests.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.6</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Source Links</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/source-links</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/SourceLinks.tsx">src/app/pages/rep/SourceLinks.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.7</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Submission History</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/history</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/SubmissionHistory.tsx">src/app/pages/rep/SubmissionHistory.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.8</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Profile</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/profile</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/Profile.tsx">src/app/pages/rep/Profile.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.9</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Submit Program</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/submit</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/SubmitProgram.tsx">src/app/pages/rep/SubmitProgram.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.10</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">My Submissions</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/submissions</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/MySubmissions.tsx">src/app/pages/rep/MySubmissions.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.11</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Submission Details</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/submissions/:id</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/SubmissionDetails.tsx">src/app/pages/rep/SubmissionDetails.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.12</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Edit Submission</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/submissions/:id/edit</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/EditSubmission.tsx">src/app/pages/rep/EditSubmission.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">4.13</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Representative</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Preview Submission</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/rep/submissions/:id/preview</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/rep/PreviewSubmission.tsx">src/app/pages/rep/PreviewSubmission.tsx</a></td>
    </tr>

    <!-- ── Subsystem 5 · Admin ────────────────────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">5 · Admin</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin Dashboard</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/Dashboard.tsx">src/app/pages/admin/Dashboard.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Rep Applications</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/rep-applications</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/RepApplications.tsx">src/app/pages/admin/RepApplications.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Program Imports</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/imports</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/ProgramImports.tsx">src/app/pages/admin/ProgramImports.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Review Submission</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/review/:id</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/ReviewSubmission.tsx">src/app/pages/admin/ReviewSubmission.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Source Verification</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/sources</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/SourceVerification.tsx">src/app/pages/admin/SourceVerification.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.6</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Manage Universities</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/universities</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/ManageUniversities.tsx">src/app/pages/admin/ManageUniversities.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.7</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Manage Users</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/users</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/ManageUsers.tsx">src/app/pages/admin/ManageUsers.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.8</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">System Analytics</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/analytics</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/SystemAnalytics.tsx">src/app/pages/admin/SystemAnalytics.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.9</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Audit Logs</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/audit</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/AuditLogs.tsx">src/app/pages/admin/AuditLogs.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">5.10</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Settings</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">/admin/settings</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/pages/admin/Settings.tsx">src/app/pages/admin/Settings.tsx</a></td>
    </tr>

    <!-- ── Shared Components & Routing ────────────────────────── -->
    <tr><td colspan="5" style="padding:6px 12px;background:#0f172a;color:#94a3b8;font-weight:bold;border:1px solid #334155;">Shared – Components &amp; Routing</td></tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.1</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Routing</td>
      <td style="padding:6px 12px;border:1px solid #334155;">App Router</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/routes.tsx">src/app/routes.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.2</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Admin Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/AdminLayout.tsx">src/app/components/AdminLayout.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.3</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Rep Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/RepLayout.tsx">src/app/components/RepLayout.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.4</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Student Layout</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/StudentLayout.tsx">src/app/components/StudentLayout.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.5</td>
      <td style="padding:6px 12px;border:1px solid #334155;">UI</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Program Card</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/ProgramCard.tsx">src/app/components/ProgramCard.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.6</td>
      <td style="padding:6px 12px;border:1px solid #334155;">UI</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Stats Card</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/StatsCard.tsx">src/app/components/StatsCard.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.7</td>
      <td style="padding:6px 12px;border:1px solid #334155;">UI</td>
      <td style="padding:6px 12px;border:1px solid #334155;">Status Badge</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/StatusBadge.tsx">src/app/components/StatusBadge.tsx</a></td>
    </tr>
    <tr>
      <td style="padding:6px 12px;border:1px solid #334155;">S.8</td>
      <td style="padding:6px 12px;border:1px solid #334155;">UI</td>
      <td style="padding:6px 12px;border:1px solid #334155;">UniSense Logo</td>
      <td style="padding:6px 12px;border:1px solid #334155;font-family:monospace;">—</td>
      <td style="padding:6px 12px;border:1px solid #334155;"><a href="src/app/components/UniSenseLogo.tsx">src/app/components/UniSenseLogo.tsx</a></td>
    </tr>

  </tbody>
</table>

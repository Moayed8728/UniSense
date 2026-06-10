import { createBrowserRouter } from "react-router";

// Landing
import LandingPage from "./pages/Landing";

// Auth pages
import Welcome from "./pages/auth/Welcome";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";
import RoleSelection from "./pages/auth/RoleSelection";
import ApplyRepresentative from "./pages/auth/ApplyRepresentative";
import ApplicationPreview from "./pages/auth/ApplicationPreview";
import PendingApproval from "./pages/auth/PendingApproval";
import RejectedApplication from "./pages/auth/RejectedApplication";
import SuspendedAccount from "./pages/auth/SuspendedAccount";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CheckEmail from "./pages/auth/CheckEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import ResetSuccess from "./pages/auth/ResetSuccess";

// Student pages
import StudentDashboard from "./pages/student/Dashboard";
import AIRecommendations from "./pages/student/AIRecommendations";
import ChatbotDemo from "./pages/student/ChatbotDemo";

// Representative pages
import RepDashboard from "./pages/rep/Dashboard";
import MyUniversity from "./pages/rep/MyUniversity";
import ProgramImports from "./pages/rep/ProgramImports";
import ImportedPrograms from "./pages/rep/ImportedPrograms";
import UpdateRequests from "./pages/rep/UpdateRequests";
import SourceLinks from "./pages/rep/SourceLinks";
import SubmissionHistory from "./pages/rep/SubmissionHistory";
import Profile from "./pages/rep/Profile";
import SubmitProgram from "./pages/rep/SubmitProgram";
import MySubmissions from "./pages/rep/MySubmissions";
import SubmissionDetails from "./pages/rep/SubmissionDetails";
import EditSubmission from "./pages/rep/EditSubmission";
import PreviewSubmission from "./pages/rep/PreviewSubmission";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import RepApplications from "./pages/admin/RepApplications";
import AdminProgramImports from "./pages/admin/ProgramImports";
import ReviewSubmission from "./pages/admin/ReviewSubmission";
import SourceVerification from "./pages/admin/SourceVerification";
import ManageUniversities from "./pages/admin/ManageUniversities";
import ManageUsers from "./pages/admin/ManageUsers";
import SystemAnalytics from "./pages/admin/SystemAnalytics";
import AuditLogs from "./pages/admin/AuditLogs";
import Settings from "./pages/admin/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/auth",
    children: [
      { path: "login", Component: Login },
      { path: "create-account", Component: CreateAccount },
      { path: "role-selection", Component: RoleSelection },
      { path: "apply-representative", Component: ApplyRepresentative },
      { path: "application-preview", Component: ApplicationPreview },
      { path: "pending", Component: PendingApproval },
      { path: "rejected", Component: RejectedApplication },
      { path: "suspended", Component: SuspendedAccount },
      { path: "forgot-password", Component: ForgotPassword },
      { path: "check-email", Component: CheckEmail },
      { path: "reset-password", Component: ResetPassword },
      { path: "reset-success", Component: ResetSuccess },
    ],
  },
  {
    path: "/student",
    children: [
      { index: true, Component: StudentDashboard },
      { path: "ai-recommendations", Component: AIRecommendations },
      { path: "chat", Component: ChatbotDemo },
    ],
  },
  {
    path: "/rep",
    children: [
      { index: true, Component: RepDashboard },
      { path: "university", Component: MyUniversity },
      { path: "imports", Component: ProgramImports },
      { path: "imported-programs", Component: ImportedPrograms },
      { path: "update-requests", Component: UpdateRequests },
      { path: "source-links", Component: SourceLinks },
      { path: "history", Component: SubmissionHistory },
      { path: "profile", Component: Profile },
      { path: "submit", Component: SubmitProgram },
      { path: "submissions", Component: MySubmissions },
      { path: "submissions/:id", Component: SubmissionDetails },
      { path: "submissions/:id/edit", Component: EditSubmission },
      { path: "submissions/:id/preview", Component: PreviewSubmission },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, Component: AdminDashboard },
      { path: "rep-applications", Component: RepApplications },
      { path: "imports", Component: AdminProgramImports },
      { path: "review/:id", Component: ReviewSubmission },
      { path: "sources", Component: SourceVerification },
      { path: "universities", Component: ManageUniversities },
      { path: "users", Component: ManageUsers },
      { path: "analytics", Component: SystemAnalytics },
      { path: "audit", Component: AuditLogs },
      { path: "settings", Component: Settings },
    ],
  },
]);

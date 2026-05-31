import { createBrowserRouter } from "react-router";
import RepDashboard from "./pages/rep/Dashboard";
import SubmitProgram from "./pages/rep/SubmitProgram";
import MySubmissions from "./pages/rep/MySubmissions";
import SubmissionDetails from "./pages/rep/SubmissionDetails";
import EditSubmission from "./pages/rep/EditSubmission";
import PreviewSubmission from "./pages/rep/PreviewSubmission";
import AdminDashboard from "./pages/admin/Dashboard";
import ReviewSubmission from "./pages/admin/ReviewSubmission";
import SourceVerification from "./pages/admin/SourceVerification";
import ManageUniversities from "./pages/admin/ManageUniversities";
import ManageUsers from "./pages/admin/ManageUsers";
import SystemAnalytics from "./pages/admin/SystemAnalytics";
import AuditLogs from "./pages/admin/AuditLogs";
import LandingPage from "./pages/Landing";
import DiscoverSearch from "./pages/discover/Search";
import BrowsePrograms from "./pages/discover/Browse";
import ProgramDetails from "./pages/discover/ProgramDetails";
import SmartSearch from "./pages/discover/SmartSearch";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  // Program Discovery Subsystem (Section 3.0) — student facing
  { path: "/discover", Component: DiscoverSearch },
  { path: "/browse", Component: BrowsePrograms },
  { path: "/smart-search", Component: SmartSearch },
  { path: "/programs/:id", Component: ProgramDetails },
  {
    path: "/rep",
    children: [
      { index: true, Component: RepDashboard },
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
      { path: "review/:id", Component: ReviewSubmission },
      { path: "sources", Component: SourceVerification },
      { path: "universities", Component: ManageUniversities },
      { path: "users", Component: ManageUsers },
      { path: "analytics", Component: SystemAnalytics },
      { path: "audit", Component: AuditLogs },
    ],
  },
]);

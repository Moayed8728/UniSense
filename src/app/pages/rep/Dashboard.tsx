import { RepLayout } from "../../components/RepLayout";
import { StatsCard } from "../../components/StatsCard";
import { StatusBadge } from "../../components/StatusBadge";
import { Link } from "react-router";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Plus,
  AlertCircle,
  Sparkles,
  TrendingUp
} from "lucide-react";

export default function RepDashboard() {
  const recentSubmissions = [
    { 
      id: "SUB-001", 
      program: "Master of Computer Science", 
      university: "MIT", 
      status: "approved" as const,
      submittedDate: "2026-05-25",
      reviewedDate: "2026-05-28"
    },
    { 
      id: "SUB-002", 
      program: "Bachelor of Business Administration", 
      university: "Harvard University", 
      status: "pending" as const,
      submittedDate: "2026-05-28"
    },
    { 
      id: "SUB-003", 
      program: "PhD in Artificial Intelligence", 
      university: "Stanford University", 
      status: "rejected" as const,
      submittedDate: "2026-05-20",
      reviewedDate: "2026-05-22",
      feedback: "Please provide more specific official source for tuition information"
    },
  ];

  return (
    <RepLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">Online</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Welcome back, <span className="text-gradient-hero">University Representative</span>
            </h1>
            <p className="text-muted-foreground text-lg">Manage your program submissions and track their status in real-time</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Submitted Programs"
            value={24}
            icon={FileText}
            trend="+3 this month"
            trendUp={true}
            color="blue"
          />
          <StatsCard
            title="Pending Review"
            value={5}
            icon={Clock}
            trend="2 in queue"
            color="amber"
          />
          <StatsCard
            title="Approved Programs"
            value={18}
            icon={CheckCircle}
            trend="+2 this week"
            trendUp={true}
            color="green"
          />
          <StatsCard
            title="Rejected Submissions"
            value={1}
            icon={XCircle}
            trend="Needs attention"
            color="red"
          />
        </div>

        {/* Rejected Notification */}
        <div className="glass-card rounded-2xl p-6 shadow-premium border-l-4 border-destructive">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive blur-lg opacity-30" />
              <div className="relative bg-destructive/10 p-3 rounded-xl">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-destructive mb-2">Action Required: 1 Rejected Submission</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Your PhD in Artificial Intelligence submission was rejected. Please review admin feedback and resubmit.
              </p>
              <Link
                to="/rep/submissions/SUB-003"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-destructive text-white rounded-xl hover:bg-destructive/90 transition-all text-sm font-semibold shadow-premium hover:shadow-premium-lg"
              >
                Review & Resubmit
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Submissions */}
          <div className="lg:col-span-2 glass-card rounded-2xl shadow-premium-lg overflow-hidden">
            <div className="p-6 border-b border-glass-border">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Recent Submissions</h2>
                <Link
                  to="/rep/submissions"
                  className="text-sm text-primary hover:text-primary-hover font-semibold flex items-center gap-1.5 group"
                >
                  View All
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="glass-card rounded-xl p-5 glass-card-hover border-glow group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{submission.program}</h3>
                          <StatusBadge status={submission.status} />
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{submission.university}</p>
                        <p className="text-xs text-muted-foreground">
                          Submitted: {new Date(submission.submittedDate).toLocaleDateString()}
                          {submission.reviewedDate && ` • Reviewed: ${new Date(submission.reviewedDate).toLocaleDateString()}`}
                        </p>
                      </div>
                      <Link
                        to={`/rep/submissions/${submission.id}`}
                        className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 rounded-xl font-semibold transition-all opacity-0 group-hover:opacity-100"
                      >
                        View Details
                      </Link>
                    </div>
                    {submission.feedback && (
                      <div className="glass-card border-l-4 border-destructive rounded-lg p-3 mt-3 bg-destructive/5">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-destructive">Admin Feedback:</span> {submission.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="relative overflow-hidden glass-card rounded-2xl p-6 shadow-premium-lg border-glow group">
              <div className="absolute inset-0 gradient-hero opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="relative mb-4 w-fit">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2">Submit New Program</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Add a new university program to the platform
                </p>
                <Link
                  to="/rep/submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-primary rounded-xl hover:bg-white/90 transition-all font-semibold shadow-premium"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl shadow-premium p-6 border-glow">
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
                <div className="relative bg-primary/10 p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Helper</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Need help improving your program data? Our AI assistant can help optimize your submissions for faster approval.
              </p>
              <button className="text-sm text-primary hover:text-primary-hover font-semibold flex items-center gap-1.5 group">
                Ask AI Assistant
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="glass-card rounded-2xl shadow-premium p-6 border-glow">
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-success blur-lg opacity-30" />
                <div className="relative bg-success/10 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-3">Approval Rate</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-bold">95%</span>
                <span className="text-sm text-success font-semibold">+5%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your submissions have a high approval rate. Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

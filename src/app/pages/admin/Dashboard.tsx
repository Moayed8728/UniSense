import { AdminLayout } from "../../components/AdminLayout";
import { StatsCard } from "../../components/StatsCard";
import { StatusBadge } from "../../components/StatusBadge";
import { Link } from "react-router";
import { useState } from "react";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Search,
  Filter,
  Eye,
  TrendingUp,
  Users
} from "lucide-react";

type FilterType = "all" | "pending" | "source-pending" | "high-priority" | "rejected" | "approved";

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("pending");
  const [searchQuery, setSearchQuery] = useState("");

  const submissions = [
    {
      id: "SUB-002",
      program: "Bachelor of Business Administration",
      university: "Harvard University",
      submittedBy: "John Smith",
      actionType: "Create",
      sourceStatus: "pending" as const,
      submissionDate: "2026-05-28",
      risk: "low",
      completeness: 95,
    },
    {
      id: "SUB-006",
      program: "Master of Data Analytics",
      university: "MIT",
      submittedBy: "Sarah Johnson",
      actionType: "Create",
      sourceStatus: "pending" as const,
      submissionDate: "2026-05-29",
      risk: "medium",
      completeness: 88,
    },
    {
      id: "SUB-007",
      program: "PhD in Quantum Computing",
      university: "Stanford University",
      submittedBy: "David Chen",
      actionType: "Update",
      sourceStatus: "verified" as const,
      submissionDate: "2026-05-30",
      risk: "low",
      completeness: 98,
    },
    {
      id: "SUB-008",
      program: "Bachelor of Computer Engineering",
      university: "UC Berkeley",
      submittedBy: "Emily Brown",
      actionType: "Create",
      sourceStatus: "invalid" as const,
      submissionDate: "2026-05-27",
      risk: "high",
      completeness: 75,
    },
  ];

  const filteredSubmissions = submissions.filter(sub => {
    const matchesFilter = 
      activeFilter === "all" ||
      (activeFilter === "pending" && sub.sourceStatus === "pending") ||
      (activeFilter === "source-pending" && sub.sourceStatus === "pending") ||
      (activeFilter === "high-priority" && sub.risk === "high");
    
    const matchesSearch = 
      sub.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.submittedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-xl border-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 to-accent-pink/20" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-violet/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-[100px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-accent-violet rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">Live Updates Enabled</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-gradient-hero">Admin</span> Review Queue
            </h1>
            <p className="text-muted-foreground text-lg">Review and verify program submissions from university representatives</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Pending Submissions"
            value={12}
            icon={Clock}
            trend="4 today"
            color="amber"
          />
          <StatsCard
            title="Sources Pending Verification"
            value={8}
            icon={AlertCircle}
            trend="2 urgent"
            color="blue"
          />
          <StatsCard
            title="Approved This Week"
            value={23}
            icon={CheckCircle}
            trend="+15% vs last week"
            trendUp={true}
            color="green"
          />
          <StatsCard
            title="Rejected This Week"
            value={3}
            icon={XCircle}
            trend="-2 vs last week"
            trendUp={true}
            color="red"
          />
        </div>

        {/* Priority Queue */}
        <div className="glass-card rounded-2xl shadow-premium-lg overflow-hidden">
          <div className="p-6 border-b border-glass-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-semibold">Priority Review Queue</h2>

              <div className="flex items-center gap-4">
                {/* Filters */}
                <div className="flex items-center gap-2">
                  {[
                    { key: "all" as const, label: "All", count: submissions.length },
                    { key: "pending" as const, label: "Pending", count: submissions.filter(s => s.sourceStatus === "pending").length },
                    { key: "source-pending" as const, label: "Source Pending", count: submissions.filter(s => s.sourceStatus === "pending").length },
                    { key: "high-priority" as const, label: "High Priority", count: submissions.filter(s => s.risk === "high").length },
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                        activeFilter === filter.key
                          ? "bg-accent-violet/20 text-accent-violet border border-accent-violet/30"
                          : "text-muted-foreground hover:bg-accent-violet/5 border border-transparent"
                      }`}
                    >
                      {filter.label}
                      <span className={`ml-2 px-2 py-0.5 rounded-lg text-xs font-bold ${
                        activeFilter === filter.key
                          ? "bg-accent-violet/30"
                          : "bg-muted"
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search submissions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2.5 glass-card border border-glass-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 w-64 text-sm transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-background-secondary/50 border-b border-glass-border">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Submission</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Submitted By</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Source Status</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Date</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Risk / Complete</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-glass-border">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-5">
                      <div>
                        <p className="font-semibold text-foreground mb-1">{submission.program}</p>
                        <p className="text-sm text-muted-foreground">{submission.university}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">ID: {submission.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-foreground font-medium">{submission.submittedBy}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm text-muted-foreground font-medium">{submission.actionType}</span>
                    </td>
                    <td className="px-6 py-5">
                      <StatusBadge status={submission.sourceStatus} />
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-foreground">{new Date(submission.submissionDate).toLocaleDateString()}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            submission.risk === "high" ? "bg-destructive" :
                            submission.risk === "medium" ? "bg-warning" :
                            "bg-success"
                          } animate-pulse`} />
                          <span className="text-xs text-muted-foreground font-semibold capitalize">{submission.risk} risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground/70 font-medium">{submission.completeness}% complete</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <Link
                        to={`/admin/review/${submission.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-violet text-white rounded-xl hover:bg-accent-violet/90 transition-all text-sm font-semibold shadow-premium group-hover:shadow-premium-lg"
                      >
                        <Eye className="w-4 h-4" />
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl shadow-premium p-6 border-glow">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Review Performance</h3>
                <p className="text-sm text-muted-foreground">Average review time this month</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-success blur-lg opacity-30" />
                <div className="relative bg-success/10 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">2.3</span>
              <span className="text-muted-foreground font-medium">days</span>
              <span className="text-sm text-success ml-3 font-semibold">-15% faster</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl shadow-premium p-6 border-glow">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Active Contributors</h3>
                <p className="text-sm text-muted-foreground">University representatives</p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue blur-lg opacity-30" />
                <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-accent-blue" />
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">47</span>
              <span className="text-muted-foreground font-medium">active</span>
              <span className="text-sm text-success ml-3 font-semibold">+8 this month</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

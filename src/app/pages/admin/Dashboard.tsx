import { AdminLayout } from "../../components/AdminLayout";
import { StatsCard } from "../../components/StatsCard";
import { StatusBadge } from "../../components/StatusBadge";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getProgramSubmissions, PROTOTYPE_DATA_CHANGED_EVENT } from "../../lib/prototypeStore";
import {
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Eye,
  TrendingUp,
  Users,
  ClipboardCheck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type FilterType = "all" | "pending" | "source-pending" | "high-priority" | "rejected" | "approved";

export default function AdminDashboard() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [universityFilter, setUniversityFilter] = useState("all");

  const loadSubmissions = () => getProgramSubmissions()
    .filter((submission) => submission.status !== "draft")
    .map((submission) => ({
      ...submission,
      submissionDate: submission.submittedDate,
      risk: submission.sourceStatus === "invalid" ? "high" : submission.sources.length ? "low" : "medium",
      completeness: Math.round(([
        submission.program, submission.degreeLevel, submission.fieldOfStudy, submission.duration,
        submission.intake, submission.requirements, submission.description, submission.tuitionMin,
        submission.tuitionMax, submission.sources[0]?.url,
      ].filter(Boolean).length / 10) * 100),
    }));
  const [submissions, setSubmissions] = useState(loadSubmissions);

  useEffect(() => {
    const sync = () => setSubmissions(loadSubmissions());
    window.addEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const filteredSubmissions = submissions.filter(sub => {
    const matchesFilter = 
      activeFilter === "all" ||
      (activeFilter === "pending" && sub.sourceStatus === "pending") ||
      (activeFilter === "source-pending" && sub.sourceStatus === "pending") ||
      (activeFilter === "high-priority" && sub.risk === "high") ||
      (activeFilter === "approved" && sub.status === "approved") ||
      (activeFilter === "rejected" && sub.status === "rejected");
    
    const matchesSearch = 
      sub.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.submittedBy.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUniversity = universityFilter === "all" || sub.universityId === universityFilter;
    
    return matchesFilter && matchesSearch && matchesUniversity;
  });

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl p-8 shadow-premium-xl border border-accent-violet/20 bg-[linear-gradient(120deg,rgba(32,24,53,0.96),rgba(20,19,35,0.96))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.28),transparent_34%)]" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-accent-violet rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold">Live operations</span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-bold mb-3 tracking-tight">
              Verification <span className="text-gradient-hero">Command Center</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">Review representative access, official evidence, and university program data from one trusted workspace.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 min-w-[320px]">
              <Link to="/admin/rep-applications" className="rounded-2xl p-4 bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] transition-all">
                <ShieldCheck className="w-5 h-5 text-success mb-3" />
                <p className="text-2xl font-bold">{submissions.filter((item) => item.status === "pending").length}</p>
                <p className="text-xs text-muted-foreground">Pending decisions</p>
              </Link>
              <Link to="/admin/submissions" className="rounded-2xl p-4 bg-accent-violet/10 border border-accent-violet/20 hover:bg-accent-violet/15 transition-all">
                <ClipboardCheck className="w-5 h-5 text-accent-violet mb-3" />
                <p className="text-sm font-semibold">Open queue</p>
                <p className="text-xs text-muted-foreground mt-1">Review program records</p>
                <ArrowRight className="w-4 h-4 text-accent-violet mt-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Pending Submissions"
            value={submissions.filter((item) => item.status === "pending").length}
            icon={Clock}
            trend="4 today"
            color="amber"
          />
          <StatsCard
            title="Sources Pending Verification"
            value={submissions.filter((item) => item.sourceStatus === "pending").length}
            icon={AlertCircle}
            trend="2 urgent"
            color="blue"
          />
          <StatsCard
            title="Approved This Week"
            value={submissions.filter((item) => item.status === "approved").length}
            icon={CheckCircle}
            trend="+15% vs last week"
            trendUp={true}
            color="green"
          />
          <StatsCard
            title="Rejected This Week"
            value={submissions.filter((item) => item.status === "rejected").length}
            icon={XCircle}
            trend="-2 vs last week"
            trendUp={true}
            color="red"
          />
        </div>

        {/* Priority Queue */}
        <div className="glass-card rounded-2xl shadow-premium-lg overflow-hidden">
          <div className="p-6 border-b border-glass-border">
            <div className="flex items-start justify-between flex-wrap gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold mb-2">Operational queue</p>
                <h2 className="text-2xl font-semibold">Priority Review Queue</h2>
              </div>

              <div className="flex items-center justify-end gap-3 flex-wrap">
                <select
                  value={universityFilter}
                  onChange={(event) => setUniversityFilter(event.target.value)}
                  className="px-3 py-2.5 glass-card border border-glass-border rounded-xl text-sm focus:outline-none focus:border-primary/50"
                  aria-label="Filter submissions by university"
                >
                  <option value="all">All universities</option>
                  {Array.from(new Map(submissions.map((submission) => [submission.universityId, submission.university])).entries()).map(([id, name]) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
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
                        <p className="text-xs text-accent-blue mt-1">University ID: {submission.universityId}</p>
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
            {filteredSubmissions.length === 0 && (
              <div className="py-16 px-6 text-center border-t border-glass-border">
                <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-lg">Queue is clear</h3>
                <p className="text-sm text-muted-foreground mt-1">No records match the current filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-3 gap-5">
          <Link
            to="/admin/rep-applications"
            className="group glass-card rounded-2xl p-5 shadow-premium glass-card-hover border-glow flex items-center gap-4"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-warning blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-warning/10 p-3 rounded-xl">
                <ClipboardCheck className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-0.5">Rep Applications</div>
              <div className="text-sm text-muted-foreground">3 pending review</div>
            </div>
          </Link>
          <Link
            to="/admin/imports"
            className="group glass-card rounded-2xl p-5 shadow-premium glass-card-hover border-glow flex items-center gap-4"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-accent-blue blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                <Filter className="w-6 h-6 text-accent-blue" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-0.5">Program Source Review</div>
              <div className="text-sm text-muted-foreground">5 source datasets pending</div>
            </div>
          </Link>
          <Link
            to="/admin/settings"
            className="group glass-card rounded-2xl p-5 shadow-premium glass-card-hover border-glow flex items-center gap-4"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-muted-foreground blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-muted/20 p-3 rounded-xl">
                <Eye className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-0.5">System Settings</div>
              <div className="text-sm text-muted-foreground">Configure platform</div>
            </div>
          </Link>
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

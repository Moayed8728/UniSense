import { RepLayout } from "../../components/RepLayout";
import { StatsCard } from "../../components/StatsCard";
import { StatusBadge } from "../../components/StatusBadge";
import { Link } from "react-router";
import {
  Upload,
  Table2,
  RefreshCw,
  Building2,
  ShieldCheck,
  Lock,
  AlertCircle,
  TrendingUp,
  CheckCircle,
  Clock,
  FileX,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const recentImports = [
  { id: "IMP-008", description: "Bulk CSV import", programCount: 147, status: "pending" as const, date: "2026-05-30" },
  { id: "IMP-006", description: "JSON import: Computing programs", programCount: 23, status: "approved" as const, date: "2026-05-05" },
  { id: "IMP-004", description: "URL crawl: Engineering faculty", programCount: 45, status: "approved" as const, date: "2026-04-28" },
];

export default function RepDashboard() {
  return (
    <RepLayout>
      <div className="space-y-8">
        {/* Assigned University Banner */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-8 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">Verified Representative</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, <span className="text-gradient-hero">Ahmad Razak</span>
              </h1>
              <p className="text-muted-foreground">Manage program data for your assigned university.</p>
            </div>
            <div className="glass-card rounded-2xl p-5 min-w-60" style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.06)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Assigned University</p>
                  <p className="text-sm font-bold text-foreground">Universiti Teknologi Malaysia</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-success" />
                <span className="text-xs text-success font-medium">Verified Representative</span>
              </div>
            </div>
          </div>
        </div>

        {/* Access Restriction Notice */}
        <div
          className="glass-card rounded-xl p-4 flex items-start gap-3 text-sm"
          style={{ border: "1px solid rgba(124,58,237,0.15)", background: "rgba(124,58,237,0.04)" }}
        >
          <Lock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">Access restricted to assigned university.</span>{" "}
            You are authorized to manage only Universiti Teknologi Malaysia. Changes require admin approval before publication.
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <StatsCard title="Programs Imported" value={215} icon={Table2} trend="+147 this month" trendUp={true} color="blue" />
          <StatsCard title="Published" value={132} icon={CheckCircle} trend="Live for students" trendUp={true} color="green" />
          <StatsCard title="Pending Review" value={80} icon={Clock} trend="3 import batches" color="amber" />
          <StatsCard title="Rejected" value={3} icon={FileX} trend="Needs attention" color="red" />
        </div>

        {/* Alert: Pending import */}
        <div className="glass-card rounded-2xl p-5 shadow-premium border-l-4 border-warning">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-warning blur-lg opacity-20" />
              <div className="relative bg-warning/10 p-3 rounded-xl">
                <AlertCircle className="w-5 h-5 text-warning" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-warning mb-1">Import Pending Admin Review</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Your CSV import of 147 programs is waiting for admin approval. Program imports are verified before becoming visible to students.
              </p>
              <Link
                to="/rep/imports"
                className="inline-flex items-center gap-2 px-4 py-2 bg-warning text-black rounded-xl hover:bg-warning/90 transition-all text-sm font-semibold"
              >
                View Import Status
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Imports */}
          <div className="lg:col-span-2 glass-card rounded-2xl shadow-premium-lg overflow-hidden">
            <div className="p-5 border-b border-glass-border flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Imports</h2>
              <Link to="/rep/history" className="text-sm text-primary hover:text-primary-hover font-semibold flex items-center gap-1 group">
                View History
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="p-5 space-y-3">
              {recentImports.map((imp) => (
                <div key={imp.id} className="glass-card rounded-xl p-4 flex items-center gap-4 glass-card-hover group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Upload className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-0.5">
                      <p className="font-medium text-sm text-foreground">{imp.description}</p>
                      <StatusBadge status={imp.status} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {imp.programCount} programs • {imp.id} • {new Date(imp.date).toLocaleDateString()}
                    </p>
                  </div>
                  <Link
                    to="/rep/imports"
                    className="text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  >
                    View →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-5">
            <div className="relative overflow-hidden glass-card rounded-2xl p-5 shadow-premium-lg border-glow group cursor-pointer">
              <div className="absolute inset-0 gradient-hero opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="relative mb-3 w-fit">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white/10 p-2.5 rounded-xl">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Import Programs</h3>
                <p className="text-xs text-muted-foreground mb-4">Upload JSON/CSV or submit catalogue URL</p>
                <Link to="/rep/imports" className="w-full flex items-center justify-center py-2.5 bg-white text-primary rounded-xl text-sm font-semibold hover:bg-white/90 transition-all">
                  Start Import
                </Link>
              </div>
            </div>

            <Link to="/rep/university" className="block glass-card rounded-2xl p-5 shadow-premium glass-card-hover border-glow group">
              <div className="relative mb-3 w-fit">
                <div className="absolute inset-0 bg-success blur-lg opacity-30" />
                <div className="relative bg-success/10 p-2.5 rounded-xl">
                  <Building2 className="w-5 h-5 text-success" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">My University</h3>
              <p className="text-xs text-muted-foreground mb-3">View UTM profile, completion status, and stats</p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-12 h-1 rounded-full bg-glass-border">
                    <div className="w-10 h-full rounded-full bg-success" />
                  </div>
                  <span className="text-muted-foreground">89% complete</span>
                </div>
                <span className="text-success font-semibold group-hover:underline">View →</span>
              </div>
            </Link>

            <div className="glass-card rounded-2xl p-5 shadow-premium border-glow">
              <div className="relative mb-3 w-fit">
                <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
                <div className="relative bg-primary/10 p-2.5 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">Approval Rate</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold">91%</span>
                <span className="text-sm text-success font-semibold">+6%</span>
              </div>
              <p className="text-xs text-muted-foreground">Your imports have a high approval rate.</p>
            </div>

            <div className="glass-card rounded-2xl p-5 shadow-premium">
              <div className="relative mb-3 w-fit">
                <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
                <div className="relative bg-primary/10 p-2.5 rounded-xl">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">AI Assistant</h3>
              <p className="text-xs text-muted-foreground mb-3">Need help optimizing your program data?</p>
              <button className="text-xs text-primary hover:text-primary-hover font-semibold flex items-center gap-1.5 group">
                Ask AI Assistant
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getRepresentativeApplications,
  PROTOTYPE_DATA_CHANGED_EVENT,
  RepresentativeApplication,
  reviewRepresentativeApplication,
} from "../../lib/prototypeStore";
import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  UserCheck,
  Building2,
  Globe,
  X,
  Sparkles,
} from "lucide-react";

type AppStatus = "pending" | "approved" | "rejected";

interface Application extends RepresentativeApplication {
  name: string;
  university: string;
  website: string;
  completeness: number;
  status: AppStatus;
}

const loadApplications = (): Application[] =>
  getRepresentativeApplications()
    .filter((application) => application.status !== "draft")
    .map((application) => {
      const fields = [
        application.fullName, application.email, application.position, application.department,
        application.contactNumber, application.universityName, application.country, application.city,
        application.websiteUrl, application.contactEmail, application.address,
        application.proofDocumentName, application.officialSourceLink,
      ];
      return {
        ...application,
        name: application.fullName,
        university: application.universityName,
        website: application.websiteUrl,
        completeness: Math.round((fields.filter(Boolean).length / fields.length) * 100),
        status: application.status as AppStatus,
      };
    });

export default function RepApplications() {
  const [applications, setApplications] = useState<Application[]>(loadApplications);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | AppStatus>("all");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [showConfirm, setShowConfirm] = useState<{ action: "approve" | "reject"; app: Application } | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    const sync = () => setApplications(loadApplications());
    window.addEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const filtered = applications.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.university.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const handleAction = (action: "approve" | "reject") => {
    if (!showConfirm) return;
    reviewRepresentativeApplication(showConfirm.app.id, action === "approve" ? "approved" : "rejected", rejectReason);
    setApplications(loadApplications());
    setShowConfirm(null);
    setSelectedApp(null);
    setRejectReason("");
    if (action === "approve") {
      toast.success(`Application approved! Representative access granted.`);
    } else {
      toast.error(`Application rejected. Feedback sent to applicant.`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-8 shadow-premium-xl border-glow">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.08))" }} />
          <div className="relative flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Representative Applications</h1>
              <p className="text-muted-foreground">Review and approve university representative access requests.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <Clock className="w-4 h-4 text-warning" />
              <span className="text-sm text-warning font-semibold">{applications.filter(a => a.status === "pending").length} Pending</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">
          {[
            { label: "Total Applications", value: applications.length, color: "text-foreground", icon: UserCheck, bg: "bg-primary/10", iconColor: "text-primary" },
            { label: "Pending Review", value: applications.filter(a => a.status === "pending").length, color: "text-warning", icon: Clock, bg: "bg-warning/10", iconColor: "text-warning" },
            { label: "Approved", value: applications.filter(a => a.status === "approved").length, color: "text-success", icon: CheckCircle, bg: "bg-success/10", iconColor: "text-success" },
            { label: "Rejected", value: applications.filter(a => a.status === "rejected").length, color: "text-destructive", icon: XCircle, bg: "bg-destructive/10", iconColor: "text-destructive" },
          ].map(({ label, value, color, icon: Icon, bg, iconColor }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium flex items-center gap-4">
              <div className={`${bg} p-3 rounded-xl shrink-0`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="glass-card rounded-2xl shadow-premium-lg overflow-hidden">
          <div className="p-5 border-b border-glass-border flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-56">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search applicants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 glass-card border border-glass-border rounded-xl focus:outline-none focus:border-accent-violet/50 focus:ring-2 focus:ring-accent-violet/20 text-sm transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {(["all", "pending", "approved", "rejected"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${filterStatus === s ? "bg-accent-violet/20 text-accent-violet border border-accent-violet/30" : "text-muted-foreground hover:text-foreground border border-transparent"}`}
                >
                  {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ background: "rgba(15,15,22,0.5)", borderBottom: "1px solid var(--glass-border)" }}>
                <tr>
                  {["Applicant", "University", "Position", "Completeness", "Submitted", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-glass-border">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-accent-violet/3 transition-colors group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent-violet/20 flex items-center justify-center shrink-0 text-accent-violet font-bold text-sm">
                          {app.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{app.university}</p>
                          <p className="text-xs text-muted-foreground">{app.country}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{app.position}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-glass-border max-w-20">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${app.completeness}%`,
                              background: app.completeness >= 90 ? "var(--success)" : app.completeness >= 75 ? "var(--warning)" : "var(--destructive)",
                            }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground">{app.completeness}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {new Date(app.submittedDate).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={app.status} />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="flex items-center gap-1.5 px-3 py-2 bg-accent-violet text-white rounded-xl text-xs font-semibold hover:bg-accent-violet/90 shadow-premium transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Review
                        </button>
                        {app.status === "pending" && (
                          <>
                            <button
                              onClick={() => setShowConfirm({ action: "approve", app })}
                              className="p-2 rounded-xl bg-success/10 text-success hover:bg-success/20 transition-all"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setShowConfirm({ action: "reject", app })}
                              className="p-2 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={() => setSelectedApp(null)} />
          <div className="relative glass-card rounded-3xl p-8 max-w-2xl w-full shadow-premium-xl border-glow max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedApp(null)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-violet/20 flex items-center justify-center text-accent-violet font-bold text-xl shrink-0">
                {selectedApp.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedApp.name}</h3>
                <p className="text-muted-foreground">{selectedApp.position}</p>
                <div className="mt-2"><StatusBadge status={selectedApp.status} /></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Email", value: selectedApp.email, icon: Sparkles },
                { label: "University", value: selectedApp.university, icon: Building2 },
                { label: "Country", value: selectedApp.country, icon: Globe },
                { label: "Website", value: selectedApp.website, icon: Globe },
                { label: "Completeness", value: `${selectedApp.completeness}%`, icon: CheckCircle },
                { label: "Submitted", value: new Date(selectedApp.submittedDate).toLocaleDateString(), icon: Clock },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
            {selectedApp.status === "pending" && (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setSelectedApp(null); setShowConfirm({ action: "reject", app: selectedApp }); }}
                  className="flex items-center justify-center gap-2 py-3 glass-card border border-destructive/30 text-destructive rounded-xl font-semibold hover:bg-destructive/5 transition-all"
                >
                  <XCircle className="w-4 h-4" />
                  Reject Application
                </button>
                <button
                  onClick={() => { setSelectedApp(null); setShowConfirm({ action: "approve", app: selectedApp }); }}
                  className="flex items-center justify-center gap-2 py-3 bg-success text-white rounded-xl font-semibold shadow-premium hover:bg-success/90 transition-all"
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve Application
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }} onClick={() => setShowConfirm(null)} />
          <div className="relative glass-card rounded-3xl p-8 max-w-md w-full shadow-premium-xl border-glow">
            <button onClick={() => setShowConfirm(null)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className={`relative mb-5 w-fit`}>
              <div className={`absolute inset-0 blur-xl opacity-40 ${showConfirm.action === "approve" ? "bg-success" : "bg-destructive"}`} />
              <div className={`relative p-4 rounded-2xl ${showConfirm.action === "approve" ? "bg-success/10" : "bg-destructive/10"}`}>
                {showConfirm.action === "approve"
                  ? <CheckCircle className="w-8 h-8 text-success" />
                  : <XCircle className="w-8 h-8 text-destructive" />
                }
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {showConfirm.action === "approve" ? "Approve Application?" : "Reject Application?"}
            </h3>
            <p className="text-muted-foreground mb-5">
              {showConfirm.action === "approve"
                ? `Approving ${showConfirm.app.name}'s application will grant them access to manage ${showConfirm.app.university}.`
                : `Rejecting this application will notify the applicant and allow them to resubmit.`
              }
            </p>
            {showConfirm.action === "reject" && (
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-2">Rejection Reason (optional)</label>
                <textarea
                  rows={3}
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Provide feedback for the applicant..."
                  className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-destructive/50 focus:ring-2 focus:ring-destructive/20 text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowConfirm(null)} className="py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 transition-all">
                Cancel
              </button>
              <button
                onClick={() => handleAction(showConfirm.action)}
                className={`py-3 text-white rounded-xl font-semibold shadow-premium transition-all ${showConfirm.action === "approve" ? "bg-success hover:bg-success/90" : "bg-destructive hover:bg-destructive/90"}`}
              >
                {showConfirm.action === "approve" ? "Approve" : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

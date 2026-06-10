import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, RefreshCw, Clock, CheckCircle2, X, AlertCircle, Lock } from "lucide-react";

const requests = [
  {
    id: "UPD-001",
    type: "Program Update",
    program: "Bachelor of Computer Science (Software Engineering)",
    field: "Tuition Fee",
    currentValue: "RM 35,000 / year",
    requestedValue: "RM 38,000 / year",
    reason: "Fee revision for 2026/2027 academic year",
    status: "pending" as const,
    submittedDate: "2026-05-28",
  },
  {
    id: "UPD-002",
    type: "University Update",
    program: "Universiti Teknologi Malaysia",
    field: "Official Website",
    currentValue: "www.utm.my",
    requestedValue: "www.utm.my/v2",
    reason: "Website migration to new domain structure",
    status: "approved" as const,
    submittedDate: "2026-05-20",
    reviewedDate: "2026-05-22",
  },
  {
    id: "UPD-003",
    type: "Program Update",
    program: "Master of Science (Data Science)",
    field: "Duration",
    currentValue: "1.5 years",
    requestedValue: "2 years",
    reason: "Curriculum restructuring approved by university senate",
    status: "rejected" as const,
    submittedDate: "2026-05-15",
    reviewedDate: "2026-05-18",
    adminFeedback: "Please provide official senate approval document.",
  },
];

export default function UpdateRequests() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setShowModal(false);
    toast.success("Update request submitted for admin review!");
  };

  return (
    <RepLayout>
      <div className="space-y-8 max-w-5xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Update Requests</h1>
            <p className="text-muted-foreground">Submit requests to update university or program data. Changes require admin approval.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            New Request
          </button>
        </div>

        {/* Notice */}
        <div
          className="glass-card rounded-2xl p-5 flex items-start gap-4"
          style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.04)" }}
        >
          <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Changes require admin approval before publication.</span>{" "}
            All submitted update requests are reviewed by an admin before any changes go live.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { label: "Pending Review", value: requests.filter(r => r.status === "pending").length, icon: Clock, color: "text-warning", bg: "bg-warning/10" },
            { label: "Approved", value: requests.filter(r => r.status === "approved").length, icon: CheckCircle2, color: "text-success", bg: "bg-success/10" },
            { label: "Rejected", value: requests.filter(r => r.status === "rejected").length, icon: X, color: "text-destructive", bg: "bg-destructive/10" },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium flex items-center gap-4">
              <div className={`${bg} p-3 rounded-xl`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Requests list */}
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="glass-card rounded-2xl p-6 shadow-premium glass-card-hover border-glow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">{req.id}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full glass-card border border-glass-border text-muted-foreground">
                      {req.type}
                    </span>
                    <StatusBadge status={req.status} />
                  </div>
                  <h3 className="font-semibold text-foreground">{req.program}</h3>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>Submitted: {new Date(req.submittedDate).toLocaleDateString()}</p>
                  {req.reviewedDate && <p>Reviewed: {new Date(req.reviewedDate).toLocaleDateString()}</p>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 glass-card rounded-xl p-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Field</p>
                  <p className="text-sm font-semibold text-foreground">{req.field}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Current Value</p>
                  <p className="text-sm text-muted-foreground line-through">{req.currentValue}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Requested Value</p>
                  <p className="text-sm font-semibold text-primary">{req.requestedValue}</p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Reason: </span>{req.reason}
              </div>

              {req.adminFeedback && (
                <div
                  className="rounded-xl p-3 text-sm"
                  style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
                >
                  <span className="font-semibold text-destructive">Admin Feedback: </span>
                  <span className="text-muted-foreground">{req.adminFeedback}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* New Request Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
            onClick={() => setShowModal(false)}
          />
          <div className="relative glass-card rounded-3xl p-8 max-w-lg w-full shadow-premium-xl border-glow max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className="relative mb-5 w-fit">
              <div className="absolute inset-0 bg-primary blur-xl opacity-30" />
              <div className="relative bg-primary/10 p-3 rounded-xl">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">New Update Request</h3>
            <p className="text-muted-foreground mb-6 text-sm">All changes go through admin review before going live.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Update Type</label>
                <select className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 text-foreground">
                  <option>Program Update</option>
                  <option>University Update</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Program / Field</label>
                <input type="text" placeholder="e.g., Bachelor of Computer Science" className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Field to Update</label>
                <input type="text" placeholder="e.g., Tuition Fee" className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">New Value</label>
                <input type="text" placeholder="New value" className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Reason for Update</label>
                <textarea rows={3} placeholder="Explain why this change is needed..." className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50 resize-none" />
              </div>
              <div
                className="rounded-xl p-3.5 flex items-start gap-2.5 text-sm"
                style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}
              >
                <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                <span className="text-muted-foreground">This request will be reviewed by an admin before any changes are published.</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button onClick={() => setShowModal(false)} className="py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 transition-all">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </RepLayout>
  );
}

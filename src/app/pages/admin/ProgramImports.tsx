import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  CatalogueImport,
  getCatalogueImports,
  PROTOTYPE_DATA_CHANGED_EVENT,
  reviewCatalogueImport,
} from "../../lib/prototypeStore";
import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Upload,
  Building2,
  FileJson,
  FileSpreadsheet,
  Link2,
  X,
  AlertCircle,
} from "lucide-react";

type ImportStatus = "pending" | "approved" | "rejected";
type ImportMethod = "json" | "csv" | "url";

type ProgramImport = CatalogueImport;

const methodIcon = { json: FileJson, csv: FileSpreadsheet, url: Link2 };
const methodColor = { json: "text-accent-blue", csv: "text-success", url: "text-primary" };
const methodBg = { json: "bg-accent-blue/10", csv: "bg-success/10", url: "bg-primary/10" };

export default function AdminProgramImports() {
  const [imports, setImports] = useState<ProgramImport[]>(getCatalogueImports);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | ImportStatus>("all");
  const [universityFilter, setUniversityFilter] = useState("all");
  const [selected, setSelected] = useState<ProgramImport | null>(null);
  const [showConfirm, setShowConfirm] = useState<{ action: "approve" | "reject"; item: ProgramImport } | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    const sync = () => setImports(getCatalogueImports());
    window.addEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const filtered = imports.filter((i) => {
    const matchSearch = i.university.toLowerCase().includes(search.toLowerCase()) || i.rep.toLowerCase().includes(search.toLowerCase()) || i.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || i.status === filterStatus;
    const matchUniversity = universityFilter === "all" || i.universityId === universityFilter;
    return matchSearch && matchStatus && matchUniversity;
  });

  const handleAction = (action: "approve" | "reject") => {
    if (!showConfirm) return;
    reviewCatalogueImport(showConfirm.item.id, action === "approve" ? "approved" : "rejected", rejectReason);
    setImports(getCatalogueImports());
    setShowConfirm(null);
    setSelected(null);
    setRejectReason("");
    if (action === "approve") {
      toast.success("Import approved! Programs are now live for students.");
    } else {
      toast.error("Import rejected. Feedback sent to representative.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-8 shadow-premium-xl border-glow">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.08))" }} />
          <div className="relative">
            <h1 className="text-3xl font-bold mb-2">Program Source Review</h1>
            <p className="text-muted-foreground">Review program batches grouped by their university parent record.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">
          {[
            { label: "Total Sources", value: imports.length, color: "text-foreground", icon: Upload, bg: "bg-primary/10", iconColor: "text-primary" },
            { label: "Pending Review", value: imports.filter(i => i.status === "pending").length, color: "text-warning", icon: AlertCircle, bg: "bg-warning/10", iconColor: "text-warning" },
            { label: "Approved", value: imports.filter(i => i.status === "approved").length, color: "text-success", icon: CheckCircle, bg: "bg-success/10", iconColor: "text-success" },
            { label: "Programs Queued", value: imports.filter(i => i.status === "pending").reduce((acc, i) => acc + i.programCount, 0), color: "text-accent-blue", icon: Building2, bg: "bg-accent-blue/10", iconColor: "text-accent-blue" },
          ].map(({ label, value, color, icon: Icon, bg, iconColor }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium flex items-center gap-4">
              <div className={`${bg} p-3 rounded-xl shrink-0`}><Icon className={`w-5 h-5 ${iconColor}`} /></div>
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
                placeholder="Search program sources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 glass-card border border-glass-border rounded-xl focus:outline-none focus:border-accent-violet/50 text-sm transition-all"
              />
            </div>
            <select
              value={universityFilter}
              onChange={(event) => setUniversityFilter(event.target.value)}
              className="px-3 py-2.5 glass-card border border-glass-border rounded-xl text-sm focus:outline-none focus:border-accent-violet/50"
              aria-label="Filter imports by university"
            >
              <option value="all">All universities</option>
              {imports.map((item) => (
                <option key={item.universityId} value={item.universityId}>{item.university}</option>
              ))}
            </select>
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
                  {["Import", "University", "Method", "Programs", "Issues", "Completeness", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-glass-border">
                {filtered.map((item) => {
                  const Icon = methodIcon[item.method];
                  return (
                    <tr key={item.id} className="hover:bg-accent-violet/3 transition-colors group">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-foreground text-sm">{item.id}</p>
                        <p className="text-xs text-muted-foreground">{item.rep}</p>
                        <p className="text-xs text-muted-foreground">{new Date(item.submittedDate).toLocaleDateString()}</p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <span className="text-sm text-foreground block">{item.university}</span>
                            <span className="text-xs text-muted-foreground">{item.universityId}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${methodBg[item.method]}`}>
                          <Icon className={`w-3.5 h-3.5 ${methodColor[item.method]}`} />
                          <span className={`text-xs font-semibold uppercase ${methodColor[item.method]}`}>{item.method}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm font-bold text-foreground">{item.programCount}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-sm font-semibold ${item.issues > 5 ? "text-warning" : item.issues > 0 ? "text-info" : "text-success"}`}>
                          {item.issues > 0 ? `${item.issues} issues` : "None"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-glass-border">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${item.completeness}%`,
                                background: item.completeness >= 95 ? "var(--success)" : item.completeness >= 80 ? "var(--warning)" : "var(--destructive)",
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">{item.completeness}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-4"><StatusBadge status={item.status} /></td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelected(item)}
                            className="flex items-center gap-1.5 px-3 py-2 bg-accent-violet text-white rounded-xl text-xs font-semibold hover:bg-accent-violet/90 shadow-premium transition-all"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Review
                          </button>
                          {item.status === "pending" && (
                            <>
                              <button onClick={() => setShowConfirm({ action: "approve", item })} className="p-2 rounded-xl bg-success/10 text-success hover:bg-success/20 transition-all">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button onClick={() => setShowConfirm({ action: "reject", item })} className="p-2 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all">
                                <XCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={() => setSelected(null)} />
          <div className="relative glass-card rounded-3xl p-8 max-w-xl w-full shadow-premium-xl border-glow">
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold mb-1">Import Details</h3>
            <p className="text-muted-foreground text-sm mb-6">{selected.id} • {selected.university} • universityId: {selected.universityId}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Representative", value: selected.rep },
                { label: "Method", value: selected.method.toUpperCase() },
                { label: "Programs", value: selected.programCount.toString() },
                { label: "Issues", value: selected.issues.toString() },
                { label: "Completeness", value: `${selected.completeness}%` },
                { label: "Submitted", value: new Date(selected.submittedDate).toLocaleDateString() },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className="text-sm font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
            {selected.status === "pending" && (
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => { setSelected(null); setShowConfirm({ action: "reject", item: selected }); }} className="flex items-center justify-center gap-2 py-3 glass-card border border-destructive/30 text-destructive rounded-xl font-semibold hover:bg-destructive/5 transition-all">
                  <XCircle className="w-4 h-4" /> Reject Import
                </button>
                <button onClick={() => { setSelected(null); setShowConfirm({ action: "approve", item: selected }); }} className="flex items-center justify-center gap-2 py-3 bg-success text-white rounded-xl font-semibold shadow-premium hover:bg-success/90 transition-all">
                  <CheckCircle className="w-4 h-4" /> Approve Import
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
            <div className="relative mb-5 w-fit">
              <div className={`absolute inset-0 blur-xl opacity-40 ${showConfirm.action === "approve" ? "bg-success" : "bg-destructive"}`} />
              <div className={`relative p-4 rounded-2xl ${showConfirm.action === "approve" ? "bg-success/10" : "bg-destructive/10"}`}>
                {showConfirm.action === "approve" ? <CheckCircle className="w-8 h-8 text-success" /> : <XCircle className="w-8 h-8 text-destructive" />}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{showConfirm.action === "approve" ? "Approve Import?" : "Reject Import?"}</h3>
            <p className="text-muted-foreground mb-5">
              {showConfirm.action === "approve"
                ? `Approving this verified source data will publish ${showConfirm.item.programCount} programs under ${showConfirm.item.university}.`
                : `Rejecting this source review will notify the representative and allow them to correct the official source or dataset.`}
            </p>
            {showConfirm.action === "reject" && (
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-2">Rejection Reason</label>
                <textarea rows={3} value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Describe the issues found..." className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-destructive/50 focus:ring-2 focus:ring-destructive/20 text-foreground placeholder:text-muted-foreground/50 resize-none" />
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowConfirm(null)} className="py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 transition-all">Cancel</button>
              <button onClick={() => handleAction(showConfirm.action)} className={`py-3 text-white rounded-xl font-semibold shadow-premium transition-all ${showConfirm.action === "approve" ? "bg-success hover:bg-success/90" : "bg-destructive hover:bg-destructive/90"}`}>
                {showConfirm.action === "approve" ? "Approve" : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

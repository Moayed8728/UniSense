import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { Search, Download, Filter, Upload, RefreshCw, Link2 } from "lucide-react";

type ActivityType = "import" | "update" | "source";

const history = [
  { id: "IMP-008", type: "import" as ActivityType, description: "Bulk CSV import: 147 programs", university: "UTM", status: "pending" as const, date: "2026-05-30", programs: 147 },
  { id: "UPD-003", type: "update" as ActivityType, description: "Tuition fee update: BSc Computer Science", university: "UTM", status: "rejected" as const, date: "2026-05-18", programs: 1 },
  { id: "SL-004", type: "source" as ActivityType, description: "Source link added: Postgraduate Intake 2026", university: "UTM", status: "invalid" as const, date: "2026-05-10", programs: 0 },
  { id: "IMP-006", type: "import" as ActivityType, description: "JSON import: 23 computing programs", university: "UTM", status: "approved" as const, date: "2026-05-05", programs: 23 },
  { id: "UPD-002", type: "update" as ActivityType, description: "University website URL updated", university: "UTM", status: "approved" as const, date: "2026-05-22", programs: 0 },
  { id: "IMP-004", type: "import" as ActivityType, description: "URL crawl: Engineering faculty programs", university: "UTM", status: "approved" as const, date: "2026-04-28", programs: 45 },
  { id: "SL-002", type: "source" as ActivityType, description: "Source link: Tuition & Fees 2026", university: "UTM", status: "verified" as const, date: "2026-05-15", programs: 0 },
  { id: "IMP-003", type: "import" as ActivityType, description: "CSV import: Business programs batch", university: "UTM", status: "approved" as const, date: "2026-04-20", programs: 18 },
];

const typeIcon = {
  import: Upload,
  update: RefreshCw,
  source: Link2,
};

const typeLabel = {
  import: "Program Import",
  update: "Update Request",
  source: "Source Link",
};

export default function SubmissionHistory() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filtered = history.filter((h) => {
    const matchSearch = h.description.toLowerCase().includes(search.toLowerCase()) || h.id.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "all" || h.type === filterType;
    return matchSearch && matchType;
  });

  return (
    <RepLayout>
      <div className="space-y-8 max-w-5xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Submission History</h1>
            <p className="text-muted-foreground">Complete history of imports, updates, and source links for UTM.</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all text-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">
          {[
            { label: "Total Submissions", value: history.length, color: "text-foreground" },
            { label: "Approved", value: history.filter(h => h.status === "approved" || h.status === "verified").length, color: "text-success" },
            { label: "Pending", value: history.filter(h => h.status === "pending").length, color: "text-warning" },
            { label: "Programs Imported", value: history.reduce((acc, h) => acc + h.programs, 0), color: "text-primary" },
          ].map(({ label, value, color }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium">
              <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div className="glass-card rounded-2xl overflow-hidden shadow-premium">
          <div className="p-5 border-b border-glass-border flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-56">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search history..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 glass-card border border-glass-border rounded-xl focus:outline-none focus:border-primary/50 text-sm transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="text-sm glass-card border border-glass-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:border-primary/50"
              >
                <option value="all">All Types</option>
                <option value="import">Program Imports</option>
                <option value="update">Update Requests</option>
                <option value="source">Source Links</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ background: "rgba(15,15,22,0.5)", borderBottom: "1px solid var(--glass-border)" }}>
                <tr>
                  {["Activity", "Type", "Status", "Programs", "Date", ""].map((h) => (
                    <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-glass-border">
                {filtered.map((item) => {
                  const Icon = typeIcon[item.type];
                  return (
                    <tr key={item.id} className="hover:bg-primary/3 transition-colors group">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{item.description}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{item.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs px-2.5 py-1 rounded-full glass-card border border-glass-border text-muted-foreground">
                          {typeLabel[item.type]}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {item.programs > 0 ? (
                          <span className="font-semibold text-foreground">{item.programs}</span>
                        ) : (
                          <span>—</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                      <td className="px-5 py-4">
                        <button className="text-xs text-primary hover:text-primary-hover font-semibold opacity-0 group-hover:opacity-100 transition-all">
                          View →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

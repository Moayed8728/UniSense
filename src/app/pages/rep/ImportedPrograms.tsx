import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import {
  Search,
  Filter,
  GraduationCap,
  Eye,
  Lock,
} from "lucide-react";
import { toast } from "sonner";

const programs = [
  { id: "UTM-001", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Bachelor of Computer Science (Software Engineering)", faculty: "Computing", level: "Bachelor", duration: "4 years", tuition: "RM 35,000 / year", status: "approved" as const, importDate: "2026-05-20" },
  { id: "UTM-002", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Master of Computer Science", faculty: "Computing", level: "Master", duration: "2 years", tuition: "RM 18,000 / year", status: "approved" as const, importDate: "2026-05-20" },
  { id: "UTM-003", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "PhD in Artificial Intelligence", faculty: "Computing", level: "PhD", duration: "3-5 years", tuition: "RM 15,000 / year", status: "pending" as const, importDate: "2026-05-28" },
  { id: "UTM-004", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Bachelor of Electrical Engineering", faculty: "Engineering", level: "Bachelor", duration: "4 years", tuition: "RM 38,000 / year", status: "approved" as const, importDate: "2026-05-15" },
  { id: "UTM-005", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Master of Business Administration (MBA)", faculty: "Management", level: "Master", duration: "2 years", tuition: "RM 42,000 / year", status: "pending" as const, importDate: "2026-05-29" },
  { id: "UTM-006", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Bachelor of Architecture", faculty: "Built Environment", level: "Bachelor", duration: "5 years", tuition: "RM 36,000 / year", status: "rejected" as const, importDate: "2026-05-10" },
  { id: "UTM-007", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Doctor of Philosophy (Civil Engineering)", faculty: "Engineering", level: "PhD", duration: "3-5 years", tuition: "RM 16,000 / year", status: "approved" as const, importDate: "2026-05-18" },
  { id: "UTM-008", universityId: "utm", university: "Universiti Teknologi Malaysia", name: "Master of Science (Data Science)", faculty: "Computing", level: "Master", duration: "2 years", tuition: "RM 20,000 / year", status: "pending" as const, importDate: "2026-05-30" },
];

export default function ImportedPrograms() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = programs.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.faculty.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || p.status === filterStatus;
    const matchLevel = filterLevel === "all" || p.level.toLowerCase() === filterLevel;
    return matchSearch && matchStatus && matchLevel;
  });

  return (
    <RepLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Programs Under My University</h1>
            <p className="text-muted-foreground">
              Source-derived programs for Universiti Teknologi Malaysia.{" "}
              <span className="text-primary font-medium">Access restricted to your assigned university.</span>
            </p>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)", color: "var(--primary)" }}
          >
            <Lock className="w-4 h-4" />
            UTM Only
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">
          {[
            { label: "Total Programs", value: programs.length, color: "text-foreground", bg: "bg-primary/10", accent: "text-primary" },
            { label: "Published", value: programs.filter(p => p.status === "approved").length, color: "text-success", bg: "bg-success/10", accent: "text-success" },
            { label: "Pending Review", value: programs.filter(p => p.status === "pending").length, color: "text-warning", bg: "bg-warning/10", accent: "text-warning" },
            { label: "Rejected", value: programs.filter(p => p.status === "rejected").length, color: "text-destructive", bg: "bg-destructive/10", accent: "text-destructive" },
          ].map(({ label, value, color, bg, accent }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium">
              <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="glass-card rounded-2xl shadow-premium-lg overflow-hidden">
          {/* Filters */}
          <div className="p-5 border-b border-glass-border flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-56">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search programs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 glass-card border border-glass-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-sm transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="text-sm glass-card border border-glass-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:border-primary/50"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="text-sm glass-card border border-glass-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:border-primary/50"
              >
                <option value="all">All Levels</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ background: "rgba(15,15,22,0.5)", borderBottom: "1px solid var(--glass-border)" }}>
                <tr>
                  {["Program", "Faculty", "Level", "Duration", "Tuition", "Status", "Import Date", ""].map((h) => (
                    <th key={h} className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-glass-border">
                {filtered.map((program) => (
                  <tr key={program.id} className="hover:bg-primary/3 transition-colors group">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm leading-tight">{program.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{program.university} · {program.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{program.faculty}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full glass-card border border-glass-border text-foreground">
                        {program.level}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{program.duration}</td>
                    <td className="px-5 py-4 text-sm text-foreground font-medium">{program.tuition}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={program.status} />
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {new Date(program.importDate).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-4">
                      <button onClick={() => toast.info(`${program.name}: ${program.level}, ${program.duration}, ${program.tuition}`)} className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover font-semibold opacity-0 group-hover:opacity-100 transition-all">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-4 border-t border-glass-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing {filtered.length} of {programs.length} programs</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setCurrentPage(p);
                    toast.info(`Page ${p} selected.`);
                  }}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${p === currentPage ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground glass-card"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Link2, ExternalLink, X, Globe, ShieldCheck, AlertCircle } from "lucide-react";
import {
  addOfficialSourceLink,
  getOfficialSourceLinks,
  PROTOTYPE_DATA_CHANGED_EVENT,
  removeOfficialSourceLink,
} from "../../lib/prototypeStore";

const categories = ["Programme Overview", "Tuition", "Admission", "Intake", "Scholarships", "Research", "Other"];

export default function SourceLinks() {
  const [sourceLinks, setSourceLinks] = useState(getOfficialSourceLinks);
  const [showModal, setShowModal] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCat, setNewCat] = useState("Programme Overview");

  useEffect(() => {
    const sync = () => setSourceLinks(getOfficialSourceLinks());
    window.addEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROTOTYPE_DATA_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const handleAdd = () => {
    if (!newUrl || !newDesc) {
      toast.error("Please enter a source URL and description.");
      return;
    }
    addOfficialSourceLink({ url: newUrl, description: newDesc, category: newCat });
    setSourceLinks(getOfficialSourceLinks());
    setShowModal(false);
    setNewUrl("");
    setNewDesc("");
    toast.success("Source link added and queued for verification!");
  };

  return (
    <RepLayout>
      <div className="space-y-8 max-w-5xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Official Sources</h1>
            <p className="text-muted-foreground">Official source links for UTM program data. Official source links are required for verification.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            Submit Source Update
          </button>
        </div>

        {/* Notice */}
        <div
          className="glass-card rounded-2xl p-5 flex items-start gap-4"
          style={{ border: "1px solid rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.04)" }}
        >
          <ShieldCheck className="w-5 h-5 text-info shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Admin verification is required before students can view this data.</span>{" "}
            Program data is collected from verified official sources.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { label: "Total Links", value: sourceLinks.length, color: "text-foreground" },
            { label: "Verified", value: sourceLinks.filter(l => l.status === "verified").length, color: "text-success" },
            { label: "Issues", value: sourceLinks.filter(l => l.status !== "verified").length, color: "text-warning" },
          ].map(({ label, value, color }) => (
            <div key={label} className="glass-card rounded-2xl p-5 shadow-premium">
              <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Links list */}
        <div className="space-y-4">
          {sourceLinks.map((link) => (
            <div key={link.id} className="glass-card rounded-2xl p-5 shadow-premium glass-card-hover border-glow group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className={`p-2.5 rounded-xl shrink-0 ${link.status === "verified" ? "bg-success/10" : link.status === "pending" ? "bg-warning/10" : "bg-destructive/10"}`}>
                    <Globe className={`w-5 h-5 ${link.status === "verified" ? "text-success" : link.status === "pending" ? "text-warning" : "text-destructive"}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <p className="font-semibold text-foreground">{link.description}</p>
                      <span className="text-xs px-2.5 py-0.5 rounded-full glass-card border border-glass-border text-muted-foreground shrink-0">
                        {link.category}
                      </span>
                      <StatusBadge status={link.status} />
                    </div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1.5 w-fit"
                    >
                      <Link2 className="w-3.5 h-3.5" />
                      {link.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => {
                    removeOfficialSourceLink(link.id);
                    setSourceLinks(getOfficialSourceLinks());
                    toast.success("Source link removed.");
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pl-12">
                <span>ID: {link.id}</span>
                <span>Added: {new Date(link.addedDate).toLocaleDateString()}</span>
                <span>Last checked: {link.lastChecked !== "-" ? new Date(link.lastChecked).toLocaleDateString() : "-"}</span>
              </div>
              {link.status === "invalid" && (
                <div className="mt-3 pl-12">
                  <div
                    className="rounded-xl p-3 flex items-center gap-2 text-sm"
                    style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
                  >
                    <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                    <span className="text-muted-foreground">This URL returned a 404 error during verification. Please update the link.</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Link Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
            onClick={() => setShowModal(false)}
          />
          <div className="relative glass-card rounded-3xl p-8 max-w-md w-full shadow-premium-xl border-glow">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            <div className="relative mb-5 w-fit">
              <div className="absolute inset-0 bg-primary blur-xl opacity-30" />
              <div className="relative bg-primary/10 p-3 rounded-xl">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">Add Source Link</h3>
            <p className="text-sm text-muted-foreground mb-6">Add an official UTM source link for verification.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Source URL *</label>
                <input
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://www.utm.my/..."
                  className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Description *</label>
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="e.g., Official Tuition Page 2026"
                  className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <select
                  value={newCat}
                  onChange={(e) => setNewCat(e.target.value)}
                  className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 text-foreground"
                >
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button onClick={() => setShowModal(false)} className="py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 transition-all">
                  Cancel
                </button>
                <button onClick={handleAdd} className="py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all">
                  Add Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </RepLayout>
  );
}

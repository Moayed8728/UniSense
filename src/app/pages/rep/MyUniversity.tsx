import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import {
  Building2,
  Globe,
  MapPin,
  Mail,
  Phone,
  Lock,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Edit,
} from "lucide-react";

export default function MyUniversity() {
  return (
    <RepLayout>
      <div className="space-y-8 max-w-5xl">
        {/* Restricted access notice */}
        <div className="glass-card rounded-2xl p-5 shadow-premium flex items-start gap-4" style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.05)" }}>
          <div className="bg-primary/10 p-2.5 rounded-xl shrink-0">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Access Restricted to Assigned University</p>
            <p className="text-sm text-muted-foreground">
              You are authorized to manage only this university. You cannot access or edit other universities.
              Changes require admin approval before publication.
            </p>
          </div>
        </div>

        {/* University header card */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-8 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-card" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-premium-lg shrink-0">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">Universiti Teknologi Malaysia</h1>
                    <StatusBadge status="verified" />
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Skudai, Johor, Malaysia
                  </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 text-warning" />
                  Request Update
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span className="text-sm text-success font-medium">Verified • You are the authorized representative</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* University details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <h2 className="text-xl font-semibold mb-5">University Information</h2>
              <div className="space-y-4">
                {[
                  { label: "Full Name", value: "Universiti Teknologi Malaysia (UTM)" },
                  { label: "Country", value: "Malaysia" },
                  { label: "City", value: "Skudai, Johor" },
                  { label: "Address", value: "81310 UTM Johor Bahru, Johor, Malaysia" },
                  { label: "Type", value: "Public Research University" },
                  { label: "Established", value: "1904" },
                  { label: "Students", value: "~20,000" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-glass-border last:border-0">
                    <span className="text-sm text-muted-foreground font-medium">{label}</span>
                    <span className="text-sm text-foreground font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <h2 className="text-xl font-semibold mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 py-3 border-b border-glass-border">
                  <div className="bg-primary/10 p-2.5 rounded-xl">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">Official Website</p>
                    <a href="#" className="text-sm text-primary hover:underline font-medium flex items-center gap-1.5">
                      www.utm.my <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-glass-border">
                  <div className="bg-accent-blue/10 p-2.5 rounded-xl">
                    <Mail className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">Official Email</p>
                    <p className="text-sm text-foreground font-medium">info@utm.my</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="bg-success/10 p-2.5 rounded-xl">
                    <Phone className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">Contact Number</p>
                    <p className="text-sm text-foreground font-medium">+607-553 0323</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <h3 className="font-semibold mb-4">Profile Completion</h3>
              <div className="relative h-32 w-32 mx-auto mb-4">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none"
                    stroke="#7c3aed" strokeWidth="3"
                    strokeDasharray="89 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">89%</span>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Basic Info", done: true },
                  { label: "Contact Details", done: true },
                  { label: "Official Documents", done: true },
                  { label: "Programs Added", done: true },
                  { label: "Accreditation Info", done: false },
                ].map(({ label, done }) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-success/20" : "bg-muted/30"}`}>
                      {done && <div className="w-2 h-2 rounded-full bg-success" />}
                    </div>
                    <span className={done ? "text-foreground" : "text-muted-foreground"}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <h3 className="font-semibold mb-4">Program Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Total Programs", value: "147", color: "text-primary" },
                  { label: "Published", value: "132", color: "text-success" },
                  { label: "Pending Review", value: "12", color: "text-warning" },
                  { label: "Rejected", value: "3", color: "text-destructive" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex items-center justify-between py-2 border-b border-glass-border last:border-0">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className={`text-sm font-bold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="glass-card rounded-2xl p-5 shadow-premium"
              style={{ border: "1px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}
            >
              <div className="flex items-start gap-3">
                <Edit className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-warning mb-1">Need to update details?</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    University changes require admin approval before going live.
                  </p>
                  <button className="text-xs font-semibold text-warning hover:underline">
                    Submit Update Request →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

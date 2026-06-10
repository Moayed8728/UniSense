import { Link } from "react-router";
import { Sparkles, Clock, CheckCircle, FileSearch, UserCheck, Shield, LogOut, Eye } from "lucide-react";

export default function PendingApproval() {
  const timeline = [
    { label: "Account Created", status: "completed", date: "May 28, 2026" },
    { label: "Application Submitted", status: "completed", date: "May 28, 2026" },
    { label: "Source Verification", status: "in-progress", date: "In progress" },
    { label: "Admin Review", status: "pending", date: "Pending" },
    { label: "Final Decision", status: "pending", date: "Pending" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-warning/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
            <div className="relative gradient-primary p-2.5 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gradient-hero">UniSense</h1>
        </Link>

        {/* Main Card */}
        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow mb-6">
          {/* Status Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full border border-warning/30 bg-warning/5">
              <Clock className="w-5 h-5 text-warning animate-pulse" />
              <span className="font-semibold text-warning">Pending Review</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Application Under Review</h2>
            <p className="text-muted-foreground text-lg">
              Your University Representative application is being reviewed by our admin team
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 mb-10">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    item.status === "completed" ? "bg-success/10" :
                    item.status === "in-progress" ? "bg-warning/10" :
                    "bg-muted/30"
                  }`}>
                    {item.status === "completed" && <CheckCircle className="w-6 h-6 text-success" />}
                    {item.status === "in-progress" && <Clock className="w-6 h-6 text-warning animate-pulse" />}
                    {item.status === "pending" && <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className={`absolute left-1/2 top-12 w-0.5 h-12 -translate-x-1/2 ${
                      item.status === "completed" ? "bg-success/30" : "bg-glass-border"
                    }`} />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h4 className={`font-semibold mb-1 ${
                    item.status === "pending" ? "text-muted-foreground" : ""
                  }`}>
                    {item.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Estimated Time */}
          <div className="glass-card border border-info/30 bg-info/5 rounded-2xl p-5 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-info/10 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="font-semibold mb-1">Estimated Review Time</p>
                <p className="text-sm text-muted-foreground">
                  Applications typically take <span className="font-semibold text-foreground">2-3 business days</span> to process. You'll receive an email notification once your application is reviewed.
                </p>
              </div>
            </div>
          </div>

          {/* Submitted University */}
          <div className="glass-card rounded-2xl p-6 shadow-premium mb-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Submitted University Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium">Harvard University</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">Cambridge, United States</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Position</span>
                <span className="font-medium">Director of Admissions</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Submitted</span>
                <span className="font-medium">May 28, 2026</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/auth/application-preview"
              className="flex items-center justify-center gap-2 px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold"
            >
              <Eye className="w-5 h-5" />
              View Application
            </Link>
            <Link
              to="/auth/login"
              className="flex items-center justify-center gap-2 px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-destructive/5 hover:border-destructive/30 hover:text-destructive transition-all font-semibold"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </div>
        </div>

        {/* Info Card */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Dashboard access will be granted once your application is approved
          </p>
        </div>
      </div>
    </div>
  );
}

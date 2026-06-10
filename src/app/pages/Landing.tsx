import { Link, useNavigate } from "react-router";
import { Sparkles, GraduationCap, Shield, Users, Zap, ArrowRight, ChevronRight } from "lucide-react";
import { UniSenseLogo } from "../components/UniSenseLogo";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/8 rounded-full blur-[150px]" />
      </div>

      {/* Top Navbar */}
      <nav className="relative z-20 glass-card border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <UniSenseLogo className="w-56 h-16" />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="px-5 py-2.5 glass-card border border-glass-border rounded-xl font-semibold text-sm hover:bg-primary/5 hover:border-primary/30 transition-all"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth/create-account")}
              className="px-5 py-2.5 gradient-primary text-white rounded-xl font-semibold text-sm shadow-premium hover:shadow-premium-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 glass-card px-6 py-3 rounded-full border-glow">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse" />
              <div className="relative gradient-primary p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Education Platform</span>
          </div>

          <UniSenseLogo className="w-full max-w-xl h-48 mx-auto mb-4" />

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Find the right university program with AI-powered guidance. The next-generation platform for managing university program data with verified, collaborative workflows.
          </p>

          {/* Primary CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="flex items-center gap-2.5 px-8 py-4 gradient-primary text-white rounded-2xl font-semibold shadow-premium-lg hover:shadow-glow-strong hover:scale-[1.02] active:scale-[0.98] transition-all text-lg"
            >
              Login to Account
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth/create-account")}
              className="flex items-center gap-2.5 px-8 py-4 glass-card border border-glass-border rounded-2xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all text-lg border-glow"
            >
              Create Account
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Secondary links */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <Link to="/student" className="hover:text-primary transition-colors font-medium flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Continue as Student
            </Link>
            <span className="text-glass-border">•</span>
            <Link to="/auth/apply-representative" className="hover:text-primary transition-colors font-medium flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Apply as University Representative
            </Link>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {/* Rep Card */}
          <Link
            to="/auth/login?role=representative"
            className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden"
          >
            <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">University Representative</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Apply to manage one university, submit official source links, and keep source-derived program data accurate.
              </p>
              <ul className="space-y-2 mb-6">
                {["Submit catalogue sources or datasets", "Submit official university details", "Track verification status", "Requires admin verification"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                University Representative Login
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Admin Card */}
          <Link
            to="/auth/login?role=admin"
            className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden"
          >
            <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-accent-violet blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-accent-violet/10 p-4 rounded-2xl group-hover:bg-accent-violet/20 transition-all duration-300">
                  <Shield className="w-10 h-10 text-accent-violet" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Administrator</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                Review representative applications, official sources, and program source data. Manage universities, users, and analytics.
              </p>
              <ul className="space-y-2 mb-6">
                {["Review representative applications", "Verify official program sources", "Manage universities & users", "View analytics & audit logs"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 text-accent-violet font-semibold group-hover:gap-3 transition-all text-sm">
                Admin Login
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Users, color: "text-accent-blue", bg: "bg-accent-blue/10", glow: "bg-accent-blue", title: "Collaborative Workflows", desc: "Multi-role platform enabling seamless collaboration between universities and admins" },
            { icon: Shield, color: "text-success", bg: "bg-success/10", glow: "bg-success", title: "Source Verification", desc: "Automated verification and validation for data integrity and authenticity" },
            { icon: Zap, color: "text-primary", bg: "bg-primary/10", glow: "bg-primary", title: "AI-Enhanced Insights", desc: "Smart recommendations, analytics, and real-time monitoring powered by AI" },
          ].map(({ icon: Icon, color, bg, glow, title, desc }) => (
            <div key={title} className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
              <div className="relative mb-4 w-fit mx-auto">
                <div className={`absolute inset-0 ${glow} blur-lg opacity-30`} />
                <div className={`relative ${bg} p-3 rounded-xl`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Demo login shortcut */}
        <div className="mt-16 max-w-2xl mx-auto glass-card rounded-2xl p-6 shadow-premium border border-glass-border">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-info rounded-full animate-pulse" />
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Demo Access</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Admin Console", email: "admin@unisense.com", to: "/admin", color: "text-accent-violet" },
              { label: "Rep Dashboard", email: "rep@unisense.com", to: "/rep", color: "text-primary" },
              { label: "Student Portal", email: "student@unisense.com", to: "/student", color: "text-success" },
              { label: "Auth Flow", email: "Login → Create Account →", to: "/auth/login", color: "text-warning" },
            ].map(({ label, email, to, color }) => (
              <Link
                key={label}
                to={to}
                className="flex items-center justify-between py-2.5 px-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{label}</span>
                <code className={`font-mono text-xs ${color} group-hover:underline`}>{email}</code>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import { Sparkles, Shield, Users, GraduationCap, Zap, Database, Compass } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 glass-card px-6 py-3 rounded-full border-glow">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse" />
              <div className="relative gradient-primary p-2.5 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Education Platform</span>
          </div>

          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Welcome to <br />
            <span className="text-gradient-hero inline-block mt-2">UniSense</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The next-generation platform for managing university program data with AI-enhanced verification, collaborative workflows, and real-time analytics.
          </p>
        </div>

        {/* Main Role Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <Link
            to="/discover"
            className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden"
          >
            <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-accent-blue blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-accent-blue/10 p-4 rounded-2xl group-hover:bg-accent-blue/20 transition-all duration-300">
                  <Compass className="w-10 h-10 text-accent-blue" />
                </div>
              </div>
              <h2 className="text-3xl font-semibold mb-3">Student Discovery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Search, browse, and smart-search university programs. Compare fees, durations, and admission requirements in one place.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-accent-blue font-medium group-hover:gap-3 transition-all">
                Start Exploring
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/rep"
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
              <h2 className="text-3xl font-semibold mb-3">University Representative</h2>
              <p className="text-muted-foreground leading-relaxed">
                Submit and manage university program information. Track submission status, update sources, and maintain data accuracy.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Access Dashboard
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/admin"
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
              <h2 className="text-3xl font-semibold mb-3">Admin Dashboard</h2>
              <p className="text-muted-foreground leading-relaxed">
                Review submissions, verify sources, manage universities and users, and monitor comprehensive analytics and audit logs.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-accent-violet font-medium group-hover:gap-3 transition-all">
                Access Dashboard
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-accent-blue blur-lg opacity-30" />
              <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                <Users className="w-7 h-7 text-accent-blue" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Collaborative Workflows</h3>
            <p className="text-sm text-muted-foreground">Multi-role platform enabling seamless collaboration between universities and admins</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-success blur-lg opacity-30" />
              <div className="relative bg-success/10 p-3 rounded-xl">
                <Shield className="w-7 h-7 text-success" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Source Verification</h3>
            <p className="text-sm text-muted-foreground">Automated verification and validation for data integrity and authenticity</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
              <div className="relative bg-primary/10 p-3 rounded-xl">
                <Zap className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI-Enhanced Insights</h3>
            <p className="text-sm text-muted-foreground">Smart recommendations, analytics, and real-time monitoring powered by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

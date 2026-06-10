import { Link, useNavigate } from "react-router";
import { GraduationCap, Shield, ArrowRight, Users, Brain } from "lucide-react";
import { UniSenseLogo } from "../../components/UniSenseLogo";

export default function Welcome() {
  const navigate = useNavigate();

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
        <div className="text-center mb-16">
          <UniSenseLogo className="w-full max-w-xl h-48 mx-auto mb-4" />
          <div className="inline-flex items-center gap-3 mb-8 glass-card px-6 py-3 rounded-full border-glow">
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Education Platform</span>
          </div>

          <p className="text-2xl text-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Find the right university program with AI-powered guidance
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover, compare, and apply to programs that match your goals and aspirations
          </p>
        </div>

        {/* Main CTAs */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="px-8 py-4 bg-white/5 text-foreground border border-glass-border rounded-xl hover:bg-white/10 transition-all font-semibold shadow-premium glass-card-hover"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth/create-account")}
            className="px-8 py-4 gradient-primary text-white rounded-xl hover:shadow-premium-lg transition-all font-semibold shadow-premium hover:scale-105"
          >
            Create Account
          </button>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Link
            to="/auth/role-selection?role=student"
            className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden"
          >
            <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-accent-blue blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-accent-blue/10 p-4 rounded-2xl group-hover:bg-accent-blue/20 transition-all duration-300">
                  <GraduationCap className="w-10 h-10 text-accent-blue" />
                </div>
              </div>
              <h2 className="text-3xl font-semibold mb-3">Continue as Student</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Search programs, get AI recommendations, save and compare programs with instant access
              </p>
              <div className="flex items-center gap-2 text-accent-blue font-medium group-hover:gap-3 transition-all">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          <Link
            to="/auth/role-selection?role=representative"
            className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden"
          >
            <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-semibold mb-3">Apply as University Representative</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Submit official university details, manage program information. Requires admin approval.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
              <div className="relative bg-primary/10 p-3 rounded-xl">
                <Brain className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI-Enhanced Search</h3>
            <p className="text-sm text-muted-foreground">Smart recommendations powered by advanced AI algorithms</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-success blur-lg opacity-30" />
              <div className="relative bg-success/10 p-3 rounded-xl">
                <Shield className="w-7 h-7 text-success" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Verified Data</h3>
            <p className="text-sm text-muted-foreground">All program information verified by university representatives</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center shadow-premium border-glow">
            <div className="relative mb-4 w-fit mx-auto">
              <div className="absolute inset-0 bg-accent-blue blur-lg opacity-30" />
              <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                <Users className="w-7 h-7 text-accent-blue" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
            <p className="text-sm text-muted-foreground">Join thousands of students finding their perfect program</p>
          </div>
        </div>
      </div>
    </div>
  );
}

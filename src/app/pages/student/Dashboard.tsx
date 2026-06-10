import { Link, useNavigate } from "react-router";
import { Sparkles, Search, BookOpen, Heart, GitCompare, MessageCircle, LogOut, TrendingUp, GraduationCap, X } from "lucide-react";
import { StatsCard } from "../../components/StatsCard";
import { toast } from "sonner";
import { useState } from "react";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    toast.success("You have been logged out successfully.");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-glass-border shadow-premium">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                <div className="relative gradient-primary p-2 rounded-xl shadow-premium">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gradient-primary">UniSense</h1>
                <p className="text-xs text-muted-foreground">Student Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/discover"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium bg-primary/20 text-primary border border-primary/30 shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search Programs</span>
              </Link>
              <Link
                to="/student/saved"
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Saved</span>
              </Link>
              <Link
                to="/student/compare"
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <GitCompare className="w-4 h-4" />
                <span className="text-sm font-medium">Compare</span>
              </Link>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all border border-transparent hover:border-destructive/20"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Welcome Header */}
          <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
            <div className="absolute inset-0 gradient-hero opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">Welcome back</span>
              </div>
              <h1 className="text-4xl font-bold mb-3">
                Find Your Perfect <span className="text-gradient-hero">Program</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Discover university programs tailored to your interests with AI-powered recommendations
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Programs Viewed"
              value={24}
              icon={BookOpen}
              trend="+8 this week"
              trendUp={true}
              color="blue"
            />
            <StatsCard
              title="Saved Programs"
              value={12}
              icon={Heart}
              trend="3 matches"
              color="purple"
            />
            <StatsCard
              title="Match Score"
              value="87%"
              icon={TrendingUp}
              trend="+5% improved"
              trendUp={true}
              color="green"
            />
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search Programs */}
            <div className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden">
              <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="relative mb-6 w-fit">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                    <Search className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Search Programs</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Browse thousands of verified university programs with advanced filters and AI-powered search
                </p>
                <button onClick={() => navigate("/discover")} className="px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all">
                  Start Searching
                </button>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden">
              <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="relative mb-6 w-fit">
                  <div className="absolute inset-0 bg-accent-violet blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-accent-violet/10 p-4 rounded-2xl group-hover:bg-accent-violet/20 transition-all duration-300">
                    <Sparkles className="w-10 h-10 text-accent-violet" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-3">AI Recommendations</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Get personalized program recommendations based on your interests, goals, and academic background
                </p>
                <button onClick={() => navigate("/smart-search")} className="px-6 py-3 bg-accent-violet text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all">
                  Get Recommendations
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-accent-blue blur-lg opacity-30" />
                <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                  <GitCompare className="w-6 h-6 text-accent-blue" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Compare Programs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Side-by-side comparison of programs, tuition, and requirements
              </p>
              <button onClick={() => navigate("/student/compare")} className="text-sm text-accent-blue hover:text-accent-blue/80 font-semibold">
                Start Comparing →
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-success blur-lg opacity-30" />
                <div className="relative bg-success/10 p-3 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-success" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Chat with AI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ask questions about programs, requirements, and admissions
              </p>
              <button onClick={() => toast.info("AI chat opened in prototype mode. Ask about any program from Smart Search.")} className="text-sm text-success hover:text-success/80 font-semibold">
                Open Chat →
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-primary blur-lg opacity-30" />
                <div className="relative bg-primary/10 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Application Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step guidance for your university applications
              </p>
              <button onClick={() => navigate("/discover")} className="text-sm text-primary hover:text-primary-hover font-semibold">
                View Guide →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }} onClick={() => setShowLogoutModal(false)} />
          <div className="relative glass-card rounded-3xl p-8 max-w-sm w-full shadow-premium-xl border-glow">
            <button onClick={() => setShowLogoutModal(false)} className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="relative mb-6 w-fit">
              <div className="absolute inset-0 bg-destructive blur-xl opacity-40" />
              <div className="relative bg-destructive/10 p-4 rounded-2xl">
                <LogOut className="w-8 h-8 text-destructive" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Confirm Logout</h3>
            <p className="text-muted-foreground mb-8">Are you sure you want to log out of UniSense?</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setShowLogoutModal(false)} className="py-3 px-4 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all">Cancel</button>
              <button onClick={handleLogout} className="py-3 px-4 bg-destructive text-white rounded-xl font-semibold hover:bg-destructive/90 transition-all shadow-premium">Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

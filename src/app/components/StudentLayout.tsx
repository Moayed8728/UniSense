import { Link, useLocation, useNavigate } from "react-router";
import { Compass, Search, LayoutGrid, Sparkles, LayoutDashboard, Heart, GitCompare, LogOut, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

interface StudentLayoutProps {
  children: React.ReactNode;
}

export function StudentLayout({ children }: StudentLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/student", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { path: "/browse", label: "Browse Universities", icon: LayoutGrid },
    { path: "/discover", label: "Search Programs", icon: Search },
    { path: "/smart-search", label: "Smart Search", icon: Sparkles },
    { path: "/student/recommendations", label: "Recommendations", icon: Sparkles },
    { path: "/student/saved", label: "Saved Programs", icon: Heart },
    { path: "/student/compare", label: "Compare Programs", icon: GitCompare },
    { path: "/student/preferences", label: "Study Preferences", icon: SlidersHorizontal },
  ];

  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const handleLogout = () => {
    toast.success("You have been logged out successfully.");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-glass-border shadow-premium">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/student" className="flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-accent-blue to-accent-cyan p-2 rounded-xl shadow-premium">
                  <Compass className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  <span className="text-gradient-hero">UniSense</span> Discover
                </h1>
                <p className="text-xs text-muted-foreground">Find your perfect program</p>
              </div>
            </Link>

            <div className="flex items-center gap-2 flex-wrap justify-end">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all text-sm font-medium ${
                    isActive(item.path, item.exact)
                      ? "bg-accent-blue/20 text-accent-blue border border-accent-blue/30 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent-blue/5 border border-transparent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="flex items-center gap-2 px-3 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all border border-transparent hover:border-destructive/20"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}

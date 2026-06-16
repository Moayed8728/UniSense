import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  BrainCircuit,
  Bot,
  GitCompare,
  Heart,
  LayoutDashboard,
  LayoutGrid,
  LogIn,
  LogOut,
  Menu,
  Search,
  SlidersHorizontal,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";
import { toast } from "sonner";
import { clearDemoSession, getDemoSession } from "../lib/auth";
import { UniSenseLogo } from "./UniSenseLogo";

interface StudentLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/student", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { path: "/browse", label: "Browse Universities", icon: LayoutGrid },
  { path: "/discover", label: "Search Programs", icon: Search },
  { path: "/smart-search", label: "Smart Search", icon: BrainCircuit },
  { path: "/student/recommendations", label: "Recommendations", icon: Sparkles },
  { path: "/student/ai-recommendations", label: "AI Recommendations", icon: WandSparkles },
  { path: "/student/ai-assistant", label: "AI Assistant", icon: Bot },
  { path: "/student/saved", label: "Saved Programs", icon: Heart },
  { path: "/student/compare", label: "Compare Programs", icon: GitCompare },
  { path: "/student/preferences", label: "Study Preferences", icon: SlidersHorizontal },
];

export function StudentLayout({ children }: StudentLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const session = getDemoSession();
  const isStudentSignedIn = session?.role === "student";
  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    clearDemoSession();
    toast.success("You have been logged out.");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen flex overflow-x-hidden" style={{ background: "var(--background)" }}>
      {isMobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`w-72 max-w-[calc(100vw-3rem)] shrink-0 flex flex-col fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out md:z-40 md:translate-x-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "linear-gradient(180deg, rgba(12,18,28,0.99), rgba(9,10,16,0.99))", borderRight: "1px solid rgba(6,182,212,0.14)" }}
      >
        <div className="px-5 py-4 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
          <Link to="/student" onClick={() => setIsMobileSidebarOpen(false)} className="block">
            <UniSenseLogo className="h-14 w-full" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 pl-1">Student Portal</div>
          </Link>
        </div>

        <div className="px-3 pt-3">
          <div className="px-3 py-3 rounded-xl bg-accent-blue/5 border border-accent-blue/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/15 flex items-center justify-center">
                {isStudentSignedIn ? <UserRound className="w-4 h-4 text-accent-blue" /> : <Sparkles className="w-4 h-4 text-accent-cyan" />}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{isStudentSignedIn ? "Signed in as" : "Browsing as guest"}</p>
                <p className="text-sm font-semibold">{isStudentSignedIn ? "UniSense Student" : "Explore freely"}</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="app-sidebar-scroll flex-1 min-h-0 px-3 py-4 overflow-y-auto">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Discover</p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path, item.exact);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${
                    active ? "text-accent-cyan shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent-blue/5"
                  }`}
                  style={active ? { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" } : { border: "1px solid transparent" }}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--accent-cyan)]" />}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-3 border-t" style={{ borderColor: "var(--sidebar-border)" }}>
          {isStudentSignedIn ? (
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all text-sm font-medium">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          ) : (
            <Link to="/auth/login" onClick={() => setIsMobileSidebarOpen(false)} className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium">
              <LogIn className="w-4 h-4" /> Sign in
            </Link>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 w-full md:ml-72 workspace-grid">
        <header className="sticky top-0 z-30 border-b px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between gap-3" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)", borderColor: "var(--glass-border)" }}>
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              aria-label="Open navigation"
              className="md:hidden p-2.5 rounded-xl transition-all hover:bg-accent-blue/10 shrink-0"
              style={{ border: "1px solid var(--glass-border)" }}
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="min-w-0">
            <h2 className="font-semibold text-lg leading-none">{navItems.find((item) => isActive(item.path, item.exact))?.label ?? "Program Discovery"}</h2>
            <p className="text-xs text-muted-foreground mt-1">Programs linked to verified universities</p>
            </div>
          </div>
          {!isStudentSignedIn && (
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline text-xs text-muted-foreground">Browsing as guest</span>
              <Link to="/auth/login" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-blue/15 border border-accent-blue/25 text-accent-cyan text-sm font-semibold">
                <LogIn className="w-4 h-4" /> Sign in
              </Link>
            </div>
          )}
        </header>
        <main className="flex-1 p-4 sm:p-6 md:p-8 xl:p-10 min-w-0">
          <div className="max-w-[1600px] mx-auto min-w-0">{children}</div>
        </main>
      </div>
    </div>
  );
}

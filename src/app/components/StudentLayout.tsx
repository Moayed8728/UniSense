import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import {
  BrainCircuit,
  Bot,
  Building2,
  GitCompare,
  Heart,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  SlidersHorizontal,
  Sparkles,
  UserRound,
  WandSparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { clearDemoSession, getDemoSession } from "../lib/auth";
import { UniSenseLogo } from "./UniSenseLogo";

interface StudentLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/student", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { path: "/browse", label: "Browse Universities", icon: Building2 },
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
  const session = getDemoSession();
  const isStudentSignedIn = session?.role === "student";
  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    clearDemoSession();
    toast.success("You have been logged out.");
    navigate("/auth/login");
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen flex" style={{ background: "var(--background)" }}>
      {/* Desktop Sidebar */}
      <aside className="smart-sidebar w-[4.75rem] hover:w-64 focus-within:w-64 shrink-0 flex-col fixed inset-y-0 left-0 z-40 hidden lg:flex overflow-hidden transition-[width] duration-300 ease-out" style={{ background: "linear-gradient(180deg, rgba(12,18,28,0.99), rgba(9,10,16,0.99))", borderRight: "1px solid rgba(6,182,212,0.14)" }}>
        <div className="px-3 py-4 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
          <Link to="/student" className="block">
            <UniSenseLogo className="smart-sidebar-logo h-16 w-full" />
            <div className="smart-sidebar-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 pl-1">Student Portal</div>
          </Link>
        </div>

        <div className="px-3 pt-3">
          <div className="px-3 py-3 rounded-xl bg-accent-blue/5 border border-accent-blue/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-blue/15 flex items-center justify-center">
                {isStudentSignedIn ? <UserRound className="w-4 h-4 text-accent-blue" /> : <Sparkles className="w-4 h-4 text-accent-cyan" />}
              </div>
              <div className="smart-sidebar-label">
                <p className="text-xs text-muted-foreground">{isStudentSignedIn ? "Signed in as" : "Browsing as guest"}</p>
                <p className="text-sm font-semibold">{isStudentSignedIn ? "UniSense Student" : "Explore freely"}</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="app-sidebar-scroll flex-1 min-h-0 px-3 py-4 overflow-y-auto">
          <p className="smart-sidebar-label px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Discover</p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path, item.exact);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-active={active ? "true" : "false"}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium ${
                    active ? "text-accent-cyan shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent-blue/5"
                  }`}
                  style={active ? { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" } : { border: "1px solid transparent" }}
                >
                  <span className="smart-sidebar-icon">
                    <item.icon className="w-5 h-5 shrink-0" />
                  </span>
                  <span className="smart-sidebar-label flex-1">{item.label}</span>
                  {active && <span className="smart-sidebar-label w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--accent-cyan)]" />}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-3 border-t" style={{ borderColor: "var(--sidebar-border)" }}>
          {isStudentSignedIn ? (
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all text-sm font-medium">
              <span className="smart-sidebar-icon"><LogOut className="w-5 h-5" /></span> <span className="smart-sidebar-label">Logout</span>
            </button>
          ) : (
            <Link to="/auth/login" className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium">
              <span className="smart-sidebar-icon"><LogIn className="w-5 h-5" /></span> <span className="smart-sidebar-label">Sign in</span>
            </Link>
          )}
        </div>
      </aside>

      {/* Mobile Header + Drawer */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b px-4 py-3 flex items-center justify-between" style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)", borderColor: "var(--glass-border)" }}>
        <Link to="/student" className="flex items-center gap-2">
          <UniSenseLogo className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/60" onClick={closeMobile} />
          <div
            className="mobile-drawer relative w-72 max-w-[80%] h-full flex flex-col"
            style={{ background: "linear-gradient(180deg, rgba(12,18,28,0.99), rgba(9,10,16,0.99))", borderRight: "1px solid rgba(6,182,212,0.14)" }}
          >
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--sidebar-border)" }}>
              <Link to="/student" onClick={closeMobile}>
                <UniSenseLogo className="h-10 w-auto" />
              </Link>
              <button onClick={closeMobile} className="p-2 text-muted-foreground">
                <X className="w-5 h-5" />
              </button>
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

            <nav className="flex-1 min-h-0 px-3 py-4 overflow-y-auto">
              <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Discover</p>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path, item.exact);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobile}
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
                <Link to="/auth/login" onClick={closeMobile} className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium">
                  <LogIn className="w-4 h-4" /> Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="smart-page flex-1 flex flex-col min-w-0 lg:ml-[4.75rem] pt-14 lg:pt-0">
        {/* Desktop Header */}
        <header className="sticky top-0 z-30 border-b px-4 lg:px-8 py-4 hidden lg:flex items-center justify-between" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)", borderColor: "var(--glass-border)" }}>
          <div>
            <h2 className="font-semibold text-lg leading-none">{navItems.find((item) => isActive(item.path, item.exact))?.label ?? "Program Discovery"}</h2>
            <p className="text-xs text-muted-foreground mt-1">Programs linked to verified universities</p>
          </div>
          {!isStudentSignedIn && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Browsing as guest</span>
              <Link to="/auth/login" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-blue/15 border border-accent-blue/25 text-accent-cyan text-sm font-semibold">
                <LogIn className="w-4 h-4" /> Sign in
              </Link>
            </div>
          )}
        </header>

        <main className="flex-1 p-4 md:p-5 lg:p-6 xl:p-7">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

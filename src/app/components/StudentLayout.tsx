import { Link, useLocation, useNavigate } from "react-router";
import {
  BrainCircuit,
  GitCompare,
  Heart,
  LayoutDashboard,
  LayoutGrid,
  LogIn,
  LogOut,
  Search,
  SlidersHorizontal,
  Sparkles,
  UserRound,
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

  const handleLogout = () => {
    clearDemoSession();
    toast.success("You have been logged out.");
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "var(--background)" }}>
      <aside className="w-64 shrink-0 flex flex-col fixed inset-y-0 left-0 z-40" style={{ background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)" }}>
        <div className="p-5 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
          <Link to="/student" className="block">
            <UniSenseLogo className="h-12 w-full" />
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

        <nav className="flex-1 min-h-0 px-3 py-4 overflow-y-auto">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Discover</p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path, item.exact);
              return (
                <Link
                  key={item.path}
                  to={item.path}
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
            <Link to="/auth/login" className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium">
              <LogIn className="w-4 h-4" /> Sign in
            </Link>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col" style={{ marginLeft: "256px" }}>
        <header className="sticky top-0 z-30 border-b px-8 py-4 flex items-center justify-between" style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)", borderColor: "var(--glass-border)" }}>
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
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}

import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import { clearDemoSession } from "../lib/auth";
import { UniSenseLogo } from "./UniSenseLogo";
import {
  LayoutDashboard,
  Building2,
  Upload,
  Table2,
  RefreshCw,
  Link2,
  History,
  User,
  LogOut,
  Sparkles,
  Bell,
  X,
  ShieldCheck,
  Menu,
} from "lucide-react";

interface RepLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const navItems = [
  { path: "/rep", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { path: "/rep/university", label: "My University", icon: Building2 },
  { path: "/rep/source-links", label: "Official Sources", icon: Link2 },
  { path: "/rep/imports", label: "Program Catalogue Sources", icon: Upload },
  { path: "/rep/imported-programs", label: "Programs Under My University", icon: Table2 },
  { path: "/rep/update-requests", label: "Update Requests", icon: RefreshCw },
  { path: "/rep/history", label: "Verification History", icon: History },
  { path: "/rep/profile", label: "Profile", icon: User },
];

export function RepLayout({ children, pageTitle }: RepLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    clearDemoSession();
    toast.success("You have been logged out successfully.");
    navigate("/auth/login");
  };

  const currentNav = navItems.find((item) => isActive(item.path, item.exact));

  return (
    <div className="rep-console min-h-screen flex" style={{ background: "var(--background)" }}>
      {/* Desktop Sidebar */}
      <aside
        className="smart-sidebar w-[4.75rem] hover:w-64 focus-within:w-64 shrink-0 flex flex-col fixed top-0 left-0 bottom-0 z-40 hidden lg:flex overflow-hidden transition-[width] duration-300 ease-out"
        style={{ background: "linear-gradient(180deg, rgba(16,15,28,0.99), rgba(9,10,16,0.99))", borderRight: "1px solid rgba(124,58,237,0.16)" }}
      >
        {/* Logo */}
        <div className="px-3 py-4 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
          <Link to="/" className="block">
            <UniSenseLogo className="smart-sidebar-logo h-16 w-full" />
            <div className="smart-sidebar-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 pl-1">Representative Portal</div>
          </Link>
        </div>

        {/* University badge */}
        <div className="px-3 pt-3">
          <div
            className="px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <div className="smart-sidebar-label min-w-0">
                <div className="text-xs text-muted-foreground font-medium">Assigned University</div>
                <div className="text-sm font-semibold text-foreground truncate leading-tight mt-0.5">
                  Universiti Teknologi Malaysia
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              <span className="smart-sidebar-label text-xs text-success font-medium">Verified Representative</span>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="app-sidebar-scroll flex-1 min-h-0 px-3 py-3 overflow-y-auto">
          <div className="smart-sidebar-label px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            UniRep Pages
          </div>
          <div className="space-y-0.5">
          {navItems.map((item) => {
            const active = isActive(item.path, item.exact);
            return (
              <Link
                key={item.path}
                to={item.path}
                data-active={active ? "true" : "false"}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-sm font-semibold group ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  active
                    ? { background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }
                    : { border: "1px solid transparent" }
                }
              >
                <span className="smart-sidebar-icon">
                  <item.icon className={`w-5 h-5 shrink-0 ${active ? "text-primary" : ""}`} />
                </span>
                <span className="smart-sidebar-label flex-1">{item.label}</span>
                {active && <div className="smart-sidebar-label w-1.5 h-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
          </div>
        </nav>

        {/* User + Logout */}
        <div className="p-3 border-t space-y-1" style={{ borderColor: "var(--sidebar-border)" }}>
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
              AR
            </div>
            <div className="smart-sidebar-label min-w-0 flex-1">
              <div className="text-sm font-medium truncate">Ahmad Razak</div>
              <div className="text-xs text-muted-foreground truncate">rep@unisense.com</div>
            </div>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all text-sm font-medium"
            style={{ border: "1px solid transparent" }}
          >
            <span className="smart-sidebar-icon"><LogOut className="w-5 h-5" /></span>
            <span className="smart-sidebar-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header + Drawer */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b px-4 py-3 flex items-center justify-between" style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(20px)", borderColor: "var(--glass-border)" }}>
        <Link to="/rep" className="flex items-center gap-2">
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
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div
            className="mobile-drawer relative w-72 max-w-[80%] h-full flex flex-col"
            style={{ background: "linear-gradient(180deg, rgba(16,15,28,0.99), rgba(9,10,16,0.99))", borderRight: "1px solid rgba(124,58,237,0.16)" }}
          >
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--sidebar-border)" }}>
              <Link to="/rep" onClick={() => setMobileOpen(false)}>
                <UniSenseLogo className="h-10 w-auto" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-muted-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* University badge */}
            <div className="px-3 pt-3">
              <div
                className="px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground font-medium">Assigned University</div>
                    <div className="text-sm font-semibold text-foreground truncate leading-tight mt-0.5">
                      Universiti Teknologi Malaysia
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                  <span className="text-xs text-success font-medium">Verified Representative</span>
                </div>
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 min-h-0 px-3 py-3 overflow-y-auto">
              <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                UniRep Pages
              </div>
              <div className="space-y-0.5">
              {navItems.map((item) => {
                const active = isActive(item.path, item.exact);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-sm font-semibold group ${
                      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={
                      active
                        ? { background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }
                        : { border: "1px solid transparent" }
                    }
                  >
                    <item.icon className={`w-4 h-4 shrink-0 ${active ? "text-primary" : ""}`} />
                    <span className="flex-1">{item.label}</span>
                    {active && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}
              </div>
            </nav>

            {/* User + Logout */}
            <div className="p-3 border-t space-y-1" style={{ borderColor: "var(--sidebar-border)" }}>
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                  AR
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium truncate">Ahmad Razak</div>
                  <div className="text-xs text-muted-foreground truncate">rep@unisense.com</div>
                </div>
              </div>
              <button
                onClick={() => { setShowLogoutModal(true); setMobileOpen(false); }}
                className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all text-sm font-medium"
                style={{ border: "1px solid transparent" }}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="smart-page flex-1 flex flex-col min-w-0 lg:ml-[4.75rem] pt-14 lg:pt-0">
        {/* Topbar */}
        <header
          className="sticky top-0 z-30 border-b px-4 lg:px-8 py-4 flex items-center justify-between"
          style={{
            background: "rgba(10,10,15,0.85)",
            backdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div>
            <h2 className="font-semibold text-lg leading-none">
              {currentNav?.label || pageTitle || "Dashboard"}
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">Universiti Teknologi Malaysia</p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "var(--success)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Verified Rep
            </div>
            <button
              onClick={() => toast.info("You have 3 items awaiting admin review.")}
              className="relative p-2.5 rounded-xl transition-all hover:bg-primary/10"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-5 lg:p-6 xl:p-7">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
            onClick={() => setShowLogoutModal(false)}
          />
          <div className="relative glass-card rounded-3xl p-8 max-w-sm w-full shadow-premium-xl border-glow">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
            >
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
              <button
                onClick={() => setShowLogoutModal(false)}
                className="py-3 px-4 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="py-3 px-4 bg-destructive text-white rounded-xl font-semibold hover:bg-destructive/90 transition-all shadow-premium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

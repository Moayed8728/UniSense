import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { clearDemoSession } from "../lib/auth";
import { UniSenseLogo } from "./UniSenseLogo";
import {
  LayoutDashboard,
  Users,
  Building2,
  Upload,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  Menu,
  Shield,
  Bell,
  X,
  UserCheck,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const navItems = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { path: "/admin/rep-applications", label: "Representative Applications", icon: UserCheck },
  { path: "/admin/sources", label: "Official Source Verification", icon: Shield },
  { path: "/admin/imports", label: "Program Source Review", icon: Upload },
  { path: "/admin/universities", label: "Manage Universities", icon: Building2 },
  { path: "/admin/users", label: "Manage Users", icon: Users },
  { path: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/admin/audit", label: "Audit Logs", icon: FileText },
  { path: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminLayout({ children, pageTitle }: AdminLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    setIsMobileSidebarOpen(false);
    clearDemoSession();
    toast.success("You have been logged out successfully.");
    navigate("/auth/login");
  };

  const currentNav = navItems.find((item) => isActive(item.path, item.exact));

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

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

      {/* Sidebar */}
      <aside
        className={`w-72 max-w-[calc(100vw-3rem)] shrink-0 flex flex-col fixed top-0 left-0 bottom-0 z-50 transition-transform duration-300 ease-out md:z-40 md:translate-x-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "linear-gradient(180deg, rgba(17,15,27,0.99), rgba(10,10,16,0.99))", borderRight: "1px solid rgba(139,92,246,0.16)" }}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "var(--sidebar-border)" }}>
          <Link to="/" onClick={() => setIsMobileSidebarOpen(false)} className="block">
            <UniSenseLogo className="h-14 w-full" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 pl-1">Admin Console</div>
          </Link>
        </div>

        {/* Admin badge */}
        <div className="px-3 pt-3">
          <div
            className="px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-violet/20 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-accent-violet" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground font-medium">Logged in as</div>
                <div className="text-sm font-semibold text-foreground truncate leading-tight mt-0.5">
                  System Administrator
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="text-xs text-accent-violet font-medium">Full Access</span>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="app-sidebar-scroll flex-1 min-h-0 px-3 py-3 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Admin Pages
          </div>
          <div className="space-y-0.5">
          {navItems.map((item) => {
            const active = isActive(item.path, item.exact);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileSidebarOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-sm font-semibold group ${
                  active ? "text-accent-violet" : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  active
                    ? { background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }
                    : { border: "1px solid transparent" }
                }
              >
                <item.icon className={`w-4 h-4 shrink-0 ${active ? "text-accent-violet" : ""}`} />
                <span className="flex-1">{item.label}</span>
                {active && <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />}
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
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
            >
              SA
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium truncate">Super Admin</div>
              <div className="text-xs text-muted-foreground truncate">admin@unisense.com</div>
            </div>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all text-sm font-medium"
            style={{ border: "1px solid transparent" }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 w-full md:ml-72 workspace-grid">
        {/* Topbar */}
        <header
          className="sticky top-0 z-30 border-b px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between gap-3"
          style={{
            background: "rgba(10,10,15,0.85)",
            backdropFilter: "blur(20px)",
            borderColor: "var(--glass-border)",
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              aria-label="Open navigation"
              className="md:hidden p-2.5 rounded-xl transition-all hover:bg-accent-violet/10 shrink-0"
              style={{ border: "1px solid var(--glass-border)" }}
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="min-w-0">
              <h2 className="font-semibold text-lg leading-none">
                {currentNav?.label || pageTitle || "Admin Dashboard"}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">UniSense Program Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="hidden sm:flex text-xs px-3 py-1.5 rounded-full font-medium items-center gap-1.5"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: "var(--accent-violet)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              Admin Mode
            </div>
            <button
              onClick={() => toast.info("No new admin notifications.")}
              className="relative p-2.5 rounded-xl transition-all hover:bg-accent-violet/10"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 xl:p-10 min-w-0">
          <div className="max-w-[1600px] mx-auto min-w-0">{children}</div>
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
            <p className="text-muted-foreground mb-8">Are you sure you want to log out of the admin console?</p>
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

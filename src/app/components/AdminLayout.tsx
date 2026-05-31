import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  ClipboardCheck,
  CheckCircle2,
  Building2,
  Users,
  BarChart3,
  FileText,
  Shield,
  LogOut
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: "/admin", label: "Review Queue", icon: LayoutDashboard },
    { path: "/admin/sources", label: "Sources", icon: CheckCircle2 },
    { path: "/admin/universities", label: "Universities", icon: Building2 },
    { path: "/admin/users", label: "Users", icon: Users },
    { path: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/admin/audit", label: "Audit Logs", icon: FileText },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-glass-border shadow-premium">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-violet blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-accent-violet to-accent-pink p-2 rounded-xl shadow-premium">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">
                  <span className="text-gradient-hero">UniSense</span> Admin
                </h1>
                <p className="text-xs text-muted-foreground">Program Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-medium ${
                    isActive(item.path)
                      ? "bg-accent-violet/20 text-accent-violet border border-accent-violet/30 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent-violet/5 border border-transparent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}

              <button className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all border border-transparent hover:border-destructive/20">
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}

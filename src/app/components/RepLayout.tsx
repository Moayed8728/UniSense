import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  FileUp,
  FolderKanban,
  User,
  Sparkles,
  LogOut
} from "lucide-react";

interface RepLayoutProps {
  children: React.ReactNode;
}

export function RepLayout({ children }: RepLayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: "/rep", label: "Dashboard", icon: LayoutDashboard },
    { path: "/rep/submit", label: "Submit Program", icon: FileUp },
    { path: "/rep/submissions", label: "My Submissions", icon: FolderKanban },
    { path: "/rep/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => {
    if (path === "/rep") {
      return location.pathname === "/rep";
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
                <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                <div className="relative gradient-primary p-2 rounded-xl shadow-premium">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gradient-primary">UniSense</h1>
                <p className="text-xs text-muted-foreground">University Representative</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium ${
                    isActive(item.path)
                      ? "bg-primary/20 text-primary border border-primary/30 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5 border border-transparent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}

              <button className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all border border-transparent hover:border-destructive/20">
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

import { Link, useNavigate, useSearchParams } from "react-router";
import { Mail, Lock, ArrowRight, Eye, EyeOff, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getRepresentativeApplications } from "../../lib/prototypeStore";
import { setDemoSession } from "../../lib/auth";
import { UniSenseLogo } from "../../components/UniSenseLogo";

const demoAccounts = [
  { label: "Student", email: "student@unisense.com", route: "/student", role: "student" as const },
  { label: "Admin", email: "admin@unisense.com", route: "/admin", role: "admin" as const },
  { label: "Rep · Approved", email: "rep@unisense.com", route: "/rep", role: "representative" as const },
  { label: "Rep · Pending", email: "pending.rep@unisense.com", route: "/auth/pending", role: "representative" as const },
  { label: "Rep · Rejected", email: "rejected.rep@unisense.com", route: "/auth/rejected", role: "representative" as const },
  { label: "Rep · Suspended", email: "suspended.rep@unisense.com", route: "/auth/suspended", role: "representative" as const },
];

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roleIntent = searchParams.get("role");
  const isAdminLogin = roleIntent === "admin";
  const isRepresentativeLogin = roleIntent === "representative";
  const [email, setEmail] = useState(
    isAdminLogin ? "admin@unisense.com" : isRepresentativeLogin ? "rep@unisense.com" : "",
  );
  const [password, setPassword] = useState(isAdminLogin || isRepresentativeLogin ? "password123" : "");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const selectDemoAccount = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("password123");
    toast.info("Demo credentials filled. Select Sign In to continue.");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const demoAccount = demoAccounts.find((account) => account.email === normalizedEmail);

    if (demoAccount) {
      if (password !== "password123") {
        toast.error("Incorrect demo password. Use password123.");
        return;
      }
      if (demoAccount.route === "/student" || demoAccount.route === "/admin" || demoAccount.route === "/rep") {
        setDemoSession({ email: demoAccount.email, role: demoAccount.role });
      }
      toast.success(`Signed in as ${demoAccount.label}.`);
      navigate(demoAccount.route);
      return;
    }

    const savedApplication = getRepresentativeApplications().find(
      (application) => application.email.toLowerCase() === normalizedEmail,
    );

    if (savedApplication) {
      localStorage.setItem("unisense.currentRepApplicationId", savedApplication.id);
      if (savedApplication.status === "approved") {
        setDemoSession({ email: savedApplication.email, role: "representative" });
        toast.success("Welcome back! Your representative access is approved.");
        navigate("/rep");
      } else if (savedApplication.status === "rejected") {
        toast.error("Your application requires changes.");
        navigate("/auth/rejected");
      } else {
        toast.info("Your application is pending approval.");
        navigate("/auth/pending");
      }
      return;
    }

    toast.error("Use one of the demo accounts below or a submitted representative application.");
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      {/* Animated background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="block w-80 h-28 mx-auto mb-8">
          <UniSenseLogo className="w-full h-full" />
        </Link>

        {/* Login Card */}
        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Welcome back</h2>
            <p className="text-muted-foreground text-lg">
              {isAdminLogin
                ? "Sign in to the Administrator Console"
                : isRepresentativeLogin
                  ? "Sign in to the University Representative Portal"
                  : "Sign in to your account to continue"}
            </p>
            {isAdminLogin && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-sm font-semibold">
                <Shield className="w-4 h-4" />
                Administrator access selected
              </div>
            )}
            {isRepresentativeLogin && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <Shield className="w-4 h-4" />
                University Representative access selected
              </div>
            )}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2.5 text-foreground">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3.5 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2.5 text-foreground">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-input-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Remember me</span>
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-sm text-primary hover:text-primary-hover font-semibold transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full gradient-primary text-white py-4 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 mt-8"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-glass-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 glass-card text-sm text-muted-foreground">Don't have an account?</span>
            </div>
          </div>

          {/* Create Account Link */}
          <button
            type="button"
            onClick={() => navigate("/auth/create-account")}
            className="block w-full text-center py-3.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold"
          >
            Create Account
          </button>
        </div>

        {/* Demo Credentials Info */}
        <div className="mt-6 glass-card rounded-2xl p-5 shadow-premium border border-glass-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-info rounded-full animate-pulse" />
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Demo access · Password: password123</p>
          </div>
          <div className="space-y-2">
            {demoAccounts.map((account) => (
              <button key={account.email} type="button" onClick={() => selectDemoAccount(account.email)} className="w-full text-xs text-muted-foreground flex items-center justify-between gap-3 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
                <span>{account.label}</span>
                <code className="font-mono text-primary truncate">{account.email}</code>
              </button>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <Link
          to="/"
          className="block text-center mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

import { Link, useNavigate } from "react-router";
import { Sparkles, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo login logic - in production this would call an API
    // For demo purposes:
    // admin@unisense.com -> Admin Dashboard
    // rep@unisense.com (approved) -> Rep Dashboard
    // rep-pending@unisense.com -> Pending Screen
    // rep-rejected@unisense.com -> Rejected Screen
    // student@unisense.com -> Student Dashboard

    if (email === "admin@unisense.com") {
      toast.success("Welcome back, Admin!");
      navigate("/admin");
    } else if (email === "rep@unisense.com") {
      toast.success("Welcome back, Representative!");
      navigate("/rep");
    } else if (email === "rep-pending@unisense.com") {
      toast.info("Your application is pending approval");
      navigate("/auth/pending");
    } else if (email === "rep-rejected@unisense.com") {
      toast.error("Your application was rejected");
      navigate("/auth/rejected");
    } else if (email === "student@unisense.com") {
      toast.success("Welcome back, Student!");
      navigate("/student");
    } else if (email === "suspended@unisense.com") {
      toast.error("Your account has been suspended");
      navigate("/auth/suspended");
    } else {
      toast.success("Login successful!");
      navigate("/student");
    }
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
        <Link to="/" className="flex items-center justify-center gap-3 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-xl opacity-60 animate-pulse" />
            <div className="relative gradient-primary p-3 rounded-xl shadow-premium-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gradient-hero">UniSense</h1>
        </Link>

        {/* Login Card */}
        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Welcome back</h2>
            <p className="text-muted-foreground text-lg">Sign in to your account to continue</p>
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
          <Link
            to="/auth/create-account"
            className="block w-full text-center py-3.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold"
          >
            Create Account
          </Link>
        </div>

        {/* Demo Credentials Info */}
        <div className="mt-6 glass-card rounded-2xl p-5 shadow-premium border border-glass-border">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-info rounded-full animate-pulse" />
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Demo Credentials</p>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <span>Admin</span>
              <code className="font-mono text-primary">admin@unisense.com</code>
            </div>
            <div className="text-xs text-muted-foreground flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <span>Student</span>
              <code className="font-mono text-primary">student@unisense.com</code>
            </div>
            <div className="text-xs text-muted-foreground flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <span>Rep (Approved)</span>
              <code className="font-mono text-primary">rep@unisense.com</code>
            </div>
            <div className="text-xs text-muted-foreground flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <span>Rep (Pending)</span>
              <code className="font-mono text-warning">rep-pending@unisense.com</code>
            </div>
            <div className="text-xs text-muted-foreground flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <span>Rep (Rejected)</span>
              <code className="font-mono text-destructive">rep-rejected@unisense.com</code>
            </div>
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

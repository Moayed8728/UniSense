import { Link, useNavigate } from "react-router";
import { Sparkles, User, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student" as "student" | "representative"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // Create account logic
    if (formData.role === "student") {
      toast.success("Account created successfully! Welcome to UniSense");
      navigate("/student");
    } else {
      toast.success("Account created! Please complete your representative application");
      navigate("/auth/apply-representative");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
            <div className="relative gradient-primary p-2.5 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gradient-hero">UniSense</h1>
        </Link>

        {/* Create Account Card */}
        <div className="glass-card rounded-3xl p-8 shadow-premium-xl border-glow">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Create your account</h2>
            <p className="text-muted-foreground">Start your journey with UniSense</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">At least 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">Account Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "student" })}
                  className={`p-4 rounded-xl border transition-all ${
                    formData.role === "student"
                      ? "bg-accent-blue/10 border-accent-blue/30 text-accent-blue"
                      : "glass-card border-glass-border hover:border-glass-border/50"
                  }`}
                >
                  <div className="font-semibold mb-1">Student</div>
                  <div className="text-xs text-muted-foreground">Instant access</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "representative" })}
                  className={`p-4 rounded-xl border transition-all ${
                    formData.role === "representative"
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "glass-card border-glass-border hover:border-glass-border/50"
                  }`}
                >
                  <div className="font-semibold mb-1">Representative</div>
                  <div className="text-xs text-muted-foreground">Requires approval</div>
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full gradient-primary text-white py-3.5 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-glass-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 glass-card text-muted-foreground">Already have an account?</span>
            </div>
          </div>

          {/* Login Link */}
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="block w-full text-center py-3 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold"
          >
            Sign In
          </button>
        </div>

        {/* Back to Home */}
        <Link
          to="/"
          className="block text-center mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}

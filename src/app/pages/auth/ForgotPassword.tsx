import { Link, useNavigate } from "react-router";
import { Sparkles, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/auth/check-email");
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-blue/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-3 mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-xl opacity-60 animate-pulse" />
            <div className="relative gradient-primary p-3 rounded-xl shadow-premium-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gradient-hero">UniSense</h1>
        </Link>

        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow">
          <div className="text-center mb-10">
            <div className="relative mb-5 w-fit mx-auto">
              <div className="absolute inset-0 bg-primary blur-xl opacity-30" />
              <div className="relative bg-primary/10 p-4 rounded-2xl">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-3">Forgot Password?</h2>
            <p className="text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <button
              type="submit"
              className="w-full gradient-primary text-white py-4 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 mt-4"
            >
              Send Reset Link
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/auth/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

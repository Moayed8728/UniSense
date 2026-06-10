import { Link } from "react-router";
import { Sparkles, MailCheck, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function CheckEmail() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-success/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
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

        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow text-center">
          <div className="relative mb-6 w-fit mx-auto">
            <div className="absolute inset-0 bg-success blur-xl opacity-30" />
            <div className="relative bg-success/10 p-5 rounded-2xl">
              <MailCheck className="w-10 h-10 text-success" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-3">Check Your Email</h2>
          <p className="text-muted-foreground mb-2">
            We've sent a password reset link to
          </p>
          <p className="font-semibold text-foreground mb-8">you@example.com</p>

          <div className="glass-card rounded-2xl p-5 mb-8 text-left" style={{ border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.05)" }}>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Didn't receive the email?</span> Check your spam folder or request a new link below. The link expires in <span className="font-semibold text-foreground">15 minutes</span>.
            </p>
          </div>

          <button onClick={() => toast.success("A new reset link has been sent.")} className="w-full flex items-center justify-center gap-2 py-3.5 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold mb-4">
            <RefreshCw className="w-4 h-4" />
            Resend Reset Link
          </button>

          <Link
            to="/auth/login"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            ← Back to Login
          </Link>
        </div>

        {/* Demo shortcut */}
        <div className="mt-6 glass-card rounded-2xl p-5 shadow-premium border border-glass-border text-center">
          <p className="text-xs text-muted-foreground mb-3">Demo: Skip to reset password</p>
          <Link
            to="/auth/reset-password"
            className="text-sm text-primary hover:text-primary-hover font-semibold transition-colors"
          >
            Open Reset Password →
          </Link>
        </div>
      </div>
    </div>
  );
}

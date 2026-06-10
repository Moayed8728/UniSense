import { Link } from "react-router";
import { CheckCircle, ArrowRight } from "lucide-react";
import { UniSenseBrandLink } from "../../components/UniSenseLogo";

export default function ResetSuccess() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-success/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md">
          <UniSenseBrandLink />

        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow text-center">
          <div className="relative mb-6 w-fit mx-auto">
            <div className="absolute inset-0 bg-success blur-xl opacity-40" />
            <div className="relative bg-success/10 p-5 rounded-2xl">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-3">Password Reset!</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your password has been successfully reset. You can now log in with your new password.
          </p>

          <div
            className="glass-card rounded-2xl p-5 mb-8 text-left"
            style={{ border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.05)" }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success shrink-0" />
              <p className="text-sm text-muted-foreground">
                Password updated successfully for your UniSense account.
              </p>
            </div>
          </div>

          <Link
            to="/auth/login"
            className="w-full gradient-primary text-white py-4 rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            Sign In Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

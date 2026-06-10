import { Link } from "react-router";
import { Ban, Mail, LogOut, AlertTriangle } from "lucide-react";
import { UniSenseBrandLink } from "../../components/UniSenseLogo";

export default function SuspendedAccount() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-destructive/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-2xl">
        {/* Logo */}
          <UniSenseBrandLink className="w-72 h-24 mx-auto mb-12" />

        {/* Main Card */}
        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow border-l-4 border-l-destructive">
          {/* Status Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full border border-destructive/30 bg-destructive/5">
              <Ban className="w-5 h-5 text-destructive" />
              <span className="font-semibold text-destructive">Account Suspended</span>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive blur-2xl opacity-30" />
              <div className="relative bg-destructive/10 p-8 rounded-full">
                <Ban className="w-20 h-20 text-destructive" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Access Suspended</h2>
            <p className="text-muted-foreground text-lg">
              Your account has been temporarily suspended
            </p>
          </div>

          {/* Reason Card */}
          <div className="glass-card border border-warning/30 bg-warning/5 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-warning/10 p-2 rounded-lg mt-0.5">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="font-semibold mb-2">Why was my account suspended?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your account was suspended due to a violation of our terms of service. This may include providing false information, unauthorized access attempts, or other policy violations. For specific details about your suspension, please contact our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="glass-card rounded-2xl p-6 shadow-premium mb-8">
            <h3 className="font-semibold mb-4">Account Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-destructive">Suspended</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Suspended On</span>
                <span className="font-medium">May 30, 2026</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Account Type</span>
                <span className="font-medium">University Representative</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass-card border border-info/30 bg-info/5 rounded-2xl p-5 mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">What can I do?</span><br />
              If you believe this is an error or would like to appeal this decision, please contact our support team. Include your account details and any relevant information about your case. We'll review your appeal and respond within 2-3 business days.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="mailto:support@unisense.com?subject=Account Suspension Appeal"
              className="flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </a>
            <Link
              to="/auth/login"
              className="flex items-center justify-center gap-2 px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-destructive/5 hover:border-destructive/30 hover:text-destructive transition-all font-semibold"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Support: <a href="mailto:support@unisense.com" className="font-semibold text-primary hover:text-primary-hover">support@unisense.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import { Sparkles, XCircle, AlertTriangle, Edit, LogOut, Mail } from "lucide-react";
import { getCurrentRepresentativeApplication } from "../../lib/prototypeStore";

export default function RejectedApplication() {
  const application = getCurrentRepresentativeApplication();
  const rejectionReasons = [{
    issue: "Admin feedback",
    details: application?.rejectionReason || "Please review your application details and resubmit with verifiable information.",
  }];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-destructive/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warning/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
            <div className="relative gradient-primary p-2.5 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gradient-hero">UniSense</h1>
        </Link>

        {/* Main Card */}
        <div className="glass-card rounded-3xl p-10 shadow-premium-xl border-glow border-l-4 border-l-destructive mb-6">
          {/* Status Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full border border-destructive/30 bg-destructive/5">
              <XCircle className="w-5 h-5 text-destructive" />
              <span className="font-semibold text-destructive">Application Rejected</span>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Application Not Approved</h2>
            <p className="text-muted-foreground text-lg">
              Your University Representative application was reviewed but could not be approved at this time
            </p>
          </div>

          {/* Admin Feedback */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <div className="bg-destructive/10 p-1.5 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              Rejection Reasons
            </h3>

            <div className="space-y-4">
              {rejectionReasons.map((reason, index) => (
                <div key={index} className="glass-card border-l-4 border-l-destructive rounded-xl p-5">
                  <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    {reason.issue}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Missing Information */}
          <div className="glass-card border border-warning/30 bg-warning/5 rounded-2xl p-5 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-warning/10 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="font-semibold mb-1">What You Need to Do</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Review the feedback above, update your application with the correct information and valid documents, then resubmit for review. Make sure to:
                </p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1.5 ml-4 list-disc">
                  <li>Use your official university email address</li>
                  <li>Upload a valid authorization letter with verifiable signature</li>
                  <li>Provide accurate and verifiable university information</li>
                  <li>Include links to your official university staff profile</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submitted University Summary */}
          <div className="glass-card rounded-2xl p-6 shadow-premium mb-8">
            <h3 className="font-semibold mb-4">Original Submission</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium">{application?.universityName ?? "Not available"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Position</span>
                <span className="font-medium">{application?.position ?? "Not available"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Submitted</span>
                <span className="font-medium">{application ? new Date(application.submittedDate).toLocaleDateString() : "Not available"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Reviewed</span>
                <span className="font-medium">{application ? new Date(application.updatedAt).toLocaleDateString() : "Not available"}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/auth/apply-representative"
              className="flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all"
            >
              <Edit className="w-5 h-5" />
              Edit & Resubmit
            </Link>
            <Link
              to="/auth/login"
              className="flex items-center justify-center gap-2 px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-destructive/5 hover:border-destructive/30 hover:text-destructive transition-all font-semibold"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </div>
        </div>

        {/* Support Card */}
        <div className="glass-card rounded-2xl p-5 shadow-premium text-center">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:support@unisense.com" className="font-semibold text-primary hover:text-primary-hover">
                support@unisense.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

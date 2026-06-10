import { Link, useNavigate } from "react-router";
import { Sparkles, User, Building2, FileCheck, Check, ArrowRight, Edit } from "lucide-react";
import { toast } from "sonner";
import { getCurrentRepresentativeApplication, getRepresentativeApplicationDraft, submitRepresentativeApplication } from "../../lib/prototypeStore";

export default function ApplicationPreview() {
  const navigate = useNavigate();
  const draft = getRepresentativeApplicationDraft();
  const application = Object.keys(draft).length ? draft : getCurrentRepresentativeApplication() ?? {};

  const handleSubmit = () => {
    if (!application.fullName || !application.email || !application.universityName) {
      toast.error("Please complete the representative application first.");
      navigate("/auth/apply-representative");
      return;
    }
    submitRepresentativeApplication(application);
    toast.success("Application submitted! You'll be notified once reviewed.");
    navigate("/auth/pending");
  };

  const completeness = 95;

  return (
    <div className="min-h-screen relative overflow-hidden px-6 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
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

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Application Preview</h2>
          <p className="text-muted-foreground">Review your information before submitting</p>
        </div>

        {/* Completeness Score */}
        <div className="glass-card rounded-2xl p-6 shadow-premium mb-6 border-glow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Application Completeness</h3>
            <span className="text-2xl font-bold text-success">{completeness}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-success to-accent-blue transition-all duration-500"
              style={{ width: `${completeness}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Your application is almost complete</p>
        </div>

        {/* Application Details */}
        <div className="space-y-6">
          {/* Representative Information */}
          <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 rounded-xl">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Representative Information</h3>
                  <p className="text-sm text-muted-foreground">Your personal details</p>
                </div>
              </div>
              <button onClick={() => navigate("/auth/apply-representative")} className="text-primary hover:text-primary-hover font-semibold text-sm flex items-center gap-1.5">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Full Name</span>
                <span className="font-medium">{application.fullName || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">{application.email || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Position</span>
                <span className="font-medium">{application.position || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Department</span>
                <span className="font-medium">{application.department || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Contact Number</span>
                <span className="font-medium">{application.contactNumber || "Not provided"}</span>
              </div>
            </div>
          </div>

          {/* University Information */}
          <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-accent-blue/10 p-2.5 rounded-xl">
                  <Building2 className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">University Information</h3>
                  <p className="text-sm text-muted-foreground">Institution details</p>
                </div>
              </div>
              <button onClick={() => navigate("/auth/apply-representative")} className="text-primary hover:text-primary-hover font-semibold text-sm flex items-center gap-1.5">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">University Name</span>
                <span className="font-medium">{application.universityName || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">{application.city || "Not provided"}, {application.country || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Official Website</span>
                <a href={application.websiteUrl || "#"} target="_blank" rel="noreferrer" className="font-medium text-primary hover:text-primary-hover">{application.websiteUrl || "Not provided"}</a>
              </div>
              <div className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-muted-foreground">Contact Email</span>
                <span className="font-medium">{application.contactEmail || "Not provided"}</span>
              </div>
              <div className="flex flex-col py-2">
                <span className="text-muted-foreground mb-1">Address</span>
                <span className="font-medium">{application.address || "Not provided"}</span>
              </div>
            </div>
          </div>

          {/* Official Source Links */}
          <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-success/10 p-2.5 rounded-xl">
                  <FileCheck className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Authorization Proof</h3>
                  <p className="text-sm text-muted-foreground">Verification documents</p>
                </div>
              </div>
              <button onClick={() => navigate("/auth/apply-representative")} className="text-primary hover:text-primary-hover font-semibold text-sm flex items-center gap-1.5">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 glass-card border border-glass-border rounded-xl">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Authorization Letter</p>
                  <p className="text-xs text-muted-foreground">{application.proofDocumentName || "No document selected"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-card border border-glass-border rounded-xl">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Staff Profile Link</p>
                  <p className="text-xs text-muted-foreground">{application.officialSourceLink || "Not provided"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 glass-card border border-glass-border rounded-xl">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Authorization Confirmed</p>
                  <p className="text-xs text-muted-foreground">All verification requirements met</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="glass-card border border-info/30 bg-info/5 rounded-2xl p-5 mt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">What happens next?</span><br />
            After you submit, our admin team will review your application and verify your authorization. This typically takes 2-3 business days. You'll receive an email notification once your application is processed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8 gap-4">
          <Link
            to="/auth/apply-representative"
            className="px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold flex items-center gap-2"
          >
            <Edit className="w-5 h-5" />
            Back to Edit
          </Link>
          <button
            onClick={handleSubmit}
            className="px-8 py-3.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            Submit Application
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

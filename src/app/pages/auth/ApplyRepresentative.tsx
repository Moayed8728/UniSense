import { Link, useNavigate } from "react-router";
import { Sparkles, User, Mail, Phone, Building2, Globe, Upload, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ApplyRepresentative() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Representative Info
    fullName: "",
    email: "",
    position: "",
    department: "",
    contactNumber: "",
    // University Info
    universityName: "",
    country: "",
    city: "",
    websiteUrl: "",
    contactEmail: "",
    address: "",
    // Authorization
    proofDocument: null as File | null,
    verificationNote: "",
    officialSourceLink: "",
    confirmAuthorized: false
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, proofDocument: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmAuthorized) {
      toast.error("Please confirm you are authorized to represent this university");
      return;
    }
    toast.success("Application submitted successfully!");
    navigate("/auth/application-preview");
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden px-6 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
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

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold">University Representative Application</h2>
            <span className="text-sm text-muted-foreground font-semibold">Step {step} of {totalSteps}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className={`text-xs ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>Representative Info</span>
            <span className={`text-xs ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>University Info</span>
            <span className={`text-xs ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>Authorization</span>
            <span className={`text-xs ${step >= 4 ? 'text-primary' : 'text-muted-foreground'}`}>Review</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-3xl p-8 shadow-premium-xl border-glow">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Representative Information */}
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold mb-6">Representative Information</h3>

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

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@university.edu"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Position / Job Title</label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="e.g., Admissions Officer, Program Director"
                    className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Department / Office</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g., Office of Admissions"
                    className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Contact Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: University Information */}
            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold mb-6">University Information</h3>

                <div>
                  <label className="block text-sm font-semibold mb-2">University Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={formData.universityName}
                      onChange={(e) => setFormData({ ...formData, universityName: e.target.value })}
                      placeholder="Harvard University"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Cambridge"
                      className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Official Website URL</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="url"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://www.university.edu"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Official Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="admissions@university.edu"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Full address"
                    rows={3}
                    className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Authorization Proof */}
            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold mb-6">Authorization Proof</h3>

                <div>
                  <label className="block text-sm font-semibold mb-2">Upload Authorization Letter / Proof Document</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="proof-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="proof-upload"
                      className="flex items-center justify-center gap-3 w-full px-4 py-6 glass-card border-2 border-dashed border-input-border rounded-xl hover:border-primary/50 cursor-pointer transition-all"
                    >
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <div className="text-center">
                        <p className="text-sm font-semibold">
                          {formData.proofDocument ? formData.proofDocument.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or Image (max 10MB)</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Official University Source Link</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="url"
                      value={formData.officialSourceLink}
                      onChange={(e) => setFormData({ ...formData, officialSourceLink: e.target.value })}
                      placeholder="https://www.university.edu/staff"
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Link to your profile on the official university website</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Staff Email Verification Note</label>
                  <textarea
                    value={formData.verificationNote}
                    onChange={(e) => setFormData({ ...formData, verificationNote: e.target.value })}
                    placeholder="Please provide any additional verification details..."
                    rows={4}
                    className="w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                <div className="glass-card border border-warning/30 bg-warning/5 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.confirmAuthorized}
                      onChange={(e) => setFormData({ ...formData, confirmAuthorized: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-warning/30 text-primary focus:ring-primary/20"
                      required
                    />
                    <span className="text-sm">
                      <span className="font-semibold">I confirm that I am authorized to represent this university</span> and that all information provided is accurate and verifiable.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">Review Your Application</h3>

                {/* Representative Info Summary */}
                <div className="glass-card rounded-2xl p-6 border border-glass-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-lg">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    Representative Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Name:</span> {formData.fullName}</p>
                    <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
                    <p><span className="text-muted-foreground">Position:</span> {formData.position}</p>
                    <p><span className="text-muted-foreground">Department:</span> {formData.department}</p>
                  </div>
                </div>

                {/* University Info Summary */}
                <div className="glass-card rounded-2xl p-6 border border-glass-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="bg-accent-blue/10 p-1.5 rounded-lg">
                      <Building2 className="w-4 h-4 text-accent-blue" />
                    </div>
                    University Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">University:</span> {formData.universityName}</p>
                    <p><span className="text-muted-foreground">Location:</span> {formData.city}, {formData.country}</p>
                    <p><span className="text-muted-foreground">Website:</span> {formData.websiteUrl}</p>
                  </div>
                </div>

                {/* Authorization Summary */}
                <div className="glass-card rounded-2xl p-6 border border-glass-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="bg-success/10 p-1.5 rounded-lg">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    Authorization
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      Proof document uploaded
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      Authorization confirmed
                    </p>
                  </div>
                </div>

                <div className="glass-card border border-info/30 bg-info/5 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    By submitting this application, your information will be reviewed by our admin team. You'll be notified via email once your application is processed.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-glass-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
              ) : (
                <Link
                  to="/auth/role-selection"
                  className="px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold"
                >
                  Cancel
                </Link>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  Submit Application
                  <Check className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

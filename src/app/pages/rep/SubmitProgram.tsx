import { RepLayout } from "../../components/RepLayout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  FileText,
  GraduationCap,
  DollarSign,
  Link as LinkIcon,
  CheckCircle2,
  Info,
  Plus,
  X,
  ArrowRight,
  Building2,
  Lock,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

interface SourceLink {
  url: string;
  description: string;
  category: string;
}

const steps = [
  { number: 1, title: "Program Info", icon: FileText },
  { number: 2, title: "Academic Details", icon: GraduationCap },
  { number: 3, title: "Fees", icon: DollarSign },
  { number: 4, title: "Source Links", icon: LinkIcon },
  { number: 5, title: "Review", icon: CheckCircle2 },
];

export default function SubmitProgram() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [sources, setSources] = useState<SourceLink[]>([{ url: "", description: "", category: "Programme Overview" }]);

  const addSource = () => setSources([...sources, { url: "", description: "", category: "Programme Overview" }]);
  const removeSource = (i: number) => setSources(sources.filter((_, idx) => idx !== i));

  const handleSubmit = () => {
    toast.success("Program submitted for review!");
    navigate("/rep/submissions");
  };

  const inputCls = "w-full px-4 py-3 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50 transition-all";

  return (
    <RepLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Restricted notice */}
        <div
          className="glass-card rounded-2xl p-4 flex items-center gap-3 text-sm"
          style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.05)" }}
        >
          <Lock className="w-4 h-4 text-primary shrink-0" />
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">Universiti Teknologi Malaysia</span> — You are authorized to submit programs for this university only.
          </span>
        </div>

        {/* Stepper */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      currentStep > step.number ? "bg-success text-white" :
                      currentStep === step.number ? "gradient-primary text-white shadow-premium" :
                      "glass-card text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <p className={`text-xs mt-2 font-medium ${
                    currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                  }`}>{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-4 ${currentStep > step.number ? "bg-primary/40" : "bg-glass-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-2">Basic Program Information</h2>
              <div className="glass-card rounded-xl p-4 flex items-center gap-3 text-sm" style={{ border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.05)" }}>
                <Building2 className="w-4 h-4 text-success shrink-0" />
                <span className="text-muted-foreground">University locked to: <span className="font-semibold text-foreground">Universiti Teknologi Malaysia</span></span>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">University *</label>
                  <input type="text" value="Universiti Teknologi Malaysia" disabled className={`${inputCls} opacity-60 cursor-not-allowed`} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Degree Level *</label>
                  <select className={inputCls}>
                    <option value="">Select degree level</option>
                    {["Bachelor", "Master", "PhD", "Diploma", "Certificate"].map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Program Name *</label>
                <input type="text" placeholder="e.g., Bachelor of Computer Science (Software Engineering)" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Field of Study *</label>
                <input type="text" placeholder="e.g., Computer Science, Engineering, Business" className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Country *</label>
                  <input type="text" value="Malaysia" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">City *</label>
                  <input type="text" value="Skudai, Johor" className={inputCls} />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-2">Academic Details</h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Program Duration *</label>
                  <input type="text" placeholder="e.g., 4 years" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Intake Period *</label>
                  <input type="text" placeholder="e.g., September 2026" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Faculty / Department *</label>
                <input type="text" placeholder="e.g., Faculty of Computing" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Admission Requirements *</label>
                <textarea rows={4} placeholder="List the admission requirements..." className={`${inputCls} resize-none`} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Program Description *</label>
                <textarea rows={5} placeholder="Provide a detailed description of the program..." className={`${inputCls} resize-none`} />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-2">Tuition and Fees</h2>
              <div
                className="glass-card rounded-xl p-4 flex items-start gap-3 text-sm"
                style={{ border: "1px solid rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.05)" }}
              >
                <Info className="w-4 h-4 text-info shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Provide a realistic tuition range. Make sure these values match your official source documentation.</span>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Min. Tuition Fee *</label>
                  <input type="number" placeholder="25000" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Max. Tuition Fee *</label>
                  <input type="number" placeholder="50000" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Currency *</label>
                  <select className={inputCls}>
                    {["MYR", "USD", "EUR", "GBP", "SGD"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Fee Notes (optional)</label>
                <textarea rows={3} placeholder="Any additional fee information, scholarships, or discounts..." className={`${inputCls} resize-none`} />
              </div>
            </div>
          )}

          {/* Step 4 */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold mb-1">Official Source Links</h2>
                <p className="text-sm text-muted-foreground">At least one official source is required for verification.</p>
              </div>
              <div
                className="glass-card rounded-xl p-4 flex items-start gap-3 text-sm"
                style={{ border: "1px solid rgba(124,58,237,0.2)", background: "rgba(124,58,237,0.05)" }}
              >
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Provide direct links to official UTM pages for faster admin verification. All data is verified before publication.</span>
              </div>
              <div className="space-y-4">
                {sources.map((_, index) => (
                  <div key={index} className="glass-card rounded-xl p-5 space-y-4 shadow-premium">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">Source Link {index + 1}</h4>
                      {sources.length > 1 && (
                        <button onClick={() => removeSource(index)} className="text-destructive hover:text-destructive/80 p-1 rounded-lg hover:bg-destructive/10 transition-all">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <input type="url" placeholder="https://www.utm.my/programmes/..." className={inputCls} />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="e.g., Official tuition page" className={inputCls} />
                      <select className={inputCls}>
                        {["Programme Overview", "Tuition", "Admission", "Intake", "Scholarships"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addSource}
                  className="flex items-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  style={{ border: "2px dashed var(--glass-border)" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--glass-border)"}
                >
                  <Plus className="w-4 h-4" />
                  Add Another Source Link
                </button>
              </div>
            </div>
          )}

          {/* Step 5 */}
          {currentStep === 5 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-2">Review Your Submission</h2>
              <div
                className="glass-card rounded-xl p-5"
                style={{ border: "1px solid rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.05)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-success">Data Completeness</h3>
                  <span className="text-2xl font-bold text-success">95%</span>
                </div>
                <div className="w-full rounded-full h-2 bg-glass-border">
                  <div className="h-2 rounded-full bg-success" style={{ width: "95%" }} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Excellent! Your submission is nearly complete.</p>
              </div>

              <div className="glass-card rounded-xl p-5 space-y-4 shadow-premium">
                {[
                  { label: "University", value: "Universiti Teknologi Malaysia" },
                  { label: "Program Name", value: "Bachelor of Computer Science (Software Engineering)" },
                  { label: "Degree Level", value: "Bachelor" },
                  { label: "Duration", value: "4 years" },
                  { label: "Tuition Range", value: "MYR 25,000 – MYR 38,000 per year" },
                  { label: "Official Sources", value: "2 source links added" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between py-2 border-b border-glass-border last:border-0">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-foreground text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>

              <div
                className="glass-card rounded-xl p-4 flex items-start gap-3 text-sm"
                style={{ border: "1px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}
              >
                <Info className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                <span className="text-muted-foreground">After submission, an admin will review your program data. You'll be notified once it's approved or if changes are needed.</span>
              </div>
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-glass-border">
            <div>
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1) as Step)}
                  className="px-5 py-2.5 text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => toast.success("Draft saved!")}
                className="px-5 py-2.5 glass-card border border-glass-border rounded-xl text-sm font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all"
              >
                Save Draft
              </button>
              {currentStep < 5 ? (
                <button
                  onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1) as Step)}
                  className="flex items-center gap-2 px-6 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all text-sm"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-6 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all text-sm"
                >
                  Submit for Review <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

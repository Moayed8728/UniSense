import { RepLayout } from "../../components/RepLayout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { submitCatalogueImport } from "../../lib/prototypeStore";
import {
  Upload,
  FileJson,
  FileSpreadsheet,
  Link2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Info,
  CloudUpload,
  X,
  Loader2,
} from "lucide-react";

type ImportMethod = "json" | "csv" | "url" | null;
type ImportStep = "method" | "upload" | "validate" | "submit";

export default function ProgramImports() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<ImportMethod>(null);
  const [step, setStep] = useState<ImportStep>("method");
  const [url, setUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleMethodSelect = (m: ImportMethod) => {
    setMethod(m);
    setStep("upload");
  };

  const handleFileUpload = () => {
    setUploadedFile("utm_programs_2026.csv");
    toast.success("File uploaded successfully!");
  };

  const handleValidate = () => {
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setValidated(true);
      setStep("validate");
    }, 2000);
  };

  const handleSubmit = () => {
    if (!method) return;
    submitCatalogueImport({ method, source: method === "url" ? url : uploadedFile ?? "uploaded-file" });
    toast.success("Programs submitted for admin review!");
    navigate("/rep/history");
  };

  const validationResults = [
    { field: "Program Name", status: "ok", count: 147 },
    { field: "Degree Level", status: "ok", count: 147 },
    { field: "Duration", status: "ok", count: 145 },
    { field: "Tuition Fee", status: "warning", count: 12, message: "12 records missing tuition data" },
    { field: "Faculty", status: "ok", count: 147 },
    { field: "Entry Requirements", status: "error", count: 3, message: "3 records have invalid format" },
  ];

  return (
    <RepLayout>
      <div className="space-y-8 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Program Catalogue Sources</h1>
          <p className="text-muted-foreground">Manage official catalogue URLs and structured program datasets for your assigned university.</p>
        </div>

        {/* Info notice */}
        <div
          className="glass-card rounded-2xl p-5 flex items-start gap-4"
          style={{ border: "1px solid rgba(6,182,212,0.2)", background: "rgba(6,182,212,0.05)" }}
        >
          <Info className="w-5 h-5 text-info shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Source Review Flow: </span>
            Upload → Validate → Submit for Admin Review → Approval → Programs Published.
            All source-derived programs are verified before becoming visible to students.
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-4">
          {[
            { id: "method", label: "Select Method" },
            { id: "upload", label: "Upload Data" },
            { id: "validate", label: "Validation" },
            { id: "submit", label: "Review & Submit" },
          ].map((s, idx) => {
            const steps = ["method", "upload", "validate", "submit"];
            const currentIdx = steps.indexOf(step);
            const sIdx = steps.indexOf(s.id);
            const isCompleted = sIdx < currentIdx;
            const isActive = s.id === step;
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className={`flex items-center gap-2.5 text-sm font-medium ${isActive ? "text-primary" : isCompleted ? "text-success" : "text-muted-foreground"}`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${isActive ? "bg-primary text-white" : isCompleted ? "bg-success/20 text-success" : "glass-card text-muted-foreground"}`}>
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span className="hidden sm:block">{s.label}</span>
                </div>
                {idx < 3 && <div className={`flex-1 h-0.5 mx-3 ${isCompleted ? "bg-success/30" : "bg-glass-border"}`} />}
              </div>
            );
          })}
        </div>

        {/* Step: Method Selection */}
        {step === "method" && (
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                id: "json" as const,
                icon: FileJson,
                title: "JSON File",
                desc: "Upload a structured JSON file with program data. Best for developers.",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
                glow: "bg-accent-blue",
              },
              {
                id: "csv" as const,
                icon: FileSpreadsheet,
                title: "CSV File",
                desc: "Upload a CSV spreadsheet exported from your university system.",
                color: "text-success",
                bg: "bg-success/10",
                glow: "bg-success",
              },
              {
                id: "url" as const,
                icon: Link2,
                title: "Catalogue URL",
                desc: "Submit your official programme catalogue URL for system crawling.",
                color: "text-primary",
                bg: "bg-primary/10",
                glow: "bg-primary",
              },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleMethodSelect(opt.id)}
                className="group text-left glass-card rounded-2xl p-6 shadow-premium glass-card-hover border-glow transition-all"
              >
                <div className="relative mb-5 w-fit">
                  <div className={`absolute inset-0 ${opt.glow} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative ${opt.bg} p-4 rounded-2xl`}>
                    <opt.icon className={`w-7 h-7 ${opt.color}`} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{opt.desc}</p>
                <div className={`mt-5 flex items-center gap-2 text-sm font-semibold ${opt.color} group-hover:gap-3 transition-all`}>
                  Choose this method
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step: Upload */}
        {step === "upload" && (
          <div className="glass-card rounded-2xl p-8 shadow-premium">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {method === "json" ? "Upload JSON File" : method === "csv" ? "Upload CSV File" : "Submit Catalogue URL"}
              </h2>
              <button onClick={() => { setStep("method"); setMethod(null); }} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {method === "url" ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-foreground">Official Catalogue URL</label>
                  <div className="relative">
                    <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://www.utm.my/programmes/"
                      className="w-full pl-12 pr-4 py-3.5 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                <div
                  className="rounded-2xl p-4 text-sm text-muted-foreground"
                  style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.15)" }}
                >
                  <p><span className="font-semibold text-foreground">Note:</span> Our system will crawl the provided URL and extract programme information. This may take a few minutes.</p>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${isDragging ? "border-primary bg-primary/5" : "border-glass-border hover:border-primary/40"}`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={() => { setIsDragging(false); handleFileUpload(); }}
                onClick={handleFileUpload}
              >
                {uploadedFile ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-success/10 p-4 rounded-2xl">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{uploadedFile}</p>
                      <p className="text-sm text-muted-foreground mt-1">147 programs detected • 2.4 MB</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }} className="text-xs text-destructive hover:underline">Remove file</button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <CloudUpload className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Drag & drop your {method?.toUpperCase()} file here</p>
                      <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Max file size: 50MB</p>
                  </div>
                )}
              </div>
            )}

            {method === "csv" && uploadedFile && (
              <div className="mt-5 glass-card rounded-2xl p-5">
                <h4 className="font-semibold mb-3 text-sm">Column Mapping Preview</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { csv: "programme_name", mapped: "Program Name" },
                    { csv: "degree_level", mapped: "Degree Level" },
                    { csv: "duration_years", mapped: "Duration" },
                    { csv: "tuition_myr", mapped: "Tuition Fee" },
                    { csv: "faculty", mapped: "Faculty" },
                    { csv: "entry_req", mapped: "Entry Requirements" },
                  ].map(({ csv, mapped }) => (
                    <div key={csv} className="flex items-center gap-2 text-xs">
                      <code className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">{csv}</code>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-foreground font-medium">{mapped}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-glass-border">
              <button onClick={() => { setStep("method"); setMethod(null); }} className="text-sm text-muted-foreground hover:text-foreground font-medium">
                ← Back
              </button>
              <button
                onClick={handleValidate}
                disabled={(!uploadedFile && method !== "url") || (method === "url" && !url)}
                className="flex items-center gap-2.5 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {isValidating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    Validate Data
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step: Validation results */}
        {step === "validate" && (
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">Validation Results</h2>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                  <AlertCircle className="w-4 h-4 text-warning" />
                  <span className="text-sm text-warning font-semibold">2 issues found</span>
                </div>
              </div>
              <div className="space-y-3">
                {validationResults.map(({ field, status, count, message }) => (
                  <div key={field} className="flex items-center gap-4 py-3 border-b border-glass-border last:border-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${status === "ok" ? "bg-success/10" : status === "warning" ? "bg-warning/10" : "bg-destructive/10"}`}>
                      {status === "ok" && <CheckCircle2 className="w-4 h-4 text-success" />}
                      {status === "warning" && <AlertCircle className="w-4 h-4 text-warning" />}
                      {status === "error" && <X className="w-4 h-4 text-destructive" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{field}</p>
                      {message && <p className="text-xs text-muted-foreground mt-0.5">{message}</p>}
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold ${status === "ok" ? "text-success" : status === "warning" ? "text-warning" : "text-destructive"}`}>
                        {count}/{count} valid
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {[
                { label: "Total Programs", value: "147", color: "text-foreground" },
                { label: "Valid Records", value: "144", color: "text-success" },
                { label: "Issues to Review", value: "15", color: "text-warning" },
              ].map(({ label, value, color }) => (
                <div key={label} className="glass-card rounded-2xl p-5 text-center shadow-premium">
                  <div className={`text-3xl font-bold mb-1 ${color}`}>{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button onClick={() => setStep("upload")} className="text-sm text-muted-foreground hover:text-foreground font-medium">
                ← Back to Upload
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2.5 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all"
              >
                Submit for Admin Review
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </RepLayout>
  );
}

import { RepLayout } from "../../components/RepLayout";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { submitCatalogueImport } from "../../lib/prototypeStore";
import { coverageCategories } from "../../data/programCoverage";
import {
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
  Layers3,
  Search,
  ChevronDown,
  GraduationCap,
  Save,
  SlidersHorizontal,
  Wand2,
} from "lucide-react";

type ImportMethod = "json" | "csv" | "url" | "coverage" | null;
type ImportStep = "method" | "upload" | "validate" | "submit";
type CoverageDetail = {
  levels: string[];
  feeMin: string;
  feeMax: string;
  currency: string;
  notes: string;
};

const degreeLevels = ["Bachelor", "Master", "PhD"];
const currencies = ["MYR", "USD", "SGD", "EUR", "GBP"];
const emptyDetail = (): CoverageDetail => ({ levels: ["Bachelor"], feeMin: "", feeMax: "", currency: "MYR", notes: "" });

export default function ProgramImports() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<ImportMethod>(null);
  const [step, setStep] = useState<ImportStep>("method");
  const [url, setUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validated, setValidated] = useState(false);
  const [majorSearch, setMajorSearch] = useState("");
  const [openFaculties, setOpenFaculties] = useState<string[]>(coverageCategories.slice(0, 8).map((category) => category.code));
  const [selectedParentFilter, setSelectedParentFilter] = useState("all");
  const [selectedMajorIds, setSelectedMajorIds] = useState<string[]>([]);
  const [coverageDetails, setCoverageDetails] = useState<Record<string, CoverageDetail>>({});
  const [bulkCoverageDetail, setBulkCoverageDetail] = useState<CoverageDetail>(emptyDetail);
  const [overrideSearch, setOverrideSearch] = useState("");

  const handleMethodSelect = (m: ImportMethod) => {
    setMethod(m);
    setStep("upload");
  };

  const handleFileUpload = () => {
    setUploadedFile("utm_programs_2026.csv");
    toast.success("File uploaded successfully!");
  };

  const handleValidate = () => {
    if (method === "coverage") {
      if (selectedMajorIds.length === 0) {
        toast.error("Select at least one major before continuing.");
        return;
      }
      setStep("validate");
      return;
    }

    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setValidated(true);
      setStep("validate");
    }, 2000);
  };

  const handleSubmit = () => {
    if (!method) return;
    if (method === "coverage") {
      const feeError = selectedMajorIds.some((id) => {
        const detail = coverageDetails[id] ?? bulkCoverageDetail;
        return detail.feeMin && detail.feeMax && Number(detail.feeMin) > Number(detail.feeMax);
      });
      const currencyError = selectedMajorIds.some((id) => {
        const detail = coverageDetails[id] ?? bulkCoverageDetail;
        return (detail.feeMin || detail.feeMax) && !detail.currency;
      });
      if (selectedMajorIds.length === 0) {
        toast.error("At least one major must be selected.");
        return;
      }
      if (feeError) {
        toast.error("Fee minimum cannot be greater than fee maximum.");
        return;
      }
      if (currencyError) {
        toast.error("Currency is required when a fee range is entered.");
        return;
      }
      submitCatalogueImport({
        method,
        source: `${selectedMajorIds.length} majors linked to Universiti Teknologi Malaysia coverage`,
        programCount: selectedMajorIds.length,
        issues: 0,
        completeness: 100,
      });
      toast.success("Program coverage submitted for Admin review!");
      navigate("/rep/history");
      return;
    }

    submitCatalogueImport({ method, source: method === "url" ? url : uploadedFile ?? "uploaded-file" });
    toast.success("Official program source submitted for Admin review!");
    navigate("/rep/history");
  };

  const selectedMajors = useMemo(() => coverageCategories.flatMap((category) =>
    category.majors
      .filter((major) => selectedMajorIds.includes(major.id))
      .map((major) => ({
        id: major.id,
        code: major.code,
        faculty: category.title,
        facultyCode: category.code,
        parentTitle: category.parentTitle,
        major: major.title,
      }))
  ), [selectedMajorIds]);

  const selectedFaculties = [...new Set(selectedMajors.map((item) => item.faculty))];
  const parentGroups = useMemo(() => {
    const groups = new Map<string, { code: string; title: string; categoryCount: number; majorCount: number }>();
    coverageCategories.forEach((category) => {
      const group = groups.get(category.parentCode) ?? {
        code: category.parentCode,
        title: category.parentTitle,
        categoryCount: 0,
        majorCount: 0,
      };
      group.categoryCount += 1;
      group.majorCount += category.majors.length;
      groups.set(category.parentCode, group);
    });
    return [...groups.values()];
  }, []);
  const totalMajorCount = useMemo(() => coverageCategories.reduce((sum, category) => sum + category.majors.length, 0), []);
  const filteredCoverageCategories = useMemo(() => {
    const query = majorSearch.toLowerCase();
    return coverageCategories
      .filter((category) => selectedParentFilter === "all" || category.parentCode === selectedParentFilter)
      .map((category) => ({
        ...category,
        visibleMajors: category.majors.filter((major) =>
          major.title.toLowerCase().includes(query) ||
          major.code.includes(query) ||
          category.title.toLowerCase().includes(query) ||
          category.parentTitle.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.visibleMajors.length > 0);
  }, [majorSearch, selectedParentFilter]);
  const visibleOverrideMajors = useMemo(() => {
    const query = overrideSearch.toLowerCase();
    return selectedMajors
      .filter((item) =>
        item.major.toLowerCase().includes(query) ||
        item.code.includes(query) ||
        item.faculty.toLowerCase().includes(query) ||
        item.parentTitle.toLowerCase().includes(query)
      )
      .slice(0, 50);
  }, [overrideSearch, selectedMajors]);
  const selectedOverrideCount = selectedMajorIds.filter((id) => Boolean(coverageDetails[id])).length;

  const toggleMajor = (id: string) => {
    setSelectedMajorIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const toggleFacultySelection = (categoryCode: string) => {
    const category = coverageCategories.find((item) => item.code === categoryCode);
    if (!category) return;
    const ids = category.majors.map((major) => major.id);
    const allSelected = ids.every((id) => selectedMajorIds.includes(id));
    setSelectedMajorIds((current) => allSelected ? current.filter((id) => !ids.includes(id)) : [...new Set([...current, ...ids])]);
  };

  const toggleParentSelection = (parentCode: string) => {
    const ids = coverageCategories
      .filter((category) => category.parentCode === parentCode)
      .flatMap((category) => category.majors.map((major) => major.id));
    const allSelected = ids.every((id) => selectedMajorIds.includes(id));
    setSelectedMajorIds((current) => allSelected ? current.filter((id) => !ids.includes(id)) : [...new Set([...current, ...ids])]);
  };

  const clearCoverageSelection = () => {
    setSelectedMajorIds([]);
    setCoverageDetails({});
    toast.info("Program coverage selection cleared.");
  };

  const effectiveCoverageDetail = (id: string) => coverageDetails[id] ?? bulkCoverageDetail;

  const updateBulkCoverageDetail = (updates: Partial<CoverageDetail>) => {
    setBulkCoverageDetail((current) => ({ ...current, ...updates }));
  };

  const updateCoverageDetail = (id: string, updates: Partial<CoverageDetail>) => {
    setCoverageDetails((current) => ({ ...current, [id]: { ...effectiveCoverageDetail(id), ...updates } }));
  };

  const applyBulkToSelected = () => {
    setCoverageDetails((current) => selectedMajorIds.reduce((next, id) => ({ ...next, [id]: { ...bulkCoverageDetail } }), current));
    toast.success(`Applied defaults to ${selectedMajorIds.length} selected majors.`);
  };

  const toggleDegreeLevel = (id: string, level: string) => {
    const detail = effectiveCoverageDetail(id);
    const levels = detail.levels.includes(level)
      ? detail.levels.filter((item) => item !== level)
      : [...detail.levels, level];
    updateCoverageDetail(id, { levels: levels.length ? levels : [level] });
  };

  const toggleBulkDegreeLevel = (level: string) => {
    const levels = bulkCoverageDetail.levels.includes(level)
      ? bulkCoverageDetail.levels.filter((item) => item !== level)
      : [...bulkCoverageDetail.levels, level];
    updateBulkCoverageDetail({ levels: levels.length ? levels : [level] });
  };

  const saveDraft = () => {
    toast.success("Draft saved for Universiti Teknologi Malaysia coverage.");
  };

  const canContinueCoverageDetails = selectedMajorIds.every((id) => {
    const detail = effectiveCoverageDetail(id);
    const feeOrderOk = !detail.feeMin || !detail.feeMax || Number(detail.feeMin) <= Number(detail.feeMax);
    const currencyOk = !(detail.feeMin || detail.feeMax) || Boolean(detail.currency);
    return detail.levels.length > 0 && feeOrderOk && currencyOk;
  });

  const validationResults = [
    { field: "Program Name", status: "ok", count: 147 },
    { field: "Degree Level", status: "ok", count: 147 },
    { field: "Duration", status: "ok", count: 145 },
    { field: "Tuition Fee", status: "warning", count: 12, message: "12 records missing tuition data" },
    { field: "Faculty", status: "ok", count: 147 },
    { field: "Entry Requirements", status: "error", count: 3, message: "3 records have invalid format" },
  ];

  const stepLabels = method === "coverage"
    ? [
        { id: "method", label: "Select Method" },
        { id: "upload", label: "Faculty & Majors" },
        { id: "validate", label: "Degree & Fees" },
        { id: "submit", label: "Review & Submit" },
      ]
    : [
        { id: "method", label: "Select Method" },
        { id: "upload", label: "Upload Data" },
        { id: "validate", label: "Validation" },
        { id: "submit", label: "Review & Submit" },
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
            Add source → Validate → Submit for Admin Review → Approval → Programs Published.
            Admin verification is required before students can view this data.
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-4">
          {stepLabels.map((s, idx) => {
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
          <div className="grid md:grid-cols-4 gap-5">
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
              {
                id: "coverage" as const,
                icon: Layers3,
                title: "Program Coverage",
                desc: "Select faculties and major fields offered by your assigned university.",
                color: "text-accent-cyan",
                bg: "bg-accent-cyan/10",
                glow: "bg-accent-cyan",
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
                {method === "json" ? "Upload JSON File" : method === "csv" ? "Upload CSV File" : method === "coverage" ? "Faculty & Major Selection" : "Submit Catalogue URL"}
              </h2>
              <button onClick={() => { setStep("method"); setMethod(null); }} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {method === "coverage" ? (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-4 gap-3">
                  {[
                    { label: "Disciplines", value: parentGroups.length },
                    { label: "Categories", value: coverageCategories.length },
                    { label: "Major Fields", value: totalMajorCount },
                    { label: "Selected", value: selectedMajorIds.length },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass-card rounded-xl p-4 border border-glass-border">
                      <p className="text-xs text-muted-foreground mb-1">{label}</p>
                      <p className="text-xl font-bold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <div className="relative flex-1 min-w-64">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={majorSearch}
                      onChange={(e) => setMajorSearch(e.target.value)}
                      placeholder="Search majors..."
                      className="w-full pl-11 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <select
                    value={selectedParentFilter}
                    onChange={(event) => setSelectedParentFilter(event.target.value)}
                    className="px-4 py-3 glass-card border border-input-border rounded-xl text-sm font-semibold text-foreground focus:outline-none focus:border-primary/50"
                    aria-label="Filter by discipline"
                  >
                    <option value="all">All disciplines</option>
                    {parentGroups.map((group) => (
                      <option key={group.code} value={group.code}>{group.code} {group.title}</option>
                    ))}
                  </select>
                  <div className="px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold text-sm">
                    {selectedMajorIds.length} majors selected
                  </div>
                  <button
                    onClick={clearCoverageSelection}
                    disabled={selectedMajorIds.length === 0}
                    className="px-4 py-3 rounded-xl glass-card border border-glass-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-primary/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Clear
                  </button>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-glass-border">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-primary" />
                      <p className="text-sm font-semibold">Browse by discipline</p>
                    </div>
                    {selectedParentFilter !== "all" && (
                      <button onClick={() => toggleParentSelection(selectedParentFilter)} className="text-xs font-semibold text-primary hover:text-primary-hover">
                        Select all in discipline
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                    {parentGroups.map((group) => {
                      const groupIds = coverageCategories
                        .filter((category) => category.parentCode === group.code)
                        .flatMap((category) => category.majors.map((major) => major.id));
                      const selectedCount = groupIds.filter((id) => selectedMajorIds.includes(id)).length;
                      const active = selectedParentFilter === group.code;
                      return (
                        <button
                          key={group.code}
                          onClick={() => setSelectedParentFilter(active ? "all" : group.code)}
                          className={`text-left rounded-xl border p-3 transition-all ${active ? "bg-primary/15 border-primary/40" : "glass-card border-glass-border hover:border-primary/30 hover:bg-primary/5"}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-primary">{group.code}</span>
                            <span className="text-xs text-muted-foreground">{selectedCount}/{group.majorCount}</span>
                          </div>
                          <p className="text-xs font-semibold text-foreground mt-1 line-clamp-2">{group.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedMajors.length > 0 && (
                  <div className="rounded-2xl p-4" style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm font-semibold text-foreground">Selected majors summary</p>
                      <p className="text-xs text-muted-foreground">{selectedFaculties.length} categories</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMajors.slice(0, 12).map((item) => (
                        <span key={item.id} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-semibold">
                          <span>{item.code}</span>
                          <span className="text-foreground">{item.major}</span>
                        </span>
                      ))}
                      {selectedMajors.length > 12 && (
                        <span className="px-3 py-1.5 rounded-xl glass-card border border-glass-border text-xs font-semibold text-muted-foreground">
                          +{selectedMajors.length - 12} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {filteredCoverageCategories.map((category) => {
                    const query = majorSearch.toLowerCase();
                    const isOpen = openFaculties.includes(category.code) || Boolean(query);
                    const categoryIds = category.majors.map((major) => major.id);
                    const selectedInCategory = categoryIds.filter((id) => selectedMajorIds.includes(id)).length;
                    return (
                      <div key={category.code} className="glass-card rounded-2xl border border-glass-border overflow-hidden">
                        <div className="flex items-center justify-between gap-4 p-4 border-b border-glass-border">
                          <button
                            onClick={() => setOpenFaculties((current) => current.includes(category.code) ? current.filter((item) => item !== category.code) : [...current, category.code])}
                            className="flex items-center gap-3 text-left font-semibold"
                          >
                            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "" : "-rotate-90"}`} />
                            <span>{category.title}</span>
                            <span className="text-xs text-muted-foreground">{category.code}</span>
                            <span className="text-xs text-muted-foreground">{selectedInCategory}/{category.majors.length}</span>
                          </button>
                          <button onClick={() => toggleFacultySelection(category.code)} className="text-xs font-semibold text-primary hover:text-primary-hover">
                            Select All in Category
                          </button>
                        </div>
                        {isOpen && (
                          <div className="grid sm:grid-cols-2 gap-3 p-4">
                            {category.visibleMajors.map((major) => {
                              return (
                                <label key={major.id} className="flex items-center gap-3 rounded-xl p-3 border border-glass-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedMajorIds.includes(major.id)}
                                    onChange={() => toggleMajor(major.id)}
                                    className="w-4 h-4 accent-primary"
                                  />
                                  <span className="min-w-0">
                                    <span className="block text-sm font-medium text-foreground">{major.title}</span>
                                    <span className="block text-xs text-muted-foreground mt-0.5">{major.code} • {category.parentTitle}</span>
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : method === "url" ? (
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
                disabled={method === "coverage" ? selectedMajorIds.length === 0 : ((!uploadedFile && method !== "url") || (method === "url" && !url))}
                className="flex items-center gap-2.5 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {isValidating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Validating...
                  </>
                ) : (
                  <>
                    {method === "coverage" ? "Continue" : "Validate Data"}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step: Validation results */}
        {step === "validate" && (
          method === "coverage" ? (
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-xl font-semibold">Degree Levels and Fee Ranges</h2>
                  <p className="text-sm text-muted-foreground mt-1">All coverage remains linked to Universiti Teknologi Malaysia until Admin approval.</p>
                </div>
                <button onClick={saveDraft} className="flex items-center gap-2 px-4 py-2 glass-card border border-glass-border rounded-xl text-sm font-semibold hover:bg-primary/5">
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl p-5 border border-primary/20" style={{ background: "rgba(124,58,237,0.07)" }}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <Wand2 className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Coverage defaults</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">These degree levels and fees apply to every selected major unless you add an exception below.</p>
                    </div>
                    <button onClick={applyBulkToSelected} className="px-4 py-2 rounded-xl bg-primary/15 text-primary text-xs font-semibold hover:bg-primary/20 transition-all">
                      Apply to all selected
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-5 gap-3">
                    <div className="lg:col-span-2">
                      <label className="block text-xs font-semibold mb-2 text-muted-foreground">Degree levels offered</label>
                      <div className="flex flex-wrap gap-2">
                        {degreeLevels.map((level) => (
                          <button
                            key={level}
                            onClick={() => toggleBulkDegreeLevel(level)}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${bulkCoverageDetail.levels.includes(level) ? "bg-primary/20 text-primary border-primary/30" : "glass-card border-glass-border text-muted-foreground"}`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-muted-foreground">Fee minimum</label>
                      <input type="number" value={bulkCoverageDetail.feeMin} onChange={(e) => updateBulkCoverageDetail({ feeMin: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-muted-foreground">Fee maximum</label>
                      <input type="number" value={bulkCoverageDetail.feeMax} onChange={(e) => updateBulkCoverageDetail({ feeMax: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2 text-muted-foreground">Currency</label>
                      <select value={bulkCoverageDetail.currency} onChange={(e) => updateBulkCoverageDetail({ currency: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50">
                        {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-xs font-semibold mb-2 text-muted-foreground">Default notes</label>
                    <textarea rows={2} value={bulkCoverageDetail.notes} onChange={(e) => updateBulkCoverageDetail({ notes: e.target.value })} placeholder="Example: indicative annual tuition, varies by residency or intake..." className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 resize-none placeholder:text-muted-foreground/50" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Majors using defaults</p>
                    <p className="text-xl font-bold text-success">{selectedMajorIds.length - selectedOverrideCount}</p>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Exceptions</p>
                    <p className="text-xl font-bold text-warning">{selectedOverrideCount}</p>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Selected categories</p>
                    <p className="text-xl font-bold text-primary">{selectedFaculties.length}</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5 border border-glass-border">
                  <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                    <div>
                      <h3 className="font-semibold">Optional per-major exceptions</h3>
                      <p className="text-sm text-muted-foreground mt-1">Search and edit only the majors with different fees or degree levels.</p>
                    </div>
                    <div className="relative min-w-64">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        value={overrideSearch}
                        onChange={(e) => setOverrideSearch(e.target.value)}
                        placeholder="Find selected major..."
                        className="w-full pl-10 pr-4 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 max-h-[32rem] overflow-y-auto pr-1">
                    {visibleOverrideMajors.map(({ id, code, faculty, major }) => {
                      const detail = effectiveCoverageDetail(id);
                      const hasOverride = Boolean(coverageDetails[id]);
                      const feeInvalid = detail.feeMin && detail.feeMax && Number(detail.feeMin) > Number(detail.feeMax);
                      return (
                        <div key={id} className="rounded-2xl p-4 border border-glass-border glass-card">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h4 className="font-semibold text-sm text-foreground">{major}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{code} • {faculty}</p>
                            </div>
                            <button
                              onClick={() => hasOverride
                                ? setCoverageDetails((current) => {
                                    const next = { ...current };
                                    delete next[id];
                                    return next;
                                  })
                                : updateCoverageDetail(id, {})}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${hasOverride ? "bg-warning/10 text-warning" : "bg-primary/10 text-primary"}`}
                            >
                              {hasOverride ? "Use defaults" : "Customize"}
                            </button>
                          </div>
                          {hasOverride && (
                            <>
                              {feeInvalid && <p className="text-xs font-semibold text-destructive mb-3">Fee minimum cannot be greater than fee maximum.</p>}
                              <div className="grid lg:grid-cols-5 gap-3">
                                <div className="lg:col-span-2">
                                  <label className="block text-xs font-semibold mb-2 text-muted-foreground">Degree level</label>
                                  <div className="flex flex-wrap gap-2">
                                    {degreeLevels.map((level) => (
                                      <button
                                        key={level}
                                        onClick={() => toggleDegreeLevel(id, level)}
                                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${detail.levels.includes(level) ? "bg-primary/20 text-primary border-primary/30" : "glass-card border-glass-border text-muted-foreground"}`}
                                      >
                                        {level}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold mb-2 text-muted-foreground">Fee minimum</label>
                                  <input type="number" value={detail.feeMin} onChange={(e) => updateCoverageDetail(id, { feeMin: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50" />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold mb-2 text-muted-foreground">Fee maximum</label>
                                  <input type="number" value={detail.feeMax} onChange={(e) => updateCoverageDetail(id, { feeMax: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50" />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold mb-2 text-muted-foreground">Currency</label>
                                  <select value={detail.currency} onChange={(e) => updateCoverageDetail(id, { currency: e.target.value })} className="w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50">
                                    {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
                                  </select>
                                </div>
                              </div>
                              <textarea rows={2} value={detail.notes} onChange={(e) => updateCoverageDetail(id, { notes: e.target.value })} placeholder="Optional exception note..." className="mt-3 w-full px-3 py-2.5 glass-card border border-input-border rounded-xl focus:outline-none focus:border-primary/50 resize-none placeholder:text-muted-foreground/50" />
                            </>
                          )}
                        </div>
                      );
                    })}
                    {selectedMajors.length > visibleOverrideMajors.length && (
                      <p className="text-xs text-muted-foreground text-center py-2">Showing 50 matching selected majors. Search to narrow the exception list.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={() => setStep("upload")} className="text-sm text-muted-foreground hover:text-foreground font-medium">← Back</button>
              <button
                onClick={() => canContinueCoverageDetails ? setStep("submit") : toast.error("Check fee ranges and currency before continuing.")}
                className="flex items-center gap-2.5 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          ) : (
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
          )
        )}

        {step === "submit" && method === "coverage" && (
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-6 shadow-premium">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent-cyan/10 p-3 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Review & Submit</h2>
                  <p className="text-sm text-muted-foreground">Selected method: <span className="text-foreground font-semibold">Program Coverage</span></p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Assigned university</p>
                  <p className="text-sm font-semibold">Universiti Teknologi Malaysia</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Selected faculties</p>
                  <p className="text-sm font-semibold">{selectedFaculties.length}</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Selected majors</p>
                  <p className="text-sm font-semibold">{selectedMajors.length}</p>
                </div>
              </div>
              <div className="space-y-3">
                {selectedFaculties.map((faculty) => (
                  <div key={faculty} className="glass-card rounded-2xl p-4 border border-glass-border">
                    <h3 className="font-semibold mb-3">{faculty}</h3>
                    <div className="space-y-2">
                      {selectedMajors.filter((item) => item.faculty === faculty).map(({ id, major }) => {
                        const detail = effectiveCoverageDetail(id);
                        const fee = detail.feeMin || detail.feeMax ? `${detail.currency} ${detail.feeMin || "0"} - ${detail.feeMax || "Open"}` : "Fee range not provided";
                        return (
                          <div key={id} className="flex items-start justify-between gap-4 py-2 border-t border-glass-border first:border-t-0">
                            <div>
                              <p className="text-sm font-medium">{major}</p>
                              <p className="text-xs text-muted-foreground mt-1">{detail.levels.join(", ")} • {fee}</p>
                              {detail.notes && <p className="text-xs text-muted-foreground mt-1">{detail.notes}</p>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <button onClick={saveDraft} className="flex items-center gap-2 px-4 py-2.5 glass-card border border-glass-border rounded-xl text-sm font-semibold hover:bg-primary/5">
                <Save className="w-4 h-4" />
                Save Draft
              </button>
              <div className="flex items-center gap-3">
                <button onClick={() => setStep("validate")} className="px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground font-medium">Back</button>
                <button onClick={handleSubmit} className="flex items-center gap-2.5 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all">
                  Submit for Admin Review
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </RepLayout>
  );
}

import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { useState } from "react";
import { toast } from "sonner";
import { 
  Search,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

export default function SourceVerification() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sourceStatuses, setSourceStatuses] = useState<Record<string, "verified" | "invalid" | "pending">>({});

  const sources = [
    {
      id: "SRC-001",
      program: "Bachelor of Business Administration",
      university: "Harvard University",
      url: "https://harvard.edu/admissions/tuition/undergraduate",
      category: "Tuition",
      status: "pending" as const,
      submittedBy: "John Smith",
      submissionId: "SUB-002",
    },
    {
      id: "SRC-002",
      program: "Master of Data Analytics",
      university: "MIT",
      url: "https://mit.edu/programs/data-analytics",
      category: "Program Overview",
      status: "pending" as const,
      submittedBy: "Sarah Johnson",
      submissionId: "SUB-006",
    },
    {
      id: "SRC-003",
      program: "PhD in Quantum Computing",
      university: "Stanford University",
      url: "https://stanford.edu/programs/quantum-computing",
      category: "Program Overview",
      status: "verified" as const,
      submittedBy: "David Chen",
      submissionId: "SUB-007",
    },
    {
      id: "SRC-004",
      program: "Bachelor of Computer Engineering",
      university: "UC Berkeley",
      url: "https://berkeley.edu/tuition",
      category: "Tuition",
      status: "invalid" as const,
      submittedBy: "Emily Brown",
      submissionId: "SUB-008",
    },
  ];

  const filteredSources = sources.filter(source =>
    source.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const markSource = (id: string, status: "verified" | "invalid") => {
    setSourceStatuses(prev => ({ ...prev, [id]: status }));
    toast.success(`Source marked as ${status}`);
  };

  const getSourceStatus = (source: typeof sources[0]) => {
    return sourceStatuses[source.id] || source.status;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Source Verification</h1>
          <p className="text-gray-600">Verify official source links from program submissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-50 p-3 rounded-xl">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Verification</p>
                <p className="text-2xl font-bold text-gray-900">{sources.filter(s => getSourceStatus(s) === "pending").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Verified</p>
                <p className="text-2xl font-bold text-gray-900">{sources.filter(s => getSourceStatus(s) === "verified").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-3 rounded-xl">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Invalid</p>
                <p className="text-2xl font-bold text-gray-900">{sources.filter(s => getSourceStatus(s) === "invalid").length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-900 mb-2">Verification Checklist</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Is it an official university domain?</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Does it match the submitted program?</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Does it include relevant details?</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Is the information up to date?</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Source List */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Source Links</h2>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {filteredSources.map((source) => (
                <div 
                  key={source.id}
                  className="border border-gray-200 rounded-xl p-6 hover:border-purple-200 hover:bg-purple-50/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{source.program}</h3>
                        <StatusBadge status={getSourceStatus(source)} />
                      </div>
                      <p className="text-sm text-gray-600">{source.university}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>Category: {source.category}</span>
                        <span>•</span>
                        <span>Submitted by: {source.submittedBy}</span>
                        <span>•</span>
                        <span>Submission ID: {source.submissionId}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-700 break-all flex-1 mr-4">{source.url}</p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap"
                    >
                      Open Source
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => markSource(source.id, "verified")}
                      disabled={getSourceStatus(source) === "verified"}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                        getSourceStatus(source) === "verified"
                          ? "bg-emerald-100 text-emerald-700 cursor-not-allowed"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      {getSourceStatus(source) === "verified" ? "Verified" : "Mark as Verified"}
                    </button>
                    <button
                      onClick={() => markSource(source.id, "invalid")}
                      disabled={getSourceStatus(source) === "invalid"}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                        getSourceStatus(source) === "invalid"
                          ? "bg-red-100 text-red-700 cursor-not-allowed"
                          : "bg-red-50 text-red-700 hover:bg-red-100"
                      }`}
                    >
                      <XCircle className="w-5 h-5" />
                      {getSourceStatus(source) === "invalid" ? "Marked Invalid" : "Mark as Invalid"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

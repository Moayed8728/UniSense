import { AdminLayout } from "../../components/AdminLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { Link, useParams, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "sonner";
import { 
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Shield
} from "lucide-react";

export default function ReviewSubmission() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [sourceStatuses, setSourceStatuses] = useState<Record<number, "verified" | "invalid" | "pending">>({
    0: "pending",
    1: "pending",
  });

  const submission = {
    id: id || "SUB-002",
    program: "Bachelor of Business Administration",
    university: "Harvard University",
    degreeLevel: "Bachelor",
    fieldOfStudy: "Business Administration",
    country: "United States",
    city: "Cambridge",
    duration: "4 years",
    intake: "Fall 2026",
    tuitionMin: 52000,
    tuitionMax: 56000,
    currency: "USD",
    description: "Comprehensive undergraduate business program covering finance, marketing, operations, and strategic management.",
    requirements: "High school diploma, SAT/ACT scores, Essays, Letters of recommendation, Extracurricular activities",
    submittedBy: "John Smith",
    submittedDate: "2026-05-28",
    sources: [
      {
        url: "https://harvard.edu/programs/bba",
        description: "Official BBA program page",
        category: "Program Overview",
      },
      {
        url: "https://harvard.edu/admissions/tuition/undergraduate",
        description: "Undergraduate tuition information",
        category: "Tuition",
      },
    ],
  };

  const markSource = (index: number, status: "verified" | "invalid") => {
    setSourceStatuses(prev => ({ ...prev, [index]: status }));
    toast.success(`Source marked as ${status}`);
  };

  const handleApprove = () => {
    toast.success("Submission approved successfully!");
    navigate("/admin");
  };

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      toast.error("Please provide a rejection reason");
      return;
    }
    toast.success("Submission rejected. Representative will be notified.");
    navigate("/admin");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Review Queue
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Review Submission</h1>
              <p className="text-purple-100">ID: {submission.id} • Submitted by {submission.submittedBy}</p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-xl">
              <p className="text-sm">Submitted: {new Date(submission.submittedDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Program Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Program Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Program Name</h3>
                  <p className="text-lg font-medium text-gray-900">{submission.program}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">University</h3>
                    <p className="text-gray-900">{submission.university}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Degree Level</h3>
                    <p className="text-gray-900">{submission.degreeLevel}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Field of Study</h3>
                    <p className="text-gray-900">{submission.fieldOfStudy}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Duration</h3>
                    <p className="text-gray-900">{submission.duration}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
                    <p className="text-gray-900">{submission.city}, {submission.country}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Intake Period</h3>
                    <p className="text-gray-900">{submission.intake}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Tuition Range</h3>
                  <p className="text-gray-900">
                    {submission.currency} ${submission.tuitionMin.toLocaleString()} - ${submission.tuitionMax.toLocaleString()}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Program Description</h3>
                  <p className="text-gray-700">{submission.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Admission Requirements</h3>
                  <p className="text-gray-700">{submission.requirements}</p>
                </div>
              </div>
            </div>

            {/* Source Verification */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Source Link Verification</h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Verification Checklist</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>✓ Is it an official university domain?</li>
                      <li>✓ Does it match the submitted program?</li>
                      <li>✓ Does it include tuition/admission/intake details?</li>
                      <li>✓ Is it up to date?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {submission.sources.map((source, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900">{source.description}</h3>
                          <StatusBadge status={sourceStatuses[index] || "pending"} />
                        </div>
                        <p className="text-sm text-gray-500">{source.category}</p>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium"
                      >
                        Open Link
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-600 break-all">{source.url}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => markSource(index, "verified")}
                        disabled={sourceStatuses[index] === "verified"}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                          sourceStatuses[index] === "verified"
                            ? "bg-emerald-100 text-emerald-700 cursor-not-allowed"
                            : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        {sourceStatuses[index] === "verified" ? "Verified" : "Mark as Verified"}
                      </button>
                      <button
                        onClick={() => markSource(index, "invalid")}
                        disabled={sourceStatuses[index] === "invalid"}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                          sourceStatuses[index] === "invalid"
                            ? "bg-red-100 text-red-700 cursor-not-allowed"
                            : "bg-red-50 text-red-700 hover:bg-red-100"
                        }`}
                      >
                        <XCircle className="w-4 h-4" />
                        {sourceStatuses[index] === "invalid" ? "Marked Invalid" : "Mark as Invalid"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Decision Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Admin Decision</h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => setShowApproveModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Approve Submission
                </button>

                <button
                  onClick={() => setShowRejectModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                >
                  <XCircle className="w-5 h-5" />
                  Reject Submission
                </button>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-amber-300 text-amber-700 rounded-xl hover:bg-amber-50 transition-colors font-medium">
                  <AlertCircle className="w-5 h-5" />
                  Request Correction
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Audit Trail</h3>
                  <p className="text-sm text-gray-600">This action will be recorded</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Admin:</span>
                  <span className="font-medium text-gray-900">Admin User</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date/Time:</span>
                  <span className="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Action:</span>
                  <span className="font-medium text-gray-900">Under Review</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Submission Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Submitted By</p>
                  <p className="text-gray-900 font-medium">{submission.submittedBy}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Submission Date</p>
                  <p className="text-gray-900 font-medium">
                    {new Date(submission.submittedDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Source Links</p>
                  <p className="text-gray-900 font-medium">{submission.sources.length} provided</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approve Modal */}
        {showApproveModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Approve Submission?</h3>
                  <p className="text-gray-600">
                    This program will be published and visible to students. The representative will be notified.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowApproveModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApprove}
                  className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 font-medium"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reject Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-xl">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reject Submission</h3>
                  <p className="text-gray-600 mb-4">
                    Provide feedback to help the representative improve their submission.
                  </p>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason *</label>
                    <textarea
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      rows={4}
                      placeholder="Explain why this submission is being rejected..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

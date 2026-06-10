import { RepLayout } from "../../components/RepLayout";
import { StatusBadge } from "../../components/StatusBadge";
import { Link, useParams } from "react-router";
import {
  ArrowLeft, 
  Edit, 
  Download, 
  CheckCircle2,
  Clock,
  FileText,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import { downloadTextFile } from "../../lib/prototype";
import { getProgramSubmission } from "../../lib/prototypeStore";

export default function SubmissionDetails() {
  const { id } = useParams();
  const storedSubmission = getProgramSubmission(id);

  if (!storedSubmission) {
    return (
      <RepLayout>
        <div className="glass-card rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-2">Submission not found</h1>
          <Link to="/rep/submissions" className="text-primary">Return to my submissions</Link>
        </div>
      </RepLayout>
    );
  }

  const submission = {
    ...storedSubmission,
    reviewedDate: storedSubmission.status === "pending" || storedSubmission.status === "draft" ? undefined : storedSubmission.lastUpdated,
    adminFeedback: storedSubmission.feedback,
    sources: storedSubmission.sources.map((source) => ({
      ...source,
      status: storedSubmission.sourceStatus,
    })),
  };

  const timeline = [
    {
      status: "submitted",
      label: "Submitted",
      date: submission.submittedDate,
      completed: true,
    },
    {
      status: "source-check",
      label: "Source Verification",
      date: "2026-05-21",
      completed: true,
    },
    {
      status: "admin-review",
      label: "Admin Review",
      date: "2026-05-22",
      completed: true,
    },
    {
      status: "decision",
      label: "Final Decision",
      date: submission.reviewedDate,
      completed: true,
    },
  ];

  return (
    <RepLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          to="/rep/submissions"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to My Submissions
        </Link>

        {/* Status Banner */}
        <div className={`rounded-2xl p-6 ${
          submission.status === "approved" 
            ? "bg-emerald-50 border border-emerald-200"
            : submission.status === "rejected"
            ? "bg-red-50 border border-red-200"
            : "bg-amber-50 border border-amber-200"
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${
                submission.status === "approved"
                  ? "bg-emerald-100"
                  : submission.status === "rejected"
                  ? "bg-red-100"
                  : "bg-amber-100"
              }`}>
                {submission.status === "approved" ? (
                  <CheckCircle2 className={`w-6 h-6 ${
                    submission.status === "approved" ? "text-emerald-600" : ""
                  }`} />
                ) : submission.status === "rejected" ? (
                  <AlertCircle className="w-6 h-6 text-red-600" />
                ) : (
                  <Clock className="w-6 h-6 text-amber-600" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className={`text-2xl font-bold ${
                    submission.status === "approved"
                      ? "text-emerald-900"
                      : submission.status === "rejected"
                      ? "text-red-900"
                      : "text-amber-900"
                  }`}>
                    Submission {submission.status === "approved" ? "Approved" : submission.status === "rejected" ? "Rejected" : "Pending Review"}
                  </h1>
                  <StatusBadge status={submission.status} />
                </div>
                <p className={`${
                  submission.status === "approved"
                    ? "text-emerald-700"
                    : submission.status === "rejected"
                    ? "text-red-700"
                    : "text-amber-700"
                }`}>
                  Submission ID: {submission.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {submission.status === "rejected" && (
                <Link
                  to={`/rep/submissions/${submission.id}/edit`}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit & Resubmit
                </Link>
              )}
              <button
                onClick={() => {
                  downloadTextFile(
                    `${submission.id}-summary.txt`,
                    `${submission.program}\n${submission.university}\nStatus: ${submission.status}\n\n${submission.description}\n\nAdmin feedback: ${submission.adminFeedback}`,
                  );
                  toast.success("Submission summary downloaded.");
                }}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Summary
              </button>
            </div>
          </div>

          {submission.adminFeedback && (
            <div className="mt-4 pt-4 border-t border-red-200">
              <h3 className="font-medium text-red-900 mb-2">Admin Feedback</h3>
              <p className="text-red-700">{submission.adminFeedback}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Program Information */}
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
                    {submission.currency} {Number(submission.tuitionMin || 0).toLocaleString()} - {Number(submission.tuitionMax || 0).toLocaleString()}
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

            {/* Official Source Links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Official Source Links</h2>
              
              <div className="space-y-4">
                {submission.sources.map((source, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900">{source.description}</h3>
                          <StatusBadge status={source.status} />
                        </div>
                        <p className="text-sm text-gray-500">{source.category}</p>
                      </div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm"
                      >
                        Open Link
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600 break-all">{source.url}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Review Timeline</h2>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.completed
                          ? submission.status === "rejected" && index === timeline.length - 1
                            ? "bg-red-100"
                            : "bg-emerald-100"
                          : "bg-gray-100"
                      }`}>
                        {item.completed ? (
                          submission.status === "rejected" && index === timeline.length - 1 ? (
                            <AlertCircle className="w-4 h-4 text-red-600" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          )
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-gray-400" />
                        )}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${
                          item.completed ? "bg-emerald-200" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${
                        item.completed ? "text-gray-900" : "text-gray-500"
                      }`}>
                        {item.label}
                      </h3>
                      {item.date && (
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(item.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Meta */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Submission Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Submitted Date</h3>
                  <p className="text-gray-900">
                    {new Date(submission.submittedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {submission.reviewedDate && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Reviewed Date</h3>
                    <p className="text-gray-900">
                      {new Date(submission.reviewedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Source Verification</h3>
                  <StatusBadge status={submission.sourceStatus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

import { RepLayout } from "../../components/RepLayout";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle,
  ExternalLink,
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  Calendar
} from "lucide-react";

export default function PreviewSubmission() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    toast.success("Program submitted for review!");
    navigate("/rep/submissions");
  };

  return (
    <RepLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Preview Submission</h1>
            <p className="text-gray-600">Review your program details before submitting</p>
          </div>
          <button
            onClick={() => navigate("/rep/submit")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Edit
          </button>
        </div>

        {/* Data Completeness */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900">Data Completeness Score</h3>
                <p className="text-sm text-emerald-700">Your submission is nearly complete!</p>
              </div>
            </div>
            <span className="text-3xl font-bold text-emerald-600">95%</span>
          </div>
          <div className="w-full bg-emerald-200 rounded-full h-3">
            <div className="bg-emerald-600 h-3 rounded-full transition-all" style={{ width: "95%" }} />
          </div>
        </div>

        {/* Program Preview Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                  <GraduationCap className="w-4 h-4" />
                  Master's Degree
                </div>
                <h2 className="text-3xl font-bold mb-2">Master of Computer Science</h2>
                <p className="text-indigo-100 text-lg">Universiti Teknologi Malaysia (UTM)</p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-4 gap-6 p-6 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium text-gray-900">Johor Bahru, Malaysia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium text-gray-900">2 years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tuition</p>
                <p className="font-medium text-gray-900">RM 18k / year</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-50 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Intake</p>
                <p className="font-medium text-gray-900">September 2026</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive graduate program covering advanced topics in computer science including artificial intelligence, 
                machine learning, distributed systems, and software engineering. Students engage in cutting-edge research 
                and work with world-renowned faculty.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Admission Requirements</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Bachelor's degree in Computer Science or related field</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>English language proficiency where applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Three letters of recommendation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Statement of purpose</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Field of Study</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
                  Computer Science
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                  Engineering
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Sources */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Official Source Links</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex-1">
                <p className="font-medium text-gray-900 mb-1">Official program overview page</p>
                <p className="text-sm text-gray-600">Program Overview</p>
              </div>
              <a
                href="https://www.utm.my/programmes/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Source
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex-1">
                <p className="font-medium text-gray-900 mb-1">Tuition and financial aid information</p>
                <p className="text-sm text-gray-600">Tuition</p>
              </div>
              <a
                href="https://www.utm.my/fees/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Source
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-900">Source Verification Ready</p>
                <p className="text-sm text-green-700 mt-1">
                  All required source links have been provided. Admins will verify these during review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Submit?</h3>
              <p className="text-gray-600">
                Your program submission will be sent to our admin team for review. 
                You'll be notified once the review is complete.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/rep/submit")}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
              >
                Back to Edit
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium"
              >
                Submit for Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

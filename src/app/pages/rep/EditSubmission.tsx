import { RepLayout } from "../../components/RepLayout";
import { useParams, useNavigate, Link } from "react-router";
import { toast } from "sonner";
import { ArrowLeft, AlertCircle, Plus, X } from "lucide-react";
import { useState } from "react";

export default function EditSubmission() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sources, setSources] = useState([
    { url: "https://www.utm.my/programmes/", description: "Official UTM program page", category: "Program Overview" },
    { url: "https://www.utm.my/fees/", description: "UTM tuition page", category: "Tuition" },
  ]);

  const rejectionReason = "Please provide more specific official source for tuition information. The current link redirects to a general page.";

  const addSource = () => {
    setSources([...sources, { url: "", description: "", category: "Program Overview" }]);
  };

  const removeSource = (index: number) => {
    setSources(sources.filter((_, i) => i !== index));
  };

  const handleResubmit = () => {
    toast.success("Program resubmitted for review!");
    navigate("/rep/submissions");
  };

  const handleSaveChanges = () => {
    toast.success("Changes saved successfully!");
  };

  return (
    <RepLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          to={`/rep/submissions/${id}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Submission Details
        </Link>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Submission</h1>
          <p className="text-gray-600">Update your program information and resubmit for review</p>
        </div>

        {/* Rejection Reason Banner */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-900 mb-1">Rejection Reason</h3>
              <p className="text-red-700">{rejectionReason}</p>
              <div className="mt-3 bg-red-100 rounded-lg p-3">
                <p className="text-sm text-red-800">
                  <span className="font-medium">Correction Guidance:</span> Please update the tuition source link to point directly to the PhD program's tuition page rather than the general university tuition page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8">
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Program Information</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">University *</label>
                  <select
                    defaultValue="Universiti Teknologi Malaysia"
                    disabled
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>Universiti Teknologi Malaysia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Degree Level *</label>
                  <select 
                    defaultValue="PhD"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>PhD</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program Name *</label>
                <input 
                  type="text"
                  defaultValue="PhD in Artificial Intelligence"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study *</label>
                <input 
                  type="text"
                  defaultValue="Computer Science"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Academic Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Academic Details</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program Duration *</label>
                  <input 
                    type="text"
                    defaultValue="4-6 years"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Intake Period *</label>
                  <input 
                    type="text"
                    defaultValue="Fall 2026"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program Description *</label>
                <textarea 
                  rows={4}
                  defaultValue="Advanced research program in artificial intelligence, machine learning, and deep learning."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Tuition */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tuition and Fees</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Fee *</label>
                <input 
                  type="number"
                  defaultValue="52000"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Fee *</label>
                <input 
                  type="number"
                  defaultValue="58000"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency *</label>
                <select 
                  defaultValue="USD"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
          </div>

          {/* Official Sources - Highlighted */}
          <div className="border-2 border-amber-300 rounded-2xl p-6 bg-amber-50">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Official Source Links (Needs Correction)</h2>
                <p className="text-sm text-amber-700">Please update the tuition source link as requested by the admin</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {sources.map((source, index) => (
                <div 
                  key={index} 
                  className={`border-2 rounded-xl p-6 space-y-4 ${
                    index === 1 ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">Source Link {index + 1}</h4>
                      {index === 1 && (
                        <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          Needs Update
                        </span>
                      )}
                    </div>
                    {sources.length > 1 && (
                      <button
                        onClick={() => removeSource(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source URL *</label>
                    <input 
                      type="url"
                      defaultValue={source.url}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        index === 1 ? "bg-white border-red-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source Description *</label>
                    <input 
                      type="text"
                      defaultValue={source.description}
                      placeholder="e.g., PhD program specific tuition page"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        index === 1 ? "bg-white border-red-300" : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Source Category *</label>
                    <select 
                      defaultValue={source.category}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        index === 1 ? "bg-white border-red-300" : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <option>Program Overview</option>
                      <option>Tuition</option>
                      <option>Admission</option>
                      <option>Intake</option>
                    </select>
                  </div>
                </div>
              ))}

              <button
                onClick={addSource}
                className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors w-full justify-center"
              >
                <Plus className="w-5 h-5" />
                Add Another Source Link
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Link
              to={`/rep/submissions/${id}`}
              className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium"
            >
              Cancel
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveChanges}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
              >
                Save Changes
              </button>
              
              <button
                onClick={handleResubmit}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium"
              >
                Resubmit for Review
              </button>
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-700">
            <span className="font-medium">Note:</span> After resubmitting, your program will return to "Pending Review" status and will be reviewed by an admin.
          </p>
        </div>
      </div>
    </RepLayout>
  );
}

import { RepLayout } from "../../components/RepLayout";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { 
  FileText, 
  GraduationCap, 
  DollarSign, 
  Link as LinkIcon,
  ChevronRight,
  Info,
  Plus,
  X
} from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

interface SourceLink {
  url: string;
  description: string;
  category: string;
}

export default function SubmitProgram() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [sources, setSources] = useState<SourceLink[]>([
    { url: "", description: "", category: "Program Overview" }
  ]);

  const steps = [
    { number: 1, title: "Program Info", icon: FileText },
    { number: 2, title: "Academic Details", icon: GraduationCap },
    { number: 3, title: "Fees", icon: DollarSign },
    { number: 4, title: "Source Link", icon: LinkIcon },
    { number: 5, title: "Review", icon: ChevronRight },
  ];

  const addSource = () => {
    setSources([...sources, { url: "", description: "", category: "Program Overview" }]);
  };

  const removeSource = (index: number) => {
    setSources(sources.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    toast.success("Program submitted for review!");
    navigate("/rep/submissions");
  };

  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!");
  };

  return (
    <RepLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit New Program</h1>
          <p className="text-gray-600">Fill in the details to submit a new university program for review</p>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      currentStep >= step.number
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <p className={`text-xs mt-2 font-medium ${
                    currentStep >= step.number ? "text-indigo-600" : "text-gray-500"
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-4 ${
                    currentStep > step.number ? "bg-indigo-600" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Program Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Program Information</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">University *</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select university</option>
                    <option>MIT</option>
                    <option>Harvard University</option>
                    <option>Stanford University</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Degree Level *</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select degree level</option>
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
                  placeholder="e.g., Master of Computer Science"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study *</label>
                <input 
                  type="text"
                  placeholder="e.g., Computer Science, Engineering"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <input 
                    type="text"
                    placeholder="e.g., United States"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input 
                    type="text"
                    placeholder="e.g., Cambridge"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Academic Details</h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program Duration *</label>
                  <input 
                    type="text"
                    placeholder="e.g., 2 years"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Intake Period *</label>
                  <input 
                    type="text"
                    placeholder="e.g., Fall 2026"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admission Requirements *</label>
                <textarea 
                  rows={4}
                  placeholder="List the admission requirements..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program Description *</label>
                <textarea 
                  rows={6}
                  placeholder="Provide a detailed description of the program..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {/* Step 3: Tuition and Fees */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Tuition and Fees</h2>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Tuition Fee *</label>
                  <input 
                    type="number"
                    placeholder="25000"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Tuition Fee *</label>
                  <input 
                    type="number"
                    placeholder="50000"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency *</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>CAD</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Tuition Range</h4>
                    <p className="text-sm text-blue-700">
                      Provide a realistic tuition range. Make sure these values match your official source documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Official Source Links */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Official Source Links</h2>
                <p className="text-sm text-gray-600">At least one official source link is required for verification</p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-indigo-900 mb-1">Source Credibility</h4>
                    <p className="text-sm text-indigo-700">
                      Official university links help our admins verify your program faster. Please provide direct links to program pages, tuition info, or admission requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {sources.map((source, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Source Link {index + 1}</h4>
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
                        placeholder="https://university.edu/programs/..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Source Description *</label>
                      <input 
                        type="text"
                        placeholder="e.g., Official tuition page"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Source Category *</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Review Your Submission</h2>
                <p className="text-sm text-gray-600">Please review all information before submitting</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-emerald-900">Data Completeness</h3>
                  <span className="text-2xl font-bold text-emerald-600">95%</span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "95%" }} />
                </div>
                <p className="text-sm text-emerald-700 mt-2">Excellent! Your submission is nearly complete.</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Program Name</h4>
                  <p className="text-gray-900">Master of Computer Science</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">University</h4>
                    <p className="text-gray-900">MIT</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Degree Level</h4>
                    <p className="text-gray-900">Master</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Tuition Range</h4>
                  <p className="text-gray-900">$45,000 - $55,000 USD</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Official Sources</h4>
                  <p className="text-gray-900">2 source links added</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
            <div>
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1) as Step)}
                  className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium"
                >
                  ← Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveDraft}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
              >
                Save Draft
              </button>
              
              {currentStep < 5 ? (
                <button
                  onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1) as Step)}
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium"
                >
                  Submit for Review
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </RepLayout>
  );
}

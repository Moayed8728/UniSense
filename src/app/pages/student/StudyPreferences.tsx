import { useState } from "react";
import { useNavigate } from "react-router";
import { BookOpen, Briefcase, GraduationCap, Languages, MapPin, Save, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";

const inputClass = "w-full px-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40";
const fields = ["Computer Science", "Data Science", "Artificial Intelligence", "Engineering", "Business", "Public Health"];

export default function StudyPreferences() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    country: "Malaysia",
    degreeLevel: "Master",
    field: "Data Science",
    budget: "10000",
    language: "English",
    duration: "24",
    careerGoal: "Build data products and lead applied AI projects",
    academicBackground: "Bachelor's degree in computing or a related field",
  });

  const update = (field: keyof typeof preferences, value: string) =>
    setPreferences((current) => ({ ...current, [field]: value }));

  const save = () => {
    localStorage.setItem("unisense.studyPreferences", JSON.stringify(preferences));
    toast.success("Study preferences saved.");
    navigate("/student/recommendations");
  };

  return (
    <StudentLayout>
      <div className="space-y-8 max-w-5xl">
        <section className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-accent-violet font-semibold text-sm mb-4">
              <SlidersHorizontal className="w-4 h-4" /> Recommendation profile
            </div>
            <h1 className="text-4xl font-bold mb-3">Study Preferences</h1>
            <p className="text-muted-foreground text-lg">Tell UniSense what matters to you so recommendations can be matched against verified programs.</p>
          </div>
        </section>

        <section className="glass-card rounded-2xl p-7 shadow-premium border-glow">
          <div className="grid md:grid-cols-2 gap-6">
            <Field icon={MapPin} label="Preferred country">
              <input value={preferences.country} onChange={(e) => update("country", e.target.value)} className={inputClass} />
            </Field>
            <Field icon={GraduationCap} label="Degree level">
              <select value={preferences.degreeLevel} onChange={(e) => update("degreeLevel", e.target.value)} className={inputClass}>
                {["Bachelor", "Master", "PhD"].map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={BookOpen} label="Field of study">
              <select value={preferences.field} onChange={(e) => update("field", e.target.value)} className={inputClass}>
                {fields.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={SlidersHorizontal} label="Maximum annual budget (USD)">
              <input type="number" value={preferences.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass} />
            </Field>
            <Field icon={Languages} label="Preferred language">
              <input value={preferences.language} onChange={(e) => update("language", e.target.value)} className={inputClass} />
            </Field>
            <Field icon={SlidersHorizontal} label="Maximum duration (months)">
              <input type="number" value={preferences.duration} onChange={(e) => update("duration", e.target.value)} className={inputClass} />
            </Field>
            <Field icon={Briefcase} label="Career goal">
              <textarea rows={4} value={preferences.careerGoal} onChange={(e) => update("careerGoal", e.target.value)} className={`${inputClass} resize-none`} />
            </Field>
            <Field icon={GraduationCap} label="Academic background">
              <textarea rows={4} value={preferences.academicBackground} onChange={(e) => update("academicBackground", e.target.value)} className={`${inputClass} resize-none`} />
            </Field>
          </div>
          <div className="mt-7 flex justify-end">
            <button onClick={save} className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium">
              <Save className="w-4 h-4" /> Save & View Recommendations
            </button>
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}

function Field({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <label>
      <span className="flex items-center gap-2 text-sm font-semibold mb-2"><Icon className="w-4 h-4 text-primary" />{label}</span>
      {children}
    </label>
  );
}

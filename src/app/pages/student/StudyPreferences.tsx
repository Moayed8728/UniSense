import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Languages,
  MapPin,
  Save,
  SlidersHorizontal,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";
import { programs, universities } from "../../data/programs";
import { getStudyPreferences, saveStudyPreferences, type StudyPreferences as Preferences } from "../../lib/recommendations";

const inputClass = "w-full px-4 py-3.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all";

export default function StudyPreferences() {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<Preferences>(getStudyPreferences);

  const countries = useMemo(
    () => Array.from(new Set(universities.filter((university) => university.programCount > 0).map((university) => university.country))).sort(),
    [],
  );
  const fields = useMemo(() => Array.from(new Set(programs.map((program) => program.field))).sort(), []);
  const languages = useMemo(() => Array.from(new Set(programs.map((program) => program.language))).sort(), []);

  const update = (field: keyof Preferences, value: string) =>
    setPreferences((current) => ({ ...current, [field]: value }));

  const save = () => {
    if (Number(preferences.budget) <= 0) {
      toast.error("Please enter a valid annual budget.");
      return;
    }
    if (Number(preferences.duration) <= 0) {
      toast.error("Please select a valid study duration.");
      return;
    }
    saveStudyPreferences(preferences);
    toast.success("Study preferences saved. Recommendations recalculated.");
    navigate("/student/recommendations");
  };

  return (
    <StudentLayout>
      <div className="space-y-8 max-w-6xl">
        <section className="relative overflow-hidden rounded-3xl p-9 shadow-premium-xl border border-accent-violet/20 bg-[linear-gradient(120deg,rgba(28,24,52,0.98),rgba(15,24,42,0.96))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.28),transparent_34%)]" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-violet font-semibold text-sm mb-4">
                <Sparkles className="w-4 h-4" /> Recommendation profile
              </div>
              <h1 className="text-4xl xl:text-5xl font-bold mb-3">
                Shape Your <span className="text-gradient-hero">Study Match</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Your answers are saved in this browser and used to rank only existing, university-linked UniSense programs.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-white/[0.06] border border-white/10 min-w-64">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Current focus</p>
              <p className="font-semibold text-lg mt-2">{preferences.degreeLevel} in {preferences.field}</p>
              <p className="text-sm text-muted-foreground mt-1">{preferences.country} · up to ${Number(preferences.budget).toLocaleString()}/year</p>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-3xl p-7 shadow-premium border border-white/[0.07]">
          <div className="mb-7">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold mb-2">Matching criteria</p>
            <h2 className="text-2xl font-semibold">Academic and practical preferences</h2>
            <p className="text-sm text-muted-foreground mt-1">Each field contributes to the fit score shown on your recommendation results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Field icon={MapPin} label="Preferred country" hint="Matches the university’s country">
              <select value={preferences.country} onChange={(event) => update("country", event.target.value)} className={inputClass}>
                {countries.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={GraduationCap} label="Degree level" hint="Bachelor, Master, or PhD">
              <select value={preferences.degreeLevel} onChange={(event) => update("degreeLevel", event.target.value)} className={inputClass}>
                {["Bachelor", "Master", "PhD"].map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={BookOpen} label="Field of study" hint="The strongest factor in your fit score">
              <select value={preferences.field} onChange={(event) => update("field", event.target.value)} className={inputClass}>
                {fields.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={WalletCards} label="Maximum annual budget (USD)" hint="Compared with each program’s minimum annual tuition">
              <input type="number" min="1" value={preferences.budget} onChange={(event) => update("budget", event.target.value)} className={inputClass} />
            </Field>
            <Field icon={Languages} label="Preferred teaching language" hint="Uses languages available in the program database">
              <select value={preferences.language} onChange={(event) => update("language", event.target.value)} className={inputClass}>
                {languages.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Field>
            <Field icon={SlidersHorizontal} label="Maximum duration" hint="Longer programs receive a lower duration match">
              <select value={preferences.duration} onChange={(event) => update("duration", event.target.value)} className={inputClass}>
                {[12, 18, 24, 36, 48, 60].map((months) => <option key={months} value={months}>{months} months</option>)}
              </select>
            </Field>
            <Field icon={Briefcase} label="Career goal" hint="Used for keyword overlap with program content">
              <textarea rows={4} value={preferences.careerGoal} onChange={(event) => update("careerGoal", event.target.value)} className={`${inputClass} resize-none`} />
            </Field>
            <Field icon={GraduationCap} label="Academic background" hint="Compared with requirements and program descriptions">
              <textarea rows={4} value={preferences.academicBackground} onChange={(event) => update("academicBackground", event.target.value)} className={`${inputClass} resize-none`} />
            </Field>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-glass-border">
            <p className="text-sm text-muted-foreground">Preferences remain editable and can be recalculated at any time.</p>
            <button onClick={save} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg">
              <Save className="w-4 h-4" /> Save & Calculate Matches
            </button>
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}

function Field({ icon: Icon, label, hint, children }: { icon: typeof MapPin; label: string; hint: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-2xl p-4 bg-white/[0.025] border border-white/[0.05]">
      <span className="flex items-center gap-2 text-sm font-semibold mb-1"><Icon className="w-4 h-4 text-accent-violet" />{label}</span>
      <span className="block text-xs text-muted-foreground mb-3">{hint}</span>
      {children}
    </label>
  );
}

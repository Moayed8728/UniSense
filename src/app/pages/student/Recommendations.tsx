import { useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { CheckCircle2, GitCompare, Heart, MapPin, SlidersHorizontal, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";
import { formatDuration, formatFee, getUniversityById, programs } from "../../data/programs";
import { toggleFavoriteProgram } from "../../lib/favorites";

const defaults = { country: "Malaysia", degreeLevel: "Master", field: "Data Science", budget: "10000", duration: "24" };

export default function Recommendations() {
  const navigate = useNavigate();
  const preferences = useMemo(() => {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem("unisense.studyPreferences") ?? "{}") };
    } catch {
      return defaults;
    }
  }, []);

  const recommendations = programs.map((program) => {
    const matches = [
      { label: "Field match", value: program.field === preferences.field },
      { label: "Country match", value: program.country === preferences.country },
      { label: "Budget match", value: program.tuitionMin <= Number(preferences.budget) },
      { label: "Degree match", value: program.degreeLevel === preferences.degreeLevel },
    ];
    return { program, matches, score: 60 + matches.filter((match) => match.value).length * 10 };
  }).sort((a, b) => b.score - a.score).slice(0, 6);

  return (
    <StudentLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="relative flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-violet font-semibold text-sm mb-4"><Sparkles className="w-4 h-4" /> Preference-based matching</div>
              <h1 className="text-4xl font-bold mb-3">Recommended Programs</h1>
              <p className="text-muted-foreground text-lg max-w-3xl">Recommendations use programs already stored in UniSense and keep every result linked to its university.</p>
            </div>
            <Link to="/student/preferences" className="inline-flex items-center gap-2 px-5 py-3 glass-card border border-glass-border rounded-xl font-semibold">
              <SlidersHorizontal className="w-4 h-4" /> Edit Preferences
            </Link>
          </div>
        </section>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recommendations.map(({ program, matches, score }) => {
            const university = getUniversityById(program.universityId);
            const reasons = matches.filter((match) => match.value);
            return (
              <article key={program.id} className="glass-card rounded-2xl p-6 shadow-premium border-glow flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-accent-violet font-semibold uppercase tracking-wider">{program.degreeLevel} · {program.field}</p>
                    <h2 className="text-xl font-semibold mt-2">{program.name}</h2>
                    <p className="text-sm text-foreground font-medium mt-2">{university?.name ?? program.university}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{university?.city}, {university?.country}</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex flex-col items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-success">{score}%</span><span className="text-[10px] text-muted-foreground">fit</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{score}% match because this program aligns with {reasons.length ? reasons.map((reason) => reason.label.toLowerCase()).join(", ") : "your broader study profile"}.</p>
                <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                  {matches.map((match) => (
                    <span key={match.label} className={`flex items-center gap-1.5 p-2 rounded-lg ${match.value ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> {match.label}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mb-5">{formatFee(program.tuitionMin, program.tuitionMax)} · {formatDuration(program.durationMonths)}</div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <button onClick={() => { toggleFavoriteProgram(program.id); toast.success("Saved program updated."); }} className="inline-flex items-center justify-center gap-2 py-2.5 glass-card border border-glass-border rounded-xl font-semibold text-sm"><Heart className="w-4 h-4" /> Save</button>
                  <button onClick={() => { toast.success(`${program.name} is ready to compare.`); navigate("/student/compare"); }} className="inline-flex items-center justify-center gap-2 py-2.5 gradient-primary text-white rounded-xl font-semibold text-sm"><GitCompare className="w-4 h-4" /> Compare</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </StudentLayout>
  );
}

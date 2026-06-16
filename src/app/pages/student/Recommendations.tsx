import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  GitCompare,
  Heart,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Target,
} from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";
import { formatDuration, formatFee, getUniversityById, programs } from "../../data/programs";
import { addComparisonProgram } from "../../lib/comparison";
import { isFavoriteProgram, toggleFavoriteProgram } from "../../lib/favorites";
import { getStudyPreferences, scoreProgram } from "../../lib/recommendations";

export default function Recommendations() {
  const navigate = useNavigate();
  const preferences = useMemo(getStudyPreferences, []);
  const [favoriteIds, setFavoriteIds] = useState(() =>
    new Set(programs.filter((program) => isFavoriteProgram(program.id)).map((program) => program.id)),
  );

  const recommendations = useMemo(
    () => programs
      .map((program) => ({ program, ...scoreProgram(program, preferences) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 9),
    [preferences],
  );

  const averageScore = Math.round(
    recommendations.reduce((total, recommendation) => total + recommendation.score, 0) / recommendations.length,
  );

  const handleFavorite = (programId: string) => {
    const favorite = toggleFavoriteProgram(programId);
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (favorite) next.add(programId);
      else next.delete(programId);
      return next;
    });
    toast.success(favorite ? "Program saved." : "Program removed from saved programs.");
  };

  const handleCompare = (programId: string) => {
    const result = addComparisonProgram(programId);
    if (!result.added && result.reason === "limit") {
      toast.error("You can compare up to four programs. Remove one first.");
      return;
    }
    toast.success(result.reason === "duplicate" ? "Program is already in comparison." : "Program added to comparison.");
    navigate("/student/compare");
  };

  return (
    <StudentLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl p-9 shadow-premium-xl border border-accent-violet/20 bg-[linear-gradient(120deg,rgba(28,24,52,0.98),rgba(15,24,42,0.96))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.28),transparent_34%)]" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-violet font-semibold text-sm mb-4">
                <Sparkles className="w-4 h-4" /> Recommendation & Matching
              </div>
              <h1 className="text-4xl xl:text-5xl font-bold mb-3">
                Your Best-Fit <span className="text-gradient-hero">Programs</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Ranked from the existing UniSense database using your country, degree, field, budget, language, duration, career goal, and background.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl px-5 py-4 bg-success/10 border border-success/20 text-center">
                <p className="text-3xl font-bold text-success">{averageScore}%</p>
                <p className="text-xs text-muted-foreground">average top match</p>
              </div>
              <Link to="/student/preferences" className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] border border-white/10 rounded-xl font-semibold hover:bg-white/[0.1]">
                <SlidersHorizontal className="w-4 h-4" /> Edit Preferences
              </Link>
            </div>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            ["Preferred field", preferences.field],
            ["Study level", preferences.degreeLevel],
            ["Preferred country", preferences.country],
            ["Annual budget", `$${Number(preferences.budget).toLocaleString()}`],
          ].map(([label, value]) => (
            <div key={label} className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="font-semibold mt-1">{value}</p>
            </div>
          ))}
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold mb-2">Ranked results</p>
              <h2 className="text-2xl font-semibold">Recommended from verified university programs</h2>
            </div>
            <p className="text-sm text-muted-foreground">{recommendations.length} personalized matches</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recommendations.map(({ program, reasons, score }, index) => {
              const university = getUniversityById(program.universityId);
              const matchedReasons = reasons.filter((reason) => reason.matched);
              const favorite = favoriteIds.has(program.id);
              return (
                <article key={program.id} className="relative overflow-hidden glass-card rounded-2xl p-6 shadow-premium border border-white/[0.07] flex flex-col">
                  <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-accent-violet/10 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs text-accent-violet font-bold uppercase tracking-wider">#{index + 1} match · {program.degreeLevel}</p>
                      <h3 className="text-xl font-semibold mt-2 leading-snug">{program.name}</h3>
                      <p className="text-sm text-foreground font-medium mt-2">{university?.name ?? program.university}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> {university?.city}, {university?.country}
                      </p>
                    </div>
                    <div className="h-[68px] w-[68px] p-3 rounded-2xl bg-success/10 border border-success/20 flex flex-col items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-success">{score}%</span>
                      <span className="text-[10px] text-muted-foreground">fit score</span>
                    </div>
                  </div>

                  <div className="relative rounded-xl p-4 bg-accent-violet/[0.06] border border-accent-violet/15 mb-4">
                    <p className="text-xs text-accent-violet font-bold flex items-center gap-2 mb-2"><Target className="w-3.5 h-3.5" /> Why it matches</p>
                    <p className="text-sm text-muted-foreground">
                      {score}% match because {matchedReasons.slice(0, 3).map((reason) => reason.detail.toLowerCase()).join(", ")}.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                    {reasons.slice(0, 6).map((reason) => (
                      <span key={reason.label} className={`flex items-center gap-1.5 p-2 rounded-lg ${reason.matched ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                        <CheckCircle2 className="w-3.5 h-3.5" /> {reason.label}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground mb-5">
                    {program.field} · {formatFee(program.tuitionMin, program.tuitionMax)} · {formatDuration(program.durationMonths)} · {program.language}
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-2">
                    <button onClick={() => handleFavorite(program.id)} className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm border ${favorite ? "bg-accent-pink/10 border-accent-pink/25 text-accent-pink" : "glass-card border-glass-border"}`}>
                      <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} /> {favorite ? "Saved" : "Save"}
                    </button>
                    <button onClick={() => handleCompare(program.id)} className="inline-flex items-center justify-center gap-2 py-2.5 glass-card border border-glass-border rounded-xl font-semibold text-sm">
                      <GitCompare className="w-4 h-4" /> Compare
                    </button>
                    <Link to={`/programs/${program.id}`} className="inline-flex items-center justify-center gap-1 py-2.5 gradient-primary text-white rounded-xl font-semibold text-sm">
                      Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}

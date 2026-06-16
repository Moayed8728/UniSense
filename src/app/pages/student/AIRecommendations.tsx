import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Bot,
  GitCompare,
  Heart,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";
import {
  formatDuration,
  formatFee,
  getUniversityById,
  programs,
  universities,
} from "../../data/programs";
import { addComparisonProgram } from "../../lib/comparison";
import { isFavoriteProgram, toggleFavoriteProgram } from "../../lib/favorites";
import {
  getStudyPreferences,
  saveStudyPreferences,
  scoreProgram,
  type StudyPreferences,
} from "../../lib/recommendations";

const inputClass =
  "w-full rounded-xl border border-input-border bg-input-background px-4 py-3 focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40";

export default function AIRecommendations() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<StudyPreferences>(getStudyPreferences);
  const [intake, setIntake] = useState("Any intake");
  const [favoriteIds, setFavoriteIds] = useState(
    () => new Set(programs.filter((program) => isFavoriteProgram(program.id)).map((program) => program.id)),
  );

  const fields = useMemo(() => Array.from(new Set(programs.map((program) => program.field))).sort(), []);
  const countries = useMemo(
    () => Array.from(new Set(universities.filter((university) => university.programCount).map((university) => university.country))).sort(),
    [],
  );
  const intakes = useMemo(() => Array.from(new Set(programs.map((program) => program.intake))).sort(), []);

  const recommendations = useMemo(
    () =>
      programs
        .map((program) => {
          const result = scoreProgram(program, filters);
          const intakeMatch = intake === "Any intake" || program.intake === intake;
          return {
            program,
            reasons: result.reasons,
            score: Math.min(99, result.score + (intakeMatch && intake !== "Any intake" ? 4 : 0)),
            intakeMatch,
          };
        })
        .filter(({ intakeMatch }) => intakeMatch)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6),
    [filters, intake],
  );

  const update = (field: keyof StudyPreferences, value: string) =>
    setFilters((current) => ({ ...current, [field]: value }));

  const generate = () => {
    saveStudyPreferences(filters);
    toast.success("AI recommendation profile updated.");
  };

  const toggleFavorite = (programId: string) => {
    const favorite = toggleFavoriteProgram(programId);
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (favorite) next.add(programId);
      else next.delete(programId);
      return next;
    });
    toast.success(favorite ? "Program saved." : "Program removed from saved programs.");
  };

  const compare = (programId: string) => {
    const result = addComparisonProgram(programId);
    if (result.reason === "limit") {
      toast.error("You can compare up to four programs.");
      return;
    }
    toast.success(result.reason === "duplicate" ? "Already in comparison." : "Added to comparison.");
    navigate("/student/compare");
  };

  return (
    <StudentLayout>
      <div className="space-y-7">
        <section className="relative overflow-hidden rounded-3xl border border-accent-violet/20 bg-[linear-gradient(120deg,rgba(28,24,52,0.98),rgba(15,24,42,0.96))] p-9 shadow-premium-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.28),transparent_34%)]" />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-violet">
                <WandSparkles className="h-4 w-4" /> Interactive recommendation studio
              </div>
              <h1 className="text-4xl font-bold">
                AI <span className="text-gradient-hero">Recommendations</span>
              </h1>
              <p className="mt-2 max-w-3xl text-lg text-muted-foreground">
                Adjust your criteria and instantly rank programs already stored under verified
                universities.
              </p>
            </div>
            <Link
              to="/student/ai-assistant"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 font-semibold hover:bg-white/[0.1]"
            >
              <Bot className="h-4 w-4" /> Ask AI Assistant
            </Link>
          </div>
        </section>

        <div className="grid items-start gap-7 xl:grid-cols-[340px_1fr]">
          <aside className="glass-card rounded-3xl border-glow p-6 shadow-premium xl:sticky xl:top-24">
            <div className="mb-6">
              <div className="mb-3 w-fit rounded-xl bg-accent-violet/10 p-3">
                <SlidersHorizontal className="h-5 w-5 text-accent-violet" />
              </div>
              <h2 className="text-xl font-semibold">Match controls</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                These values also become your saved study preferences.
              </p>
            </div>

            <div className="space-y-4">
              <Control label="Field of study">
                <select value={filters.field} onChange={(event) => update("field", event.target.value)} className={inputClass}>
                  {fields.map((value) => <option key={value}>{value}</option>)}
                </select>
              </Control>
              <Control label="Degree level">
                <select value={filters.degreeLevel} onChange={(event) => update("degreeLevel", event.target.value)} className={inputClass}>
                  {["Bachelor", "Master", "PhD"].map((value) => <option key={value}>{value}</option>)}
                </select>
              </Control>
              <Control label="Preferred country">
                <select value={filters.country} onChange={(event) => update("country", event.target.value)} className={inputClass}>
                  {countries.map((value) => <option key={value}>{value}</option>)}
                </select>
              </Control>
              <Control label="Maximum annual budget (USD)">
                <input type="number" min="0" value={filters.budget} onChange={(event) => update("budget", event.target.value)} className={inputClass} />
              </Control>
              <Control label="Intake">
                <select value={intake} onChange={(event) => setIntake(event.target.value)} className={inputClass}>
                  <option>Any intake</option>
                  {intakes.map((value) => <option key={value}>{value}</option>)}
                </select>
              </Control>
              <button
                type="button"
                onClick={generate}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-5 py-3.5 font-semibold text-white shadow-premium"
              >
                <Sparkles className="h-4 w-4" /> Generate Recommendations
              </button>
            </div>
          </aside>

          <section>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-violet">Live ranked results</p>
                <h2 className="text-2xl font-semibold">Best programs for this profile</h2>
              </div>
              <span className="text-sm text-muted-foreground">{recommendations.length} matches</span>
            </div>

            <div className="space-y-5">
              {recommendations.map(({ program, reasons, score }, index) => {
                const university = getUniversityById(program.universityId);
                const matched = reasons.filter((reason) => reason.matched);
                const favorite = favoriteIds.has(program.id);
                return (
                  <article key={program.id} className="glass-card rounded-3xl border-glow p-6 shadow-premium">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent-violet/10 px-3 py-1 text-xs font-bold text-accent-violet">
                            #{index + 1} recommendation
                          </span>
                          <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                            {score}% fit
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold">{program.name}</h3>
                        <p className="mt-2 font-medium">{university?.name ?? program.university}</p>
                        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" /> {university?.city}, {university?.country}
                        </p>
                      </div>
                      <div className="grid min-w-[270px] grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <span className="rounded-xl bg-white/[0.035] p-3">{program.degreeLevel} · {program.field}</span>
                        <span className="rounded-xl bg-white/[0.035] p-3">{program.intake} intake</span>
                        <span className="rounded-xl bg-white/[0.035] p-3">{formatFee(program.tuitionMin, program.tuitionMax)}</span>
                        <span className="rounded-xl bg-white/[0.035] p-3">{formatDuration(program.durationMonths)}</span>
                      </div>
                    </div>

                    <div className="my-5 rounded-2xl border border-accent-violet/15 bg-accent-violet/[0.055] p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">Why this matches</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {matched.length
                          ? matched.slice(0, 4).map((reason) => reason.detail).join(". ")
                          : "This is a broader alternative based on the closest available records."}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link to={`/programs/${program.id}`} className="inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-white">
                        View details <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button type="button" onClick={() => toggleFavorite(program.id)} className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold ${favorite ? "border-accent-pink/25 bg-accent-pink/10 text-accent-pink" : "border-glass-border bg-white/[0.03]"}`}>
                        <Heart className={`h-4 w-4 ${favorite ? "fill-current" : ""}`} /> {favorite ? "Saved" : "Save"}
                      </button>
                      <button type="button" onClick={() => compare(program.id)} className="inline-flex items-center gap-2 rounded-xl border border-glass-border bg-white/[0.03] px-4 py-2.5 text-sm font-semibold">
                        <GitCompare className="h-4 w-4" /> Compare
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </StudentLayout>
  );
}

function Control({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

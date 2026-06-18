import { useMemo, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  GitCompare,
  Heart,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Target,
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

export default function Recommendations() {
  const navigate = useNavigate();
  const savedPreferences = useMemo(getStudyPreferences, []);
  const [filters, setFilters] = useState<StudyPreferences>(savedPreferences);
  const [feeMin, setFeeMin] = useState("");
  const [feeMax, setFeeMax] = useState(savedPreferences.budget);
  const [intake, setIntake] = useState("Any intake");
  const [favoriteIds, setFavoriteIds] = useState(
    () => new Set(programs.filter((program) => isFavoriteProgram(program.id)).map((program) => program.id)),
  );

  const fields = useMemo(() => Array.from(new Set(programs.map((program) => program.field))).sort(), []);
  const countries = useMemo(
    () => Array.from(new Set(universities.filter((university) => university.programCount).map((university) => university.country))).sort(),
    [],
  );
  const degreeLevels = useMemo(() => Array.from(new Set(programs.map((program) => program.degreeLevel))).sort(), []);
  const languages = useMemo(() => Array.from(new Set(programs.map((program) => program.language))).sort(), []);
  const intakes = useMemo(() => Array.from(new Set(programs.map((program) => program.intake))).sort(), []);

  const normalRecommendations = useMemo(
    () => programs
      .map((program) => ({ program, ...scoreProgram(program, savedPreferences) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6),
    [savedPreferences],
  );

  const aiRecommendations = useMemo(() => {
    const min = Number(feeMin) || 0;
    const max = Number(feeMax) || Number.POSITIVE_INFINITY;
    return programs
      .map((program) => ({ program, ...scoreProgram(program, { ...filters, budget: feeMax || filters.budget }) }))
      .filter(({ program }) => program.country === filters.country)
      .filter(({ program }) => program.degreeLevel === filters.degreeLevel)
      .filter(({ program }) => program.field === filters.field)
      .filter(({ program }) => program.language === filters.language)
      .filter(({ program }) => intake === "Any intake" || program.intake === intake)
      .filter(({ program }) => program.durationMonths <= (Number(filters.duration) || Number.POSITIVE_INFINITY))
      .filter(({ program }) => program.tuitionMax >= min && program.tuitionMin <= max)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9);
  }, [feeMax, feeMin, filters, intake]);

  const averageScore = Math.round(
    normalRecommendations.reduce((total, recommendation) => total + recommendation.score, 0) / normalRecommendations.length,
  );

  const update = (field: keyof StudyPreferences, value: string) =>
    setFilters((current) => ({ ...current, [field]: value }));

  const generate = () => {
    saveStudyPreferences({ ...filters, budget: feeMax || filters.budget });
    toast.success("Recommendation profile updated.");
  };

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
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-accent-violet font-semibold text-sm mb-4">
                <Sparkles className="w-4 h-4" /> Unified Recommendation & AI Matching
              </div>
              <h1 className="text-4xl xl:text-5xl font-bold mb-3">
                Your Best-Fit <span className="text-gradient-hero">Programs</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Review saved preference matches and tune AI-powered controls for field, degree, country, and fee range in one place.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-2xl px-5 py-4 bg-success/10 border border-success/20 text-center">
                <p className="text-3xl font-bold text-success">{averageScore}%</p>
                <p className="text-xs text-muted-foreground">average top match</p>
              </div>
              <Link to="/student/ai-assistant" className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] border border-white/10 rounded-xl font-semibold hover:bg-white/[0.1]">
                <Bot className="w-4 h-4" /> Ask AI Assistant
              </Link>
            </div>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            ["Preferred field", savedPreferences.field],
            ["Study level", savedPreferences.degreeLevel],
            ["Preferred country", savedPreferences.country],
            ["Annual budget", `$${Number(savedPreferences.budget).toLocaleString()}`],
          ].map(([label, value]) => (
            <div key={label} className="glass-card rounded-2xl p-4 border border-white/[0.06]">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="font-semibold mt-1">{value}</p>
            </div>
          ))}
        </section>

        <section className="glass-card rounded-3xl border-glow p-6 shadow-premium">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-xl bg-accent-violet/10 p-3">
                <SlidersHorizontal className="h-5 w-5 text-accent-violet" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">AI match controls</h2>
                <p className="mt-1 text-sm text-muted-foreground">Tune live recommendations by academic fit, country, intake, duration, language, and fee range.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/student/preferences" className="inline-flex items-center gap-2 px-4 py-2.5 glass-card border border-glass-border rounded-xl text-sm font-semibold hover:bg-white/[0.06]">
                <SlidersHorizontal className="w-4 h-4" /> Edit Preferences
              </Link>
              <button
                type="button"
                onClick={generate}
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-5 py-2.5 font-semibold text-white shadow-premium"
              >
                <WandSparkles className="h-4 w-4" /> Generate Recommendations
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Control label="Field of study">
              <select value={filters.field} onChange={(event) => update("field", event.target.value)} className={inputClass}>
                {fields.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Control>
            <Control label="Degree level">
              <select value={filters.degreeLevel} onChange={(event) => update("degreeLevel", event.target.value)} className={inputClass}>
                {degreeLevels.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Control>
            <Control label="Country">
              <select value={filters.country} onChange={(event) => update("country", event.target.value)} className={inputClass}>
                {countries.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Control>
            <Control label="Intake">
              <select value={intake} onChange={(event) => setIntake(event.target.value)} className={inputClass}>
                <option>Any intake</option>
                {intakes.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Control>
            <Control label="Language">
              <select value={filters.language} onChange={(event) => update("language", event.target.value)} className={inputClass}>
                {languages.map((value) => <option key={value}>{value}</option>)}
              </select>
            </Control>
            <Control label="Max duration (months)">
              <input type="number" min="0" value={filters.duration} onChange={(event) => update("duration", event.target.value)} className={inputClass} />
            </Control>
            <Control label="Fee minimum">
              <input type="number" min="0" value={feeMin} onChange={(event) => setFeeMin(event.target.value)} className={inputClass} />
            </Control>
            <Control label="Fee maximum">
              <input type="number" min="0" value={feeMax} onChange={(event) => setFeeMax(event.target.value)} className={inputClass} />
            </Control>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold mb-2">Ranked results</p>
              <h2 className="text-2xl font-semibold">Recommended from your saved study preferences</h2>
            </div>
            <p className="text-sm text-muted-foreground">{normalRecommendations.length} personalized matches</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {normalRecommendations.map(({ program, reasons, score }, index) => (
              <ProgramMatchCard
                key={program.id}
                program={program}
                reasons={reasons}
                score={score}
                rank={index + 1}
                favorite={favoriteIds.has(program.id)}
                onFavorite={handleFavorite}
                onCompare={handleCompare}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent-violet font-bold mb-2">AI-powered recommendations</p>
              <h2 className="text-2xl font-semibold">Live matches from the controls above</h2>
            </div>
            <p className="text-sm text-muted-foreground">{aiRecommendations.length} matches</p>
          </div>
          {aiRecommendations.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {aiRecommendations.map(({ program, reasons, score }, index) => (
                <ProgramMatchCard
                  key={program.id}
                  program={program}
                  reasons={reasons}
                  score={score}
                  rank={index + 1}
                  favorite={favoriteIds.has(program.id)}
                  onFavorite={handleFavorite}
                  onCompare={handleCompare}
                />
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-3xl border border-glass-border p-8 text-center">
              <p className="font-semibold">No programs match these controls yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Try widening the fee range or changing field, degree, country, intake, language, or duration.</p>
            </div>
          )}
        </section>
      </div>
    </StudentLayout>
  );
}

function ProgramMatchCard({
  program,
  reasons,
  score,
  rank,
  favorite,
  onFavorite,
  onCompare,
  wide = false,
}: {
  program: (typeof programs)[number];
  reasons: ReturnType<typeof scoreProgram>["reasons"];
  score: number;
  rank: number;
  favorite: boolean;
  onFavorite: (programId: string) => void;
  onCompare: (programId: string) => void;
  wide?: boolean;
}) {
  const university = getUniversityById(program.universityId);
  const matchedReasons = reasons.filter((reason) => reason.matched);

  return (
    <article className={`relative overflow-hidden glass-card rounded-2xl p-6 shadow-premium border border-white/[0.07] ${wide ? "" : "flex flex-col"}`}>
      <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-accent-violet/10 blur-3xl" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <p className="text-xs text-accent-violet font-bold uppercase tracking-wider">#{rank} match · {program.degreeLevel}</p>
          <h3 className="text-xl font-semibold mt-2 leading-snug">{program.name}</h3>
          <p className="text-sm text-foreground font-medium mt-2">{university?.name ?? program.university}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5" /> {university?.city}, {university?.country}
          </p>
        </div>
        <div className="h-[68px] w-[68px] p-3 rounded-2xl bg-success/10 border border-success/20 flex flex-col items-center justify-center shrink-0">
          <span className="text-xl font-bold text-success">{score}%</span>
          <span className="text-[10px] text-muted-foreground">match</span>
        </div>
      </div>

      <div className="relative rounded-xl p-4 bg-accent-violet/[0.06] border border-accent-violet/15 my-4">
        <p className="text-xs text-accent-violet font-bold flex items-center gap-2 mb-2"><Target className="w-3.5 h-3.5" /> Match reasons</p>
        <p className="text-sm text-muted-foreground">
          {matchedReasons.length
            ? `${score}% match because ${matchedReasons.slice(0, 3).map((reason) => reason.detail.toLowerCase()).join(", ")}.`
            : "This is a broader alternative based on the closest available records."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-5">
        {reasons.slice(0, 8).map((reason) => (
          <span key={reason.label} className={`flex items-center gap-1.5 p-2 rounded-lg ${reason.matched ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
            <CheckCircle2 className="w-3.5 h-3.5" /> {reason.label}
          </span>
        ))}
      </div>

      <div className="text-xs text-muted-foreground mb-5">
        {program.field} · {formatFee(program.tuitionMin, program.tuitionMax)} · {formatDuration(program.durationMonths)} · {program.language}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        <button onClick={() => onFavorite(program.id)} className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm border ${favorite ? "bg-accent-pink/10 border-accent-pink/25 text-accent-pink" : "glass-card border-glass-border"}`}>
          <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} /> {favorite ? "Saved" : "Save"}
        </button>
        <button onClick={() => onCompare(program.id)} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 glass-card border border-glass-border rounded-xl font-semibold text-sm">
          <GitCompare className="w-4 h-4" /> Compare
        </button>
        <Link to={`/programs/${program.id}`} className="inline-flex items-center justify-center gap-1 px-4 py-2.5 gradient-primary text-white rounded-xl font-semibold text-sm">
          Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

function Control({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

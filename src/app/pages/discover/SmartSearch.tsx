import { useMemo, useState } from "react";
import { Sparkles, Search as SearchIcon, Wand2, BookText, Cpu, SlidersHorizontal, X } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { programs, DegreeLevel } from "../../data/programs";

const degreeLevels: DegreeLevel[] = ["Bachelor", "Master", "PhD"];
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "Switzerland",
  "Japan",
  "Sweden",
  "Netherlands",
  "Malaysia",
];
const intakes = ["August", "September", "October", "January", "February", "April"];

const synonymGroups: Record<string, string[]> = {
  software: ["Software Engineering", "Computer Science", "Application Development"],
  data: ["Data Science", "Artificial Intelligence", "Computer Science"],
  ai: ["Artificial Intelligence", "Data Science", "Computer Science"],
  business: ["Business", "Finance", "Economics"],
  health: ["Public Health", "Medicine", "Healthcare"],
  engineering: ["Engineering", "Software Engineering", "Architecture"],
  design: ["Architecture", "Design", "Engineering"],
  security: ["Cybersecurity", "Computer Science", "Software Engineering"],
};

const expandQuery = (query: string) => {
  const normalized = query.toLowerCase().trim();
  const matchedGroup = Object.entries(synonymGroups).find(([key]) => normalized.includes(key));
  const terms = matchedGroup?.[1] ?? [query];
  return terms.map((term, index) => ({
    term,
    weight: Math.max(0.6, 1 - index * 0.12),
    source: index < 2 ? "dictionary" as const : "semantic" as const,
  }));
};

export default function SmartSearch() {
  const [query, setQuery] = useState("software");
  const [submitted, setSubmitted] = useState("software");
  const [field, setField] = useState("");
  const [degree, setDegree] = useState<DegreeLevel | "">("");
  const [country, setCountry] = useState("");
  const [intake, setIntake] = useState("");
  const [maxFee, setMaxFee] = useState(75000);
  const [maxDuration, setMaxDuration] = useState(60);

  const fields = useMemo(() => {
    return Array.from(new Set(programs.map((program) => program.field))).sort();
  }, []);

  const expansion = useMemo(() => ({
    rawQuery: submitted,
    expandedTerms: expandQuery(submitted),
  }), [submitted]);
  const expandedTermNames = expansion.expandedTerms.map((t) => t.term);

  const results = useMemo(() => {
    const normalizedQuery = submitted.trim().toLowerCase();
    return programs
      .map((p) => {
        const matched = expandedTermNames.filter(
          (t) =>
            p.field.toLowerCase().includes(t.toLowerCase()) ||
            p.name.toLowerCase().includes(t.toLowerCase()) ||
            p.summary.toLowerCase().includes(t.toLowerCase())
        );
        const directMatch =
          !normalizedQuery ||
          p.name.toLowerCase().includes(normalizedQuery) ||
          p.university.toLowerCase().includes(normalizedQuery) ||
          p.field.toLowerCase().includes(normalizedQuery) ||
          p.country.toLowerCase().includes(normalizedQuery);

        return { program: p, matched, directMatch };
      })
      .filter(({ program, matched, directMatch }) => {
        const smartMatch = !normalizedQuery || matched.length > 0 || directMatch;
        return (
          smartMatch &&
          (!field || program.field === field) &&
          (!degree || program.degreeLevel === degree) &&
          (!country || program.country === country) &&
          (!intake || program.intake === intake) &&
          program.tuitionMin <= maxFee &&
          program.durationMonths <= maxDuration
        );
      });
  }, [expandedTermNames, submitted, field, degree, country, intake, maxFee, maxDuration]);

  const clearFilters = () => {
    setField("");
    setDegree("");
    setCountry("");
    setIntake("");
    setMaxFee(75000);
    setMaxDuration(60);
  };

  const activeFilters = [field, degree, country, intake].filter(Boolean).length;

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Hero */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-violet/25 rounded-full blur-[110px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 glass-card px-4 py-2 rounded-full border-glow">
              <Sparkles className="w-4 h-4 text-accent-violet" />
              <span className="text-sm text-muted-foreground">AI-expanded academic search</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Smart <span className="text-gradient-hero">Search</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              We understand academic language — searching “software” also finds Software Engineering, Computer Science, and related fields.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(query);
              }}
              className="flex flex-col md:flex-row gap-3"
            >
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try “software”, “medicine”, “design”..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl gradient-primary text-white font-semibold shadow-premium hover:shadow-premium-lg transition-all"
              >
                <Wand2 className="w-5 h-5" />
                Expand & Search
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-accent-blue" />
                  Filters
                </h2>
                {activeFilters > 0 && (
                  <button onClick={clearFilters} className="text-xs text-muted-foreground hover:text-destructive inline-flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Clear
                  </button>
                )}
              </div>

              <FilterGroup label="Select a field">
                <select
                  value={field}
                  onChange={(event) => setField(event.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none text-sm"
                >
                  <option value="">All Fields</option>
                  {fields.map((fieldName) => (
                    <option key={fieldName} value={fieldName}>{fieldName}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label="Degree Level">
                <div className="flex flex-wrap gap-2">
                  {degreeLevels.map((level) => (
                    <Chip key={level} active={degree === level} onClick={() => setDegree(degree === level ? "" : level)}>
                      {level}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup label="Country">
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none text-sm"
                >
                  <option value="">All countries</option>
                  {countries.map((countryName) => (
                    <option key={countryName} value={countryName}>{countryName}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label="Intake">
                <select
                  value={intake}
                  onChange={(event) => setIntake(event.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none text-sm"
                >
                  <option value="">Any intake</option>
                  {intakes.map((intakeName) => (
                    <option key={intakeName} value={intakeName}>{intakeName}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label={`Max Tuition · $${maxFee.toLocaleString()}/yr`}>
                <input
                  type="range"
                  min={0}
                  max={75000}
                  step={1000}
                  value={maxFee}
                  onChange={(event) => setMaxFee(Number(event.target.value))}
                  className="w-full accent-[var(--accent-blue)]"
                />
              </FilterGroup>

              <FilterGroup label={`Max Duration · ${maxDuration} months`}>
                <input
                  type="range"
                  min={12}
                  max={60}
                  step={6}
                  value={maxDuration}
                  onChange={(event) => setMaxDuration(Number(event.target.value))}
                  className="w-full accent-[var(--accent-blue)]"
                />
              </FilterGroup>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-violet" />
                  Query Expansion
                </h2>
                <span className="text-sm text-muted-foreground">
                  raw query: <span className="text-foreground font-medium">“{submitted}”</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {expansion.expandedTerms.map((t) => (
                  <div key={t.term} className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-glass-border">
                    {t.source === "dictionary" ? <BookText className="w-4 h-4 text-accent-blue" /> : <Cpu className="w-4 h-4 text-accent-pink" />}
                    <span className="font-medium">{t.term}</span>
                    <span className="text-xs text-muted-foreground">w {t.weight.toFixed(2)}</span>
                    <span className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${t.source === "dictionary" ? "bg-accent-blue/15 text-accent-blue" : "bg-accent-pink/15 text-accent-pink"}`}>
                      {t.source === "dictionary" ? "synonyms" : "semantic"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <section>
              <div className="mb-5">
                <h2 className="text-2xl font-semibold">Smart Search Programs</h2>
                <p className="text-sm text-muted-foreground mt-1">Search verified programs with academic term expansion and field filters.</p>
              </div>
              <p className="text-muted-foreground mb-5">
                <span className="text-foreground font-semibold">{results.length}</span> programs found across{" "}
                {expansion.expandedTerms.length} expanded terms
              </p>
              {results.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {results.map(({ program, matched }) => (
                    <ProgramCard key={program.id} program={program} matchedTerms={matched} />
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center border-glow">
                  <p className="text-lg font-semibold mb-2">No programs match your filters</p>
                  <p className="text-muted-foreground text-sm mb-5">Try another smart term or widen the filters.</p>
                  <button onClick={clearFilters} className="px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold">
                    Reset filters
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-sm font-medium mb-2.5">{label}</p>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
        active
          ? "bg-accent-blue/20 text-accent-blue border-accent-blue/40"
          : "text-muted-foreground border-input-border hover:border-accent-blue/30"
      }`}
    >
      {children}
    </button>
  );
}

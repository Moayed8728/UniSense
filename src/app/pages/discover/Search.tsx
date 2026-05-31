import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Search as SearchIcon, SlidersHorizontal, X, Sparkles } from "lucide-react";
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

export default function Search() {
  const [query, setQuery] = useState("");
  const [degree, setDegree] = useState<DegreeLevel | "">("");
  const [country, setCountry] = useState("");
  const [intake, setIntake] = useState("");
  const [maxFee, setMaxFee] = useState(75000);
  const [maxDuration, setMaxDuration] = useState(60);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.university.toLowerCase().includes(q) ||
        p.field.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q);
      return (
        matchesQuery &&
        (!degree || p.degreeLevel === degree) &&
        (!country || p.country === country) &&
        (!intake || p.intake === intake) &&
        p.tuitionMin <= maxFee &&
        p.durationMonths <= maxDuration
      );
    });
  }, [query, degree, country, intake, maxFee, maxDuration]);

  const clearFilters = () => {
    setDegree("");
    setCountry("");
    setIntake("");
    setMaxFee(75000);
    setMaxDuration(60);
  };

  const activeFilters = [degree, country, intake].filter(Boolean).length;

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Hero search */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/20 rounded-full blur-[110px]" />
          <div className="relative">
            <h1 className="text-4xl font-bold mb-3">
              Search <span className="text-gradient-hero">University Programs</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Find programs by name, university, field of interest, or country — all in one place.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Computer Science, MIT, Canada..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                />
              </div>
              <Link
                to="/smart-search"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl gradient-primary text-white font-semibold shadow-premium hover:shadow-premium-lg transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Smart Search
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <aside className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow sticky top-28">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-accent-blue" />
                  Filters
                </h2>
                {activeFilters > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-muted-foreground hover:text-destructive inline-flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" /> Clear
                  </button>
                )}
              </div>

              <FilterGroup label="Degree Level">
                <div className="flex flex-wrap gap-2">
                  {degreeLevels.map((d) => (
                    <Chip key={d} active={degree === d} onClick={() => setDegree(degree === d ? "" : d)}>
                      {d}
                    </Chip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup label="Country">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none text-sm"
                >
                  <option value="">All countries</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label="Intake">
                <select
                  value={intake}
                  onChange={(e) => setIntake(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none text-sm"
                >
                  <option value="">Any intake</option>
                  {intakes.map((i) => (
                    <option key={i} value={i}>{i}</option>
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
                  onChange={(e) => setMaxFee(Number(e.target.value))}
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
                  onChange={(e) => setMaxDuration(Number(e.target.value))}
                  className="w-full accent-[var(--accent-blue)]"
                />
              </FilterGroup>
            </div>
          </aside>

          {/* Results */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">{results.length}</span> programs found
                {query && (
                  <>
                    {" "}for <span className="text-accent-blue font-medium">“{query}”</span>
                  </>
                )}
              </p>
            </div>

            {results.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {results.map((p) => (
                  <ProgramCard key={p.id} program={p} />
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-12 text-center border-glow">
                <p className="text-lg font-semibold mb-2">No programs match your filters</p>
                <p className="text-muted-foreground text-sm mb-5">
                  Try widening your filters or use Smart Search to expand related fields.
                </p>
                <button onClick={clearFilters} className="px-5 py-2.5 rounded-xl gradient-primary text-white text-sm font-semibold">
                  Reset filters
                </button>
              </div>
            )}
          </section>
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

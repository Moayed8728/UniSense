import { useMemo, useState } from "react";
import { Sparkles, Search as SearchIcon, Wand2, BookText, Cpu } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { programs } from "../../data/programs";

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

  const expansion = useMemo(() => ({
    rawQuery: submitted,
    expandedTerms: expandQuery(submitted),
  }), [submitted]);
  const expandedTermNames = expansion.expandedTerms.map((t) => t.term);

  const results = useMemo(() => {
    return programs
      .map((p) => {
        const matched = expandedTermNames.filter(
          (t) =>
            p.field.toLowerCase().includes(t.toLowerCase()) ||
            p.name.toLowerCase().includes(t.toLowerCase()) ||
            p.summary.toLowerCase().includes(t.toLowerCase())
        );
        return { program: p, matched };
      })
      .filter((r) => r.matched.length > 0);
  }, [expandedTermNames]);

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

        {/* Query expansion panel */}
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
              <div
                key={t.term}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-glass-border"
              >
                {t.source === "dictionary" ? (
                  <BookText className="w-4 h-4 text-accent-blue" />
                ) : (
                  <Cpu className="w-4 h-4 text-accent-pink" />
                )}
                <span className="font-medium">{t.term}</span>
                <span className="text-xs text-muted-foreground">w {t.weight.toFixed(2)}</span>
                <span
                  className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                    t.source === "dictionary"
                      ? "bg-accent-blue/15 text-accent-blue"
                      : "bg-accent-pink/15 text-accent-pink"
                  }`}
                >
                  {t.source === "dictionary" ? "synonyms" : "semantic"}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            This prototype uses local synonym and semantic groups, so no API key or backend service is required.
          </p>
        </div>

        {/* Results */}
        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Recommended programs from the UniSense database</h2>
            <p className="text-sm text-muted-foreground mt-1">Each result remains linked to its verified university parent record.</p>
          </div>
          <p className="text-muted-foreground mb-5">
            <span className="text-foreground font-semibold">{results.length}</span> programs found across{" "}
            {expansion.expandedTerms.length} expanded terms
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(({ program, matched }) => (
              <ProgramCard key={program.id} program={program} matchedTerms={matched} />
            ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}

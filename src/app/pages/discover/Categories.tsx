import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Tag, Search, ArrowRight, BookOpen } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { programs } from "../../data/programs";

export default function Categories() {
  const [selectedField, setSelectedField] = useState<string>("");
  const [query, setQuery] = useState("");

  const fields = useMemo(() => {
    const unique = Array.from(new Set(programs.map((p) => p.field))).sort();
    return unique;
  }, []);

  const filteredPrograms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((program) => {
      const matchesField = !selectedField || program.field === selectedField;
      const matchesQuery =
        !q ||
        program.name.toLowerCase().includes(q) ||
        program.university.toLowerCase().includes(q) ||
        program.field.toLowerCase().includes(q);
      return matchesField && matchesQuery;
    });
  }, [selectedField, query]);

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Hero Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-accent-blue font-semibold">
              <Tag className="w-4 h-4" />
              Explore by field of study
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Program <span className="text-gradient-hero">Categories</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Browse thousands of university programs grouped by academic discipline and field of study.
            </p>
          </div>
        </div>

        {/* Field Selector */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-muted-foreground">
            <BookOpen className="w-4 h-4" /> Select a field
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedField("")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                !selectedField
                  ? "bg-primary text-primary-foreground border-primary"
                  : "glass-card border-glass-border hover:bg-accent/10"
              }`}
            >
              All Fields
            </button>
            {fields.map((field) => (
              <button
                key={field}
                onClick={() => setSelectedField(field)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  selectedField === field
                    ? "bg-primary text-primary-foreground border-primary"
                    : "glass-card border-glass-border hover:bg-accent/10"
                }`}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        {/* Search within category */}
        <div className="glass-card rounded-2xl p-5 shadow-premium">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs in this category..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">{filteredPrograms.length}</span> programs
            {selectedField && ` in ${selectedField}`}
          </p>
          <Link to="/discover" className="text-sm text-accent-blue hover:underline flex items-center gap-1">
            Back to full search <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Results Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPrograms.slice(0, 24).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-14 text-center border-glow">
            <p className="text-lg text-muted-foreground">No programs found for the selected filters.</p>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Calendar, Clock, MapPin, Search, ArrowRight } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { programs, getUniversityById } from "../../data/programs";

export default function Deadlines() {
  const [query, setQuery] = useState("");
  const [selectedIntake, setSelectedIntake] = useState<string>("");

  const allIntakes = useMemo(() => {
    const unique = Array.from(new Set(programs.map((p) => p.intake))).sort();
    return unique;
  }, []);

  const programsByIntake = useMemo(() => {
    const grouped: Record<string, typeof programs> = {};
    programs.forEach((p) => {
      if (!grouped[p.intake]) grouped[p.intake] = [];
      grouped[p.intake].push(p);
    });
    return grouped;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = programs;

    if (selectedIntake) {
      list = list.filter((p) => p.intake === selectedIntake);
    }

    if (q) {
      list = list.filter((p) => {
        const uni = getUniversityById(p.universityId);
        const text = `${p.name} ${p.field} ${p.university} ${uni?.city ?? ""}`.toLowerCase();
        return text.includes(q);
      });
    }

    // Sort by intake (simple alpha for demo) then by name
    return [...list].sort((a, b) => a.intake.localeCompare(b.intake) || a.name.localeCompare(b.name));
  }, [query, selectedIntake]);

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Hero Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-accent-blue font-semibold">
              <Calendar className="w-4 h-4" />
              Never miss an opportunity
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Application <span className="text-gradient-hero">Deadlines</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Discover programs with upcoming or open application deadlines. Filter by intake month to plan your applications.
            </p>
          </div>
        </div>

        {/* Intake Filter Pills */}
        <div className="glass-card rounded-2xl p-6 shadow-premium">
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-muted-foreground">
            <Clock className="w-4 h-4" /> Filter by intake
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedIntake("")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                !selectedIntake ? "bg-primary text-primary-foreground border-primary" : "glass-card border-glass-border hover:bg-accent/10"
              }`}
            >
              All Intakes
            </button>
            {allIntakes.map((intake) => (
              <button
                key={intake}
                onClick={() => setSelectedIntake(intake)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  selectedIntake === intake ? "bg-primary text-primary-foreground border-primary" : "glass-card border-glass-border hover:bg-accent/10"
                }`}
              >
                {intake}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="glass-card rounded-2xl p-5 shadow-premium">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search program, university or city..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="text-foreground font-semibold">{filtered.length}</span> programs
            {selectedIntake && ` with ${selectedIntake} intake`}
          </p>
          <Link to="/browse" className="text-sm text-accent-blue hover:underline flex items-center gap-1">
            Browse all universities <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-14 text-center border-glow">
            <p className="text-lg text-muted-foreground">No programs match your current filters.</p>
            <p className="text-sm text-muted-foreground mt-2">Try selecting a different intake or clearing the search.</p>
          </div>
        )}

        {/* Helpful note */}
        <div className="text-xs text-muted-foreground px-2">
          Deadlines are illustrative based on typical intake periods. Always verify official university websites for exact dates.
        </div>
      </div>
    </StudentLayout>
  );
}

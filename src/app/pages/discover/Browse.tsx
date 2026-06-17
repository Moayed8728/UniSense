import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Building2, CheckCircle2, MapPin, Search, ArrowRight, BookOpen } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { universities } from "../../data/programs";

export default function Browse() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const browseUniversities = universities.filter((university) => university.programCount > 0);

  const countries = Array.from(new Set(browseUniversities.map((university) => university.country))).sort();
  const filteredUniversities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return browseUniversities.filter((university) => {
      const matchesQuery =
        !normalizedQuery ||
        university.name.toLowerCase().includes(normalizedQuery) ||
        university.shortName.toLowerCase().includes(normalizedQuery) ||
        university.city.toLowerCase().includes(normalizedQuery) ||
        university.mainFields.some((field) => field.toLowerCase().includes(normalizedQuery));
      return matchesQuery && (country === "all" || university.country === country);
    });
  }, [country, query]);

  return (
    <StudentLayout>
      <div className="space-y-8">
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[110px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-accent-blue font-semibold">
              <Building2 className="w-4 h-4" />
              University-first discovery
            </div>
            <h1 className="text-4xl font-bold mb-3">
              Browse <span className="text-gradient-hero">Universities</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Choose a verified university first, then explore the programs that belong to that institution.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 shadow-premium flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search university, city, or field..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none"
            />
          </div>
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="px-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none"
          >
            <option value="all">All countries</option>
            {countries.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">{filteredUniversities.length}</span> universities
          </p>
          <Link to="/smart-search" className="text-sm text-accent-blue hover:underline">Smart Search programs instead</Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <article key={university.id} className="glass-card rounded-2xl overflow-hidden shadow-premium glass-card-hover border-glow flex flex-col">
              <div className="relative h-36 overflow-hidden">
                <ImageWithFallback 
                  src={university.image} 
                  alt={university.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/75 border border-success/30 text-success text-xs font-semibold backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 shrink-0">
                    <Building2 className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg leading-snug">{university.name}</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {university.city}, {university.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{university.programCount}</span>
                  <span className="text-muted-foreground">programs in this prototype</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {university.mainFields.slice(0, 4).map((field) => (
                    <span key={field} className="px-2.5 py-1 rounded-lg bg-muted text-xs text-muted-foreground">{field}</span>
                  ))}
                </div>

                <Link
                  to={`/universities/${university.id}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 py-3 rounded-xl gradient-primary text-white font-semibold shadow-premium"
                >
                  View University Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}

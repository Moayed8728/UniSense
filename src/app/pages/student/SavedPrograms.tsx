import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Clock, DollarSign, GraduationCap, Heart, MapPin, Search, Trash2 } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { formatDuration, formatFee, getUniversityById, programs } from "../../data/programs";
import { FAVORITES_CHANGED_EVENT, getFavoriteProgramIds, setFavoriteProgram } from "../../lib/favorites";

export default function SavedPrograms() {
  const [favoriteIds, setFavoriteIds] = useState(getFavoriteProgramIds);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const sync = () => setFavoriteIds(getFavoriteProgramIds());
    window.addEventListener(FAVORITES_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const savedPrograms = useMemo(() => programs
    .filter((program) => favoriteIds.includes(program.id))
    .filter((program) => {
      const university = getUniversityById(program.universityId);
      const text = `${program.name} ${program.field} ${university?.name ?? program.university}`.toLowerCase();
      return text.includes(query.trim().toLowerCase());
    }), [favoriteIds, query]);

  const remove = (id: string) => {
    setFavoriteProgram(id, false);
    setFavoriteIds(getFavoriteProgramIds());
  };

  return (
    <StudentLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4"><Heart className="w-4 h-4 fill-current" /> Your shortlist</div>
            <h1 className="text-4xl font-bold mb-3">Saved <span className="text-gradient-hero">Programs</span></h1>
            <p className="text-muted-foreground text-lg">Keep promising programs together with the universities that offer them.</p>
          </div>
        </section>

        <div className="glass-card rounded-2xl p-5 shadow-premium">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search saved program or university..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none" />
          </div>
        </div>

        {savedPrograms.length ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {savedPrograms.map((program) => {
              const university = getUniversityById(program.universityId);
              return (
                <article key={program.id} className="glass-card rounded-2xl p-6 shadow-premium border-glow flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-primary/10"><GraduationCap className="w-6 h-6 text-primary" /></div>
                    <button onClick={() => remove(program.id)} className="p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10" aria-label="Remove saved program"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <h2 className="text-xl font-semibold mt-5">{program.name}</h2>
                  <p className="text-sm font-medium mt-2">{university?.name ?? program.university}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1"><MapPin className="w-3.5 h-3.5" />{university?.city}, {university?.country}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground my-5">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent-cyan" />{formatDuration(program.durationMonths)}</span>
                    <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-success" />{formatFee(program.tuitionMin, program.tuitionMax)}</span>
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <Link to={`/programs/${program.id}`} className="text-center py-2.5 glass-card border border-glass-border rounded-xl text-sm font-semibold">View Details</Link>
                    <Link to="/student/compare" className="text-center py-2.5 gradient-primary text-white rounded-xl text-sm font-semibold">Compare</Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-14 text-center border-glow">
            <Heart className="w-14 h-14 text-primary mx-auto mb-5" />
            <h2 className="text-2xl font-bold mb-2">No saved programs yet</h2>
            <p className="text-muted-foreground mb-6">Save a program from search, university details, or recommendations.</p>
            <Link to="/discover" className="inline-flex px-6 py-3 gradient-primary text-white rounded-xl font-semibold">Search Programs</Link>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}

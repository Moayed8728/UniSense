import { Link } from "react-router";
import { MapPin, Clock, GraduationCap, Star, Eye, DollarSign, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Program, formatFee, formatDuration, getUniversityById } from "../data/programs";
import { isFavoriteProgram, toggleFavoriteProgram } from "../lib/favorites";

interface ProgramCardProps {
  program: Program;
  /** Optional snippet of highlighted matched terms (used by Smart Search). */
  matchedTerms?: string[];
}

export function ProgramCard({ program, matchedTerms }: ProgramCardProps) {
  const university = getUniversityById(program.universityId);
  const [favorite, setFavorite] = useState(() => isFavoriteProgram(program.id));

  const handleFavorite = () => {
    const nextFavorite = toggleFavoriteProgram(program.id);
    setFavorite(nextFavorite);
    toast.success(nextFavorite ? "Program added to favorites" : "Program removed from favorites");
  };

  return (
    <article className="group glass-card rounded-2xl overflow-hidden shadow-premium glass-card-hover border-glow flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-background/70 backdrop-blur-sm text-xs font-semibold text-accent-blue">
          <GraduationCap className="w-3.5 h-3.5" />
          {program.degreeLevel}
        </span>
        <span className="absolute top-3 right-14 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-background/70 backdrop-blur-sm text-xs font-semibold text-warning">
          <Star className="w-3.5 h-3.5 fill-warning" />
          {program.rating}
        </span>
        <button
          type="button"
          onClick={handleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm border transition-all ${
            favorite
              ? "bg-accent-pink/20 border-accent-pink/40 text-accent-pink"
              : "bg-background/70 border-glass-border text-muted-foreground hover:text-accent-pink"
          }`}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-lg leading-snug mb-1 group-hover:text-accent-blue transition-colors">
          {program.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Offered by: <span className="text-foreground font-medium">{university?.name ?? program.university}</span>
        </p>

        {matchedTerms && matchedTerms.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {matchedTerms.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md bg-accent-violet/15 text-accent-violet text-[11px] font-medium border border-accent-violet/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent-blue" />
            {university?.city ? `${university.city}, ` : ""}{university?.country ?? program.country}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent-cyan" />
            {formatDuration(program.durationMonths)}
          </span>
          <span className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-success" />
            {formatFee(program.tuitionMin, program.tuitionMax)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-accent-violet" />
            {program.viewCount.toLocaleString()} views
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
            {program.field}
          </span>
          <Link to={`/programs/${program.id}`} className="text-sm font-semibold text-accent-blue group-hover:gap-2 inline-flex items-center gap-1 transition-all">
            View details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

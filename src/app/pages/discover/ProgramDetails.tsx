import { Link, useParams } from "react-router";
import {
  MapPin,
  Clock,
  GraduationCap,
  Star,
  Eye,
  DollarSign,
  CalendarDays,
  Languages,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  ArrowLeft,
  Heart,
  GitCompare,
} from "lucide-react";
import { useState } from "react";
import { StudentLayout } from "../../components/StudentLayout";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { StatusBadge } from "../../components/StatusBadge";
import { programs, formatFee, formatDuration, getUniversityById } from "../../data/programs";
import { toast } from "sonner";
import { isFavoriteProgram, toggleFavoriteProgram } from "../../lib/favorites";

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id) ?? programs[0];
  const university = getUniversityById(program.universityId);
  const [favorite, setFavorite] = useState(() => isFavoriteProgram(program.id));

  const handleFavorite = () => {
    const nextFavorite = toggleFavoriteProgram(program.id);
    setFavorite(nextFavorite);
    toast.success(nextFavorite ? "Program added to favorites" : "Program removed from favorites");
  };

  const handleCompare = () => {
    toast.success(`${program.name} is ready to compare.`);
  };

  const allUnverified = program.sources.every((s) => s.verificationStatus !== "verified");

  const facts = [
    { icon: GraduationCap, label: "Degree Level", value: program.degreeLevel, color: "text-accent-blue" },
    { icon: MapPin, label: "Country", value: program.country, color: "text-accent-cyan" },
    { icon: DollarSign, label: "Tuition", value: formatFee(program.tuitionMin, program.tuitionMax), color: "text-success" },
    { icon: Clock, label: "Duration", value: formatDuration(program.durationMonths), color: "text-accent-violet" },
    { icon: CalendarDays, label: "Intake", value: program.intake, color: "text-warning" },
    { icon: Languages, label: "Language", value: program.language, color: "text-accent-pink" },
  ];

  return (
    <StudentLayout>
      <div className="space-y-8">
        <Link
          to="/discover"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to search
        </Link>

        {/* Hero */}
        <div className="relative overflow-hidden glass-card rounded-3xl shadow-premium-lg border-glow">
          <div className="relative h-64">
            <ImageWithFallback src={program.image} alt={program.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-background/70 backdrop-blur-sm text-xs font-semibold text-accent-blue">
                  <GraduationCap className="w-3.5 h-3.5" /> {program.degreeLevel}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-background/70 backdrop-blur-sm text-xs font-semibold text-warning">
                  <Star className="w-3.5 h-3.5 fill-warning" /> {program.rating}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-background/70 backdrop-blur-sm text-xs font-semibold text-muted-foreground">
                  <Eye className="w-3.5 h-3.5" /> {program.viewCount.toLocaleString()} views
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-1">{program.name}</h1>
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Offered by:{" "}
                <Link to={`/universities/${program.universityId}`} className="text-foreground hover:text-accent-blue font-semibold">
                  {university?.name ?? program.university}
                </Link>
                · {university?.country ?? program.country}
              </p>
            </div>
          </div>
        </div>

        {/* Source verification warning (3.3 rule) */}
        {allUnverified && (
          <div className="glass-card rounded-2xl p-5 shadow-premium border-l-4 border-warning flex items-start gap-4">
            <div className="bg-warning/10 p-2.5 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-warning mb-1">Sources pending verification</h3>
              <p className="text-sm text-muted-foreground">
                The official sources for this program have not yet been verified by an administrator. Please confirm details on the university website.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick facts */}
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <h2 className="text-xl font-semibold mb-5">At a glance</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {facts.map((f) => (
                  <div key={f.label}>
                    <div className={`flex items-center gap-2 mb-1 ${f.color}`}>
                      <f.icon className="w-4 h-4" />
                      <span className="text-xs text-muted-foreground">{f.label}</span>
                    </div>
                    <p className="font-semibold">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <h2 className="text-xl font-semibold mb-3">Program Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{program.summary}</p>
            </div>

            {/* Requirements */}
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <h2 className="text-xl font-semibold mb-4">Admission Requirements</h2>
              <ul className="space-y-3">
                {program.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {university && (
              <Link to={`/universities/${university.id}`} className="block glass-card rounded-2xl p-6 shadow-premium border-glow glass-card-hover">
                <p className="text-xs text-muted-foreground mb-1">University parent record</p>
                <h3 className="font-semibold text-lg">{university.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{university.city}, {university.country}</p>
                <p className="text-sm text-accent-blue font-semibold mt-3">View University Programs →</p>
              </Link>
            )}
            <div className="glass-card rounded-2xl p-6 shadow-premium-lg border-glow">
              <p className="text-sm text-muted-foreground mb-1">Annual tuition</p>
              <p className="text-3xl font-bold mb-5">{formatFee(program.tuitionMin, program.tuitionMax)}</p>
              <a
                href={program.sources[0]?.url}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3 rounded-xl gradient-primary text-white font-semibold shadow-premium hover:shadow-premium-lg transition-all mb-3"
              >
                Visit Official Page
              </a>
              <button
                type="button"
                onClick={handleFavorite}
                className={`w-full py-3 rounded-xl glass-card font-semibold border-glow transition-all inline-flex items-center justify-center gap-2 ${
                  favorite ? "text-accent-pink" : "text-foreground"
                }`}
              >
                <Heart className={`w-4 h-4 ${favorite ? "fill-current" : ""}`} />
                {favorite ? "Remove Saved Program" : "Save Program"}
              </button>
              <Link
                to="/student/compare"
                onClick={handleCompare}
                className="mt-3 w-full py-3 rounded-xl glass-card font-semibold border-glow transition-all inline-flex items-center justify-center gap-2"
              >
                <GitCompare className="w-4 h-4" />
                Add to Compare
              </Link>
              <div className="grid grid-cols-2 gap-3 mt-5 text-xs">
                <div className="p-3 rounded-xl bg-success/10"><p className="text-muted-foreground">Source status</p><p className="text-success font-semibold mt-1">Verified</p></div>
                <div className="p-3 rounded-xl bg-accent-blue/10"><p className="text-muted-foreground">Publication</p><p className="text-accent-blue font-semibold mt-1">Published</p></div>
              </div>
            </div>

            {/* Source references (3.3) */}
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <h3 className="font-semibold text-lg mb-4">Official Sources</h3>
              <div className="space-y-3">
                {program.sources.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 p-3 rounded-xl glass-card-hover border border-glass-border group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-accent-blue transition-colors">
                        {s.label}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{s.url}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <StatusBadge status={s.verificationStatus} />
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

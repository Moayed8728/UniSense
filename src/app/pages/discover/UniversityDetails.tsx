import { Link, useParams } from "react-router";
import { ArrowLeft, Building2, CheckCircle2, ExternalLink, Globe, MapPin, BookOpen } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { getProgramsByUniversity, getUniversityById, universities } from "../../data/programs";
import { StatusBadge } from "../../components/StatusBadge";

export default function UniversityDetails() {
  const { id = "" } = useParams();
  const university = getUniversityById(id) ?? universities[0];
  const universityPrograms = getProgramsByUniversity(university.id);

  return (
    <StudentLayout>
      <div className="space-y-8">
        <Link to="/browse" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-blue">
          <ArrowLeft className="w-4 h-4" />
          Back to universities
        </Link>

        <section className="relative overflow-hidden glass-card rounded-3xl shadow-premium-lg border-glow">
          <div className="relative h-72">
            <ImageWithFallback 
              src={university.image} 
              alt={university.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <StatusBadge status={university.verificationStatus} />
                <span className="px-2.5 py-1 rounded-full bg-background/70 text-xs text-muted-foreground backdrop-blur-sm">
                  {universityPrograms.length} programs
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{university.name}</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {university.city}, {university.country}
              </p>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card rounded-2xl p-6 shadow-premium border-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-accent-blue/10"><Building2 className="w-5 h-5 text-accent-blue" /></div>
              <h2 className="text-xl font-semibold">University Profile</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">{university.description}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4"><p className="text-xs text-muted-foreground">Short name</p><p className="font-semibold mt-1">{university.shortName}</p></div>
              <div className="glass-card rounded-xl p-4"><p className="text-xs text-muted-foreground">Location</p><p className="font-semibold mt-1">{university.city}</p></div>
              <div className="glass-card rounded-xl p-4"><p className="text-xs text-muted-foreground">Verification</p><p className="font-semibold text-success mt-1 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Verified</p></div>
            </div>
          </div>

          <aside className="glass-card rounded-2xl p-6 shadow-premium border-glow">
            <h2 className="font-semibold text-lg mb-4">Official Sources</h2>
            <div className="space-y-3">
              {university.officialSources.map((source) => (
                <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="block p-3 rounded-xl border border-glass-border glass-card-hover">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium">{source.label}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-success">
                    <Globe className="w-3.5 h-3.5" />
                    Official university domain
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> Programs offered by {university.shortName}</h2>
              <p className="text-sm text-muted-foreground mt-1">Programs are stored under their related university and published from verified sources.</p>
            </div>
          </div>
          {universityPrograms.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {universityPrograms.map((program) => <ProgramCard key={program.id} program={program} />)}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8 text-center text-muted-foreground">
              No published programs are loaded for this university in the current prototype dataset.
            </div>
          )}
        </section>
      </div>
    </StudentLayout>
  );
}

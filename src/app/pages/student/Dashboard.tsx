import { useNavigate } from "react-router";
import { BookOpen, GitCompare, GraduationCap, Heart, MessageCircle, Search, Sparkles, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { StatsCard } from "../../components/StatsCard";
import { StudentLayout } from "../../components/StudentLayout";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <div className="space-y-8">
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">University-first discovery</span>
            </div>
            <h1 className="text-4xl font-bold mb-3">Find Your Perfect <span className="text-gradient-hero">Program</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl">Discover verified programs under their related universities with intelligent matching and comparison tools.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Programs Viewed" value={24} icon={BookOpen} trend="+8 this week" trendUp color="blue" />
          <StatsCard title="Saved Programs" value={12} icon={Heart} trend="3 strong matches" color="purple" />
          <StatsCard title="Match Score" value="87%" icon={TrendingUp} trend="+5% improved" trendUp color="green" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard icon={Search} title="Search Programs" description="Search verified university programs by institution, field, country, tuition, and duration." action="Start Searching" onClick={() => navigate("/discover")} />
          <FeatureCard icon={Sparkles} title="Recommended Programs" description="See programs from the UniSense database matched to your study preferences." action="View Recommendations" onClick={() => navigate("/student/recommendations")} violet />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <QuickCard icon={GitCompare} title="Compare Programs" description="Compare programs with their university, tuition, requirements, and duration." onClick={() => navigate("/student/compare")} />
          <QuickCard icon={MessageCircle} title="Smart Search" description="Expand academic terms and discover closely related program fields." onClick={() => navigate("/smart-search")} />
          <QuickCard icon={GraduationCap} title="Browse Universities" description="Choose a verified university first, then explore its programs." onClick={() => navigate("/browse")} />
        </div>
      </div>
    </StudentLayout>
  );
}

function FeatureCard({ icon: Icon, title, description, action, onClick, violet = false }: { icon: typeof Search; title: string; description: string; action: string; onClick: () => void; violet?: boolean }) {
  return (
    <div className="group relative glass-card rounded-3xl p-8 shadow-premium-lg glass-card-hover border-glow overflow-hidden">
      <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className={`w-fit p-4 rounded-2xl mb-6 ${violet ? "bg-accent-violet/10" : "bg-primary/10"}`}><Icon className={`w-10 h-10 ${violet ? "text-accent-violet" : "text-primary"}`} /></div>
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        <button onClick={onClick} className={`px-6 py-3 text-white rounded-xl font-semibold shadow-premium ${violet ? "bg-accent-violet" : "gradient-primary"}`}>{action}</button>
      </div>
    </div>
  );
}

function QuickCard({ icon: Icon, title, description, onClick }: { icon: typeof Search; title: string; description: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-left glass-card rounded-2xl p-6 shadow-premium border-glow glass-card-hover">
      <div className="w-fit bg-accent-blue/10 p-3 rounded-xl mb-4"><Icon className="w-6 h-6 text-accent-blue" /></div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </button>
  );
}

import { useState } from "react";
import { Globe, BookOpen, GraduationCap, Building2, ChevronRight } from "lucide-react";
import { StudentLayout } from "../../components/StudentLayout";
import { ProgramCard } from "../../components/ProgramCard";
import { browseCategories, programs, BrowseCategory } from "../../data/programs";

const tabs = [
  { key: "country", label: "By Country", icon: Globe },
  { key: "field", label: "By Field", icon: BookOpen },
  { key: "degree", label: "By Degree", icon: GraduationCap },
  { key: "university", label: "By University", icon: Building2 },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function Browse() {
  const [tab, setTab] = useState<TabKey>("country");
  const [expanded, setExpanded] = useState<BrowseCategory | null>(null);

  const categories = browseCategories[tab];

  // Pagination note (3.2): max 50 programs per expanded category page.
  const pageSize = 50;
  const expandedPrograms = expanded
    ? programs.filter((p) =>
        tab === "country"
          ? p.country === expanded.value
          : tab === "degree"
          ? p.degreeLevel === expanded.value
          : tab === "field"
          ? p.field === expanded.value || p.field.includes(expanded.value)
          : true
      )
    : [];

  return (
    <StudentLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[110px]" />
          <div className="relative">
            <h1 className="text-4xl font-bold mb-3">
              Browse <span className="text-gradient-hero">Programs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Not sure where to start? Explore programs by country, field, degree level, or university.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setTab(t.key);
                setExpanded(null);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all border ${
                tab === t.key
                  ? "bg-accent-blue/20 text-accent-blue border-accent-blue/40 shadow-sm"
                  : "glass-card text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = tabs.find((t) => t.key === cat.type)!.icon;
            const isOpen = expanded?.value === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setExpanded(isOpen ? null : cat)}
                className={`group text-left glass-card rounded-2xl p-6 shadow-premium glass-card-hover border-glow transition-all ${
                  isOpen ? "ring-2 ring-accent-blue/40" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-accent-blue blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-accent-blue/10 p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-90 text-accent-blue" : "group-hover:translate-x-1"}`}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{cat.value}</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="text-accent-blue font-semibold">{cat.programCount.toLocaleString()}</span> programs
                </p>
              </button>
            );
          })}
        </div>

        {/* Expanded category programs */}
        {expanded && (
          <section className="glass-card rounded-2xl p-6 shadow-premium-lg border-glow">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold">
                Programs in <span className="text-accent-blue">{expanded.value}</span>
              </h2>
              <span className="text-sm text-muted-foreground">
                Showing 1–{Math.min(expandedPrograms.length, pageSize)} of {expanded.programCount.toLocaleString()}
              </span>
            </div>
            {expandedPrograms.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expandedPrograms.slice(0, pageSize).map((p) => (
                  <ProgramCard key={p.id} program={p} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Sample programs for this category are not loaded in this prototype.</p>
            )}
          </section>
        )}
      </div>
    </StudentLayout>
  );
}

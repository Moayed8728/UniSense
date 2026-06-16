import { useEffect, useState } from "react";
import { Clock, DollarSign, GraduationCap, Plus, Search, X } from "lucide-react";
import { toast } from "sonner";
import { StudentLayout } from "../../components/StudentLayout";
import { formatDuration, formatFee, getUniversityById, programs, type Program } from "../../data/programs";
import { COMPARISON_CHANGED_EVENT, getComparisonProgramIds, setComparisonProgramIds } from "../../lib/comparison";

export default function ComparePrograms() {
  const loadSelected = () => {
    const ids = getComparisonProgramIds();
    return ids.length
      ? ids.map((id) => programs.find((program) => program.id === id)).filter((program): program is Program => Boolean(program))
      : programs.slice(0, 3);
  };
  const [selected, setSelected] = useState<Program[]>(loadSelected);
  const [showPicker, setShowPicker] = useState(false);
  const [query, setQuery] = useState("");

  const addProgram = (program: Program) => {
    if (selected.length >= 4) return toast.error("You can compare up to four programs.");
    const next = [...selected, program];
    setSelected(next);
    setComparisonProgramIds(next.map((item) => item.id));
    setShowPicker(false);
  };

  useEffect(() => {
    const sync = () => setSelected(loadSelected());
    window.addEventListener(COMPARISON_CHANGED_EVENT, sync);
    return () => window.removeEventListener(COMPARISON_CHANGED_EVENT, sync);
  }, []);

  const removeProgram = (programId: string) => {
    const next = selected.filter((item) => item.id !== programId);
    setSelected(next);
    setComparisonProgramIds(next.map((item) => item.id));
  };

  return (
    <StudentLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="relative flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-primary font-semibold mb-4">Decision support</p>
              <h1 className="text-4xl font-bold mb-3">Compare <span className="text-gradient-hero">Programs</span></h1>
              <p className="text-muted-foreground text-lg">Compare programs side by side while keeping their university context visible.</p>
            </div>
            <button onClick={() => setShowPicker(true)} className="inline-flex items-center gap-2 px-5 py-3 gradient-primary text-white rounded-xl font-semibold"><Plus className="w-4 h-4" /> Add Program</button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {selected.map((program) => {
            const university = getUniversityById(program.universityId);
            return (
              <article key={program.id} className="glass-card rounded-2xl p-5 border-glow relative">
                <button onClick={() => removeProgram(program.id)} className="absolute right-4 top-4 p-1.5 rounded-lg text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4"><GraduationCap className="w-6 h-6 text-primary" /></div>
                <h2 className="font-semibold text-lg pr-6">{program.name}</h2>
                <p className="text-sm font-medium mt-2">{university?.name ?? program.university}</p>
                <p className="text-xs text-muted-foreground mt-1">{university?.city}, {university?.country}</p>
              </article>
            );
          })}
        </div>

        {selected.length ? (
          <div className="glass-card rounded-3xl shadow-premium-lg border-glow overflow-x-auto">
            <table className="w-full min-w-[850px]">
              <thead><tr className="border-b border-glass-border"><th className="p-5 text-left text-muted-foreground">Category</th>{selected.map((program) => <th key={program.id} className="p-5 text-left"><span className="block">{program.name}</span><span className="text-xs text-muted-foreground font-normal">{getUniversityById(program.universityId)?.name}</span></th>)}</tr></thead>
              <tbody>
                <Row label="Degree level" programs={selected} render={(program) => program.degreeLevel} />
                <Row label="Field of study" programs={selected} render={(program) => program.field} />
                <Row label="Duration" icon={Clock} programs={selected} render={(program) => formatDuration(program.durationMonths)} />
                <Row label="Annual tuition" icon={DollarSign} programs={selected} render={(program) => formatFee(program.tuitionMin, program.tuitionMax)} />
                <Row label="Intake" programs={selected} render={(program) => program.intake} />
                <Row label="Language" programs={selected} render={(program) => program.language} />
                <Row label="Admission requirements" programs={selected} render={(program) => program.requirements.slice(0, 2).join("; ")} />
              </tbody>
            </table>
          </div>
        ) : <div className="glass-card rounded-3xl p-12 text-center text-muted-foreground">Add programs from the verified UniSense database to begin comparing.</div>}
      </div>

      {showPicker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <button className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowPicker(false)} aria-label="Close picker" />
          <div className="relative glass-card rounded-3xl border-glow w-full max-w-2xl max-h-[75vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-glass-border"><h2 className="text-2xl font-bold">Add a Program</h2><p className="text-sm text-muted-foreground">Choose from existing university-linked programs.</p></div>
            <div className="p-5 border-b border-glass-border relative"><Search className="absolute left-9 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border" placeholder="Search program or university..." /></div>
            <div className="p-5 overflow-y-auto space-y-3">
              {programs.filter((program) => !selected.some((item) => item.id === program.id)).filter((program) => `${program.name} ${program.university}`.toLowerCase().includes(query.toLowerCase())).map((program) => (
                <button key={program.id} onClick={() => addProgram(program)} className="w-full text-left p-4 glass-card rounded-xl border border-glass-border hover:border-primary/40">
                  <p className="font-semibold">{program.name}</p><p className="text-sm text-muted-foreground">{program.university} · {program.degreeLevel}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </StudentLayout>
  );
}

function Row({ label, programs, render, icon: Icon }: { label: string; programs: Program[]; render: (program: Program) => React.ReactNode; icon?: typeof Clock }) {
  return (
    <tr className="border-b border-glass-border last:border-0 hover:bg-white/[0.02]">
      <td className="p-5 text-muted-foreground"><span className="flex items-center gap-2">{Icon && <Icon className="w-4 h-4" />}{label}</span></td>
      {programs.map((program) => <td key={program.id} className="p-5 text-sm">{render(program)}</td>)}
    </tr>
  );
}

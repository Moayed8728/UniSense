import { Link, useNavigate } from "react-router";
import { Sparkles, Search, Heart, GitCompare, LogOut, Plus, X, Download, Save, TrendingUp, Award, DollarSign, Users, MapPin, Briefcase, Clock, Calendar, GraduationCap, Globe, BookOpen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { downloadTextFile } from "../../lib/prototype";
import { getUniversityById, programs as programDatabase, type Program as DatabaseProgram } from "../../data/programs";

interface Program {
  id: string;
  universityId: string;
  name: string;
  university: string;
  country: string;
  degreeLevel: string;
  fieldOfStudy: string;
  duration: string;
  intake: string;
  tuitionFee: string;
  scholarships: string;
  entryRequirements: string;
  englishRequirement: string;
  ranking: string;
  location: string;
  careerProspects: string;
  industryPartnerships: string;
  badges?: string[];
}

const formatCurrency = (value: number) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
}).format(value);

const toComparisonProgram = (program: DatabaseProgram): Program => {
  const university = getUniversityById(program.universityId);
  return {
    id: program.id,
    universityId: program.universityId,
    name: program.name,
    university: university?.name ?? program.university,
    country: university?.country ?? program.country,
    degreeLevel: program.degreeLevel,
    fieldOfStudy: program.field,
    duration: `${Math.round(program.durationMonths / 12)} year${program.durationMonths === 12 ? "" : "s"}`,
    intake: program.intake,
    tuitionFee: `${formatCurrency(program.tuitionMin)} - ${formatCurrency(program.tuitionMax)}/year`,
    scholarships: "Check university scholarship options",
    entryRequirements: program.requirements.join(", "),
    englishRequirement: program.language,
    ranking: "Verified UniSense institution",
    location: university ? `${university.city}, ${university.country}` : program.country,
    careerProspects: `Strong opportunities in ${program.field}`,
    industryPartnerships: "See official university program sources",
    badges: [],
  };
};

const samplePrograms = programDatabase.slice(0, 3).map(toComparisonProgram);

export default function ComparePrograms() {
  const navigate = useNavigate();
  const [selectedPrograms, setSelectedPrograms] = useState<Program[]>(samplePrograms);
  const [showProgramPicker, setShowProgramPicker] = useState(false);
  const [programSearch, setProgramSearch] = useState("");

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/auth/login");
  };

  const handleRemoveProgram = (id: string) => {
    setSelectedPrograms(selectedPrograms.filter(p => p.id !== id));
    toast.success("Program removed from comparison");
  };

  const handleAddProgram = () => {
    if (selectedPrograms.length >= 4) {
      toast.error("You can compare up to 4 programs. Remove one before adding another.");
      return;
    }
    setShowProgramPicker(true);
  };

  const addProgramToComparison = (program: DatabaseProgram) => {
    if (selectedPrograms.some((selected) => selected.id === program.id)) {
      toast.info("This program is already in the comparison.");
      return;
    }
    setSelectedPrograms((current) => [...current, toComparisonProgram(program)]);
    setShowProgramPicker(false);
    setProgramSearch("");
    toast.success(`${program.name} added to comparison`);
  };

  const handleSaveComparison = () => {
    toast.success("Comparison saved successfully");
  };

  const handleExportPDF = () => {
    const summary = selectedPrograms
      .map((program) => `${program.name}\n${program.university}\n${program.tuitionFee}\n${program.duration}`)
      .join("\n\n");
    downloadTextFile("unisense-program-comparison.txt", summary);
    toast.success("Comparison downloaded.");
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-glass-border shadow-premium">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                <div className="relative gradient-primary p-2 rounded-xl shadow-premium">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gradient-primary">UniSense</h1>
                <p className="text-xs text-muted-foreground">Student Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/discover"
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">Search Programs</span>
              </Link>
              <Link
                to="/smart-search"
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Recommendations</span>
              </Link>
              <Link
                to="/student/compare"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium bg-primary/20 text-primary border border-primary/30 shadow-sm"
              >
                <GitCompare className="w-4 h-4" />
                <span className="text-sm">Compare Programs</span>
              </Link>
              <Link
                to="/student/saved"
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Saved</span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all border border-transparent hover:border-destructive/20"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {selectedPrograms.length === 0 ? (
          // Empty State
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="relative mb-8 w-fit mx-auto">
                <div className="absolute inset-0 bg-primary/30 blur-3xl" />
                <div className="relative glass-card p-12 rounded-3xl border-glow">
                  <GitCompare className="w-24 h-24 text-primary mx-auto" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">No programs selected yet</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Add at least two programs to begin comparison
              </p>
              <button
                onClick={handleAddProgram}
                className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Browse Programs
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Page Header */}
            <div className="relative overflow-hidden glass-card rounded-3xl p-10 shadow-premium-lg border-glow">
              <div className="absolute inset-0 gradient-hero opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <GitCompare className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">Program Comparison</span>
                  </div>
                  <h1 className="text-4xl font-bold mb-3">
                    Compare <span className="text-gradient-hero">Programs</span>
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    Compare university programs side-by-side and evaluate the best option for your academic goals, budget, and preferences.
                  </p>
                </div>
                <button
                  onClick={handleAddProgram}
                  className="px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Program
                </button>
              </div>
            </div>

            {/* Program Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {selectedPrograms.map((program) => (
                <div key={program.id} className="glass-card rounded-2xl p-6 shadow-premium border-glow relative group">
                  <button
                    onClick={() => handleRemoveProgram(program.id)}
                    className="absolute top-4 right-4 p-2 glass-card rounded-lg hover:bg-destructive/20 hover:text-destructive transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="mb-4">
                    <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-4 border border-glass-border">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 pr-8">{program.name}</h3>
                  <p className="text-muted-foreground mb-1">Offered by: <span className="text-foreground font-medium">{program.university}</span></p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{program.country}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg text-sm">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      <span>{program.degreeLevel}</span>
                    </div>
                  </div>

                  {program.badges && program.badges.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-lg border border-primary/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Comparison Matrix */}
            <div className="glass-card rounded-3xl shadow-premium-lg border-glow overflow-hidden">
              <div className="p-8 border-b border-glass-border">
                <h2 className="text-2xl font-bold">Detailed Comparison</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-glass-border">
                      <th className="text-left p-6 text-muted-foreground font-medium w-1/4">Category</th>
                      {selectedPrograms.map((program) => (
                        <th key={program.id} className="text-left p-6 font-semibold w-1/4">
                          <span className="block">{program.name}</span>
                          <span className="block text-sm text-muted-foreground font-normal mt-1">{program.university}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Academic Information */}
                    <tr className="border-b border-glass-border bg-primary/5">
                      <td className="p-6" colSpan={selectedPrograms.length + 1}>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-lg">Academic Information</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Degree Level</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.degreeLevel}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Field of Study</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.fieldOfStudy}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Duration
                      </td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.duration}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Intake
                      </td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.intake}</td>
                      ))}
                    </tr>

                    {/* Financial Information */}
                    <tr className="border-b border-glass-border bg-success/5">
                      <td className="p-6" colSpan={selectedPrograms.length + 1}>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-success" />
                          <span className="font-semibold text-lg">Financial Information</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Tuition Fee Range</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">
                          <div className="flex items-center gap-2">
                            <span>{program.tuitionFee}</span>
                            {program.badges?.includes("Lowest Tuition") && (
                              <span className="px-2 py-0.5 text-xs font-semibold bg-success/20 text-success rounded border border-success/30">
                                Lowest
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Scholarship Availability</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">
                          <div className="flex items-center gap-2">
                            <span>{program.scholarships}</span>
                            {program.badges?.includes("Most Scholarships") && (
                              <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded border border-primary/30">
                                Most
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Admission Information */}
                    <tr className="border-b border-glass-border bg-accent-blue/5">
                      <td className="p-6" colSpan={selectedPrograms.length + 1}>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-accent-blue" />
                          <span className="font-semibold text-lg">Admission Information</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Entry Requirements</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.entryRequirements}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">English Requirement</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.englishRequirement}</td>
                      ))}
                    </tr>

                    {/* Institution Information */}
                    <tr className="border-b border-glass-border bg-warning/5">
                      <td className="p-6" colSpan={selectedPrograms.length + 1}>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-warning" />
                          <span className="font-semibold text-lg">Institution Information</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">University Ranking</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">
                          <div className="flex items-center gap-2">
                            <span>{program.ranking}</span>
                            {program.badges?.includes("Best Ranking") && (
                              <span className="px-2 py-0.5 text-xs font-semibold bg-warning/20 text-warning rounded border border-warning/30">
                                Best
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Country</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.country}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Campus Location
                      </td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.location}</td>
                      ))}
                    </tr>

                    {/* Career Information */}
                    <tr className="border-b border-glass-border bg-accent-violet/5">
                      <td className="p-6" colSpan={selectedPrograms.length + 1}>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-accent-violet" />
                          <span className="font-semibold text-lg">Career Information</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground">Career Prospects</td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.careerProspects}</td>
                      ))}
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Industry Partnerships
                      </td>
                      {selectedPrograms.map((program) => (
                        <td key={program.id} className="p-6">{program.industryPartnerships}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Decision Support Insights */}
            <div className="glass-card rounded-3xl p-8 shadow-premium-lg border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                  <div className="relative bg-primary/10 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Decision Support Insights</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Highest Ranked */}
                <div className="glass-card rounded-2xl p-6 border-glow">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-warning blur-lg opacity-30" />
                      <div className="relative bg-warning/10 p-3 rounded-xl">
                        <Award className="w-6 h-6 text-warning" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Highest Ranked University</h3>
                      <p className="text-muted-foreground mb-3">
                        <strong className="text-foreground">University of Melbourne</strong> ranks #33 globally, offering world-class education and international recognition.
                      </p>
                      <span className="inline-flex px-3 py-1.5 bg-warning/20 text-warning rounded-lg text-sm font-semibold border border-warning/30">
                        Recommended for prestige
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lowest Tuition */}
                <div className="glass-card rounded-2xl p-6 border-glow">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-success blur-lg opacity-30" />
                      <div className="relative bg-success/10 p-3 rounded-xl">
                        <DollarSign className="w-6 h-6 text-success" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Lowest Tuition Option</h3>
                      <p className="text-muted-foreground mb-3">
                        <strong className="text-foreground">Monash University</strong> offers the most affordable tuition with excellent value and comprehensive scholarship options.
                      </p>
                      <span className="inline-flex px-3 py-1.5 bg-success/20 text-success rounded-lg text-sm font-semibold border border-success/30">
                        Best for budget
                      </span>
                    </div>
                  </div>
                </div>

                {/* Best Career */}
                <div className="glass-card rounded-2xl p-6 border-glow">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-accent-violet blur-lg opacity-30" />
                      <div className="relative bg-accent-violet/10 p-3 rounded-xl">
                        <Briefcase className="w-6 h-6 text-accent-violet" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Best Career Opportunities</h3>
                      <p className="text-muted-foreground mb-3">
                        <strong className="text-foreground">University of Melbourne</strong> has the highest employment rate (92%) and partnerships with top tech companies.
                      </p>
                      <span className="inline-flex px-3 py-1.5 bg-accent-violet/20 text-accent-violet rounded-lg text-sm font-semibold border border-accent-violet/30">
                        Top career prospects
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overall Recommendation */}
                <div className="glass-card rounded-2xl p-6 border-glow bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                      <div className="relative bg-primary/20 p-3 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">AI Recommended Choice</h3>
                      <p className="text-muted-foreground mb-3">
                        Based on your profile and preferences, <strong className="text-foreground">University of Melbourne</strong> offers the best overall balance of ranking, career outcomes, and program quality.
                      </p>
                      <span className="inline-flex px-3 py-1.5 bg-primary text-white rounded-lg text-sm font-semibold shadow-premium">
                        AI Top Pick
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Differences */}
              <div className="mt-8 pt-8 border-t border-glass-border">
                <h3 className="font-semibold text-lg mb-4">Key Differences</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass-card rounded-xl p-4 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="font-medium">Monash offers a 4-year program with industry placement, while others are 3-year programs</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                    <p className="font-medium">Each university focuses on different aspects: CS theory, SE practice, or IT applications</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">Melbourne vs Sydney - consider living costs and industry connections in each city</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleSaveComparison}
                className="px-8 py-4 glass-card border border-glass-border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all font-semibold flex items-center gap-2 shadow-premium"
              >
                <Save className="w-5 h-5" />
                Save Comparison
              </button>
              <button
                onClick={handleExportPDF}
                className="px-8 py-4 glass-card border border-glass-border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all font-semibold flex items-center gap-2 shadow-premium"
              >
                <Download className="w-5 h-5" />
                Export PDF
              </button>
              <button
                onClick={handleAddProgram}
                className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Compare Another Program
              </button>
            </div>
          </div>
        )}
      </main>

      {showProgramPicker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowProgramPicker(false)}
            aria-label="Close program picker"
          />
          <div className="relative glass-card rounded-3xl shadow-premium-xl border-glow w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b border-glass-border flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Add a Program</h2>
                <p className="text-sm text-muted-foreground mt-1">Choose a program from the UniSense database.</p>
              </div>
              <button onClick={() => setShowProgramPicker(false)} className="p-2 rounded-xl hover:bg-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 border-b border-glass-border">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  autoFocus
                  value={programSearch}
                  onChange={(event) => setProgramSearch(event.target.value)}
                  placeholder="Search program, university, field, or country..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-input-background border border-input-border focus:border-input-focus focus:outline-none"
                />
              </div>
            </div>

            <div className="p-5 overflow-y-auto space-y-3">
              {programDatabase
                .filter((program) => !selectedPrograms.some((selected) => selected.id === program.id))
                .filter((program) => {
                  const query = programSearch.trim().toLowerCase();
                  return !query || [program.name, program.university, program.field, program.country, program.degreeLevel]
                    .some((value) => value.toLowerCase().includes(query));
                })
                .map((program) => (
                  <button
                    key={program.id}
                    onClick={() => addProgramToComparison(program)}
                    className="w-full text-left glass-card rounded-2xl p-4 border border-glass-border hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold">{program.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {program.university} · {program.degreeLevel} · {program.field}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-white text-sm font-semibold">
                      <Plus className="w-4 h-4" />
                      Add
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

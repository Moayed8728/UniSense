import { Link, useNavigate } from "react-router";
import { Sparkles, Search, Heart, GitCompare, LogOut, Filter, BookOpen, Globe, Clock, DollarSign, Award, Trash2, Eye, ExternalLink, GraduationCap, MapPin, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatDuration, formatFee, getUniversityById, programs as programDatabase } from "../../data/programs";
import { FAVORITES_CHANGED_EVENT, getFavoriteProgramIds, setFavoriteProgram } from "../../lib/favorites";

interface SavedProgram {
  id: number | string;
  universityId: string;
  programName: string;
  universityName: string;
  universityLogo?: string;
  degreeLevel: string;
  country: string;
  tuitionFee: string;
  duration: string;
  ranking: string;
  savedDate: string;
  fieldOfStudy: string;
  entryRequirements: string;
  overview: string;
  sourceLink: string;
}

const samplePrograms: SavedProgram[] = [
  {
    id: 1,
    universityId: "unimelb",
    programName: "Bachelor of Computer Science",
    universityName: "University of Melbourne",
    degreeLevel: "Bachelor",
    country: "Australia",
    tuitionFee: "AUD $45,000 - $48,000/year",
    duration: "3 years",
    ranking: "#33 QS World Rankings",
    savedDate: "2026-05-30",
    fieldOfStudy: "Computer Science",
    entryRequirements: "ATAR 95+ or equivalent, IELTS 6.5",
    overview: "A comprehensive computer science program focusing on software development, algorithms, and systems design.",
    sourceLink: "https://www.unimelb.edu.au"
  },
  {
    id: 2,
    universityId: "monash",
    programName: "Bachelor of Software Engineering",
    universityName: "Monash University",
    degreeLevel: "Bachelor",
    country: "Australia",
    tuitionFee: "AUD $42,000 - $44,000/year",
    duration: "4 years",
    ranking: "#42 QS World Rankings",
    savedDate: "2026-05-29",
    fieldOfStudy: "Software Engineering",
    entryRequirements: "ATAR 90+ or equivalent, IELTS 6.5",
    overview: "Industry-focused software engineering degree with integrated work placement and practical projects.",
    sourceLink: "https://www.monash.edu"
  },
  {
    id: 3,
    universityId: "usyd",
    programName: "Bachelor of Information Technology",
    universityName: "University of Sydney",
    degreeLevel: "Bachelor",
    country: "Australia",
    tuitionFee: "AUD $46,000 - $49,000/year",
    duration: "3 years",
    ranking: "#41 QS World Rankings",
    savedDate: "2026-05-28",
    fieldOfStudy: "Information Technology",
    entryRequirements: "ATAR 92+ or equivalent, IELTS 7.0",
    overview: "Comprehensive IT program covering networks, security, databases, and enterprise systems.",
    sourceLink: "https://www.sydney.edu.au"
  },
  {
    id: 4,
    universityId: "nus",
    programName: "Bachelor of Data Science",
    universityName: "National University of Singapore",
    degreeLevel: "Bachelor",
    country: "Singapore",
    tuitionFee: "SGD $32,000 - $35,000/year",
    duration: "4 years",
    ranking: "#8 QS World Rankings",
    savedDate: "2026-05-27",
    fieldOfStudy: "Data Science",
    entryRequirements: "AAA/AAB A-Levels, IELTS 7.0",
    overview: "Cutting-edge data science program combining statistics, machine learning, and business analytics.",
    sourceLink: "https://www.nus.edu.sg"
  },
  {
    id: 5,
    universityId: "ubc",
    programName: "Bachelor of Computer Engineering",
    universityName: "University of British Columbia",
    degreeLevel: "Bachelor",
    country: "Canada",
    tuitionFee: "CAD $45,000 - $48,000/year",
    duration: "4 years",
    ranking: "#34 QS World Rankings",
    savedDate: "2026-05-26",
    fieldOfStudy: "Computer Engineering",
    entryRequirements: "High School Diploma 85%+, IELTS 6.5",
    overview: "Hardware and software integration focused program with co-op opportunities.",
    sourceLink: "https://www.ubc.ca"
  },
  {
    id: 6,
    universityId: "utoronto",
    programName: "Bachelor of Artificial Intelligence",
    universityName: "University of Toronto",
    degreeLevel: "Bachelor",
    country: "Canada",
    tuitionFee: "CAD $56,000 - $59,000/year",
    duration: "4 years",
    ranking: "#21 QS World Rankings",
    savedDate: "2026-05-25",
    fieldOfStudy: "Artificial Intelligence",
    entryRequirements: "High School Diploma 90%+, IELTS 7.0",
    overview: "Specialized AI program taught by world-leading researchers in machine learning and neural networks.",
    sourceLink: "https://www.utoronto.ca"
  },
  {
    id: 7,
    universityId: "imperial",
    programName: "Bachelor of Computer Science",
    universityName: "Imperial College London",
    degreeLevel: "Bachelor",
    country: "United Kingdom",
    tuitionFee: "GBP £35,000 - £38,000/year",
    duration: "3 years",
    ranking: "#6 QS World Rankings",
    savedDate: "2026-05-24",
    fieldOfStudy: "Computer Science",
    entryRequirements: "A*A*A A-Levels, IELTS 7.0",
    overview: "World-class computer science education in the heart of London with strong industry connections.",
    sourceLink: "https://www.imperial.ac.uk"
  },
  {
    id: 8,
    universityId: "unsw",
    programName: "Bachelor of Cybersecurity",
    universityName: "University of New South Wales",
    degreeLevel: "Bachelor",
    country: "Australia",
    tuitionFee: "AUD $47,000 - $50,000/year",
    duration: "3 years",
    ranking: "#43 QS World Rankings",
    savedDate: "2026-05-23",
    fieldOfStudy: "Cybersecurity",
    entryRequirements: "ATAR 93+ or equivalent, IELTS 6.5",
    overview: "Specialized cybersecurity program covering ethical hacking, network security, and digital forensics.",
    sourceLink: "https://www.unsw.edu.au"
  }
];

const getSavedPrograms = (): SavedProgram[] =>
  getFavoriteProgramIds()
    .map((id) => programDatabase.find((program) => program.id === id))
    .filter((program): program is NonNullable<typeof program> => Boolean(program))
    .map((program) => {
      const university = getUniversityById(program.universityId);
      return {
        id: program.id,
        universityId: program.universityId,
        programName: program.name,
        universityName: university?.name ?? program.university,
        degreeLevel: program.degreeLevel,
        country: university?.country ?? program.country,
        tuitionFee: formatFee(program.tuitionMin, program.tuitionMax),
        duration: formatDuration(program.durationMonths),
        ranking: `${program.rating}/5 student rating`,
        savedDate: new Date().toISOString().slice(0, 10),
        fieldOfStudy: program.field,
        entryRequirements: program.requirements.join(", "),
        overview: program.summary,
        sourceLink: program.sources[0]?.url ?? university?.website ?? "#",
      };
    });

export default function SavedPrograms() {
  const navigate = useNavigate();
  const [programs, setPrograms] = useState<SavedProgram[]>(getSavedPrograms);
  const [selectedPrograms, setSelectedPrograms] = useState<Array<number | string>>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterDegree, setFilterDegree] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [selectedProgram, setSelectedProgram] = useState<SavedProgram | null>(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [programToRemove, setProgramToRemove] = useState<number | string | null>(null);

  useEffect(() => {
    const syncFavorites = () => setPrograms(getSavedPrograms());
    syncFavorites();
    window.addEventListener(FAVORITES_CHANGED_EVENT, syncFavorites);
    window.addEventListener("storage", syncFavorites);
    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/auth/login");
  };

  const handleToggleSelect = (id: number | string) => {
    setSelectedPrograms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleRemoveProgram = (id: number | string) => {
    setProgramToRemove(id);
    setShowRemoveModal(true);
  };

  const confirmRemove = () => {
    if (programToRemove !== null) {
      if (typeof programToRemove === "string") {
        setFavoriteProgram(programToRemove, false);
      }
      setPrograms(programs.filter(p => p.id !== programToRemove));
      setSelectedPrograms(selectedPrograms.filter(id => id !== programToRemove));
      if (selectedProgram?.id === programToRemove) {
        setSelectedProgram(null);
      }
      toast.success("Program removed from saved list");
    }
    setShowRemoveModal(false);
    setProgramToRemove(null);
  };

  const handleCompareSelected = () => {
    if (selectedPrograms.length < 2) {
      toast.error("Please select at least 2 programs to compare");
      return;
    }
    toast.success(`Comparing ${selectedPrograms.length} programs...`);
    navigate("/student/compare");
  };

  // Filter and sort programs
  const filteredPrograms = programs
    .filter(p => {
      const matchesSearch = p.programName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           p.universityName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCountry = filterCountry === "all" || p.country === filterCountry;
      const matchesDegree = filterDegree === "all" || p.degreeLevel === filterDegree;
      return matchesSearch && matchesCountry && matchesDegree;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime();
        case "ranking":
          return parseInt(a.ranking) - parseInt(b.ranking);
        case "tuition":
          return a.tuitionFee.localeCompare(b.tuitionFee);
        case "alphabetical":
          return a.universityName.localeCompare(b.universityName);
        default:
          return 0;
      }
    });

  const countries = Array.from(new Set(programs.map(p => p.country)));
  const degreeLevels = Array.from(new Set(programs.map(p => p.degreeLevel)));

  const recentlyAdded = programs.filter(p => {
    const daysDiff = Math.floor((Date.now() - new Date(p.savedDate).getTime()) / (1000 * 60 * 60 * 24));
    return daysDiff <= 7;
  }).length;

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
                className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
              >
                <GitCompare className="w-4 h-4" />
                <span className="text-sm font-medium">Compare Programs</span>
              </Link>
              <Link
                to="/student/saved"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium bg-primary/20 text-primary border border-primary/30 shadow-sm"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm">Saved Programs</span>
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
        {programs.length === 0 ? (
          // Empty State
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="relative mb-8 w-fit mx-auto">
                <div className="absolute inset-0 bg-primary/30 blur-3xl" />
                <div className="relative glass-card p-12 rounded-3xl border-glow">
                  <Heart className="w-24 h-24 text-primary mx-auto" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">No Saved Programs Yet</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Save programs while exploring UniSense to create your personal shortlist
              </p>
              <button
                onClick={() => navigate("/discover")}
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
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">Your Shortlist</span>
                </div>
                <h1 className="text-4xl font-bold mb-3">
                  Saved <span className="text-gradient-hero">Programs</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                  View and manage your shortlisted university programs for future comparison and decision-making
                </p>

                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-4 max-w-3xl">
                  <div className="glass-card rounded-2xl p-5 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Total Saved</p>
                    <p className="text-3xl font-bold text-primary">{programs.length}</p>
                  </div>
                  <div className="glass-card rounded-2xl p-5 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Recently Added</p>
                    <p className="text-3xl font-bold text-accent-violet">{recentlyAdded}</p>
                  </div>
                  <div className="glass-card rounded-2xl p-5 border border-glass-border">
                    <p className="text-sm text-muted-foreground mb-1">Ready for Comparison</p>
                    <p className="text-3xl font-bold text-success">{selectedPrograms.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Compare Section */}
            {selectedPrograms.length > 0 && (
              <div className="glass-card rounded-2xl p-6 shadow-premium border-glow bg-primary/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                      <div className="relative bg-primary/20 p-3 rounded-xl">
                        <GitCompare className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Compare Selected Programs</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedPrograms.length} {selectedPrograms.length === 1 ? 'program' : 'programs'} selected for comparison
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCompareSelected}
                    disabled={selectedPrograms.length < 2}
                    className={`px-6 py-3 rounded-xl font-semibold shadow-premium transition-all flex items-center gap-2 ${
                      selectedPrograms.length >= 2
                        ? 'gradient-primary text-white hover:shadow-premium-lg hover:scale-105'
                        : 'glass-card text-muted-foreground cursor-not-allowed opacity-50'
                    }`}
                  >
                    Start Comparison
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Search and Filter Section */}
            <div className="glass-card rounded-2xl p-6 shadow-premium border-glow">
              <div className="grid grid-cols-5 gap-4">
                {/* Search */}
                <div className="col-span-2">
                  <label className="block text-sm font-semibold mb-2">Search Saved Programs</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by program or university..."
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Filter by Country */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      value={filterCountry}
                      onChange={(e) => setFilterCountry(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="all">All Countries</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Filter by Degree */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Degree Level</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      value={filterDegree}
                      onChange={(e) => setFilterDegree(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="all">All Levels</option>
                      {degreeLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Sort By</label>
                  <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 glass-card border border-input-border rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="recent">Recently Saved</option>
                      <option value="ranking">University Ranking</option>
                      <option value="tuition">Tuition Fee</option>
                      <option value="alphabetical">Alphabetical</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Grid and Detail Panel */}
            <div className="grid grid-cols-3 gap-6">
              {/* Programs Grid */}
              <div className={selectedProgram ? "col-span-2" : "col-span-3"}>
                <div className="grid grid-cols-2 gap-6">
                  {filteredPrograms.map((program) => (
                    <div
                      key={program.id}
                      className={`glass-card rounded-2xl p-6 shadow-premium border-glow relative group transition-all ${
                        selectedPrograms.includes(program.id) ? 'border-primary/50 bg-primary/5' : ''
                      } ${selectedProgram?.id === program.id ? 'border-accent-violet/50 bg-accent-violet/5' : ''}`}
                    >
                      {/* Checkbox */}
                      <div className="absolute top-4 left-4 z-10">
                        <input
                          type="checkbox"
                          checked={selectedPrograms.includes(program.id)}
                          onChange={() => handleToggleSelect(program.id)}
                          className="w-5 h-5 rounded border-input-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                        />
                      </div>

                      {/* Saved Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="glass-card p-2 rounded-lg border border-primary/30">
                          <Heart className="w-4 h-4 text-primary fill-primary" />
                        </div>
                      </div>

                      {/* University Logo */}
                      <div className="mt-8 mb-4">
                        <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center border border-glass-border">
                          <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-2">{program.programName}</h3>
                        <p className="text-muted-foreground mb-1">{program.universityName}</p>
                      </div>

                      {/* Details Grid */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="w-4 h-4" />
                          <span>{program.degreeLevel}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="w-4 h-4" />
                          <span>{program.country}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-xs">{program.tuitionFee}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="w-4 h-4 text-warning" />
                          <span className="text-warning font-medium">{program.ranking}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 border-t border-glass-border">
                        <button
                          onClick={() => setSelectedProgram(program)}
                          className="flex-1 px-4 py-2.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button
                          onClick={() => handleToggleSelect(program.id)}
                          className="px-4 py-2.5 glass-card border border-glass-border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all"
                        >
                          <GitCompare className="w-4 h-4 text-primary" />
                        </button>
                        <button
                          onClick={() => handleRemoveProgram(program.id)}
                          className="px-4 py-2.5 glass-card border border-glass-border rounded-xl hover:bg-destructive/10 hover:border-destructive/30 transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail Panel */}
              {selectedProgram && (
                <div className="col-span-1 sticky top-24 h-fit">
                  <div className="glass-card rounded-2xl shadow-premium-lg border-glow overflow-hidden">
                    <div className="relative p-6 bg-gradient-hero">
                      <button
                        onClick={() => setSelectedProgram(null)}
                        className="absolute top-4 right-4 p-2 glass-card rounded-lg hover:bg-white/20 transition-all"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                      <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-4 border border-white/20">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{selectedProgram.programName}</h3>
                      <p className="text-white/80">{selectedProgram.universityName}</p>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Program Overview</p>
                        <p className="text-sm">{selectedProgram.overview}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Degree Level</p>
                          <p className="font-medium text-sm">{selectedProgram.degreeLevel}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="font-medium text-sm">{selectedProgram.duration}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Tuition Fee Range</p>
                        <p className="font-medium text-sm">{selectedProgram.tuitionFee}</p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Entry Requirements</p>
                        <p className="font-medium text-sm">{selectedProgram.entryRequirements}</p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">University Ranking</p>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-warning" />
                          <p className="font-medium text-sm text-warning">{selectedProgram.ranking}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Official Source</p>
                        <a
                          href={selectedProgram.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover font-medium"
                        >
                          Visit University Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <button
                        onClick={() => navigate(typeof selectedProgram.id === "string" ? `/programs/${selectedProgram.id}` : `/programs/PRG-${String(selectedProgram.id).padStart(3, "0")}`)}
                        className="w-full px-4 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg transition-all flex items-center justify-center gap-2"
                      >
                        <BookOpen className="w-5 h-5" />
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-lg opacity-50" />
                  <div className="relative gradient-primary p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg">UniSense</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered university program discovery system helping students find their perfect academic path.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/discover" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Search Programs</Link></li>
                <li><Link to="/student/compare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Compare</Link></li>
                <li><Link to="/student/saved" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Saved Programs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><button onClick={() => toast.info("Help Center: search, save, and compare programs from the student navigation.")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</button></li>
                <li><a href="mailto:support@unisense.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
                <li><button onClick={() => toast.info("FAQ: Saved programs remain in this prototype until you remove them.")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><button onClick={() => toast.info("Privacy policy preview opened.")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => toast.info("Terms of service preview opened.")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</button></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About UniSense</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-glass-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 UniSense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Remove Confirmation Modal */}
      {showRemoveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="glass-card rounded-3xl p-8 max-w-md w-full shadow-premium-xl border-glow animate-in">
            <div className="text-center mb-6">
              <div className="relative mb-4 w-fit mx-auto">
                <div className="absolute inset-0 bg-destructive blur-xl opacity-50" />
                <div className="relative bg-destructive/20 p-4 rounded-2xl">
                  <Trash2 className="w-10 h-10 text-destructive" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Remove Saved Program?</h3>
              <p className="text-muted-foreground">
                Are you sure you want to remove this program from your saved list? This action cannot be undone.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowRemoveModal(false)}
                className="flex-1 px-6 py-3 glass-card border border-glass-border rounded-xl hover:bg-white/10 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="flex-1 px-6 py-3 bg-destructive text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

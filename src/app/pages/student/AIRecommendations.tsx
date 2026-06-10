import { Link } from "react-router";
import { Sparkles, ArrowLeft, MapPin, DollarSign, Calendar, Clock, Bookmark, Eye, GitCompare, TrendingUp, Star } from "lucide-react";
import { useState } from "react";

interface RecommendationData {
  [key: string]: {
    programs: Array<{
      name: string;
      university: string;
      country: string;
      degree: string;
      tuition: string;
      duration: string;
      fitScore: string;
      reason: string;
      color: string;
    }>;
  };
}

const recommendationData: RecommendationData = {
  "Computer Science": {
    programs: [
      {
        name: "Bachelor of Computer Science",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$6K – $12K",
        duration: "4 years",
        fitScore: "92%",
        reason: "This program strongly matches your preferred field, country, budget, and degree level.",
        color: "success"
      },
      {
        name: "Bachelor of Software Engineering",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $14K",
        duration: "4 years",
        fitScore: "88%",
        reason: "This program matches your software interest and is within your budget range.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Information Technology",
        university: "Asia Pacific University",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $15K",
        duration: "3 years",
        fitScore: "84%",
        reason: "This is a suitable alternative with similar academic focus and intake availability.",
        color: "accent-violet"
      }
    ]
  },
  "Electrical Engineering": {
    programs: [
      {
        name: "Bachelor of Electrical Engineering",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $13K",
        duration: "4 years",
        fitScore: "90%",
        reason: "This program matches your engineering field and budget preferences.",
        color: "success"
      },
      {
        name: "Bachelor of Electronics Engineering",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $14K",
        duration: "4 years",
        fitScore: "86%",
        reason: "Strong alternative with excellent electronics specialization.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Power Engineering",
        university: "Universiti Putra Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$6K – $12K",
        duration: "4 years",
        fitScore: "82%",
        reason: "Good match with focus on power systems and renewable energy.",
        color: "accent-violet"
      }
    ]
  },
  "Mechanical Engineering": {
    programs: [
      {
        name: "Bachelor of Mechanical Engineering",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $13K",
        duration: "4 years",
        fitScore: "91%",
        reason: "Top program for mechanical engineering with strong industry links.",
        color: "success"
      },
      {
        name: "Bachelor of Automotive Engineering",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $15K",
        duration: "4 years",
        fitScore: "87%",
        reason: "Specialized program with automotive focus and internship opportunities.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Manufacturing Engineering",
        university: "Universiti Putra Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$6K – $12K",
        duration: "4 years",
        fitScore: "83%",
        reason: "Strong manufacturing focus with practical training.",
        color: "accent-violet"
      }
    ]
  },
  "Data Science": {
    programs: [
      {
        name: "Bachelor of Data Science",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $14K",
        duration: "3 years",
        fitScore: "93%",
        reason: "Excellent data science program with AI and machine learning focus.",
        color: "success"
      },
      {
        name: "Bachelor of Analytics",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$9K – $15K",
        duration: "4 years",
        fitScore: "89%",
        reason: "Strong analytics program with business intelligence specialization.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Statistics",
        university: "Asia Pacific University",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $13K",
        duration: "3 years",
        fitScore: "85%",
        reason: "Good foundation in statistics with data science applications.",
        color: "accent-violet"
      }
    ]
  },
  "Business Administration": {
    programs: [
      {
        name: "Bachelor of Business Administration",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$6K – $12K",
        duration: "3 years",
        fitScore: "91%",
        reason: "Top business program with international accreditation.",
        color: "success"
      },
      {
        name: "Bachelor of Management",
        university: "Universiti Putra Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$5K – $10K",
        duration: "3 years",
        fitScore: "87%",
        reason: "Strong management focus with entrepreneurship opportunities.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Finance",
        university: "Asia Pacific University",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $14K",
        duration: "3 years",
        fitScore: "84%",
        reason: "Excellent finance program with CFA-aligned curriculum.",
        color: "accent-violet"
      }
    ]
  },
  "Medicine": {
    programs: [
      {
        name: "Bachelor of Medicine and Surgery",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$15K – $30K",
        duration: "5 years",
        fitScore: "89%",
        reason: "Premier medical program with world-class facilities.",
        color: "success"
      },
      {
        name: "Bachelor of Medical Science",
        university: "Universiti Putra Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$12K – $25K",
        duration: "5 years",
        fitScore: "85%",
        reason: "Strong medical science program with research focus.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Health Sciences",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$10K – $20K",
        duration: "4 years",
        fitScore: "81%",
        reason: "Good foundation in health sciences with clinical exposure.",
        color: "accent-violet"
      }
    ]
  },
  "Architecture": {
    programs: [
      {
        name: "Bachelor of Architecture",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $15K",
        duration: "3 years",
        fitScore: "90%",
        reason: "Top architecture program with sustainable design focus.",
        color: "success"
      },
      {
        name: "Bachelor of Interior Architecture",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$7K – $14K",
        duration: "3 years",
        fitScore: "86%",
        reason: "Strong interior design program with practical projects.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Landscape Architecture",
        university: "Universiti Putra Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$6K – $12K",
        duration: "4 years",
        fitScore: "83%",
        reason: "Excellent landscape architecture program with environmental focus.",
        color: "accent-violet"
      }
    ]
  },
  "Artificial Intelligence": {
    programs: [
      {
        name: "Bachelor of Artificial Intelligence",
        university: "Universiti Teknologi Malaysia",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$9K – $15K",
        duration: "3 years",
        fitScore: "94%",
        reason: "Cutting-edge AI program with machine learning and robotics.",
        color: "success"
      },
      {
        name: "Bachelor of Machine Learning",
        university: "University of Malaya",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$10K – $16K",
        duration: "4 years",
        fitScore: "90%",
        reason: "Advanced ML program with deep learning specialization.",
        color: "accent-blue"
      },
      {
        name: "Bachelor of Cognitive Computing",
        university: "Asia Pacific University",
        country: "Malaysia",
        degree: "Bachelor",
        tuition: "$8K – $14K",
        duration: "3 years",
        fitScore: "86%",
        reason: "Innovative program combining AI and cognitive science.",
        color: "accent-violet"
      }
    ]
  }
};

export default function AIRecommendations() {
  const [fieldOfStudy, setFieldOfStudy] = useState("Computer Science");
  const [degreeLevel, setDegreeLevel] = useState("Bachelor");
  const [preferredCountry, setPreferredCountry] = useState("Malaysia");
  const [budgetRange, setBudgetRange] = useState("$5,000 – $15,000");
  const [intake, setIntake] = useState("September");

  const currentRecommendations = recommendationData[fieldOfStudy]?.programs || recommendationData["Computer Science"].programs;

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { blur: string; bg: string; bgBox: string; text: string; border: string } } = {
      success: {
        blur: "bg-success",
        bg: "bg-success/10",
        bgBox: "bg-success/5",
        text: "text-success",
        border: "border-success/10"
      },
      "accent-blue": {
        blur: "bg-accent-blue",
        bg: "bg-accent-blue/10",
        bgBox: "bg-accent-blue/5",
        text: "text-accent-blue",
        border: "border-accent-blue/10"
      },
      "accent-violet": {
        blur: "bg-accent-violet",
        bg: "bg-accent-violet/10",
        bgBox: "bg-accent-violet/5",
        text: "text-accent-violet",
        border: "border-accent-violet/10"
      }
    };
    return colorMap[color] || colorMap.success;
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
                <p className="text-xs text-muted-foreground">AI Recommendations</p>
              </div>
            </div>

            <Link
              to="/student"
              className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-all border border-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Preference Form */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-3xl p-8 shadow-premium-lg border-glow sticky top-24">
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-primary blur-xl opacity-40" />
                <div className="relative bg-primary/10 p-4 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">Your Preferences</h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Field of Study</label>
                  <select
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-glass-border text-foreground font-medium focus:outline-none focus:border-primary/30 focus:bg-primary/10 transition-all cursor-pointer"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Business Administration">Business Administration</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Degree Level</label>
                  <select
                    value={degreeLevel}
                    onChange={(e) => setDegreeLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-glass-border text-foreground font-medium focus:outline-none focus:border-primary/30 focus:bg-primary/10 transition-all cursor-pointer"
                  >
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Preferred Country</label>
                  <select
                    value={preferredCountry}
                    onChange={(e) => setPreferredCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-glass-border text-foreground font-medium focus:outline-none focus:border-primary/30 focus:bg-primary/10 transition-all cursor-pointer"
                  >
                    <option value="Malaysia">Malaysia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Budget Range</label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-glass-border text-foreground font-medium focus:outline-none focus:border-primary/30 focus:bg-primary/10 transition-all cursor-pointer"
                  >
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                    <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                    <option value="Above $30,000">Above $30,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Intake</label>
                  <select
                    value={intake}
                    onChange={(e) => setIntake(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-glass-border text-foreground font-medium focus:outline-none focus:border-primary/30 focus:bg-primary/10 transition-all cursor-pointer"
                  >
                    <option value="February">February</option>
                    <option value="June">June</option>
                    <option value="September">September</option>
                  </select>
                </div>

                <button className="w-full px-6 py-3.5 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Generate Recommendations
                </button>
              </div>
            </div>
          </div>

          {/* Middle/Right Side - Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Recommended Programs For You</h2>
              <p className="text-muted-foreground">AI-matched programs based on your preferences</p>
            </div>

            {/* Recommendation Cards */}
            <div className="space-y-6">
              {currentRecommendations.map((program, index) => {
                const colorClasses = getColorClasses(program.color);
                return (
              <div key={index} className="glass-card rounded-3xl p-8 shadow-premium-lg border-glow hover:shadow-premium-xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <div className={`absolute inset-0 ${colorClasses.blur} blur-lg opacity-40`} />
                        <div className={`relative ${colorClasses.bg} px-4 py-2 rounded-xl`}>
                          <span className={`text-lg font-bold ${colorClasses.text}`}>{program.fitScore} Fit</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{program.university}</p>
                  </div>
                  <button className="p-3 rounded-xl hover:bg-primary/10 transition-colors">
                    <Bookmark className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Country</p>
                      <p className="text-sm font-semibold">{program.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent-violet" />
                    <div>
                      <p className="text-xs text-muted-foreground">Degree</p>
                      <p className="text-sm font-semibold">{program.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-success" />
                    <div>
                      <p className="text-xs text-muted-foreground">Tuition</p>
                      <p className="text-sm font-semibold">{program.tuition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-blue" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-semibold">{program.duration}</p>
                    </div>
                  </div>
                </div>

                <div className={`mb-6 p-4 rounded-xl ${colorClasses.bgBox} border ${colorClasses.border}`}>
                  <div className="flex items-start gap-3">
                    <Sparkles className={`w-5 h-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                    <p className="text-sm text-muted-foreground">
                      {program.reason}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button className="px-6 py-3 gradient-primary text-white rounded-xl font-semibold shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    View Details
                  </button>
                  <button className="px-6 py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all">
                    Save
                  </button>
                  <button className="px-6 py-3 glass-card border border-glass-border rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/30 transition-all flex items-center justify-center gap-2">
                    <GitCompare className="w-5 h-5" />
                    Compare
                  </button>
                </div>
              </div>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Fit Score Breakdown */}
              <div className="lg:col-span-2 glass-card rounded-3xl p-8 shadow-premium-lg border-glow">
                <div className="relative mb-6 w-fit">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-40" />
                  <div className="relative bg-primary/10 p-4 rounded-2xl">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Why this program matches you</h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Field Match</span>
                      <span className="text-sm font-bold text-success">95%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-success rounded-full transition-all duration-500" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Degree Match</span>
                      <span className="text-sm font-bold text-success">100%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-success rounded-full transition-all duration-500" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Country Match</span>
                      <span className="text-sm font-bold text-accent-blue">90%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-accent-blue rounded-full transition-all duration-500" style={{ width: '90%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Fee Match</span>
                      <span className="text-sm font-bold text-accent-violet">85%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-accent-violet rounded-full transition-all duration-500" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Duration Match</span>
                      <span className="text-sm font-bold text-primary">80%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Similar Programs */}
              <div className="glass-card rounded-3xl p-8 shadow-premium-lg border-glow">
                <div className="relative mb-6 w-fit">
                  <div className="absolute inset-0 bg-accent-violet blur-xl opacity-40" />
                  <div className="relative bg-accent-violet/10 p-4 rounded-2xl">
                    <Star className="w-8 h-8 text-accent-violet" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-6">Similar Programs</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all cursor-pointer">
                    <span className="text-sm font-medium text-foreground">Software Engineering</span>
                    <span className="text-xs font-bold text-success px-3 py-1.5 rounded-lg bg-success/10">91%</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all cursor-pointer">
                    <span className="text-sm font-medium text-foreground">Data Science</span>
                    <span className="text-xs font-bold text-accent-blue px-3 py-1.5 rounded-lg bg-accent-blue/10">87%</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all cursor-pointer">
                    <span className="text-sm font-medium text-foreground">Information Systems</span>
                    <span className="text-xs font-bold text-accent-violet px-3 py-1.5 rounded-lg bg-accent-violet/10">83%</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all cursor-pointer">
                    <span className="text-sm font-medium text-foreground">Artificial Intelligence</span>
                    <span className="text-xs font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/10">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

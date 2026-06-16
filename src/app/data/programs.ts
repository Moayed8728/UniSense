// Mock data for the Program Discovery Subsystem (Section 3.0).
// Mirrors the entities described in 3.0.docx: universities, programs,
// program_images, source_references, browse_categories and field_synonyms.

export type DegreeLevel = "Bachelor" | "Master" | "PhD";
export type VerificationStatus = "pending" | "verified" | "invalid";

export interface SourceReference {
  id: string;
  label: string;
  url: string;
  verificationStatus: VerificationStatus;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  country: string;
  city: string;
  verificationStatus: VerificationStatus;
  website: string;
  description: string;
  image: string;
  officialSources: SourceReference[];
  programCount: number;
  mainFields: string[];
}

export interface Program {
  id: string;
  universityId: string;
  name: string;
  university: string;
  country: string;
  field: string;
  degreeLevel: DegreeLevel;
  tuitionMin: number; // USD / year
  tuitionMax: number;
  durationMonths: number;
  intake: string;
  language: string;
  rating: number;
  viewCount: number;
  image: string;
  summary: string;
  requirements: string[];
  sources: SourceReference[];
}

export const programs: Program[] = [
  {
    id: "PRG-001",
    name: "Master of Computer Science",
    universityId: "mit",
    university: "Massachusetts Institute of Technology",
    country: "United States",
    field: "Computer Science",
    degreeLevel: "Master",
    tuitionMin: 53450,
    tuitionMax: 58240,
    durationMonths: 24,
    intake: "September",
    language: "English",
    rating: 4.9,
    viewCount: 18420,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An advanced research-driven programme covering machine learning, distributed systems, and software engineering with access to world-class faculty and labs.",
    requirements: [
      "Bachelor's degree in a related field (CGPA 3.5+)",
      "GRE General Test (recommended)",
      "TOEFL 100+ / IELTS 7.0+",
      "Two letters of recommendation",
    ],
    sources: [
      { id: "S1", label: "Official Admissions Page", url: "https://eecs.mit.edu/admissions", verificationStatus: "verified" },
      { id: "S2", label: "Tuition & Fees", url: "https://sfs.mit.edu/tuition", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-002",
    name: "Bachelor of Software Engineering",
    universityId: "utoronto",
    university: "University of Toronto",
    country: "Canada",
    field: "Software Engineering",
    degreeLevel: "Bachelor",
    tuitionMin: 45200,
    tuitionMax: 49100,
    durationMonths: 48,
    intake: "September",
    language: "English",
    rating: 4.7,
    viewCount: 12880,
    image:
      "https://picsum.photos/id/1018/1200/800",
    summary:
      "A four-year accredited engineering degree focusing on full-stack development, systems design, and a 16-month professional internship placement.",
    requirements: [
      "High school diploma with strong mathematics",
      "TOEFL 100+ / IELTS 6.5+",
      "Personal statement",
    ],
    sources: [
      { id: "S1", label: "Program Page", url: "https://utoronto.ca/software-eng", verificationStatus: "verified" },
      { id: "S2", label: "Fees Estimate", url: "https://utoronto.ca/fees", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-003",
    name: "PhD in Artificial Intelligence",
    universityId: "oxford",
    university: "University of Oxford",
    country: "United Kingdom",
    field: "Artificial Intelligence",
    degreeLevel: "PhD",
    tuitionMin: 32760,
    tuitionMax: 32760,
    durationMonths: 48,
    intake: "October",
    language: "English",
    rating: 4.8,
    viewCount: 9650,
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A funded doctoral programme advancing research in deep learning, reinforcement learning, and AI safety within a collaborative research group.",
    requirements: [
      "Master's degree with distinction",
      "Research proposal",
      "IELTS 7.5+",
      "Three academic references",
    ],
    sources: [
      { id: "S1", label: "DPhil Page", url: "https://ox.ac.uk/ai-dphil", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-004",
    name: "Master of Data Science",
    universityId: "nus",
    university: "National University of Singapore",
    country: "Singapore",
    field: "Data Science",
    degreeLevel: "Master",
    tuitionMin: 38900,
    tuitionMax: 41200,
    durationMonths: 18,
    intake: "January",
    language: "English",
    rating: 4.6,
    viewCount: 14200,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An industry-aligned programme blending statistics, big-data engineering, and applied analytics with a capstone project sponsored by partner companies.",
    requirements: [
      "Bachelor's in a quantitative discipline",
      "Programming experience (Python/R)",
      "IELTS 6.5+",
    ],
    sources: [
      { id: "S1", label: "Course Catalogue", url: "https://nus.edu.sg/data-science", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-005",
    name: "Bachelor of Business Administration",
    universityId: "unimelb",
    university: "University of Melbourne",
    country: "Australia",
    field: "Business",
    degreeLevel: "Bachelor",
    tuitionMin: 31500,
    tuitionMax: 34800,
    durationMonths: 36,
    intake: "February",
    language: "English",
    rating: 4.5,
    viewCount: 8120,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A globally ranked business degree with majors in finance, marketing, and entrepreneurship, plus exchange opportunities across 100+ partner schools.",
    requirements: [
      "High school diploma",
      "IELTS 6.5+",
      "Statement of purpose",
    ],
    sources: [
      { id: "S1", label: "Program Handbook", url: "https://unimelb.edu.au/bba", verificationStatus: "verified" },
      { id: "S2", label: "Scholarships", url: "https://unimelb.edu.au/scholarships", verificationStatus: "invalid" },
    ],
  },
  {
    id: "PRG-006",
    name: "Master of Cybersecurity",
    universityId: "tum",
    university: "Technical University of Munich",
    country: "Germany",
    field: "Cybersecurity",
    degreeLevel: "Master",
    tuitionMin: 0,
    tuitionMax: 3000,
    durationMonths: 24,
    intake: "October",
    language: "English",
    rating: 4.7,
    viewCount: 10330,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A low-tuition public-university programme specialising in network security, cryptography, and secure systems engineering with strong industry links.",
    requirements: [
      "Bachelor's in CS or related",
      "Proof of English proficiency",
      "Motivation letter",
    ],
    sources: [
      { id: "S1", label: "Admissions Portal", url: "https://tum.de/cybersecurity", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-007",
    name: "Master of Public Health",
    universityId: "imperial",
    university: "Imperial College London",
    country: "United Kingdom",
    field: "Public Health",
    degreeLevel: "Master",
    tuitionMin: 36400,
    tuitionMax: 39200,
    durationMonths: 12,
    intake: "October",
    language: "English",
    rating: 4.6,
    viewCount: 7340,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A globally focused programme in epidemiology, health policy, and global health systems, taught at one of the world's leading medical faculties.",
    requirements: ["Bachelor's in health/life sciences", "IELTS 7.0+", "Statement of purpose"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://imperial.ac.uk/mph", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-008",
    name: "Bachelor of Mechanical Engineering",
    universityId: "eth",
    university: "ETH Zurich",
    country: "Switzerland",
    field: "Engineering",
    degreeLevel: "Bachelor",
    tuitionMin: 1500,
    tuitionMax: 1800,
    durationMonths: 36,
    intake: "September",
    language: "German",
    rating: 4.8,
    viewCount: 9120,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A rigorous, low-tuition engineering degree combining thermodynamics, robotics, and design at a top-ranked European technical university.",
    requirements: ["High school diploma with strong physics & maths", "German B2 proficiency", "Entrance examination"],
    sources: [
      { id: "S1", label: "Study Programme", url: "https://ethz.ch/mech-eng", verificationStatus: "verified" },
      { id: "S2", label: "Fees", url: "https://ethz.ch/fees", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-009",
    name: "Master of Business Analytics",
    universityId: "berkeley",
    university: "University of California, Berkeley",
    country: "United States",
    field: "Business",
    degreeLevel: "Master",
    tuitionMin: 68900,
    tuitionMax: 72400,
    durationMonths: 12,
    intake: "September",
    language: "English",
    rating: 4.7,
    viewCount: 13540,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A STEM-designated programme blending data science with business strategy, featuring an industry capstone with Silicon Valley partners.",
    requirements: ["Bachelor's degree", "GMAT/GRE", "TOEFL 90+", "Two recommendations"],
    sources: [
      { id: "S1", label: "Program Page", url: "https://haas.berkeley.edu/mban", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-010",
    name: "PhD in Biomedical Engineering",
    universityId: "jhu",
    university: "Johns Hopkins University",
    country: "United States",
    field: "Engineering",
    degreeLevel: "PhD",
    tuitionMin: 0,
    tuitionMax: 0,
    durationMonths: 60,
    intake: "September",
    language: "English",
    rating: 4.9,
    viewCount: 6210,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A fully funded doctoral programme at a world-leading medical research institution, spanning medical imaging, neural engineering, and tissue engineering.",
    requirements: ["Master's or strong Bachelor's", "Research experience", "GRE", "Three references"],
    sources: [
      { id: "S1", label: "PhD Admissions", url: "https://jhu.edu/bme-phd", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-011",
    name: "Bachelor of Computer Science",
    universityId: "utokyo",
    university: "University of Tokyo",
    country: "Japan",
    field: "Computer Science",
    degreeLevel: "Bachelor",
    tuitionMin: 4800,
    tuitionMax: 5400,
    durationMonths: 48,
    intake: "April",
    language: "English",
    rating: 4.6,
    viewCount: 8870,
    image:
      "https://picsum.photos/id/1018/1200/800",
    summary:
      "An English-track undergraduate degree at Japan's premier research university, covering algorithms, AI, and human-computer interaction.",
    requirements: ["High school diploma", "EJU / SAT scores", "TOEFL 80+"],
    sources: [
      { id: "S1", label: "Admissions", url: "https://u-tokyo.ac.jp/cs", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-012",
    name: "Master of Artificial Intelligence",
    universityId: "kth",
    university: "KTH Royal Institute of Technology",
    country: "Sweden",
    field: "Artificial Intelligence",
    degreeLevel: "Master",
    tuitionMin: 0,
    tuitionMax: 15800,
    durationMonths: 24,
    intake: "August",
    language: "English",
    rating: 4.7,
    viewCount: 10210,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A research-led programme in machine learning, robotics, and autonomous systems, with free tuition for EU/EEA students.",
    requirements: ["Bachelor's in CS/engineering", "Mathematics background", "IELTS 6.5+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://kth.se/ai", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-013",
    name: "Bachelor of Architecture",
    universityId: "tudelft",
    university: "Delft University of Technology",
    country: "Netherlands",
    field: "Architecture",
    degreeLevel: "Bachelor",
    tuitionMin: 2530,
    tuitionMax: 16000,
    durationMonths: 36,
    intake: "September",
    language: "English",
    rating: 4.5,
    viewCount: 7650,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A studio-driven design degree blending architecture, urbanism, and sustainable building technology at a leading European tech university.",
    requirements: ["High school diploma", "Portfolio", "IELTS 6.5+"],
    sources: [
      { id: "S1", label: "Programme", url: "https://tudelft.nl/architecture", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-014",
    name: "Master of Finance",
    universityId: "lse",
    university: "London School of Economics",
    country: "United Kingdom",
    field: "Finance",
    degreeLevel: "Master",
    tuitionMin: 41760,
    tuitionMax: 41760,
    durationMonths: 10,
    intake: "September",
    language: "English",
    rating: 4.8,
    viewCount: 15880,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An intensive, quantitatively rigorous finance programme with strong placement into investment banking and asset management.",
    requirements: ["Bachelor's with high GPA", "GRE/GMAT", "IELTS 7.0+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://lse.ac.uk/finance", verificationStatus: "verified" },
      { id: "S2", label: "Fees", url: "https://lse.ac.uk/fees", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-015",
    name: "Master of Data Science",
    universityId: "ubc",
    university: "University of British Columbia",
    country: "Canada",
    field: "Data Science",
    degreeLevel: "Master",
    tuitionMin: 28600,
    tuitionMax: 31200,
    durationMonths: 12,
    intake: "September",
    language: "English",
    rating: 4.5,
    viewCount: 9430,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A professional master's combining statistics, machine learning, and big-data tools with a capstone in partnership with local industry.",
    requirements: ["Bachelor's in quantitative field", "Programming experience", "IELTS 6.5+"],
    sources: [
      { id: "S1", label: "Course Page", url: "https://ubc.ca/mds", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-016",
    name: "Bachelor of Nursing",
    universityId: "unimelb",
    university: "University of Melbourne",
    country: "Australia",
    field: "Nursing",
    degreeLevel: "Bachelor",
    tuitionMin: 33800,
    tuitionMax: 36500,
    durationMonths: 36,
    intake: "February",
    language: "English",
    rating: 4.4,
    viewCount: 6080,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An accredited nursing degree with extensive clinical placements across leading metropolitan hospitals.",
    requirements: ["High school diploma", "IELTS 7.0+", "Health screening"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://unimelb.edu.au/nursing", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-017",
    name: "Master of Cybersecurity",
    universityId: "ntu",
    university: "Nanyang Technological University",
    country: "Singapore",
    field: "Cybersecurity",
    degreeLevel: "Master",
    tuitionMin: 42000,
    tuitionMax: 45600,
    durationMonths: 12,
    intake: "August",
    language: "English",
    rating: 4.6,
    viewCount: 8210,
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A practice-oriented programme in digital forensics, secure software, and cyber defence, with access to a dedicated security operations lab.",
    requirements: ["Bachelor's in computing", "Work experience preferred", "IELTS 6.5+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://ntu.edu.sg/cybersecurity", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-018",
    name: "Bachelor of Economics",
    universityId: "utoronto",
    university: "University of Toronto",
    country: "Canada",
    field: "Economics",
    degreeLevel: "Bachelor",
    tuitionMin: 44500,
    tuitionMax: 47800,
    durationMonths: 48,
    intake: "September",
    language: "English",
    rating: 4.5,
    viewCount: 7020,
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A quantitative economics degree with options in econometrics, finance, and public policy, plus co-op work placements.",
    requirements: ["High school diploma with calculus", "IELTS 6.5+", "Personal statement"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://utoronto.ca/economics", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-019",
    name: "PhD in Machine Learning",
    universityId: "cmu",
    university: "Carnegie Mellon University",
    country: "United States",
    field: "Artificial Intelligence",
    degreeLevel: "PhD",
    tuitionMin: 0,
    tuitionMax: 0,
    durationMonths: 60,
    intake: "September",
    language: "English",
    rating: 4.9,
    viewCount: 11260,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A fully funded doctoral programme at a world-leading ML department, covering deep learning, optimization, and statistical learning theory.",
    requirements: ["Strong Bachelor's/Master's", "Research publications preferred", "GRE", "Three references"],
    sources: [
      { id: "S1", label: "PhD Page", url: "https://ml.cmu.edu/phd", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-020",
    name: "Master of Law (LLM)",
    universityId: "oxford",
    university: "University of Oxford",
    country: "United Kingdom",
    field: "Law",
    degreeLevel: "Master",
    tuitionMin: 35260,
    tuitionMax: 35260,
    durationMonths: 12,
    intake: "October",
    language: "English",
    rating: 4.8,
    viewCount: 8930,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An advanced law degree offering specialisations in international law, commercial law, and human rights at a historic faculty.",
    requirements: ["Bachelor of Laws (first-class)", "IELTS 7.5+", "Academic references"],
    sources: [
      { id: "S1", label: "BCL/LLM Page", url: "https://law.ox.ac.uk/llm", verificationStatus: "pending" },
    ],
  },
  {
    id: "PRG-021",
    name: "Bachelor of Psychology",
    universityId: "uva",
    university: "University of Amsterdam",
    country: "Netherlands",
    field: "Psychology",
    degreeLevel: "Bachelor",
    tuitionMin: 2530,
    tuitionMax: 12000,
    durationMonths: 36,
    intake: "September",
    language: "English",
    rating: 4.4,
    viewCount: 6540,
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An English-taught psychology degree spanning cognitive, social, and clinical psychology with strong research methods training.",
    requirements: ["High school diploma", "Mathematics", "IELTS 6.5+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://uva.nl/psychology", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-022",
    name: "Master of Renewable Energy",
    universityId: "tum",
    university: "Technical University of Munich",
    country: "Germany",
    field: "Engineering",
    degreeLevel: "Master",
    tuitionMin: 0,
    tuitionMax: 3000,
    durationMonths: 24,
    intake: "October",
    language: "English",
    rating: 4.6,
    viewCount: 7390,
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A low-tuition public-university programme in solar, wind, and energy systems engineering, aligned with Germany's energy transition.",
    requirements: ["Bachelor's in engineering", "Proof of English proficiency", "Motivation letter"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://tum.de/renewable-energy", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-023",
    name: "Bachelor of Game Design",
    universityId: "usc",
    university: "University of Southern California",
    country: "United States",
    field: "Computer Science",
    degreeLevel: "Bachelor",
    tuitionMin: 61500,
    tuitionMax: 64800,
    durationMonths: 48,
    intake: "August",
    language: "English",
    rating: 4.7,
    viewCount: 12110,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A top-ranked interactive media and game design degree combining programming, narrative design, and studio production.",
    requirements: ["High school diploma", "Portfolio", "TOEFL 100+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://usc.edu/games", verificationStatus: "verified" },
    ],
  },
  {
    id: "PRG-024",
    name: "Master of Data Science & AI",
    universityId: "utm",
    university: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    field: "Data Science",
    degreeLevel: "Master",
    tuitionMin: 6200,
    tuitionMax: 7800,
    durationMonths: 18,
    intake: "September",
    language: "English",
    rating: 4.5,
    viewCount: 5380,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "An affordable, industry-aligned programme in machine learning, big-data engineering, and applied analytics with strong regional employer links.",
    requirements: ["Bachelor's in computing or related", "Programming basics", "IELTS 6.0+"],
    sources: [
      { id: "S1", label: "Programme Page", url: "https://utm.my/data-science-ai", verificationStatus: "verified" },
    ],
  },
];

const universityProfiles: Array<Omit<University, "programCount" | "mainFields">> = [
  { id: "mit", name: "Massachusetts Institute of Technology", shortName: "MIT", country: "United States", city: "Cambridge", verificationStatus: "verified", website: "https://www.mit.edu", description: "A research-intensive university known for science, engineering, computing, and entrepreneurship.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "MIT-S1", label: "Official Website", url: "https://www.mit.edu", verificationStatus: "verified" }] },
  { id: "utoronto", name: "University of Toronto", shortName: "U of T", country: "Canada", city: "Toronto", verificationStatus: "verified", website: "https://www.utoronto.ca", description: "A leading Canadian public research university with broad undergraduate and graduate offerings.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UTOR-S1", label: "Official Website", url: "https://www.utoronto.ca", verificationStatus: "verified" }] },
  { id: "oxford", name: "University of Oxford", shortName: "Oxford", country: "United Kingdom", city: "Oxford", verificationStatus: "verified", website: "https://www.ox.ac.uk", description: "A collegiate research university offering internationally recognized programs across major disciplines.", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "OX-S1", label: "Official Website", url: "https://www.ox.ac.uk", verificationStatus: "verified" }] },
  { id: "nus", name: "National University of Singapore", shortName: "NUS", country: "Singapore", city: "Singapore", verificationStatus: "verified", website: "https://www.nus.edu.sg", description: "Singapore's flagship university with strong research and industry-connected programs.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "NUS-S1", label: "Official Website", url: "https://www.nus.edu.sg", verificationStatus: "verified" }] },
  { id: "unimelb", name: "University of Melbourne", shortName: "Melbourne", country: "Australia", city: "Melbourne", verificationStatus: "verified", website: "https://www.unimelb.edu.au", description: "A comprehensive Australian research university with a broad international student community.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "MEL-S1", label: "Official Website", url: "https://www.unimelb.edu.au", verificationStatus: "verified" }] },
  { id: "tum", name: "Technical University of Munich", shortName: "TUM", country: "Germany", city: "Munich", verificationStatus: "verified", website: "https://www.tum.de", description: "A technical research university focused on engineering, computing, science, and innovation.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "TUM-S1", label: "Official Website", url: "https://www.tum.de", verificationStatus: "verified" }] },
  { id: "imperial", name: "Imperial College London", shortName: "Imperial", country: "United Kingdom", city: "London", verificationStatus: "verified", website: "https://www.imperial.ac.uk", description: "A science, engineering, medicine, and business-focused university in London.", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "IMP-S1", label: "Official Website", url: "https://www.imperial.ac.uk", verificationStatus: "verified" }] },
  { id: "eth", name: "ETH Zurich", shortName: "ETH Zurich", country: "Switzerland", city: "Zurich", verificationStatus: "verified", website: "https://ethz.ch", description: "A public research university specializing in science, technology, engineering, and mathematics.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "ETH-S1", label: "Official Website", url: "https://ethz.ch", verificationStatus: "verified" }] },
  { id: "berkeley", name: "University of California, Berkeley", shortName: "UC Berkeley", country: "United States", city: "Berkeley", verificationStatus: "verified", website: "https://www.berkeley.edu", description: "A public research university with highly regarded programs and strong industry connections.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UCB-S1", label: "Official Website", url: "https://www.berkeley.edu", verificationStatus: "verified" }] },
  { id: "jhu", name: "Johns Hopkins University", shortName: "Johns Hopkins", country: "United States", city: "Baltimore", verificationStatus: "verified", website: "https://www.jhu.edu", description: "A research university known for medicine, public health, science, and engineering.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "JHU-S1", label: "Official Website", url: "https://www.jhu.edu", verificationStatus: "verified" }] },
  { id: "utokyo", name: "University of Tokyo", shortName: "UTokyo", country: "Japan", city: "Tokyo", verificationStatus: "verified", website: "https://www.u-tokyo.ac.jp", description: "Japan's leading national research university with multidisciplinary academic programs.", image: "https://picsum.photos/id/1018/1200/800", officialSources: [{ id: "TOK-S1", label: "Official Website", url: "https://www.u-tokyo.ac.jp", verificationStatus: "verified" }] },
  { id: "kth", name: "KTH Royal Institute of Technology", shortName: "KTH", country: "Sweden", city: "Stockholm", verificationStatus: "verified", website: "https://www.kth.se", description: "Sweden's largest technical university, focused on engineering and technology research.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "KTH-S1", label: "Official Website", url: "https://www.kth.se", verificationStatus: "verified" }] },
  { id: "tudelft", name: "Delft University of Technology", shortName: "TU Delft", country: "Netherlands", city: "Delft", verificationStatus: "verified", website: "https://www.tudelft.nl", description: "A technical university recognized for engineering, architecture, and design.", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "DELFT-S1", label: "Official Website", url: "https://www.tudelft.nl", verificationStatus: "verified" }] },
  { id: "lse", name: "London School of Economics", shortName: "LSE", country: "United Kingdom", city: "London", verificationStatus: "verified", website: "https://www.lse.ac.uk", description: "A specialist social science university with globally focused economics, finance, and policy programs.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "LSE-S1", label: "Official Website", url: "https://www.lse.ac.uk", verificationStatus: "verified" }] },
  { id: "ubc", name: "University of British Columbia", shortName: "UBC", country: "Canada", city: "Vancouver", verificationStatus: "verified", website: "https://www.ubc.ca", description: "A Canadian public research university with extensive academic and professional programs.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UBC-S1", label: "Official Website", url: "https://www.ubc.ca", verificationStatus: "verified" }] },
  { id: "ntu", name: "Nanyang Technological University", shortName: "NTU", country: "Singapore", city: "Singapore", verificationStatus: "verified", website: "https://www.ntu.edu.sg", description: "A research-intensive university known for engineering, computing, science, and business.", image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "NTU-S1", label: "Official Website", url: "https://www.ntu.edu.sg", verificationStatus: "verified" }] },
  { id: "cmu", name: "Carnegie Mellon University", shortName: "CMU", country: "United States", city: "Pittsburgh", verificationStatus: "verified", website: "https://www.cmu.edu", description: "A private research university recognized for computing, robotics, engineering, and the arts.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "CMU-S1", label: "Official Website", url: "https://www.cmu.edu", verificationStatus: "verified" }] },
  { id: "uva", name: "University of Amsterdam", shortName: "UvA", country: "Netherlands", city: "Amsterdam", verificationStatus: "verified", website: "https://www.uva.nl", description: "A comprehensive research university offering programs across humanities, sciences, and social sciences.", image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UVA-S1", label: "Official Website", url: "https://www.uva.nl", verificationStatus: "verified" }] },
  { id: "usc", name: "University of Southern California", shortName: "USC", country: "United States", city: "Los Angeles", verificationStatus: "verified", website: "https://www.usc.edu", description: "A private research university with strong programs in technology, media, business, and the arts.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "USC-S1", label: "Official Website", url: "https://www.usc.edu", verificationStatus: "verified" }] },
  { id: "utm", name: "Universiti Teknologi Malaysia", shortName: "UTM", country: "Malaysia", city: "Johor Bahru", verificationStatus: "verified", website: "https://www.utm.my", description: "Malaysia's technology-focused public research university with programs in engineering, computing, science, and management.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UTM-S1", label: "Official Website", url: "https://www.utm.my", verificationStatus: "verified" }, { id: "UTM-S2", label: "Official Programmes", url: "https://www.utm.my/programmes/", verificationStatus: "verified" }] },
  { id: "monash", name: "Monash University", shortName: "Monash", country: "Australia", city: "Melbourne", verificationStatus: "verified", website: "https://www.monash.edu", description: "An Australian research university with broad professional and academic programs.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "MON-S1", label: "Official Website", url: "https://www.monash.edu", verificationStatus: "verified" }] },
  { id: "usyd", name: "University of Sydney", shortName: "Sydney", country: "Australia", city: "Sydney", verificationStatus: "verified", website: "https://www.sydney.edu.au", description: "A comprehensive Australian research university based in Sydney.", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "SYD-S1", label: "Official Website", url: "https://www.sydney.edu.au", verificationStatus: "verified" }] },
  { id: "unsw", name: "University of New South Wales", shortName: "UNSW", country: "Australia", city: "Sydney", verificationStatus: "verified", website: "https://www.unsw.edu.au", description: "An Australian research university known for engineering, technology, business, and science.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UNSW-S1", label: "Official Website", url: "https://www.unsw.edu.au", verificationStatus: "verified" }] },
  { id: "harvard", name: "Harvard University", shortName: "Harvard", country: "United States", city: "Cambridge", verificationStatus: "verified", website: "https://www.harvard.edu", description: "A private research university offering programs across arts, sciences, business, law, medicine, and public policy.", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "HAR-S1", label: "Official Website", url: "https://www.harvard.edu", verificationStatus: "verified" }] },
  { id: "stanford", name: "Stanford University", shortName: "Stanford", country: "United States", city: "Stanford", verificationStatus: "verified", website: "https://www.stanford.edu", description: "A private research university known for technology, entrepreneurship, science, and interdisciplinary study.", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "STA-S1", label: "Official Website", url: "https://www.stanford.edu", verificationStatus: "verified" }] },
  { id: "um", name: "University of Malaya", shortName: "UM", country: "Malaysia", city: "Kuala Lumpur", verificationStatus: "verified", website: "https://www.um.edu.my", description: "Malaysia's oldest public research university with comprehensive academic offerings.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UM-S1", label: "Official Website", url: "https://www.um.edu.my", verificationStatus: "verified" }] },
  { id: "uitm", name: "Universiti Teknologi MARA", shortName: "UiTM", country: "Malaysia", city: "Shah Alam", verificationStatus: "verified", website: "https://www.uitm.edu.my", description: "A Malaysian public university with extensive professional and applied academic programs.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UITM-S1", label: "Official Website", url: "https://www.uitm.edu.my", verificationStatus: "verified" }] },
  { id: "unimas", name: "Universiti Malaysia Sarawak", shortName: "UNIMAS", country: "Malaysia", city: "Kota Samarahan", verificationStatus: "verified", website: "https://www.unimas.my", description: "A Malaysian public university serving Sarawak with multidisciplinary teaching and research.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80", officialSources: [{ id: "UNIMAS-S1", label: "Official Website", url: "https://www.unimas.my", verificationStatus: "verified" }] },
];

export const universities: University[] = universityProfiles.map((university) => {
  const childPrograms = programs.filter((program) => program.universityId === university.id);
  return {
    ...university,
    programCount: childPrograms.length,
    mainFields: Array.from(new Set(childPrograms.map((program) => program.field))),
  };
});

export const getUniversityById = (id: string) => universities.find((university) => university.id === id);
export const getProgramsByUniversity = (universityId: string) =>
  programs.filter((program) => program.universityId === universityId);

export interface BrowseCategory {
  type: "country" | "field" | "degree" | "university";
  value: string;
  programCount: number;
}

export const browseCategories: Record<string, BrowseCategory[]> = {
  country: [
    { type: "country", value: "United States", programCount: 1240 },
    { type: "country", value: "United Kingdom", programCount: 980 },
    { type: "country", value: "Canada", programCount: 760 },
    { type: "country", value: "Australia", programCount: 640 },
    { type: "country", value: "Germany", programCount: 520 },
    { type: "country", value: "Singapore", programCount: 310 },
  ],
  field: [
    { type: "field", value: "Computer Science", programCount: 820 },
    { type: "field", value: "Business", programCount: 1100 },
    { type: "field", value: "Engineering", programCount: 940 },
    { type: "field", value: "Data Science", programCount: 410 },
    { type: "field", value: "Artificial Intelligence", programCount: 280 },
    { type: "field", value: "Cybersecurity", programCount: 190 },
  ],
  degree: [
    { type: "degree", value: "Bachelor", programCount: 3200 },
    { type: "degree", value: "Master", programCount: 2400 },
    { type: "degree", value: "PhD", programCount: 760 },
  ],
  university: [
    { type: "university", value: "MIT", programCount: 142 },
    { type: "university", value: "University of Oxford", programCount: 168 },
    { type: "university", value: "University of Toronto", programCount: 210 },
    { type: "university", value: "NUS", programCount: 156 },
  ],
};

// 3.4 Smart Search: synonym expansion sample for the query "software".
export const smartSearchExpansion = {
  rawQuery: "software",
  expandedTerms: [
    { term: "Software Engineering", weight: 1.0, source: "dictionary" as const },
    { term: "Computer Science", weight: 0.85, source: "dictionary" as const },
    { term: "Software Systems", weight: 0.8, source: "dictionary" as const },
    { term: "Application Development", weight: 0.62, source: "gemini" as const },
  ],
};

export const formatFee = (min: number, max: number) => {
  if (min === 0 && max <= 3000) return "Low / Free tuition";
  if (min === max) return `$${min.toLocaleString()}/yr`;
  return `$${min.toLocaleString()} – $${max.toLocaleString()}/yr`;
};

export const formatDuration = (months: number) =>
  months % 12 === 0 ? `${months / 12} year${months > 12 ? "s" : ""}` : `${months} months`;


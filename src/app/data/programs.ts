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

export interface Program {
  id: string;
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
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
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

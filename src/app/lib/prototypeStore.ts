export type ReviewStatus = "draft" | "pending" | "approved" | "rejected";

export interface RepresentativeApplication {
  id: string;
  fullName: string;
  email: string;
  position: string;
  department: string;
  contactNumber: string;
  universityName: string;
  country: string;
  city: string;
  websiteUrl: string;
  contactEmail: string;
  address: string;
  proofDocumentName: string;
  verificationNote: string;
  officialSourceLink: string;
  confirmAuthorized: boolean;
  status: ReviewStatus;
  submittedDate: string;
  updatedAt: string;
  rejectionReason?: string;
}

export interface ProgramSource {
  url: string;
  description: string;
  category: string;
}

export interface ProgramSubmission {
  id: string;
  universityId: string;
  university: string;
  program: string;
  degreeLevel: string;
  fieldOfStudy: string;
  country: string;
  city: string;
  duration: string;
  intake: string;
  faculty: string;
  requirements: string;
  description: string;
  tuitionMin: string;
  tuitionMax: string;
  currency: string;
  feeNotes: string;
  sources: ProgramSource[];
  actionType: "Create" | "Update";
  status: ReviewStatus;
  sourceStatus: "pending" | "verified" | "invalid";
  submittedBy: string;
  submittedDate: string;
  lastUpdated: string;
  feedback?: string;
}

export interface CatalogueImport {
  id: string;
  universityId: string;
  university: string;
  rep: string;
  method: "json" | "csv" | "url" | "coverage";
  source: string;
  programCount: number;
  issues: number;
  completeness: number;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
  feedback?: string;
}

export interface OfficialSourceLink {
  id: string;
  universityId: string;
  university: string;
  url: string;
  description: string;
  category: string;
  status: "pending" | "verified" | "invalid";
  addedDate: string;
  lastChecked: string;
  submittedBy: string;
}

const APPLICATIONS_KEY = "unisense.repApplications";
const APPLICATION_DRAFT_KEY = "unisense.repApplicationDraft";
const CURRENT_APPLICATION_KEY = "unisense.currentRepApplicationId";
const SUBMISSIONS_KEY = "unisense.programSubmissions";
const SUBMISSION_DRAFT_KEY = "unisense.programSubmissionDraft";
const IMPORTS_KEY = "unisense.catalogueImports";
const SOURCE_LINKS_KEY = "unisense.officialSourceLinks";

export const PROTOTYPE_DATA_CHANGED_EVENT = "unisense:prototype-data-changed";

const now = () => new Date().toISOString();
const read = <T,>(key: string, fallback: T): T => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};
const write = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(PROTOTYPE_DATA_CHANGED_EVENT));
};
const nextId = (prefix: string) => `${prefix}-${Date.now().toString().slice(-8)}`;

const seedApplications: RepresentativeApplication[] = [
  {
    id: "APP-001",
    fullName: "Dr. Aisha Rahman",
    email: "aisha@utm.my",
    position: "Dean of Computing",
    department: "Faculty of Computing",
    contactNumber: "+60 7-553 3333",
    universityName: "Universiti Teknologi Malaysia",
    country: "Malaysia",
    city: "Johor Bahru",
    websiteUrl: "https://www.utm.my",
    contactEmail: "admissions@utm.my",
    address: "81310 Johor Bahru, Johor, Malaysia",
    proofDocumentName: "utm-authorization.pdf",
    verificationNote: "Official faculty representative.",
    officialSourceLink: "https://www.utm.my",
    confirmAuthorized: true,
    status: "pending",
    submittedDate: "2026-05-28T08:00:00.000Z",
    updatedAt: "2026-05-28T08:00:00.000Z",
  },
];

const seedSubmissions: ProgramSubmission[] = [
  {
    id: "SUB-001",
    universityId: "utm",
    university: "Universiti Teknologi Malaysia",
    program: "Master of Computer Science",
    degreeLevel: "Master",
    fieldOfStudy: "Computer Science",
    country: "Malaysia",
    city: "Johor Bahru",
    duration: "2 years",
    intake: "September",
    faculty: "Faculty of Computing",
    requirements: "Bachelor degree in a related field",
    description: "Advanced study in computing and software systems.",
    tuitionMin: "18000",
    tuitionMax: "22000",
    currency: "MYR",
    feeNotes: "",
    sources: [{ url: "https://www.utm.my/programmes/", description: "Official program page", category: "Programme Overview" }],
    actionType: "Create",
    status: "approved",
    sourceStatus: "verified",
    submittedBy: "UTM Representative",
    submittedDate: "2026-05-25T08:00:00.000Z",
    lastUpdated: "2026-05-28T08:00:00.000Z",
  },
];

const seedImports: CatalogueImport[] = [
  { id: "IMP-012", universityId: "utm", university: "Universiti Teknologi Malaysia", rep: "Ahmad Razak", method: "csv", source: "utm_programs_2026.csv", programCount: 147, issues: 15, completeness: 90, submittedDate: "2026-05-30T08:00:00.000Z", status: "pending" },
  { id: "IMP-010", universityId: "nus", university: "National University of Singapore", rep: "Dr. Sarah Chen", method: "url", source: "https://www.nus.edu.sg/programmes", programCount: 210, issues: 0, completeness: 100, submittedDate: "2026-05-28T08:00:00.000Z", status: "approved" },
];

const seedSourceLinks: OfficialSourceLink[] = [
  { id: "SL-001", universityId: "utm", university: "Universiti Teknologi Malaysia", url: "https://www.utm.my/programmes/", description: "Official UTM Programmes Page", category: "Programme Overview", status: "verified", addedDate: "2026-05-15T08:00:00.000Z", lastChecked: "2026-05-30T08:00:00.000Z", submittedBy: "Ahmad Razak" },
  { id: "SL-002", universityId: "utm", university: "Universiti Teknologi Malaysia", url: "https://www.utm.my/fees/", description: "Tuition & Fees Schedule 2026", category: "Tuition", status: "verified", addedDate: "2026-05-15T08:00:00.000Z", lastChecked: "2026-05-30T08:00:00.000Z", submittedBy: "Ahmad Razak" },
  { id: "SL-003", universityId: "utm", university: "Universiti Teknologi Malaysia", url: "https://www.utm.my/admission/", description: "Admission Requirements Portal", category: "Admission", status: "pending", addedDate: "2026-05-28T08:00:00.000Z", lastChecked: "-", submittedBy: "Ahmad Razak" },
];

export const getRepresentativeApplications = () => {
  const stored = read<RepresentativeApplication[] | null>(APPLICATIONS_KEY, null);
  if (stored) return stored;
  write(APPLICATIONS_KEY, seedApplications);
  return seedApplications;
};

export const getRepresentativeApplicationDraft = () =>
  read<Partial<RepresentativeApplication>>(APPLICATION_DRAFT_KEY, {});

export const saveRepresentativeApplicationDraft = (draft: Partial<RepresentativeApplication>) =>
  write(APPLICATION_DRAFT_KEY, draft);

export const submitRepresentativeApplication = (draft: Partial<RepresentativeApplication>) => {
  const applications = getRepresentativeApplications();
  const existingId = localStorage.getItem(CURRENT_APPLICATION_KEY);
  const existing = applications.find((application) => application.id === existingId);
  const timestamp = now();
  const application: RepresentativeApplication = {
    id: existing?.id ?? nextId("APP"),
    fullName: draft.fullName ?? "",
    email: draft.email ?? "",
    position: draft.position ?? "",
    department: draft.department ?? "",
    contactNumber: draft.contactNumber ?? "",
    universityName: draft.universityName ?? "",
    country: draft.country ?? "",
    city: draft.city ?? "",
    websiteUrl: draft.websiteUrl ?? "",
    contactEmail: draft.contactEmail ?? "",
    address: draft.address ?? "",
    proofDocumentName: draft.proofDocumentName ?? "",
    verificationNote: draft.verificationNote ?? "",
    officialSourceLink: draft.officialSourceLink ?? "",
    confirmAuthorized: Boolean(draft.confirmAuthorized),
    status: "pending",
    submittedDate: existing?.submittedDate ?? timestamp,
    updatedAt: timestamp,
  };
  write(APPLICATIONS_KEY, existing
    ? applications.map((item) => item.id === application.id ? application : item)
    : [application, ...applications]);
  localStorage.setItem(CURRENT_APPLICATION_KEY, application.id);
  localStorage.removeItem(APPLICATION_DRAFT_KEY);
  return application;
};

export const getCurrentRepresentativeApplication = () => {
  const id = localStorage.getItem(CURRENT_APPLICATION_KEY);
  return getRepresentativeApplications().find((application) => application.id === id);
};

export const reviewRepresentativeApplication = (id: string, status: "approved" | "rejected", rejectionReason = "") => {
  const applications = getRepresentativeApplications().map((application) =>
    application.id === id
      ? { ...application, status, rejectionReason: status === "rejected" ? rejectionReason : undefined, updatedAt: now() }
      : application
  );
  write(APPLICATIONS_KEY, applications);
};

export const getProgramSubmissions = () => {
  const stored = read<ProgramSubmission[] | null>(SUBMISSIONS_KEY, null);
  if (stored) return stored;
  write(SUBMISSIONS_KEY, seedSubmissions);
  return seedSubmissions;
};

export const getProgramSubmissionDraft = () =>
  read<Partial<ProgramSubmission>>(SUBMISSION_DRAFT_KEY, {});

export const saveProgramSubmissionDraft = (draft: Partial<ProgramSubmission>) =>
  write(SUBMISSION_DRAFT_KEY, draft);

export const submitProgramSubmission = (draft: Partial<ProgramSubmission>, asDraft = false) => {
  const submissions = getProgramSubmissions();
  const timestamp = now();
  const submission: ProgramSubmission = {
    id: draft.id ?? nextId("SUB"),
    universityId: "utm",
    university: "Universiti Teknologi Malaysia",
    program: draft.program ?? "",
    degreeLevel: draft.degreeLevel ?? "",
    fieldOfStudy: draft.fieldOfStudy ?? "",
    country: draft.country ?? "Malaysia",
    city: draft.city ?? "Johor Bahru",
    duration: draft.duration ?? "",
    intake: draft.intake ?? "",
    faculty: draft.faculty ?? "",
    requirements: draft.requirements ?? "",
    description: draft.description ?? "",
    tuitionMin: draft.tuitionMin ?? "",
    tuitionMax: draft.tuitionMax ?? "",
    currency: draft.currency ?? "MYR",
    feeNotes: draft.feeNotes ?? "",
    sources: draft.sources ?? [],
    actionType: draft.actionType ?? "Create",
    status: asDraft ? "draft" : "pending",
    sourceStatus: "pending",
    submittedBy: draft.submittedBy ?? "UTM Representative",
    submittedDate: draft.submittedDate ?? timestamp,
    lastUpdated: timestamp,
    feedback: undefined,
  };
  const exists = submissions.some((item) => item.id === submission.id);
  write(SUBMISSIONS_KEY, exists
    ? submissions.map((item) => item.id === submission.id ? submission : item)
    : [submission, ...submissions]);
  if (!asDraft) localStorage.removeItem(SUBMISSION_DRAFT_KEY);
  return submission;
};

export const reviewProgramSubmission = (id: string, status: "approved" | "rejected", feedback = "") => {
  const submissions = getProgramSubmissions().map((submission) =>
    submission.id === id
      ? {
          ...submission,
          status,
          sourceStatus: status === "approved" ? "verified" as const : "invalid" as const,
          feedback: status === "rejected" ? feedback : undefined,
          lastUpdated: now(),
        }
      : submission
  );
  write(SUBMISSIONS_KEY, submissions);
};

export const getProgramSubmission = (id?: string) =>
  getProgramSubmissions().find((submission) => submission.id === id);

export const getCatalogueImports = () => {
  const stored = read<CatalogueImport[] | null>(IMPORTS_KEY, null);
  if (stored) return stored;
  write(IMPORTS_KEY, seedImports);
  return seedImports;
};

export const submitCatalogueImport = (input: Pick<CatalogueImport, "method" | "source"> & Partial<Pick<CatalogueImport, "programCount" | "issues" | "completeness">>) => {
  const record: CatalogueImport = {
    id: nextId("IMP"),
    universityId: "utm",
    university: "Universiti Teknologi Malaysia",
    rep: "Ahmad Razak",
    method: input.method,
    source: input.source,
    programCount: input.programCount ?? 147,
    issues: input.issues ?? 15,
    completeness: input.completeness ?? 90,
    submittedDate: now(),
    status: "pending",
  };
  write(IMPORTS_KEY, [record, ...getCatalogueImports()]);
  return record;
};

export const reviewCatalogueImport = (id: string, status: "approved" | "rejected", feedback = "") =>
  write(IMPORTS_KEY, getCatalogueImports().map((item) =>
    item.id === id ? { ...item, status, feedback: status === "rejected" ? feedback : undefined } : item
  ));

export const getOfficialSourceLinks = () => {
  const stored = read<OfficialSourceLink[] | null>(SOURCE_LINKS_KEY, null);
  if (stored) return stored;
  write(SOURCE_LINKS_KEY, seedSourceLinks);
  return seedSourceLinks;
};

export const addOfficialSourceLink = (input: Pick<OfficialSourceLink, "url" | "description" | "category">) => {
  const record: OfficialSourceLink = {
    id: nextId("SL"),
    universityId: "utm",
    university: "Universiti Teknologi Malaysia",
    ...input,
    status: "pending",
    addedDate: now(),
    lastChecked: "-",
    submittedBy: "Ahmad Razak",
  };
  write(SOURCE_LINKS_KEY, [record, ...getOfficialSourceLinks()]);
  return record;
};

export const removeOfficialSourceLink = (id: string) =>
  write(SOURCE_LINKS_KEY, getOfficialSourceLinks().filter((link) => link.id !== id));

export const reviewOfficialSourceLink = (id: string, status: "verified" | "invalid") =>
  write(SOURCE_LINKS_KEY, getOfficialSourceLinks().map((link) =>
    link.id === id ? { ...link, status, lastChecked: now() } : link
  ));

import type { Program } from "../data/programs";

export interface StudyPreferences {
  country: string;
  degreeLevel: string;
  field: string;
  budget: string;
  language: string;
  duration: string;
  careerGoal: string;
  academicBackground: string;
}

export interface MatchReason {
  label: string;
  matched: boolean;
  detail: string;
}

export const DEFAULT_STUDY_PREFERENCES: StudyPreferences = {
  country: "Malaysia",
  degreeLevel: "Master",
  field: "Data Science",
  budget: "40000",
  language: "English",
  duration: "24",
  careerGoal: "Build data products and lead applied AI projects",
  academicBackground: "Bachelor's degree in computing or a related field",
};

const PREFERENCES_KEY = "unisense.studyPreferences";

export function getStudyPreferences(): StudyPreferences {
  try {
    return {
      ...DEFAULT_STUDY_PREFERENCES,
      ...JSON.parse(localStorage.getItem(PREFERENCES_KEY) ?? "{}"),
    };
  } catch {
    return DEFAULT_STUDY_PREFERENCES;
  }
}

export function saveStudyPreferences(preferences: StudyPreferences) {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}

const normalize = (value: string) => value.toLowerCase().trim();
const words = (value: string) =>
  normalize(value).split(/[^a-z0-9]+/).filter((word) => word.length > 3);

export function scoreProgram(program: Program, preferences: StudyPreferences) {
  const budget = Number(preferences.budget) || Number.POSITIVE_INFINITY;
  const duration = Number(preferences.duration) || Number.POSITIVE_INFINITY;
  const careerWords = words(preferences.careerGoal);
  const backgroundWords = words(preferences.academicBackground);
  const programText = normalize(`${program.name} ${program.field} ${program.summary} ${program.requirements.join(" ")}`);

  const reasons: Array<MatchReason & { weight: number }> = [
    {
      label: "Field",
      matched: normalize(program.field) === normalize(preferences.field),
      detail: `Matches your preferred field: ${preferences.field}`,
      weight: 24,
    },
    {
      label: "Degree",
      matched: program.degreeLevel === preferences.degreeLevel,
      detail: `Matches your ${preferences.degreeLevel} study level`,
      weight: 16,
    },
    {
      label: "Country",
      matched: normalize(program.country) === normalize(preferences.country),
      detail: `Located in your preferred country: ${preferences.country}`,
      weight: 14,
    },
    {
      label: "Budget",
      matched: program.tuitionMin <= budget,
      detail: program.tuitionMin <= budget
        ? "Minimum annual tuition is within your budget"
        : "Tuition is above your selected annual budget",
      weight: 16,
    },
    {
      label: "Language",
      matched: normalize(program.language) === normalize(preferences.language),
      detail: `Taught in ${program.language}`,
      weight: 10,
    },
    {
      label: "Duration",
      matched: program.durationMonths <= duration,
      detail: program.durationMonths <= duration
        ? "Fits your preferred study duration"
        : "Longer than your preferred duration",
      weight: 8,
    },
    {
      label: "Career goal",
      matched: careerWords.some((word) => programText.includes(word)),
      detail: "Program content overlaps with your stated career goal",
      weight: 7,
    },
    {
      label: "Background",
      matched: backgroundWords.some((word) => programText.includes(word)),
      detail: "Admission profile relates to your academic background",
      weight: 5,
    },
  ];

  const score = Math.min(99, 18 + reasons.reduce((total, reason) => total + (reason.matched ? reason.weight : 0), 0));
  return { score, reasons };
}

const COMPARISON_KEY = "unisense.comparisonProgramIds";
export const COMPARISON_CHANGED_EVENT = "unisense:comparison-changed";

export function getComparisonProgramIds(): string[] {
  try {
    return JSON.parse(localStorage.getItem(COMPARISON_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function setComparisonProgramIds(ids: string[]) {
  localStorage.setItem(COMPARISON_KEY, JSON.stringify(ids.slice(0, 4)));
  window.dispatchEvent(new CustomEvent(COMPARISON_CHANGED_EVENT));
}

export function addComparisonProgram(programId: string) {
  const ids = getComparisonProgramIds();
  if (ids.includes(programId)) return { added: false, reason: "duplicate" as const };
  if (ids.length >= 4) return { added: false, reason: "limit" as const };
  setComparisonProgramIds([...ids, programId]);
  return { added: true, reason: "added" as const };
}

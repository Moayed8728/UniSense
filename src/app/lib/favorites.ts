const FAVORITES_KEY = "unisense.favoriteProgramIds";
export const FAVORITES_CHANGED_EVENT = "unisense:favorites-changed";

export function getFavoriteProgramIds(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function isFavoriteProgram(programId: string) {
  return getFavoriteProgramIds().includes(programId);
}

export function setFavoriteProgram(programId: string, favorite: boolean) {
  const current = new Set(getFavoriteProgramIds());
  if (favorite) current.add(programId);
  else current.delete(programId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...current]));
  window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT));
}

export function toggleFavoriteProgram(programId: string) {
  const favorite = !isFavoriteProgram(programId);
  setFavoriteProgram(programId, favorite);
  return favorite;
}

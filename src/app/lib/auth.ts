export type DemoRole = "student" | "admin" | "representative";

export interface DemoSession {
  email: string;
  role: DemoRole;
}

const SESSION_KEY = "unisense.demoSession";

export function getDemoSession(): DemoSession | null {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) ?? "null");
  } catch {
    return null;
  }
}

export function setDemoSession(session: DemoSession) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearDemoSession() {
  localStorage.removeItem(SESSION_KEY);
}

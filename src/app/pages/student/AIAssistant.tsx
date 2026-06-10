import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, ExternalLink, RotateCcw, Send, Sparkles, UserRound } from "lucide-react";
import { Link } from "react-router";
import { StudentLayout } from "../../components/StudentLayout";
import { formatFee, programs } from "../../data/programs";

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  text: string;
  programIds?: string[];
}

const CHAT_KEY = "unisense.aiAssistantMessages";
const starterMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hi, I am the UniSense study assistant. Ask me to find programs by field, country, degree level, or budget.",
};

const suggestions = [
  "Show me affordable data science programs",
  "Find Bachelor programs in Malaysia",
  "Which programs cost under $15,000?",
  "Recommend a Master program in artificial intelligence",
];

function loadMessages(): ChatMessage[] {
  try {
    const saved = JSON.parse(localStorage.getItem(CHAT_KEY) ?? "[]");
    return Array.isArray(saved) && saved.length ? saved : [starterMessage];
  } catch {
    return [starterMessage];
  }
}

function createAssistantReply(query: string): ChatMessage {
  const normalized = query.toLowerCase();
  const fields = Array.from(new Set(programs.map((program) => program.field)));
  const countries = Array.from(new Set(programs.map((program) => program.country)));
  const field = fields.find((value) => normalized.includes(value.toLowerCase()));
  const country = countries.find((value) => normalized.includes(value.toLowerCase()));
  const degree = ["Bachelor", "Master", "PhD"].find((value) =>
    normalized.includes(value.toLowerCase()),
  );
  const budgetMatch = normalized.match(
    /(?:under|below|budget(?:\s+of)?|up to)\s*\$?\s*([\d,]+)/,
  );
  const budget = budgetMatch ? Number(budgetMatch[1].replace(/,/g, "")) : null;

  const ranked = programs
    .map((program) => {
      let score = 0;
      if (field && program.field === field) score += 5;
      if (country && program.country === country) score += 4;
      if (degree && program.degreeLevel === degree) score += 3;
      if (budget !== null && program.tuitionMin <= budget) score += 4;
      const searchable = `${program.name} ${program.field} ${program.university} ${program.summary}`.toLowerCase();
      normalized
        .split(/[^a-z0-9]+/)
        .filter((word) => word.length > 3)
        .forEach((word) => {
          if (searchable.includes(word)) score += 1;
        });
      return { program, score };
    })
    .filter(({ program, score }) => {
      if (field && program.field !== field) return false;
      if (country && program.country !== country) return false;
      if (degree && program.degreeLevel !== degree) return false;
      if (budget !== null && program.tuitionMin > budget) return false;
      return score > 0;
    })
    .sort((a, b) => b.score - a.score || b.program.rating - a.program.rating)
    .slice(0, 3);

  if (!ranked.length) {
    return {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "I could not find an exact match in the current database. Try changing the country, degree level, field, or budget.",
    };
  }

  const criteria = [degree, field, country, budget !== null ? `under $${budget.toLocaleString()}` : null]
    .filter(Boolean)
    .join(", ");

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    text: `I found ${ranked.length} strong option${ranked.length === 1 ? "" : "s"}${criteria ? ` for ${criteria}` : ""}. Open a program below to review its university, fees, requirements, and sources.`,
    programIds: ranked.map(({ program }) => program.id),
  };
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const programMap = useMemo(
    () => new Map(programs.map((program) => [program.id, program])),
    [],
  );

  const send = (event?: FormEvent) => {
    event?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };
    setMessages((current) => [...current, userMessage, createAssistantReply(text)]);
    setInput("");
  };

  const reset = () => {
    setMessages([starterMessage]);
    setInput("");
  };

  return (
    <StudentLayout>
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="relative overflow-hidden rounded-3xl border border-accent-violet/20 bg-[linear-gradient(120deg,rgba(28,24,52,0.98),rgba(15,24,42,0.96))] p-8 shadow-premium-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.28),transparent_34%)]" />
          <div className="relative flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-violet">
                <Sparkles className="h-4 w-4" /> Database-guided assistance
              </div>
              <h1 className="text-4xl font-bold">UniSense AI Assistant</h1>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Ask natural-language questions and receive results from the current
                university-linked program database.
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold hover:bg-white/[0.09]"
            >
              <RotateCcw className="h-4 w-4" /> New conversation
            </button>
          </div>
        </section>

        <section className="glass-card flex min-h-[620px] flex-col overflow-hidden rounded-3xl border-glow shadow-premium-lg">
          <div className="flex items-center gap-3 border-b border-glass-border px-6 py-4">
            <div className="rounded-xl bg-success/10 p-2.5">
              <Bot className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="font-semibold">Study Assistant</p>
              <p className="text-xs text-muted-foreground">Local prototype · Current UniSense data</p>
            </div>
          </div>

          <div className="app-sidebar-scroll flex-1 space-y-5 overflow-y-auto p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
              >
                {message.role === "assistant" && (
                  <div className="shrink-0 rounded-xl bg-accent-violet/10 p-2.5">
                    <Sparkles className="h-4 w-4 text-accent-violet" />
                  </div>
                )}
                <div className={`max-w-3xl ${message.role === "user" ? "order-first" : ""}`}>
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-tr-sm border border-accent-blue/25 bg-accent-blue/15"
                        : "rounded-tl-sm border border-white/[0.07] bg-white/[0.035]"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.programIds && (
                    <div className="mt-3 grid gap-2">
                      {message.programIds.map((programId) => {
                        const program = programMap.get(programId);
                        if (!program) return null;
                        return (
                          <Link
                            key={program.id}
                            to={`/programs/${program.id}`}
                            className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 hover:border-accent-violet/30 hover:bg-accent-violet/[0.05]"
                          >
                            <div>
                              <p className="text-sm font-semibold">{program.name}</p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {program.university} · {formatFee(program.tuitionMin, program.tuitionMax)}
                              </p>
                            </div>
                            <ExternalLink className="h-4 w-4 shrink-0 text-accent-violet" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="shrink-0 rounded-xl bg-accent-blue/10 p-2.5">
                    <UserRound className="h-4 w-4 text-accent-cyan" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-glass-border p-5">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground hover:border-accent-violet/30 hover:text-foreground"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={send} className="flex gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about a field, country, degree level, or budget..."
                className="min-w-0 flex-1 rounded-xl border border-input-border bg-input-background px-4 py-3.5 focus:border-input-focus focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-success px-5 py-3.5 font-semibold text-white shadow-premium"
              >
                <Send className="h-4 w-4" /> Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </StudentLayout>
  );
}

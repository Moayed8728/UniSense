import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BrainCircuit, GraduationCap } from "lucide-react";
import { UniSenseLogo } from "../components/UniSenseLogo";

const messages = [
  "Mapping verified universities",
  "Connecting programs to institutions",
  "Preparing intelligent recommendations",
];

export default function IntroSplash() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageTimer = window.setInterval(
      () => setMessageIndex((current) => Math.min(current + 1, messages.length - 1)),
      1400,
    );
    const redirectTimer = window.setTimeout(() => navigate("/student", { replace: true }), 5000);
    return () => {
      window.clearInterval(messageTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <main className="min-h-[100dvh] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 py-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_55%)]" />
      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-accent-blue/20 blur-[140px] animate-pulse" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-primary/25 blur-[150px] animate-pulse" style={{ animationDelay: "700ms" }} />

      {/* Decorative dots */}
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white/50 animate-pulse"
          style={{
            left: `${8 + ((index * 29) % 84)}%`,
            top: `${10 + ((index * 37) % 78)}%`,
            animationDelay: `${index * 130}ms`,
          }}
        />
      ))}

      <section className="relative w-full max-w-2xl text-center">
        {/* Centered logo with clean icon bar below (no floating mess) */}
        <div className="mb-6">
          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-xs">
            <div className="absolute -inset-6 gradient-primary blur-3xl opacity-20" />
            <UniSenseLogo className="relative w-full h-auto mx-auto" />
          </div>

          {/* Centered icon bar - AI + Academic icons */}
          <div className="flex justify-center mt-3">
            <div className="inline-flex items-center gap-3 glass-card rounded-2xl px-4 py-2 border-glow shadow-premium">
              <div className="flex items-center gap-2 text-accent-cyan">
                <BrainCircuit className="w-4 h-4" />
                <span className="text-[10px] font-medium tracking-wide">AI</span>
              </div>
              <div className="w-px h-3.5 bg-white/25" />
              <div className="flex items-center gap-2 text-accent-violet">
                <GraduationCap className="w-4 h-4" />
                <span className="text-[10px] font-medium tracking-wide">ACADEMIC</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.38em] text-accent-cyan font-semibold mb-2 sm:mb-3">Intelligent academic discovery</p>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10">AI-powered university program discovery</p>

        {/* Progress / status card */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border-glow shadow-premium max-w-md sm:max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-foreground font-medium">{messages[messageIndex]}</span>
            <span className="inline-block w-0.5 h-4 bg-accent-cyan animate-pulse" />
          </div>
          <div className="h-1 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full rounded-full gradient-primary intro-progress" />
          </div>
        </div>
      </section>
    </main>
  );
}

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
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_55%)]" />
      <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-accent-blue/20 blur-[140px] animate-pulse" />
      <div className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-primary/25 blur-[150px] animate-pulse" style={{ animationDelay: "700ms" }} />

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
        <div className="relative w-full max-w-xl h-48 mx-auto mb-5">
          <div className="absolute inset-8 gradient-primary blur-3xl opacity-25 animate-pulse" />
          <UniSenseLogo className="relative w-full h-full" />
          <div className="absolute -right-4 -top-3 p-2.5 rounded-xl glass-card border border-accent-cyan/30">
            <BrainCircuit className="w-5 h-5 text-accent-cyan" />
          </div>
          <div className="absolute -left-4 -bottom-3 p-2.5 rounded-xl glass-card border border-accent-violet/30">
            <GraduationCap className="w-5 h-5 text-accent-violet" />
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.38em] text-accent-cyan font-semibold mb-3">Intelligent academic discovery</p>
        <p className="text-xl text-muted-foreground mb-10">AI-powered university program discovery</p>

        <div className="glass-card rounded-2xl p-5 border-glow shadow-premium max-w-lg mx-auto">
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

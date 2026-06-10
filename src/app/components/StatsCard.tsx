import { LucideIcon } from "lucide-react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: "blue" | "purple" | "green" | "amber" | "red" | "indigo" | "violet" | "cyan";
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  color = "blue"
}: StatsCardProps) {
  const colorStyles = {
    blue: {
      bg: "bg-accent-blue/10",
      text: "text-accent-blue",
      glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    },
    purple: {
      bg: "bg-primary/10",
      text: "text-primary",
      glow: "group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
    },
    green: {
      bg: "bg-success/10",
      text: "text-success",
      glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
    },
    amber: {
      bg: "bg-warning/10",
      text: "text-warning",
      glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
    },
    red: {
      bg: "bg-destructive/10",
      text: "text-destructive",
      glow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
    },
    indigo: {
      bg: "bg-primary/10",
      text: "text-primary",
      glow: "group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
    },
    violet: {
      bg: "bg-accent-violet/10",
      text: "text-accent-violet",
      glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
    },
    cyan: {
      bg: "bg-accent-cyan/10",
      text: "text-accent-cyan",
      glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
    },
  };

  const currentColor = colorStyles[color];

  return (
    <div className="group glass-card rounded-2xl p-6 shadow-premium glass-card-hover border-glow transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2 font-medium">{title}</p>
          <p className="text-4xl font-bold text-foreground mb-3 tracking-tight">{value}</p>
          {trend && (
            <div className={`flex items-center gap-1.5 text-sm font-medium ${trendUp ? 'text-success' : 'text-destructive'}`}>
              {trendUp ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              <span>{trend}</span>
            </div>
          )}
        </div>
        <div className="relative">
          <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${currentColor.text}`} />
          <div className={`relative ${currentColor.bg} p-3.5 rounded-xl transition-all duration-300 ${currentColor.glow}`}>
            <Icon className={`w-7 h-7 ${currentColor.text}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

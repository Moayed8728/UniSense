type StatusType =
  | "pending"
  | "approved"
  | "rejected"
  | "draft"
  | "verified"
  | "invalid"
  | "active"
  | "suspended";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const styles = {
    pending: {
      bg: "bg-warning/10",
      text: "text-warning",
      border: "border-warning/30",
      dot: "bg-warning"
    },
    approved: {
      bg: "bg-success/10",
      text: "text-success",
      border: "border-success/30",
      dot: "bg-success"
    },
    rejected: {
      bg: "bg-destructive/10",
      text: "text-destructive",
      border: "border-destructive/30",
      dot: "bg-destructive"
    },
    draft: {
      bg: "bg-muted-foreground/10",
      text: "text-muted-foreground",
      border: "border-muted-foreground/20",
      dot: "bg-muted-foreground"
    },
    verified: {
      bg: "bg-accent-blue/10",
      text: "text-accent-blue",
      border: "border-accent-blue/30",
      dot: "bg-accent-blue"
    },
    invalid: {
      bg: "bg-destructive/10",
      text: "text-destructive",
      border: "border-destructive/30",
      dot: "bg-destructive"
    },
    active: {
      bg: "bg-success/10",
      text: "text-success",
      border: "border-success/30",
      dot: "bg-success"
    },
    suspended: {
      bg: "bg-muted/30",
      text: "text-muted-foreground",
      border: "border-muted-foreground/20",
      dot: "bg-muted-foreground"
    },
  };

  const labels = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    draft: "Draft",
    verified: "Verified",
    invalid: "Invalid",
    active: "Active",
    suspended: "Suspended",
  };

  const currentStyle = styles[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${currentStyle.bg} ${currentStyle.text} ${currentStyle.border} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${currentStyle.dot} animate-pulse`} />
      {labels[status]}
    </span>
  );
}

import logo from "../../assets/unisense-logo.png";
import { Link } from "react-router";

interface UniSenseLogoProps {
  className?: string;
  compact?: boolean;
}

export function UniSenseBrandLink({ className = "w-72 h-24 mx-auto mb-10" }: { className?: string }) {
  return (
    <Link to="/" className={`block ${className}`}>
      <UniSenseLogo className="w-full h-full" />
    </Link>
  );
}

export function UniSenseLogo({ className = "", compact = false }: UniSenseLogoProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={logo}
        alt="UniSense - Discover Your Path"
        className={`h-full max-w-none object-contain object-center ${compact ? "w-auto" : "w-full"}`}
      />
    </div>
  );
}

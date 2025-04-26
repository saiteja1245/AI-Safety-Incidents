
import { Severity } from "@/types/incident";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const severityStyles = {
    Low: "bg-severity-low/90 hover:bg-severity-low shadow-lg shadow-severity-low/20 border-severity-low/20",
    Medium: "bg-severity-medium/90 hover:bg-severity-medium shadow-lg shadow-severity-medium/20 border-severity-medium/20",
    High: "bg-severity-high/90 hover:bg-severity-high shadow-lg shadow-severity-high/20 border-severity-high/20"
  };

  return (
    <Badge 
      className={cn(
        "transition-all duration-300 backdrop-blur-sm hover:scale-105 font-medium border",
        severityStyles[severity]
      )}
    >
      {severity}
    </Badge>
  );
};

export default SeverityBadge;

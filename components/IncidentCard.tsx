
import { useState } from "react";
import { Incident } from "@/types/incident";
import SeverityBadge from "./SeverityBadge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard = ({ incident }: IncidentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-gray-100/50 h-[280px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white pointer-events-none" />
      
      <CardHeader className="relative space-y-2 flex-none">
        <div className="flex justify-between items-start gap-4 min-h-[3rem]">
          <h3 className="text-lg font-semibold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight line-clamp-2">
            {incident.title}
          </h3>
          <SeverityBadge severity={incident.severity} className="flex-shrink-0" />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="inline-block h-2 w-2 rounded-full bg-primary/40 animate-pulse" />
          <time className="font-medium whitespace-nowrap">
            {format(new Date(incident.reported_at), "MMM dd, yyyy")}
          </time>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-4 flex-1 flex flex-col justify-between">
        <div 
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isExpanded ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-gray-600 leading-relaxed line-clamp-4">{incident.description}</p>
        </div>
        
        <Button
          variant="outline"
          className="w-full bg-transparent hover:bg-gray-50/80 transition-colors border-gray-200/80 backdrop-blur-sm mt-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
          ) : (
            <ChevronDown className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-0.5" />
          )}
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {isExpanded ? "Hide Details" : "View Details"}
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default IncidentCard;

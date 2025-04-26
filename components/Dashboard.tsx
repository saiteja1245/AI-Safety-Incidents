
import { useState } from "react";
import { Incident, Severity } from "@/types/incident";
import { initialIncidents } from "@/data/incidents";
import IncidentCard from "./IncidentCard";
import ReportIncidentForm from "./ReportIncidentForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ShieldCheck, Filter } from "lucide-react";

const Dashboard = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<"All" | Severity>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleAddIncident = (newIncident: Omit<Incident, "id" | "reported_at">) => {
    const incident: Incident = {
      ...newIncident,
      id: Math.max(...incidents.map((i) => i.id)) + 1,
      reported_at: new Date().toISOString(),
    };
    setIncidents([incident, ...incidents]);
  };

  const filteredAndSortedIncidents = incidents
    .filter((incident) => severityFilter === "All" || incident.severity === severityFilter)
    .sort((a, b) => {
      const comparison = new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
      return sortOrder === "asc" ? comparison : -comparison;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100/50 p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/5">
                <ShieldCheck className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  AI Safety Incidents
                </h1>
                <p className="text-gray-500 mt-2">
                  Monitor and track critical AI safety events in real-time
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center p-4 rounded-xl bg-gray-50/50 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center gap-2 flex-1 min-w-[200px] max-w-xs">
                <Filter className="h-4 w-4 text-gray-400" />
                <Select value={severityFilter} onValueChange={(value: "All" | Severity) => setSeverityFilter(value)}>
                  <SelectTrigger className="bg-white border-gray-200">
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Severities</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 border-gray-200"
              >
                {sortOrder === "asc" ? (
                  <><ArrowUp className="h-4 w-4" /> Oldest First</>
                ) : (
                  <><ArrowDown className="h-4 w-4" /> Newest First</>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {filteredAndSortedIncidents.map((incident, index) => (
            <div
              key={incident.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "backwards"
              }}
            >
              <IncidentCard incident={incident} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ReportIncidentForm onSubmit={handleAddIncident} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

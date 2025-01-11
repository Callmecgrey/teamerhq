// components/chat/ChannelInfoSidebar.tsx
// components/chat/ChannelInfoSidebar.tsx
import { Button } from "@/components/ui/button";
import { X, Hash } from "lucide-react";

export default function ChannelInfoSidebar({
  channel,
  onClose,
  onTeamMemberClick,
}: {
  channel: {
    name: string;
    description: string;
    teamMembers?: { name: string; role: string }[];
  };
  onClose: () => void;
  onTeamMemberClick: (member: { name: string; role: string }) => void;
}) {
  // Define demo team members if none are provided
  const demoTeamMembers = [
    { name: "Alice Johnson", role: "Team Lead" },
    { name: "Bob Smith", role: "Developer" },
    { name: "Charlie Davis", role: "Designer" },
    { name: "Dana Lee", role: "QA Engineer" },
    { name: "Evan Wright", role: "Project Manager" },
    { name: "Fiona Hill", role: "Product Owner" },
    { name: "George Clark", role: "Business Analyst" },
    { name: "Hannah Adams", role: "Scrum Master" },
    { name: "Ian Bell", role: "System Architect" },
    { name: "Jessica Taylor", role: "UX Researcher" },
    { name: "Kyle Brown", role: "Frontend Developer" },
    { name: "Laura Evans", role: "Backend Developer" },
    { name: "Mike Johnson", role: "DevOps Engineer" },
    { name: "Nina Carter", role: "Tester" },
    { name: "Oliver Stone", role: "Support Specialist" },
  ];

  const teamMembers = channel.teamMembers?.length
    ? channel.teamMembers
    : demoTeamMembers;

  return (
    <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Hash className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">{channel.name}</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Content Section */}
      <div className="flex-grow space-y-8 overflow-y-auto">
        {/* Description */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase">Description</h3>
          <p className="mt-2 text-sm text-foreground">
            {channel.description || "No description available."}
          </p>
        </div>

        {/* Team Members */}
        {teamMembers && teamMembers.length > 0 ? (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase">
              Team Members
            </h3>
            <ul className="mt-4 space-y-3">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => onTeamMemberClick(member)}
                >
                  <div className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center text-sm font-medium text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase">
              Team Members
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No team members available.
            </p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t pt-4">
        <Button variant="outline" className="w-full">
          Invite Members
        </Button>
      </div>
    </div>
  );
}


// components/chat/ChannelInfoSidebar.tsx
import { Button } from "@/components/ui/button";
import { X, Hash } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ChannelInfoSidebar({
  channel,
  onClose,
  onTeamMemberClick,
}: {
  channel: {
    name: string;
    description: string;
    teamMembers?: { name: string; position: string }[];
  };
  onClose: () => void;
  onTeamMemberClick: (member: { name: string; position: string }) => void;
}) {
  const demoTeamMembers = [
    { name: "Alice Johnson", position: "Team Lead" },
    { name: "Bob Smith", position: "Developer" },
    { name: "Charlie Davis", position: "Designer" },
    { name: "Dana Lee", position: "QA Engineer" },
    { name: "Evan Wright", position: "Project Manager" },
    { name: "Fiona Hill", position: "Product Owner" },
    { name: "George Clark", position: "Business Analyst" },
    { name: "Hannah Adams", position: "Scrum Master" },
    { name: "Ian Bell", position: "System Architect" },
    { name: "Jessica Taylor", position: "UX Researcher" },
    { name: "Kyle Brown", position: "Frontend Developer" },
    { name: "Laura Evans", position: "Backend Developer" },
    { name: "Mike Johnson", position: "DevOps Engineer" },
    { name: "Nina Carter", position: "Tester" },
    { name: "Oliver Stone", position: "Support Specialist" },
  ];

  const teamMembers = channel.teamMembers?.length
    ? channel.teamMembers
    : demoTeamMembers;

  const handleClose = () => {
    onClose();
  };

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
        <Button variant="ghost" size="icon" onClick={handleClose}>
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

        {/* Team Members Section */}
        <div className="sticky top-0 bg-card z-10">
          <h3 className="text-sm font-medium text-muted-foreground uppercase border-b pb-2">
            Team Members
          </h3>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
          {teamMembers && teamMembers.length > 0 ? (
            <ul className="space-y-3">
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
                    <p className="text-xs text-muted-foreground">{member.position}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">No team members available.</p>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t pt-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              Manage Members
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Manage Team Member</SheetTitle>
              <SheetDescription>
                Add new members or remove existing members
              </SheetDescription>
            </SheetHeader>

            {/* Scrollable Member List */}
            <div className="space-y-4 mt-4 overflow-y-auto max-h-[70vh]">
              {demoTeamMembers.map((member, index) => {
                const isMemberInChannel = teamMembers.some(
                  (teamMember) => teamMember.name === member.name
                );

                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.position}</p>
                    </div>
                    {isMemberInChannel ? (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => console.log(`Removed ${member.name}`)}
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => console.log(`Added ${member.name}`)}
                      >
                        Add
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
            <Button variant="secondary" className="mt-6 w-full">
              Add New Member
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
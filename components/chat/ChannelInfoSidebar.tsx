// components/chat/ChannelInfoSidebar.tsx
import { Button } from "@/components/ui/button";
import { X, Hash } from "lucide-react";

export default function ChannelInfoSidebar({
  channel,
  onClose,
}: {
  channel: {
    name: string;
    description: string;
    teamMembers: { name: string; role: string }[];
  };
  onClose: () => void;
}) {
  return (
    <div className="w-[40%] border-l bg-card p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Hash className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{channel.name}</h2>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-sm font-medium mb-2">Description</h3>
          <p className="text-sm">{channel.description}</p>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-sm font-medium mb-2">Team Members</h3>
          <ul className="space-y-2">
            {channel.teamMembers.map((member, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-muted/10 flex items-center justify-center text-sm font-medium">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

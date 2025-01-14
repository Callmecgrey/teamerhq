// components/chat/ChannelInfoSidebar.tsx
import { Button } from "@/components/ui/button";
import { X, Hash, Users, Plus } from "lucide-react";
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
    { name: "Alice Johnson", position: "Team Lead" },
    { name: "Bob Smith", position: "Developer" },
    { name: "Charlie Davis", position: "Designer" },
    { name: "Alice Johnson", position: "Team Lead" },
    { name: "Bob Smith", position: "Developer" },
    { name: "Charlie Davis", position: "Designer" },
    { name: "Alice Johnson", position: "Team Lead" },
    { name: "Bob Smith", position: "Developer" },
    { name: "Charlie Davis", position: "Designer" },
  ];

  const teamMembers = channel.teamMembers?.length ? channel.teamMembers : demoTeamMembers;

  return (
    <div className="w-[25%] border-l border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm p-6 flex flex-col h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
            <Hash className="h-10 w-10 text-violet-600 dark:text-violet-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{channel.name}</h2>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
        >
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </div>

      {/* Content Section */}
      <div className="flex-grow space-y-8 overflow-y-auto">
        {/* Description */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">Description</h3>
          <p className="text-sm text-gray-900 dark:text-white">
            {channel.description || "No description available."}
          </p>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="sticky top-0 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm z-10 py-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">
              Team Members
            </h3>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-280px)] space-y-2 mt-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-colors"
                onClick={() => onTeamMemberClick(member)}
              >
                <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-sm font-medium text-violet-600 dark:text-violet-400">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full bg-violet-100 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-200 dark:hover:bg-violet-900/40 text-violet-700 dark:text-violet-300"
            >
              <Users className="w-4 h-4 mr-2" />
              Manage Members
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Manage Team Members</SheetTitle>
              <SheetDescription>Add or remove team members from this channel</SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              <Button className="w-full" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add New Member
              </Button>
              
              <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-sm font-medium text-violet-600 dark:text-violet-400">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{member.position}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      className="bg-red-100 hover:bg-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
// components/chat/Sidebar.tsx
import { Button } from "@/components/ui/button";
import { Plus, Hash, MessageSquare, Settings } from "lucide-react";

export default function Sidebar({
  onUserClick,
  onChannelClick,
}: {
  onUserClick: (user: any) => void;
  onChannelClick: (channel: any) => void;
}) {
  const mockChannels = [
    { name: "general", description: "General discussions for the team." },
    { name: "announcements", description: "Important updates and announcements." },
  ];

  return (
    <div className="w-64 bg-card border-r flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="font-semibold">Acme Corp</span>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Channels and Direct Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Channels */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Channels</span>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-1">
            {mockChannels.map((channel, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                onClick={() => onChannelClick(channel)}
              >
                <Hash className="h-4 w-4 mr-2" />
                {channel.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Direct Messages */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Direct Messages</span>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              onClick={() =>
                onUserClick({
                  name: "John Doe",
                  position: "Senior Developer",
                  role: "Engineering",
                  status: "online",
                })
              }
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              John Doe
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              size="sm"
              onClick={() =>
                onUserClick({
                  name: "Jane Smith",
                  position: "Product Manager",
                  role: "Product",
                  status: "offline",
                })
              }
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
              Jane Smith
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

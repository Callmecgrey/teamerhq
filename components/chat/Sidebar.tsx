// components/chat/Sidebar.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Hash, MessageSquare, Settings, LogOut, ChevronDown, Award } from "lucide-react"; // Add a logo/icon, I used "Award" here as an example
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Sidebar({
  onUserClick,
  onChannelClick,
}: {
  onUserClick: (user: any) => void;
  onChannelClick: (channel: any) => void;
}) {
  const [channelsOpen, setChannelsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  const mockChannels = [
    { name: "general", description: "General discussions for the team." },
    { name: "announcements", description: "Important updates and announcements." },
  ];

  const mockUsers = [
    { name: "John Doe", position: "Senior Developer", role: "Engineering", status: "online" },
    { name: "Jane Smith", position: "Product Manager", role: "Product", status: "offline" },
  ];

  const toggleChannels = () => setChannelsOpen(!channelsOpen);
  const toggleUsers = () => setUsersOpen(!usersOpen);

  const workspaces = [
    { name: "Acme Corp", id: "1" },
    { name: "Tech Co", id: "2" },
    { name: "Design Studio", id: "3" },
  ];

  const handleWorkspaceChange = (workspace: any) => {
    console.log("Switched to workspace:", workspace.name);
  };

  const handleAddWorkspace = () => {
    console.log("Add new workspace");
  };

  return (
    <div className="w-64 bg-card border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Workspace Dropdown with Logo, Name, and Chevron Icon Inside the Box */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  {/* Container with Border Around the Logo, Workspace Name, and Chevron Icon */}
                  <div className="flex items-center space-x-2 border border-muted-foreground rounded-md p-2">
                    <Award className="h-5 w-5 text-muted-foreground" /> {/* Placeholder for logo icon */}
                    <span className="font-semibold">Acme Corp</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" /> {/* Chevron icon */}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {workspaces.map((workspace, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleWorkspaceChange(workspace)}
                  >
                    {workspace.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleAddWorkspace}>Add new workspace</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Channels and Direct Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Channels */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium cursor-pointer" onClick={toggleChannels}>
              Channels
            </span>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          {/* Show or hide channels based on channelsOpen state */}
          {channelsOpen && (
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
          )}
        </div>

        {/* Direct Messages */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium cursor-pointer" onClick={toggleUsers}>
              Direct Messages
            </span>
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          {/* Show or hide users based on usersOpen state */}
          {usersOpen && (
            <div className="space-y-1">
              {mockUsers.map((user, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => onUserClick(user)}
                >
                  <div
                    className={`w-2 h-2 ${
                      user.status === "online" ? "bg-green-500" : "bg-gray-500"
                    } rounded-full mr-2`}
                  />
                  {user.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Settings and Logout */}
      <div className="p-4 border-t space-y-2">
        {/* Logout */}
        <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>

        {/* Settings */}
        <div className="flex items-center justify-start space-x-2">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            <Settings className="h-4 w-4 mr-2" />
            <span className="ml-2">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

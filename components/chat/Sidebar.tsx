// components/chat/Sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Hash, LogOut, Settings, Lock } from "lucide-react";
import { Sidebar as UISidebar, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { TeamSwitcher } from "@/components/switcher/team-switcher";
import CreateChannelPopover from "@/components/switcher/CreateChannelPopover"; // Import the popover

// Sample data for teams
const teamsData = [
  {
    name: "Acme Inc",
    logo: Plus,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: Hash,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: LogOut,
    plan: "Free",
  },
];

export default function ChatSidebar({
  onUserClick,
  onChannelClick,
}: {
  onUserClick: (user: any) => void;
  onChannelClick: (channel: any) => void;
  onAddChannelClick: () => void; 
}) {
  const router = useRouter();
  const [channelsOpen, setChannelsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);
  const [userRole, setUserRole] = useState<"owner" | "user" | null>(null);
  const [userLogo, setUserLogo] = useState<React.ElementType>(Plus);
  const [unreadMessages, setUnreadMessages] = useState<number>(3);
  const [unreadChannel, setUnreadChannel] = useState<number>(205);
  const [drafting, setDrafting] = useState(true);
  const [isCreateChannelPopoverOpen, setIsCreateChannelPopoverOpen] = useState(false); // New state for the popover

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = "user"; // Example role, you can replace with actual logic
      setUserRole(role);
    };
    fetchUserRole();
  }, []);

  const mockChannels = [
    { name: "general", description: "General discussions for the team.", channelType: "Public" },
    { name: "announcements", description: "Important updates and announcements.", channelType: "Public" },
    { name: "team-planning", description: "Private team planning channel.", channelType: "Private" },
  ];

  const mockUsers = [
    { name: "John Doe", position: "Senior Developer", dept: "Engineering", status: "online" },
    { name: "Jane Smith", position: "Product Manager", dept: "Product", status: "offline" },
    { name: "Me", position: "Software Engineer", dept: "Engineering", status: "online" },
  ];

  const toggleChannels = () => setChannelsOpen(!channelsOpen);
  const toggleUsers = () => setUsersOpen(!usersOpen);

  const handleSettingsClick = () => {
    if (userRole === "owner") {
      router.push("/dashboard/settings/owner");
    } else {
      router.push("/dashboard/settings/user");
    }
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <SidebarProvider>
      <UISidebar>
        {/* Sidebar Header with TeamSwitcher */}
        <SidebarHeader>
          <TeamSwitcher teams={teamsData} />
        </SidebarHeader>

        {/* Channels and Direct Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Channels */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium cursor-pointer" onClick={toggleChannels}>
                Channels
              </span>
              <Button variant="ghost" size="icon" className="h-4 w-4" onClick={() => setIsCreateChannelPopoverOpen(true)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
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
                    {channel.channelType === "Private" ? (
                      <Lock className="h-4 w-4 mr-2" />
                    ) : (
                      <Hash className="h-4 w-4 mr-2" />
                    )}
                    {channel.name}
                    {unreadChannel && (
                      <span className="ml-2 text-red-500 text-xs font-bold">• {unreadChannel}</span>
                    )}
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
                    {user.name !== "Me" && unreadMessages > 0 && (
                      <span className="ml-2 text-red-500 text-xs font-bold">• {unreadMessages}</span>
                    )}
                    {user.name === "Me" && drafting && (
                      <span className="ml-2 text-orange-500 text-xs font-bold">Drafting...</span>
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Footer with Settings and Logout */}
        <div className="p-4 border-t space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-muted-foreground"
            onClick={handleSettingsClick}
          >
            <Settings className="h-4 w-4 mr-2" />
            <span className="ml-2">Settings</span>
          </Button>
        </div>
      </UISidebar>

      {/* Create Channel Popover */}
      {isCreateChannelPopoverOpen && (
        <CreateChannelPopover onClose={() => setIsCreateChannelPopoverOpen(false)} />
      )}
    </SidebarProvider>
  );
}
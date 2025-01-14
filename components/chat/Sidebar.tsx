"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Hash, LogOut, Settings, Lock, Zap } from "lucide-react";
import { Sidebar as UISidebar, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { TeamSwitcher } from "@/components/switcher/team-switcher";
import CreateChannelPopover from "@/components/switcher/CreateChannelPopover";

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
  onAddChannelClick,
  onMeClick,
}: {
  onUserClick: (user: any) => void;
  onChannelClick: (channel: any) => void;
  onAddChannelClick: () => void;
  onMeClick: () => void;
}) {
  const router = useRouter();
  const [channelsOpen, setChannelsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);
  const [userRole, setUserRole] = useState<"owner" | "user" | null>(null);
  const [userLogo, setUserLogo] = useState<React.ElementType>(Plus);
  const [unreadMessages, setUnreadMessages] = useState<number>(3);
  const [unreadChannel, setUnreadChannel] = useState<number>(205);
  const [drafting, setDrafting] = useState(true);
  const [isCreateChannelPopoverOpen, setIsCreateChannelPopoverOpen] = useState(false);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = "user";
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

  const handleUpgradeClick = () => {
    router.push("/pricing");
  };

  return (
    <SidebarProvider>
      <UISidebar className="bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700">
        {/* Sidebar Header with TeamSwitcher */}
        <SidebarHeader className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <TeamSwitcher teams={teamsData} />
        </SidebarHeader>

        {/* Channels and Direct Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Channels */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" onClick={toggleChannels}>
                Channels
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 hover:text-violet-600 dark:hover:text-violet-400" 
                onClick={() => setIsCreateChannelPopoverOpen(true)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            {channelsOpen && (
              <div className="space-y-1">
                {mockChannels.map((channel, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start hover:bg-violet-100 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                    size="sm"
                    onClick={() => onChannelClick(channel)}
                  >
                    {channel.channelType === "Private" ? (
                      <Lock className="h-4 w-4 mr-2 text-violet-500 dark:text-violet-400" />
                    ) : (
                      <Hash className="h-4 w-4 mr-2 text-violet-500 dark:text-violet-400" />
                    )}
                    {channel.name}
                    {unreadChannel && (
                      <span className="ml-2 text-violet-600 dark:text-violet-400 text-xs font-bold">• {unreadChannel}</span>
                    )}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Direct Messages */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors" onClick={toggleUsers}>
                Direct Messages
              </span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 hover:text-violet-600 dark:hover:text-violet-400"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            {usersOpen && (
              <div className="space-y-1">
                {mockUsers.map((user, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start hover:bg-violet-100 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                    size="sm"
                    onClick={() => (user.name === "Me" ? onMeClick() : onUserClick(user))}
                  >
                    <div
                      className={`w-2 h-2 ${
                        user.status === "online" ? "bg-green-500" : "bg-gray-400"
                      } rounded-full mr-2`}
                    />
                    {user.name}
                    {user.name !== "Me" && unreadMessages > 0 && (
                      <span className="ml-2 text-violet-600 dark:text-violet-400 text-xs font-bold">• {unreadMessages}</span>
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

        {/* Sidebar Footer with Upgrade, Settings and Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm space-y-2">
          {/* Upgrade Plan Button */}
          <Button 
            size="sm" 
            className="w-full justify-start bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
            onClick={handleUpgradeClick}
          >
            <Zap className="h-4 w-4 mr-2" />
            Upgrade Plan
            <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">PRO</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400" 
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400"
            onClick={handleSettingsClick}
          >
            <Settings className="h-4 w-4 mr-2" />
            <span className="ml-2">Settings</span>
          </Button>
        </div>

        {/* Create Channel Popover */}
        {isCreateChannelPopoverOpen && (
          <CreateChannelPopover onClose={() => setIsCreateChannelPopoverOpen(false)} />
        )}
      </UISidebar>
    </SidebarProvider>
  );
}
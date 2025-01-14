"use client";

import { Button } from "@/components/ui/button";
import {
  User,
  Shield,
  Bell,
  Eye,
  Grid,
  DollarSign,
  Users,
  Activity,
  HelpCircle,
} from "lucide-react";

type SidebarProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const Sidebar = ({ selectedTab, onSelectTab }: SidebarProps) => {
  const tabs = [
    { id: "profileSettings", label: "Profile Settings", icon: <User className="h-4 w-4 mr-2" /> },
    { id: "securityPrivacy", label: "Security & Privacy", icon: <Shield className="h-4 w-4 mr-2" /> },
    { id: "notificationSettings", label: "Notifications", icon: <Bell className="h-4 w-4 mr-2" /> },
    { id: "appearanceAccessibility", label: "Appearance & Accessibility", icon: <Eye className="h-4 w-4 mr-2" /> },
    { id: "integrations", label: "Integrations & Apps", icon: <Grid className="h-4 w-4 mr-2" /> },
    { id: "billing", label: "Billing & Subscription", icon: <DollarSign className="h-4 w-4 mr-2" /> },
    { id: "teamWorkspace", label: "Team & Workspace", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "activityData", label: "Activity & Data", icon: <Activity className="h-4 w-4 mr-2" /> },
    { id: "supportFeedback", label: "Support & Feedback", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  ];

  return (
    <div className="w-64 bg-card border-r flex flex-col p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">User Settings</h2>

      {/* Main Sidebar Tabs */}
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="ghost"
          size="sm"
          className={`w-full justify-start mb-2 ${selectedTab === tab.id ? "bg-muted" : ""}`}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.icon}
          {tab.label}
        </Button>
      ))}

      {/* Footer with "Go to Dashboard" button */}
      <div className="mt-auto">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start"
          onClick={() => window.location.href = "/dashboard"}
        >
          <Grid className="h-4 w-4 mr-2" />
          Go to Workspace
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  Shield,
  FileText,
  DollarSign,
  Paintbrush,
  Layers,
  Grid,
  Clipboard,
  Bell,
  HelpCircle,
} from "lucide-react";

type SidebarProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const Sidebar = ({ selectedTab, onSelectTab }: SidebarProps) => {
  const tabs = [
    { id: "workspaceInformation", label: "Workspace Information", icon: <Settings className="h-4 w-4 mr-2" /> },
    { id: "userManagement", label: "User Management", icon: <Users className="h-4 w-4 mr-2" /> },
    { id: "securityPermissions", label: "Security & Permissions", icon: <Shield className="h-4 w-4 mr-2" /> },
    { id: "workspacePolicies", label: "Workspace Policies", icon: <FileText className="h-4 w-4 mr-2" /> },
    { id: "billingSubscription", label: "Billing & Subscription", icon: <DollarSign className="h-4 w-4 mr-2" /> },
    { id: "workspaceCustomization", label: "Workspace Customization", icon: <Paintbrush className="h-4 w-4 mr-2" /> },
    { id: "channelManagement", label: "Channel Management", icon: <Layers className="h-4 w-4 mr-2" /> },
    { id: "integrationsAPIs", label: "Integrations & APIs", icon: <Grid className="h-4 w-4 mr-2" /> },
    { id: "complianceData", label: "Compliance & Data", icon: <Clipboard className="h-4 w-4 mr-2" /> },
    { id: "notificationsAlerts", label: "Notifications & Alerts", icon: <Bell className="h-4 w-4 mr-2" /> },
    { id: "supportFeedback", label: "Support & Feedback", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
  ];

  return (
    <div className="w-64 bg-card border-r flex flex-col p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Owner Settings</h2>
      
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
          onClick={() => window.location.href = "/dashboard"} // Update with your actual dashboard route
        >
          <Grid className="h-4 w-4 mr-2" />
          Go to Workspace
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

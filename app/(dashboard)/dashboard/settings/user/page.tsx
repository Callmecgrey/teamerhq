"use client";

import { useState } from "react";
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

export default function UserSettingsPage() {
  const [selectedTab, setSelectedTab] = useState("profileSettings"); // Default to Profile Settings

  const renderContent = () => {
    switch (selectedTab) {
      case "profileSettings":
        return <ProfileSettings />;
      case "securityPrivacy":
        return <SecurityPrivacy />;
      case "notificationSettings":
        return <NotificationSettings />;
      case "appearanceAccessibility":
        return <AppearanceAccessibility />;
      case "integrations":
        return <Integrations />;
      case "billing":
        return <Billing />;
      case "teamWorkspace":
        return <TeamWorkspace />;
      case "activityData":
        return <ActivityData />;
      case "supportFeedback":
        return <SupportFeedback />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <SidebarButton
          label="Profile Settings"
          icon={<User className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "profileSettings"}
          onClick={() => setSelectedTab("profileSettings")}
        />
        <SidebarButton
          label="Security & Privacy"
          icon={<Shield className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "securityPrivacy"}
          onClick={() => setSelectedTab("securityPrivacy")}
        />
        <SidebarButton
          label="Notification Settings"
          icon={<Bell className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "notificationSettings"}
          onClick={() => setSelectedTab("notificationSettings")}
        />
        <SidebarButton
          label="Appearance & Accessibility"
          icon={<Eye className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "appearanceAccessibility"}
          onClick={() => setSelectedTab("appearanceAccessibility")}
        />
        <SidebarButton
          label="Integrations & Connected Apps"
          icon={<Grid className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "integrations"}
          onClick={() => setSelectedTab("integrations")}
        />
        <SidebarButton
          label="Billing & Subscription"
          icon={<DollarSign className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "billing"}
          onClick={() => setSelectedTab("billing")}
        />
        <SidebarButton
          label="Team & Workspace"
          icon={<Users className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "teamWorkspace"}
          onClick={() => setSelectedTab("teamWorkspace")}
        />
        <SidebarButton
          label="Activity & Data"
          icon={<Activity className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "activityData"}
          onClick={() => setSelectedTab("activityData")}
        />
        <SidebarButton
          label="Support & Feedback"
          icon={<HelpCircle className="h-4 w-4 mr-2" />}
          isActive={selectedTab === "supportFeedback"}
          onClick={() => setSelectedTab("supportFeedback")}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
}

/* Sidebar Button Component */
function SidebarButton({ label, icon, isActive, onClick }: any) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={`w-full justify-start mb-2 ${
        isActive ? "bg-muted" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  );
}

/* Sections */

// Profile Settings
function ProfileSettings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="profile-picture">
            Profile Picture
          </label>
          <input type="file" id="profile-picture" className="border rounded-md p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="display-name">
            Display Name
          </label>
          <input
            type="text"
            id="display-name"
            placeholder="Enter your display name"
            className="border rounded-md p-2 w-full"
          />
        </div>
        {/* Add other profile settings fields here */}
      </form>
    </div>
  );
}

// Security & Privacy
function SecurityPrivacy() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Security & Privacy</h1>
      {/* Add security & privacy settings here */}
    </div>
  );
}

// Notification Settings
function NotificationSettings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Notification Settings</h1>
      {/* Add notification settings here */}
    </div>
  );
}

// Appearance & Accessibility
function AppearanceAccessibility() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Appearance & Accessibility</h1>
      {/* Add appearance & accessibility settings here */}
    </div>
  );
}

// Integrations & Connected Apps
function Integrations() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Integrations & Connected Apps</h1>
      {/* Add integrations settings here */}
    </div>
  );
}

// Billing & Subscription
function Billing() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Billing & Subscription</h1>
      {/* Add billing settings here */}
    </div>
  );
}

// Team & Workspace
function TeamWorkspace() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Team & Workspace</h1>
      {/* Add team & workspace settings here */}
    </div>
  );
}

// Activity & Data
function ActivityData() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Activity & Data</h1>
      {/* Add activity & data settings here */}
    </div>
  );
}

// Support & Feedback
function SupportFeedback() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Support & Feedback</h1>
      {/* Add support & feedback settings here */}
    </div>
  );
}

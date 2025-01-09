"use client";

import { useState } from "react";
import Sidebar from "@/components/settings/user/sidebar";
import ProfileSettings from "@/components/settings/user/ProfileSettings";
import SecurityPrivacy from "@/components/settings/user/SecurityPrivacy";
import NotificationSettings from "@/components/settings/user/NotificationSettings";
import AppearanceAccessibility from "@/components/settings/user/AppearanceAccessibility";
import Integrations from "@/components/settings/user/Integrations";
import Billing from "@/components/settings/user/Billing";
import TeamWorkspace from "@/components/settings/user/TeamWorkspace";
import ActivityData from "@/components/settings/user/ActivityData";
import SupportFeedback from "@/components/settings/user/SupportFeedback";

export default function UserSettingsPage() {
  const [selectedTab, setSelectedTab] = useState("profileSettings");

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
    <div className="flex h-screen">
      <Sidebar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="flex-1 p-6 h-full overflow-y-auto">{renderContent()}</div>
    </div>
  );
}

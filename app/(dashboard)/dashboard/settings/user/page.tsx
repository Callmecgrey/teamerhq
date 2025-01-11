"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/settings/user/Sidebar";
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
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the "tab" query parameter or default to "profileSettings"
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.get("tab") || "profileSettings"
  );

  // Update the URL query parameter when the selected tab changes
  useEffect(() => {
    const currentTab = searchParams.get("tab");
    if (currentTab !== selectedTab) {
      router.replace(`?tab=${selectedTab}`);
    }
  }, [selectedTab]);

  // Render the appropriate content based on the selected tab
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

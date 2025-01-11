"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/settings/owner/Sidebar";
import WorkspaceInformation from "@/components/settings/owner/WorkspaceInformation";
import UserManagement from "@/components/settings/owner/UserManagement";
import SecurityPermissions from "@/components/settings/owner/SecurityPermissions";
import WorkspacePolicies from "@/components/settings/owner/WorkspacePolicies";
import BillingSubscription from "@/components/settings/owner/BillingSubscription";
import WorkspaceCustomization from "@/components/settings/owner/WorkspaceCustomization";
import ChannelManagement from "@/components/settings/owner/ChannelManagement";
import IntegrationsAPIs from "@/components/settings/owner/IntegrationsAPIs";
import ComplianceData from "@/components/settings/owner/ComplianceData";
import NotificationsAlerts from "@/components/settings/owner/NotificationsAlerts";
import SupportFeedback from "@/components/settings/owner/SupportFeedback";

export default function OwnerSettingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the "tab" query parameter or default to "workspaceInformation"
  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.get("tab") || "workspaceInformation"
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
      case "workspaceInformation":
        return <WorkspaceInformation />;
      case "userManagement":
        return <UserManagement />;
      case "securityPermissions":
        return <SecurityPermissions />;
      case "workspacePolicies":
        return <WorkspacePolicies />;
      case "billingSubscription":
        return <BillingSubscription />;
      case "workspaceCustomization":
        return <WorkspaceCustomization />;
      case "channelManagement":
        return <ChannelManagement />;
      case "integrationsAPIs":
        return <IntegrationsAPIs />;
      case "complianceData":
        return <ComplianceData />;
      case "notificationsAlerts":
        return <NotificationsAlerts />;
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import IntegrationHeader from "../IntegrationHeader";
import IntegrationSidebar from "../IntegrationSidebar";
import IntegrationContent from "../IntegrationContent";
import EveryAppsHeader from "./EveryAppsHeader";
import EachAppsSidebar from "./EachAppsSidebar";
import EachAppsDetails from "./EachAppsDetails";

export default function EveryAppsContent() {
  const [selectedApp, setSelectedApp] = useState<any>(null);

  return (
    <div className="h-screen flex flex-col">
      {selectedApp ? (
        <>
          <EveryAppsHeader appName={selectedApp.name} />
          <div className="flex-1 flex overflow-hidden">
            <EachAppsSidebar />
            <EachAppsDetails app={selectedApp} />
          </div>
        </>
      ) : (
        <>
          <IntegrationHeader />
          <div className="flex-1 flex overflow-hidden">
            <IntegrationSidebar />
            <IntegrationContent />
          </div>
        </>
      )}
    </div>
  );
}
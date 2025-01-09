"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

const SupportAndFeedback = () => {
  const [featureRequest, setFeatureRequest] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleFeatureRequestSubmit = () => {
    console.log("Feature request submitted:", featureRequest);
  };

  const handleContactSupport = () => {
    console.log("Contacting support with message:", contactMessage);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="workspaceInsights">
        <TabsList className="space-x-4">
          <TabsTrigger value="workspaceInsights">Workspace Insights</TabsTrigger>
          <TabsTrigger value="contactSupport">Contact Support</TabsTrigger>
          <TabsTrigger value="featureRequests">Feature Requests</TabsTrigger>
          <TabsTrigger value="helpCenter">Help Center</TabsTrigger>
        </TabsList>

        {/* Workspace Insights */}
        <TabsContent value="workspaceInsights">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Workspace Insights</h2>
            <p className="text-sm text-muted-foreground">
              Access detailed analytics on user engagement and activity trends. You can monitor user activity, storage, messages sent, and more.
            </p>
            {/* Add a chart or data table for workspace insights here */}
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-semibold">User Engagement: 120 active users</p>
              <p className="font-semibold">Message Volume: 30,000 messages sent this month</p>
              {/* Include other insights or data visualizations here */}
            </div>
          </div>
        </TabsContent>

        {/* Contact Support */}
        <TabsContent value="contactSupport">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Support</h2>
            <div className="flex flex-col space-y-2">
              <Label>Describe your issue</Label>
              <Textarea
                placeholder="Please describe your issue or question..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
              <Button variant="outline" onClick={handleContactSupport}>
                Contact Support
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Feature Requests */}
        <TabsContent value="featureRequests">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Feature Requests</h2>
            <div className="flex flex-col space-y-2">
              <Label>Feature Request</Label>
              <Textarea
                placeholder="What new feature would you like to see in the workspace?"
                value={featureRequest}
                onChange={(e) => setFeatureRequest(e.target.value)}
              />
              <Button variant="outline" onClick={handleFeatureRequestSubmit}>
                Submit Feature Request
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Help Center */}
        <TabsContent value="helpCenter">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Help Center Access</h2>
            <p className="text-sm text-muted-foreground">
              Access our documentation and guides tailored for workspace owners. Find solutions to common issues or learn how to use advanced features.
            </p>
            <div className="space-y-2">
              <Link href="/help-center" className="text-primary-600">
                Go to Help Center
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupportAndFeedback;

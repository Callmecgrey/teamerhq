"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle } from "lucide-react"; // Optional icon for alerts

const NotificationsAndAlerts = () => {
  const [announcement, setAnnouncement] = useState("");
  const [incidentAlert, setIncidentAlert] = useState("");
  const [moderationEnabled, setModerationEnabled] = useState(false);
  const [flaggedContent, setFlaggedContent] = useState(false);

  const handleSendAnnouncement = () => {
    console.log("Sending announcement:", announcement);
  };

  const handleSetIncidentAlert = () => {
    console.log("Setting incident alert:", incidentAlert);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="announcements">
        <TabsList className="space-x-4">
          <TabsTrigger value="announcements">Workspace-Wide Announcements</TabsTrigger>
          <TabsTrigger value="incidentAlerts">Incident Alerts</TabsTrigger>
          <TabsTrigger value="messageModeration">Message Moderation</TabsTrigger>
        </TabsList>

        {/* Workspace-Wide Announcements */}
        <TabsContent value="announcements">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Workspace-Wide Announcements</h2>
            <div className="flex flex-col space-y-2">
              <Label>Enter Announcement</Label>
              <Textarea
                placeholder="Enter your message to broadcast to all users..."
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
              />
              <Button variant="outline" onClick={handleSendAnnouncement}>
                Send Announcement
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Incident Alerts */}
        <TabsContent value="incidentAlerts">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Incident Alerts</h2>
            <div className="flex flex-col space-y-2">
              <Label>Enter Incident Alert</Label>
              <Textarea
                placeholder="Enter alert for system downtimes or unusual activities..."
                value={incidentAlert}
                onChange={(e) => setIncidentAlert(e.target.value)}
              />
              <Button variant="outline" onClick={handleSetIncidentAlert}>
                Set Incident Alert
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Message Moderation */}
        <TabsContent value="messageModeration">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Message Moderation</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={moderationEnabled}
                  onCheckedChange={setModerationEnabled}
                />
                <Label>Enable Moderation for Public Channels</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={flaggedContent}
                  onCheckedChange={setFlaggedContent}
                />
                <Label>Flag Inappropriate Content</Label>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <AlertTriangle size={16} className="mr-2" />
              <p>Ensure content moderation is active to prevent inappropriate messages.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationsAndAlerts;

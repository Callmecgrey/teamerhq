"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "sonner";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const WorkspaceCustomization = () => {
  const [customDomainEnabled, setCustomDomainEnabled] = useState(false);
  const [customDomain, setCustomDomain] = useState("");
  const [theme, setTheme] = useState("light");
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to the workspace!");
  const [defaultChannels, setDefaultChannels] = useState(["general"]);
  const [notificationPreference, setNotificationPreference] = useState("email");
  const [defaultRole, setDefaultRole] = useState("member");

  const availableChannels = ["general", "random", "development", "design", "marketing"];

  const handleDefaultChannelsChange = (selectedChannel: string) => {
    if (!defaultChannels.includes(selectedChannel)) {
      setDefaultChannels((prev) => [...prev, selectedChannel]);
      toast("Channel added", {
        description: `${selectedChannel} has been added to default channels.`,
      });
    } else {
      toast("Channel already added", {
        description: `${selectedChannel} is already in the default channels.`,
        type: "warning",
      });
    }
  };

  const handleRemoveChannel = (channel: string) => {
    setDefaultChannels((prev) => prev.filter((ch) => ch !== channel));
    toast("Channel removed", {
      description: `${channel} has been removed from default channels.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Toaster for Notifications */}
      <Toaster />

      <Tabs defaultValue="customization">
        <TabsList className="space-x-4">
          <TabsTrigger value="customization">Customization</TabsTrigger>
          <TabsTrigger value="onboarding-settings">Onboarding Settings</TabsTrigger>
          <TabsTrigger value="default-settings">Default Settings</TabsTrigger>
        </TabsList>

        {/* Workspace Customization */}
        <TabsContent value="customization">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Workspace Customization</h2>

            {/* Custom Domains */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Custom Domains</h3>
              <div className="flex items-center justify-between">
                <Label>Enable Custom Domain</Label>
                <Switch
                  checked={customDomainEnabled}
                  onCheckedChange={setCustomDomainEnabled}
                />
              </div>
              {customDomainEnabled && (
                <div className="flex flex-col space-y-2">
                  <Label>Custom Domain</Label>
                  <Input
                    type="text"
                    placeholder="e.g., workspace.yourdomain.com"
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                  />
                  <Button variant="outline" onClick={() => toast("Custom domain saved")}>
                    Save Domain
                  </Button>
                </div>
              )}
            </div>

            {/* Themes & Branding */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Themes & Branding</h3>
              <div className="flex items-center justify-between">
                <Label>Workspace Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {theme === "custom" && (
                <p className="text-sm text-muted-foreground">
                  Use advanced settings to configure custom colors and typography.
                </p>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Onboarding Settings */}
        <TabsContent value="onboarding-settings">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Onboarding Settings</h2>

            {/* Welcome Message */}
            <div className="space-y-4">
              <Label>Customize Welcome Message</Label>
              <Textarea
                placeholder="Enter your welcome message here..."
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
              />
              <Button variant="outline" onClick={() => toast("Welcome message updated")}>
                Save Welcome Message
              </Button>
            </div>

            {/* Default Channels */}
            <div className="space-y-4">
              <Label>Set Default Channels for New Users</Label>
              <div className="flex items-center space-x-4">
                <Select onValueChange={handleDefaultChannelsChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Channel" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableChannels.map((channel) => (
                      <SelectItem key={channel} value={channel}>
                        {channel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast("Default channels updated", {
                      description: `Channels: ${defaultChannels.join(", ")}.`,
                    })
                  }
                >
                  Save Channels
                </Button>
              </div>

              {/* Display Selected Channels */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Selected Channels</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {defaultChannels.map((channel) => (
                    <li key={channel} className="flex justify-between items-center">
                      {channel}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemoveChannel(channel)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Default Settings */}
        <TabsContent value="default-settings">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Default Settings</h2>

            {/* Notification Preferences */}
            <div className="space-y-4">
              <Label>Default Notification Preferences</Label>
              <Select
                value={notificationPreference}
                onValueChange={setNotificationPreference}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="push">Push Notifications</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Default Roles */}
            <div className="space-y-4">
              <Label>Default Role for New Members</Label>
              <Select value={defaultRole} onValueChange={setDefaultRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member">Member</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkspaceCustomization;

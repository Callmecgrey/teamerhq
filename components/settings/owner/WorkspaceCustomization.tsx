"use client";

import { useState } from "react";
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Copy } from "lucide-react";

const WorkspaceCustomization = () => {
  const [customDomainEnabled, setCustomDomainEnabled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [customDomain, setCustomDomain] = useState("");
  const [showCNAMEInstructions, setShowCNAMEInstructions] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [recordVerified, setRecordVerified] = useState(false);
  const [toasts, setToasts] = useState<{ id: number; title: string; description?: string }[]>([]);

  const addToast = (title: string, description?: string) => {
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
      },
    ]);
  };

  const handleSaveDomain = () => {
    addToast("Your custom domain has been successfully saved.");
    setShowCNAMEInstructions(true);
  };

  const handleVerifyRecord = () => {
    setRecordVerified(true);
    addToast("Your DNS record has been verified successfully.");
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    addToast(`Copied "${text}" to clipboard.`);
  };

  return (
    <ToastProvider>
      <div className="space-y-6">
        {/* Toast Notification Viewport */}
        <ToastViewport />

        <Tabs defaultValue="customization">
          <TabsList className="space-x-4">
            <TabsTrigger value="customization">Customization</TabsTrigger>
            <TabsTrigger value="onboarding-settings">Onboarding Settings</TabsTrigger>
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
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <Input
                        type="text"
                        placeholder="e.g., workspace.yourdomain.com"
                        value={customDomain}
                        onChange={(e) => setCustomDomain(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" onClick={handleSaveDomain}>
                        Save Domain
                      </Button>
                    </div>
                    {showCNAMEInstructions && customDomain && (
                      <div className="bg-muted p-4 rounded-md">
                        <p className="mb-2 text-sm font-medium">
                          To complete the setup, please add the following CNAME record in your DNS settings:
                        </p>
                        <Table className="table-fixed border-collapse">
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Type</TableCell>
                              <TableCell>CNAME</TableCell>
                              <TableCell className="w-10">
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() => handleCopy("CNAME")}
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Host</TableCell>
                              <TableCell>{customDomain}</TableCell>
                              <TableCell className="w-10">
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() => handleCopy(customDomain)}
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Value</TableCell>
                              <TableCell>1039202.teamerhq.com</TableCell>
                              <TableCell className="w-10">
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() =>
                                    handleCopy("1039202.teamerhq.com")
                                  }
                                />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">TTL</TableCell>
                              <TableCell>3600</TableCell>
                              <TableCell className="w-10">
                                <Copy
                                  className="cursor-pointer"
                                  onClick={() => handleCopy("3600")}
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <p className="mt-2 text-sm">
                          This will point your custom domain to our platform. Once the DNS changes propagate, your custom domain will be ready to use.
                        </p>
                        <Button
                          onClick={handleVerifyRecord}
                          className={`mt-4 ${
                            recordVerified
                              ? "bg-green-500 text-white"
                              : "bg-primary"
                          }`}
                        >
                          {recordVerified ? "Record Verified" : "Verify Record"}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Themes & Branding */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Themes & Branding</h3>
                <div className="flex items-center justify-between space-x-4">
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
                  <Button variant="outline" onClick={() => addToast("Theme Saved", "Your theme has been updated.")}>
                    Save Theme
                  </Button>
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
                <Button variant="outline" onClick={() => addToast("Welcome Message Updated", "Your welcome message has been saved.")}>
                  Save Welcome Message
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Toast Notifications */}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col-reverse p-4">
        {toasts.map((toast) => (
          <Toast key={toast.id} className="mb-4">
            <ToastTitle>{toast.title}</ToastTitle>
            {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          </Toast>
        ))}
      </div>
    </ToastProvider>
  );
};

export default WorkspaceCustomization;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const WorkspacePolicies = () => {
  const [messageRetention, setMessageRetention] = useState("30_days");
  const [fileUploadLimit, setFileUploadLimit] = useState("10_MB");
  const [restrictedFileTypes, setRestrictedFileTypes] = useState("");
  const [customTermsEnabled, setCustomTermsEnabled] = useState(false);
  const [customTerms, setCustomTerms] = useState("");
  const [externalSharing, setExternalSharing] = useState(false);
  const [selectedSharingOptions, setSelectedSharingOptions] = useState<string[]>([]);

  const shareableOptions = [
    "Files",
    "Messages",
    "Links",
    "Calendar Events",
    "Tasks",
  ];

  interface ToggleOption {
    (option: string): void;
  }

  const toggleOption: ToggleOption = (option) => {
    setSelectedSharingOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="retention">
        <TabsList className="space-x-4">
          <TabsTrigger value="retention">Message Retention</TabsTrigger>
          <TabsTrigger value="uploads">File Upload Limits</TabsTrigger>
          <TabsTrigger value="terms">Custom Terms of Service</TabsTrigger>
          <TabsTrigger value="sharing">External Sharing</TabsTrigger>
        </TabsList>

        {/* Message Retention */}
        <TabsContent value="retention">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Message Retention</h2>
            <div className="flex items-center space-x-4">
              <Label>Retention Period</Label>
              <Select value={messageRetention} onValueChange={setMessageRetention}>
                <SelectTrigger className="w-[200px]">
                  <span>{messageRetention.replace("_", " ")}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7_days">7 Days</SelectItem>
                  <SelectItem value="30_days">30 Days</SelectItem>
                  <SelectItem value="6_months">6 Months</SelectItem>
                  <SelectItem value="1_year">1 Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => console.log("Message retention updated.")}>
                Save
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* File Upload Limits */}
        <TabsContent value="uploads">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">File Upload Limits</h2>
            <div className="flex items-center space-x-4">
              <Label>Max File Size</Label>
              <Select value={fileUploadLimit} onValueChange={setFileUploadLimit}>
                <SelectTrigger className="w-[200px]">
                  <span>{fileUploadLimit.replace("_", " ")}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5_MB">5 MB</SelectItem>
                  <SelectItem value="10_MB">10 MB</SelectItem>
                  <SelectItem value="100_MB">100 MB</SelectItem>
                  <SelectItem value="1_GB">1 GB</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => console.log("File upload limits updated.")}>
                Save
              </Button>
            </div>

            {/* Restricted File Types */}
            <div className="flex flex-col space-y-2">
              <Label>Restricted File Types</Label>
              <input
                type="text"
                className="input w-[300px]" // Restrict input width
                placeholder="e.g., .exe, .bat"
                value={restrictedFileTypes}
                onChange={(e) => setRestrictedFileTypes(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Enter file extensions separated by commas (e.g., .exe, .bat).
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Custom Terms of Service */}
        <TabsContent value="terms">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Custom Terms of Service</h2>
            <div className="flex justify-between items-center">
              <Label>Enable Custom Terms</Label>
              <Switch
                checked={customTermsEnabled}
                onCheckedChange={setCustomTermsEnabled}
              />
            </div>
            {customTermsEnabled && (
              <div className="flex flex-col space-y-2 mt-4">
                <Label>Terms of Service</Label>
                <Textarea
                  placeholder="Enter your custom terms of service here..."
                  value={customTerms}
                  onChange={(e) => setCustomTerms(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Users will be required to accept these terms before joining the workspace.
                </p>
                <Button variant="outline" onClick={() => console.log("Custom terms updated.")}>
                  Save
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        {/* External Sharing */}
        <TabsContent value="sharing">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">External Sharing</h2>
            <div className="flex justify-between items-center">
              <Label>Enable External Sharing</Label>
              <Switch
                checked={externalSharing}
                onCheckedChange={setExternalSharing}
              />
            </div>
            {externalSharing && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What can be shared?</h3>
                <div className="flex flex-col space-y-2">
                  {shareableOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        checked={selectedSharingOptions.includes(option)}
                        onCheckedChange={() => toggleOption(option)}
                      />
                      <Label>{option}</Label>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => console.log("Selected Sharing Options:", selectedSharingOptions)}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkspacePolicies;

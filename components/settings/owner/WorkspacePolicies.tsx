"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const WorkspacePolicies = () => {
  const [messageRetention, setMessageRetention] = useState("30_days");
  const [fileUploadLimit, setFileUploadLimit] = useState("10_MB");
  const [restrictedFileTypes, setRestrictedFileTypes] = useState("");
  const [customTerms, setCustomTerms] = useState("");
  const [externalSharing, setExternalSharing] = useState(false);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="policies">
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
                className="input"
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
            <div className="flex flex-col space-y-2">
              <Label>Terms of Service</Label>
              <Textarea
                placeholder="Enter your custom terms of service here..."
                value={customTerms}
                onChange={(e) => setCustomTerms(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Users will be required to accept these terms before joining the workspace.
              </p>
            </div>
            <Button variant="outline" onClick={() => console.log("Custom terms updated.")}>
              Save
            </Button>
          </div>
        </TabsContent>

        {/* External Sharing */}
        <TabsContent value="sharing">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">External Sharing</h2>
            <div className="flex items-center space-x-4">
              <Label>Enable External Sharing</Label>
              <Switch
                checked={externalSharing}
                onCheckedChange={setExternalSharing}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkspacePolicies;

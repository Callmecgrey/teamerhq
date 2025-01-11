"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const WorkspaceInformation = () => {
  const [workspaceName, setWorkspaceName] = useState("My Workspace");
  const [workspaceURL, setWorkspaceURL] = useState("teamname.platform.com");
  const [description, setDescription] = useState("A short description of the workspace.");
  const [timeZone, setTimeZone] = useState("UTC");
  const [logo, setLogo] = useState<File | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
    }
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Section: Form */}
      <div className="w-1/2 p-6 space-y-4 flex flex-col justify-between overflow-y-auto">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Workspace Information</h1>

          {/* Workspace Name */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="workspaceName" className="text-lg">Workspace Name</Label>
            <Input
              id="workspaceName"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Workspace URL */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="workspaceURL" className="text-lg">Workspace URL</Label>
            <Input
              id="workspaceURL"
              value={workspaceURL}
              onChange={(e) => setWorkspaceURL(e.target.value)}
              placeholder="teamname.platform.com"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="description" className="text-lg">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the purpose of this workspace"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Logo Upload */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="logo" className="text-lg">Workspace Logo</Label>
            <Input
              id="logo"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            {logo && <p className="text-sm text-gray-600 mt-2">Selected file: {logo.name}</p>}
          </div>

          {/* Time Zone */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="timeZone" className="text-lg">Time Zone</Label>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500">
                <span>{timeZone}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="PST">PST</SelectItem>
                <SelectItem value="EST">EST</SelectItem>
                <SelectItem value="CST">CST</SelectItem>
                <SelectItem value="IST">IST</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Save Button */}
        <Button onClick={() => alert("Workspace information updated successfully!")} className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Save Changes
        </Button>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-300 my-4 mx-4 h-full"></div>

      {/* Right Section: Preview */}
      <div className="w-1/2 p-4 flex flex-col justify-between overflow-y-auto">
        <h2 className="text-1xl font-semibold text-stone-100">Preview</h2>

        {/* Logo Preview */}
        <div className="mt-2 flex justify-center">
          {logo ? (
            <img src={URL.createObjectURL(logo)} alt="Workspace Logo" className="w-32 h-32 object-cover rounded-md shadow-md" />
          ) : (
            <p className="text-gray-800">No logo uploaded</p>
          )}
        </div>

        {/* Workspace Name Preview */}
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-600">Workspace Name</h3>
          <p className="text-gray-800">{workspaceName || "No workspace name set"}</p>
        </div>

        {/* Workspace URL Preview */}
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-600">Workspace URL</h3>
          <p className="text-gray-800">{workspaceURL || "No URL set"}</p>
        </div>

        {/* Description Preview */}
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-600">Description</h3>
          <p className="text-gray-800">{description || "No description set"}</p>
        </div>

        {/* Time Zone Preview */}
        <div className="mt-4 space-y-2">
          <h3 className="text-lg font-medium text-gray-600">Time Zone</h3>
          <p className="text-gray-800">{timeZone || "No time zone set"}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceInformation;

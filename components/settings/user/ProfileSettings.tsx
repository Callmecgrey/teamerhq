"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [displayName, setDisplayName] = useState("John Doe");
  const [username, setUsername] = useState("@johndoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState("Available");
  const [jobTitle, setJobTitle] = useState("Software Developer");
  const [pronouns, setPronouns] = useState("He/Him");
  const [timeZone, setTimeZone] = useState("UTC");

  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Section: Form */}
      <div className="w-1/2 p-6 space-y-4 flex flex-col justify-between overflow-y-auto">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">User Profile</h1>

          {/* Profile Picture Upload */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="profilePicture" className="text-lg">Profile Picture</Label>
            <Input
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureUpload}
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            {profilePicture && <p className="text-sm text-gray-600 mt-2">Selected file: {profilePicture.name}</p>}
          </div>

          {/* Display Name */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="displayName" className="text-lg">Display Name</Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your display name"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="username" className="text-lg">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="phone" className="text-lg">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Message */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="statusMessage" className="text-lg">Status Message</Label>
            <Textarea
              id="statusMessage"
              value={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              placeholder="Set your status message"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Title */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="jobTitle" className="text-lg">Job Title/Role</Label>
            <Input
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter your job title"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pronouns */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="pronouns" className="text-lg">Pronouns</Label>
            <Input
              id="pronouns"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              placeholder="Enter your pronouns"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Time Zone */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="timeZone" className="text-lg">Time Zone</Label>
            <Input
              id="timeZone"
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              placeholder="Enter your time zone"
              className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <Button onClick={() => alert("Profile updated successfully!")} className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Save Changes
        </Button>
      </div>

      {/* Divider */}
      <div className="w-px bg-gray-300 my-4 mx-4 h-full"></div>

      {/* Right Section: Preview */}
      <div className="w-1/2 p-4 flex flex-col justify-between overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Profile Preview</h2>

        {/* Profile Picture Preview */}
        <div className="mt-4 flex justify-center">
          {profilePicture ? (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile Picture" className="w-32 h-32 object-cover rounded-full shadow-md" />
          ) : (
            <p className="text-gray-600">No profile picture uploaded</p>
          )}
        </div>

        {/* Display Name */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Display Name</h3>
          <p className="text-gray-800">{displayName || "N/A"}</p>
        </div>

        {/* Username */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Username</h3>
          <p className="text-gray-800">{username || "N/A"}</p>
        </div>

        {/* Email */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Email</h3>
          <p className="text-gray-800">{email || "N/A"}</p>
        </div>

        {/* Phone */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Phone</h3>
          <p className="text-gray-800">{phone || "N/A"}</p>
        </div>

        {/* Status Message */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Status Message</h3>
          <p className="text-gray-800">{statusMessage || "N/A"}</p>
        </div>

        {/* Job Title */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Job Title/Role</h3>
          <p className="text-gray-800">{jobTitle || "N/A"}</p>
        </div>

        {/* Pronouns */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Pronouns</h3>
          <p className="text-gray-800">{pronouns || "N/A"}</p>
        </div>

        {/* Time Zone */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-600">Time Zone</h3>
          <p className="text-gray-800">{timeZone || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

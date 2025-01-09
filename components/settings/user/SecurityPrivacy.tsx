"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SecurityPrivacySettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [signInMethods, setSignInMethods] = useState({
    google: true,
    microsoft: false,
    password: true,
  });
  const [newPassword, setNewPassword] = useState("");
  const [activeSessions, setActiveSessions] = useState([
    { device: "MacBook Pro", location: "New York, USA", active: true },
    { device: "iPhone 13", location: "San Francisco, USA", active: true },
  ]);
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "team",
    messageReceipts: true,
    blockedUsers: ["@janedoe", "@spamuser123"],
  });

  const handleLogoutSession = (index: number) => {
    setActiveSessions((prev) =>
      prev.filter((_, sessionIndex) => sessionIndex !== index)
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Security & Privacy Settings</h1>

      {/* Two-Factor Authentication */}
      <div className="space-y-2">
        <Label htmlFor="twoFactorAuth" className="text-lg">Two-Factor Authentication (2FA)</Label>
        <Switch
          id="twoFactorAuth"
          checked={twoFactorAuth}
          onCheckedChange={setTwoFactorAuth}
        />
        <p className="text-sm text-gray-600 mt-2">
          {twoFactorAuth
            ? "2FA is enabled. You’ll need an additional code to sign in."
            : "2FA is disabled. Your account is less secure."}
        </p>
      </div>

      {/* Sign-in Methods */}
      <div className="space-y-2">
        <Label htmlFor="signInMethods" className="text-lg">Sign-in Methods</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch
              checked={signInMethods.google}
              onCheckedChange={(value) =>
                setSignInMethods((prev) => ({ ...prev, google: value }))
              }
            />
            <span>Google</span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={signInMethods.microsoft}
              onCheckedChange={(value) =>
                setSignInMethods((prev) => ({ ...prev, microsoft: value }))
              }
            />
            <span>Microsoft</span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={signInMethods.password}
              onCheckedChange={(value) =>
                setSignInMethods((prev) => ({ ...prev, password: value }))
              }
            />
            <span>Password</span>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="space-y-2">
        <Label htmlFor="newPassword" className="text-lg">Change Password</Label>
        <Input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter a new password"
          className="px-4 py-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Session Management */}
      <div className="space-y-2">
        <Label htmlFor="activeSessions" className="text-lg">Session Management</Label>
        {activeSessions.map((session, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-md shadow-sm"
          >
            <div>
              <p className="text-gray-800 font-medium">{session.device}</p>
              <p className="text-gray-600 text-sm">{session.location}</p>
            </div>
            <Button
              onClick={() => handleLogoutSession(index)}
              className="text-sm bg-red-500 hover:bg-red-600 text-white rounded-md"
            >
              Logout
            </Button>
          </div>
        ))}
      </div>

      {/* Privacy Settings */}
      <div className="space-y-2">
        <Label htmlFor="privacySettings" className="text-lg">Privacy Settings</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span>Profile Visibility:</span>
            <select
              value={privacySettings.profileVisibility}
              onChange={(e) =>
                setPrivacySettings((prev) => ({
                  ...prev,
                  profileVisibility: e.target.value,
                }))
              }
              className="px-3 py-2 border rounded-md shadow-sm"
            >
              <option value="public">Public</option>
              <option value="team">Team</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={privacySettings.messageReceipts}
              onCheckedChange={(value) =>
                setPrivacySettings((prev) => ({
                  ...prev,
                  messageReceipts: value,
                }))
              }
            />
            <span>Show message read receipts</span>
          </div>
          <div>
            <span>Blocked Users:</span>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
              {privacySettings.blockedUsers.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <Button onClick={() => alert("Settings updated successfully!")} className="w-full py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
        Save Changes
      </Button>
    </div>
  );
};

export default SecurityPrivacySettings;

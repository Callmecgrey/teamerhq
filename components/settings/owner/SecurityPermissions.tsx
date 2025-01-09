"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster"; // Import the custom Toaster
import { toast } from "sonner"; // Import Sonner toast function
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const SecurityPermissions = () => {
  const [logoutPolicyEnabled, setLogoutPolicyEnabled] = useState(false);
  const [logoutDays, setLogoutDays] = useState("7");
  const [ipChangeLogout, setIpChangeLogout] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [recoveryMethodSet, setRecoveryMethodSet] = useState(false);
  const [sessionManagement, setSessionManagement] = useState([{ id: 1, user: "John Doe", ip: "192.168.1.10", activeSince: "2023-01-05" }]);
  const [visibilitySettings, setVisibilitySettings] = useState({ profile: "team-only", workspace: "team-only" });
  const [openAlert, setOpenAlert] = useState(false);

  const handleForceLogout = (sessionId: number) => {
    setOpenAlert(true);
    setSessionManagement((prev) =>
      prev.filter((session) => session.id !== sessionId)
    );
  };

  const handleSetRecoveryMethod = () => {
    setRecoveryMethodSet(true);
    toast("Recovery method set", {
      description: "12 recovery phrases have been downloaded.",
      action: {
        label: "Undo",
        onClick: () => setRecoveryMethodSet(false),
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Toaster Component */}
      <Toaster />

      <Tabs defaultValue="access-control">
        <TabsList className="space-x-4">
          <TabsTrigger value="access-control">Access Control</TabsTrigger>
          <TabsTrigger value="login-policies">Login Policies</TabsTrigger>
          <TabsTrigger value="2fa">Two-Factor Authentication</TabsTrigger>
          <TabsTrigger value="session-management">Session Management</TabsTrigger>
          <TabsTrigger value="privacy-settings">Privacy Settings</TabsTrigger>
        </TabsList>

        {/* Access Control */}
        <TabsContent value="access-control">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Access Control</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <Label>Set workspace-wide access level</Label>
                <select className="px-3 py-2 border rounded-md">
                  <option value="public">Public</option>
                  <option value="invite-only">Invite Only</option>
                  <option value="restricted">Restricted</option>
                </select>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Login Policies */}
        <TabsContent value="login-policies">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Login Policies</h2>
            <div className="flex items-center justify-between">
              <Label>Enforce X Days Logout Policy</Label>
              <div className="flex items-center space-x-3">
                <Switch
                  checked={logoutPolicyEnabled}
                  onCheckedChange={setLogoutPolicyEnabled}
                />
                {logoutPolicyEnabled && (
                  <Select value={logoutDays} onValueChange={setLogoutDays}>
                    <SelectTrigger>
                      <SelectValue placeholder="Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="14">14 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label>Force Logout Members with Constant IP Change</Label>
              <Switch
                checked={ipChangeLogout}
                onCheckedChange={(checked) => {
                  setIpChangeLogout(checked);
                  if (checked) {
                    toast("IP change detection enabled", {
                      description: "Members will be forced to logout on constant IP change.",
                    });
                  }
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Two-Factor Authentication */}
        <TabsContent value="2fa">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Two-Factor Authentication</h2>
            <div className="flex items-center justify-between">
              <Label>Require 2FA for All Users</Label>
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={(checked) => {
                  setTwoFactorEnabled(checked);
                  if (checked) {
                    toast("Two-Factor Authentication enabled", {
                      description: "Users must set up 2FA using phone or passkey.",
                    });
                  }
                }}
              />
            </div>
            {twoFactorEnabled && (
              <div className="space-y-3">
                <Button variant="outline">Add Phone Number</Button>
                <Button variant="outline">Use Device as Passkey</Button>
              </div>
            )}
            <Button variant="outline" onClick={handleSetRecoveryMethod}>
              Manage Recovery Options
            </Button>
            <p>
              Recovery Method:{" "}
              <span className={recoveryMethodSet ? "text-green-600" : "text-red-600"}>
                {recoveryMethodSet ? "Set" : "Not Set"}
              </span>
            </p>
          </div>
        </TabsContent>

        {/* Session Management */}
        <TabsContent value="session-management">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Session Management</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Active Since</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessionManagement.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell>{session.user}</TableCell>
                    <TableCell>{session.ip}</TableCell>
                    <TableCell>{session.activeSince}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleForceLogout(session.id)}
                      >
                        Force Logout
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy-settings">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Privacy Settings</h2>
            <div className="flex items-center justify-between">
              <Label>Profile Visibility</Label>
              <select
                className="px-3 py-2 border rounded-md"
                value={visibilitySettings.profile}
                onChange={(e) =>
                  setVisibilitySettings((prev) => ({
                    ...prev,
                    profile: e.target.value,
                  }))
                }
              >
                <option value="public">Public</option>
                <option value="team-only">Team Only</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <Label>Workspace Activity Visibility</Label>
              <select
                className="px-3 py-2 border rounded-md"
                value={visibilitySettings.workspace}
                onChange={(e) =>
                  setVisibilitySettings((prev) => ({
                    ...prev,
                    workspace: e.target.value,
                  }))
                }
              >
                <option value="public">Public</option>
                <option value="team-only">Team Only</option>
              </select>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Alert Dialog */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Force Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to force logout this session?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SecurityPermissions;

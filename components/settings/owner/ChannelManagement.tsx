"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

const ChannelManagement = () => {
  const [channels, setChannels] = useState([
    { name: "General", type: "Public", members: 50 },
    { name: "Team Leads", type: "Private", members: 10 },
    { name: "Marketing", type: "Shared", members: 20 },
  ]);

  const [defaultChannels, setDefaultChannels] = useState(["General"]);
  const [archivedChannels, setArchivedChannels] = useState(["Old Channel"]);
  const [permissions, setPermissions] = useState({
    create: true,
    delete: false,
    rename: true,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="directory">
        <TabsList className="space-x-4">
          <TabsTrigger value="directory">Channel Directory</TabsTrigger>
          <TabsTrigger value="defaults">Default Channels</TabsTrigger>
          <TabsTrigger value="archived">Archived Channels</TabsTrigger>
          <TabsTrigger value="permissions">Channel Permissions</TabsTrigger>
        </TabsList>

        {/* Channel Directory */}
        <TabsContent value="directory">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Channel Directory</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Members</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {channels.map((channel, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{channel.name}</TableCell>
                    <TableCell>{channel.type}</TableCell>
                    <TableCell>{channel.members}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Default Channels */}
        <TabsContent value="defaults">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Default Channels</h2>
            <div className="space-y-2">
              <Label>Default Channels</Label>
              <Input
                type="text"
                placeholder="Enter channel names separated by commas"
                value={defaultChannels.join(", ")}
                onChange={(e) =>
                  setDefaultChannels(
                    e.target.value.split(",").map((channel) => channel.trim())
                  )
                }
              />
              <p className="text-sm text-muted-foreground">
                These are the channels users will automatically join upon signup.
              </p>
            </div>
            <Button variant="outline" onClick={() => console.log("Default channels updated.")}>
              Save Default Channels
            </Button>
          </div>
        </TabsContent>

        {/* Archived Channels */}
        <TabsContent value="archived">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Archived Channels</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {archivedChannels.map((channel, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{channel}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => console.log("Restore channel:", channel)}
                      >
                        Restore
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Channel Permissions */}
        <TabsContent value="permissions">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Channel Permissions</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Allow Channel Creation</Label>
                <Switch
                  checked={permissions.create}
                  onCheckedChange={() => togglePermission("create")}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Allow Channel Deletion</Label>
                <Switch
                  checked={permissions.delete}
                  onCheckedChange={() => togglePermission("delete")}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Allow Channel Renaming</Label>
                <Switch
                  checked={permissions.rename}
                  onCheckedChange={() => togglePermission("rename")}
                />
              </div>
            </div>
            <Button variant="outline" onClick={() => console.log("Permissions updated:", permissions)}>
              Save Permissions
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChannelManagement;

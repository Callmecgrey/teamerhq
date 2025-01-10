"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const ChannelManagement = () => {
  const [channels, setChannels] = useState([
    { id: 1, name: "General", type: "Public", members: 50, isEditable: false },
    { id: 2, name: "Team Leads", type: "Private", members: 10, isEditable: false },
    { id: 3, name: "Marketing", type: "Shared", members: 20, isEditable: false },
  ]);

  const [defaultChannels, setDefaultChannels] = useState<string[]>([]);
  const [archivedChannels, setArchivedChannels] = useState(["Old Channel"]);
  const [permissions, setPermissions] = useState({
    create: true,
    delete: false,
    rename: true,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRestoreChannel = (channelName: string) => {
    setArchivedChannels((prev) => prev.filter((name) => name !== channelName));
    console.log("Restored channel:", channelName);
  };

  const toggleEditChannel = (id: number) => {
    setChannels((prev) =>
      prev.map((channel) =>
        channel.id === id ? { ...channel, isEditable: !channel.isEditable } : channel
      )
    );
  };

  const handleAddDefaultChannel = (channelName: string) => {
    if (!defaultChannels.includes(channelName)) {
      setDefaultChannels((prev) => [...prev, channelName]);
    }
  };

  const handleRemoveDefaultChannel = (channelName: string) => {
    setDefaultChannels((prev) => prev.filter((name) => name !== channelName));
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
            <h2 className="text-2xl font-semibold text-gray-800">Channel Directory</h2>
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {channels.map((channel) => (
                  <TableRow key={channel.id}>
                    <TableCell>{channel.name}</TableCell>
                    <TableCell>
                      {channel.isEditable ? (
                        <Select
                          value={channel.type}
                          onValueChange={(newType) =>
                            setChannels((prev) =>
                              prev.map((c) =>
                                c.id === channel.id ? { ...c, type: newType } : c
                              )
                            )
                          }
                        >
                          <SelectTrigger>
                            <span>{channel.type}</span>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Public">Public</SelectItem>
                            <SelectItem value="Private">Private</SelectItem>
                            <SelectItem value="Shared">Shared</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <span>{channel.type}</span>
                      )}
                    </TableCell>
                    <TableCell>{channel.members}</TableCell>
                    <TableCell className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleEditChannel(channel.id)}
                      >
                        {channel.isEditable ? "Save" : "Edit"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => console.log("Delete channel:", channel.name)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Default Channels */}
        <TabsContent value="defaults">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Default Channels</h2>
            <div className="space-y-2">
              <Label>Select Default Channels</Label>
              <Select
                onValueChange={handleAddDefaultChannel}
              >
                <SelectTrigger>
                  <span>Select Channels</span>
                </SelectTrigger>
                <SelectContent>
                  {channels.map((channel) => (
                    <SelectItem key={channel.id} value={channel.name}>
                      {channel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                These are the channels users will automatically join upon signup.
              </p>
              <div className="space-y-2">
                <Label>Selected Default Channels</Label>
                <div className="space-y-1">
                  {defaultChannels.map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center justify-between border p-2 rounded"
                    >
                      <span>{channel}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveDefaultChannel(channel)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={() => console.log("Default channels updated:", defaultChannels)}>
              Save Default Channels
            </Button>
          </div>
        </TabsContent>

        {/* Archived Channels */}
        <TabsContent value="archived">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Archived Channels</h2>
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {archivedChannels.map((channel, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{channel}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRestoreChannel(channel)}
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
            <h2 className="text-2xl font-semibold text-gray-800">Channel Permissions</h2>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChannelManagement;

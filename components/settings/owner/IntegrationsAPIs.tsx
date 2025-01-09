"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const IntegrationsAndAPIs = () => {
  const [thirdPartyIntegrations, setThirdPartyIntegrations] = useState(true);
  const [installedApps, setInstalledApps] = useState([
    { name: "Slack", type: "Third-Party", status: "Active" },
    { name: "Custom Bot", type: "Custom Integration", status: "Inactive" },
  ]);
  const [apiKeys, setApiKeys] = useState([
    { name: "Key 1", value: "sk-1234", permissions: "Read/Write" },
    { name: "Key 2", value: "sk-5678", permissions: "Read Only" },
  ]);
  const [newApiKey, setNewApiKey] = useState("");
  const [webhooks, setWebhooks] = useState([
    { name: "Incoming", url: "https://webhook.incoming.com", type: "Incoming" },
    { name: "Outgoing", url: "https://webhook.outgoing.com", type: "Outgoing" },
  ]);
  const [newWebhook, setNewWebhook] = useState({ name: "", url: "", type: "Incoming" });

  const handleAddApiKey = () => {
    if (newApiKey) {
      setApiKeys([...apiKeys, { name: `Key ${apiKeys.length + 1}`, value: newApiKey, permissions: "Read/Write" }]);
      setNewApiKey("");
    }
  };

  const handleAddWebhook = () => {
    if (newWebhook.name && newWebhook.url) {
      setWebhooks([...webhooks, newWebhook]);
      setNewWebhook({ name: "", url: "", type: "Incoming" });
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="directory">
        <TabsList className="space-x-4">
          <TabsTrigger value="directory">App Directory</TabsTrigger>
          <TabsTrigger value="installed">Installed Apps</TabsTrigger>
          <TabsTrigger value="custom">Custom Integrations</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>

        {/* App Directory */}
        <TabsContent value="directory">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">App Directory</h2>
            <div className="flex items-center justify-between">
              <Label>Enable Third-Party Integrations</Label>
              <Switch
                checked={thirdPartyIntegrations}
                onCheckedChange={setThirdPartyIntegrations}
              />
            </div>
            <Button variant="outline" onClick={() => console.log("Third-party integrations updated.")}>
              Save Integration Settings
            </Button>
          </div>
        </TabsContent>

        {/* Installed Apps */}
        <TabsContent value="installed">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Installed Apps</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {installedApps.map((app, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{app.name}</TableCell>
                    <TableCell>{app.type}</TableCell>
                    <TableCell>{app.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => console.log("Configuring app:", app.name)}
                      >
                        Configure
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setInstalledApps(installedApps.filter((_, i) => i !== idx))}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Custom Integrations */}
        <TabsContent value="custom">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Custom Integrations</h2>

            {/* API Keys */}
            <div className="space-y-2">
              <Label>API Keys</Label>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Permissions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {apiKeys.map((key, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{key.name}</TableCell>
                      <TableCell>{key.value}</TableCell>
                      <TableCell>{key.permissions}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Enter new API key"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                />
                <Button variant="outline" onClick={handleAddApiKey}>
                  Add API Key
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Webhooks */}
        <TabsContent value="webhooks">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Webhooks</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {webhooks.map((webhook, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{webhook.name}</TableCell>
                    <TableCell>{webhook.url}</TableCell>
                    <TableCell>{webhook.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="space-y-2">
              <Label>Add New Webhook</Label>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Webhook Name"
                  value={newWebhook.name}
                  onChange={(e) =>
                    setNewWebhook((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <Input
                  type="text"
                  placeholder="Webhook URL"
                  value={newWebhook.url}
                  onChange={(e) =>
                    setNewWebhook((prev) => ({ ...prev, url: e.target.value }))
                  }
                />
                <select
                  className="p-2 border rounded"
                  value={newWebhook.type}
                  onChange={(e) =>
                    setNewWebhook((prev) => ({ ...prev, type: e.target.value }))
                  }
                >
                  <option value="Incoming">Incoming</option>
                  <option value="Outgoing">Outgoing</option>
                </select>
                <Button variant="outline" onClick={handleAddWebhook}>
                  Add Webhook
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegrationsAndAPIs;

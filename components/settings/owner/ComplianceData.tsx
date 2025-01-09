"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const ComplianceAndData = () => {
  const [gdprCompliant, setGdprCompliant] = useState(false);
  const [hipaaCompliant, setHipaaCompliant] = useState(false);
  const [exportMessages, setExportMessages] = useState(false);
  const [exportFiles, setExportFiles] = useState(false);
  const [exportActivity, setExportActivity] = useState(false);
  const [backupSchedule, setBackupSchedule] = useState("");
  const [auditLogs, setAuditLogs] = useState([
    { action: "User login", timestamp: "2025-01-09 10:00 AM", admin: "Admin1" },
    { action: "Channel created", timestamp: "2025-01-08 02:30 PM", admin: "Admin2" },
  ]);

  const handleExportData = () => {
    console.log("Exporting data:", {
      messages: exportMessages,
      files: exportFiles,
      activity: exportActivity,
    });
  };

  const handleScheduleBackup = () => {
    console.log("Backup scheduled:", backupSchedule);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="dataExport">
        <TabsList className="space-x-4">
          <TabsTrigger value="dataExport">Data Export</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Settings</TabsTrigger>
          <TabsTrigger value="auditLogs">Audit Logs</TabsTrigger>
        </TabsList>

        {/* Data Export */}
        <TabsContent value="dataExport">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Data Export</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={exportMessages}
                  onCheckedChange={setExportMessages}
                />
                <Label>Export Messages</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={exportFiles}
                  onCheckedChange={setExportFiles}
                />
                <Label>Export Files</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={exportActivity}
                  onCheckedChange={setExportActivity}
                />
                <Label>Export User Activity</Label>
              </div>
            </div>
            <Button variant="outline" onClick={handleExportData}>
              Export Data
            </Button>
            <div className="space-y-2">
              <Label>Schedule Regular Backups</Label>
              <Input
                type="text"
                placeholder="e.g., Every Monday"
                value={backupSchedule}
                onChange={(e) => setBackupSchedule(e.target.value)}
              />
              <Button variant="outline" onClick={handleScheduleBackup}>
                Schedule Backup
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Compliance Settings */}
        <TabsContent value="compliance">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Compliance Settings</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={gdprCompliant}
                  onCheckedChange={setGdprCompliant}
                />
                <Label>GDPR Compliant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={hipaaCompliant}
                  onCheckedChange={setHipaaCompliant}
                />
                <Label>HIPAA Compliant</Label>
              </div>
            </div>
            <div className="space-y-2">
              <Label>eDiscovery Tools</Label>
              <Textarea
                placeholder="Enter any eDiscovery tool configurations here..."
                value=""
                onChange={() => {}}
              />
            </div>
            <Button variant="outline" onClick={() => console.log("Compliance settings updated.")}>
              Save Compliance Settings
            </Button>
          </div>
        </TabsContent>

        {/* Audit Logs */}
        <TabsContent value="auditLogs">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Audit Logs</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {auditLogs.map((log, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>{log.admin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComplianceAndData;

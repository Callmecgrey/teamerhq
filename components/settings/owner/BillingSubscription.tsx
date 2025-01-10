"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const BillingPage = () => {
  const [plan, setPlan] = useState("Pro Plan");
  const [activeUsers, setActiveUsers] = useState(15);
  const [storageUsed, setStorageUsed] = useState("25 GB");
  const [paymentMethod, setPaymentMethod] = useState("Visa **** 4242");
  const [billingHistory, setBillingHistory] = useState([
    { date: "2025-01-01", amount: "$99.00", status: "Paid" },
    { date: "2024-12-01", amount: "$99.00", status: "Paid" },
  ]);

  const [licenses, setLicenses] = useState([
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "Member", status: "Active" },
  ]);

  const [billingManagers, setBillingManagers] = useState([
    { name: "John Doe", role: "Admin" },
  ]);

  const storageBreakdown = [
    { name: "Documents", value: 10 },
    { name: "Videos", value: 12 },
    { name: "Images", value: 3 },
  ];

  const activeUserData = [
    { name: "Jan", users: 10 },
    { name: "Feb", users: 12 },
    { name: "Mar", users: 15 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const chartConfig = {
    usersChart: {
      label: "Active Users",
      color: "#8884d8", // Set a color for the bar chart
    },
    storageChart: {
      label: "Storage Breakdown",
      theme: {
        light: { backgroundColor: "#ffffff" }, // Light mode config
        dark: { backgroundColor: "#333333" },  // Dark mode config
      },
    },
  };

  const teamMembers = [
    { name: "John Doe", role: "Admin" },
    { name: "Jane Smith", role: "Member" },
    { name: "Michael Jordan", role: "Member" },
    { name: "Kobe Bryant", role: "Member" },
  ];

  const handleAssignBillingManager = (selectedMember) => {
    if (billingManagers.length < 2) {
      setBillingManagers([...billingManagers, selectedMember]);
    } else {
      alert("You can only have 2 billing managers.");
    }
  };

  const handleRemoveBillingManager = (name) => {
    setBillingManagers(billingManagers.filter(manager => manager.name !== name));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="plan">
        <TabsList className="space-x-4">
          <TabsTrigger value="plan">Plan Management</TabsTrigger>
          <TabsTrigger value="analytics">Usage Analytics</TabsTrigger>
          <TabsTrigger value="payment">Payment Details</TabsTrigger>
          <TabsTrigger value="billing-managers">Assign Billing Manager</TabsTrigger>
        </TabsList>

        {/* Plan Management */}
        <TabsContent value="plan">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Plan Management</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg">Current Plan: <strong>{plan}</strong></p>
                <p className="text-sm text-muted-foreground">Billed monthly. Cancel anytime.</p>
              </div>
              <Button
                variant="outline"
                onClick={() => console.log("Upgrade Plan")}
              >
                Upgrade/Downgrade Plan
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Usage Analytics */}
        <TabsContent value="analytics">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Usage Analytics</h2>
            <div className="flex space-x-6">
              <div className="w-1/2">
                <ChartContainer config={chartConfig.storageChart}>
                  <PieChart>
                    <Pie
                      data={storageBreakdown}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                    >
                      {storageBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                    <ChartLegend />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="w-1/2">
                <ChartContainer config={chartConfig.usersChart}>
                  <BarChart data={activeUserData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8884d8" />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Payment Details */}
        <TabsContent value="payment">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Details</h2>

            {/* Payment Method */}
            <div className="flex items-center justify-between">
              <Label>Payment Method</Label>
              <Input
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-2/3"
              />
            </div>

            {/* Billing History */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Billing History</h3>
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingHistory.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.amount}</TableCell>
                      <TableCell>{record.status}</TableCell>
                      <TableCell>
                        <Button
                          variant="link"
                          onClick={() => console.log("Download Invoice")}
                        >
                          Download Invoice
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Assign Billing Manager */}
        <TabsContent value="billing-managers">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Assign Billing Manager</h2>

            {/* Searchbox for Assigning Billing Manager */}
            <div className="space-y-2">
              <Label htmlFor="billing-manager">Search and Select Billing Manager</Label>
              <Input
                id="billing-manager"
                className="w-full"
                placeholder="Search for team member"
                onChange={(e) => handleAssignBillingManager(e.target.value)}
              />
            </div>

            {/* Current Billing Managers */}
            <div className="space-y-2">
              <h3 className="text-lg">Current Billing Managers</h3>
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {billingManagers.map((manager, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{manager.name}</TableCell>
                      <TableCell>{manager.role}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveBillingManager(manager.name)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingPage;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";

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

  return (
    <div className="space-y-6">
      <Tabs defaultValue="plan">
        <TabsList className="space-x-4">
          <TabsTrigger value="plan">Plan Management</TabsTrigger>
          <TabsTrigger value="analytics">Usage Analytics</TabsTrigger>
          <TabsTrigger value="payment">Payment Details</TabsTrigger>
          <TabsTrigger value="licenses">Manage Licenses</TabsTrigger>
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
              <Button variant="outline" onClick={() => console.log("Upgrade Plan")}>
                Upgrade/Downgrade Plan
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Usage Analytics */}
        <TabsContent value="analytics">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Usage Analytics</h2>
            <div className="space-y-2">
              <p>Active Users: <strong>{activeUsers}</strong></p>
              <p>Storage Used: <strong>{storageUsed}</strong></p>
              <p>Message Count: <strong>50,000</strong></p>
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
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {billingHistory.map((record, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.amount}</TableCell>
                      <TableCell>{record.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Manage Licenses */}
        <TabsContent value="licenses">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Manage Licenses</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {licenses.map((license, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{license.name}</TableCell>
                    <TableCell>{license.role}</TableCell>
                    <TableCell>{license.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => console.log("Revoke License", license.name)}
                      >
                        Revoke
                      </Button>
                    </TableCell>
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

export default BillingPage;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const BillingPage = () => {
  const [plan, setPlan] = useState("Pro Plan");
  const [activeUsers, setActiveUsers] = useState(15);
  const [storageUsed, setStorageUsed] = useState("25 GB");
  const [paymentMethod, setPaymentMethod] = useState("Visa **** 4242");
  const [billingHistory, setBillingHistory] = useState([
    { date: "2025-01-01", amount: "$99.00", status: "Paid" },
    { date: "2024-12-01", amount: "$99.00", status: "Failed" },
  ]);
  const [licenses, setLicenses] = useState([
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "Member", status: "Active" },
  ]);
  const [billingManagers, setBillingManagers] = useState([
    { name: "John Doe", role: "Admin" },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCard, setNewCard] = useState("");

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

  interface BillingHistory {
    date: string;
    amount: string;
    status: string;
  }

  interface License {
    name: string;
    role: string;
    status: string;
  }

  interface BillingManager {
    name: string;
    role: string;
  }

  const handleAssignBillingManager = (name: string) => {
    const selectedMember = licenses.find((member: License) => member.name === name);
    if (selectedMember && billingManagers.length < 2) {
      setBillingManagers([...billingManagers, selectedMember]);
    } else {
      alert("You can only have 2 billing managers.");
    }
  };

  const handleRemoveBillingManager = (name: string) => {
    setBillingManagers(billingManagers.filter((manager: BillingManager) => manager.name !== name));
  };

  const handleEditPaymentMethod = () => {
    setIsDialogOpen(true);
  };

  const handleSaveNewCard = () => {
    setPaymentMethod(newCard);
    setIsDialogOpen(false);
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
                <p className="text-lg">
                  Current Plan: <strong>{plan}</strong>
                </p>
                <p className="text-sm text-muted-foreground">Billed monthly. Cancel anytime.</p>
              </div>
              <Button variant="outline" onClick={() => console.log("Upgrade Plan")}>Upgrade/Downgrade Plan</Button>
            </div>
          </div>
        </TabsContent>

        {/* Usage Analytics */}
        <TabsContent value="analytics">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Usage Analytics</h2>
            <div>
              <h3 className="text-lg font-semibold">Storage Breakdown</h3>
              <ul className="list-disc list-inside">
                {storageBreakdown.map((item, idx) => (
                  <li key={idx}>{item.name}: {item.value} GB</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Active Users by Month</h3>
              <ul className="list-disc list-inside">
                {activeUserData.map((item, idx) => (
                  <li key={idx}>{item.name}: {item.users} users</li>
                ))}
              </ul>
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
              <div className="flex items-center space-x-2">
                <Input value={paymentMethod} readOnly className="w-2/3" />
                <Button variant="outline" onClick={handleEditPaymentMethod}>Edit</Button>
              </div>
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
                        <Button variant="link" onClick={() => console.log("Download Invoice")}>Download Invoice</Button>
                        {record.status === "Failed" && (
                          <Button variant="link" onClick={() => console.log("Retry Payment")}>Retry Payment</Button>
                        )}
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
                placeholder="Enter team member name"
                onBlur={(e) => handleAssignBillingManager(e.target.value)}
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
                        <Button variant="outline" size="sm" onClick={() => handleRemoveBillingManager(manager.name)}>Remove</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog for Editing Payment Method */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Payment Method</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label htmlFor="new-card">Enter New Card Details</Label>
            <Input
              id="new-card"
              className="w-full"
              placeholder="Card Number"
              value={newCard}
              onChange={(e) => setNewCard(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveNewCard}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BillingPage;

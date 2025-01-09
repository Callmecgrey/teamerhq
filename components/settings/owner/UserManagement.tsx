"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Owner", status: "Active", dateJoined: "2021-05-01" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Invited", dateJoined: "2023-07-10" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Member", status: "Deactivated", dateJoined: "2022-11-15" },
];

const UserManagement = () => {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [role, setRole] = useState("Member");
  const [userList, setUserList] = useState(users);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertAction, setAlertAction] = useState<() => void>(() => () => {});

  const handleInviteUser = () => {
    setAlertMessage(`Inviting user: ${newUserEmail}`);
    setAlertAction(() => () => {
      alert(`User ${newUserEmail} invited successfully!`);
      setNewUserEmail("");
    });
    setOpenAlert(true);
  };

  const handleRemoveUser = (userId: number) => {
    setAlertMessage(`Are you sure you want to remove this user?`);
    setAlertAction(() => () => {
      setUserList(userList.filter(user => user.id !== userId));
    });
    setOpenAlert(true);
  };

  const handleDeactivateUser = (userId: number) => {
    setAlertMessage(`Are you sure you want to deactivate this user?`);
    setAlertAction(() => () => {
      setUserList(userList.map(user =>
        user.id === userId ? { ...user, status: "Deactivated" } : user
      ));
    });
    setOpenAlert(true);
  };

  const handleTransferOwnership = (userId: number) => {
    setAlertMessage(`Transferring ownership to this user.`);
    setAlertAction(() => () => {
      alert(`Ownership transferred to user with ID: ${userId}`);
    });
    setOpenAlert(true);
  };

  const handleChangeRole = (userId: number, newRole: string) => {
    setUserList(userList.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Tabs Header */}
      <Tabs defaultValue="user-list">
        <TabsList className="space-x-4">
          <TabsTrigger value="user-list">User List</TabsTrigger>
          <TabsTrigger value="invite-users">Invite Users</TabsTrigger>
          <TabsTrigger value="pending-invites">Pending Invites</TabsTrigger>
          <TabsTrigger value="guest-accounts">Guest Accounts</TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="user-list">
          {/* User List Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
            
            {/* Table for User List */}
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Joined</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userList.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Select
                        value={user.role}
                        onValueChange={(newRole) => handleChangeRole(user.id, newRole)}
                      >
                        <SelectTrigger>
                          <span>{user.role}</span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Owner">Owner</SelectItem>
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Member">Member</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`text-sm ${user.status === "Active" ? "text-green-500" : "text-gray-500"}`}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>{user.dateJoined}</TableCell>
                    <TableCell className="space-x-2">
                      {user.role === "Owner" ? (
                        <Button onClick={() => handleTransferOwnership(user.id)} variant="outline" size="sm">
                          Transfer Ownership
                        </Button>
                      ) : (
                        <>
                          <Button onClick={() => handleDeactivateUser(user.id)} variant="outline" size="sm">
                            Deactivate
                          </Button>
                          <Button onClick={() => handleRemoveUser(user.id)} variant="outline" size="sm">
                            Remove
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="invite-users">
          {/* Invite Users Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Invite Users</h2>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex-1">
                <Label htmlFor="email" className="text-lg">Invite via Email</Label>
                <Input
                  id="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="px-4 py-3 border rounded-md shadow-sm"
                />
              </div>
              <div className="w-48">
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="px-4 py-3 border rounded-md shadow-sm">
                    <span>{role}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Owner">Owner</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Member">Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleInviteUser} className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Send Invite
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pending-invites">
          {/* Pending Invites Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Pending Invites</h2>
            <div className="space-y-2">
              {/* For simplicity, just a mockup */}
              <div className="flex justify-between items-center p-4 border rounded-md shadow-sm">
                <div className="flex flex-col">
                  <p className="font-semibold">john@example.com</p>
                  <p className="text-gray-600">Invite Pending</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Cancel Invite</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guest-accounts">
          {/* Guest Accounts Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Guest Accounts</h2>
            <div className="flex items-center space-x-4 w-full">
              <div className="flex-1">
                <Label htmlFor="guestPermissions" className="text-lg">Assign Permissions to Guest</Label>
                <Select value="View" onValueChange={() => {}}>
                  <SelectTrigger className="px-4 py-3 border rounded-md shadow-sm">
                    <span>View</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="View">View</SelectItem>
                    <SelectItem value="Edit">Edit</SelectItem>
                    <SelectItem value="Manage">Manage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={() => alert("Permissions Updated!")} className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Update Permissions
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Alert Dialog */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertMessage}</AlertDialogTitle>
            <AlertDialogDescription>
              This action will be performed once confirmed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              alertAction();
              setOpenAlert(false);
            }}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserManagement;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { MessageSquare, Building2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InvitePageClient({ workspaceId }: { workspaceId: string }) {
  const router = useRouter();
  const [step, setStep] = useState<"details" | "setup">("details");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    displayName: "",
    username: "",
    fullName: "",
    position: "",
    department: "",
  });
  const [workspaceDetails] = useState({
    name: "Acme Corp",
    invitedBy: "John Doe",
    role: "Team Member",
  });

  const handleDeclineInvite = () => {
    console.log("Invite declined.");
    router.push("/");
  };

  const handleAcceptInvite = () => {
    if (isTermsAccepted) {
      setStep("setup");
    }
  };

  const handleProceedToDashboard = () => {
    console.log("Profile setup complete:", profile);
    router.push("/dashboard");
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamerHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            {step === "setup" ? "Set Up Your Profile" : "Welcome to TeamerHQ"}
          </h2>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          {step === "details" && (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {workspaceDetails.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Invited by {workspaceDetails.invitedBy}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Role: {workspaceDetails.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2">
                  <input
                    id="accept-terms"
                    type="checkbox"
                    className="mt-1"
                    checked={isTermsAccepted}
                    onChange={() => {
                      setIsTermsAccepted(!isTermsAccepted);
                      toggleModal();
                    }}
                  />
                  <label htmlFor="accept-terms" className="text-sm text-muted-foreground">
                    I agree to TeamerHQ's{" "}
                    <span className="text-blue-600 hover:underline cursor-pointer" onClick={toggleModal}>
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 hover:underline cursor-pointer" onClick={toggleModal}>
                      Privacy Policy
                    </span>
                  </label>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={handleAcceptInvite}
                  disabled={!isTermsAccepted}
                >
                  Accept Invite
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white"
                  onClick={handleDeclineInvite}
                >
                  Decline Invite
                </Button>
              </div>
            </div>
          )}

          {step === "setup" && (
            <div className="space-y-6">
              <p className="text-center text-muted-foreground">
                Setting up your profile for <strong>{workspaceDetails.name}</strong>
              </p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    placeholder="Enter your display name"
                    value={profile.displayName}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, displayName: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter your username"
                    value={profile.username}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, username: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={profile.fullName}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    placeholder="Enter your position"
                    value={profile.position}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, position: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select
                    onValueChange={(value) =>
                      setProfile((prev) => ({ ...prev, department: value }))
                    }
                  >
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleProceedToDashboard}
                disabled={
                  !profile.displayName ||
                  !profile.username ||
                  !profile.fullName ||
                  !profile.position ||
                  !profile.department
                }
              >
                Proceed to Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={toggleModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms and Conditions</DialogTitle>
            </DialogHeader>
            <p className="text-sm">
              Demo terms and conditions content goes here. You can add details about your terms of
              service and privacy policy.
            </p>
            <DialogFooter>
              <Button onClick={toggleModal}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

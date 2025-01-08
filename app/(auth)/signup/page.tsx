"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState<"email" | "code" | "team" | "invite" | "channels">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);
  const [channels, setChannels] = useState([""]);

  const handleContinue = () => {
    if (step === "email") {
      setStep("code");
    } else if (step === "code") {
      setStep("team");
    } else if (step === "team") {
      setStep("invite");
    } else if (step === "invite") {
      setStep("channels");
    } else {
      // Redirect to dashboard or final step
      window.location.href = "/dashboard"; // Redirect to dashboard
    }
  };

  const handleAddMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, ""]);
    }
  };

  const handleRemoveMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = value;
    setTeamMembers(updatedMembers);
  };

  const handleAddChannel = () => {
    if (channels.length < 3) {
      setChannels([...channels, ""]);
    }
  };

  const handleRemoveChannel = (index: number) => {
    const updatedChannels = channels.filter((_, i) => i !== index);
    setChannels(updatedChannels);
  };

  const handleChannelChange = (index: number, value: string) => {
    const updatedChannels = [...channels];
    updatedChannels[index] = value;
    setChannels(updatedChannels);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamerHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">
            {step === "invite" || step === "channels" ? `${teamName || "ACME"} Workspace` : "Create your workspace"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get started with TeamerHQ
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          {step === "email" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                className="w-full"
                onClick={handleContinue}
                disabled={!email}
              >
                Continue
              </Button>
            </div>
          )}

          {step === "code" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={6}
                />
                <p className="text-sm text-muted-foreground">
                  We sent a code to {email}
                </p>
              </div>
              <Button
                className="w-full"
                onClick={handleContinue}
                disabled={code.length !== 6}
              >
                Verify
              </Button>
            </div>
          )}

          {step === "team" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teamName">Workspace Name</Label>
                <Input
                  id="teamName"
                  type="text"
                  placeholder="Acme Corp"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <Button
                className="w-full"
                onClick={handleContinue}
                disabled={!teamName}
              >
                Create Workspace
              </Button>
            </div>
          )}

          {step === "invite" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Invite Team Members</h3>
              {teamMembers.map((member, index) => (
                <div className="space-y-2" key={index}>
                  <Label htmlFor={`teamMember${index}`}>Team Member {index + 1}</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id={`teamMember${index}`}
                      type="email"
                      placeholder="team.member@company.com"
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                    />
                    {teamMembers.length > 1 && (
                      <button
                        type="button"
                        className="p-2 text-red-500"
                        onClick={() => handleRemoveMember(index)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {teamMembers.length < 4 && (
                <Button className="w-full" onClick={handleAddMember}>
                  Add Another Member
                </Button>
              )}
              {teamMembers.length >= 4 && (
                <p className="text-sm text-muted-foreground">
                  Don&apos;t worry, you will be able to add more members once you are all set.
                </p>
              )}
              <Button
                className="w-full mt-4"
                onClick={handleContinue}
                disabled={teamMembers.some((member) => !member)}
              >
                Continue
              </Button>
            </div>
          )}

          {step === "channels" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Create Channels</h3>
              {channels.map((channel, index) => (
                <div className="space-y-2" key={index}>
                  <Label htmlFor={`channel${index}`}>Channel {index + 1}</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id={`channel${index}`}
                      type="text"
                      placeholder="e.g., General, Marketing"
                      value={channel}
                      onChange={(e) => handleChannelChange(index, e.target.value)}
                    />
                    {channels.length > 1 && (
                      <button
                        type="button"
                        className="p-2 text-red-500"
                        onClick={() => handleRemoveChannel(index)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {channels.length < 3 && (
                <Button className="w-full" onClick={handleAddChannel}>
                  Add Another Channel
                </Button>
              )}
              <Button
                className="w-full mt-4"
                onClick={handleContinue}
              >
                Yay! Let&apos;s Go
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

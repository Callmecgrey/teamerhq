"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Boxes, Briefcase, Plus, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp" | "org" | "team" | "invite" | "channels">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);
  const [channels, setChannels] = useState([""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [headerText, setHeaderText] = useState("Welcome back");
  const [subText, setSubText] = useState("Sign in to continue to your workspace");

  const organizations = [
    { id: 1, name: "Acme Corp", role: "Owner", icon: Briefcase },
    { id: 2, name: "Beta Inc", role: "Team Member", icon: Briefcase },
  ];

  const handleContinue = () => {
    if (step === "email") {
      setStep("otp");
      setCountdown(30);
      setIsResendDisabled(true);
    } else if (step === "otp") {
      setStep("org");
      setHeaderText("Welcome Back");
      setSubText("Choose a workspace or create a new one.");
    } else if (step === "org") {
      setStep("team");
      setHeaderText("Create your workspace");
      setSubText("Get started with TeamerHQ");
    } else if (step === "team") {
      setStep("invite");
      setHeaderText(`${teamName} Workspace`);
    } else if (step === "invite") {
      setStep("channels");
    }
  };

  const handleFinalSubmit = () => {
    console.log("Workspace Created:", { teamName, teamMembers, channels });
    router.push("/dashboard");
  };

  const handleOtpChange = (index: number, value: string) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 1);
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-box-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleAddMember = () => setTeamMembers([...teamMembers, ""]);
  const handleRemoveMember = (index: number) =>
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  const handleMemberChange = (index: number, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = value;
    setTeamMembers(updatedMembers);
  };

  const handleAddChannel = () => setChannels([...channels, ""]);
  const handleRemoveChannel = (index: number) =>
    setChannels(channels.filter((_, i) => i !== index));
  const handleChannelChange = (index: number, value: string) => {
    const updatedChannels = [...channels];
    updatedChannels[index] = value;
    setChannels(updatedChannels);
  };

  const handleOrganizationSelect = (orgName: string) => {
    router.push("/dashboard");
  };

  const combinedOtp = otp.join("");

  useEffect(() => {
    if (step === "otp" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [step, countdown]);

  const handleResendCode = () => {
    setCountdown(30);
    setIsResendDisabled(true);
    console.log("OTP resent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Boxes className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamerHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            {headerText}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{subText}</p>
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
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white" 
                onClick={handleContinue} 
                disabled={!email}
              >
                Continue
              </Button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <Label>Enter OTP</Label>
              <div className="grid grid-cols-6 gap-2 sm:gap-4">
                {otp.map((part, index) => (
                  <Input
                    key={index}
                    id={`otp-box-${index}`}
                    type="text"
                    value={part}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength={1}
                    className="text-center w-full h-12 sm:h-14 text-lg font-semibold"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                We sent an OTP to {email}
              </p>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleContinue}
                disabled={combinedOtp.length !== 6}
              >
                Verify
              </Button>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Resend code in: {countdown}s
                </span>
                <button
                  onClick={isResendDisabled ? undefined : handleResendCode}
                  className={`text-sm ${
                    isResendDisabled
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-blue-500 hover:text-blue-600 hover:underline"
                  }`}
                  disabled={isResendDisabled}
                >
                  Resend Code
                </button>
              </div>
            </div>
          )}

          {step === "org" && (
            <div className="space-y-4">
              <div>
                <Label>Select a Workspace</Label>
                <div className="mt-2 space-y-2">
                  {organizations.map((org) => (
                    <Button
                      key={org.id}
                      variant="outline"
                      className="w-full justify-start h-auto p-4 flex items-center space-x-4 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      onClick={() => handleOrganizationSelect(org.name)}
                    >
                      <org.icon className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium flex items-center">
                          {org.name}
                          <span className="text-xs ml-2 text-muted-foreground">
                            ({org.role})
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">{email}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  onClick={() => {
                    setStep("team");
                    setHeaderText("Create your workspace");
                    setSubText("Get started with TeamerHQ");
                  }}
                >
                  <Plus className="h-5 w-5 text-muted-foreground" />
                  <span>Create a new workspace</span>
                </Button>
              </div>
              <Button 
                variant="ghost" 
                className="w-full hover:bg-blue-50 dark:hover:bg-blue-900/20" 
                onClick={() => setStep("email")}
              >
                Use a different email
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
              <Button className="w-full" onClick={handleContinue} disabled={!teamName}>
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
                  Yatze! you will be able to add more members once you are all set.
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
                onClick={handleFinalSubmit}
                disabled={!channels.some((channel) => channel.trim() !== "")}
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

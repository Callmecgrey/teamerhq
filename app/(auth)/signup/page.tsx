"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Boxes, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code" | "team" | "invite" | "channels">("email");
  const [email, setEmail] = useState("");
  const [codeParts, setCodeParts] = useState(["", "", "", "", "", ""]);
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);
  const [channels, setChannels] = useState([""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [headerText, setHeaderText] = useState("Create your workspace");
  const [subText, setSubText] = useState("Get started with TeamerHQ");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    if (step === "email" && validateEmail(email)) {
      setStep("code");
      setCountdown(30);
      setIsResendDisabled(true);
      setHeaderText("Verify your email");
      setSubText("Enter the code we sent to your email");
    } else if (step === "code") {
      setStep("team");
      setHeaderText("Create your workspace");
      setSubText("Name your team's workspace");
    } else if (step === "team") {
      setStep("invite");
      setHeaderText(`${teamName} Workspace`);
      setSubText("Invite your team members");
    } else if (step === "invite") {
      setStep("channels");
      setSubText("Set up your communication channels");
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

  const handleCodePartChange = (index: number, value: string) => {
    const validInput = /^[a-zA-Z0-9]$/.test(value);
    if (!validInput && value !== "") return;
    const updatedCodeParts = [...codeParts];
    updatedCodeParts[index] = value.slice(0, 1);
    setCodeParts(updatedCodeParts);

    if (validInput && index < codeParts.length - 1) {
      const nextInput = document.getElementById(`code-box-${index + 1}`);
      nextInput?.focus();
    }
  };

  const combinedCode = codeParts.join("");

  useEffect(() => {
    if (step === "code" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [step, countdown]);

  const handleResendCode = () => {
    setCountdown(30);
    setIsResendDisabled(true);
    console.log("Code resent to:", email);
  };

  const handleFinalSubmit = () => {
    router.push("/dashboard");
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
                {!validateEmail(email) && email.length > 0 && (
                  <p className="text-red-500 text-sm">Please enter a valid email address.</p>
                )}
              </div>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleContinue}
                disabled={!validateEmail(email)}
              >
                Continue
              </Button>
            </div>
          )}

          {step === "code" && (
            <div className="space-y-4">
              <Label>Verification Code</Label>
              <div className="grid grid-cols-6 gap-2 sm:gap-4">
                {codeParts.map((part, index) => (
                  <Input
                    key={index}
                    id={`code-box-${index}`}
                    type="text"
                    value={part}
                    onChange={(e) => handleCodePartChange(index, e.target.value)}
                    maxLength={1}
                    className="text-center w-full h-12 sm:h-14 text-lg font-semibold"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                We sent a code to {email}
              </p>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleContinue}
                disabled={combinedCode.length !== 6}
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
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleContinue}
                disabled={!teamName}
              >
                Create Workspace
              </Button>
            </div>
          )}

          {step === "invite" && (
            <div className="space-y-4">
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="space-y-2">
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
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          onClick={() => handleRemoveMember(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {teamMembers.length < 4 && (
                <Button
                  variant="outline"
                  onClick={handleAddMember}
                  className="w-full"
                >
                  Add Another Member
                </Button>
              )}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleContinue}
                disabled={teamMembers.some((member) => !validateEmail(member))}
              >
                Continue
              </Button>
            </div>
          )}

          {step === "channels" && (
            <div className="space-y-4">
              <div className="space-y-4">
                {channels.map((channel, index) => (
                  <div key={index} className="space-y-2">
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
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          onClick={() => handleRemoveChannel(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {channels.length < 3 && (
                <Button
                  variant="outline"
                  onClick={handleAddChannel}
                  className="w-full"
                >
                  Add Another Channel
                </Button>
              )}
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleFinalSubmit}
                disabled={!channels.some((channel) => channel.trim() !== "")}
              >
                Create Workspace
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
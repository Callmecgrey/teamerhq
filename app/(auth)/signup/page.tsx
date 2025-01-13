"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { EmailStep } from "@/components/authstep/signup/EmailStep";
import { CodeStep } from "@/components/authstep/signup/CodeStep";
import { TeamStep } from "@/components/authstep/signup/TeamStep";
import { InviteStep } from "@/components/authstep/signup/InviteStep";
import { ChannelsStep } from "@/components/authstep/signup/ChannelsStep";

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

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
            <EmailStep
              email={email}
              setEmail={setEmail}
              onContinue={handleContinue}
            />
          )}
          {step === "code" && (
            <CodeStep
              email={email}
              codeParts={codeParts}
              handleCodePartChange={handleCodePartChange}
              countdown={countdown}
              isResendDisabled={isResendDisabled}
              handleResendCode={handleResendCode}
              onContinue={handleContinue}
            />
          )}
          {step === "team" && (
            <TeamStep
              teamName={teamName}
              setTeamName={setTeamName}
              onContinue={handleContinue}
            />
          )}
          {step === "invite" && (
            <InviteStep
              teamMembers={teamMembers}
              handleMemberChange={(index, value) => {
                const updatedMembers = [...teamMembers];
                updatedMembers[index] = value;
                setTeamMembers(updatedMembers);
              }}
              handleAddMember={() => setTeamMembers([...teamMembers, ""])}
              handleRemoveMember={(index) =>
                setTeamMembers(teamMembers.filter((_, i) => i !== index))
              }
              onContinue={handleContinue}
            />
          )}
          {step === "channels" && (
            <ChannelsStep
              channels={channels}
              handleChannelChange={(index, value) => {
                const updatedChannels = [...channels];
                updatedChannels[index] = value;
                setChannels(updatedChannels);
              }}
              handleAddChannel={() => setChannels([...channels, ""])}
              handleRemoveChannel={(index) =>
                setChannels(channels.filter((_, i) => i !== index))
              }
              onFinalSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
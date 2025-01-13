"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Boxes, Briefcase } from "lucide-react";
import EmailStep from "@/components/authstep/login/EmailStep";
import OtpStep from "@/components/authstep/login/OtpStep";
import OrgStep from "@/components/authstep/login/OrganizationStep";
import TeamStep from "@/components/authstep/login/TeamStep";
import InviteStep from "@/components/authstep/login/InviteStep";
import ChannelsStep from "@/components/authstep/login/ChannelsStep";

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

  useEffect(() => {
    if (step === "otp" && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [step, countdown]);

  const handleContinue = () => {
    if (step === "email") {
      setStep("otp");
      setSubText("Enter the code we sent to your email");
    } else if (step === "otp") {
      setStep("org");
      setSubText("Select your workspace");
    } else if (step === "org") {
      setStep("team");
      setHeaderText("Create your workspace");
      setSubText("Name your team's workspace");
    } else if (step === "team") {
      setHeaderText(`${teamName} Workspace`);
      setSubText("Invite your team members");
      setStep("invite");
    } else if (step === "invite") {
      setStep("channels");
      setHeaderText("Create your channels");
      setSubText("Create channels for your team");
    }
  };

  const handleFinalSubmit = () => {
    console.log("Workspace Created:", { teamName, teamMembers, channels });
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
          {step === "email" && <EmailStep email={email} setEmail={setEmail} onContinue={handleContinue} />}
          {step === "otp" && (
            <OtpStep
              email={email}
              otp={otp}
              onOtpChange={(index, value) => setOtp(otp.map((part, i) => (i === index ? value : part)))}
              countdown={countdown}
              isResendDisabled={isResendDisabled}
              onResend={() => {
                setCountdown(30);
                setIsResendDisabled(true);
              }}
              onContinue={handleContinue}
            />
          )}
          {step === "org" && (
            <OrgStep
              email={email}
              organizations={[
                { id: 1, name: "Acme Corp", role: "Owner", icon: Briefcase },
                { id: 2, name: "Beta Inc", role: "Team Member", icon: Boxes },
              ]}
              onSelect={(orgName) => {
                console.log("Selected Organization:", orgName);
                router.push("/dashboard");
              }}
              onCreateWorkspace={() => {
                setStep("team");
              }}
              onChangeEmail={() => setStep("email")}
            />
          )}
          {step === "team" && (
            <TeamStep teamName={teamName} setTeamName={setTeamName} onContinue={handleContinue} />
          )}
          {step === "invite" && (
            <InviteStep
              teamMembers={teamMembers}
              onAddMember={() => setTeamMembers([...teamMembers, ""])}
              onRemoveMember={(index) =>
                setTeamMembers(teamMembers.filter((_, i) => i !== index))
              }
              onMemberChange={(index, value) =>
                setTeamMembers(teamMembers.map((member, i) => (i === index ? value : member)))
              }
              onContinue={handleContinue}
            />
          )}
          {step === "channels" && (
            <ChannelsStep
              channels={channels}
              onAddChannel={() => setChannels([...channels, ""])}
              onRemoveChannel={(index) =>
                setChannels(channels.filter((_, i) => i !== index))
              }
              onChannelChange={(index, value) =>
                setChannels(channels.map((channel, i) => (i === index ? value : channel)))
              }
              onFinalSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
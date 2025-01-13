"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Building2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvitePage({ params }: { params: { workspaceId: string } }) {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code" | "welcome">("email");
  const [email, setEmail] = useState("");
  const [codeParts, setCodeParts] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [workspaceDetails, setWorkspaceDetails] = useState({
    name: "Acme Corp",
    invitedBy: "John Doe",
    role: "Team Member"
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    if (step === "email" && validateEmail(email)) {
      setStep("code");
      setCountdown(30);
      setIsResendDisabled(true);
    } else if (step === "code") {
      setStep("welcome");
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

  const handleAcceptInvite = () => {
    router.push("/dashboard");
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
            {step === "welcome" ? "Welcome to TeamerHQ" : "Join Workspace"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {step === "welcome" 
              ? `You've been invited to join ${workspaceDetails.name}`
              : "Verify your email to join the workspace"}
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

          {step === "welcome" && (
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
              
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                onClick={handleAcceptInvite}
              >
                Accept Invite & Join Workspace
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                By accepting this invite, you agree to TeamerHQ's{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
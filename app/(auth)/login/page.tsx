"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Briefcase, Plus } from "lucide-react"; // Import Plus icon
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"email" | "otp" | "org">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

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
    }
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamerHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue to your workspace
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
              <Button className="w-full" onClick={handleContinue} disabled={!email}>
                Continue
              </Button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <Label>Enter OTP</Label>
              <div className="flex space-x-4">
                {otp.map((part, index) => (
                  <Input
                    key={index}
                    id={`otp-box-${index}`}
                    type="text"
                    value={part}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength={1}
                    className="text-center w-12 h-12"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                We sent an OTP to {email}.
              </p>
              <Button
                className="w-full"
                onClick={handleContinue}
                disabled={combinedOtp.length !== 6}
              >
                Verify
              </Button>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Resend code in: {countdown}s
                </span>
                <span
                  onClick={isResendDisabled ? undefined : handleResendCode}
                  className={`text-sm cursor-pointer ${
                    isResendDisabled
                      ? "text-muted-foreground cursor-not-allowed"
                      : "text-blue-500 hover:underline"
                  }`}
                  aria-disabled={isResendDisabled}
                >
                  Resend Code
                </span>
              </div>
            </div>
          )}

          {step === "org" && (
            <div className="space-y-4">
              <div>
                <Label>Select workspace</Label>
                <div className="mt-2 space-y-2">
                  {organizations.map((org) => (
                    <Button
                      key={org.id}
                      variant="outline"
                      className="w-full justify-start h-auto p-4 flex items-center space-x-4"
                      onClick={() => {
                        console.log(`Selected organization: ${org.name}`);
                      }}
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
                  className="w-full justify-start flex items-center space-x-2"
                  onClick={() => {
                    console.log("Create new workspace");
                  }}
                >
                  <Plus className="h-5 w-5 text-muted-foreground" />
                  <span>Create a new workspace</span>
                </Button>
              </div>
              <Button variant="ghost" className="w-full" onClick={() => setStep("email")}>
                Use a different email
              </Button>
            </div>
          )}
        </div>

        {step !== "org" && (
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

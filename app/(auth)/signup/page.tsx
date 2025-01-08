"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState<"email" | "code" | "team">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleContinue = () => {
    if (step === "email") {
      setStep("code");
    } else if (step === "code") {
      setStep("team");
    } else {
      // Handle final signup
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamPHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Create your workspace</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get started with TeamPHQ
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
                <Label htmlFor="teamName">Team name</Label>
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
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
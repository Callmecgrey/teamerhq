"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [step, setStep] = useState<"email" | "org">("email");
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    setStep("org");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">TeamPHQ</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue to your workspace
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg">
          {step === "email" ? (
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
          ) : (
            <div className="space-y-4">
              <div>
                <Label>Select workspace</Label>
                <div className="mt-2 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => {
                      // Handle workspace selection
                    }}
                  >
                    <div>
                      <div className="font-medium">Acme Corp</div>
                      <div className="text-sm text-muted-foreground">
                        {email}
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setStep("email")}
              >
                Use a different email
              </Button>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
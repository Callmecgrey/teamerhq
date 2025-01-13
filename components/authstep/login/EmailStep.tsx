"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailStepProps {
  email: string;
  setEmail: (value: string) => void;
  onContinue: () => void;
}

export default function EmailStep({ email, setEmail, onContinue }: EmailStepProps) {
  return (
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
        onClick={onContinue} 
        disabled={!email}
      >
        Continue
      </Button>
    </div>
  );
}
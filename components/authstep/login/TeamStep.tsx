"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TeamStepProps {
  teamName: string;
  setTeamName: (value: string) => void;
  onContinue: () => void;
}

export default function TeamStep({ teamName, setTeamName, onContinue }: TeamStepProps) {
  return (
    <div className="space-y-4">
      <Label htmlFor="teamName">Workspace Name</Label>
      <Input
        id="teamName"
        type="text"
        placeholder="Acme Corp"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white" onClick={onContinue} disabled={!teamName}>
        Create Workspace
      </Button>
    </div>
  );
}
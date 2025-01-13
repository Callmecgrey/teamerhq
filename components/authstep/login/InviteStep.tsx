"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface InviteStepProps {
  teamMembers: string[];
  onAddMember: () => void;
  onRemoveMember: (index: number) => void;
  onMemberChange: (index: number, value: string) => void;
  onContinue: () => void;
}

export default function InviteStep({
  teamMembers,
  onAddMember,
  onRemoveMember,
  onMemberChange,
  onContinue,
}: InviteStepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Invite Team Members</h3>
      {teamMembers.map((member, index) => (
        <div key={index} className="space-y-2">
          <Label htmlFor={`teamMember${index}`}>Team Member {index + 1}</Label>
          <div className="flex items-center space-x-2">
            <Input
              id={`teamMember${index}`}
              type="email"
              placeholder="team.member@company.com"
              value={member}
              onChange={(e) => onMemberChange(index, e.target.value)}
            />
            {teamMembers.length > 1 && (
              <button
                type="button"
                className="p-2 text-red-500"
                onClick={() => onRemoveMember(index)}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ))}
      {teamMembers.length < 4 && (
        <Button className="w-full" onClick={onAddMember}>
          Add Another Member
        </Button>
      )}
      <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white" onClick={onContinue}>
        Continue
      </Button>
    </div>
  );
}

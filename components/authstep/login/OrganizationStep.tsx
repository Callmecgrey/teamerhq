"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

interface Organization {
  id: number;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface OrganizationStepProps {
  email: string;
  organizations: Organization[];
  onSelect: (orgName: string) => void;
  onCreateWorkspace: () => void;
  onChangeEmail: () => void;
}

export default function OrganizationStep({
  email,
  organizations,
  onSelect,
  onCreateWorkspace,
  onChangeEmail,
}: OrganizationStepProps) {
  return (
    <div className="space-y-4">
      <Label>Select a Workspace</Label>
      <div className="mt-2 space-y-2">
        {organizations.map((org) => (
          <Button
            key={org.id}
            variant="outline"
            className="w-full justify-start h-auto p-4 flex items-center space-x-4 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            onClick={() => onSelect(org.name)}
          >
            {React.createElement(org.icon, { className: "h-8 w-8 text-muted-foreground" })}
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
      <Button variant="ghost" className="w-full" onClick={onCreateWorkspace}>
        <Plus className="h-5 w-5 text-muted-foreground" />
        <span>Create a new workspace</span>
      </Button>
      <Button variant="ghost" className="w-full" onClick={onChangeEmail}>
        Use a different email
      </Button>
    </div>
  );
}
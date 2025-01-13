import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InviteStepProps {
  teamMembers: string[];
  handleMemberChange: (index: number, value: string) => void;
  handleAddMember: () => void;
  handleRemoveMember: (index: number) => void;
  onContinue: () => void;
}

export const InviteStep = ({
  teamMembers,
  handleMemberChange,
  handleAddMember,
  handleRemoveMember,
  onContinue,
}: InviteStepProps) => {
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`teamMember${index}`}>Team Member {index + 1}</Label>
            <div className="flex items-center space-x-2">
              <Input
                id={`teamMember${index}`}
                type="email"
                placeholder="team.member@company.com"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
              />
              {teamMembers.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={() => handleRemoveMember(index)}
                >
                  X
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {teamMembers.length < 4 && (
        <Button
          variant="outline"
          onClick={handleAddMember}
          className="w-full"
        >
          Add Another Member
        </Button>
      )}
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onContinue}
        disabled={teamMembers.some((member) => !validateEmail(member))}
      >
        Continue
      </Button>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailStepProps {
  email: string;
  setEmail: (email: string) => void;
  onContinue: () => void;
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const EmailStep = ({ email, setEmail, onContinue }: EmailStepProps) => {
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
        {!validateEmail(email) && email.length > 0 && (
          <p className="text-red-500 text-sm">Please enter a valid email address.</p>
        )}
      </div>
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onContinue}
        disabled={!validateEmail(email)}
      >
        Continue
      </Button>
    </div>
  );
};

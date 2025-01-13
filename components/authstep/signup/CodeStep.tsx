import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CodeStepProps {
  email: string;
  codeParts: string[];
  countdown: number;
  isResendDisabled: boolean;
  handleCodePartChange: (index: number, value: string) => void;
  handleResendCode: () => void;
  onContinue: () => void;
}

export const CodeStep = ({
  email,
  codeParts,
  countdown,
  isResendDisabled,
  handleCodePartChange,
  handleResendCode,
  onContinue,
}: CodeStepProps) => {
  const combinedCode = codeParts.join("");

  return (
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
      <p className="text-sm text-muted-foreground">We sent a code to {email}</p>
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onContinue}
        disabled={combinedCode.length !== 6}
      >
        Verify
      </Button>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Resend code in: {countdown}s</span>
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
  );
};

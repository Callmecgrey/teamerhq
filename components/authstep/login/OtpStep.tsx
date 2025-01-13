"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OtpStepProps {
  otp: string[];
  email: string;
  countdown: number;
  isResendDisabled: boolean;
  onOtpChange: (index: number, value: string) => void;
  onResend: () => void;
  onContinue: () => void;
}

export default function OtpStep({
  otp,
  email,
  countdown,
  isResendDisabled,
  onOtpChange,
  onResend,
  onContinue,
}: OtpStepProps) {
  const combinedOtp = otp.join("");

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Ignore input longer than 1 character
    onOtpChange(index, value);

    // Move to the next input if a value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-box-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !otp[index]) {
      // Move to the previous input on backspace if the current box is empty
      if (index > 0) {
        const prevInput = document.getElementById(`otp-box-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  return (
    <div className="space-y-4">
      <Label>Enter OTP</Label>
      <div className="grid grid-cols-6 gap-2 sm:gap-4">
        {otp.map((part, index) => (
          <Input
            key={index}
            id={`otp-box-${index}`}
            type="text"
            value={part}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="text-center w-full h-12 sm:h-14 text-lg font-semibold"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        We sent an OTP to {email}
      </p>
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onContinue}
        disabled={combinedOtp.length !== 6}
      >
        Verify
      </Button>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Resend code in: {countdown}s
        </span>
        <button
          onClick={isResendDisabled ? undefined : onResend}
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
}

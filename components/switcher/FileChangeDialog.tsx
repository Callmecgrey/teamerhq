import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";

interface FileChangeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function FileChangeDialog({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: FileChangeDialogProps) {
  const [dontAskAgain, setDontAskAgain] = useState(false);

  const handleConfirm = () => {
    if (dontAskAgain) {
      localStorage.setItem('dontShowFileChangeDialog', 'true');
    }
    onConfirm();
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Close Current Preview?</AlertDialogTitle>
          <AlertDialogDescription>
            You have a file preview open. Would you like to close it and view the new selection?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <Checkbox
            id="dontAskAgain"
            checked={dontAskAgain}
            onCheckedChange={(checked) => setDontAskAgain(checked as boolean)}
          />
          <label
            htmlFor="dontAskAgain"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Don&apos;t ask me again
          </label>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
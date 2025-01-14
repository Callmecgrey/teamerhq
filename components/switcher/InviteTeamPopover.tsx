"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserPlus, Mail, X } from "lucide-react";

export default function InviteTeamPopover({ onClose }: { onClose: () => void }) {
  const [emails, setEmails] = useState("");
  const [message, setMessage] = useState("");

  const handleSendInvitations = () => {
    // Handle invite logic here
    const emailList = emails.split('\n').filter(email => email.trim());
    console.log("Sending invitations to:", emailList, "with message:", message);
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-b from-purple-50/95 via-gray-50/95 to-white/95 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-black/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        <DialogTitle className="flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          <UserPlus className="w-5 h-5 mr-2 text-violet-500 dark:text-violet-400" />
          Invite Team Members
        </DialogTitle>
        <DialogDescription className="text-gray-600 dark:text-gray-400">
          Invite your teammates to collaborate in your workspace.
        </DialogDescription>

        <ScrollArea className="mt-4 max-h-[400px]">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Addresses
              </label>
              <Textarea
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Enter email addresses (one per line)"
                className="min-h-[120px] bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-violet-500 dark:focus:ring-violet-400"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Enter multiple email addresses separated by new lines
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Personal Message (optional)
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Add a personal message to your invitation"
                className="min-h-[80px] bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-violet-500 dark:focus:ring-violet-400"
              />
            </div>

            <Button
              className="w-full bg-violet-600 hover:bg-violet-700 text-white"
              onClick={handleSendInvitations}
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Invitations
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
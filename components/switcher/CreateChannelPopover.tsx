"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, Globe } from "lucide-react";

export default function CreateChannelPopover({ onClose }: { onClose: () => void }) {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [channelType, setChannelType] = useState("public");

  const handleCreate = () => {
    if (!channelName.trim()) {
      return;
    }
    console.log("Channel created:", { channelName, channelDescription, channelType });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-purple-50/95 via-gray-50/95 to-white/95 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-black/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Create a New Channel
        </DialogTitle>
        <DialogDescription className="text-gray-600 dark:text-gray-400">
          Channels are where your team communicates. They're best organized around a topic or department.
        </DialogDescription>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="channelName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Channel Name
            </Label>
            <Input
              id="channelName"
              placeholder="e.g. marketing"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-violet-500 dark:focus:ring-violet-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channelDescription" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description <span className="text-gray-500 dark:text-gray-400">(optional)</span>
            </Label>
            <Textarea
              id="channelDescription"
              placeholder="What's this channel about?"
              value={channelDescription}
              onChange={(e) => setChannelDescription(e.target.value)}
              className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-violet-500 dark:focus:ring-violet-400 min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Channel Type
            </Label>
            <RadioGroup
              value={channelType}
              onValueChange={setChannelType}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-white/50 dark:bg-gray-800/50">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="flex items-center space-x-2 cursor-pointer">
                  <Globe className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">Public Channel</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Anyone in the workspace can join</p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-white/50 dark:bg-gray-800/50">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private" className="flex items-center space-x-2 cursor-pointer">
                  <Lock className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">Private Channel</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Only invited people can join</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!channelName.trim()}
            className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Create Channel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
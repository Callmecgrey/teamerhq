"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface ChannelsStepProps {
  channels: string[];
  onAddChannel: () => void;
  onRemoveChannel: (index: number) => void;
  onChannelChange: (index: number, value: string) => void;
  onFinalSubmit: () => void;
}

export default function ChannelsStep({
  channels,
  onAddChannel,
  onRemoveChannel,
  onChannelChange,
  onFinalSubmit,
}: ChannelsStepProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Create Channels</h3>
      {channels.map((channel, index) => (
        <div key={index} className="space-y-2">
          <Label htmlFor={`channel${index}`}>Channel {index + 1}</Label>
          <div className="flex items-center space-x-2">
            <Input
              id={`channel${index}`}
              type="text"
              placeholder="e.g., General, Marketing"
              value={channel}
              onChange={(e) => onChannelChange(index, e.target.value)}
            />
            {channels.length > 1 && (
              <button
                type="button"
                className="p-2 text-red-500"
                onClick={() => onRemoveChannel(index)}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ))}
      {channels.length < 3 && (
        <Button className="w-full" onClick={onAddChannel}>
          Add Another Channel
        </Button>
      )}
      <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white" onClick={onFinalSubmit}>
        Yay! Let&apos;s Go
      </Button>
    </div>
  );
}
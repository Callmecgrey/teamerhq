import { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export default function CreateChannelPopover({ onClose }: { onClose: () => void }) {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");
  const [channelType, setChannelType] = useState("public");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCreate = () => {
    console.log("Channel created:", { channelName, channelDescription, channelType });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogOverlay />
      <DialogContent>
        <div className="space-y-4">
          <DialogTitle>Create a New Channel</DialogTitle>
          <DialogDescription>
            Create a public or private channel for your team.
          </DialogDescription>

          {/* Channel Name Input */}
          <input
            type="text"
            placeholder="Channel Name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-0 bg-transparent text-white placeholder-gray-400"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />

          {/* Channel Description Textarea */}
          <textarea
            placeholder="Channel Description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-0 bg-transparent text-white placeholder-gray-400"
            rows={4}
            value={channelDescription}
            onChange={(e) => setChannelDescription(e.target.value)}
          />

          {/* Custom Dropdown for Channel Type */}
          <div className="relative">
            <button
              className="w-full p-2 border rounded-md bg-transparent text-white placeholder-gray-400 flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {channelType === "public" ? "Public" : "Private"}
              <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full bg-gray-700 border rounded-md shadow-lg">
                <div
                  className="p-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setChannelType("public");
                    setIsDropdownOpen(false);
                  }}
                >
                  Public
                </div>
                <div
                  className="p-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setChannelType("private");
                    setIsDropdownOpen(false);
                  }}
                >
                  Private
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 rounded border text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4"></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

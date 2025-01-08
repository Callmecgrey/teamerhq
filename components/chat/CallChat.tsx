// components/chat/CallChat.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Smile,
  Paperclip,
  Send,
  Mic,
  X,
  StopCircle,
} from "lucide-react";
import { useState } from "react";

export default function EnhancedMessageThreadSidebar({
  message,
  onClose,
}: {
  message: any;
  onClose: () => void;
}) {
  const [isRecording, setIsRecording] = useState(false);
  const [reply, setReply] = useState("");

  const handleVoiceRecord = () => {
    setIsRecording((prev) => !prev);
  };

  const handleSendReply = () => {
    if (reply.trim()) {
      // Handle reply submission logic here.
      console.log("Reply Sent:", reply);
      setReply("");
    }
  };

  return (
    <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Thread</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close Thread">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Original Message */}
      <div className="flex items-start space-x-4 bg-muted/20 p-4 rounded-lg shadow-sm mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
          {message.user
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">{message.user}</span>
            <span className="text-xs text-muted-foreground">{message.time}</span>
          </div>
          <p className="text-sm mt-1">{message.content}</p>
        </div>
      </div>

      {/* Replies Section */}
      <div className="flex-grow space-y-4 overflow-y-auto">
        {message.replies && message.replies.length > 0 ? (
          message.replies.map((reply, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/10 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                {reply.user
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{reply.user}</span>
                  <span className="text-xs text-muted-foreground">{reply.time}</span>
                </div>
                <p className="text-sm mt-1">{reply.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No replies yet. Be the first to reply!</p>
        )}
      </div>

      {/* Reply Input */}
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          {/* Voice Recording */}
          <Button
            variant={isRecording ? "destructive" : "ghost"}
            size="icon"
            className="h-10 w-10"
            aria-label={isRecording ? "Stop Voice Recording" : "Start Voice Recording"}
            onClick={handleVoiceRecord}
          >
            {isRecording ? <StopCircle className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>

          {/* Input Field */}
          <div className="flex-1 relative">
            <Input
              placeholder="Reply to thread..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="pr-24"
              aria-label="Reply Input"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Open Emoji Picker">
                <Smile className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Attach File">
                <Paperclip className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Send Button */}
          <Button
            size="icon"
            variant="primary"
            onClick={handleSendReply}
            aria-label="Send Reply"
            disabled={!reply.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        {/* Recording Indicator */}
        {isRecording && (
          <p className="text-xs text-red-500 mt-2">Recording... Click stop to end.</p>
        )}
      </div>
    </div>
  );
}

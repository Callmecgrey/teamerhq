// components/chat/MessageThreadSidebar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send, Mic, X } from "lucide-react";

export default function MessageThreadSidebar({
  message,
  onClose,
  onVoiceRecord,
}: {
  message: any;
  onClose: () => void;
  onVoiceRecord: () => void;
}) {
  return (
    <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Thread</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
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
          {/* Voice Recording Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-muted-foreground hover:text-foreground"
            aria-label="Start Voice Recording"
            onClick={onVoiceRecord}
          >
            <Mic className="h-5 w-5" />
          </Button>

          {/* Input Field */}
          <div className="flex-1 relative">
            <Input placeholder="Reply to thread..." className="pr-24" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Smile className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Button size="icon" variant="primary" aria-label="Send Message">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// components/chat/MessageThreadSidebar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send, X } from "lucide-react";

export default function MessageThreadSidebar({
  message,
  onClose,
}: {
  message: any;
  onClose: () => void;
}) {
  return (
    <div className="w-[40%] border-l bg-card p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold">Thread</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {/* Original Message */}
        <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            {message.user.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="font-medium">{message.user}</span>
              <span className="text-xs text-muted-foreground">{message.time}</span>
            </div>
            <p className="text-sm">{message.content}</p>
          </div>
        </div>

        {/* Reply Input */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input placeholder="Reply to thread..." className="pr-24" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Smile className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

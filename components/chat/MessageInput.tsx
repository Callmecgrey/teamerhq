// components/chat/MessageInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send, Mic } from "lucide-react";

export default function MessageInput({
  message,
  onChange,
  onSend,
  onVoiceRecord,
}: {
  message: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onVoiceRecord: () => void;
}) {
  return (
    <div className="p-4 border-t bg-card">
      <div className="flex items-center space-x-3">
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
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={onChange}
            className="pr-24 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              aria-label="Insert Emoji"
            >
              <Smile className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              aria-label="Attach File"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Send Button */}
        <Button
          size="icon"
          variant="primary"
          onClick={onSend}
          disabled={!message.trim()}
          aria-label="Send Message"
          className="h-10 w-10 flex items-center justify-center"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

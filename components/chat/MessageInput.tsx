// components/chat/MessageInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send } from "lucide-react";

export default function MessageInput({ message, onChange, onSend }: { message: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onSend: () => void }) {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <Input
            placeholder="Message #general"
            value={message}
            onChange={onChange}
            className="pr-24"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Smile className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Paperclip className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button size="icon" onClick={onSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

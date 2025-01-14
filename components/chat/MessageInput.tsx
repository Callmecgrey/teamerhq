// components/chat/MessageInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send, Mic } from "lucide-react";

export default function MessageInput({
  message,
  placeholder,
  onChange,
  onSend,
  onVoiceRecord,
}: {
  message: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onVoiceRecord: () => void;
}) {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/20"
          aria-label="Start Voice Recording"
          onClick={onVoiceRecord}
        >
          <Mic className="h-5 w-5" />
        </Button>

        <div className="flex-1 relative">
          <Input
            placeholder={placeholder || "Type your message..."}
            value={message}
            onChange={onChange}
            className="pr-24 text-sm bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/20"
              aria-label="Insert Emoji"
            >
              <Smile className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/20"
              aria-label="Attach File"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button
          size="icon"
          variant="default"
          onClick={onSend}
          disabled={!message.trim()}
          aria-label="Send Message"
          className="h-10 w-10 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 disabled:bg-gray-300 dark:disabled:bg-gray-700"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
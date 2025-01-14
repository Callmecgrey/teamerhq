// components/chat/MessageThreadSidebar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smile, Paperclip, Send, Mic, X } from "lucide-react";

type Reply = {
  user: string;
  time: string;
  content: string;
};

type Message = {
  user: string;
  time: string;
  content: string;
  replies?: Reply[];
};

export default function MessageThreadSidebar({
  message,
  onClose,
  onVoiceRecord,
}: {
  message: Message;
  onClose: () => void;
  onVoiceRecord: () => void;
}) {
  const getUserInitials = (name: string) => {
    if (!name) return "?";
    return name.split(" ").map((n: string) => n[0]).join("");
  };

  return (
    <div className="w-[25%] border-l border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Thread</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
        >
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </div>

      {/* Original Message */}
      <div className="flex items-start space-x-4 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow-sm mb-6">
        <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center font-medium text-violet-600 dark:text-violet-400">
          {getUserInitials(message?.user || "Unknown")}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 dark:text-white">{message?.user || "Unknown"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{message?.time || "N/A"}</span>
          </div>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{message?.content || "No content available."}</p>
        </div>
      </div>

      {/* Replies Section */}
      <div className="flex-grow space-y-4 overflow-y-auto">
        {message?.replies && message.replies.length > 0 ? (
          message.replies.map((reply: Reply, index: number) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-white/30 dark:bg-gray-800/30 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center font-medium text-violet-600 dark:text-violet-400">
                {getUserInitials(reply?.user || "Unknown")}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900 dark:text-white">{reply?.user || "Unknown"}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{reply?.time || "N/A"}</span>
                </div>
                <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{reply?.content || "No content available."}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">No replies yet. Be the first to reply!</p>
        )}
      </div>

      {/* Reply Input */}
      <div className="mt-4 bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
        <div className="flex items-center space-x-2">
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
              placeholder="Reply to thread..." 
              className="pr-24 bg-transparent border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-violet-100 dark:hover:bg-violet-900/20"
              >
                <Smile className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-violet-100 dark:hover:bg-violet-900/20"
              >
                <Paperclip className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
          </div>
          
          <Button 
            size="icon" 
            variant="default"
            className="h-10 w-10 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
// components/chat/MessagesList.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Forward } from "lucide-react";

export default function MessagesList({
  messages,
  onMessageClick,
  sender = "Me",
}: {
  messages?: { id: number; user: string; time: string; content: string }[]; // Optional prop for messages
  onMessageClick: (message: any) => void;
  sender?: string;
}) {
  const [reactions, setReactions] = useState<{ [key: number]: { likes: number } }>({});

  // Default messages for testing
  const defaultMessages = [
    { id: 1, user: "John Doe", time: "12:34 PM", content: "Hello team! How's everyone doing?" },
    { id: 2, user: sender, time: "12:36 PM", content: "I'm doing great! Thanks for asking." },
    { id: 3, user: "Chris Evans", time: "12:38 PM", content: "Same here. Ready for the meeting." },
    { id: 4, user: sender, time: "12:40 PM", content: "Does anyone have updates on the project?" },
  ];

  const displayMessages = messages && messages.length > 0 ? messages : defaultMessages;

  const handleReaction = (messageId: number, type: "like") => {
    setReactions((prev) => ({
      ...prev,
      [messageId]: {
        ...prev[messageId],
        likes: (prev[messageId]?.likes || 0) + 1,
      },
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-muted/10 rounded-lg">
      <div className="space-y-4">
        {displayMessages.map((message) => {
          const isSender = message.user === sender;
          const messageReactions = reactions[message.id] || { likes: 0 };

          return (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                isSender ? "justify-end text-right" : "justify-start"
              }`}
              onClick={() => onMessageClick(message)}
            >
              {!isSender && (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                  {message.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}

              <div className="max-w-xs p-3 rounded-lg bg-muted/20 text-foreground flex flex-col">
                <div className="flex items-center justify-between">
                  {!isSender && <span className="font-medium">{message.user}</span>}
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
                <p className="text-sm mt-1">{message.content}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  {messageReactions.likes > 0 && (
                    <span>
                      {messageReactions.likes} {messageReactions.likes > 1 ? "Likes" : "Like"}
                    </span>
                  )}
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReaction(message.id, "like");
                      }}
                    >
                      <Heart className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Forward message");
                      }}
                    >
                      <Forward className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

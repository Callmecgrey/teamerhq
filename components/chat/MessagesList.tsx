"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Forward, 
  MoreHorizontal, 
  Reply, 
  Smile,
  Pencil,
  Trash2,
  SmilePlus,
  ThumbsUp,
  Heart, // Import Heart once without aliasing
  Flame,
  Laugh,
  Frown,
  Angry
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MessagesList({
  messages,
  onMessageClick,
  sender = "Me",
}: {
  messages?: { id: number; user: string; time: string; content: string }[];
  onMessageClick: (message: any) => void;
  sender?: string;
}) {
  const [reactions, setReactions] = useState<{ [key: number]: { likes: number } }>({});
  const [hoveredMessage, setHoveredMessage] = useState<number | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const defaultMessages = [
    { id: 1, user: "John Doe", time: "12:34 PM", content: "Hello team! How's everyone doing?" },
    { id: 2, user: sender, time: "12:36 PM", content: "I'm doing great! Thanks for asking." },
    { id: 3, user: "Chris Evans", time: "12:38 PM", content: "Same here. Ready for the meeting." },
    { id: 4, user: sender, time: "12:40 PM", content: "Does anyone have updates on the project?" },
  ];

  const emojis = [
    { icon: ThumbsUp, name: "👍" },
    { icon: Heart, name: "❤️" },
    { icon: Flame, name: "🔥" },
    { icon: Laugh, name: "😄" },
    { icon: Frown, name: "😢" },
    { icon: Angry, name: "😠" },
    { icon: SmilePlus, name: "More" },
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

  const handleDelete = (messageId: number) => {
    // Implement delete functionality
    console.log("Delete message:", messageId);
  };

  const handleEdit = (messageId: number) => {
    // Implement edit functionality
    console.log("Edit message:", messageId);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-6 max-w-4xl mx-auto">
        {displayMessages.map((message) => {
          const isSender = message.user === sender;
          const messageReactions = reactions[message.id] || { likes: 0 };
          const isHovered = hoveredMessage === message.id;

          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group relative flex items-start gap-4 ${
                isSender ? "flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredMessage(message.id)}
              onMouseLeave={() => setHoveredMessage(null)}
              onClick={() => onMessageClick(message)}
            >
              {/* Keep existing Avatar section */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-lg">
                  {message.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className={`w-2 h-2 rounded-full bg-green-500 absolute ${
                  isSender ? "left-0" : "right-0"
                } bottom-0 border-2 border-white dark:border-gray-800`} />
              </div>

              {/* Message Content */}
              <div className={`flex-1 max-w-2xl ${isSender ? "items-end" : "items-start"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {message.user}
                  </span>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>

                <div className={`relative group rounded-2xl p-4 ${
                  isSender
                    ? "bg-gradient-to-br from-violet-600 to-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-700/10"
                }`}>
                  <p className="text-[15px] leading-relaxed">{message.content}</p>

                  {/* Reaction Bar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.95 }}
                    className={`absolute ${
                      isSender ? "left-0 -translate-x-full -ml-2" : "right-0 translate-x-full mr-2"
                    } top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white dark:bg-gray-800 rounded-full shadow-lg p-1`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReaction(message.id, "like");
                      }}
                    >
                      <Heart className={`h-4 w-4 ${messageReactions.likes > 0 ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Reply className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Forward className="h-4 w-4 text-gray-500" />
                    </Button>

                    {/* Emoji Picker */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Smile className="h-4 w-4 text-gray-500" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 p-2" align="center">
                        <div className="grid grid-cols-4 gap-2">
                          {emojis.map((emoji, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => setSelectedEmoji(emoji.name)}
                            >
                              <emoji.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            </Button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* More Options Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(message.id);
                          }}
                        >
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit Message
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(message.id);
                          }}
                          className="text-red-600 dark:text-red-400"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Message
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>

                  {/* Reactions Counter */}
                  {messageReactions.likes > 0 && (
                    <div className={`absolute bottom-0 ${
                      isSender ? "left-4" : "right-4"
                    } translate-y-full mt-1 flex items-center gap-1`}>
                      <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                      <span className="text-xs text-gray-500">{messageReactions.likes}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
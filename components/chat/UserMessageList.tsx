// components/chat/UserMessageList.tsx
"use client";

import { useState } from "react";
import { Edit, Trash, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserMessageList() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Me", time: "10:00 AM", content: "Working on a new feature." },
    { id: 2, user: "Me", time: "10:15 AM", content: "Here's the draft for review." },
    { id: 3, user: "Me", time: "10:00 AM", content: "Working on a new feature." },
    { id: 4, user: "Me", time: "10:15 AM", content: "Here's the draft for review." },
    { id: 5, user: "Me", time: "10:00 AM", content: "Working on a new feature." },
    { id: 6, user: "Me", time: "10:15 AM", content: "Here's the draft for review." },
    { id: 7, user: "Me", time: "10:00 AM", content: "Working on a new feature." },
    { id: 8, user: "Me", time: "10:15 AM", content: "Here's the draft for review." },
  ]);

  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState("");

  const handleEditClick = (messageId: number, currentContent: string) => {
    setEditingMessageId(messageId);
    setEditedContent(currentContent);
  };

  const handleSaveEdit = () => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === editingMessageId ? { ...msg, content: editedContent } : msg
      )
    );
    setEditingMessageId(null);
    setEditedContent("");
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditedContent("");
  };

  const handleDeleteClick = (messageId: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-purple-50/50 via-gray-50/50 to-white/50 dark:from-gray-800/50 dark:via-gray-900/50 dark:to-black/50 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className="group">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{msg.user}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</span>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-violet-100 dark:hover:bg-violet-900/20"
                    onClick={() => handleEditClick(msg.id, msg.content)}
                  >
                    <Edit className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-red-100 dark:hover:bg-red-900/20"
                    onClick={() => handleDeleteClick(msg.id)}
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>

              {editingMessageId === msg.id ? (
                <div className="mt-2 space-y-2">
                  <Input
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleCancelEdit}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveEdit}
                      className="bg-violet-600 hover:bg-violet-700 text-white"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-gray-700 dark:text-gray-300">{msg.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
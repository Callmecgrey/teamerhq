// components/chat/UserMessageList.tsx
"use client";

import { useState } from "react";
import { Edit, Trash } from "lucide-react";

export default function UserMessageList() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Me", time: "10:00 AM", content: "Working on a new feature." },
    { id: 2, user: "Me", time: "10:15 AM", content: "Here's the draft for review." },
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

  const handleDeleteClick = (messageId: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {messages.map((msg) => (
        <div key={msg.id}>
          <div className="mb-2 flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">
                {msg.user} <span>{msg.time}</span>
              </p>
              {editingMessageId === msg.id ? (
                <div className="mt-1">
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full p-2 border rounded-md text-sm"
                  />
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={handleSaveEdit}
                      className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingMessageId(null)}
                      className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-1">{msg.content}</p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditClick(msg.id, msg.content)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => handleDeleteClick(msg.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
          <hr className="border-gray-200 mt-4" />
        </div>
      ))}
    </div>
  );
}

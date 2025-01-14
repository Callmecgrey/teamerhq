"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MessageSquare } from "lucide-react";

// Mock data - replace with your actual data source
const mockUsers = [
  { id: 1, name: "Sarah Wilson", position: "Product Designer", status: "online", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
  { id: 2, name: "Michael Chen", position: "Frontend Developer", status: "offline", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" },
  { id: 3, name: "Alex Thompson", position: "Project Manager", status: "away", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
  { id: 4, name: "Jessica Lee", position: "UX Researcher", status: "online", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
  { id: 5, name: "David Kumar", position: "Backend Developer", status: "online", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
];

interface User {
  id: number;
  name: string;
  position: string;
  status: string;
  avatar: string;
}

export default function DirectMessagePopover({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartChat = (user: User) => {
    console.log("Starting chat with:", user);
    onClose();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "offline": return "bg-gray-400";
      case "away": return "bg-yellow-500";
      default: return "bg-gray-400";
    }
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[400px] bg-gradient-to-b from-purple-50/95 via-gray-50/95 to-white/95 dark:from-gray-800/95 dark:via-gray-900/95 dark:to-black/95 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          New Message
        </DialogTitle>
        <DialogDescription className="text-gray-600 dark:text-gray-400">
          Find someone in your workspace to start a conversation.
        </DialogDescription>

        <div className="relative mt-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            placeholder="Search by name or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-violet-500 dark:focus:ring-violet-400"
          />
        </div>

        <ScrollArea className="mt-4 max-h-[300px] pr-4">
          <div className="space-y-2">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 cursor-pointer transition-colors duration-200"
                onClick={() => handleStartChat(user)}
              >
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${getStatusColor(user.status)}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {user.name}
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                    >
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.position}
                  </p>
                </div>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No users found matching your search.
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
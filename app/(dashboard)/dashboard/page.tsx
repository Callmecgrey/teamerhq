"use client";

import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Plus,
  Hash,
  Video,
  Phone,
  Users,
  Settings,
  Search,
  Send,
  Smile,
  Paperclip,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const router = useRouter();

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSelectedMessage(null);
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setSelectedUser(null);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="font-semibold">Acme Corp</span>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Channels</span>
                <Button variant="ghost" size="icon" className="h-4 w-4">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Hash className="h-4 w-4 mr-2" />
                  general
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Hash className="h-4 w-4 mr-2" />
                  announcements
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Direct Messages</span>
                <Button variant="ghost" size="icon" className="h-4 w-4">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => handleUserClick({
                    name: "John Doe",
                    position: "Senior Developer",
                    role: "Engineering",
                    status: "online"
                  })}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  John Doe
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => handleUserClick({
                    name: "Jane Smith",
                    position: "Product Manager",
                    role: "Product",
                    status: "offline"
                  })}
                >
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2" />
                  Jane Smith
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${selectedUser || selectedMessage ? 'max-w-[60%]' : ''}`}>
        {/* Channel Header */}
        <div className="h-16 border-b flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Hash className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">general</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/voice")}>
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/video")}>
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Users className="h-4 w-4" />
            </Button>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10 w-64"
                placeholder="Search messages"
                type="search"
              />
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div 
              className="flex items-start space-x-3 hover:bg-muted/50 p-2 rounded-lg cursor-pointer"
              onClick={() => handleMessageClick({
                user: "John Doe",
                time: "12:34 PM",
                content: "Hello team! How's everyone doing?"
              })}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                JD
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium hover:underline">John Doe</span>
                  <span className="text-xs text-muted-foreground">12:34 PM</span>
                </div>
                <p className="text-sm">Hello team! How's everyone doing?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                placeholder="Message #general"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* User Profile Sidebar */}
      {selectedUser && (
        <div className="w-[40%] border-l bg-card p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                {selectedUser.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{selectedUser.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedUser.position}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedUser(null)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">About</h3>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-muted-foreground">Role:</span> {selectedUser.role}</p>
                <p className="text-sm"><span className="text-muted-foreground">Status:</span> {selectedUser.status}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1">Direct Message</Button>
              <Button variant="outline" className="flex-1">Call</Button>
            </div>
          </div>
        </div>
      )}

      {/* Message Thread Sidebar */}
      {selectedMessage && (
        <div className="w-[40%] border-l bg-card p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-semibold">Thread</h2>
            <Button variant="ghost" size="icon" onClick={() => setSelectedMessage(null)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {/* Original Message */}
            <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {selectedMessage.user.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium">{selectedMessage.user}</span>
                  <span className="text-xs text-muted-foreground">{selectedMessage.time}</span>
                </div>
                <p className="text-sm">{selectedMessage.content}</p>
              </div>
            </div>

            {/* Reply Input */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Reply to thread..."
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
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
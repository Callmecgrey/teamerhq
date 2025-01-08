// app/(dashboard)/dashboard/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/chat/Sidebar";
import ChannelHeader from "@/components/chat/ChannelHeader";
import MessagesList from "@/components/chat/MessagesList";
import MessageInput from "@/components/chat/MessageInput";
import UserProfileSidebar from "@/components/chat/UserProfileSidebar";
import MessageThreadSidebar from "@/components/chat/MessageThreadSidebar";

export default function DashboardPage() {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState({
    name: "General",
    description: "This is the general discussion channel for all team members.",
    messages: [
      { user: "John Doe", time: "12:34 PM", content: "Hello team! How's everyone doing?" },
      { user: "Jane Smith", time: "12:36 PM", content: "Doing great, thanks for asking!" },
    ],
  });

  interface Channel {
    name: string;
    description: string;
    messages: { user: string; time: string; content: string }[];
  }

  interface User {
    name: string;
    // Add other user properties as needed
  }

  interface Message {
    user: string;
    time: string;
    content: string;
  }

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    setSelectedUser(null);
    setSelectedMessage(null);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar
        onChannelClick={handleChannelSelect}
        onUserClick={(user) => setSelectedUser(user)}
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${selectedUser || selectedMessage ? "max-w-[60%]" : ""}`}>
        <ChannelHeader
          channelName={selectedChannel.name}
          onVoiceClick={() => console.log("Voice clicked")}
          onVideoClick={() => console.log("Video clicked")}
        />
        <MessagesList
          messages={selectedChannel.messages}
          onMessageClick={(message) => setSelectedMessage(message)}
        />
        <MessageInput
          message={message}
          placeholder={`Message #${selectedChannel.name}`}
          onChange={(e) => setMessage(e.target.value)}
          onSend={() => console.log("Message sent:", message)}
        />
      </div>

      {/* Sidebars */}
      {selectedUser && <UserProfileSidebar user={selectedUser} onClose={() => setSelectedUser(null)} />}
      {selectedMessage && (
        <MessageThreadSidebar message={selectedMessage} onClose={() => setSelectedMessage(null)} />
      )}
    </div>
  );
}

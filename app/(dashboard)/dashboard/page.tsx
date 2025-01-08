// app/(dashboard)/dashboard/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/chat/Sidebar";
import ChannelHeader from "@/components/chat/ChannelHeader";
import MessagesList from "@/components/chat/MessagesList";
import MessageInput from "@/components/chat/MessageInput";
import UserProfileSidebar from "@/components/chat/UserProfileSidebar";
import MessageThreadSidebar from "@/components/chat/MessageThreadSidebar";
import ChannelInfoSidebar from "@/components/chat/ChannelInfoSidebar";
import UserChatHeader from "@/components/chat/UserChatHeader";

export default function DashboardPage() {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState({
    name: "General",
    description: "This is the general discussion channel for all team members.",
    teamMembers: [
      { name: "John Doe", role: "Team Lead" },
      { name: "Jane Smith", role: "Developer" },
    ],
    messages: [
      { user: "John Doe", time: "12:34 PM", content: "Hello team! How's everyone doing?" },
      { user: "Jane Smith", time: "12:36 PM", content: "Doing great, thanks for asking!" },
    ],
  });

  // State to track which sidebar is active
  const [activeSidebar, setActiveSidebar] = useState<"user" | "channel" | "message" | null>(null);

  interface Channel {
    name: string;
    description: string;
    teamMembers: { name: string; role: string }[];
    messages: { user: string; time: string; content: string }[];
  }

  interface User {
    name: string;
    position?: string;
    role?: string;
    status?: string;
  }

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    setSelectedUser(null);
    setSelectedMessage(null);
    // No sidebar should open automatically when selecting a channel
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setSelectedChannel(null);
    setSelectedMessage(null);
    // No sidebar should open automatically when selecting a user
  };

  const toggleMessageThreadSidebar = (message: any) => {
    setSelectedMessage(message);
    // Open MessageThreadSidebar
    setActiveSidebar("message");
  };

  const openUserProfileSidebar = () => {
    setActiveSidebar("user"); // Open UserProfileSidebar
  };

  const openChannelInfoSidebar = () => {
    setActiveSidebar("channel"); // Open ChannelInfoSidebar
  };

  const closeSidebar = () => {
    setActiveSidebar(null); // Close all sidebars
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar onChannelClick={handleChannelSelect} onUserClick={handleUserSelect} />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${activeSidebar ? "max-w-[75%]" : ""}`}>
        {selectedChannel ? (
          <>
            <ChannelHeader
              channelName={selectedChannel.name}
              onVoiceClick={() => console.log("Voice clicked")}
              onVideoClick={() => console.log("Video clicked")}
              onInfoClick={openChannelInfoSidebar} // Trigger the sidebar when info button is clicked
            />
            <MessagesList
              messages={selectedChannel.messages}
              onMessageClick={toggleMessageThreadSidebar}
            />
            <MessageInput
              message={message}
              placeholder={`Message #${selectedChannel.name}`}
              onChange={(e) => setMessage(e.target.value)}
              onSend={() => console.log("Message sent:", message)}
            />
          </>
        ) : selectedUser ? (
          <>
            <UserChatHeader
              user={selectedUser}
              onProfileClick={openUserProfileSidebar} // Trigger the sidebar when info button is clicked
            />
            <MessagesList
              messages={[
                { user: selectedUser.name, time: "12:30 PM", content: "Hi there!" },
                { user: "You", time: "12:32 PM", content: "Hello!" },
              ]}
            />
            <MessageInput
              message={message}
              placeholder={`Message ${selectedUser.name}`}
              onChange={(e) => setMessage(e.target.value)}
              onSend={() => console.log("Message sent:", message)}
            />
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            <p>Select a channel or user to start chatting.</p>
          </div>
        )}
      </div>

      {/* Sidebars */}
      {activeSidebar === "message" && selectedMessage && (
        <MessageThreadSidebar message={selectedMessage} onClose={closeSidebar} />
      )}
      {activeSidebar === "channel" && selectedChannel && (
        <ChannelInfoSidebar channel={selectedChannel} onClose={closeSidebar} />
      )}
      {activeSidebar === "user" && selectedUser && (
        <UserProfileSidebar user={selectedUser} onClose={closeSidebar} />
      )}
    </div>
  );
}

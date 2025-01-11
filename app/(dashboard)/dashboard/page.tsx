// app/(dashboard)/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Sidebar from "@/components/chat/Sidebar";
import ChannelHeader from "@/components/chat/ChannelHeader";
import MessagesList from "@/components/chat/MessagesList";
import MessageInput from "@/components/chat/MessageInput";
import UserProfileSidebar from "@/components/chat/UserProfileSidebar";
import MessageThreadSidebar from "@/components/chat/MessageThreadSidebar";
import ChannelInfoSidebar from "@/components/chat/ChannelInfoSidebar";
import UserChatHeader from "@/components/chat/UserChatHeader";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize states from query parameters
  const [message, setMessage] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(() => {
    const channelName = searchParams.get("channel");
    return channelName ? { name: channelName } : null;
  });
  const [selectedUser, setSelectedUser] = useState(() => {
    const userName = searchParams.get("user");
    const userRole = searchParams.get("role");
    return userName ? { name: userName, role: userRole } : null;
  });
  const [selectedMessage, setSelectedMessage] = useState(() => {
    const messageId = searchParams.get("message");
    return messageId ? { id: messageId } : null;
  });
  const [activeSidebar, setActiveSidebar] = useState<"user" | "channel" | "message" | null>(
    searchParams.get("sidebar") as "user" | "channel" | "message" | null
  );

  // Update URL query parameters when states change
  useEffect(() => {
    const query: Record<string, string> = {};
    if (selectedChannel) query.channel = selectedChannel.name;
    if (selectedUser) {
      query.user = selectedUser.name;
      if (selectedUser.role) query.role = selectedUser.role;
    }
    if (selectedMessage) query.message = selectedMessage.id;
    if (activeSidebar) query.sidebar = activeSidebar;

    const search = new URLSearchParams(query).toString();
    router.replace(`?${search}`);
  }, [selectedChannel, selectedUser, selectedMessage, activeSidebar]);

  const handleChannelSelect = (channel: any) => {
    setSelectedChannel(channel);
    setSelectedUser(null);
    setSelectedMessage(null);
    setActiveSidebar(null);
  };

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
    setSelectedChannel(null);
    setSelectedMessage(null);
    setActiveSidebar(null);
  };

  const toggleMessageThreadSidebar = (message: any) => {
    setSelectedMessage(message);
    setActiveSidebar("message");
  };

  const openUserProfileSidebar = () => setActiveSidebar("user");
  const openChannelInfoSidebar = () => setActiveSidebar("channel");
  const closeSidebar = () => setActiveSidebar(null);

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
              onInfoClick={openChannelInfoSidebar}
            />
            <MessagesList
              messages={selectedChannel.messages || []}
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


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
import FilesSidebar from "@/components/chat/FilesSidebar";

type Message = {
  id: number;
  user: string;
  time: string;
  content: string;
};

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State initialization
  const [message, setMessage] = useState("");
  const [selectedChannel, setSelectedChannel] = useState<{
    name: string;
    description: string;
    messages?: Message[];
    teamMembers?: { name: string; position: string }[];
  } | null>(() => {
    const channelName = searchParams.get("channel");
    const channelDescription = searchParams.get("description");
    return channelName && channelDescription
      ? { name: channelName, description: channelDescription, messages: [], teamMembers: [] }
      : null;
  });

  const [selectedUser, setSelectedUser] = useState<{
    name: string;
    position?: string;
    messages?: Message[];
  } | null>(() => {
    const userName = searchParams.get("user");
    const userDept = searchParams.get("dept");
    return userName
      ? { name: userName, dept: userDept, messages: [] }
      : null;
  });

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [activeSidebar, setActiveSidebar] = useState<"user" | "channel" | "message" | "files">(
    "files"
  );

  // Update URL query parameters when states change
  useEffect(() => {
    const query: Record<string, string> = {};
    if (selectedChannel) query.channel = selectedChannel.name;
    if (selectedUser) {
      query.user = selectedUser.name;
      if (selectedUser.position) query.dept = selectedUser.position;
    }
    if (selectedMessage) query.message = String(selectedMessage.id);
    if (activeSidebar) query.sidebar = activeSidebar;

    const search = new URLSearchParams(query).toString();
    router.replace(`?${search}`);
  }, [selectedChannel, selectedUser, selectedMessage, activeSidebar]);

  // Handlers
  const handleChannelSelect = (channel: any) => {
    const wasInMessageSidebar = activeSidebar === "message";
    setSelectedChannel(channel);
    setSelectedUser(null);
    setSelectedMessage(null);
    setActiveSidebar(wasInMessageSidebar ? "files" : "files");
  };

  const handleUserSelect = (user: any) => {
    const wasInMessageSidebar = activeSidebar === "message";
    setSelectedUser(user);
    setSelectedChannel(null);
    setSelectedMessage(null);
    setActiveSidebar(wasInMessageSidebar ? "files" : "files");
  };

  const toggleMessageThreadSidebar = (message: Message) => {
    setSelectedMessage(message);
    setActiveSidebar("message");
  };

  const openUserProfileSidebar = () => setActiveSidebar("user");
  const openChannelInfoSidebar = () => setActiveSidebar("channel");

  const closeSidebar = () => setActiveSidebar("files");

  const handleTeamMemberClick = (member: { name: string; position: string }) => {
    setSelectedUser({
      name: member.name,
      position: member.position,
      messages: [],
    });
    setActiveSidebar("user");
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar onChannelClick={handleChannelSelect} onUserClick={handleUserSelect} />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col ${activeSidebar !== "files" ? "max-w-[75%]" : ""}`}>
        {selectedChannel ? (
          <>
            <ChannelHeader
              channelName={selectedChannel.name}
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
              onSend={() => {
                if (selectedChannel.messages) {
                  setSelectedChannel({
                    ...selectedChannel,
                    messages: [
                      ...selectedChannel.messages,
                      { id: Date.now(), user: "You", time: new Date().toLocaleTimeString(), content: message },
                    ],
                  });
                }
                setMessage("");
              }}
              onVoiceRecord={() => console.log("Voice recording started")}
            />
          </>
        ) : selectedUser ? (
          <>
            <UserChatHeader
              user={selectedUser}
              onProfileClick={openUserProfileSidebar}
            />
            <MessagesList
              messages={selectedUser.messages || []}
              onMessageClick={toggleMessageThreadSidebar}
            />
            <MessageInput
              message={message}
              placeholder={`Message ${selectedUser.name}`}
              onChange={(e) => setMessage(e.target.value)}
              onSend={() => {
                if (selectedUser.messages) {
                  setSelectedUser({
                    ...selectedUser,
                    messages: [
                      ...selectedUser.messages,
                      { id: Date.now(), user: "You", time: new Date().toLocaleTimeString(), content: message },
                    ],
                  });
                }
                setMessage("");
              }}
              onVoiceRecord={() => console.log("Voice recording started")}
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
        <MessageThreadSidebar
          message={selectedMessage}
          onClose={closeSidebar}
          onVoiceRecord={() => console.log("Voice recording started")}
        />
      )}
      {activeSidebar === "channel" && selectedChannel && (
        <ChannelInfoSidebar
          channel={selectedChannel}
          onClose={closeSidebar}
          onTeamMemberClick={handleTeamMemberClick}
        />
      )}
      {activeSidebar === "user" && selectedUser && (
        <UserProfileSidebar user={selectedUser} onClose={closeSidebar} />
      )}
      {activeSidebar === "files" && (
        <FilesSidebar onClose={() => {}} />
      )}
    </div>
  );
}
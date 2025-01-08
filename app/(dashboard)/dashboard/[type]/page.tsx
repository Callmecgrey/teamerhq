// app/(dashboard)/dashboard/[type]/page.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
  Users,
  ScreenShare,
  Layout,
  X,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function CallPage() {
  const params = useParams();
  const router = useRouter();
  const isVideo = params.type === "video";

  const [participants, setParticipants] = useState([
    { name: "You", isVideoEnabled: true, isMicEnabled: true, isActive: true, isSharingScreen: false },
    { name: "John Doe", isVideoEnabled: true, isMicEnabled: false, isActive: false, isSharingScreen: true },
    { name: "Jane Smith", isVideoEnabled: false, isMicEnabled: true, isActive: false, isSharingScreen: false },
    { name: "Mike Johnson", isVideoEnabled: true, isMicEnabled: true, isActive: true, isSharingScreen: false },
  ]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [layout, setLayout] = useState("grid"); // "grid" or "speaker"
  const [messages, setMessages] = useState([
    { user: "John Doe", time: "2:45 PM", content: "Hey, can you all hear me?" },
    { user: "Jane Smith", time: "2:47 PM", content: "Yes, we can hear you!" },
    { user: "Mike Johnson", time: "2:48 PM", content: "Loud and clear." },
  ]);

  const toggleVideo = (index: number) => {
    setParticipants((prev) =>
      prev.map((participant, i) =>
        i === index ? { ...participant, isVideoEnabled: !participant.isVideoEnabled } : participant
      )
    );
  };

  const toggleMic = (index: number) => {
    setParticipants((prev) =>
      prev.map((participant, i) =>
        i === index ? { ...participant, isMicEnabled: !participant.isMicEnabled } : participant
      )
    );
  };

  const sendMessage = (message: string) => {
    setMessages([...messages, { user: "You", time: new Date().toLocaleTimeString(), content: message }]);
  };

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-card/10 backdrop-blur-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-white">
            <h2 className="font-semibold">{isVideo ? "Video Call" : "Voice Call"}</h2>
            <p className="text-sm text-white/60">#general</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-white bg-white/10 border-white/20 hover:bg-white/20"
          >
            <Users className="h-4 w-4 mr-2" />
            {participants.length} participants
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-white bg-white/10 border-white/20 hover:bg-white/20"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Participant Grid or Speaker View */}
        <div className={`flex-1 p-4 ${isChatOpen ? "w-2/3" : "w-full"}`}>
          {layout === "grid" ? (
            <div className={`grid ${isVideo ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"} gap-4 h-full`}>
              {participants.map((participant, index) => (
                <div
                  key={participant.name}
                  className={`relative bg-muted rounded-lg overflow-hidden ${
                    participant.isActive ? "ring-4 ring-orange-400" : ""
                  }`}
                >
                  {isVideo && participant.isVideoEnabled ? (
                    <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl text-white">{participant.name}</span>
                    </div>
                  ) : (
                    <div className="h-full w-full bg-muted flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl text-white">
                          {participant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    {participant.isSharingScreen && (
                      <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
                        Sharing Screen
                      </div>
                    )}
                    <Button
                      size="icon"
                      variant="outline"
                      className={`w-8 h-8 ${
                        participant.isMicEnabled ? "bg-white/10" : "bg-red-500"
                      } border-none`}
                      onClick={() => toggleMic(index)}
                      aria-label={`${participant.isMicEnabled ? "Mute" : "Unmute"} ${participant.name}`}
                    >
                      {participant.isMicEnabled ? (
                        <Mic className="h-4 w-4 text-white" />
                      ) : (
                        <MicOff className="h-4 w-4 text-white" />
                      )}
                    </Button>
                    {isVideo && (
                      <Button
                        size="icon"
                        variant="outline"
                        className={`w-8 h-8 ${
                          participant.isVideoEnabled ? "bg-white/10" : "bg-gray-600"
                        } border-none`}
                        onClick={() => toggleVideo(index)}
                        aria-label={`${participant.isVideoEnabled ? "Disable" : "Enable"} video for ${
                          participant.name
                        }`}
                      >
                        {participant.isVideoEnabled ? (
                          <VideoIcon className="h-4 w-4 text-white" />
                        ) : (
                          <VideoOff className="h-4 w-4 text-white" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-white">
              <div className="relative w-full h-full bg-primary/10 rounded-lg">
                {participants.filter((p) => p.isActive).map((activeParticipant) => (
                  <div
                    key={activeParticipant.name}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="text-3xl text-white">{activeParticipant.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chat Panel */}
        {isChatOpen && (
          <div className="w-1/3 bg-card/20 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Chat</h3>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-white/10 border-none hover:bg-white/20"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="h-5 w-5 text-white" />
              </Button>
            </div>
            <div className="mt-4 h-[calc(84vh-12rem)] overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className="text-white">
                    <p className="font-semibold">{msg.user} <span className="text-sm text-white/60">{msg.time}</span></p>
                    <p>{msg.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <textarea
                className="w-full bg-white/10 text-white rounded-md p-2"
                placeholder="Type a message..."
                rows={2}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-card/10 backdrop-blur-lg p-4">
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20"
          >
            <Mic className="h-5 w-5 text-white" />
          </Button>
          {isVideo && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20"
            >
              <VideoIcon className="h-5 w-5 text-white" />
            </Button>
          )}
          <Button
            variant="destructive"
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => router.push("/dashboard")}
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ScreenShare className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20"
            onClick={() => setLayout(layout === "grid" ? "speaker" : "grid")}
          >
            <Layout className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

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
  Crown,
  Disc2,
  StopCircle,
  Settings,
  UserPlus,
  UserMinus,
  HandMetal,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CallPage() {
  const params = useParams();
  const router = useRouter();
  const isVideo = params.type === "video";

  const [participants, setParticipants] = useState([
    { id: 1, name: "You", isVideoEnabled: true, isMicEnabled: true, isActive: true, isSharingScreen: false, isAdmin: true },
    { id: 2, name: "John Doe", isVideoEnabled: true, isMicEnabled: false, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 3, name: "Jane Smith", isVideoEnabled: false, isMicEnabled: true, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 4, name: "Joe Doe", isVideoEnabled: true, isMicEnabled: false, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 5, name: "Jamd Smith", isVideoEnabled: false, isMicEnabled: true, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 6, name: "Jpert Smith", isVideoEnabled: false, isMicEnabled: true, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 7, name: "Pet Doe", isVideoEnabled: true, isMicEnabled: false, isActive: false, isSharingScreen: false, isAdmin: false },
    { id: 8, name: "Jane Aron", isVideoEnabled: false, isMicEnabled: true, isActive: false, isSharingScreen: false, isAdmin: false },
  ]);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [layout, setLayout] = useState<"grid" | "focus" | "speaker">("grid");
  const [isRecording, setIsRecording] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "John Doe", time: "2:45 PM", content: "Hey everyone!" },
    { id: 2, user: "Jane Smith", time: "2:47 PM", content: "Hi there!" },
  ]);

  const getGridColumns = () => {
    const count = participants.length;
    if (count <= 2) return "grid-cols-2";
    if (count <= 4) return "grid-cols-2";
    if (count <= 6) return "grid-cols-3";
    if (count <= 8) return "grid-cols-4";
    if (count <= 12) return "grid-cols-4";
    return "grid-cols-4";
  };
  
  const getGridRows = () => {
    const count = participants.length;
    if (count <= 2) return "grid-rows-1";
    if (count <= 4) return "grid-rows-2";
    if (count <= 6) return "grid-rows-2";
    if (count <= 8) return "grid-rows-2";
    if (count <= 12) return "grid-rows-3";
    return "grid-rows-3";
  };
  
  const getParticipantSize = () => {
    const count = participants.length;
    if (count === 1) return "h-full w-full";
    if (count === 2) return "h-full";
    return "w-full h-full"; // Let the grid control the size
  };

  const toggleParticipantControl = (id: number, control: "video" | "mic") => {
    setParticipants(prev =>
      prev.map(p =>
        p.id === id
          ? {
              ...p,
              [control === "video" ? "isVideoEnabled" : "isMicEnabled"]: 
              !p[control === "video" ? "isVideoEnabled" : "isMicEnabled"]
            }
          : p
      )
    );
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const removeParticipant = (id: number) => {
    setParticipants(prev => prev.filter(p => p.id !== id));
  };

  const toggleAdminStatus = (id: number) => {
    setParticipants(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, isAdmin: !p.isAdmin }
          : p
      )
    );
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        user: "You",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        content: newMessage.trim()
      }
    ]);
    setNewMessage("");
  };

  return (
    <div className="h-screen max-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="h-16 flex-none border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="font-semibold">{isVideo ? "Video Call" : "Voice Call"}</h2>
              <p className="text-sm text-muted-foreground">Meeting Room #1</p>
            </div>
            {isRecording && (
              <div className="flex items-center space-x-2 bg-destructive/10 text-destructive px-3 py-1 rounded-full animate-pulse">
                <Disc2 className="h-4 w-4" />
                <span className="text-sm font-medium">Recording</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  {participants.length}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Participants</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {participants.map((p) => (
                  <DropdownMenuItem key={p.id} className="flex items-center justify-between">
                    <span className="flex items-center">
                      {p.isAdmin && <Crown className="h-4 w-4 mr-2 text-yellow-500" />}
                      {p.name}
                    </span>
                    {participants[0].isAdmin && p.id !== 1 && (
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => toggleParticipantControl(p.id, "mic")}
                        >
                          {p.isMicEnabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
                        </Button>
                        {isVideo && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => toggleParticipantControl(p.id, "video")}
                          >
                            {p.isVideoEnabled ? <VideoIcon className="h-3 w-3" /> : <VideoOff className="h-3 w-3" />}
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-destructive"
                          onClick={() => removeParticipant(p.id)}
                        >
                          <UserMinus className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

    {/* Main Content */}
    <div className="flex-1 min-h-0 flex overflow-hidden">
      <div className={`flex-1 p-4 ${isChatOpen ? "w-2/3" : "w-full"} overflow-hidden`}>
        <div className={`grid ${getGridColumns()} ${getGridRows()} gap-4 h-[calc(100vh-144px)] auto-rows-fr`}>
          {participants.map((participant) => (
            <div
              key={participant.id}
              className={`relative ${getParticipantSize()} bg-muted rounded-lg overflow-hidden ${
                participant.isActive ? "ring-2 ring-primary" : ""
              }`}
            >
              {isVideo && participant.isVideoEnabled ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-xl font-medium">{participant.name}</span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-medium">
                      {participant.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                {participant.isAdmin && (
                  <div className="bg-yellow-500/90 text-white px-2 py-1 rounded text-xs font-medium">
                    Admin
                  </div>
                )}
                <div className={`p-2 rounded-full ${participant.isMicEnabled ? "bg-background/50" : "bg-destructive"}`}>
                  {participant.isMicEnabled ? (
                    <Mic className="h-4 w-4" />
                  ) : (
                    <MicOff className="h-4 w-4" />
                  )}
                </div>
                {isVideo && (
                  <div className={`p-2 rounded-full ${participant.isVideoEnabled ? "bg-background/50" : "bg-destructive"}`}>
                    {participant.isVideoEnabled ? (
                      <VideoIcon className="h-4 w-4" />
                    ) : (
                      <VideoOff className="h-4 w-4" />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

        {isChatOpen && (
          <div className="w-1/3 border-l border-border bg-card/80 backdrop-blur-lg flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold">Chat</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-background/50 border-input rounded-md px-3 py-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                <Button onClick={sendMessage}>Send</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-20 flex-none border-t border-border bg-card/80 backdrop-blur-lg">
        <div className="h-full flex items-center justify-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => toggleParticipantControl(1, "mic")}
          >
            {participants[0].isMicEnabled ? (
              <Mic className="h-5 w-5" />
            ) : (
              <MicOff className="h-5 w-5" />
            )}
          </Button>
          {isVideo && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={() => toggleParticipantControl(1, "video")}
            >
              {participants[0].isVideoEnabled ? (
                <VideoIcon className="h-5 w-5" />
              ) : (
                <VideoOff className="h-5 w-5" />
              )}
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
            className="rounded-full w-12 h-12"
          >
            <ScreenShare className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12"
            onClick={() => setLayout(layout === "grid" ? "focus" : "grid")}
          >
            <Layout className="h-5 w-5" />
          </Button>
          {participants[0].isAdmin && (
            <Button
              variant={isRecording ? "destructive" : "outline"}
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={toggleRecording}
            >
              {isRecording ? (
                <StopCircle className="h-5 w-5" />
              ) : (
                <Disc2 className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, MicOff, Video as VideoIcon, VideoOff, Phone, PhoneOff, Users, MessageCircle, ScreenShare, Layout } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function CallPage() {
  const params = useParams();
  const router = useRouter();
  const isVideo = params.type === "video";

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="bg-card/10 backdrop-blur-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MessageSquare className="h-6 w-6 text-white" />
          <div className="text-white">
            <h2 className="font-semibold">{isVideo ? "Video Call" : "Voice Call"}</h2>
            <p className="text-sm text-white/60">#general</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-white bg-white/10 border-white/20 hover:bg-white/20">
            <Users className="h-4 w-4 mr-2" />
            4 participants
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4">
        {isVideo ? (
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute bottom-4 left-4 text-white font-medium">You</div>
            </div>
            <div className="bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute bottom-4 left-4 text-white font-medium">John Doe</div>
            </div>
            <div className="bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute bottom-4 left-4 text-white font-medium">Jane Smith</div>
            </div>
            <div className="bg-muted rounded-lg relative overflow-hidden">
              <div className="absolute bottom-4 left-4 text-white font-medium">Mike Johnson</div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
            {["You", "John Doe", "Jane Smith", "Mike Johnson"].map((name) => (
              <div key={name} className="bg-muted rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-white">{name.split(" ").map(n => n[0]).join("")}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-card/10 backdrop-blur-lg p-4">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20">
            <Mic className="h-5 w-5 text-white" />
          </Button>
          {isVideo && (
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20">
              <VideoIcon className="h-5 w-5 text-white" />
            </Button>
          )}
          <Button variant="destructive" size="icon" className="rounded-full w-12 h-12" onClick={() => router.push("/dashboard")}>
            <PhoneOff className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20">
            <ScreenShare className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20">
            <MessageCircle className="h-5 w-5 text-white" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white/10 border-white/20 hover:bg-white/20">
            <Layout className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
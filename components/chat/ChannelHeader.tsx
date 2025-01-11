// components/chat/ChannelHeader.tsx
// components/chat/ChannelHeader.tsx
import { Button } from "@/components/ui/button";
import { Phone, Video, Search, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function ChannelHeader({ channelName, onInfoClick }: { channelName: string; onInfoClick: () => void }) {
  const router = useRouter();

  const handleVoiceClick = () => router.push("/dashboard/voice");
  const handleVideoClick = () => router.push("/dashboard/video");

  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      {/* Channel Name */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={onInfoClick}>
        <span className="font-medium text-lg">#{channelName}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Search Bar */}
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-64" placeholder={`Search #${channelName}`} type="search" />
        </div>

        {/* Call Icons */}
        <Button variant="ghost" size="icon" onClick={handleVoiceClick}>
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleVideoClick}>
          <Video className="h-4 w-4" />
        </Button>

        {/* More Options */}
        <Button variant="ghost" size="icon" onClick={onInfoClick}>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
// components/chat/ChannelHeader.tsx
import { Button } from "@/components/ui/button";
import { Phone, Video, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ChannelHeader({
  channelName,
  onVoiceClick,
  onVideoClick,
}: {
  channelName: string;
  onVoiceClick: () => void;
  onVideoClick: () => void;
}) {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <span className="font-medium text-lg">#{channelName}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={onVoiceClick}>
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onVideoClick}>
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Users className="h-4 w-4" />
        </Button>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-64" placeholder={`Search #${channelName}`} type="search" />
        </div>
      </div>
    </div>
  );
}

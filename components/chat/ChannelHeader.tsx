// components/chat/ChannelHeader.tsx
import { Button } from "@/components/ui/button";
import { Phone, Video, Info, Search, MoreVertical } from "lucide-react"; // Import MoreHorizontal
import { Input } from "@/components/ui/input";

export default function ChannelHeader({
  channelName,
  onVoiceClick,
  onVideoClick,
  onInfoClick, // This will now be triggered directly by clicking the MoreVertical icon
}: {
  channelName: string;
  onVoiceClick: () => void;
  onVideoClick: () => void;
  onInfoClick: () => void;
}) {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div 
        className="flex items-center space-x-2 cursor-pointer" 
        onClick={onInfoClick} // Trigger sidebar when the channel name is clicked
      >
        <span className="font-medium text-lg">#{channelName}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={onVoiceClick}>
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onVideoClick}>
          <Video className="h-4 w-4" />
        </Button>
        
        {/* MoreVertical icon with onClick */}
        <Button variant="ghost" size="icon" onClick={onInfoClick}> {/* onInfoClick triggered directly */}
          <MoreVertical className="h-4 w-4" />
        </Button>

        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-64" placeholder={`Search #${channelName}`} type="search" />
        </div>
      </div>
    </div>
  );
}

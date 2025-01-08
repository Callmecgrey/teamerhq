// components/chat/UserChatHeader.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Video, Search, MoreVertical } from "lucide-react";

export default function UserChatHeader({
  user,
  onProfileClick, // Trigger sidebar on user name or MoreVertical icon click
  onVoiceClick,
  onVideoClick,
}: {
  user: any;
  onProfileClick: () => void;
  onVoiceClick: () => void;
  onVideoClick: () => void;
}) {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={onProfileClick} // Trigger sidebar when the user name is clicked
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
          {user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.position}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={onVoiceClick}>
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onVideoClick}>
          <Video className="h-4 w-4" />
        </Button>

        {/* MoreVertical icon with onClick */}
        <Button variant="ghost" size="icon" onClick={onProfileClick}> {/* onProfileClick triggered directly */}
          <MoreVertical className="h-4 w-4" />
        </Button>

        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-64" placeholder={`Search ${user.name}`} type="search" />
        </div>
      </div>
    </div>
  );
}

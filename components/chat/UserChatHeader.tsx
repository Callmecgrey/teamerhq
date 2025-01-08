// components/chat/UserChatHeader.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Video, Search, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserChatHeader({ user, onProfileClick }: { user: any; onProfileClick: () => void }) {
  const router = useRouter();

  const handleVoiceClick = () => router.push("/dashboard/voice");
  const handleVideoClick = () => router.push("/dashboard/video");

  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={onProfileClick}
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
        <Button variant="ghost" size="icon" onClick={handleVoiceClick}>
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleVideoClick}>
          <Video className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onProfileClick}>
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

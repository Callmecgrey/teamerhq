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
    <div className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-between px-4">
      {/* Channel Name */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={onInfoClick}>
        <span className="font-medium text-lg text-gray-900 dark:text-white">#{channelName}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Search Bar - Hide on small screens */}
        <div className="relative hidden md:block">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input 
            className="pl-10 w-64 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400" 
            placeholder={`Search #${channelName}`} 
            type="search" 
          />
        </div>

        {/* Call Icons */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleVoiceClick}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
        >
          <Phone className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleVideoClick}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
        >
          <Video className="h-4 w-4" />
        </Button>

        {/* More Options */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onInfoClick}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
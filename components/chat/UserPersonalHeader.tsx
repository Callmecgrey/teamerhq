// components/chat/UserPersonalHeader.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreVertical } from "lucide-react";

export default function UserPersonalHeader({
  user,
  onProfileClick,
}: {
  user: { name: string; position?: string };
  onProfileClick: () => void;
}) {
  return (
    <div className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-between px-4">
      {/* User Info */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={onProfileClick}
      >
        <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 font-medium">
          {user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.position || "Your Role"}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Search Bar - Hide on mobile */}
        <div className="relative hidden md:block">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input 
            className="pl-10 w-64 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400" 
            placeholder="Search your messages" 
            type="search" 
          />
        </div>

        {/* More Options */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onProfileClick}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
        >
          <MoreVertical className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        </Button>
      </div>
    </div>
  );
}
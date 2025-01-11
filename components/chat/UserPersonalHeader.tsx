// components/chat/UserPersonalHeader.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreVertical } from "lucide-react";

export default function UserPersonalHeader({
  user,
  onProfileClick,
}: {
  user: { name: string; position?: string }; // Define the expected structure for `user`
  onProfileClick: () => void;
}) {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      {/* User Info */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={onProfileClick}
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
          {user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.position || "Your Role"}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Search Bar */}
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-64" placeholder={`Search ${user.name}`} type="search" />
        </div>

        {/* More Options */}
        <Button variant="ghost" size="icon" onClick={onProfileClick}>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

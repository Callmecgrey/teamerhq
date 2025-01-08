// components/chat/UserChatHeader.tsx
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function UserChatHeader({
  user,
  onProfileClick,
}: {
  user: any;
  onProfileClick: () => void;
}) {
  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
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
      <Button variant="ghost" size="icon" onClick={onProfileClick}>
        <Info className="h-4 w-4" />
      </Button>
    </div>
  );
}

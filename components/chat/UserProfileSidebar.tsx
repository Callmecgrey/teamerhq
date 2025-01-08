// components/chat/UserProfileSidebar.tsx
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function UserProfileSidebar({ user, onClose }: { user: any; onClose: () => void }) {
  return (
    <div className="w-[30%] border-l bg-card p-6"> {/* Reduced width */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
            {user.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.position}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">About</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-muted-foreground">Role:</span> {user.role}
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Position:</span> {user.position}
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Status:</span> {user.status}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1">Direct Message</Button>
          <Button variant="outline" className="flex-1">Call</Button>
        </div>
      </div>
    </div>
  );
}

// components/chat/UserProfileSidebar.tsx
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function UserProfileSidebar({ user, onClose }: { user: any; onClose: () => void }) {
  return (
    <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-8">
        {/* User Info Header */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold">
            {user.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.position}</p>
          </div>
        </div>
        {/* Close Button */}
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* User Details Section */}
      <div className="flex-grow space-y-8 overflow-y-auto">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase">About</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">Role:</span> {user.role}
            </p>
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">Position:</span> {user.position}
            </p>
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">Status:</span> {user.status}
            </p>
          </div>
        </div>

        {/* User Actions Section */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase">Actions</h3>
          <div className="flex flex-col gap-2 mt-4">
            <Button className="w-full">Send Message</Button>
            <Button variant="outline" className="w-full">Start Call</Button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t pt-4">
        <p className="text-xs text-muted-foreground text-center">
          Last updated: {user.lastUpdated || "N/A"}
        </p>
      </div>
    </div>
  );
}

// components/chat/UserProfileSidebar.tsx
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function UserProfileSidebar({ user, onClose }: { user: any; onClose: () => void }) {
  return (
    <div className="lg:w-[25%] md:w-[35%] sm:w-[100%] border-l p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
            {user.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.status}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close user profile sidebar"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-8 overflow-y-auto">
        <div className="p-4 rounded-md border">
          <h3 className="text-sm font-medium text-muted-foreground uppercase">About</h3>
          <div className="space-y-2 mt-2">
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">Department:</span> {user.dept}
            </p>
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">Position:</span> {user.position}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-md border">
          <h3 className="text-sm font-medium text-muted-foreground uppercase">Actions</h3>
          <div className="flex gap-3 mt-4">
            <Button className="flex-1 bg-primary hover:bg-primary-dark">Send Message</Button>
            <Button variant="outline" className="flex-1 text-primary border-primary hover:bg-primary/10">
              Start Call
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4 flex justify-center items-center text-center">
        <p className="text-xs text-muted-foreground">
          Last updated: {user.lastUpdated || "N/A"}
        </p>
      </div>
    </div>
  );
}

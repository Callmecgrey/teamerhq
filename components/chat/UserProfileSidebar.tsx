// components/chat/UserProfileSidebar.tsx
import { Button } from "@/components/ui/button";
import { X, Mail, Phone, Globe, MapPin, Calendar } from "lucide-react";

export default function UserProfileSidebar({ 
  user, 
  onClose 
}: { 
  user: any; 
  onClose: () => void;
}) {
  return (
    <div className="w-[25%] border-l border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-2xl font-semibold text-violet-600 dark:text-violet-400">
            {user.name.split(" ").map((n: string) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.status}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
        >
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-8 overflow-y-auto">
        {/* About Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">About</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">{user.email || "email@example.com"}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">{user.phone || "+1 234 567 890"}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">{user.timezone || "UTC-5 (Eastern Time)"}</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">{user.location || "New York, USA"}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-violet-500 dark:text-violet-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">Joined {user.joinedDate || "January 2024"}</p>
            </div>
          </div>
        </div>

        {/* Department Info */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">Department</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">Department:</span> {user.dept}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">Position:</span> {user.position}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button 
              className="w-full bg-violet-600 hover:bg-violet-700 text-white"
              onClick={() => console.log("Send message")}
            >
              Send Message
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/20 text-violet-700 dark:text-violet-300"
              onClick={() => console.log("Schedule meeting")}
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Last active: {user.lastActive || "2 hours ago"}
        </p>
      </div>
    </div>
  );
}
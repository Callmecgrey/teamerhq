"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Settings, Users, Bell, HelpCircle } from "lucide-react";

const navigationItems = [
  { name: "Calendar", icon: Calendar },
  { name: "Settings", icon: Settings },
  { name: "Team Access", icon: Users },
  { name: "Notifications", icon: Bell },
  { name: "Help & Support", icon: HelpCircle },
];

export default function EachAppsSidebar() {
  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm">
      <div className="p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start"
              size="sm"
            >
              <item.icon className="h-4 w-4 mr-2 text-violet-500 dark:text-violet-400" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
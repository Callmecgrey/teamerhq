"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Video, FileText, Database, Globe, Box, Settings } from "lucide-react";

const categories = [
  { name: "Calendar & Scheduling", icon: Calendar },
  { name: "Communication", icon: MessageSquare },
  { name: "Video Conferencing", icon: Video },
  { name: "Document Management", icon: FileText },
  { name: "Database", icon: Database },
  { name: "Website & CMS", icon: Globe },
  { name: "Developer Tools", icon: Box },
];

export default function IntegrationSidebar() {
  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-4">Categories</h2>
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-start"
              size="sm"
            >
              <category.icon className="h-4 w-4 mr-2 text-violet-500 dark:text-violet-400" />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
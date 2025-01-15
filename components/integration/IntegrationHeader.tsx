"use client";

import { Button } from "@/components/ui/button";
import { Search, Plus, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function IntegrationHeader() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Integrations</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search integrations..."
              className="pl-9 w-[300px] bg-white/50 dark:bg-gray-800/50"
            />
          </div>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>
    </div>
  );
}
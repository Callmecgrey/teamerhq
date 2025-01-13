"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/app/documentation/docsConfigs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Toggle Button (Mobile) */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 w-72 h-screen transition-transform md:translate-x-0",
          !sidebarOpen && "-translate-x-full"
        )}
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="mb-8 px-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Documentation</h2>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400"
              />
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
            <div className="space-y-6">
              {docsConfig.sidebarNav.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-2 px-2 text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => {
                      // Safely access the hash only in the browser
                      const currentHash =
                        typeof window !== "undefined" ? window.location.hash : "";

                      return (
                        <Button
                          key={itemIndex}
                          variant="ghost"
                          asChild
                          className={cn(
                            "w-full justify-start px-2 py-1.5 text-sm font-medium",
                            pathname + currentHash === item.href
                              ? "bg-violet-50 text-violet-900 dark:bg-violet-900/50 dark:text-violet-100"
                              : "text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/50"
                          )}
                        >
                          <Link href={item.href}>
                            {item.title}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "flex-1 transition-all duration-200",
          sidebarOpen ? "md:ml-72" : ""
        )}
      >
        <main className="container max-w-7xl mx-auto px-6 py-12">{children}</main>
      </div>
    </div>
  );
}

"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { HelpSearch } from "@/components/help/help-search";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction to TeamerHQ", href: "/help" },
      { title: "Quick Start Guide", href: "/help/quick-start" },
      { title: "Setting up your Workspace", href: "/help/workspace-setup" },
    ],
  },
  {
    title: "Using TeamerHQ",
    items: [
      { title: "Messaging", href: "/help/messaging" },
      { title: "Channels", href: "/help/channels" },
      { title: "Direct Messages", href: "/help/direct-messages" },
      { title: "File Sharing", href: "/help/file-sharing" },
    ],
  },
  {
    title: "Account & Settings",
    items: [
      { title: "Profile Settings", href: "/help/profile" },
      { title: "Notifications", href: "/help/notifications" },
      { title: "Privacy & Security", href: "/help/privacy" },
    ],
  },
];

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 px-4 py-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <HelpSearch />
          </div>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        
        <nav>
          {sidebarItems.map((section, i) => (
            <div key={i} className="mb-6">
              <h5 className="mb-2 px-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h5>
              <ul className="space-y-1">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-2 py-1.5 text-sm rounded-md",
                        pathname === item.href
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 px-8 py-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
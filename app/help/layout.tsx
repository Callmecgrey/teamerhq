"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { HelpSearch } from "@/components/help/help-search";
import { Menu } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction to TeamerHQ", href: "/help" },
      { title: "Quick Start Guide", href: "/help/quick-start" },
      { title: "Setting up your Workspace", href: "/help/workspace" },
    ],
  },
  {
    title: "Using TeamerHQ",
    items: [
      { title: "Messaging", href: "/help/messaging" },
      { title: "Channels", href: "/help/channels" },
      { title: "Direct Messages", href: "/help/direct-messages" },
      { title: "Managing Files", href: "/help/files" },
      { title: "Shortcut & Commands", href: "/help/shortcuts" },
    ],
  },
  {
    title: "User Account",
    items: [
      { title: "Profile Settings", href: "/help/user/profile" },
      { title: "Notifications", href: "/help/user/notifications" },
      { title: "Privacy & Security", href: "/help/user/privacy" },
    ],
  },
  {
    title: "Workspace Settings",
    items: [
      { title: "Workspace Customization", href: "/help/owner/profile" },
      { title: "User Management", href: "/help/owner/user-management" },
      { title: "Integration & APIs", href: "/help/owner/integrations" },
      { title: "Billing & Subscription", href: "/help/owner/billing" },
    ],
  },
  {
    title: "Utilities",
    items: [
      { title: "Common Issues", href: "/help/utilities/common-issues" },
    ],
  },
  {
    title: "Contact Support",
    items: [
      { title: "Support", href: "/help/contact" },
    ],
  },
];

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSection = (index: number) => {
    setOpenSection((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Help Center
        </h1>
        <ThemeToggle />
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700",
          "fixed md:sticky md:top-0 top-[60px] h-[calc(100vh-60px)] md:h-screen z-40 transition-transform duration-200 ease-in-out",
          "transform md:transform-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Help Center
          </h1>
          <ThemeToggle />
        </div>

        {/* Search */}
        <div className="px-4 py-2">
          <HelpSearch />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {sidebarItems.map((section, i) => (
            <div key={i} className="mb-6">
              <button
                onClick={() => toggleSection(i)}
                className="w-full text-left px-2 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 flex justify-between items-center"
              >
                {section.title}
                <span className="text-gray-500 dark:text-gray-400">
                  {openSection === i ? "-" : "+"}
                </span>
              </button>
              {openSection === i && (
                <ul className="space-y-1 mt-2">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <Link
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
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
              )}
            </div>
          ))}
        </nav>

        {/* Footer - Always visible */}
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="block text-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 md:py-6 overflow-y-auto mt-[60px] md:mt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
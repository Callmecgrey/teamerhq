"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Command, Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Dynamically build the searchable items based on sidebar items
const generateSearchableItems = (sidebarItems: any[]) => {
  interface SidebarItem {
    title: string;
    href: string;
  }

  interface SidebarSection {
    title: string;
    items: SidebarItem[];
  }

  interface SearchableItem {
    title: string;
    href: string;
    category: string;
    keywords: string;
  }

  const items: SearchableItem[] = [];
  
  sidebarItems.forEach((section) => {
    section.items.forEach((item: SidebarItem) => {
      items.push({
      title: item.title,
      href: item.href,
      category: section.title,
      keywords: item.title.toLowerCase(), // Add more keywords as necessary
      });
    });
  });

  return items;
};

// Sidebar items (from your layout)
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
      { title: "User Management", href: "/help/owner/notifications" },
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

export function HelpSearch({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // Generate searchable items based on the sidebarItems
  const searchableItems = generateSearchableItems(sidebarItems);

  // Filter items based on the search query
  const filteredItems = searchableItems.filter((item) => {
    const lowerCaseQuery = value.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.keywords.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center w-full gap-2 px-3 py-2 text-sm text-gray-500 transition-colors duration-200 border rounded-lg dark:text-gray-400 border-gray-200/70 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search docs</span>
        <kbd className="hidden px-2 py-1 text-xs font-mono text-gray-500 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400 sm:inline-block">
          ⌘K
        </kbd>
      </button>
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        <DialogContent className="gap-0 p-0 overflow-hidden">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-3">
              <Search className="w-4 h-4 mr-2 shrink-0 opacity-50" />
              <CommandPrimitive.Input
                value={value}
                onValueChange={setValue}
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type to search..."
              />
            </div>
            <CommandPrimitive.List className="max-h-[500px] overflow-y-auto overflow-x-hidden">
              <CommandPrimitive.Empty className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                No results found.
              </CommandPrimitive.Empty>
              {filteredItems.map((group) => (
                <CommandPrimitive.Group key={group.category} heading={group.category}>
                  <CommandPrimitive.Item
                    value={group.title}
                    onSelect={() => {
                      runCommand(() => router.push(group.href));
                    }}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-gray-900 dark:aria-selected:text-gray-100"
                  >
                    <div className="flex flex-col">
                      <span>
                        {group.title.split(new RegExp(`(${value})`, "gi")).map((part, index) => {
                          return part.toLowerCase() === value.toLowerCase() ? (
                            <span key={index} className="font-semibold text-blue-500 dark:text-blue-400">
                              {part}
                            </span>
                          ) : (
                            part
                          );
                        })}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {group.category}
                      </span>
                    </div>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
              ))}
            </CommandPrimitive.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}

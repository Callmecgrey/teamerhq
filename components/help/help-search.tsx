"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search, ArrowRight } from "lucide-react";
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

  const searchableItems = generateSearchableItems(sidebarItems);

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
        className="relative flex items-center w-full gap-3 px-4 py-2.5 text-left text-sm text-gray-500 transition-colors duration-200 border rounded-xl dark:text-gray-400 border-gray-200/70 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 group"
      >
        <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" />
        <span className="flex-1 text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
          Search ...
        </span>
        <div className="hidden sm:flex items-center gap-1">
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-1.5 font-mono text-[10px] font-medium text-gray-500 dark:text-gray-400">
            ⌘
          </kbd>
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-1.5 font-mono text-[10px] font-medium text-gray-500 dark:text-gray-400">
            K
          </kbd>
        </div>
      </button>
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        <DialogContent className="gap-0 p-0 overflow-hidden shadow-2xl dark:shadow-2xl-dark sm:rounded-xl">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-3">
              <Search className="w-4 h-4 mr-2 shrink-0 text-gray-500 dark:text-gray-400" />
              <CommandPrimitive.Input
                value={value}
                onValueChange={setValue}
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search documentation..."
              />
            </div>
            <CommandPrimitive.List className="max-h-[min(70vh,400px)] overflow-y-auto overflow-x-hidden">
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
                    className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2.5 text-sm outline-none aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-gray-900 dark:aria-selected:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 group"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {group.title.split(new RegExp(`(${value})`, "gi")).map((part, index) => {
                            return part.toLowerCase() === value.toLowerCase() ? (
                              <span key={index} className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-200">
                                {part}
                              </span>
                            ) : (
                              part
                            );
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                        {group.category}
                      </p>
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 text-gray-400 dark:text-gray-600 group-aria-selected:text-gray-800 dark:group-aria-selected:text-gray-200" />
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
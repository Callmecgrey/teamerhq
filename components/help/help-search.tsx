"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Command, Command as CommandPrimitive } from "cmdk";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// This would come from your documentation data
const searchableItems = [
  {
    title: "Introduction to TeamerHQ",
    href: "/help",
    category: "Getting Started",
    keywords: "introduction, overview, basics, start",
  },
  {
    title: "Quick Start Guide",
    href: "/help/quick-start",
    category: "Getting Started",
    keywords: "setup, begin, tutorial, guide",
  },
  {
    title: "Setting up your Workspace",
    href: "/help/workspace-setup",
    category: "Getting Started",
    keywords: "workspace, setup, configure, organization",
  },
  {
    title: "Messaging",
    href: "/help/messaging",
    category: "Using TeamerHQ",
    keywords: "messages, chat, communication, send",
  },
  // Add more items based on your documentation
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
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type to search..."
              />
            </div>
            <CommandPrimitive.List className="max-h-[500px] overflow-y-auto overflow-x-hidden">
              <CommandPrimitive.Empty className="py-6 text-center text-sm">
                No results found.
              </CommandPrimitive.Empty>
              {searchableItems.map((group) => (
                <CommandPrimitive.Group key={group.category} heading={group.category}>
                  <CommandPrimitive.Item
                    value={group.title}
                    onSelect={() => {
                      runCommand(() => router.push(group.href));
                    }}
                    className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  >
                    <div className="flex flex-col">
                      <span>{group.title}</span>
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
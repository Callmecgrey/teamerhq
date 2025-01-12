"use client";

import {
  Keyboard,
  MessageSquare,
  Search,
  Star,
  Users,
  Bell,
  Hash,
  AtSign,
  Smile,
  PlusCircle,
  FileText,
  Slash,
} from "lucide-react";
import { motion } from "framer-motion";

const shortcutCategories = [
  {
    title: "Navigation",
    icon: Keyboard,
    shortcuts: [
      { keys: ["⌘", "K"], description: "Quick switcher - Jump to a conversation" },
      { keys: ["⌘", "⇧", "K"], description: "Browse all direct messages" },
      { keys: ["⌘", "⇧", "L"], description: "Browse all channels" },
      { keys: ["Alt", "↑/↓"], description: "Navigate between channels" },
      { keys: ["Alt", "←/→"], description: "Navigate message history" },
    ],
  },
  {
    title: "Messaging",
    icon: MessageSquare,
    shortcuts: [
      { keys: ["⌘", "B"], description: "Bold text" },
      { keys: ["⌘", "I"], description: "Italic text" },
      { keys: ["⌘", "⇧", "X"], description: "Strikethrough text" },
      { keys: ["⇧", "Enter"], description: "Create new line in message" },
      { keys: ["↑"], description: "Edit your last message" },
    ],
  },
  {
    title: "Search & Filters",
    icon: Search,
    shortcuts: [
      { keys: ["⌘", "F"], description: "Search current channel" },
      { keys: ["⌘", "G"], description: "Search all messages" },
      { keys: ["⌘", "⇧", "F"], description: "Toggle search filters" },
      { keys: ["from:", "me"], description: "Search your messages" },
      { keys: ["has:", "link"], description: "Search messages with links" },
    ],
  },
  {
    title: "Reactions & Actions",
    icon: Star,
    shortcuts: [
      { keys: ["⌘", "⇧", "\\"], description: "React to last message" },
      { keys: ["⌘", "⇧", "S"], description: "Star item" },
      { keys: ["⌘", "⇧", "A"], description: "Open actions menu" },
      { keys: ["+", ":emoji:"], description: "Quick emoji reaction" },
      { keys: ["⌘", "⇧", "M"], description: "Mark channel as read" },
    ],
  },
];

const quickCommands = [
  {
    command: "/status",
    icon: Bell,
    description: "Set your status and availability",
    example: "/status :coffee: On a break",
  },
  {
    command: "/invite",
    icon: Users,
    description: "Invite users to a channel",
    example: "/invite @user #channel",
  },
  {
    command: "/channel",
    icon: Hash,
    description: "Create a new channel",
    example: "/channel create project-team",
  },
  {
    command: "/dm",
    icon: AtSign,
    description: "Start a direct message",
    example: "/dm @user Hello!",
  },
  {
    command: "/emoji",
    icon: Smile,
    description: "Browse available emojis",
    example: "/emoji :smile:",
  },
  {
    command: "/remind",
    icon: PlusCircle,
    description: "Set a reminder",
    example: "/remind me in 30m to check emails",
  },
  {
    command: "/poll",
    icon: FileText,
    description: "Create a quick poll",
    example: "/poll 'Lunch spot?' 'Pizza' 'Sushi'",
  },
  {
    command: "/help",
    icon: Slash,
    description: "View all available commands",
    example: "/help shortcuts",
  },
];

export default function ShortcutsGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Keyboard Shortcuts & Commands
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Master TeamerHQ with these powerful shortcuts and slash commands.
        </p>
      </div>

      {/* Keyboard Shortcuts Section */}
      <div className="space-y-8 mb-16">
        {shortcutCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h2>
              </div>
              <div className="space-y-4">
                {category.shortcuts.map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
                  >
                    <span className="text-gray-600 dark:text-gray-400">
                      {shortcut.description}
                    </span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key, keyIdx) => (
                        <kbd
                          key={keyIdx}
                          className="px-2 py-1 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md border border-gray-200 dark:border-gray-600"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slash Commands Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Slash Commands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickCommands.map((command, index) => {
            const Icon = command.icon;
            return (
              <motion.div
                key={command.command}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {command.command}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {command.description}
                    </p>
                    <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {command.example}
                    </code>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-12 text-center bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Pro Tip
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Press <kbd className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded">⌘</kbd>{" "}
          <kbd className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded">/</kbd> anywhere
          to see this shortcuts guide.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          On Windows, use <kbd className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded">Ctrl</kbd> instead of{" "}
          <kbd className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded">⌘</kbd>
        </p>
      </div>
    </div>
  );
}
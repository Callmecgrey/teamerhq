"use client";

import {
  MessageSquare,
  AtSign,
  Hash,
  Smile,
  FileText,
  Forward,
  Reply,
  Star,
  Pin,
  Search,
  Edit3,
  Type,
  Keyboard,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const messagingFeatures = [
  {
    title: "Message Composition",
    icon: Type,
    features: [
      {
        name: "Rich Text Formatting",
        description: "Use markdown to format your messages with bold, italic, lists, and code blocks.",
        example: "**Bold**, *italic*, `code`, and > quotes",
      },
      {
        name: "Message Preview",
        description: "Preview your formatted message before sending to ensure it looks perfect.",
      },
      {
        name: "Draft Saving",
        description: "Automatically saves drafts as you type, so you never lose your work.",
      },
    ],
  },
  {
    title: "Message Organization",
    icon: FileText,
    features: [
      {
        name: "Threading",
        description: "Keep conversations organized with threaded replies.",
      },
      {
        name: "Pinning",
        description: "Pin important messages to the top of channels for easy reference.",
      },
      {
        name: "Bookmarks",
        description: "Save messages to your bookmarks for quick access later.",
      },
    ],
  },
  {
    title: "Mentions & Notifications",
    icon: AtSign,
    features: [
      {
        name: "@mentions",
        description: "Get someone's attention by mentioning them with @username.",
      },
      {
        name: "Channel Mentions",
        description: "Notify everyone in a channel with @channel or @here.",
      },
      {
        name: "Custom Keywords",
        description: "Set up custom keywords to get notified about specific topics.",
      },
    ],
  },
];

const keyboardShortcuts = [
  { keys: ["⌘/Ctrl", "K"], action: "Quick search" },
  { keys: ["⌘/Ctrl", "B"], action: "Bold text" },
  { keys: ["⌘/Ctrl", "I"], action: "Italic text" },
  { keys: ["↑"], action: "Edit last message" },
  { keys: ["Shift", "Enter"], action: "New line" },
];

export default function MessagingGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Messaging in TeamerHQ
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Master TeamerHQ's powerful messaging features to communicate effectively with your team.
        </p>
      </div>

      {/* Main Features */}
      <div className="space-y-12 mb-16">
        {messagingFeatures.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                    {feature.example && (
                      <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <code className="text-sm text-gray-700 dark:text-gray-300">
                          {feature.example}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Keyboard Shortcuts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Keyboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Keyboard Shortcuts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyboardShortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex gap-2">
                {shortcut.keys.map((key, keyIndex) => (
                  <kbd
                    key={keyIndex}
                    className="px-2 py-1 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {shortcut.action}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tips & Best Practices */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Want to learn more?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Check out our guides on channels and file sharing to make the most of TeamerHQ.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/channels"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Channel Guide
          </Link>
          <Link
            href="/help/file-sharing"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            File Sharing Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
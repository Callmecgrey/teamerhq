"use client";

import {
  MessageSquare,
  AtSign,
  Hash,
  Smile,
  FileText,
  Reply,
  Forward,
  Star,
  Search,
  BookMarked,
  Edit3,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const messagingFeatures = [
  {
    title: "Message Composition",
    description: "Create clear and effective messages for your team.",
    icon: MessageSquare,
    tasks: [
      {
        title: "Text Formatting",
        description: "Style your messages for better readability",
        steps: [
          "Use **bold** for emphasis",
          "Create _italic_ text for subtle emphasis",
          "Add `code blocks` for technical content",
          "Create bulleted and numbered lists"
        ]
      },
      {
        title: "Rich Content",
        description: "Enhance your messages with media",
        steps: [
          "Drag and drop files directly into messages",
          "Paste images from clipboard",
          "Add emojis using the picker or :shortcodes:",
          "Include links with preview cards"
        ]
      }
    ]
  },
  {
    title: "Message Organization",
    description: "Keep conversations structured and easy to follow.",
    icon: Hash,
    tasks: [
      {
        title: "Threading",
        description: "Organize related messages",
        steps: [
          "Start a thread from any message",
          "Follow specific conversation threads",
          "Mention people within threads",
          "Set thread notifications"
        ]
      },
      {
        title: "Bookmarks & Pins",
        description: "Save important messages",
        steps: [
          "Pin critical announcements to channels",
          "Bookmark messages for quick access",
          "Create message reminders",
          "Share bookmarks with team members"
        ]
      }
    ]
  },
  {
    title: "Collaboration Features",
    description: "Work together effectively through messages.",
    icon: AtSign,
    tasks: [
      {
        title: "Mentions & Notifications",
        description: "Get attention when needed",
        steps: [
          "Use @username to notify specific people",
          "@channel for team-wide announcements",
          "Set up custom notification keywords",
          "Configure notification preferences"
        ]
      },
      {
        title: "Reactions & Responses",
        description: "Engage with messages efficiently",
        steps: [
          "React with emojis for quick responses",
          "Use message shortcuts",
          "Create custom reaction sets",
          "View reaction summaries"
        ]
      }
    ]
  }
];

const quickTips = [
  {
    title: "Message Search",
    description: "Find any message using powerful search filters",
    icon: Search,
  },
  {
    title: "Saved Items",
    description: "Access bookmarked messages and files quickly",
    icon: BookMarked,
  },
  {
    title: "Message Editing",
    description: "Edit and manage your sent messages",
    icon: Edit3,
  },
  {
    title: "Important Messages",
    description: "Never miss critical communications",
    icon: AlertCircle,
  }
];

export default function MessagingGuide() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Mastering TeamerHQ Messaging
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to communicate effectively with your team using TeamerHQ's powerful messaging features.
          From basic formatting to advanced collaboration tools, this guide covers everything you need to know.
        </p>
      </div>

      {/* Main Features */}
      <div className="space-y-16 mb-16">
        {messagingFeatures.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      {index + 1}. {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {section.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                        >
                          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {task.description}
                          </p>
                          <ul className="space-y-2">
                            {task.steps.map((step, stepIndex) => (
                              <li
                                key={stepIndex}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="mt-1">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Pro Messaging Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Up Next
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Channels
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/workspace"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Back
          </Link>
          <Link
            href="/help/channels"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
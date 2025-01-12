"use client";

import {
  Rocket,
  Users,
  MessageSquare,
  Hash,
  Bell,
  Search,
  FileUp,
  Video,
  Keyboard,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Create Your Workspace",
    description: "Set up your team's dedicated space with a custom name and URL.",
    icon: Rocket,
    tips: [
      "Choose a memorable workspace name",
      "Upload your company logo",
      "Customize your workspace URL",
    ],
  },
  {
    title: "Invite Your Team",
    description: "Add team members and organize them into departments or groups.",
    icon: Users,
    tips: [
      "Import users via CSV",
      "Set user roles and permissions",
      "Create user groups for departments",
    ],
  },
  {
    title: "Start Conversations",
    description: "Begin communicating with your team through messages and channels.",
    icon: MessageSquare,
    tips: [
      "Send direct messages",
      "Use @mentions to notify specific people",
      "Format messages with markdown",
    ],
  },
  {
    title: "Create Channels",
    description: "Organize discussions by topic, project, or team.",
    icon: Hash,
    tips: [
      "Use prefix conventions (e.g., #team-, #proj-)",
      "Set channel topics and descriptions",
      "Add relevant members to channels",
    ],
  },
];

const quickTips = [
  {
    title: "Notifications",
    description: "Customize your notification preferences to stay focused.",
    icon: Bell,
  },
  {
    title: "Search",
    description: "Use powerful search to find messages, files, and more.",
    icon: Search,
  },
  {
    title: "File Sharing",
    description: "Share and organize files with your team.",
    icon: FileUp,
  },
  {
    title: "Video Calls",
    description: "Start HD video calls with screen sharing.",
    icon: Video,
  },
  {
    title: "Keyboard Shortcuts",
    description: "Work faster with keyboard shortcuts.",
    icon: Keyboard,
  },
];

export default function QuickStart() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Getting Started with TeamerHQ
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Welcome to TeamerHQ! Follow this guide to set up your workspace and start collaborating with your team in minutes.
        </p>
      </div>

      {/* Main Steps */}
      <div className="space-y-12 mb-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {index + 1}. {step.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Pro Tips:
                      </h3>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li
                            key={tipIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Tips Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Quick Tips for Success
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
          Setting up your Workspace
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Back
          </Link>
          <Link
            href="/help/workspace"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
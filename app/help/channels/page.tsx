"use client";

import {
  Hash,
  Users,
  Lock,
  Settings,
  Bell,
  Archive,
  MessageSquare,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Create a Channel",
    description: "Set up a new channel for your team's discussions.",
    icon: Hash,
    tips: [
      "Choose a clear, descriptive name",
      "Set a channel topic and description",
      "Decide between public or private visibility",
    ],
  },
  {
    title: "Manage Members",
    description: "Add team members and set appropriate permissions.",
    icon: Users,
    tips: [
      "Invite members individually or in bulk",
      "Assign channel roles and permissions",
      "Remove inactive members when needed",
    ],
  },
  {
    title: "Configure Privacy",
    description: "Set up privacy settings and access controls.",
    icon: Lock,
    tips: [
      "Choose between public and private channels",
      "Set up invite-only restrictions",
      "Configure external sharing settings",
    ],
  },
  {
    title: "Customize Settings",
    description: "Fine-tune your channel for optimal team collaboration.",
    icon: Settings,
    tips: [
      "Set up posting permissions",
      "Enable or disable features",
    ],
  },
];

const quickTips = [
  {
    title: "Notifications",
    description: "Set custom notification preferences for each channel.",
    icon: Bell,
  },
  {
    title: "Channel Search",
    description: "Find messages and files within specific channels.",
    icon: Search,
  },
  {
    title: "Archiving",
    description: "Archive inactive channels to reduce clutter.",
    icon: Archive,
  },
  {
    title: "Threads",
    description: "Use threads to organize conversations.",
    icon: MessageSquare,
  },
];

export default function ChannelsGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Channel Management Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to create, manage, and optimize channels for effective team communication.
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
          Quick Channel Tips
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
          Direct Messaging
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/messaging"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Back
          </Link>
          <Link
            href="/help/direct-messages"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
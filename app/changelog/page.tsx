"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Shield,
  Wrench,
  Rocket,
  Bug,
  ArrowUpRight,
  MessageSquare,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";

const releases = [
  {
    version: "2.4.0",
    date: "March 15, 2024",
    title: "Enhanced Collaboration Features",
    description:
      "Major improvements to team collaboration features and performance optimizations.",
    changes: [
      {
        type: "feature",
        icon: Sparkles,
        title: "Real-time Collaboration",
        description: "Multiple users can now edit documents simultaneously with live cursors and presence indicators.",
      },
      {
        type: "improvement",
        icon: Zap,
        title: "Performance Boost",
        description: "50% faster message loading and improved search indexing.",
      },
      {
        type: "security",
        icon: Shield,
        title: "Enhanced Security",
        description: "Added support for SAML SSO and improved 2FA options.",
      },
    ],
  },
  {
    version: "2.3.2",
    date: "March 1, 2024",
    title: "Bug Fixes and Improvements",
    description: "Various bug fixes and quality of life improvements.",
    changes: [
      {
        type: "fix",
        icon: Wrench,
        title: "Message Threading",
        description: "Fixed an issue where thread replies weren't properly nested in the mobile view.",
      },
      {
        type: "fix",
        icon: Bug,
        title: "Notification Delivery",
        description: "Resolved delayed notification delivery on iOS devices.",
      },
    ],
  },
  {
    version: "2.3.0",
    date: "February 15, 2024",
    title: "New Integration Platform",
    description: "Introducing our new integration platform and API improvements.",
    changes: [
      {
        type: "feature",
        icon: Rocket,
        title: "Integration Platform",
        description: "New integration platform with support for custom app development.",
      },
      {
        type: "feature",
        icon: MessageSquare,
        title: "Rich Text Editor",
        description: "Completely redesigned rich text editor with improved formatting options.",
      },
      {
        type: "improvement",
        icon: Users,
        title: "User Management",
        description: "Bulk user operations and improved admin controls.",
      },
      {
        type: "improvement",
        icon: FileText,
        title: "File Handling",
        description: "Increased file size limits and added support for more file types.",
      },
    ],
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "improvement":
      return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "security":
      return "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "fix":
      return "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
    default:
      return "bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
  }
};

export default function Changelog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Product Updates
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Stay up to date with all the latest changes and improvements to TeamerHQ.
        </p>
      </div>

      {/* Releases */}
      <div className="space-y-16">
        {releases.map((release, releaseIndex) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: releaseIndex * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Version header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {release.version}
                </h2>
                <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {release.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {release.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {release.description}
              </p>
            </div>

            {/* Changes grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {release.changes.map((change, changeIndex) => {
                const Icon = change.icon;
                return (
                  <motion.div
                    key={changeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: changeIndex * 0.1 + releaseIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`p-2 rounded-lg ${getTypeStyles(change.type)}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                            {change.title}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full capitalize ${getTypeStyles(
                              change.type
                            )}`}
                          >
                            {change.type}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {change.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subscribe section */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Want to be notified about new releases? Subscribe to our updates.
        </p>
        <Link
          href="/newsletter"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Subscribe to Updates
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
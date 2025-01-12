"use client";

import {
  FileUp,
  FolderTree,
  Share2,
  Search,
  Lock,
  Download,
  History,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Upload Files",
    description: "Share files and documents with your team.",
    icon: FileUp,
    tips: [
      "Drag and drop multiple files",
      "Supported formats: docs, images, PDFs",
      "Maximum file size: 100MB per file",
    ],
  },
  {
    title: "Organize Content",
    description: "Keep your files structured and easy to find.",
    icon: FolderTree,
    tips: [
      "Create folders for different projects",
      "Use consistent naming conventions",
      "Add descriptive file descriptions",
    ],
  },
  {
    title: "Share and Collaborate",
    description: "Control access and collaborate on files.",
    icon: Share2,
    tips: [
      "Set view or edit permissions",
      "Share via links or direct mentions",
      "Collaborate in real-time on documents",
    ],
  },
  {
    title: "Find and Manage",
    description: "Locate and organize your shared files.",
    icon: Search,
    tips: [
      "Use advanced search filters",
      "Sort by date, type, or size",
      "Track file version history",
    ],
  },
];

const quickTips = [
  {
    title: "Security",
    description: "Set permissions and protect sensitive files.",
    icon: Lock,
  },
  {
    title: "Downloads",
    description: "Download files for offline access.",
    icon: Download,
  },
  {
    title: "Versioning",
    description: "Track changes and restore previous versions.",
    icon: History,
  },
  {
    title: "Tags",
    description: "Organize files with custom tags.",
    icon: Tag,
  },
];

export default function FilesGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          File Management Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to efficiently manage, share, and organize files in TeamerHQ.
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
          Quick File Tips
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
          Need help with file management?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Explore our detailed guides or reach out to our support team.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Contact Support
          </Link>
          <Link
            href="/help/files/advanced"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Advanced Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
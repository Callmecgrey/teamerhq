"use client";

import {
  Palette,
  Layout,
  Brush,
  Image as ImageIcon,
  Sliders,
  Layers,
  Monitor,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Branding Settings",
    description: "Customize your workspace's visual identity.",
    icon: Palette,
    tips: [
      "Upload your company logo",
      "Set brand colors and themes",
      "Customize email templates",
    ],
  },
  {
    title: "Layout Configuration",
    description: "Organize your workspace's structure and navigation.",
    icon: Layout,
    tips: [
      "Arrange workspace sections",
      "Customize navigation menu",
      "Set default views for teams",
    ],
  },
  {
    title: "Theme Management",
    description: "Control the visual appearance of your workspace.",
    icon: Brush,
    tips: [
      "Choose between light and dark modes",
      "Customize UI elements",
      "Set default theme preferences",
    ],
  },
  {
    title: "Custom Branding",
    description: "Add your organization's unique branding elements.",
    icon: ImageIcon,
    tips: [
      "Add custom favicon",
      "Set login page background",
      "Customize loading screens",
    ],
  },
];

const quickTips = [
  {
    title: "Preferences",
    description: "Set workspace-wide defaults.",
    icon: Sliders,
  },
  {
    title: "Templates",
    description: "Manage workspace templates.",
    icon: Layers,
  },
  {
    title: "Display",
    description: "Adjust display settings.",
    icon: Monitor,
  },
  {
    title: "Advanced",
    description: "Configure advanced options.",
    icon: Settings,
  },
];

export default function WorkspaceCustomizationGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Workspace Customization Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to personalize and brand your workspace in TeamerHQ.
        </p>
      </div>

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
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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

      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Quick Customization Tips
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
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
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

      <div className="text-center bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Need help with workspace customization?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Explore our detailed guides or reach out to our support team.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Contact Support
          </Link>
          <Link
            href="/help/owner/profile/advanced"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700"
          >
            Advanced Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
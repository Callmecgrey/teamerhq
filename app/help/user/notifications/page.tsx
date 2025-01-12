"use client";

import {
  Bell,
  Mail,
  MessageSquare,
  Calendar,
  Smartphone,
  Clock,
  Filter,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Notification Preferences",
    description: "Customize how and when you receive notifications.",
    icon: Bell,
    tips: [
      "Choose notification channels (email, mobile, desktop)",
      "Set quiet hours for notifications",
      "Customize notification sounds",
    ],
  },
  {
    title: "Email Notifications",
    description: "Manage your email notification settings.",
    icon: Mail,
    tips: [
      "Select which updates to receive via email",
      "Set email digest frequency",
      "Customize email format preferences",
    ],
  },
  {
    title: "Mobile Notifications",
    description: "Configure push notifications for your mobile device.",
    icon: Smartphone,
    tips: [
      "Enable/disable push notifications",
      "Set notification priority levels",
      "Configure notification grouping",
    ],
  },
  {
    title: "Calendar Reminders",
    description: "Set up reminders for important events and deadlines.",
    icon: Calendar,
    tips: [
      "Choose reminder timing preferences",
      "Set up recurring reminders",
      "Customize calendar notification format",
    ],
  },
];

const quickTips = [
  {
    title: "Quiet Hours",
    description: "Set do-not-disturb periods.",
    icon: Clock,
  },
  {
    title: "Filters",
    description: "Create custom notification filters.",
    icon: Filter,
  },
  {
    title: "Chat Settings",
    description: "Manage chat notification preferences.",
    icon: MessageSquare,
  },
  {
    title: "Advanced",
    description: "Configure advanced notification settings.",
    icon: Settings,
  },
];

export default function NotificationsGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Notifications Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to manage your notification preferences and stay updated in TeamerHQ.
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
                    <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
          Quick Notification Tips
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
                  <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
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

      <div className="text-center bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Need help with notifications?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Explore our detailed guides or reach out to our support team.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700"
          >
            Contact Support
          </Link>
          <Link
            href="/help/user/notifications/advanced"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
          >
            Advanced Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
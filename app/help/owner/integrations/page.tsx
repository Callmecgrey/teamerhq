"use client";

import {
  Puzzle,
  Webhook,
  Key,
  Code,
  RefreshCw,
  Database,
  Lock,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "API Configuration",
    description: "From admin settings page navigate to Integrations tab to generate and manage APIs",
    icon: Code,
    tips: [
      "Generate API keys",
      "Configure access levels",
    ],
  },
  {
    title: "Third-party Integrations",
    description: "Connect external services and tools.",
    icon: Puzzle,
    tips: [
      "Browse available integrations",
      "Test  3rd Party integration",
    ],
  },
  {
    title: "Webhook Management",
    description: "Set up and monitor webhooks.",
    icon: Webhook,
    tips: [
      "Create webhook endpoints",
      "Monitor webhook delivery",
      "Handle webhook security",
    ],
  },
  {
    title: "Data Sync",
    description: "Manage data synchronization with external systems.",
    icon: RefreshCw,
    tips: [
      "Configure sync intervals",
      "Map data fields",
      "Monitor sync status",
    ],
  },
];

const quickTips = [
  {
    title: "API Keys",
    description: "Manage API credentials.",
    icon: Key,
  },
  {
    title: "Database",
    description: "Database connections.",
    icon: Database,
  },
  {
    title: "Security",
    description: "Integration security.",
    icon: Lock,
  },
  {
    title: "Advanced",
    description: "Advanced settings.",
    icon: Settings,
  },
];

export default function IntegrationsGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Integrations & API Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to integrate external services and manage APIs in TeamerHQ.
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
                    <div className="p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
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
          Quick Integration Tips
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
                  <div className="p-2 bg-cyan-50 dark:bg-cyan-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
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

      <div className="text-center bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Up Next
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Billing & Subscription
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/owner/user-management"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50 dark:bg-gray-800 dark:text-cyan-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
          <Link
            href="/help/owner/billing"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50 dark:bg-gray-800 dark:text-cyan-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
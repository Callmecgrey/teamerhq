"use client";

import {
  CreditCard,
  Receipt,
  Users,
  History,
  FileText,
  Download,
  AlertCircle,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Payment Methods",
    description: "Manage your payment information and billing details on admin settings ",
    icon: CreditCard,
    tips: [
      "Add multiple payment methods",
      "Set default payment method",
      "Update billing information",
    ],
  },
  {
    title: "Subscription Management",
    description: "Handle your subscription plans and seats.",
    icon: Users,
    tips: [
      "Change subscription plans",
      "Add or remove user seats",
      "View usage metrics",
    ],
  },
  {
    title: "Billing History",
    description: "Access and review past transactions.",
    icon: History,
    tips: [
      "Download invoice PDFs",
      "View payment history",
      "Track subscription changes",
    ],
  },
  {
    title: "Invoice Settings",
    description: "Customize your billing documents and preferences.",
    icon: Receipt,
    tips: [
      "Set billing email addresses",
      "Customize invoice details",
      "Configure billing notifications",
    ],
  },
];

const quickTips = [
  {
    title: "Invoices",
    description: "Access billing documents.",
    icon: FileText,
  },
  {
    title: "Export",
    description: "Export billing data.",
    icon: Download,
  },
  {
    title: "Alerts",
    description: "Payment notifications.",
    icon: AlertCircle,
  },
  {
    title: "Advanced",
    description: "Advanced billing options.",
    icon: Settings,
  },
];

export default function BillingGuide() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Billing & Subscription Guide
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Learn how to manage your billing, subscriptions, and payment settings in TeamerHQ.
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
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                      <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
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
          Quick Billing Tips
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
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
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

      <div className="text-center bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Up Next
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Common Issues
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/owner/integrations"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50 dark:bg-gray-800 dark:text-amber-400 dark:hover:bg-gray-700"
          >
            Back
          </Link>
          <Link
            href="/help/utilities/common-issues"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50 dark:bg-gray-800 dark:text-amber-400 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
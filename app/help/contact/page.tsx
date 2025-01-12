"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  Clock,
  AlertCircle,
  HelpCircle,
  Bug,
  Lightbulb,
  Shield,
} from "lucide-react";

const categories = [
  {
    id: "technical",
    name: "Technical Issue",
    icon: Bug,
    description: "Problems with features or technical errors",
  },
  {
    id: "account",
    name: "Account & Billing",
    icon: Shield,
    description: "Questions about your account or billing",
  },
  {
    id: "feature",
    name: "Feature Request",
    icon: Lightbulb,
    description: "Suggestions for new features or improvements",
  },
  {
    id: "general",
    name: "General Inquiry",
    icon: HelpCircle,
    description: "Other questions or concerns",
  },
];

const priorities = [
  {
    id: "low",
    name: "Low",
    description: "General questions or non-urgent issues",
    color: "bg-green-500",
  },
  {
    id: "medium",
    name: "Medium",
    description: "Important issues affecting some functionality",
    color: "bg-yellow-500",
  },
  {
    id: "high",
    name: "High",
    description: "Critical issues affecting core functionality",
    color: "bg-red-500",
  },
];

export default function ContactSupport() {
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ category, priority, subject, message, email });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-4">
          <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Contact Support
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Need help? Our support team is here to assist you.
        </p>
      </div>

      {/* Response Time Notice */}
      <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <p className="text-sm text-blue-800 dark:text-blue-200">
            We typically respond within 24 hours. For urgent issues, please select "High" priority.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCategory(cat.id)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  category === cat.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-md">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Priority Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Priority Level
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priorities.map((pri) => (
              <motion.button
                key={pri.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPriority(pri.id)}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  priority === pri.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${pri.color}`} />
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {pri.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {pri.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Brief description of your issue"
            required
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Please provide as much detail as possible..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </motion.button>
        </div>
      </form>

      {/* Additional Help Section */}
      <div className="mt-12 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Need Immediate Help?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Check our documentation for quick solutions to common problems.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/help/faq"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            View FAQ
          </a>
          <a
            href="/help/documentation"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
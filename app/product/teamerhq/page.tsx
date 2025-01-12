"use client";

import {
  Building2,
  Shield,
  UserCog,
  Archive,
  Key,
  Link,
  FileUp,
  Puzzle,
  ClipboardList,
  MessageSquare,
  Video,
  Users,
  ScreenShare,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const features = [
  {
    title: "Custom Workspaces",
    description: "Create unique, branded workspaces that reflect your company's identity",
    icon: Building2,
    category: "Customization",
  },
  {
    title: "Dedicated Account Manager",
    description: "Get personalized support from your assigned account manager",
    icon: UserCog,
    category: "Support",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and security measures to protect your data",
    icon: Shield,
    category: "Security",
  },
  {
    title: "Unlimited Message Retention",
    description: "Keep your entire message history accessible and searchable",
    icon: Archive,
    category: "Storage",
  },
  {
    title: "2FA Authentication",
    description: "Enhanced account security with two-factor authentication",
    icon: Key,
    category: "Security",
  },
  {
    title: "Custom URL",
    description: "Access TeamerHQ through your own branded domain",
    icon: Link,
    category: "Customization",
  },
  {
    title: "Large File Uploads",
    description: "Upload files up to 5GB in size with your team on Free Plan",
    icon: FileUp,
    category: "Storage",
  },
  {
    title: "3rd Party Integration & API",
    description: "Connect with your favorite tools and build custom integrations",
    icon: Puzzle,
    category: "Integration",
  },
  {
    title: "Audit Log",
    description: "Track all workspace activities for compliance and security",
    icon: ClipboardList,
    category: "Security",
  },
  {
    title: "Instant Messaging",
    description: "Real-time communication with your team members",
    icon: MessageSquare,
    category: "Communication",
  },
  {
    title: "HD Video Calls",
    description: "Crystal-clear video conferencing with up to 100 participants",
    icon: Video,
    category: "Communication",
  },
  {
    title: "Team Channels",
    description: "Organize conversations by teams, projects, or topics",
    icon: Users,
    category: "Organization",
  },
  {
    title: "Screen Sharing",
    description: "Share your screen during calls for better collaboration",
    icon: ScreenShare,
    category: "Communication",
  },
];

const categories = Array.from(new Set(features.map((f) => f.category)));

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:3rem_3rem]" />
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Everything you need to collaborate effectively
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                TeamerHQ combines all the features you need for seamless team communication and collaboration in one powerful platform.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features
                  .filter((feature) => feature.category === category)
                  .map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="mt-4 text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 dark:bg-blue-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your team communication?
              </h2>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
                  >
                    Contact sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

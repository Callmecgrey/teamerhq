"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Slack,
  Github,
  LayoutGrid,
  FileText,
  Figma,
  GitPullRequest,
  Video,
  Search,
  Filter,
  Star,
  Clock,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// Integration categories with colors
const categories = {
  Communication: { color: "blue" },
  Development: { color: "purple" },
  "Project Management": { color: "green" },
  Documentation: { color: "orange" },
  Design: { color: "pink" },
};

// Extended integrations data
const integrations = [
  {
    name: "Slack",
    icon: Slack,
    category: "Communication",
    description: "Real-time messaging and team collaboration platform",
    features: ["Channel sync", "Message forwarding", "Status sync"],
    popularity: 4.8,
    status: "stable",
    setupTime: "5 min",
  },
  {
    name: "GitHub",
    icon: Github,
    category: "Development",
    description: "Code hosting and collaboration platform",
    features: ["PR notifications", "Issue tracking", "Commit sync"],
    popularity: 4.9,
    status: "stable",
    setupTime: "10 min",
  },
  {
    name: "Trello",
    icon: LayoutGrid,
    category: "Project Management",
    description: "Visual project management and organization",
    features: ["Card sync", "Automated workflows", "Due date tracking"],
    popularity: 4.5,
    status: "stable",
    setupTime: "5 min",
  },
  {
    name: "Notion",
    icon: FileText,
    category: "Documentation",
    description: "All-in-one workspace for notes and docs",
    features: ["Page sync", "Real-time updates", "Embedded views"],
    popularity: 4.7,
    status: "beta",
    setupTime: "8 min",
  },
  {
    name: "Figma",
    icon: Figma,
    category: "Design",
    description: "Collaborative interface design tool",
    features: ["Design sync", "Asset library", "Comment sync"],
    popularity: 4.6,
    status: "stable",
    setupTime: "7 min",
  },
  {
    name: "Asana",
    icon: LayoutGrid,
    category: "Project Management",
    description: "Work management platform for teams",
    features: ["Task sync", "Project templates", "Timeline view"],
    popularity: 4.4,
    status: "stable",
    setupTime: "6 min",
  },
  {
    name: "Jira",
    icon: GitPullRequest,
    category: "Development",
    description: "Issue and project tracking for software teams",
    features: ["Issue sync", "Sprint planning", "Workflow automation"],
    popularity: 4.3,
    status: "stable",
    setupTime: "15 min",
  },
  {
    name: "Zoom",
    icon: Video,
    category: "Communication",
    description: "Video conferencing and virtual meetings",
    features: ["Meeting scheduling", "Recording sync", "Chat integration"],
    popularity: 4.7,
    status: "beta",
    setupTime: "5 min",
  },
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />

        
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            Integration Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Connect your favorite tools and streamline your workflow
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex-shrink-0">
              <div className="relative inline-block w-full md:w-auto">
                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="appearance-none w-full md:w-48 pl-10 pr-8 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {integration.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        integration.status === "stable"
                          ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                      }`}>
                        {integration.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {integration.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {integration.popularity} / 5.0
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {integration.setupTime} setup
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={`/integrations/${integration.name.toLowerCase()}`}
                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        View details
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">
              No integrations found
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Need help setting up an integration?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our documentation provides detailed guides for each integration, or you can
              contact our support team for assistance.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/docs/integrations"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                View Documentation
              </Link>
              <Link
                href="/help/contact"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
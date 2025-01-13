"use client";

import { motion } from "framer-motion";
import { Calendar, Star, Bug, Sparkles, Wrench, Shield, Zap, Mail, Bell } from "lucide-react";
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const changelogData = [
  {
    version: "2.4.0",
    date: "April 15, 2024",
    highlights: true,
    changes: [
      {
        type: "feature",
        title: "HD Video Conferencing",
        description: "Introduced high-definition video conferencing with support for up to 100 participants",
        icon: Sparkles,
        details: [
          "Crystal clear 1080p video quality",
          "Background noise suppression",
          "Virtual backgrounds",
          "Meeting recording capabilities"
        ]
      },
      {
        type: "improvement",
        title: "Enhanced File Sharing",
        description: "Increased file size limit to 5GB for all plans",
        icon: Zap,
        details: [
          "Increased upload speed",
          "Preview support for more file types",
          "Improved file organization"
        ]
      },
    ],
  },
  {
    version: "2.3.2",
    date: "April 1, 2024",
    changes: [
      {
        type: "security",
        title: "Security Updates",
        description: "Implemented additional security measures for enterprise workspaces",
        icon: Shield,
        details: [
          "Enhanced encryption protocols",
          "Advanced threat detection",
          "Improved audit logging"
        ]
      },
      {
        type: "bugfix",
        title: "Message Sync Fix",
        description: "Resolved message synchronization issues in large team channels",
        icon: Bug,
        details: [
          "Fixed message ordering in threads",
          "Improved real-time delivery",
          "Resolved notification delays"
        ]
      },
    ],
  },
  {
    version: "2.3.0",
    date: "March 15, 2024",
    changes: [
      {
        type: "feature",
        title: "Custom Domains",
        description: "Added support for custom domain configuration",
        icon: Star,
        details: [
          "SSL certificate management",
          "DNS configuration wizard",
          "Domain verification system"
        ]
      },
      {
        type: "improvement",
        title: "Performance Optimization",
        description: "Improved loading times for large workspaces",
        icon: Wrench,
        details: [
          "Optimized database queries",
          "Implemented lazy loading",
          "Reduced initial bundle size"
        ]
      },
    ],
  },
];

const getTypeStyles = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    case "improvement":
      return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300";
    case "bugfix":
      return "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300";
    case "security":
      return "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
    default:
      return "bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300";
  }
};

export default function Changelog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showDetails, setShowDetails] = useState<{[key: string]: boolean}>({});

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription
    setSubscribed(true);
    setEmail("");
  };

  const toggleDetails = (versionIndex: number, changeIndex: number) => {
    const key = `${versionIndex}-${changeIndex}`;
    setShowDetails(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:3rem_3rem]" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Product Updates & Changes
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Stay up to date with the latest features, improvements, and fixes in TeamerHQ
              </p>
              
              {/* Subscription Form */}
              <div className="mt-8 max-w-md mx-auto">
                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <div className="flex-grow relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent focus:border-blue-300 focus:ring-0 bg-white/10 text-white placeholder-blue-200"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-white bg-blue-500/20 rounded-lg py-3">
                    <Bell className="w-5 h-5" />
                    <span>You're subscribed to updates!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Changelog Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {changelogData.map((release, releaseIndex) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: releaseIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Version Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    v{release.version}
                  </h2>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {release.date}
                  </div>
                  {release.highlights && (
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Latest Release
                    </span>
                  )}
                </div>

                {/* Changes List */}
                <div className="space-y-6">
                  {release.changes.map((change, changeIndex) => {
                    const Icon = change.icon;
                    const detailsKey = `${releaseIndex}-${changeIndex}`;
                    const isExpanded = showDetails[detailsKey];

                    return (
                      <motion.div
                        key={changeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: changeIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div 
                          className="flex space-x-4 cursor-pointer"
                          onClick={() => toggleDetails(releaseIndex, changeIndex)}
                        >
                          <div className={`p-2 rounded-lg ${getTypeStyles(change.type)}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {change.title}
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                              {change.description}
                            </p>
                            {change.details && (
                              <motion.div
                                initial={false}
                                animate={{ height: isExpanded ? "auto" : 0 }}
                                className="overflow-hidden"
                              >
                                <ul className="mt-3 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                  {change.details.map((detail, i) => (
                                    <li key={i} className="flex items-center">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
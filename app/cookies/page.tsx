"use client";

import { motion } from "framer-motion";
import { Cookie, Info, Settings, Shield, CheckCircle2 } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "Required for basic website functionality",
    examples: ["Authentication", "Security", "Load Balancing"]
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "Enable enhanced features and preferences",
    examples: ["Language", "Theme", "User Settings"]
  },
  {
    icon: Info,
    title: "Analytics Cookies",
    description: "Help us improve our services",
    examples: ["Usage Patterns", "Performance", "Error Tracking"]
  }
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      
      <main className="container max-w-4xl px-4 py-16 mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center"
            >
              <Cookie className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Understanding how TeamerHQ uses cookies to enhance your experience
            </p>
          </div>

          {/* Cookie Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <type.icon className="w-8 h-8 text-violet-500 dark:text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: January 1, 1970</p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookie List</h2>
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Cookie Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        session_id
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        Authentication
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        Session
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Essential
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        preferences
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        User Settings
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        1 year
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Functional
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        analytics_id
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        Analytics
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        2 years
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          Analytics
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">Managing Cookies</h2>
              <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">
                  You have full control over the cookies on our website. You can:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Accept all cookies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Reject non-essential cookies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Customize your cookie preferences</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-purple-100">
                  If you have questions about our cookie policy, please contact us at{" "}
                  <a href="mailto:cookies@teamerhq.com" className="text-white underline">
                    cookies@teamerhq.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
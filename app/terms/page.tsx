"use client";

import { motion } from "framer-motion";
import { ScrollText, FileText, Scale, AlertCircle, CheckCircle2, Shield, Lock } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const keyPoints = [
  {
    icon: Shield,
    title: "Account Security",
    description: "You are responsible for maintaining the security of your account"
  },
  {
    icon: Scale,
    title: "Fair Usage",
    description: "Use TeamerHQ services responsibly and legally"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "We implement strong measures to protect your information"
  },
  {
    icon: AlertCircle,
    title: "Compliance",
    description: "Follow all applicable laws and our terms of service"
  }
];

export default function TermsPage() {
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
              <ScrollText className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using TeamerHQ
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <point.icon className="w-8 h-8 text-violet-500 dark:text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {point.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: January 13, 2025</p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-lg mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using TeamerHQ, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  If you do not agree with any of these terms, you are prohibited from using the service.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Use License</h2>
              <div className="border-l-4 border-violet-500 pl-6 mb-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Permission is granted to temporarily access TeamerHQ for personal, non-commercial transitory viewing only.
                </p>
                <h3 className="text-lg font-semibold mb-2">This license shall not allow you to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Modify or copy the materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Use the materials for any commercial purpose</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Remove any copyright or proprietary notations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Transfer the materials to another person</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. User Accounts</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Account Security</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You are responsible for maintaining the confidentiality of your account and password
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Account Activity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You accept responsibility for all activities under your account
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Service Modifications</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  TeamerHQ reserves the right to modify or discontinue the service with or without notice.
                  We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Limitation of Liability</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  TeamerHQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Governing Law</h2>
              <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-lg mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  These terms shall be governed by and construed in accordance with the laws of the United States,
                  without regard to its conflict of law provisions.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Changes to Terms</h2>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
                <p className="text-gray-600 dark:text-gray-400">
                  We reserve the right to modify these terms at any time.
                  We will notify users of any material changes by posting the new Terms of Service on this page.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-purple-100">
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:legal@teamerhq.com" className="text-white underline">
                    legal@teamerhq.com
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
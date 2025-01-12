"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const privacyFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Enterprise-grade encryption for all your sensitive information"
  },
  {
    icon: Eye,
    title: "Transparent Processing",
    description: "Clear visibility into how your data is handled"
  },
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Full compliance with global privacy regulations"
  },
  {
    icon: CheckCircle2,
    title: "User Control",
    description: "Complete control over your personal data"
  }
];

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              At TeamerHQ, we take your privacy seriously. Learn how we protect and manage your data.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 py-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-violet-500 dark:text-violet-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: January 1, 1970</p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400">We collect information that you provide directly to us, including:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Account information (name, email, password)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Profile information</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Communication data</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Usage information</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">2. How We Use Your Information</h2>
              <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">We use the information we collect to:</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Provide and maintain TeamerHQ services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Process your transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Send you technical notices and support messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Communicate with you about products, services, and events</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">3. Information Sharing</h2>
              <div className="border-l-4 border-violet-500 pl-6">
                <p className="text-gray-600 dark:text-gray-400">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Service providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Business partners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-violet-500" />
                    <span>Legal authorities when required</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">4. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We implement appropriate technical and organizational measures to protect your data,
                including encryption, access controls, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12">5. Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Access Rights</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Request access to your personal data
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Rectification</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Correct inaccurate personal data
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Erasure</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Request deletion of your data
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <h3 className="font-semibold mb-2">Portability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transfer your data to another service
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-purple-100">
                  For privacy-related questions, please contact us at{" "}
                  <a href="mailto:privacy@teamerhq.com" className="text-white underline">
                    privacy@teamerhq.com
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
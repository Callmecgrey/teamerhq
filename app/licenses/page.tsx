"use client";

import { motion } from "framer-motion";
import { FileCheck, Book, Code, Package, CheckCircle2 } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const licenses = [
  {
    name: "React",
    version: "18.2.0",
    license: "MIT",
    link: "https://github.com/facebook/react/blob/main/LICENSE",
    description: "A JavaScript library for building user interfaces"
  },
  {
    name: "Next.js",
    version: "13.5.1",
    license: "MIT",
    link: "https://github.com/vercel/next.js/blob/canary/license.md",
    description: "The React Framework for Production"
  },
  {
    name: "Framer Motion",
    version: "10.16.4",
    license: "MIT",
    link: "https://github.com/framer/motion/blob/main/LICENSE.md",
    description: "Production-ready animation library for React"
  },
  {
    name: "Tailwind CSS",
    version: "3.3.3",
    license: "MIT",
    link: "https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE",
    description: "A utility-first CSS framework"
  },
  {
    name: "Lucide React",
    version: "0.284.0",
    license: "MIT",
    link: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
    description: "Beautiful & consistent icon toolkit"
  },
  {
    name: "Radix UI",
    version: "1.0.0",
    license: "MIT",
    link: "https://github.com/radix-ui/primitives/blob/main/LICENSE",
    description: "Unstyled, accessible UI components"
  }
];

const categories = [
  {
    name: "Frontend Framework",
    packages: ["React", "Next.js"]
  },
  {
    name: "Styling & Animation",
    packages: ["Tailwind CSS", "Framer Motion"]
  },
  {
    name: "UI Components",
    packages: ["Radix UI", "Lucide React"]
  }
];

export default function LicensesPage() {
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
              <FileCheck className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
              Third-Party Licenses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              TeamerHQ is built on the shoulders of giants. We're grateful to these open-source projects.
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h2>
                <ul className="space-y-2">
                  {category.packages.map((pkg, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-violet-500" />
                      {pkg}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* License List */}
          <div className="space-y-6">
            {licenses.map((lib, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {lib.name}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
                        v{lib.version}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {lib.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full dark:text-purple-400 dark:bg-purple-900">
                      {lib.license}
                    </span>
                    <a
                      href={lib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 flex items-center gap-1"
                    >
                      View License
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About Licensing?</h2>
            <p className="text-purple-100">
              If you have any questions about our use of third-party software or licensing,
              please contact us at{" "}
              <a href="mailto:legal@teamerhq.com" className="text-white underline">
                legal@teamerhq.com
              </a>
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
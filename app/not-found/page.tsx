"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Page not found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-x-4"
        >
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-700 text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/50"
          >
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Documentation
            </Link>
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[600px] h-[600px]">
            <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl" />
            <div className="absolute inset-0 -rotate-45 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
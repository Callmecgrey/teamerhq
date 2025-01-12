"use client";

import { motion } from "framer-motion";
import { Building2, Users, Zap, Lock, BarChart, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const enterpriseFeatures = [
  {
    icon: Users,
    title: "Unlimited Teams",
    description: "Scale seamlessly with unlimited teams, projects, and collaborators",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Advanced security features including SSO, audit logs, and custom policies",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Deep insights into team productivity and collaboration patterns",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "High-availability infrastructure with 99.99% uptime SLA",
    color: "from-green-500 to-emerald-500"
  }
];

const useCases = [
  {
    industry: "Financial Services",
    description: "Secure collaboration for global banking teams with compliance controls",
    metrics: ["50% faster project delivery", "100% compliance adherence", "30% cost reduction"]
  },
  {
    industry: "Healthcare",
    description: "HIPAA-compliant team collaboration for healthcare providers",
    metrics: ["40% improved patient care", "Zero compliance violations", "24/7 availability"]
  },
  {
    industry: "Technology",
    description: "Scalable solution for rapid-growth tech companies",
    metrics: ["2x faster feature shipping", "99.99% uptime", "500+ teams supported"]
  }
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-3 mb-8 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500"
              >
                <Building2 className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
              >
                Enterprise-Grade Collaboration
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl mt-6 text-xl text-gray-600 dark:text-gray-400"
              >
                Secure, scalable, and compliant team collaboration platform for enterprises
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center"
              >
                <Link href="/contact-sales">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                  >
                    Contact Sales
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/security">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                  >
                    Security Details
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white/50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-4">
                Enterprise Use Cases
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                How leading enterprises transform their operations with TeamerHQ
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {useCase.description}
                  </p>
                  <ul className="space-y-3">
                    {useCase.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Zap className="w-4 h-4 text-violet-500" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl shadow-xl text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Enterprise?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Join leading enterprises using TeamerHQ to enhance collaboration and drive innovation
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Link href="/contact-sales">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-purple-50"
                    >
                      Schedule a Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/security">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10"
                    >
                      Security Overview
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
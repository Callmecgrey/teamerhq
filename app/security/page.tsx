"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, FileCheck, Key, Database, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption for all data in transit and at rest",
    details: ["AES-256 encryption", "TLS 1.3", "Perfect Forward Secrecy"]
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Granular permissions and role-based access control",
    details: ["SSO/SAML", "2FA/MFA", "Custom roles"]
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "Comprehensive data security and privacy measures",
    details: ["Daily backups", "Data redundancy", "Disaster recovery"]
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Enterprise-grade infrastructure with multiple security layers",
    details: ["DDoS protection", "WAF", "24/7 monitoring"]
  }
];

const compliance = [
  {
    name: "SOC 2 Type II",
    description: "Certified security controls and procedures",
    status: "Certified"
  },
  {
    name: "GDPR",
    description: "European data protection compliance",
    status: "Compliant"
  },
  {
    name: "HIPAA",
    description: "Healthcare data security standards",
    status: "Compliant"
  },
  {
    name: "ISO 27001",
    description: "Information security management",
    status: "Certified"
  },
  {
    name: "CCPA",
    description: "California privacy requirements",
    status: "Compliant"
  },
  {
    name: "FedRAMP",
    description: "Federal security standards",
    status: "In Process"
  }
];

export default function SecurityPage() {
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
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
              >
                Enterprise Security
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl mt-6 text-xl text-gray-600 dark:text-gray-400"
              >
                Bank-grade security infrastructure protecting your team's collaboration
              </motion.p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-white/50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 mb-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Grid */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-4">
                Security Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Meeting the highest security standards in the industry
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      cert.status === "Certified" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : cert.status === "Compliant"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
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
                  Ready to Secure Your Team's Collaboration?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Get in touch with our security team to learn more about our enterprise-grade protection
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Link href="/contact-sales">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-purple-50"
                    >
                      Contact Security Team
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
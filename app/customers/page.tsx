"use client";

import { motion } from "framer-motion";
import { Users, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const customers = [
  {
    name: "Global Bank Corp",
    industry: "Financial Services",
    logo: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "TeamerHQ transformed how our global teams collaborate, ensuring security and compliance.",
    stats: {
      teams: "500+",
      users: "10,000+",
      efficiency: "40%"
    },
    author: {
      name: "Sarah Chen",
      title: "CTO"
    }
  },
  {
    name: "HealthTech Solutions",
    industry: "Healthcare",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "The HIPAA compliance and security features made TeamerHQ an easy choice for us.",
    stats: {
      teams: "200+",
      users: "5,000+",
      efficiency: "35%"
    },
    author: {
      name: "Dr. James Wilson",
      title: "Head of Digital Innovation"
    }
  },
  {
    name: "TechStart Inc",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    quote: "TeamerHQ's scalability and advanced features help us stay agile as we grow rapidly.",
    stats: {
      teams: "100+",
      users: "2,000+",
      efficiency: "50%"
    },
    author: {
      name: "Michael Zhang",
      title: "VP of Engineering"
    }
  }
];

const metrics = [
  { label: "Enterprise Customers", value: "500+" },
  { label: "Team Members", value: "1M+" },
  { label: "Countries", value: "150+" },
  { label: "Customer Satisfaction", value: "99%" }
];

export default function CustomersPage() {
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
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
              >
                Customer Success Stories
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl mt-6 text-xl text-gray-600 dark:text-gray-400"
              >
                See how leading organizations transform their teams with TeamerHQ
              </motion.p>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-20 bg-white/50 dark:bg-gray-900/50">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-20">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="space-y-20">
              {customers.map((customer, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="h-20 w-40 relative mb-6">
                        <img
                          src={customer.logo}
                          alt={customer.name}
                          className="rounded-lg object-cover"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {customer.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {customer.industry}
                      </p>
                      <div className="flex items-start gap-2 mb-6">
                        <Quote className="w-8 h-8 text-violet-500 flex-shrink-0" />
                        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                          "{customer.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {customer.author.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {customer.author.title}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Impact Metrics
                        </h4>
                        <div className="grid gap-4">
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Active Teams
                            </div>
                            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                              {customer.stats.teams}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Total Users
                            </div>
                            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                              {customer.stats.users}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Efficiency Increase
                            </div>
                            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                              {customer.stats.efficiency}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link href={`/case-studies/${customer.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button
                          className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
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
                  Join These Success Stories
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Transform your team's collaboration with TeamerHQ's enterprise platform
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Link href="/contact-sales">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-purple-50"
                    >
                      Talk to Sales
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10"
                    >
                      Watch Demo
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
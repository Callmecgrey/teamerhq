"use client";

import { motion } from "framer-motion";
import { Building2, Mail, Phone, Globe2, ArrowRight, MessageSquare, Shield, Users, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR, and HIPAA compliant infrastructure"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 priority support with dedicated success manager"
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Custom API for team success"
  }
];

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-2xl inline-block mb-6"
          >
            <Building2 className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-6"
          >
            Transform Your Enterprise Collaboration
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Join thousands of leading companies using TeamerHQ to power their teams
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative z-10">
              <h2 className="text-2xl font-semibold mb-8">Talk to Our Enterprise Team</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-100">First Name</label>
                    <Input placeholder="John" className="bg-gray-50 dark:bg-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Last Name</label>
                    <Input placeholder="Doe" className="bg-gray-50 dark:bg-gray-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Work Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-gray-50 dark:bg-gray-900" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Company</label>
                    <Input placeholder="Company Name" className="bg-gray-50 dark:bg-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-100">Company Size</label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-900">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-100">How can we help?</label>
                  <Textarea 
                    placeholder="Tell us about your needs..."
                    className="min-h-[120px] bg-gray-50 dark:bg-gray-900"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-violet-200 dark:bg-violet-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Enterprise Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:enterprise@teamerhq.com" className="hover:underline">
                    enterprise@teamerhq.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+1-888-123-4567" className="hover:underline">
                    +1-888-123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>99.99% Uptime SLA</span>
                <span className="mx-2">•</span>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
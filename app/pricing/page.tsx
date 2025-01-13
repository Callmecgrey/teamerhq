"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Star, Crown, Check, X, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Great for individuals starting out.",
    features: [
      "1 Workspace",
      "Basic Support",
      "Community Access",
      "3Months Message Retention",
      "5GB File Uploads",
      "Instant Messaging",
      "Video Call",
      "Team Channels",
      "Screen Sharing",
    ],
    notIncluded: ["2FA", "Custom URL", "3rd Party Integration & API", "TeamerAI"],
    bestFor: "Freelancers, Students, Personal Projects",
    icon: Star,
    ctaText: "Get Started",
    ctaLink: "/signup",
  },
  {
    name: "Startup",
    price: "25.99",
    description: "Ideal for small teams and startups.",
    features: [
      "5 Workspaces",
      "Priority Support",
      "Team Collaboration",
      "A Year Message Retention",
      "2FA Authentication",
      "50GB File Uploads",
      "Instant Messaging",
      "HD Video Calls",
      "Team Channels",
      "Screen Sharing",
    ],
    notIncluded: ["Custom URL", "3rd Party Integration & API", "TeamerAI"],
    bestFor: "Small Teams, Startups, Entrepreneurs",
    icon: Zap,
    popular: true,
    ctaText: "Start Free Trial",
    ctaLink: "/signup",
  },
  {
    name: "Plus",
    price: "99.99",
    description: "Perfect for growing teams.",
    features: [
      "Unlimited Workspaces",
      "Advanced Analytics",
      "24/7 Support",
      "Message Retention",
      "2FA Authentication",
      "Custom URL",
      "Larger File Uploads",
      "3rd Party Integration & API",
      "Instant Messaging",
      "HD Video Calls",
      "Team Channels",
      "Screen Sharing",
    ],
    notIncluded: ["TeamerAI"],
    bestFor: "Growing Teams, Large Businesses",
    icon: Crown,
    ctaText: "Start Free Trial",
    ctaLink: "/signup",
  },
];

const enterprisePlan = {
  name: "Enterprise",
  price: "Custom",
  description: "Tailored solutions for large organizations.",
  features: [
    "Custom Workspaces",
    "Dedicated Account Manager",
    "Enterprise Security",
    "Unlimited Message Retention",
    "2FA Authentication",
    "Custom URL",
    "Large File Uploads",
    "3rd Party Integration & API",
    "Audit Log",
    "Instant Messaging",
    "HD Video Calls",
    "Team Channels",
    "Screen Sharing",
    "TeamerAI",
  ],
  bestFor: "Large Organizations, Enterprises",
  icon: Shield,
  ctaText: "Contact Sales",
  ctaLink: "/contact-sales",
};

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No, all our plans are month-to-month. You can cancel at any time without penalty.",
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team.",
  },
  {
    q: "What happens after my trial ends?",
    a: "After your 14-day trial, you'll be automatically switched to your selected plan. We'll notify you before any charges.",
  },
  {
    q: "Do you offer custom features?",
    a: "Enterprise plans can be customized with additional features to meet your specific needs.",
  },
];

export default function PricingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Scale your team communication with our flexible pricing options.
            Start free, upgrade as you grow.
          </p>
        </motion.div>

        {/* Main Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={item}
                className={`relative rounded-2xl p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border ${
                  plan.popular
                    ? "border-violet-500 dark:border-violet-400"
                    : "border-gray-200 dark:border-gray-700"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-purple-600"
                    variant="secondary"
                  >
                    Most Popular
                  </Badge>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {plan.bestFor}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    ${plan.price}
                    <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                      /mo
                    </span>
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {plan.description}
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded?.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={plan.ctaLink} className="block w-full">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enterprise Plan Card */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={item}
            className="relative rounded-2xl p-8 bg-gradient-to-r from-violet-600/10 to-purple-600/10 backdrop-blur-sm border border-violet-200 dark:border-violet-800"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{enterprisePlan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {enterprisePlan.bestFor}
                </p>
              </div>
              <div className="h-16 w-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                <Shield className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom Pricing</span>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {enterprisePlan.description}
                  </p>
                </div>
                <Link href={enterprisePlan.ctaLink} className="block">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  >
                    {enterprisePlan.ctaText}
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {enterprisePlan.features.slice(0, 6).map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Got questions? We've got answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-violet-500" />
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Team Communication?
          </h2>
          <p className="mb-6 text-violet-100">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link href="/signup">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100"
            >
              Get Started Now
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
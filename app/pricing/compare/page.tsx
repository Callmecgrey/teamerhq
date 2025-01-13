"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Star, Crown, Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";

// Reuse the plans data from pricing page
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
  {
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
    ctaLink: "/contact",
  },
];

// All possible features across all plans
const allFeatures = {
  "Workspaces": {
    description: "Number of separate workspaces you can create",
    category: "Core Features"
  },
  "Support": {
    description: "Level of customer support provided",
    category: "Support"
  },
  "Message Retention": {
    description: "How long messages are stored and accessible",
    category: "Storage"
  },
  "File Uploads": {
    description: "Storage limit for file uploads",
    category: "Storage"
  },
  "Video Calls": {
    description: "Video conferencing capabilities",
    category: "Communication"
  },
  "Team Channels": {
    description: "Dedicated spaces for team discussions",
    category: "Communication"
  },
  "Screen Sharing": {
    description: "Ability to share your screen during calls",
    category: "Communication"
  },
  "2FA Authentication": {
    description: "Two-factor authentication for enhanced security",
    category: "Security"
  },
  "Custom URL": {
    description: "Branded URL for your workspace",
    category: "Customization"
  },
  "3rd Party Integration & API": {
    description: "Connect with other tools and services",
    category: "Integration"
  },
  "TeamerAI": {
    description: "AI-powered features for enhanced productivity",
    category: "Advanced Features"
  }
};

export default function ComparePage() {
  const categories = Array.from(new Set(Object.values(allFeatures).map(f => f.category)));

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
            Compare Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the perfect plan for your team. Compare features and choose what works best for you.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm overflow-hidden mb-16"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Features</TableHead>
                  {plans.map((plan) => {
                    const Icon = plan.icon;
                    return (
                      <TableHead key={plan.name} className="text-center min-w-[200px]">
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                            <span className="font-bold">{plan.name}</span>
                            {plan.popular && (
                              <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <div className="text-2xl font-bold">
                            {plan.price === "Custom" ? (
                              "Custom"
                            ) : (
                              <>
                                ${plan.price}
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  /mo
                                </span>
                              </>
                            )}
                          </div>
                          <Button
                            variant={plan.popular ? "default" : "outline"}
                            className={`w-full ${
                              plan.popular
                                ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                                : ""
                            }`}
                          >
                            {plan.ctaText}
                          </Button>
                        </div>
                      </TableHead>
                    );
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <>
                    <TableRow key={`category-${category}`}>
                      <TableCell colSpan={5} className="bg-gray-50 dark:bg-gray-900/50 font-semibold">
                        {category}
                      </TableCell>
                    </TableRow>
                    {Object.entries(allFeatures)
                      .filter(([_, info]) => info.category === category)
                      .map(([feature, info]) => (
                        <TableRow key={feature}>
                          <TableCell className="font-medium">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="flex items-center gap-2">
                                  {feature}
                                  <HelpCircle className="h-4 w-4 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{info.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                          {plans.map((plan) => (
                            <TableCell key={`${plan.name}-${feature}`} className="text-center">
                              {plan.features.includes(feature) ? (
                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                              ) : plan.notIncluded?.includes(feature) ? (
                                <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                              ) : (
                                <div className="text-sm text-gray-500">-</div>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Link href="/pricing">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100"
            >
              View Pricing
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
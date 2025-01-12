"use client";

import { Check, Crown, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative text-center">
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 sm:text-5xl md:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative group overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "ring-2 ring-blue-500 dark:ring-blue-400"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="h-16 w-16">
                    <div className="absolute transform rotate-45 bg-blue-500 text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                      Most Popular
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 w-fit bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl shadow-inner">
                    <plan.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-right">
                    {plan.price === "Custom" ? (
                      <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Custom
                      </span>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                          ${plan.price}
                        </span>
                        <span className="ml-1 text-gray-500 dark:text-gray-400">
                          /month
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <CardTitle className="mt-4 text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 opacity-50">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gray-400 dark:text-gray-600" />
                      </div>
                      <span className="text-gray-400 dark:text-gray-500 text-sm line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <a
                    href={plan.ctaLink}
                      className={`w-full inline-block text-center py-2 px-4 rounded-lg ${
                        plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                        : "bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600"
                      }`}
                    >
                  {plan.ctaText}
                </a>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  Best for: {plan.bestFor}
                </p>
              </CardFooter>

            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 mt-12 text-left md:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-white">
              Still have questions?
            </h2>
            <p className="mt-2 text-blue-100">
              Our team is here to help you find the perfect plan for your needs.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block text-center py-2 px-4 rounded-lg bg-white text-blue-600 hover:bg-blue-50 text-lg font-medium"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Great for individuals starting out.",
    features: [
      "1 Workspace", 
      "Basic Support", 
      "Community Access", 
      "Limited Message Retention", 
      "No 2FA", 
      "No Custom URL", 
      "Small File Uploads", 
      "Instant Messaging", 
      "HD Video Calls", 
      "Team Channels"
    ],
    button: { text: "Get Started", link: "/signup" },
    popular: false,
    details: "Perfect for personal use or testing out the core features of the platform. Upgrade when you're ready to scale.",
    targetAudience: "Freelancers, Students, Personal Projects",
  },
  {
    name: "Startup",
    price: "$19/month",
    description: "Ideal for small teams and startups.",
    features: [
      "5 Workspaces", 
      "Priority Support", 
      "Team Collaboration", 
      "Message Retention", 
      "2FA Authentication", 
      "Custom URL", 
      "File Uploads", 
      "Instant Messaging", 
      "HD Video Calls", 
      "Team Channels"
    ],
    button: { text: "Start Trial", link: "/signup" },
    popular: true,
    details: "For growing teams that need more collaboration tools. Includes priority support to ensure you're never left in the dark.",
    targetAudience: "Small Teams, Startups, Entrepreneurs",
  },
  {
    name: "Plus",
    price: "$49/month",
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
      "Team Channels"
    ],
    button: { text: "Start Trial", link: "/signup" },
    popular: false,
    details: "For larger teams who need more features, including advanced analytics and detailed usage reports.",
    targetAudience: "Growing Teams, Medium Businesses",
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
      "Team Channels"
    ],
    button: { text: "Contact Sales", link: "/contact-sales" },
    popular: false,
    details: "A fully customized plan with the highest level of support and enterprise-grade security. Contact us for a quote.",
    targetAudience: "Large Organizations, Enterprises",
  },
];

const featuresList = [
  "Instant Messaging", 
  "HD Video Calls", 
  "Team Channels", 
  "2FA Authentication", 
  "Custom URL", 
  "Message Retention", 
  "File Upload", 
  "3rd Party Integration & API", 
  "Audit Log"
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary dark:from-background-dark dark:to-secondary-dark">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="font-rubik text-4xl sm:text-6xl font-bold mb-6">
          Our Pricing Plans
        </h1>
        <p className="text-lg font-mono sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose the best plan that fits your team. Flexible pricing for every
          stage of your journey.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                plan.popular
                  ? "bg-blue-500 text-white dark:bg-blue-600"
                  : "bg-white text-gray-800 dark:bg-card dark:text-white"
              }`}
            >
              {plan.popular && (
                <span className="block text-sm font-semibold bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-lg font-medium mb-6">{plan.price}</p>
              <p className="mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-4 text-muted-foreground">{plan.details}</p>
              <p className="text-sm font-bold text-muted-foreground">{`Best for: ${plan.targetAudience}`}</p>
              <Link href={plan.button.link}>
                <button
                  className={`w-full py-2 rounded-md text-sm font-medium transition ${
                    plan.popular
                      ? "bg-white text-blue-500 hover:bg-gray-100"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {plan.button.text}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Plan Comparison Table */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 text-left">
            <thead>
              <tr>
                <th className="border-b px-6 py-3 font-semibold">Feature</th>
                {plans.map((plan, index) => (
                  <th key={index} className="border-b px-6 py-3 font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresList.map((feature, idx) => (
                <tr key={idx}>
                  <td className="border-b px-6 py-3">{feature}</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="border-b px-6 py-3">
                      {feature === "2FA Authentication" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "Custom URL" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "Message Retention" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "File Upload" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "3rd Party Integration & API" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "Audit Log" && (plan.name === "Free" ? "❌" : plan.name === "Startup" ? "❌" : "✔️")}
                      {feature === "Instant Messaging" && (plan.name === "Free" ? "✔️" : "✔️")}
                      {feature === "HD Video Calls" && (plan.name === "Free" ? "✔️" : "✔️")}
                      {feature === "Team Channels" && (plan.name === "Free" ? "✔️" : "✔️")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Our Customers Are Saying</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonials would be displayed here */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-6">Join thousands of teams who trust TeamerHQ to power their collaboration.</p>
        <Link href="/signup">
          <Button size="lg" className="gap-2">Sign Up Now</Button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

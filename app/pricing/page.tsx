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
      "Team Channels", 
      "Screen Sharing"
    ],
    button: { text: "Get Started", link: "/signup" },
    popular: false,
    details: "Perfect for personal use or testing out the core features of the platform. Upgrade when you're ready to scale.",
    targetAudience: "Freelancers, Students, Personal Projects",
  },
  {
    name: "Startup",
    price: "$25.99/month",
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
      "Team Channels", 
      "Screen Sharing"
    ],
    button: { text: "Start Trial", link: "/signup" },
    popular: true,
    details: "For growing teams that need more collaboration tools. Includes priority support to ensure you're never left in the dark.",
    targetAudience: "Small Teams, Startups, Entrepreneurs",
  },
  {
    name: "Plus",
    price: "$99.99/month",
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
      "Screen Sharing"
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
      "Team Channels", 
      "Screen Sharing"
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
  "Audit Log", 
  "Screen Sharing"
];

const testimonials = [
  {
    name: "John Doe",
    role: "Founder at TechStartup",
    message: "TeamerHQ has helped us streamline communication and increase team productivity. The Startup plan was perfect for our growing team!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Manager at InnovateInc",
    message: "The Plus plan with advanced analytics allowed us to better track our team's performance and make smarter decisions.",
    rating: 5,
  },
  {
    name: "Samuel Green",
    role: "Lead Developer at WebSolutions",
    message: "The Free plan was exactly what I needed to test the platform. Now we're upgrading to the Startup plan as our team grows.",
    rating: 4,
  },
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
                      {feature === "Screen Sharing" && (plan.features.includes("Screen Sharing") ? "✔️" : "❌")}
                      {feature === "2FA Authentication" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "Custom URL" && (plan.name === "Free" ? "❌" : plan.name === "Startup" ? "❌" : "✔️")}
                      {feature === "Message Retention" && (plan.name === "Free" ? "3 Months" : "Unlimited")}
                      {feature === "File Upload" && (plan.name === "Free" ? "5GB" : plan.name === "Startup" ? "50GB" : plan.name === "Plus" ? "100GB" : "Unlimited")}
                      {feature === "3rd Party Integration & API" && (plan.name === "Free" ? "❌" : "✔️")}
                      {feature === "Audit Log" && (plan.name === "Free" ? "❌" : plan.name === "Startup" ? "❌" : "✔️")}
                      {feature === "Instant Messaging" && "✔️"}
                      {feature === "HD Video Calls" && (plan.name === "Free" ? "2 Members" : plan.name === "Startup" ? "20 Members" : plan.name === "Plus" ? "50 Members" : "Unlimited")}
                      {feature === "Team Channels" && (plan.name === "Free" ? "5 Channels" : plan.name === "Startup" ? "15 Channels" : plan.name === "Plus" ? "50 Channels" : "Unlimited")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Updated Customer Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What Our Customers Are Saying
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white dark:bg-card rounded-lg shadow-lg">
              <div className="mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`inline-block text-xl ${
                      starIndex < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "{testimonial.message}"
              </p>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          ))}
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

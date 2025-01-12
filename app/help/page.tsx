import { ArrowRight, MessageSquare, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HelpCenter() {
  const popularTopics = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Messaging Basics",
      description: "Learn how to send messages, use threads, and format your text",
      href: "/help/messaging",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Channel Management",
      description: "Create and organize channels for your team communication",
      href: "/help/channels",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Quick Actions",
      description: "Boost your productivity with keyboard shortcuts and commands",
      href: "/help/quick-actions",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          How can we help you?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to know about using TeamerHQ. Can't find what you're looking for?{" "}
          <Link href="/help/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            Contact Support
          </Link>
        </p>
      </div>

      {/* Popular topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {popularTopics.map((topic, i) => (
          <Link
            key={i}
            href={topic.href}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                {topic.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{topic.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Getting Started Guide",
            "Account Settings",
            "Workspace Administration",
            "Security & Privacy",
            "Integrations",
            "Billing & Plans",
          ].map((link, i) => (
            <Link
              key={i}
              href={`/help/${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 group"
            >
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                {link}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Contact support */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Still need help?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Our support team is available 24/7 to assist you with any questions.
        </p>
        <Link
          href="/help/contact"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
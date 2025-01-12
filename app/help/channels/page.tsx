"use client";

import { ArrowLeft, Hash, Users, Settings, Bell, Shield } from "lucide-react";
import Link from "next/link";

export default function ChannelsHelp() {
  const channelGuides = [
    {
      icon: <Hash className="w-5 h-5" />,
      title: "Creating Channels",
      description: "Learn how to create and set up new channels for your team",
      href: "/help/channels/create",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Managing Members",
      description: "Add, remove, and manage channel permissions",
      href: "/help/channels/members",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Channel Settings",
      description: "Customize channel notifications, privacy, and more",
      href: "/help/channels/settings",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <Link
        href="/help"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Help Center
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Channel Management
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Everything you need to know about creating and managing channels in TeamerHQ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {channelGuides.map((guide, i) => (
          <Link
            key={i}
            href={guide.href}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                {guide.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I create a private channel?",
              a: "To create a private channel, click the + button next to Channels in the sidebar, select 'Private Channel', and follow the setup instructions.",
            },
            {
              q: "Can I convert a public channel to private?",
              a: "Yes, channel privacy can be changed in channel settings. Note that this action requires admin permissions.",
            },
            {
              q: "How do I archive a channel?",
              a: "Channel archiving is available in channel settings. Archived channels are read-only and can be unarchived later if needed.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Need more help with channels?
        </h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
          >
            Contact Support
          </Link>
          <Link
            href="/help/channels/tutorial"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
          >
            Watch Tutorial
          </Link>
        </div>
      </div>
    </div>
  );
}
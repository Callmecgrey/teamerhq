"use client";

import {
  AlertCircle,
  Wifi,
  FileWarning,
  Bell,
  RefreshCw,
  Lock,
  Zap,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const commonIssues = [
  {
    title: "Connection Problems",
    icon: Wifi,
    description: "Issues related to connectivity and syncing",
    problems: [
      {
        issue: "Messages not sending",
        solution: "Check your internet connection and try refreshing. Messages will be sent automatically once connection is restored.",
        quickFix: "Click the refresh icon or press ⌘R to reload",
      },
      {
        issue: "App appears offline",
        solution: "TeamerHQ will automatically attempt to reconnect. Check your network settings if the issue persists.",
        quickFix: "Wait 30 seconds for auto-reconnect or manually refresh",
      },
      {
        issue: "Real-time updates not working",
        solution: "This usually indicates a WebSocket connection issue. The app will automatically attempt to re-establish the connection.",
        quickFix: "Check your firewall settings or VPN configuration",
      },
    ],
  },
  {
    title: "Notification Issues",
    icon: Bell,
    description: "Problems with alerts and notifications",
    problems: [
      {
        issue: "Missing notifications",
        solution: "Verify notification permissions in your browser and system settings. Check your notification preferences in TeamerHQ.",
        quickFix: "Go to Settings > Notifications to review preferences",
      },
      {
        issue: "Too many notifications",
        solution: "Customize your notification settings per channel or conversation. You can mute specific channels or set up Do Not Disturb.",
        quickFix: "Right-click channel > Notification preferences",
      },
      {
        issue: "Delayed notifications",
        solution: "This can be caused by system settings or power saving modes. Ensure TeamerHQ is not restricted in the background.",
        quickFix: "Add TeamerHQ to your browser's allowed sites list",
      },
    ],
  },
  {
    title: "File Sharing",
    icon: FileWarning,
    description: "Common file upload and sharing problems",
    problems: [
      {
        issue: "Upload fails",
        solution: "Check file size limits (max 100MB) and ensure you have a stable connection. Supported formats are listed in our file guide.",
        quickFix: "Try compressing large files before upload",
      },
      {
        issue: "Cannot preview files",
        solution: "Some file types require specific permissions or plugins. Ensure your browser is up to date.",
        quickFix: "Download the file locally if preview fails",
      },
      {
        issue: "Missing attachments",
        solution: "Files are cached locally. Clear your browser cache if files appear missing but were previously accessible.",
        quickFix: "Press ⌘⇧R for a hard refresh",
      },
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    description: "App speed and resource usage issues",
    problems: [
      {
        issue: "App running slowly",
        solution: "Large chat histories can impact performance. Try clearing your local cache or using the lite version for older devices.",
        quickFix: "Clear cache in Settings > Advanced",
      },
      {
        issue: "High memory usage",
        solution: "Multiple open channels and media-heavy chats can consume memory. Try closing unused channels.",
        quickFix: "Click 'Optimize Performance' in settings",
      },
      {
        issue: "Search is slow",
        solution: "Large message histories may take longer to search. Use specific search filters to improve speed.",
        quickFix: "Narrow search with from: and in: filters",
      },
    ],
  },
];

const quickTroubleshooting = [
  {
    title: "Check Status Page",
    icon: Database,
    description: "View real-time system status and any ongoing incidents",
    link: "status.teamerhq.com",
  },
  {
    title: "Reset App Settings",
    icon: RefreshCw,
    description: "Restore default settings without losing messages",
    link: "/settings/reset",
  },
  {
    title: "Permission Issues",
    icon: Lock,
    description: "Review and update your workspace permissions",
    link: "/settings/permissions",
  },
  {
    title: "Network Test",
    icon: Wifi,
    description: "Run a connection test to identify issues",
    link: "/utilities/network-test",
  },
];

export default function CommonIssues() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Common Issues & Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Quick solutions to common problems you might encounter in TeamerHQ.
        </p>
      </div>

      {/* Alert Banner */}
      <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Having an urgent issue? Check our{" "}
            <a href="status.teamerhq.com" className="underline font-medium">
              Status Page
            </a>{" "}
            or contact{" "}
            <a href="/help/contact" className="underline font-medium">
              Support
            </a>
            .
          </p>
        </div>
      </div>

      {/* Main Issues Section */}
      <div className="space-y-8 mb-16">
        {commonIssues.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                  <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {category.problems.map((problem, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {problem.issue}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {problem.solution}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        Quick fix:
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {problem.quickFix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Troubleshooting Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Quick Troubleshooting Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickTroubleshooting.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.a
                href={tool.link}
                key={tool.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
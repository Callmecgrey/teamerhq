"use client";

import {
  Building2,
  Palette,
  Settings,
  Users,
  Shield,
  Workflow,
  Globe,
  MessageSquare,
  FileCheck,
  Zap,
  Boxes,
  Bell,
  Bot,
  Calendar,
  Clock,
  Cloud,
  Code,
  Database,
  Key,
  LayoutGrid
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const setupSteps = [
  {
    title: "Basic Configuration",
    description: "Set up the fundamental aspects of your workspace.",
    icon: Building2,
    tasks: [
      {
        title: "Workspace Name & URL",
        description: "Choose a unique name and URL for your workspace",
        steps: [
          "Select a clear, recognizable workspace name",
          "Customize your workspace URL (e.g., company-name.teamerhq.com)",
          "Add a brief workspace description",
          "Set workspace timezone and language preferences"
        ]
      },
      {
        title: "Branding",
        description: "Add your company's visual identity",
        steps: [
          "Upload your company logo (recommended size: 256x256px)",
          "Set a workspace avatar for notifications",
          "Choose brand colors for your workspace theme",
          "Customize loading screens and system messages"
        ]
      },
      {
        title: "Default Preferences",
        description: "Set workspace-wide defaults",
        steps: [
          "Configure default notification settings",
          "Set up default channel categories",
          "Define workspace-wide message retention rules",
          "Configure default file sharing permissions"
        ]
      }
    ]
  },
  {
    title: "Team Structure",
    description: "Organize your team and set up departments.",
    icon: Users,
    tasks: [
      {
        title: "Department Setup",
        description: "Create and organize departments",
        steps: [
          "Define main departments (e.g., Engineering, Marketing)",
          "Set department leads and managers",
          "Create sub-teams within departments",
          "Configure department-specific channels"
        ]
      },
      {
        title: "Role Configuration",
        description: "Define roles and permissions",
        steps: [
          "Set up role hierarchies",
          "Configure role-based permissions",
          "Create custom roles for specific needs",
          "Set up approval workflows"
        ]
      },
      {
        title: "User Management",
        description: "Configure user-related settings",
        steps: [
          "Set up user onboarding workflows",
          "Define user profile requirements",
          "Configure user groups and access levels",
          "Set up user activity monitoring"
        ]
      }
    ]
  },
  {
    title: "Security & Compliance",
    description: "Configure security settings and compliance rules.",
    icon: Shield,
    tasks: [
      {
        title: "Security Settings",
        description: "Set up security measures",
        steps: [
          "Configure 2FA requirements",
          "Set password policies",
          "Define session timeout rules",
          "Set up IP allowlisting"
        ]
      },
      {
        title: "Compliance Rules",
        description: "Establish compliance guidelines",
        steps: [
          "Set up data retention policies",
          "Configure audit logging",
          "Define content moderation rules",
          "Set up compliance reporting"
        ]
      },
      {
        title: "Data Protection",
        description: "Configure data security measures",
        steps: [
          "Set up data backup schedules",
          "Configure encryption settings",
          "Define data access policies",
          "Set up data export controls"
        ]
      }
    ]
  },
  {
    title: "Integrations & Automation",
    description: "Set up tools and automated workflows.",
    icon: Workflow,
    tasks: [
      {
        title: "Tool Integration",
        description: "Connect essential tools",
        steps: [
          "Set up SSO integration",
          "Connect project management tools",
          "Configure calendar integration",
          "Set up file storage services"
        ]
      },
      {
        title: "Workflow Automation",
        description: "Create automated processes",
        steps: [
          "Set up automated welcome messages",
          "Configure notification workflows",
          "Create custom bot commands",
          "Set up scheduled tasks"
        ]
      },
      {
        title: "Analytics Setup",
        description: "Configure tracking and reporting",
        steps: [
          "Set up usage analytics",
          "Configure custom reports",
          "Set up automated reporting",
          "Define KPI tracking"
        ]
      }
    ]
  }
];

const quickSetup = [
  {
    title: "Global Settings",
    description: "Configure workspace-wide preferences",
    icon: Globe,
    link: "/settings/global"
  },
  {
    title: "Communication Rules",
    description: "Set messaging and channel guidelines",
    icon: MessageSquare,
    link: "/settings/communication"
  },
  {
    title: "File Management",
    description: "Configure file sharing and storage",
    icon: FileCheck,
    link: "/settings/files"
  },
  {
    title: "Automation",
    description: "Set up workflow automations",
    icon: Bot,
    link: "/settings/automation"
  },
  {
    title: "API Access",
    description: "Manage API keys and webhooks",
    icon: Code,
    link: "/settings/api"
  },
  {
    title: "Backup & Recovery",
    description: "Configure data backup settings",
    icon: Database,
    link: "/settings/backup"
  }
];

const setupProgress = [
  { step: "Basic Setup", status: "required" },
  { step: "Team Structure", status: "required" },
  { step: "Security", status: "required" },
  { step: "Integrations", status: "optional" },
  { step: "Customization", status: "optional" }
];

export default function WorkspaceSetup() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Setting Up Your Workspace
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Configure your TeamerHQ workspace to match your organization's needs. Follow this guide to set up everything from basic branding to advanced security settings.
        </p>
      </div>

      {/* Setup Progress */}
      <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Setup Progress</h2>
        <div className="space-y-3">
          {setupProgress.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  item.status === 'required' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <span className="text-sm font-medium">{index + 1}</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item.step}</span>
              </div>
              <span className={`text-sm ${
                item.status === 'required' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {item.status === 'required' ? 'Required' : 'Optional'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Steps */}
      <div className="space-y-16 mb-16">
        {setupSteps.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        {index + 1}. {section.title}
                      </h2>
                      {index < 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {section.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                        >
                          <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {task.description}
                          </p>
                          <ul className="space-y-2">
                            {task.steps.map((step, stepIndex) => (
                              <li
                                key={stepIndex}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="mt-1">•</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Setup Tips */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Additional Configuration Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickSetup.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                href={item.link}
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Ready to customize further?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Explore advanced settings and integrations to enhance your workspace.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/help/owner/integrations"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Integration Guide
          </Link>
          <Link
            href="/help/owner/customization"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Advanced Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
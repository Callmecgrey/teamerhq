"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Check } from "lucide-react";

export default function EachAppsDetails({ app }: { app: any }) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* App Overview */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-lg">
                <Calendar className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Calendar Pro</h2>
                <p className="text-gray-500 dark:text-gray-400">Advanced calendar integration</p>
              </div>
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">
              Connect
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <Clock className="h-5 w-5 text-violet-500 dark:text-violet-400 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">Smart Scheduling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI-powered meeting scheduling</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <Users className="h-5 w-5 text-violet-500 dark:text-violet-400 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">Team Calendar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Shared team availability</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <Check className="h-5 w-5 text-violet-500 dark:text-violet-400 mb-2" />
              <h3 className="font-medium text-gray-900 dark:text-white">Integration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Works with popular tools</p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3>About Calendar Pro</h3>
            <p>
              Calendar Pro is an advanced calendar integration that helps teams schedule meetings
              efficiently. With smart scheduling features and team availability management,
              it's the perfect solution for modern workplaces.
            </p>
            
            <h3>Key Features</h3>
            <ul>
              <li>AI-powered scheduling assistant</li>
              <li>Team availability management</li>
              <li>Multiple calendar integration</li>
              <li>Custom booking pages</li>
              <li>Automated reminders</li>
            </ul>

            <h3>Security & Compliance</h3>
            <p>
              Calendar Pro is SOC 2 Type II certified and GDPR compliant. Your data is encrypted
              at rest and in transit, ensuring the highest level of security for your calendar
              information.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
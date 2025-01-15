"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Video, Star, ArrowRight } from "lucide-react";

const featuredApps = [
  {
    name: "Calendar Pro",
    description: "Advanced calendar integration with smart scheduling",
    icon: Calendar,
    category: "Calendar & Scheduling",
    rating: 4.8,
    reviews: 1250,
  },
  {
    name: "Team Chat",
    description: "Real-time messaging and collaboration platform",
    icon: MessageSquare,
    category: "Communication",
    rating: 4.9,
    reviews: 2300,
  },
  {
    name: "Video Meet",
    description: "High-quality video conferencing solution",
    icon: Video,
    category: "Video Conferencing",
    rating: 4.7,
    reviews: 980,
  },
];

export default function IntegrationContent() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Featured Apps */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Featured Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredApps.map((app) => (
              <div
                key={app.name}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-violet-100 dark:bg-violet-900/50 rounded-lg">
                      <app.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{app.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{app.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">{app.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{app.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{app.reviews} reviews</span>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Apps */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular Apps</h2>
          {/* Add similar grid of popular apps */}
        </section>

        {/* Recently Added */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recently Added</h2>
          {/* Add grid of recently added apps */}
        </section>
      </div>
    </div>
  );
}
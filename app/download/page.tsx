"use client";

import {
  Apple,
  Chrome,
  Download,
  Laptop,
  Monitor,
  Smartphone,
  AppWindow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const platforms = [
  {
    title: "iPhone",
    icon: Apple,
    description: "Download TeamerHQ for iOS devices",
    buttonText: "Download on App Store",
    link: "https://apps.apple.com/app/teamerhq",
    version: "v2.1.0",
    size: "45.2 MB",
  },
  {
    title: "Android",
    icon: Smartphone,
    description: "Download TeamerHQ for Android devices",
    buttonText: "Get it on Google Play",
    link: "https://play.google.com/store/apps/details?id=com.teamerhq",
    version: "v2.1.0",
    size: "42.8 MB",
  },
  {
    title: "macOS",
    icon: Laptop,
    description: "Native desktop app for macOS Apple Silicon",
    buttonText: "Download for Mac",
    link: "https://download.teamerhq.com/mac",
    version: "v2.1.0",
    size: "128.5 MB",
  },
  {
    title: "Windows",
    icon: AppWindow,
    description: "Native desktop app for Windows MS Version",
    buttonText: "Download for Windows",
    link: "https://download.teamerhq.com/windows",
    version: "v2.1.0",
    size: "125.2 MB",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative text-center h-56">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20">
            <Download className="w-64 h-64" />
          </div>
          <div className="relative">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 sm:text-5xl md:text-6xl">
              Download TeamerHQ
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
              Access your workspace from any device. Stay connected with your team
              whether you're at your desk or on the go.
            </p>
          </div>
        </div>

        {/* Web Version Card */}
        <div className="mt-12">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/90 rounded-xl shadow-inner">
                    <Chrome className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-white">
                      Use TeamerHQ in your browser
                    </h3>
                    <p className="mt-1 text-blue-50">
                      No download required. Access all features instantly.
                    </p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="mt-4 sm:mt-0 bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = "https://app.teamerhq.com"}
                >
                  Launch Web App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Grid */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <Card 
              key={platform.title} 
              className="group relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="p-3 w-fit bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl shadow-inner">
                  <platform.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="mt-4 text-xl">{platform.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full">
                      {platform.version}
                    </span>
                    <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      {platform.size}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white shadow-md"
                  onClick={() => window.location.href = platform.link}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {platform.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Requirements */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            System Requirements
          </h2>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Monitor,
                title: "Web Browser",
                requirements: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
              },
              {
                icon: Apple,
                title: "iOS",
                requirements: ["iOS 14.0 or later", "Compatible with iPhone and iPad"],
              },
              {
                icon: Smartphone,
                title: "Android",
                requirements: ["Android 8.0 or later", "2GB RAM minimum"],
              },
              {
                icon: Laptop,
                title: "Desktop",
                requirements: ["Windows 10/11", "macOS 10.15+", "4GB RAM minimum"],
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-3 w-fit bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl shadow-inner">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {item.requirements.map((req, i) => (
                    <li 
                      key={i}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 mr-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
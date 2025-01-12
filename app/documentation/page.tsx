"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Code2, Search, Copy, CheckCircle2, Terminal, Zap, Shield, Database } from "lucide-react";

// API endpoints data
const endpoints = [
  {
    category: "Authentication",
    items: [
      {
        method: "POST",
        path: "/api/auth/login",
        description: "Authenticate user and retrieve JWT token",
        request: {
          body: {
            email: "string",
            password: "string"
          }
        },
        response: {
          token: "string",
          user: {
            id: "string",
            email: "string",
            name: "string"
          }
        }
      },
      {
        method: "POST",
        path: "/api/auth/register",
        description: "Register a new user account",
        request: {
          body: {
            email: "string",
            password: "string",
            name: "string"
          }
        },
        response: {
          id: "string",
          email: "string",
          name: "string"
        }
      }
    ]
  },
  {
    category: "Users",
    items: [
      {
        method: "GET",
        path: "/api/users",
        description: "Retrieve a list of users",
        request: {
          query: {
            page: "number",
            limit: "number"
          }
        },
        response: {
          users: "array",
          total: "number",
          page: "number"
        }
      },
      {
        method: "GET",
        path: "/api/users/:id",
        description: "Get user details by ID",
        request: {
          params: {
            id: "string"
          }
        },
        response: {
          id: "string",
          email: "string",
          name: "string",
          created_at: "string"
        }
      }
    ]
  },
  {
    category: "Data",
    items: [
      {
        method: "POST",
        path: "/api/data/sync",
        description: "Synchronize data with external sources",
        request: {
          body: {
            source: "string",
            options: "object"
          }
        },
        response: {
          status: "string",
          synced_items: "number",
          timestamp: "string"
        }
      }
    ]
  }
];

const features = [
  {
    icon: Terminal,
    title: "RESTful API",
    description: "Modern REST API with JSON responses"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "WebSocket support for live data"
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "JWT authentication & HTTPS"
  },
  {
    icon: Database,
    title: "Scalable",
    description: "Built for high performance"
  }
];

export default function ApiReference() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const filteredEndpoints = endpoints.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <main className="container max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-2xl inline-block mb-6"
          >
            <Code2 className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-6"
          >
            API Reference
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive documentation for our REST API endpoints
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white dark:bg-gray-800"
          />
        </div>

        {/* API Documentation */}
        <div className="grid gap-8">
          {filteredEndpoints.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h2>
              <div className="grid gap-6">
                {category.items.map((endpoint, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn(
                            "px-2 py-1 rounded-md text-sm font-medium",
                            {
                              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": endpoint.method === "GET",
                              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400": endpoint.method === "POST",
                              "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400": endpoint.method === "PUT",
                              "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": endpoint.method === "DELETE"
                            }
                          )}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(endpoint.path)}
                            className="h-8 px-2"
                          >
                            {copiedEndpoint === endpoint.path ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-500" />
                            )}
                          </Button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {endpoint.description}
                        </p>
                      </div>
                    </div>

                    <Tabs defaultValue="request" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="request">Request</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request">
                        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">
                            {JSON.stringify(endpoint.request, null, 2)}
                          </code>
                        </pre>
                      </TabsContent>
                      <TabsContent value="response">
                        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">
                            {JSON.stringify(endpoint.response, null, 2)}
                          </code>
                        </pre>
                      </TabsContent>
                    </Tabs>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
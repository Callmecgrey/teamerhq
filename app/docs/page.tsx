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
    id: "authentication",
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
    id: "users",
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
    id: "data",
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
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 rounded-2xl inline-block mb-8"
        >
          <Code2 className="w-10 h-10 text-white" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-6"
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
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
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 py-6 text-lg bg-white dark:bg-gray-800 border-2 focus:border-violet-500 dark:focus:border-violet-400"
          />
        </div>
      </div>

      {/* API Documentation */}
      <div className="space-y-12">
        {filteredEndpoints.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            id={category.id}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b pb-4 dark:border-gray-700">
              {category.category}
            </h2>
            <div className="grid gap-8">
              {category.items.map((endpoint, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className={cn(
                          "px-3 py-1.5 rounded-md text-sm font-medium",
                          {
                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": endpoint.method === "GET",
                            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400": endpoint.method === "POST",
                            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400": endpoint.method === "PUT",
                            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": endpoint.method === "DELETE"
                          }
                        )}>
                          {endpoint.method}
                        </span>
                        <code className="text-base bg-gray-100 dark:bg-gray-900 px-4 py-1.5 rounded-md font-mono">
                          {endpoint.path}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopy(endpoint.path)}
                          className="h-8 px-3"
                        >
                          {copiedEndpoint === endpoint.path ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>

                  <Tabs defaultValue="request" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="request" className="text-base px-6">Request</TabsTrigger>
                      <TabsTrigger value="response" className="text-base px-6">Response</TabsTrigger>
                    </TabsList>
                    <TabsContent value="request">
                      <pre className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono">
                          {JSON.stringify(endpoint.request, null, 2)}
                        </code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="response">
                      <pre className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono">
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
    </div>
  );
}
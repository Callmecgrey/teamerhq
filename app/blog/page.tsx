"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Remote Work Collaboration",
    excerpt: "Discover how TeamerHQ is shaping the future of remote work with innovative collaboration tools.",
    category: "Product",
    author: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    date: "April 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=400",
    featured: true
  },
  {
    id: 2,
    title: "Building a Culture of Collaboration",
    excerpt: "Learn how successful teams use TeamerHQ to foster a culture of open communication and collaboration.",
    category: "Culture",
    author: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    date: "April 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 3,
    title: "Security Best Practices for Remote Teams",
    excerpt: "Essential security measures every remote team should implement when using collaboration tools.",
    category: "Security",
    author: {
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    },
    date: "April 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 4,
    title: "Maximizing Productivity with TeamerHQ",
    excerpt: "Tips and tricks to boost your team's productivity using TeamerHQ's features.",
    category: "Productivity",
    author: {
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    date: "April 1, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

const categories = ["All", "Product", "Culture", "Security", "Productivity"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:3rem_3rem]" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                TeamerHQ Blog
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-xl text-blue-100"
              >
                Insights, updates, and stories about team collaboration
              </motion.p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={filteredPosts.find(post => post.featured)?.image}
                  alt="Featured post"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-2xl font-bold mb-2">
                  {filteredPosts.find(post => post.featured)?.title}
                </h2>
                <p className="text-gray-200 mb-4">
                  {filteredPosts.find(post => post.featured)?.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={filteredPosts.find(post => post.featured)?.author.image}
                    alt={filteredPosts.find(post => post.featured)?.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium">
                      {filteredPosts.find(post => post.featured)?.author.name}
                    </div>
                    <div className="text-sm text-gray-300">
                      {filteredPosts.find(post => post.featured)?.date}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-sm">
                        <div className="font-medium text-gray-900 dark:text-white">
                          {post.author.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
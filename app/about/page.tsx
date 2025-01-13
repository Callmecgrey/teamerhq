"use client";

import { motion } from "framer-motion";
import { Users, Globe, Award, Rocket, Heart, Target } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const stats = [
  { label: "Team Members", value: "50+" },
  { label: "Countries", value: "20+" },
  { label: "Active Users", value: "100K+" },
  { label: "Messages Sent", value: "10M+" },
];

const values = [
  {
    icon: Heart,
    title: "User-Centric",
    description: "We put our users first in everything we build, ensuring an intuitive and delightful experience."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Constantly pushing boundaries to create cutting-edge collaboration solutions."
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Building tools that bring teams together, regardless of their location or background."
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Striving for the highest quality in our product and customer service."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Former VP of Product at Slack, passionate about building tools that transform how teams work together."
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Ex-Google engineer, focused on creating scalable and secure communication platforms."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Award-winning designer with 10+ years of experience in creating intuitive user experiences."
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Seasoned engineering leader, previously built infrastructure at Microsoft and Amazon."
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:3rem_3rem]" />
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Building the Future of Team Collaboration
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
              >
                We're on a mission to transform how teams communicate, collaborate, and create together.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                The people behind TeamerHQ
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-40 h-40 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
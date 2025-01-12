"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import VideoPlayer to avoid SSR issues
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

const features = [
  "Team collaboration tools overview",
  "Security and compliance features",
  "Custom workflows demonstration",
  "Integration capabilities",
  "Analytics and reporting",
  "Enterprise administration",
];

const demoVideos = [
  {
    title: "Quick Platform Overview",
    duration: "5 mins",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4", // Example video URL
  },
  {
    title: "Security Deep Dive",
    duration: "8 mins",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4", // Example video URL
  },
  {
    title: "Enterprise Features",
    duration: "10 mins",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4", // Example video URL
  }
];

export default function DemoPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof demoVideos[0] | null>(null);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
              >
                See TeamerHQ in Action
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Watch our product demos to see how TeamerHQ can transform your team's collaboration
              </motion.p>
            </div>
          </div>
        </section>

        {/* Demo Videos Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {demoVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div 
                    className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-white text-violet-600 hover:bg-violet-100"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Duration: {video.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 bg-white/50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                What You'll Learn
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjggNjZMMCA1MEwyOCAzNGwyOCAxNkwyOCA2NnpNMjggMzRMMCA1MEwyOCA2NmwyOC0xNkwyOCAzNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Team?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Schedule a personalized demo with our product specialists
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/schedule-demo">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-purple-50 w-full sm:w-auto"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Demo
                    </Button>
                  </Link>
                  <Link href="/contact-sales">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Contact Sales
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          {selectedVideo && (
            <VideoPlayer
              options={{
                autoplay: true,
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{
                  src: selectedVideo.videoUrl,
                  type: 'video/mp4'
                }]
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
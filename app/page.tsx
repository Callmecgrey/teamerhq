"use client";

import { 
  ArrowRight, MessageSquare, Video, ScreenShare, Users2, Shield, Bot,
  Slack, Github, Trello, FileText, Figma, LayoutGrid, GitPullRequest,
} from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Messaging",
    description: "Instant messaging with threaded conversations, reactions, and file sharing.",
    color: "from-blue-500 to-cyan-500",
    subFeatures: [
      {
        title: "Thread Discussions",
        description: "Keep conversations organized with threaded replies"
      },
      {
        title: "Smart Notifications",
        description: "Get notified only about what matters to you"
      }
    ]
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description: "Crystal clear video meetings with screen sharing and recording capabilities.",
    color: "from-purple-500 to-pink-500",
    subFeatures: [
      {
        title: "4K Quality",
        description: "Ultra-high definition video for crystal clear calls"
      },
      {
        title: "Cloud Recording",
        description: "Record and store meetings securely in the cloud"
      }
    ]
  },
  {
    icon: ScreenShare,
    title: "Screen Sharing",
    description: "Share your screen with one click for seamless collaboration.",
    color: "from-orange-500 to-red-500",
    subFeatures: [
      {
        title: "Multi-Monitor",
        description: "Share any screen or specific application window"
      },
      {
        title: "Remote Control",
        description: "Allow teammates to control your screen when needed"
      }
    ]
  },
  {
    icon: Users2,
    title: "Team Channels",
    description: "Organize conversations by teams, projects, or topics.",
    color: "from-green-500 to-emerald-500",
    subFeatures: [
      {
        title: "Custom Groups",
        description: "Create channels for teams, projects, or topics"
      },
      {
        title: "Access Control",
        description: "Manage permissions and roles for each channel"
      }
    ]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and 2FA.",
    color: "from-indigo-500 to-violet-500",
    subFeatures: [
      {
        title: "End-to-End Encryption",
        description: "Military-grade encryption for all communications"
      },
      {
        title: "Advanced 2FA",
        description: "Multi-factor authentication with biometric support"
      }
    ]
  },
  {
    icon: Bot,
    title: "TeamerAI",
    description: "AI-powered assistant to boost your team's productivity.",
    color: "from-yellow-500 to-amber-500",
    subFeatures: [
      {
        title: "Smart Automation",
        description: "Automate routine tasks with AI assistance"
      },
      {
        title: "Insights & Analytics",
        description: "Get AI-powered insights about team performance"
      }
    ]
  }
];

const tools = [
  { name: 'Slack', icon: Slack },
  { name: 'GitHub', icon: Github },
  { name: 'Trello', icon: LayoutGrid },
  { name: 'Notion', icon: FileText },
  { name: 'Figma', icon: Figma },
  { name: 'Asana', icon: LayoutGrid },
  { name: 'Jira', icon: GitPullRequest },
  { name: 'Zoom', icon: Video }
];

const testimonials = [
  {
    quote: "This platform has transformed how our team collaborates. The integration capabilities are game-changing.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    quote: "The best team collaboration tool we've used. The UI is intuitive and the features are exactly what we needed.",
    author: "Michael Chen",
    role: "Product Manager at StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    quote: "TeamerAI has significantly improved our productivity. It's like having an extra team member.",
    author: "Emily Rodriguez",
    role: "Team Lead at InnovateCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face"
  }
];

type SubFeature = {
  title: string;
  description: string;
};

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  subFeatures: SubFeature[];
};

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left"
        >
          <h3 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            {feature.title}
          </h3>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${feature.color} mb-6 relative z-10`}
            >
              <feature.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </motion.div>

            <div
              className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 blur-3xl -z-10 rounded-full transform -translate-y-1/2`}
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-lg"
            >
              {feature.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {feature.subFeatures.map((subFeature, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                >
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-2 sm:mb-3`}
                  >
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {subFeature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {subFeature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic text-sm sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="absolute -bottom-2 left-6 w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-gray-800 rotate-45 transform origin-center"></div>
    </motion.div>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="fixed left-0 right-0 top-0 z-50 bg-white dark:bg-gray-900 shadow">
        <Header />
      </div>
      
      {/* Added padding to account for fixed header */}
      <div className="pt-16"></div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      >
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            >
              Where Teams Come Together to Build Great Things
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mt-6 text-xl text-gray-600 dark:text-gray-400"
            >
              The all-in-one collaboration platform that brings your team's communication, 
              projects, and ideas into one seamless experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center"
            >
              <div className="flex gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 px-4 text-lg font-medium rounded-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 space-y-4"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                TRUSTED BY TEAMS AT
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {['Microsoft', 'Google', 'Airbnb', 'Netflix', 'Uber'].map((company) => (
                  <span key={company} className="text-xl font-semibold text-gray-400 dark:text-gray-600">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Showcase */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="text-center py-20">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Powerful Features for Modern Teams
          </h2>
        </div>
        <div className="min-h-screen" style={{ height: `${features.length * 100}vh` }}>
          {features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="h-[600px] py-20 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/30 overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Connects With Your Favorite Tools
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Seamlessly integrate with the tools your team already loves
            </p>
          </div>
        </div>
        <Marquee
          gradient={false}
          speed={30}
          className="py-8"
        >
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="mx-8 px-8 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg min-w-[200px] flex items-center justify-center gap-3"
            >
              <tool.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <p className="font-medium text-gray-900 dark:text-gray-100">{tool.name}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl text-center"
          >
            <h2 className="text-3xl font-bold text-white">
              Ready to Transform Your Team's Collaboration?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of teams already using our platform
            </p>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
              <a
                href="/schedule-demo"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 py-2 px-4 text-lg font-medium rounded-lg"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
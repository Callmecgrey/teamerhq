"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { CalendarDays, Clock, User, Building2, ArrowRight, Check, Shield, Users, Zap, Mail } from "lucide-react";

const steps = [
  { id: "details", title: "Your Details" },
  { id: "datetime", title: "Date & Time" },
  { id: "verify", title: "Verify Email" },
  { id: "confirmation", title: "Confirmation" },
];

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR, and HIPAA compliant infrastructure"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 priority support with dedicated assistance"
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Custom API for team success"
  }
];

// Available time slots with timezone
const timeSlots = [
  { time: "09:00", period: "AM" },
  { time: "10:00", period: "AM" },
  { time: "11:00", period: "AM" },
  { time: "01:00", period: "PM" },
  { time: "02:00", period: "PM" },
  { time: "03:00", period: "PM" },
];

export default function ScheduleDemo() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("details");
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [timeZone, setTimeZone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
  });

  useEffect(() => {
    // Get user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(userTimeZone);
  }, []);

  useEffect(() => {
    if (currentStep === "confirmation") {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentStep, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const stepIndex = steps.findIndex((step) => step.id === currentStep);
    if (stepIndex < steps.length - 1) {
      if (currentStep === "datetime" && (!date || !selectedTime)) {
        return;
      }
      if (currentStep === "verify" && verificationCode !== "123456") { // Mock verification
        return;
      }
      setCurrentStep(steps[stepIndex + 1].id);
    }
  };

  const handleVerificationSubmit = () => {
    if (verificationCode === "123456") { // Mock verification code
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-2xl inline-block mb-6"
          >
            <CalendarDays className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mb-6"
          >
            Schedule a Demo
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Book a personalized demo to see our platform in action
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="p-6 relative z-10">
              <div className="flex justify-center mb-8">
                <ol className="flex items-center w-full">
                  {steps.map((step, index) => (
                    <li
                      key={step.id}
                      className={cn(
                        "flex items-center",
                        index < steps.length - 1 && "w-full"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-full",
                          currentStep === step.id
                            ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white"
                            : steps.findIndex((s) => s.id === currentStep) > index
                            ? "bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-white"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {steps.findIndex((s) => s.id === currentStep) > index ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-full h-[2px] bg-muted mx-2" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <Tabs value={currentStep} className="w-full">
                <TabsContent value="details">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <div className="relative">
                        <Input
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 bg-gray-50 dark:bg-gray-900"
                        />
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Work Email</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Company Name</Label>
                      <div className="relative">
                        <Input
                          name="company"
                          placeholder="Company Inc."
                          value={formData.company}
                          onChange={handleInputChange}
                          className="pl-10 bg-gray-50 dark:bg-gray-900"
                        />
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Team Size</Label>
                      <Input
                        name="teamSize"
                        placeholder="e.g. 10-50"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="bg-gray-50 dark:bg-gray-900"
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email || !formData.company}
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="datetime">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CalendarDays className="h-5 w-5 text-violet-600" />
                        <h3 className="font-medium">Select Date</h3>
                      </div>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border bg-gray-50 dark:bg-gray-900"
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-5 w-5 text-violet-600" />
                        <h3 className="font-medium">Select Time ({timeZone})</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map(({ time, period }) => (
                          <Button
                            key={time}
                            variant="outline"
                            className={cn(
                              "w-full bg-gray-50 dark:bg-gray-900",
                              selectedTime === time && "border-violet-600 bg-violet-50 dark:bg-violet-900/20"
                            )}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time} {period}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="w-full md:col-span-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                      onClick={handleNext}
                      disabled={!date || !selectedTime}
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="verify">
                  <div className="space-y-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-violet-100 dark:bg-violet-900/20 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Verify Your Email</h3>
                      <p className="text-muted-foreground">
                        We've sent a verification code to {formData.email}
                      </p>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <Label>Enter Verification Code</Label>
                      <Input
                        type="text"
                        placeholder="123456"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                      onClick={handleVerificationSubmit}
                      disabled={verificationCode.length !== 6}
                    >
                      Verify Email
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="confirmation">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Demo Scheduled!</h3>
                      <p className="text-muted-foreground">
                        We've sent a calendar invitation to your email address.
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Company:</span>
                        <span className="font-medium">{formData.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">
                          {date?.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">
                          {selectedTime} ({timeZone})
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      Redirecting to home page in {countdown} seconds...
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-violet-200 dark:bg-violet-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust Indicators */}
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Check className="w-5 h-5 text-green-500" />
                <span>99.99% Uptime SLA</span>
                <span className="mx-2">•</span>
                <Check className="w-5 h-5 text-green-500" />
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
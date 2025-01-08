import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ArrowRight, MessageSquare, Video, Users, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center h-screen flex flex-col justify-center">
        <h1 className="font-rubik text-4xl sm:text-6xl font-bold mb-6">
          Team Communication,{" "}
          <span className="text-primary">Reimagined</span>
        </h1>
        <p className="text-lg font-mono sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect, collaborate, and communicate with your team in real-time.
          Experience seamless video calls, instant messaging, and organized channels
          all in one place.
        </p>
        <Link href="/signup">
          <Button size="lg" className="gap-2">
            Start for Free <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Messaging</h3>
            <p className="text-muted-foreground font-mono">
              Real-time chat with powerful formatting, file sharing, and thread
              support.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Video className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">HD Video Calls</h3>
            <p className="text-muted-foreground font-mono">
              Crystal clear video meetings with screen sharing and recording
              capabilities.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Channels</h3>
            <p className="text-muted-foreground font-mono">
              Organized spaces for teams to collaborate on specific projects or
              topics.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center space-x-8">
          <Shield className="h-16 w-16 text-primary" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-muted-foreground max-w-xl font-mono">
              Your data is protected with end-to-end encryption and compliant with
              industry standards. We take security seriously so you can focus on
              what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

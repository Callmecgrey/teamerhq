import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";

const guides = [
  {
    title: "How to Use Instant Messaging",
    description: "Communicate with your team in real time using our secure and intuitive messaging platform.",
    steps: [
      "Open the app and log in to your workspace.",
      "Navigate to the 'Messages' tab in the sidebar.",
      "Select a teammate or group channel to start chatting.",
      "Type your message and hit send! Use emojis, attachments, or formatting for better communication.",
    ],
    image: "/images/instant-messaging-guide.svg",
  },
  {
    title: "How to Host an HD Video Call",
    description: "Conduct high-quality video calls with up to 100 participants for seamless collaboration.",
    steps: [
      "Go to the 'Meetings' section in your workspace.",
      "Click on 'Schedule a Meeting' or 'Start a Call Now.'",
      "Invite your team members by sharing the meeting link.",
      "Start the video call and utilize screen sharing or recording features.",
    ],
    image: "/images/hd-video-call-guide.svg",
  },
  {
    title: "How to Create Team Channels",
    description: "Organize your projects and team discussions with dedicated channels.",
    steps: [
      "Navigate to the 'Channels' tab in the sidebar.",
      "Click on 'Create New Channel.'",
      "Name your channel, set permissions, and invite team members.",
      "Start collaborating by posting messages, files, or tasks in the channel.",
    ],
    image: "/images/team-channels-guide.svg",
  },
  {
    title: "How to Use Screen Sharing",
    description: "Share your screen during a video call to present ideas, reports, or documents.",
    steps: [
      "Join or start a video call in the 'Meetings' section.",
      "Click on the 'Share Screen' button in the call controls.",
      "Choose the window or application you want to share.",
      "Collaborate in real-time as participants view your shared screen.",
    ],
    image: "/images/screen-sharing-guide.svg",
  },
  {
    title: "How to Set Up Two-Factor Authentication",
    description: "Enhance the security of your account by enabling 2FA.",
    steps: [
      "Go to your account settings and find the 'Security' section.",
      "Enable Two-Factor Authentication and choose your preferred method (e.g., SMS, Authenticator app).",
      "Follow the on-screen instructions to complete the setup.",
      "Test the 2FA setup to ensure everything works correctly.",
    ],
    image: "/images/2fa-guide.svg",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="font-rubik text-4xl sm:text-5xl font-bold mb-6">
          User Guide: Master Our Tools
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Learn how to make the most of every feature. Follow step-by-step instructions for using our tools effectively.
        </p>
      </section>

      {/* Guide Sections */}
      {guides.map((guide, index) => (
        <section
          key={index}
          className={`py-16 ${
            index % 2 === 0
              ? "bg-gradient-to-r from-gray-900 to-black"
              : "bg-gradient-to-r from-black to-gray-900"
          }`}
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div
              className={`relative ${
                index % 2 === 0 ? "order-last md:order-none" : ""
              }`}
            >
              <Image
                src={guide.image}
                alt={guide.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-lg"></div>
            </div>

            {/* Text */}
            <div className="space-y-6 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{guide.title}</h2>
              <p className="text-gray-300">{guide.description}</p>
              <ol className="space-y-2 text-sm sm:text-base text-gray-400 list-decimal list-inside">
                {guide.steps.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Follow this guide to master our tools and empower your team to achieve more.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

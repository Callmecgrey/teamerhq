import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";

const features = [
  {
    title: "Instant Messaging",
    description:
      "Stay connected with your team in real time. Secure, reliable, and built to enhance communication across devices.",
    image: "/images/instant-messaging.svg",
  },
  {
    title: "HD Video Calls",
    description:
      "Host crystal-clear video meetings with seamless collaboration for up to 100 participants.",
    image: "/images/hd-video-calls.svg",
  },
  {
    title: "Team Channels",
    description:
      "Organize projects and conversations into dedicated channels for better teamwork.",
    image: "/images/team-channels.svg",
  },
  {
    title: "Screen Sharing",
    description:
      "Share your screen with team members during calls for real-time collaboration.",
    image: "/images/screen-sharing.svg",
  },
  {
    title: "2FA Authentication",
    description:
      "Add an extra layer of security with two-factor authentication, keeping your data safe.",
    image: "/images/2fa-authentication.svg",
  },
  {
    title: "Custom URL",
    description:
      "Create a unique branded workspace URL for a professional and personalized experience.",
    image: "/images/custom-url.svg",
  },
];

export default function WorkspacePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="font-rubik text-3xl sm:text-5xl font-bold mb-6">
          Experience Workspaces Like Never Before
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Discover features that redefine collaboration, communication, and productivity.
        </p>
      </section>

      {/* Features */}
      {features.map((feature, index) => (
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
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-lg"></div>
            </div>

            {/* Text */}
            <div className="space-y-4 text-center md:text-left px-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{feature.title}</h2>
              <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Callout Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Empower Your Team?
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            With TeamerHQ, your team can communicate seamlessly, collaborate effectively, and achieve more together.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

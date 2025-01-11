import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Download the TeamerHQ App
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Access your workspace from any device—Mac, Windows, iPhone, Android, or directly through our Web App. Get started today and collaborate with your team seamlessly.
        </p>
      </section>

      {/* Platform Sections */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mac Section */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-center p-6 rounded-lg shadow-lg">
            <Image
              src="/images/mac-icon.svg"
              alt="Mac"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Download for Mac</h2>
            <p className="text-gray-400 mb-6">The best experience on your Mac. Download the TeamerHQ app now and collaborate with your team in a fully optimized environment.</p>
            <a
              href="/download/mac"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Download Now
            </a>
          </div>

          {/* Windows Section */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-center p-6 rounded-lg shadow-lg">
            <Image
              src="/images/windows-icon.svg"
              alt="Windows"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Download for Windows</h2>
            <p className="text-gray-400 mb-6">Get TeamerHQ for your Windows PC. Effortless communication and productivity tools, all on your desktop.</p>
            <a
              href="/download/windows"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Download Now
            </a>
          </div>

          {/* iPhone Section */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-center p-6 rounded-lg shadow-lg">
            <Image
              src="/images/iphone-icon.svg"
              alt="iPhone"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Download for iPhone</h2>
            <p className="text-gray-400 mb-6">Stay connected on the go. Download the iPhone app and never miss a message or meeting.</p>
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Download from App Store
            </a>
          </div>

          {/* Android Section */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-center p-6 rounded-lg shadow-lg">
            <Image
              src="/images/android-icon.svg"
              alt="Android"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Download for Android</h2>
            <p className="text-gray-400 mb-6">Download TeamerHQ for Android and stay connected with your team wherever you are.</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.teamerhq.app"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Download from Google Play
            </a>
          </div>

          {/* Web App Section */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-center p-6 rounded-lg shadow-lg">
            <Image
              src="/images/web-app-icon.svg"
              alt="Web App"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Use Web App</h2>
            <p className="text-gray-400 mb-6">No downloads needed. Access TeamerHQ directly from your browser and start collaborating now.</p>
            <a
              href="https://app.teamerhq.com"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Use Web App
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get Started with TeamerHQ</h2>
        <p className="text-lg text-gray-400 mb-6">
          Download the app and take your team collaboration to the next level, no matter where you are. Stay connected and productive across devices.
        </p>
        <a
          href="/signup"
          className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

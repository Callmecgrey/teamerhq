// root layout file in Next.js
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

// Wrap the root layout in Router context to make sure routing hooks are initialized.
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TeamerHQ - Modern Team Communication',
  description: 'Secure, fast, and intuitive team communication platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Router context should be automatically available here in Next.js 13 App directory */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}

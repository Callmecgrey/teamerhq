import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";
import TermsAndConditions from "@/components/cookie/AcceptTerms";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
          {/* Render TermsAndConditions Client Component */}
          <TermsAndConditions />
        </ThemeProvider>
      </body>
    </html>
  );
}

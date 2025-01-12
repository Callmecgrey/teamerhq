// root layout file in Next.js
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

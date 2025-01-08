"use client";

import { MessageSquare, Twitter, Facebook, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-6 text-black">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid sm:grid-cols-3 gap-6 items-center">
          {/* Left Section - Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">TeamerHQ</span>
            </div>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-0">
            <a
              href="/terms"
              className="text-sm text-black hover:text-primary transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-black hover:text-primary transition duration-300"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex justify-center sm:justify-end space-x-6 mt-6 sm:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-primary hover:text-accent" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-primary hover:text-accent" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-primary hover:text-accent" />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="my-4 border-t border-muted-foreground"></div>

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section - Built with Love */}
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span> Built with </span> 
            <Heart className="h-4 w-4 text-red-500" />
            <span> by </span>
            <span className="text-sm text-muted-foreground">
              <a href="https://www.linconwavesinnovation.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Linconwaves
              </a>
            </span>
          </div>

          {/* Right Section - Copyright */}
          <div className="flex items-center space-x-2 text-center sm:text-right mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} TeamerHQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

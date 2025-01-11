"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resources = [
    { title: "Guide", href: "/guide", description: "Explore our guide to get started." },
    { title: "Help Center", href: "/help-center", description: "Find answers to your questions." },
    { title: "Download App", href: "/download-app", description: "Get the app for better accessibility." },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center z-50">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-white">TeamerHQ</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Dropdown: Product */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            TeamerHQ
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Your ultimate team collaboration tool.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/workspace" title="TeamerHQ Workspace">
                      Discover tools to streamline team collaboration.
                    </ListItem>
                    <ListItem href="/teamerai" title="TeamerAI">
                      Leverage AI-powered productivity tools.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Dropdown: Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        {resource.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Link: Pricing */}
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-white")}
                  >
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Call to Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login">
            <button className="text-sm font-medium text-white hover:text-primary transition duration-300">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-primary text-black px-4 py-2 rounded-md shadow hover:bg-accent transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 text-white py-4 px-6 space-y-4 overflow-y-auto z-40"
        >
          {/* Close Icon */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">TeamerHQ</span>
            <button onClick={toggleMobileMenu} className="text-white">
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-4 mt-4">
            <li>
              <Link href="/workspace" className="block py-2">
                TeamerHQ Workspace
              </Link>
            </li>
            <li>
              <Link href="/teamerai" className="block py-2">
                TeamerAI
              </Link>
            </li>
            <li>
              <Link href="/guide" className="block py-2">
                Guide
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="block py-2">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/download-app" className="block py-2">
                Download App
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="space-y-4 mt-6">
            <Link href="/login">
              <button className="w-full text-center py-2 border border-white text-white rounded-md">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-primary text-black w-full py-2 rounded-md shadow">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

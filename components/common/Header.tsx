"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Boxes, Menu, X, ChevronDown, CircleHelp, Download, Layers, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const productItems = [
  {
    title: "TeamerHQ",
    href: "/product/teamerhq",
    description: "Team collaboration platform for modern teams",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "TeamerAI",
    href: "/product/teamerai",
    description: "AI-powered productivity tools for your team",
    icon: <Bot className="w-6 h-6" />,
  },
];

const resourceItems = [
  {
    title: "Help Center",
    href: "/help",
    description: "Learn how to use TeamerHQ effectively",
    icon: <CircleHelp className="w-6 h-6" />,
  },
  {
    title: "Download",
    href: "/download",
    description: "Get TeamerHQ custom app for all your devices",
    icon: <Download className="w-6 h-6" />,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                 from-blue-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black 
                 border-b border-gray-200 dark:border-gray-700 shadow-md"
    >
      <div className="container px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Boxes className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <span className="block font-bold text-blue-600 dark:text-blue-400">
            TeamerHQ
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 text-blue-600 dark:text-blue-400 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resourceItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            {/* Product Section */}
            <div>
              <button
                className="flex items-center justify-between w-full text-left text-blue-600 dark:text-blue-400"
              >
                Product
                <ChevronDown className="w-5 h-5" />
              </button>
              <ul className="mt-2 space-y-2 pl-4">
                {productItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <button
                className="flex items-center justify-between w-full text-left text-blue-600 dark:text-blue-400"
              >
                Resources
                <ChevronDown className="w-5 h-5" />
              </button>
              <ul className="mt-2 space-y-2 pl-4">
                {resourceItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <Link href="/pricing" className="text-blue-600 dark:text-blue-400">
              Pricing
            </Link>

            {/* Call to Actions */}
            <div className="flex flex-col gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        {icon && <span className="mb-2 block">{icon}</span>}
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});

export default Header;

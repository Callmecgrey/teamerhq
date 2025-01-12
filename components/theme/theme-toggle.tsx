"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
    >
      {/* Sun Icon */}
      <Sun
        className={`absolute transition-transform duration-300 ${
          theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      {/* Moon Icon */}
      <Moon
        className={`absolute transition-transform duration-300 ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
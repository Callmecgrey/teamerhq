"use client";

import { useState, useEffect } from "react";

export default function TermsAndConditions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if terms have already been accepted
    const hasAccepted = localStorage.getItem("acceptedTerms") === "true";
    setIsVisible(!hasAccepted);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptedTerms", "true");
    console.log("Terms and conditions accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-1 text-center sm:text-left">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          By using this website, you agree to our{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Privacy Policy
          </a>.
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
      >
        Accept
      </button>
    </div>
  );
}

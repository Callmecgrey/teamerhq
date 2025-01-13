"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, ExternalLink, Cookie, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookiePreference {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

const initialCookiePreferences: CookiePreference[] = [
  {
    id: "necessary",
    name: "Necessary",
    description: "Required for the website to function properly",
    required: true,
    enabled: true,
  },
  {
    id: "functional",
    name: "Functional",
    description: "Enhanced features and personalization",
    required: false,
    enabled: true,
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Help us improve our website",
    required: false,
    enabled: false,
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Personalized advertisements",
    required: false,
    enabled: false,
  },
];

const features = [
  {
    icon: Shield,
    text: "Secure & Compliant",
  },
  {
    icon: Cookie,
    text: "Cookie Management",
  },
  {
    icon: Lock,
    text: "Data Protection",
  },
];

export default function TermsAndConditions() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreference[]>(initialCookiePreferences);

  useEffect(() => {
    const checkAcceptedTerms = () => {
      const hasAccepted = localStorage.getItem("acceptedTerms") === "true";
      const savedPreferences = localStorage.getItem("cookiePreferences");
      if (savedPreferences) {
        setCookiePreferences(JSON.parse(savedPreferences));
      }
      setIsVisible(!hasAccepted);
    };

    // Initial check
    checkAcceptedTerms();

    // Add storage event listener
    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === null || // All storage cleared
        e.key === "acceptedTerms" || // Specific key updated
        e.key === "cookiePreferences"
      ) {
        checkAcceptedTerms();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptedTerms", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const updatedPreferences = cookiePreferences.map(pref => ({
      ...pref,
      enabled: true,
    }));
    setCookiePreferences(updatedPreferences);
    localStorage.setItem("acceptedTerms", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(updatedPreferences));
    setIsVisible(false);
  };

  const handleDecline = () => {
    setShowDetails(true);
    setShowCookiePreferences(false);
  };

  const toggleCookiePreference = (id: string) => {
    setCookiePreferences(prev =>
      prev.map(pref =>
        pref.id === id && !pref.required
          ? { ...pref, enabled: !pref.enabled }
          : pref
      )
    );
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto overscroll-contain"
      >
        <div className="bg-gradient-to-t from-black/50 to-transparent h-32 fixed bottom-0 left-0 right-0 pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl px-4 mb-4">
          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl overflow-hidden"
            layout
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-white" />
                <h2 className="text-lg font-semibold text-white">Privacy</h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => setShowCookiePreferences(!showCookiePreferences)}
              >
                <Cookie className="w-4 h-4 mr-2" />
                Cookie Settings
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showCookiePreferences ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.div layout className="space-y-6">
                {/* Main message */}
                <p className="text-gray-600 dark:text-gray-300">
                  We value your privacy and want to be transparent about how we use your data. Before continuing, please review our terms:
                </p>

                {/* Cookie Preferences */}
                <AnimatePresence>
                  {showCookiePreferences && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 border rounded-lg p-4"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">Cookie Preferences</h3>
                      <div className="space-y-4">
                        {cookiePreferences.map((pref) => (
                          <div key={pref.id} className="flex items-center justify-between">
                            <div className="space-y-1 flex-1 mr-4">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-sm">{pref.name}</p>
                                {pref.required && (
                                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {pref.description}
                              </p>
                            </div>
                            <Switch
                              checked={pref.enabled}
                              onCheckedChange={() => toggleCookiePreference(pref.id)}
                              disabled={pref.required}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <feature.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Terms of Service
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Privacy Policy
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="/cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Cookie Policy
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Warning message when declined */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg p-4"
                    >
                      <p className="text-red-600 dark:text-red-400 text-sm">
                        To use our services, you must accept our terms and conditions. These terms help protect both you and us while ensuring a great experience for all users.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    Accept All
                  </Button>
                  {showCookiePreferences ? (
                    <Button
                      onClick={handleAccept}
                      variant="outline"
                      size="lg"
                    >
                      Save Preferences
                    </Button>
                  ) : (
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      size="lg"
                    >
                      Decline
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

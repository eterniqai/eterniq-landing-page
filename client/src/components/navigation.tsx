import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--dark-bg)]/90 backdrop-blur-md border-b border-[var(--border-purple)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 purple-border rounded-lg flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-[var(--dark-bg)] rounded-md flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">EternIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 ${
                  location === item.href
                    ? "text-[hsl(var(--primary-blue))]"
                    : "text-gray-300 hover:text-[hsl(var(--primary-blue))]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-[hsl(var(--primary-blue))] via-[hsl(var(--neon-pink))] to-[hsl(var(--secondary-purple))] hover:shadow-lg neon-glow hover:shadow-[hsl(var(--primary-blue))]/25 transition-all duration-300"
            >
              <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[hsl(var(--primary-blue))] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(var(--dark-surface))]/90 backdrop-blur-lg rounded-lg mt-2"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    location === item.href
                      ? "text-[hsl(var(--primary-blue))]"
                      : "text-gray-300 hover:text-[hsl(var(--primary-blue))]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-4 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))]"
              >
                <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/Screenshot_2025-06-23_145426-removebg-preview_1750670777588.png";
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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 z-50 w-full flex justify-center pointer-events-none transform -translate-x-1/2">
    <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="pointer-events-auto w-full max-w-4xl px-4"
        style={{ filter: 'drop-shadow(0 4px 32px rgba(80,0,120,0.10))' }}
      >
        <div className={`relative flex items-center justify-between h-16 rounded-full shadow-xl border border-white/20 dark:border-[var(--border-purple)] px-6 md:px-10 py-2 transition-colors duration-300 backdrop-blur-lg ${scrolled ? 'bg-[rgba(20,20,30,0.98)]' : 'bg-[rgba(20,20,30,0.75)]' }` }>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src={logoPath} 
              alt="EternIQ Logo" 
              className="w-8 h-8 filter brightness-0 invert"
            />
            <span className="text-xl font-bold gradient-text">EternIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 font-medium px-3 py-1 rounded-full hover:bg-white/10 hover:text-[hsl(var(--primary-blue))] ${
                  location === item.href
                    ? "text-[hsl(var(--primary-blue))] bg-white/10"
                    : "text-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-2 bg-gradient-to-r from-[hsl(var(--primary-blue))] via-[hsl(var(--neon-pink))] to-[hsl(var(--secondary-purple))] hover:shadow-lg neon-glow hover:shadow-[hsl(var(--primary-blue))]/25 transition-all duration-300 rounded-full px-6 py-2 text-base font-semibold"
            >
              <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[hsl(var(--primary-blue))] transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu - Floating Dropdown */}
          <AnimatePresence>
        {isOpen && (
          <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-16 left-0 w-full bg-[rgba(20,20,30,0.95)] backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 mt-2 py-4 px-4 flex flex-col space-y-3 md:hidden"
                style={{ zIndex: 60 }}
              >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                    className={`block w-full px-4 py-3 rounded-full text-center font-semibold text-white bg-transparent transition-colors duration-200 hover:bg-white/10 focus:bg-white/10 focus:outline-none ${
                      location === item.href ? 'bg-[hsl(var(--primary-blue))]/80 text-white' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                  className="w-full mt-1 bg-gradient-to-r from-[hsl(var(--primary-blue))] via-[hsl(var(--neon-pink))] to-[hsl(var(--secondary-purple))] hover:shadow-lg neon-glow hover:shadow-[hsl(var(--primary-blue))]/25 transition-all duration-300 rounded-full px-6 py-3 text-base font-semibold text-white"
              >
                <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
          </motion.div>
        )}
          </AnimatePresence>
      </div>
    </motion.nav>
    </div>
  );
}

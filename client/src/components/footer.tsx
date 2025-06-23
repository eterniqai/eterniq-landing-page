import { motion } from "framer-motion";
import { Link } from "wouter";
import { Code, Twitter, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "https://www.eterniq.in/vision", label: "Vision", external: true },
];



const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-surface)]/80 border-t border-[var(--border-purple)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 purple-border rounded-lg flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[var(--dark-surface)] rounded-md flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold gradient-text">EternIQ</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing software development with AI-powered code assistance, screen sharing, 
              and intelligent analysis. Your eternal coding partner for enhanced productivity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[var(--accent-purple)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[var(--accent-purple)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--accent-purple)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="border-t border-[var(--border-purple)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EternIQ. All rights reserved. Revolutionizing development with AI.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--secondary-purple)] hover:shadow-lg purple-glow hover:shadow-[var(--primary-purple)]/25 transition-all duration-300 text-white font-medium"
            >
              <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                Start Coding with AI
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

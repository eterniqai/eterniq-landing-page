import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Code, Laptop, Bot } from "lucide-react";
import { fadeInUp, fadeIn, float } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative flex items-center justify-center pt-16">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 opacity-40"
          {...float}
          transition={{ ...float.animate.transition, delay: 0 }}
        >
          <Code className="w-16 h-16 text-[var(--primary-purple)] drop-shadow-lg filter" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-35"
          {...float}
          transition={{ ...float.animate.transition, delay: -2 }}
        >
          <Laptop className="w-12 h-12 text-[var(--accent-purple)] drop-shadow-lg filter" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 opacity-30"
          {...float}
          transition={{ ...float.animate.transition, delay: -4 }}
        >
          <Bot className="w-20 h-20 text-[var(--secondary-purple)] drop-shadow-lg filter" />
        </motion.div>
        <motion.div
          className="absolute top-60 right-10 opacity-30"
          {...float}
          transition={{ ...float.animate.transition, delay: -1 }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--accent-purple)] rounded-full"></div>
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-40 opacity-25"
          {...float}
          transition={{ ...float.animate.transition, delay: -3 }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-[var(--secondary-purple)] to-[var(--light-purple)] rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">EternIQ</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered code assistant designed to revolutionize the software development process through intelligent screen sharing and real-time code analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--secondary-purple)] hover:shadow-lg purple-glow hover:shadow-[var(--primary-purple)]/25 transition-all duration-300 px-8 py-4 text-lg font-semibold text-white"
              >
                <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start with EternIQ
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--border-purple)] bg-[var(--card-bg)]/50 backdrop-blur-sm text-white hover:bg-[var(--primary-purple)]/20 hover:border-[var(--accent-purple)] px-8 py-4 text-lg transition-all duration-300"
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
            alt="AI-powered coding environment with multiple screens showing code collaboration"
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            {...float}
            transition={{ ...float.animate.transition, delay: -1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

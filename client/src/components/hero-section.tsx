import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Code2, Cpu, Terminal, Zap, Brain, Sparkles } from "lucide-react";
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-purple)_0%,_transparent_50%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-purple)_0%,_transparent_70%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--secondary-purple)_0%,_transparent_50%)] opacity-25"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC4xIj4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0idXJsKCNhKSIvPgo8L2c+CjxkZWZzPgo8cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBzdHJva2U9IiM4Yjk5YTgiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHN2Zz4=')] animate-pulse"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <motion.div
          className="absolute top-20 left-10 opacity-30"
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Code2 className="w-16 h-16 text-blue-400 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-25"
          animate={{ 
            y: [20, -30, 20],
            rotate: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Terminal className="w-12 h-12 text-cyan-400 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 opacity-20"
          animate={{ 
            y: [-15, 25, -15],
            rotate: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Cpu className="w-20 h-20 text-purple-400 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute top-60 right-10 opacity-15"
          animate={{ 
            y: [10, -20, 10],
            rotate: [0, -10, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Brain className="w-14 h-14 text-pink-400 drop-shadow-lg" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                AI-Powered Coding Assistant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="text-white">EternIQ</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Code Smarter
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            >
              Transform your development workflow with intelligent screen sharing, 
              real-time code analysis, and AI-powered assistance that understands your code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Coding Now
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-600 bg-transparent text-white hover:bg-white/10 hover:border-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Screen Sharing</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Main Dashboard Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-700 mx-auto max-w-md sm:max-w-none"
              >
                <div className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-sm">EternIQ Dashboard</span>
                  </div>
                  
                  {/* Code Editor Mockup */}
                  <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 font-mono text-xs sm:text-sm">
                    <div className="text-blue-400 mb-2">// AI Analysis in Progress...</div>
                    <div className="text-green-400 mb-1">function optimizeCode() &#123;</div>
                    <div className="text-gray-300 ml-2 sm:ml-4 mb-1">const result = ai.analyze(code);</div>
                    <div className="text-purple-400 ml-2 sm:ml-4 mb-1">return result.suggestions;</div>
                    <div className="text-green-400">&#125;</div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div className="bg-blue-500/20 rounded-lg p-2 sm:p-3">
                      <div className="text-blue-400 font-bold text-sm sm:text-lg">98%</div>
                      <div className="text-gray-400 text-xs">Accuracy</div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-2 sm:p-3">
                      <div className="text-green-400 font-bold text-sm sm:text-lg">2.3s</div>
                      <div className="text-gray-400 text-xs">Response</div>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 sm:p-3">
                      <div className="text-purple-400 font-bold text-sm sm:text-lg">24/7</div>
                      <div className="text-gray-400 text-xs">Available</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-2 sm:p-3 shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2 sm:p-3 shadow-lg"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

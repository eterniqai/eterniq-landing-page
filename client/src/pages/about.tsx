import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles, Settings, ArrowRight } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const features = [
  {
    icon: Eye,
    title: "Real-time Code Analysis",
    description: "Get instant feedback and intelligent suggestions as you code, with comprehensive analysis of your development patterns and optimization opportunities.",
    gradient: "from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))]"
  },
  {
    icon: Sparkles,
    title: "Intelligent Suggestions",
    description: "Receive contextual recommendations, code improvements, and best practice guidance powered by advanced machine learning algorithms.",
    gradient: "from-[hsl(var(--secondary-purple))] to-[hsl(var(--accent-emerald))]"
  },
  {
    icon: Settings,
    title: "Automated Tasks",
    description: "Streamline your workflow with intelligent automation of repetitive coding tasks, testing, and deployment processes.",
    gradient: "from-[hsl(var(--accent-emerald))] to-[hsl(var(--primary-blue))]"
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg))] text-white">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[hsl(var(--dark-surface))]/30 to-[hsl(var(--dark-bg))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Experience the Power of</span>
              <br />
              <span className="gradient-text">EternIQ</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the potential of EternIQ, your AI-powered coding assistant. Take the first step 
              towards enhancing your software development process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              animate={isInView ? "animate" : "initial"}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Abstract AI neural network visualization representing intelligent code analysis and assistance"
                className="rounded-2xl shadow-2xl mb-8 lg:mb-0 w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              variants={slideInRight}
              animate={isInView ? "animate" : "initial"}
              className="space-y-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary-blue))]/10 to-[hsl(var(--secondary-purple))]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using EternIQ to enhance their coding experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))] hover:shadow-xl hover:shadow-[hsl(var(--primary-blue))]/30 transition-all duration-300 px-8 py-4"
                >
                  <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass-morphism border-white/20 text-white hover:bg-white/20 px-8 py-4"
                >
                  <a href="/contact">
                    Contact Us
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

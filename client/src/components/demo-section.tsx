import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            animate={isInView ? "animate" : "initial"}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Are You Ready to
              <br />
              Accelerate Your Development
              <br />
              Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              EternIQ provides personalized assistance to meet your unique development needs. 
              Our AI-powered code assistant ensures a seamless coding experience while boosting productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[var(--primary-purple)] to-[var(--secondary-purple)] hover:shadow-lg purple-glow hover:shadow-[var(--primary-purple)]/25 transition-all duration-300 px-8 py-4 text-white font-semibold"
                >
                  <a href="https://chat.eterniq.in/" target="_blank" rel="noopener noreferrer">
                    <Play className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-morphism border-[var(--accent-purple)]/30 text-white hover:bg-[var(--accent-purple)]/20 px-8 py-4"
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            animate={isInView ? "animate" : "initial"}
            className="mt-12 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern developer workspace with multiple monitors showing code collaboration and AI assistance"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

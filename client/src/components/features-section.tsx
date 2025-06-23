import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Share2, 
  Bot, 
  Zap, 
  Brain, 
  Puzzle, 
  Rocket
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Share2,
    title: "Screen Sharing & Code Analysis",
    description: "Share your code screen in real-time and get intelligent AI-powered analysis, suggestions, and debugging assistance instantly.",
    color: "text-[hsl(var(--primary-blue))]",
    cardClass: "feature-card-1"
  },
  {
    icon: Bot,
    title: "Personalized Virtual Solutions",
    description: "Get tailored AI assistance for cloud analytics, application development, data science acceleration, and comprehensive coding support.",
    color: "text-[hsl(var(--neon-pink))]",
    cardClass: "feature-card-2"
  },
  {
    icon: Zap,
    title: "Efficiency and Reliability",
    description: "Experience unprecedented efficiency with impeccable reliability. Our AI ensures precision and accuracy in every coding task.",
    color: "text-[hsl(var(--electric-cyan))]",
    cardClass: "feature-card-3"
  },
  {
    icon: Brain,
    title: "Intelligent Code Assistance",
    description: "Advanced AI-powered code completion, error detection, optimization suggestions, and best practice recommendations.",
    color: "text-[hsl(var(--lime-green))]",
    cardClass: "feature-card-4"
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Effortlessly integrate with your existing development environment and workflow for enhanced productivity and streamlined coding.",
    color: "text-[hsl(var(--vibrant-orange))]",
    cardClass: "feature-card-5"
  },
  {
    icon: Rocket,
    title: "Future-Ready Technology",
    description: "Built on cutting-edge AI technology, EternIQ is designed to transform the software development landscape across industries.",
    color: "text-[hsl(var(--royal-purple))]",
    cardClass: "feature-card-6"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="-mt-16 pt-0 pb-4 bg-gradient-to-b from-[hsl(var(--dark-bg))] to-[hsl(var(--dark-surface))]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          {...fadeInUp}
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Enhance Your Workflow</span>
            <span className="text-white"> with EternIQ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EternIQ is committed to optimizing your development workflow with effortless AI-powered assistance tailored to your unique coding needs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${feature.cardClass} glass-morphism rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-white/30`}
            >
              <motion.div
                className={`${feature.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-12 h-12" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

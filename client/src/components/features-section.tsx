import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { 
  Share2, 
  Bot, 
  Zap, 
  Brain, 
  Puzzle, 
  Rocket
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const features = [
  {
    icon: Share2,
    title: "Screen Sharing & Code Analysis",
    description: "Share your code screen in real-time and get intelligent AI-powered analysis, suggestions, and debugging assistance instantly.",
    color: "text-[hsl(220,100%,60%)]",
    cardClass: "feature-card-1"
  },
  {
    icon: Bot,
    title: "Personalized Virtual Solutions",
    description: "Get tailored AI assistance for cloud analytics, application development, data science acceleration, and comprehensive coding support.",
    color: "text-[hsl(320,100%,60%)]",
    cardClass: "feature-card-2"
  },
  {
    icon: Zap,
    title: "Efficiency and Reliability",
    description: "Experience unprecedented efficiency with impeccable reliability. Our AI ensures precision and accuracy in every coding task.",
    color: "text-[hsl(180,100%,50%)]",
    cardClass: "feature-card-3"
  },
  {
    icon: Brain,
    title: "Intelligent Code Assistance",
    description: "Advanced AI-powered code completion, error detection, optimization suggestions, and best practice recommendations.",
    color: "text-[hsl(120,100%,50%)]",
    cardClass: "feature-card-4"
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Effortlessly integrate with your existing development environment and workflow for enhanced productivity and streamlined coding.",
    color: "text-[hsl(30,100%,60%)]",
    cardClass: "feature-card-5"
  },
  {
    icon: Rocket,
    title: "Future-Ready Technology",
    description: "Built on cutting-edge AI technology, EternIQ is designed to transform the software development landscape across industries.",
    color: "text-[hsl(280,100%,70%)]",
    cardClass: "feature-card-6"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="features" className="mt-0 pt-0 pb-4 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-surface)]/50 sm:-mt-16 sm:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="h-full"
                >
                  <Card className={`${feature.cardClass} h-full rounded-2xl p-8 hover:bg-[var(--primary-purple)]/10 transition-all duration-300 group cursor-pointer backdrop-blur-sm border-0`}>
                    <motion.div
                      className={`${feature.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-12 h-12" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-[var(--primary-purple)]/20 hover:bg-[var(--primary-purple)]/40 border-0" />
          <CarouselNext className="hidden md:flex -right-12 bg-[var(--primary-purple)]/20 hover:bg-[var(--primary-purple)]/40 border-0" />
        </Carousel>
      </div>
    </section>
  );
}

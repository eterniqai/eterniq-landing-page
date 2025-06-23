import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Mail, Globe, Clock, Twitter, Linkedin, Github, MessageCircle } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@eterniq.in",
    gradient: "from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))]"
  },
  {
    icon: Globe,
    title: "Website",
    content: "www.eterniq.in",
    gradient: "from-[hsl(var(--secondary-purple))] to-[hsl(var(--accent-emerald))]"
  },
  {
    icon: Clock,
    title: "Support Hours",
    content: "24/7 AI-powered assistance",
    gradient: "from-[hsl(var(--accent-emerald))] to-[hsl(var(--primary-blue))]"
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { icon: Github, href: "#", color: "hover:text-gray-300" },
  { icon: MessageCircle, href: "#", color: "hover:text-indigo-400" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg))] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get in</span>
              <span className="gradient-text"> Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to revolutionize your development process? Contact us to learn more about EternIQ 
              and how it can transform your coding workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              animate={isInView ? "animate" : "initial"}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={slideInRight}
              animate={isInView ? "animate" : "initial"}
              className="mt-12 lg:mt-0 space-y-8"
            >
              {/* Contact Info Card */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))] rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Team Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Professional development team collaborating on AI-powered software solutions"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

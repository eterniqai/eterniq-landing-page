import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes EternIQ different from other AI Tools?",
    answer: "EternIQ combines real-time screen sharing, AI-powered code analysis, and personalized assistance to provide a truly unique development experience. Our platform learns from your coding style and project context to deliver more accurate and relevant suggestions."
  },
  {
    question: "How does the real-time code analysis work?",
    answer: "Our advanced AI engine analyzes your code as you write, providing instant feedback on potential improvements, bug detection, and optimization opportunities. The system processes multiple aspects including syntax, performance, security, and best practices simultaneously."
  },
  {
    question: "Can EternIQ integrate with my existing development environment?",
    answer: "Yes! EternIQ is designed to seamlessly integrate with popular IDEs and code editors. Our platform supports major development environments and can be customized to fit your specific workflow needs."
  },
  {
    question: "What programming languages does EternIQ support?",
    answer: "EternIQ supports a wide range of programming languages including JavaScript, TypeScript, Python, Java, C++, Ruby, and many more. Our AI system is constantly learning and expanding its language support based on community needs."
  },
  {
    question: "Is my code secure when using EternIQ?",
    answer: "Absolutely. We prioritize security and privacy. All code analysis is performed in isolated environments, with enterprise-grade encryption for data transmission. We never store your proprietary code and comply with industry-standard security protocols."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about EternIQ and how it can transform your development workflow
          </motion.p>
        </div>

        <div className="grid gap-4 sm:gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold text-white flex-1">{faq.question}</h3>
                  <span className="text-purple-400 mt-1">
                    {expandedIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  );
} 
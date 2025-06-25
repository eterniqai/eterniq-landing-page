import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Mail, Globe, Clock, Linkedin, Instagram } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		content: "info@eterniq.in",
		gradient:
			"from-[hsl(var(--primary-blue))] via-[hsl(var(--electric-cyan))] to-[hsl(var(--neon-pink))]",
	},
	{
		icon: Globe,
		title: "Website",
		content: "www.eterniq.in",
		gradient:
			"from-[hsl(var(--neon-pink))] via-[hsl(var(--royal-purple))] to-[hsl(var(--lime-green))]",
	},
	{
		icon: Clock,
		title: "Support Hours",
		content: "24/7 AI-powered assistance",
		gradient:
			"from-[hsl(var(--lime-green))] via-[hsl(var(--vibrant-orange))] to-[hsl(var(--primary-blue))]",
	},
];

const socialLinks = [
	{
		icon: Instagram,
		href: "https://www.instagram.com/eterniq.in?igsh=MmRpd3UydGgxNGxx",
		color: "hover:text-pink-500",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/company/eterniq/",
		color: "hover:text-blue-600",
	},
];

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<div className="min-h-screen bg-[hsl(var(--dark-bg))] text-white">
			<Navigation />

			{/* Hero Section */}
			<section className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div {...fadeInUp} className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							<span className="text-white">Get in</span>
							<span className="gradient-text"> Touch</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Ready to revolutionize your development process? Contact us to learn
							more about EternIQ and how it can transform your coding workflow.
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
								<h3 className="text-2xl font-bold mb-6 text-white">
									Contact Information
								</h3>
								<div className="space-y-6">
									{contactInfo.map((info) => (
										<div key={info.title} className="flex items-start">
											<div
												className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
											>
												<info.icon className="w-6 h-6 text-white" />
											</div>
											<div>
												<h4 className="text-lg font-semibold text-white mb-1">
													{info.title}
												</h4>
												<p className="text-gray-300">{info.content}</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Social Media */}
							<div className="glass-morphism rounded-2xl p-8">
								<h3 className="text-2xl font-bold mb-6 text-white">
									Follow Us
								</h3>
								<div className="flex space-x-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={index}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className={`w-12 h-12 bg-gradient-to-r from-[hsl(var(--neon-pink))] via-[hsl(var(--electric-cyan))] to-[hsl(var(--lime-green))] rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-current/25 ${social.color}`}
										>
											<social.icon className="w-6 h-6 text-white" />
										</motion.a>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

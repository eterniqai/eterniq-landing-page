import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-morphism rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-300">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Name"
                    className="bg-[hsl(var(--dark-surface))]/50 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(var(--primary-blue))] focus:ring-2 focus:ring-[hsl(var(--primary-blue))]/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[hsl(var(--dark-surface))]/50 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(var(--primary-blue))] focus:ring-2 focus:ring-[hsl(var(--primary-blue))]/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-300">Subject</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="How can we help?"
                    className="bg-[hsl(var(--dark-surface))]/50 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(var(--primary-blue))] focus:ring-2 focus:ring-[hsl(var(--primary-blue))]/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-gray-300">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-[hsl(var(--dark-surface))]/50 border-white/20 text-white placeholder-gray-400 focus:border-[hsl(var(--primary-blue))] focus:ring-2 focus:ring-[hsl(var(--primary-blue))]/20 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-gradient-to-r from-[hsl(var(--primary-blue))] to-[hsl(var(--secondary-purple))] hover:shadow-xl hover:shadow-[hsl(var(--primary-blue))]/30 transition-all duration-300 px-8 py-4"
            >
              {submitMutation.isPending ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {submitMutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}

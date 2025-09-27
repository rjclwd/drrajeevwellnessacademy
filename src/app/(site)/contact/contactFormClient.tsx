"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // mock API
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative overflow-hidden bg-card/60 backdrop-blur-xl rounded-3xl p-10 border border-border/30 shadow-2xl">
        {isSubmitted ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-ring rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
            <p className="text-muted-foreground text-lg">
              Thank you for reaching out. We&aposll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-3">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-background/60 border rounded-2xl focus:ring-2 focus:ring-ring text-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-background/60 border rounded-2xl focus:ring-2 focus:ring-ring text-lg"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-6 py-4 bg-background/60 border rounded-2xl focus:ring-2 focus:ring-ring text-lg resize-none"
                placeholder="Tell us about your wellness goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative bg-primary text-primary-foreground py-5 px-8 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" /> Send Message
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

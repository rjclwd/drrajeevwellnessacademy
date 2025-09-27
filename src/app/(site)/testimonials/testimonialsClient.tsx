"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quote, Star, Sparkles } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Anjali Verma",
    role: "Student, New Delhi",
    image: "/avatars/anjali.jpg",
    feedback:
      "The Academy has completely changed my perspective on homeopathy. The practical approach made me confident in real cases.",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    role: "Patient & Learner",
    image: "/avatars/ravi.jpg",
    feedback:
      "I not only recovered with Dr. Rajeev’s guidance but also learned how to maintain wellness naturally. Highly recommend!",
    rating: 4,
  },
  {
    name: "Sophia Thomas",
    role: "Online Learner, UK",
    image: "/avatars/sophia.jpg",
    feedback:
      "The online modules were beautifully designed and very interactive. I felt connected to the community throughout.",
    rating: 5,
  },
];

export default function TestimonialsClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-primary via-ring to-accent bg-clip-text text-transparent leading-tight">
            What People Say
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from our students and patients who trusted the
            Academy’s mission of wellness and education.
          </p>
        </motion.div>
      </section>

      <Separator className="my-8 container mx-auto" />

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 pb-24 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-2xl border bg-card/80 backdrop-blur p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-foreground/90 mb-6 flex-1 leading-relaxed">
                {t.feedback}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import TestimonialsClient from "./testimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials - Dr. Rajeev’s Academy",
  description: "What our students and patients say about their experience at the Academy.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}

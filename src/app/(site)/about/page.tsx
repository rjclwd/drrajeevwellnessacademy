import { Metadata } from "next";
import AboutClient from "./aboutClient";

export const metadata: Metadata = {
  title: "About the Academy",
  description: "Dr. Rajeev’s mission and approach to wellness education.",
};

export default function AboutPage() {
  return <AboutClient />;
}

"use client";

import VideoSection from "@/components/sections/VideoSection/VideoSection";
import { Badge } from "@/components/ui/badge";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PlayCircle, ShieldCheck, Stethoscope } from "lucide-react";
const products = [
  {
    title: "Video 01",
    link: "https://www.youtube.com/watch?v=BFBoEE1Yvps",
    thumbnail: "https://img.youtube.com/vi/BFBoEE1Yvps/hqdefault.jpg",
  },
  {
    title: "Video 02",
    link: "https://www.youtube.com/watch?v=Mjgd4mMzO1o",
    thumbnail: "https://img.youtube.com/vi/Mjgd4mMzO1o/hqdefault.jpg",
  },
  {
    title: "Video 03",
    link: "https://www.youtube.com/watch?v=yZAMkqHAJFg",
    thumbnail: "https://img.youtube.com/vi/yZAMkqHAJFg/hqdefault.jpg",
  },
  {
    title: "Video 04",
    link: "https://www.youtube.com/watch?v=SyIWZMOclmk",
    thumbnail: "https://img.youtube.com/vi/SyIWZMOclmk/hqdefault.jpg",
  },
  {
    title: "Video 05",
    link: "https://www.youtube.com/watch?v=M9RfHVJjiRw",
    thumbnail: "https://img.youtube.com/vi/M9RfHVJjiRw/hqdefault.jpg",
  },
  {
    title: "Video 06",
    link: "https://www.youtube.com/watch?v=wIQIUGBD69M",
    thumbnail: "https://img.youtube.com/vi/wIQIUGBD69M/hqdefault.jpg",
  },
  {
    title: "Video 07",
    link: "https://www.youtube.com/watch?v=EvPhJMvE7ZQ",
    thumbnail: "https://img.youtube.com/vi/EvPhJMvE7ZQ/hqdefault.jpg",
  },
  {
    title: "Video 08",
    link: "https://www.youtube.com/watch?v=wFjZfdqI8Xg",
    thumbnail: "https://img.youtube.com/vi/wFjZfdqI8Xg/hqdefault.jpg",
  },
  {
    title: "Video 09",
    link: "https://www.youtube.com/watch?v=MvVSVqOR-j8",
    thumbnail: "https://img.youtube.com/vi/MvVSVqOR-j8/hqdefault.jpg",
  },
  {
    title: "Video 10",
    link: "https://www.youtube.com/watch?v=6xk5yqtxnLg",
    thumbnail: "https://img.youtube.com/vi/6xk5yqtxnLg/hqdefault.jpg",
  },
  {
    title: "Video 11",
    link: "https://www.youtube.com/watch?v=P-REURwsk",
    thumbnail: "https://img.youtube.com/vi/P-REURwsk/hqdefault.jpg",
  },
  {
    title: "Video 12",
    link: "https://www.youtube.com/watch?v=ptcolnjOltk",
    thumbnail: "https://img.youtube.com/vi/ptcolnjOltk/hqdefault.jpg",
  },
  {
    title: "Video 13",
    link: "https://www.youtube.com/watch?v=A_7C6_ackQY",
    thumbnail: "https://img.youtube.com/vi/A_7C6_ackQY/hqdefault.jpg",
  },
  {
    title: "Video 14",
    link: "https://www.youtube.com/watch?v=8QL79s2WcCU",
    thumbnail: "https://img.youtube.com/vi/8QL79s2WcCU/hqdefault.jpg",
  },
  {
    title: "Video 15",
    link: "https://www.youtube.com/watch?v=OJhnWQl1eyQ",
    thumbnail: "https://img.youtube.com/vi/OJhnWQl1eyQ/hqdefault.jpg",
  },
];

type Pillar = {
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};
const defaultPillars: Pillar[] = [
  {
    badge: "Clinically Grounded",
    title: "Real-world homeopathy",
    description:
      "Led by a practicing doctor—safety-first, evidence-aware lessons you can trust.",
    icon: Stethoscope,
  },
  {
    badge: "Accessible Learning",
    title: "Watch anywhere, free",
    description:
      "Short, focused videos hosted on YouTube/Facebook—no paywall, easy to start.",
    icon: PlayCircle,
  },
  {
    badge: "Premium & Modern",
    title: "Clear, structured, compliant",
    description:
      "Clean UI, mobile-first, WCAG-friendly—with medical disclaimers built-in.",
    icon: ShieldCheck,
  },
];

function ValuePillars({
  pillars = defaultPillars,
  heading = "Why learn with us",
  subheading = "Premium, trustworthy, modern education—grounded in real clinical practice.",
  className,
}: {
  pillars?: Pillar[];
  heading?: string;
  subheading?: string;
  className?: string;
}) {
  return (
    <section
      className={`container mx-auto px-4 py-12 md:py-16 ${className ?? ""}`}
    >
      <SectionHeader heading={heading} subheading={subheading} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <PillarCard key={i} pillar={p} />
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        {heading}
      </h2>
      {subheading ? (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {subheading}
        </p>
      ) : null}
    </div>
  );
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <CardSpotlight className="h-full group">
      <Badge className="relative z-20 bg-accent text-accent-foreground">
        {pillar.badge}
      </Badge>
      <div className="mt-4" />
      <Step
        icon={<Icon className="h-5 w-5" aria-hidden />}
        title={pillar.title}
      >
        {pillar.description}
      </Step>
    </CardSpotlight>
  );
}

function Step({
  title,
  children,
  icon,
}: {
  title: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 relative z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold leading-tight relative z-20">
          {title}
        </h3>
        {children ? (
          <p className="mt-1 text-sm text-muted-foreground relative z-20">
            {children}
          </p>
        ) : null}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <HeroParallax products={products} />
      <ValuePillars />
      <VideoSection />
    </>
  );
}

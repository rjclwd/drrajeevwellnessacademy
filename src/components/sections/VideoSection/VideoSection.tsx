"use client";

import * as React from "react";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";
import { videos as defaultVideos, type YtVideo } from "@/lib/content/videos";
import { Button } from "@/components/ui/button"; // shadcn button (optional—remove if you don't use)
import Link from "next/link";

type Props = {
  heading?: string;
  subheading?: string;
  videos?: YtVideo[];
  max?: number;            // show first N videos
  embedOnClick?: boolean;  // open light modal player
};

export default function VideoSection({
  heading = "Watch free lessons",
  subheading = "Start learning in minutes—no signup required.",
  videos = defaultVideos,
  max = 10,
  embedOnClick = true,
}: Props) {
  const list = videos.slice(0, max);
  const [active, setActive] = React.useState<YtVideo | null>(null);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <header className="mb-6 md:mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{heading}</h2>
          {subheading ? (
            <p className="mt-2 text-muted-foreground">{subheading}</p>
          ) : null}
        </div>

        {/* Optional CTA; remove if not needed */}
        <div className="hidden sm:block">
          <Button asChild variant="outline" size="sm">
            <Link href="/courses">All courses</Link>
          </Button>
        </div>
      </header>

      <div className="relative">
        {/* Horizontal scroll container */}
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {list.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              onPlay={() => (embedOnClick ? setActive(v) : window.open(v.link, "_blank", "noopener,noreferrer"))}
            />
          ))}
        </div>
      </div>

      {/* Lightweight modal player */}
      {embedOnClick && active ? (
        <LightModal onClose={() => setActive(null)}>
          <div className="aspect-video w-full max-w-4xl">
            <iframe
              className="h-full w-full rounded-xl"
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{active.title}</p>
        </LightModal>
      ) : null}
    </section>
  );
}

/* ---------- Card ---------- */

function VideoCard({ video, onPlay }: { video: YtVideo; onPlay: () => void }) {
  return (
    <div className="group relative w-[280px] shrink-0">
      <button
        onClick={onPlay}
        className="block w-full overflow-hidden rounded-xl border bg-card text-left transition hover:shadow"
        aria-label={`Play ${video.title}`}
      >
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          <PlayCircle
            className="absolute bottom-3 left-3 h-7 w-7 text-white/90 drop-shadow"
            aria-hidden
          />
        </div>
        <div className="p-3">
          <h3 className="line-clamp-2 text-sm font-medium">{video.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">YouTube</p>
        </div>
      </button>
    </div>
  );
}

/* ---------- Minimal modal (no external deps) ---------- */

function LightModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  // close on ESC
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-4xl rounded-2xl border bg-background p-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:opacity-90"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

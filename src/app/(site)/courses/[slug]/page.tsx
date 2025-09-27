"use client";

import { notFound } from "next/navigation";
import { getCourse } from "@/lib/content/courses"; // adjust path
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function CoursePage({ params }: Props) {
  const course = getCourse(params.slug);

  if (!course) return notFound();

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-background via-muted/20 to-background text-foreground transition-colors">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back button */}
        <div>
          <Button
            asChild
            variant="ghost"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/courses">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </Button>
        </div>

        {/* Main card */}
        <Card className="overflow-hidden border border-border shadow-lg rounded-2xl bg-card text-card-foreground">
          {/* Video */}
          <div className="aspect-video w-full bg-black">
            {course.platform === "youtube" && course.youtubeId && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${course.youtubeId}`}
                title={course.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {course.platform === "facebook" && course.fbVideoUrl && (
              <iframe
                className="w-full h-full"
                src={course.fbVideoUrl}
                title={course.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Content */}
          <CardHeader className="space-y-3 p-6">
            <CardTitle className="text-3xl font-bold tracking-tight">
              {course.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              {course.summary}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 pt-0 space-y-4">
            {/* Meta */}
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-muted">
                Platform: {course.platform}
              </span>
              <span className="px-3 py-1 rounded-full bg-muted">
                Slug: {course.slug}
              </span>
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href="/courses">Explore More Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

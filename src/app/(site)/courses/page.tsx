"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { listCourses } from "@/lib/content/courses"; // adjust path
import Image from "next/image";

export default function Courses() {
  const [query, setQuery] = useState("");
  const courses = listCourses();

  const filteredCourses = useMemo(() => {
    return courses.filter((c) =>
      [c.title, c.summary, c.slug]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, courses]);

  return (
    <div className="min-h-screen p x-6 py-10 bg-background text-foreground transition-colors">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search */}
        <div className="flex justify-center">
          <Input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-md border-input focus-visible:ring-ring"
          />
        </div>

        {/* Courses grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Card
              key={course.slug}
              className="flex flex-col justify-between bg-card text-card-foreground border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Thumbnail → link to slug */}
              {course.platform === "youtube" && course.youtubeId && (
                <Link href={`/courses/${course.slug}`} className="aspect-video w-full overflow-hidden block">
                  <Image
                    src={`https://img.youtube.com/vi/${course.youtubeId}/hqdefault.jpg`}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>
              )}

              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.summary}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={`/courses/${course.slug}`}>
                    View Course
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-muted-foreground">No courses found.</p>
        )}
      </div>
    </div>
  );
}

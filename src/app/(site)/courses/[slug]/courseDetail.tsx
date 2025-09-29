"use client";

// Remove `notFound` since data check is now in the parent Server Component
// Remove data imports and helper functions
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  MoreHorizontal,
  Star,
  Users,
  Clock,
  Play,
  Eye,
  Calendar
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Re-declare the Course type or import it from your lib file (recommended)
export type Course = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  students: number;
  instructor: string;
  tags: string[];
  platform: "youtube" | "facebook";
  youtubeId?: string;
  fbVideoUrl?: string;
  thumbnail?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  price?: number;
  views?: number;
  publishedAt?: string;
  likes?: number;
  chapters?: { title: string; duration: string; timestamp: string }[];
};


// -----------------------------------------------------------------------
// Component Props now receive pre-fetched data and the slug
type Props = {
  course: Course;
  relatedCourses: Course[];
  slug: string;
};

export default function CoursePage({ course, relatedCourses, slug }: Props) {
// -----------------------------------------------------------------------

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState<string | null>(null);

  // Data is now passed via props, no need for getCourse/getRelatedCourses calls here

  // FIX: Reset scroll position and local state when the course slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setLiked(false);
    setBookmarked(false);
    setIsSubscribed(false);
    setCurrentTimestamp(null);
  }, [slug]);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleChapterClick = useCallback((timestamp: string, title: string) => {
    setCurrentTimestamp(timestamp);
    console.log(`Simulating jump to chapter: "${title}" at timestamp: ${timestamp}`);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ... (rest of the component JSX remains the same) ... */}
      
      {/* Mobile Back Button */}
      <div className="lg:hidden sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
        {/* ... (content remains the same) ... */}
      </div>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-6 lg:px-6 lg:py-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Desktop Back Button */}
          <div className="hidden lg:block mb-6">
            {/* ... (content remains the same) ... */}
          </div>

          {/* Video Player */}
          <div className="relative aspect-video w-full bg-black rounded-none lg:rounded-xl overflow-hidden shadow-2xl">
            {course.platform === "youtube" && course.youtubeId && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${course.youtubeId}?rel=0&modestbranding=1${currentTimestamp ? `&start=${currentTimestamp.split(':').reduce((acc, time) => (60 * acc) + +time, 0)}` : ''}`}
                title={course.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

          {/* Video Info */}
          <div className="p-4 lg:p-0 lg:mt-4 space-y-4">
            {/* ... (rest of the course info content remains the same, referencing `course` object) ... */}
            
            {/* Instructor Info */}
            <div className="flex items-start justify-between">
            {/* ... (Instructor details remain the same) ... */}
            </div>

            {/* Course Details Tabs */}
            <Tabs defaultValue="about" className="w-full">
            {/* ... (Tabs content remains the same) ... */}
            </Tabs>
          </div>
        </div>

        {/* Sidebar - Related Courses */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border mt-6 lg:mt-0 pt-6 lg:pt-0 lg:pl-6">
          <div className="px-4 lg:px-0">
            <h2 className="font-semibold mb-4">Related Courses</h2>
            <div className="space-y-4">
              {/* This map now uses the `relatedCourses` prop */}
              {relatedCourses.map((relatedCourse) => (
                <Link key={relatedCourse.slug} href={`/courses/${relatedCourse.slug}`} passHref>
                  {/* ... (Related course card structure remains the same) ... */}
                  <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="relative flex-shrink-0 w-24 h-16 lg:w-32 lg:h-20 bg-muted rounded-lg overflow-hidden">
                      <Image
                        width={128}
                        height={80}
                        src={relatedCourse.thumbnail || `https://img.youtube.com/vi/${relatedCourse.youtubeId}/mqdefault.jpg`}
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="bg-black/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedCourse.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {relatedCourse.instructor}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{relatedCourse.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{relatedCourse.duration}</span>
                      </div>
                      {relatedCourse.price && (
                        <div className="text-xs font-semibold text-primary mt-1">
                          ${relatedCourse.price}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
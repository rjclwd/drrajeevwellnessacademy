"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Grid3X3,
  List,
  Star,
  Clock,
  Users,
  Play,
  BookOpen,
  X,
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

// NOTE: Assuming this path is correct for your Next.js project setup
import { courses, Course } from "@/lib/content/courses";
import Link from "next/link"; // 👈 Import Link
import Image from "next/image";

const categories = [
  "All Categories",
  "Foundations",
  "Skin Care",
  "Health",
  "Child Care",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const levelColors = {
  Beginner:
    "bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 border-emerald-200 dark:from-emerald-900/30 dark:to-emerald-900/10 dark:text-emerald-300 dark:border-emerald-800",
  Intermediate:
    "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 border-amber-200 dark:from-amber-900/30 dark:to-amber-900/10 dark:text-amber-300 dark:border-amber-800",
  Advanced:
    "bg-gradient-to-r from-rose-100 to-rose-50 text-rose-700 border-rose-200 dark:from-rose-900/30 dark:to-rose-900/10 dark:text-rose-300 dark:border-rose-800",
};

const sortOptions = [
  { value: "featured", label: "Featured", icon: Sparkles },
  { value: "rating", label: "Top Rated", icon: Star },
  { value: "students", label: "Popular", icon: TrendingUp },
  { value: "price", label: "Price", icon: Award },
  { value: "newest", label: "Latest", icon: Clock },
];

export default function CoursesPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All Categories" ||
        course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All Levels" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        case "rating":
          return b.rating - a.rating;
        case "students":
          return b.students - a.students;
        case "price":
          return (a.price || 0) - (b.price || 0);
        case "newest":
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "All Categories" ||
    selectedLevel !== "All Levels";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLevel("All Levels");
  };

  const CourseCard = ({
    course,
    isListView,
  }: {
    course: Course;
    isListView?: boolean;
  }) => {
    const thumbnailUrl = course.youtubeId
      ? `https://img.youtube.com/vi/${course.youtubeId}/maxresdefault.jpg`
      : "/api/placeholder/400/225";

    if (isListView) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // 👈 Removed 'cursor-pointer' since the parent Link handles click
          className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-48 lg:w-64 aspect-video sm:aspect-[4/3] rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <Image
                width={256}
                height={144}
                src={thumbnailUrl}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between">
                {course.isNew && (
                  <div className="bg-gradient-to-r from-accent via-accent to-accent/80 text-accent-foreground text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                    NEW
                  </div>
                )}
                {course.isFeatured && (
                  <div className="bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground text-xs px-2 py-1 rounded-full font-bold shadow-lg ml-auto">
                    Featured
                  </div>
                )}
              </div>

              {/* Duration */}
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-lg font-medium backdrop-blur-sm">
                {course.duration}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                    levelColors[course.level]
                  }`}
                >
                  {course.level}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-muted">
                  {course.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed flex-1">
                {course.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
              </div>

              {/* Rating and Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-foreground">
                    {course.rating}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {course.price ? (
                    <div className="text-xl sm:text-2xl font-black text-primary">
                      ₹{course.price}
                    </div>
                  ) : (
                    <div className="text-lg font-black text-emerald-600">
                      Free
                    </div>
                  )}
                  {/* 👈 UI Fix: Changed 'Enroll' to 'View Course' for navigation context */}
                  <button className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-200 text-sm">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Grid view
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // 👈 Removed 'cursor-pointer' since the parent Link handles click
        className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          <Image
            width={400}
            height={225}
            src={thumbnailUrl}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between">
            {course.isNew && (
              <div className="bg-gradient-to-r from-accent via-accent to-accent/80 text-accent-foreground text-xs px-2.5 py-1 rounded-full font-bold shadow-lg">
                NEW
              </div>
            )}
            {course.isFeatured && (
              <div className="bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground text-xs px-2.5 py-1 rounded-full font-bold shadow-lg ml-auto">
                Featured
              </div>
            )}
          </div>

          {/* Duration */}
          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-lg font-medium backdrop-blur-sm">
            {course.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border ${
                levelColors[course.level]
              }`}
            >
              {course.level}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-muted">
              {course.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
            {course.title}
          </h3>

          {/* Summary */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {course.summary}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-medium">{course.instructor}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(course.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-sm ml-1">{course.rating}</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            {course.price ? (
              <div className="text-lg sm:text-xl font-black text-primary">
                ₹{course.price}
              </div>
            ) : (
              <div className="text-base font-black text-emerald-600">Free</div>
            )}

            {/* 👈 UI Fix: Changed 'Enroll' to 'View Course' for navigation context */}
            <button className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-3 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-200 text-sm">
              View Course
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Mobile-First Header */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          {/* Title and View Toggle */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-1">
                Discover Courses
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {filteredAndSortedCourses.length} course
                  {filteredAndSortedCourses.length !== 1 ? "s" : ""}
                </span>
                {hasActiveFilters && (
                  <span className="text-primary font-medium">• Filtered</span>
                )}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-2xl p-1 border border-border/50">
              <button
                onClick={() => setViewType("grid")}
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                  viewType === "grid"
                    ? "bg-background text-foreground shadow-md border border-border/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
                title="Grid View"
              >
                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewType("list")}
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                  viewType === "list"
                    ? "bg-background text-foreground shadow-md border border-border/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
                title="List View"
              >
                <List className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Search and Filter Toggle */}
          <div className="flex items-center gap-3 mb-4 sm:hidden">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-3 rounded-2xl transition-all duration-200 border ${
                hasActiveFilters
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground border-border/50"
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 lg:gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm min-w-36 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm min-w-32 cursor-pointer"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm min-w-32 cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden mt-4 space-y-3 border-t border-border/50 pt-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2.5 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2.5 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl text-sm"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/50">
              <span className="text-sm text-muted-foreground font-medium">
                Active:
              </span>
              {searchQuery && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                >
                  &quot;{searchQuery}&quot;
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              )}
              {selectedCategory !== "All Categories" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                >
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All Categories")}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              )}
              {selectedLevel !== "All Levels" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                >
                  {selectedLevel}
                  <button
                    onClick={() => setSelectedLevel("All Levels")}
                    className="hover:bg-primary/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Course Grid/List */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewType}-${hasActiveFilters}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewType === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                : "space-y-4 sm:space-y-6"
            }
          >
            {/* 👈 IMPLEMENTATION: Wrap CourseCard in Next.js Link */}
            {filteredAndSortedCourses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.3),
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/courses/${course.slug}`}
                  // Use className="" here if needed, or rely on CourseCard styles for hover effects
                  className="block h-full"
                >
                  <CourseCard
                    course={course}
                    isListView={viewType === "list"}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredAndSortedCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="bg-muted/30 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm sm:text-base">
              We couldn&apos;t find any courses matching your criteria. Try adjusting
              your filters.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 py-3 rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-200"
              >
                Clear All Filters
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import CoursePage from "./courseDetail";
import { courses, Course } from "@/lib/content/courses"; // <--- ASSUME THIS PATH & EXPORT

// Re-implement the server-side data lookups
function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

function getRelatedCourses(currentSlug: string, category: string, limit: number = 10): Course[] {
  const currentCourse = courses.find(c => c.slug === currentSlug);
  const currentCourseTags = currentCourse?.tags || [];

  return courses
    .filter(c => c.slug !== currentSlug)
    .filter(c => 
      c.category === category || 
      c.tags.some(tag => currentCourseTags.includes(tag))
    )
    .slice(0, limit);
}

type CoursePageProps = {
  params: { slug: string };
};

export default function CourseDataWrapper({ params }: CoursePageProps) {
  const course = getCourse(params.slug);

  if (!course) {
    return notFound();
  }

  // Pre-calculate related courses on the server
  const relatedCourses = getRelatedCourses(course.slug, course.category);

  // Pass necessary data to the client component
  return (
    <CoursePage 
      course={course} 
      relatedCourses={relatedCourses} 
      slug={params.slug}
    />
  );
}
// Optionally, you can generate static params for better performance
export async function generateStaticParams() {
  // Assuming the courses array is imported here as well
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
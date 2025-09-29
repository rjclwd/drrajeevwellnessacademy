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
  // New fields added to the type definition
  views?: number;
  publishedAt?: string;
  likes?: number;
  chapters?: { title: string; duration: string; timestamp: string }[];
};

export const courses: Course[] = [
  {
    slug: "homeopathy-basics",
    title: "Homeopathy Basics",
    summary: "Learn fundamental principles of homeopathy",
    description: "Introduction to homeopathy: understanding remedies, doses, and healing principles",
    category: "Foundations",
    level: "Beginner",
    duration: "6h 0m",
    rating: 4.9,
    students: 1250,
    instructor: "Dr. Rajeev Kumar",
    tags: ["Homeopathy", "Healing", "Remedies", "Natural Medicine"],
    platform: "youtube",
    youtubeId: "BFBoEE1Yvps",
    isNew: true,
    isFeatured: true,
    price: 49,
    // ✨ UPDATED FIELDS
    views: 45600,
    publishedAt: "2023-10-01",
    likes: 2340,
    chapters: [
      { title: "Introduction & History", duration: "30:00", timestamp: "0:00" },
      { title: "Understanding Potency and Dosage", duration: "45:00", timestamp: "30:00" },
      { title: "Top 10 Essential Remedies", duration: "1:15:00", timestamp: "1:15:00" },
    ],
  },
  {
    slug: "homeopathic-remedies-for-skin",
    title: "Homeopathic Remedies for Skin",
    summary: "Treat common skin ailments naturally with homeopathy",
    description: "Explore homeopathic treatments for acne, eczema, rashes, and allergies",
    category: "Skin Care",
    level: "Intermediate",
    duration: "5h 30m",
    rating: 4.8,
    students: 980,
    instructor: "Dr. Priya Sharma",
    tags: ["Homeopathy", "Skin Care", "Natural Remedies"],
    platform: "youtube",
    youtubeId: "Mjgd4mMzO1o",
    isFeatured: true,
    price: 59,
    // ✨ UPDATED FIELDS
    views: 9200,
    publishedAt: "2023-11-15",
    likes: 560,
    chapters: undefined, // Example of a course without chapters data
  },
  {
    slug: "homeopathy-for-respiratory-issues",
    title: "Homeopathy for Respiratory Issues",
    summary: "Manage coughs, cold, and asthma naturally",
    description: "Homeopathic remedies for respiratory health including allergies, asthma, and cold management",
    category: "Health",
    level: "Advanced",
    duration: "7h 15m",
    rating: 4.7,
    students: 640,
    instructor: "Dr. Anil Mehta",
    tags: ["Homeopathy", "Respiratory", "Natural Healing"],
    platform: "youtube",
    youtubeId: "yZAMkqHAJFg",
    price: 69,
    // ✨ UPDATED FIELDS
    views: 6500,
    publishedAt: "2023-12-01",
    likes: 380,
    chapters: [
      { title: "Acute Cough Management", duration: "40:00", timestamp: "0:00" },
      { title: "Constitutional Remedies for Asthma", duration: "1:05:00", timestamp: "40:00" },
    ],
  },
  {
    slug: "homeopathy-for-child-care",
    title: "Homeopathy for Child Care",
    summary: "Gentle remedies for children’s health issues",
    description: "Learn about safe and effective homeopathic remedies for children, including fever, colic, and teething",
    category: "Child Care",
    level: "Beginner",
    duration: "4h 20m",
    rating: 4.9,
    students: 720,
    instructor: "Dr. Rajeev Kumar",
    tags: ["Homeopathy", "Child Care", "Natural Medicine"],
    platform: "youtube",
    youtubeId: "SyIWZMOclmk",
    isNew: true,
    price: 39,
    // ✨ UPDATED FIELDS
    views: 7800,
    publishedAt: "2024-01-20",
    likes: 450,
    chapters: [
      { title: "Fever and Pain Relief", duration: "25:00", timestamp: "0:00" },
      { title: "Teething and Colic", duration: "35:00", timestamp: "25:00" },
    ],
  },
  {
    slug: "homeopathy-for-digestive-health",
    title: "Homeopathy for Digestive Health",
    summary: "Manage digestive disorders naturally",
    description: "Treat issues like indigestion, acidity, constipation, and bloating using homeopathic remedies",
    category: "Health",
    level: "Intermediate",
    duration: "6h 45m",
    rating: 4.6,
    students: 560,
    instructor: "Dr. Priya Sharma",
    tags: ["Homeopathy", "Digestive Health", "Natural Remedies"],
    platform: "youtube",
    youtubeId: "M9RfHVJjiRw",
    price: 59,
    // ✨ UPDATED FIELDS
    views: 5900,
    publishedAt: "2024-02-10",
    likes: 320,
    chapters: [
      { title: "Indigestion and Acidity", duration: "50:00", timestamp: "0:00" },
      { title: "Constipation & Bloating Solutions", duration: "45:00", timestamp: "50:00" },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getRelatedCourses(currentSlug: string, category: string, limit: number = 10): Course[] {
  const currentCourse = getCourse(currentSlug);
  if (!currentCourse) return [];

  return courses
    .filter(c => 
      c.slug !== currentSlug && 
      (c.category === category || c.tags.some(tag => currentCourse.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function listCourses(): Course[] {
  return courses;
}

export const categories = ["All Categories", "Foundations", "Skin Care", "Health", "Child Care"];
export const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
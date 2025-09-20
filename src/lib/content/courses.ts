export type Course = {
  slug: string;
  title: string;
  summary: string;
  platform: "youtube" | "facebook";
  youtubeId?: string;
  fbVideoUrl?: string;
};

const courses: Course[] = [
  {
    slug: "intro-to-homeopathy",
    title: "Intro to Homeopathy",
    summary: "Foundations and safe self-care with homeopathy.",
    platform: "youtube",
    youtubeId: "dQw4w9WgXcQ"
  }
];

export function listCourses(): Course[] { return courses; }
export function getCourse(slug: string): Course | undefined { return courses.find(c => c.slug === slug); }

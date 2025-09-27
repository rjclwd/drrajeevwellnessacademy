import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const courses = [
  { slug: "intro-to-homeopathy", title: "Intro to Homeopathy", level: "Beginner" },
  { slug: "advanced-remedies", title: "Advanced Remedies", level: "Advanced" },
];

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; // ⬅️ await here

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}

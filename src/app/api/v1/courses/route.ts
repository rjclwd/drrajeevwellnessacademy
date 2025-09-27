// src/app/api/v1/courses/route.ts
import { NextResponse } from "next/server";

const courses = [
  { slug: "intro-to-homeopathy", title: "Intro to Homeopathy", level: "Beginner" },
  { slug: "advanced-remedies", title: "Advanced Remedies", level: "Advanced" },
];

export async function GET() {
  return NextResponse.json(courses);
}

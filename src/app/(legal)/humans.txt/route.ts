// src/app/(legal)/humans.txt/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // optional, can also be "nodejs"

export async function GET() {
  return new NextResponse(
    `/* humans.txt */
Team: Dr. Rajeev’s Wellness Academy
Contact: https://www.drrajeevswellness.com/contact
`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}

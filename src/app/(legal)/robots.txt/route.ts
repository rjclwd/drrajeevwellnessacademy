// src/app/(legal)/robots.txt/route.ts
import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /

Sitemap: https://www.drrajeevwellness.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}

// src/app/(legal)/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export function GET() {
  const baseUrl = "https://www.drrajeevwellness.com";

  const urls = [
    "",
    "/about",
    "/contact",
    "/courses",
    "/testimonials",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

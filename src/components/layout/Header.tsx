import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">DrRajeev Academy</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/courses">Courses</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-neutral-600">
        © {new Date().getFullYear()} Dr. Rajeev’s Wellness Academy ·
        <span className="ml-2">
          <a href="/policies/privacy" className="underline">Privacy</a> ·
          <a href="/policies/terms" className="underline ml-1">Terms</a> ·
          <a href="/policies/disclaimer" className="underline ml-1">Disclaimer</a>
        </span>
      </div>
    </footer>
  );
}

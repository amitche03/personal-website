import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="animate-on-load animate-fade-in-up">
        <div className="mb-6 text-8xl font-bold text-emerald-500/20">404</div>
        <h1 className="mb-4 text-3xl font-bold">Page Not Found</h1>
        <p className="mb-8 max-w-md text-white/60">
          Looks like this page doesn&apos;t exist or has been moved. Let&apos;s
          get you back on track.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/80 transition-all duration-200 hover:text-white hover:bg-white/10 hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

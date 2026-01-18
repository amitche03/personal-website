"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/interests", label: "Interests" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              MA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden gap-6 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm transition-colors ${pathname === l.href ? "text-white" : "text-white/70 hover:text-white"}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 md:hidden"
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay - rendered via portal to escape stacking context */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex flex-col md:hidden transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{ backgroundColor: "#111111" }}
          >
            {/* Header row with logo and close button */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white"
                onClick={() => setMobileOpen(false)}
              >
                MA
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/10"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-3 px-6">
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full max-w-sm rounded-2xl px-6 py-4 text-center text-xl font-medium transition-all duration-300 ${
                    pathname === l.href
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "border border-white/20 text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen
                      ? "translateY(0)"
                      : "translateY(-20px)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Footer with social links */}
            <div className="flex shrink-0 items-center justify-center gap-6 border-t border-white/10 py-6">
              <a
                href="https://github.com/amitche03"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mitchell-s-anderson"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:mitchell-s-anderson@unc.edu"
                className="text-white/60 transition-colors hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

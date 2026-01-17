"use client";
import Link from "next/link";
import Image from "next/image";
import TypingEffect from "@/components/typing-effect";

const roles = [
  "Fullstack Software Engineer",
  "Data Engineer",
  "Problem Solver",
  "UNC Chapel Hill Grad",
];

export default function Home() {
  return (
    <div className="relative py-16 sm:py-20">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative grid items-center gap-8 sm:gap-10 md:grid-cols-2">
        <div>
          <p className="animate-on-load animate-fade-in-down delay-100 mb-3 text-sm uppercase tracking-wide text-white/60">
            Hi there <span className="ml-1">👋</span> I'm
          </p>
          <h1 className="animate-on-load animate-fade-in-up delay-100 mb-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Mitchell
            <br />
            Anderson
          </h1>
          <div className="animate-on-load animate-fade-in-up delay-200 mb-2 h-7 text-emerald-400 font-semibold">
            <TypingEffect words={roles} />
          </div>
          <p className="animate-on-load animate-fade-in-up delay-300 mb-8 max-w-xl text-white/70">
            I build reliable, data‑driven web products across the stack. I love
            shipping clean UX, robust APIs, and measurable outcomes.
          </p>

          <div className="animate-on-load animate-fade-in-up delay-400 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition-all duration-200 hover:text-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="/Mitchell_Anderson_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition-all duration-200 hover:text-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="animate-on-load animate-scale-in delay-200 relative h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-lg sm:h-56 sm:w-56 md:h-72 md:w-72">
            <Image
              src="/avatar.png"
              alt="Mitchell Anderson avatar"
              fill
              sizes="(max-width: 768px) 14rem, 18rem"
              className="object-cover object-left scale-[1.12] sm:scale-[1.15]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
        <div className="animate-on-load animate-fade-in-up delay-500 rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:bg-white/[0.02] hover:-translate-y-0.5">
          <div className="text-3xl font-bold">3+</div>
          <div className="text-sm text-white/70">Years building projects</div>
        </div>
        <div className="animate-on-load animate-fade-in-up delay-600 rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:bg-white/[0.02] hover:-translate-y-0.5">
          <div className="text-3xl font-bold">Full‑stack</div>
          <div className="text-sm text-white/70">TypeScript, Python, GCS</div>
        </div>
        <div className="animate-on-load animate-fade-in-up delay-700 rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:bg-white/[0.02] hover:-translate-y-0.5">
          <div className="text-2xl font-bold">SWE @ ServiceNow</div>
          <div className="text-sm text-white/70">
            Associate Software Engineer, Data Connectors
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const email = "mitche.the.dev@gmail.com";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="relative py-16">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="animate-on-load animate-fade-in-up mb-8">
        <h1 className="text-4xl font-bold">Let&apos;s Connect</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          I&apos;m always open to chat about industry trends, collaborate on
          projects, and connect with fellow engineers in the Bay Area.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="animate-on-load animate-fade-in-up delay-100 mb-10 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Interested in working together?
            </h2>
            <p className="mt-1 text-white/70">Feel free to reach out!</p>
          </div>
          <a
            href={`mailto:${email}?subject=Let's Connect`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25"
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send me an email
          </a>
        </div>
      </div>

      <div className="animate-on-load animate-fade-in-up delay-200 grid gap-6 sm:grid-cols-3">
        {/* GitHub */}
        <Link
          href="https://github.com/amitche03"
          target="_blank"
          className="group flex min-h-[84px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-white/[0.04] hover:shadow-lg sm:min-h-[96px]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-black">
              <Image
                src="/github-mark-white.png"
                alt="GitHub"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="font-semibold group-hover:text-emerald-400 transition-colors">
                GitHub
              </div>
              <div className="text-sm text-white/60 group-hover:text-white/80">
                @amitche03
              </div>
            </div>
          </div>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/mitchell-s-anderson"
          target="_blank"
          className="group flex min-h-[84px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-white/[0.04] hover:shadow-lg sm:min-h-[96px]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image
                src="/LinkedIn SVG Icon.svg"
                alt="LinkedIn"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="font-semibold group-hover:text-emerald-400 transition-colors">
                LinkedIn
              </div>
              <div className="text-sm text-white/60 group-hover:text-white/80">
                /in/mitchell-s-anderson
              </div>
            </div>
          </div>
        </Link>

        {/* Email */}
        <button
          onClick={copyEmail}
          aria-label="Copy email to clipboard"
          className="group relative flex min-h-[84px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-white/[0.04] hover:shadow-lg sm:min-h-[96px]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image
                src="/Email Vector Icon.svg"
                alt="Email"
                fill
                className="object-contain p-1 dark:invert"
              />
            </div>
            <div>
              <div className="font-semibold group-hover:text-emerald-400 transition-colors">
                Email
              </div>
              <div className="text-sm text-white/60 group-hover:text-white/80">
                {email}
              </div>
            </div>
          </div>
          <div
            className={`pointer-events-none absolute right-3 top-3 rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300 transition-all duration-200 ${copied ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            Copied ✓
          </div>
        </button>
      </div>

      {/* Location info */}
      <div className="animate-on-load animate-fade-in-up delay-300 mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <div className="font-medium">Based in the Bay Area</div>
            <div className="text-sm text-white/60">Milpitas, CA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

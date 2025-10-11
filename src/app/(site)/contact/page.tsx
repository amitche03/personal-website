"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const email = "mitchell-s-anderson@unc.edu";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback: open mailto if clipboard not available
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          I’m fastest on email, but feel free to reach out anywhere.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {/* GitHub */}
        <Link
          href="https://github.com/amitche03"
          target="_blank"
          className="group flex min-h-[96px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-black">
              <Image src="/github-mark-white.png" alt="GitHub" fill className="object-contain p-1" />
            </div>
            <div>
              <div className="font-semibold">GitHub</div>
              <div className="text-sm text-white/60 group-hover:text-white/80">@amitche03</div>
            </div>
          </div>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/mitchell-s-anderson"
          target="_blank"
          className="group flex min-h-[96px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image src="/LinkedIn SVG Icon.svg" alt="LinkedIn" fill className="object-contain p-1" />
            </div>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-white/60 group-hover:text-white/80">/in/mitchell-s-anderson</div>
            </div>
          </div>
        </Link>

        {/* Email */}
        <button
          onClick={copyEmail}
          className="group relative flex min-h-[96px] items-center rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image src="/Email Vector Icon.svg" alt="Email" fill className="object-contain p-1" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-white/60 group-hover:text-white/80">{email}</div>
            </div>
          </div>
          {copied && (
            <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">
              Copied ✓
            </div>
          )}
        </button>
      </div>

      <div className="mt-10 text-sm text-white/60">
        Prefer a quick chat? <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${email}`}>Send an email</a> with a time.
      </div>
    </div>
  );
}

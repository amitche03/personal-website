import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-wide text-white/60">
            Hi there <span className="ml-1">👋</span> I’m
          </p>
          <h1 className="mb-3 text-5xl font-extrabold leading-tight md:text-6xl">
            Mitchell
            <br />
            Anderson
          </h1>
          <p className="mb-2 text-emerald-400 font-semibold">
            Fullstack Software Engineer
          </p>
          <p className="mb-8 max-w-xl text-white/70">
            I build reliable, data‑driven web products across the stack. I love
            shipping clean UX, robust APIs, and measurable outcomes.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-400"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border border-white/10 shadow-lg md:h-72 md:w-72">
            <Image
              src="/avatar.png"
              alt="Mitchell Anderson avatar"
              fill
              sizes="(max-width: 768px) 14rem, 18rem"
              className="object-cover object-left scale-[1.15]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 p-6">
          <div className="text-3xl font-bold">3+</div>
          <div className="text-sm text-white/70">Years building projects</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6">
          <div className="text-3xl font-bold">Full‑stack</div>
          <div className="text-sm text-white/70">TypeScript, Python, GCS</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6">
          <div className="text-3xl font-bold">Open to work</div>
          <div className="text-sm text-white/70">
            Let’s build something great
          </div>
        </div>
      </div>
    </div>
  );
}

import AnimateOnScroll from "@/components/animate-on-scroll";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillBars from "@/components/skill-bars";
import TechStack from "@/components/tech-stack";

export default function AboutPage() {
  return (
    <div className="relative py-16">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Header */}
      <AnimateOnScroll animation="fade-up">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Hi, I&apos;m Mitchell Anderson. I&apos;m from Winston‑Salem, NC, and
            I recently graduated from UNC Chapel Hill in December 2025 with a
            Computer Science degree (B.S.) and a minor in Economics. I enjoy
            building products end‑to‑end and leading teams to ship work that
            helps real people.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Quick facts */}
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimateOnScroll animation="fade-up" delay={0}>
          <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.05]">
            <div className="text-sm text-white/60">Education</div>
            <div className="mt-1 text-lg font-semibold">UNC Chapel Hill</div>
            <div className="text-white/60">Computer Science (B.S.)</div>
            <div className="mt-2 text-xs text-emerald-400">Class of 2025</div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.05]">
            <div className="text-sm text-white/60">Location</div>
            <div className="mt-1 text-lg font-semibold">
              Bay Area, California
            </div>
            <div className="text-white/60">
              Winston‑Salem, NC ➜ Milpitas, CA
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.05]">
            <div className="text-sm text-white/60">Current Role</div>
            <div className="mt-1 text-lg font-semibold">
              Associate Software Engineer
            </div>
            <div className="text-white/60">ServiceNow • Data Connectors</div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {/* Work Experience Timeline */}
        <AnimateOnScroll animation="fade-up">
          <section>
            <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>
            <ExperienceTimeline />
          </section>
        </AnimateOnScroll>

        {/* Technologies & Frameworks */}
        <AnimateOnScroll animation="fade-up">
          <section>
            <h2 className="mb-8 text-2xl font-bold">
              Technologies & Frameworks
            </h2>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <TechStack />
            </div>
          </section>
        </AnimateOnScroll>

        {/* Campus Involvement */}
        <AnimateOnScroll animation="fade-up">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Campus Involvement</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04]">
                <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">
                  App Team Carolina
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  iOS Developer and Chief Marketing Officer. Built features for
                  student‑run apps and led outreach for a 200+ member
                  organization to grow community, events, and awareness.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                  <li>
                    Chief Marketing Officer — led student outreach & marketing
                  </li>
                  <li>iOS Developer — contributed to shipped app features</li>
                </ul>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-white/[0.04]">
                <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">
                  UNC Business Technology Club
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Assistant Director of Events & Programming. Organized
                  networking events connecting undergraduates with companies in
                  business and technology.
                </p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Teaching */}
        <AnimateOnScroll animation="fade-up">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Teaching Assistantships</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <ul className="grid gap-4 text-sm text-white/80 md:grid-cols-3">
                <li className="rounded-lg bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]">
                  <span className="font-medium text-emerald-400">COMP 110</span>
                  <div className="mt-1 text-white/60">Intro to CS (Python)</div>
                </li>
                <li className="rounded-lg bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]">
                  <span className="font-medium text-emerald-400">COMP 423</span>
                  <div className="mt-1 text-white/60">Software Engineering</div>
                </li>
                <li className="rounded-lg bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05]">
                  <span className="font-medium text-emerald-400">COMP 426</span>
                  <div className="mt-1 text-white/60">
                    Modern Web Programming
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Personal: Beyond the Code */}
        <AnimateOnScroll animation="fade-up">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Beyond the Code</h2>
            <p className="mb-6 max-w-2xl text-white/70">
              Outside of engineering, I recharge by staying active and trying
              new things. Here's a few things I&apos;m into right now:
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "🚵‍♂️ Mountain biking",
                "⛷️ Skiing",
                "🏎️ Formula One",
                "🍽️ Trying new restaurants",
                "🏃 Running",
                "🏋️ Weightlifting",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300 shadow-sm transition-all duration-200 hover:bg-emerald-500/20 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/interests"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
            >
              Explore more interests →
            </a>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

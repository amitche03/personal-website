export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          I’m Mitchell Anderson from Winston‑Salem, NC, and a senior at UNC
          Chapel Hill studying Computer Science (B.S.) with a minor in
          Economics. I enjoy building products end‑to‑end and leading teams to
          ship work that helps real people.
        </p>
      </div>

      {/* Quick facts */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm">
          <div className="text-sm text-white/60">School</div>
          <div className="mt-1 text-lg font-semibold">UNC Chapel Hill</div>
          <div className="text-white/60">CS (B.S.), Minor in Economics</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm">
          <div className="text-sm text-white/60">Location</div>
          <div className="mt-1 text-lg font-semibold">
            Winston‑Salem ➜ Chapel Hill
          </div>
          <div className="text-white/60">North Carolina</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-sm">
          <div className="text-sm text-white/60">Focus</div>
          <div className="mt-1 text-lg font-semibold">
            Full‑stack Engineering
          </div>
          <div className="text-white/60">TypeScript, React/Next.js, Python</div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {/* Campus Involvement */}
        <section>
          <h2 className="mb-3 text-xl font-semibold">Campus Involvement</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">App Team Carolina</h3>
              <p className="mt-1 text-sm text-white/70">
                iOS Developer and Chief Marketing Officer. Built features for
                student‑run apps and led outreach for a 200+ member organization
                to grow community, events, and awareness.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>
                  Chief Marketing Officer — led student outreach & marketing
                </li>
                <li>iOS Developer — contributed to shipped app features</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">UNC Business Technology Club</h3>
              <p className="mt-1 text-sm text-white/70">
                Assistant Director of Events & Programming. Organized networking
                events connecting undergraduates with companies in business and
                technology.
              </p>
            </div>
          </div>
        </section>

        {/* Teaching */}
        <section>
          <h2 className="mb-3 text-xl font-semibold">
            Teaching Assistantships
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <ul className="grid gap-2 text-sm text-white/80 md:grid-cols-2">
              <li>
                <span className="font-medium">COMP 110 —</span> Intro to CS
                (Python)
              </li>
              <li>
                <span className="font-medium">COMP 423 —</span> Software
                Engineering (Angular, JS, Python, FastAPI)
              </li>
              <li>
                <span className="font-medium">COMP 426 —</span> Modern Web
                Programming (React, Next.js, TypeScript)
              </li>
            </ul>
          </div>
        </section>

        {/* Projects highlight */}
        <section>
          <h2 className="mb-3 text-xl font-semibold">Selected Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">
                Luminairy — Accessible Navigation
              </h3>
              <p className="mt-1 text-sm text-white/70">
                iOS app for accessible campus navigation; collaborated with
                researchers for user testing and validation.
              </p>
              <div className="mt-2 text-xs text-white/50">SwiftUI, iOS</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-semibold">Student Leadership</h3>
              <p className="mt-1 text-sm text-white/70">
                Led a 200+ member student organization, coordinating projects,
                workshops, and outreach to support student developers.
              </p>
              <div className="mt-2 text-xs text-white/50">Leadership, Ops</div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-3 text-xl font-semibold">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-medium">Frontend</div>
              <div className="mt-1 text-sm text-white/70">
                TypeScript, React, Next.js, Tailwind
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-medium">Backend</div>
              <div className="mt-1 text-sm text-white/70">
                Node, Python, Java, Flask, REST
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-medium">Data & Cloud</div>
              <div className="mt-1 text-sm text-white/70">
                GCS, Trino/Munin, Docker
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-medium">Mobile</div>
              <div className="mt-1 text-sm text-white/70">
                SwiftUI, React Native
              </div>
            </div>
          </div>
        </section>

        {/* Personal: Beyond the Code */}
        <section>
          <h2 className="mb-3 text-xl font-semibold">Beyond the Code</h2>
          <p className="mb-4 max-w-2xl text-white/70">
            Outside of engineering, I recharge by staying active and exploring
            new experiences. Here are a few things I’m into right now:
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
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
                className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="/interests"
            className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
          >
            Explore more interests →
          </a>
        </section>
      </div>
    </div>
  );
}

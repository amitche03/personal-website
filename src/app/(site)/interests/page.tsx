import AnimateOnScroll from "@/components/animate-on-scroll";

type Topic = {
  icon: string;
  title: string;
  blurb: string;
  links: { label: string; href: string }[];
};

const topics: Topic[] = [
  {
    icon: "🕸️",
    title: "Web Engineering",
    blurb:
      "Performance, DX, and scalable patterns in modern React/Next.js apps.",
    links: [
      {
        label: "Next.js Architecture Overview",
        href: "https://nextjs.org/docs/app/building-your-application",
      },
      { label: "Optimizing Core Web Vitals", href: "https://web.dev/vitals/" },
      {
        label: "React Server Components Intro",
        href: "https://react.dev/learn/start-a-new-react-project#react-server-components",
      },
    ],
  },
  {
    icon: "🗄️",
    title: "Data Systems",
    blurb:
      "Logs, query engines, and pragmatic data architecture for product teams.",
    links: [
      {
        label: "Trino: Query Engine Docs",
        href: "https://trino.io/docs/current/",
      },
      {
        label: "The Log: Unifying Abstraction",
        href: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
      },
      {
        label: "Designing Data-Intensive Apps (excerpts)",
        href: "https://dataintensive.net/",
      },
    ],
  },
  {
    icon: "♿",
    title: "Accessibility",
    blurb:
      "Inclusive design principles and practical a11y patterns for the web and iOS.",
    links: [
      {
        label: "WCAG Overview",
        href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
      {
        label: "ARIA Authoring Practices",
        href: "https://www.w3.org/WAI/ARIA/apg/",
      },
      {
        label: "Apple Accessibility Guides",
        href: "https://developer.apple.com/accessibility/",
      },
    ],
  },
  {
    icon: "🤖",
    title: "Applied ML",
    blurb:
      "Ship small, useful models and integrate ML where it moves the metric.",
    links: [
      {
        label: "fast.ai Practical Deep Learning",
        href: "https://course.fast.ai/",
      },
      { label: "Distill: Visual Essays on ML", href: "https://distill.pub/" },
      {
        label: "Attention Is All You Need (paper)",
        href: "https://arxiv.org/abs/1706.03762",
      },
    ],
  },
];

export default function InterestsPage() {
  return (
    <div className="relative py-16">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

      <AnimateOnScroll animation="fade-up">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Interests</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Beyond work, here&apos;s what I&apos;ve been learning and exploring
            in tech.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2">
        {topics.map((t, index) => (
          <AnimateOnScroll
            key={t.title}
            animation="fade-up"
            delay={index * 100}
          >
            <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:bg-white/[0.04] hover:shadow-lg">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-2xl transition-transform duration-300 group-hover:scale-110">
                {t.icon}
              </div>
              <div className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                {t.title}
              </div>
              <p className="mt-1 text-sm text-white/70">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.links.map((l) => (
                  <li key={l.href}>
                    <a
                      className="inline-flex items-center gap-1 text-emerald-400 transition-all hover:text-emerald-300 hover:gap-2"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Personal Interests Section */}
      <div className="mt-20">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">When I&apos;m Not Coding</h2>
            <p className="mt-2 text-white/70">
              Life&apos;s too short to only stare at screens. Here&apos;s what
              keeps me energized.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Hobby Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Skiing */}
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-blue-600/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                ⛷️
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-sky-400">Skiing</h3>
                <p className="mt-2 text-sm text-white/70">
                  Nothing beats fresh powder and mountain views. Ask me about
                  any of these places!
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-500/20 px-2 py-1 text-xs text-sky-300">
                    Utah
                  </span>
                  <span className="rounded-full bg-sky-500/20 px-2 py-1 text-xs text-sky-300">
                    Colorado
                  </span>
                  <span className="rounded-full bg-sky-500/20 px-2 py-1 text-xs text-sky-300">
                    Banff
                  </span>
                  <span className="rounded-full bg-sky-500/20 px-2 py-1 text-xs text-sky-300">
                    Tahoe
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mountain Biking */}
          <AnimateOnScroll animation="fade-up" delay={50}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-600/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                🚵
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-green-400">
                  Mountain Biking
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Single track trails, technical descents, and that post-ride
                  exhaustion. Pure therapy.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                    Trail riding
                  </span>
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                    Bay Area trails
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Formula 1 */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/10 to-orange-600/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:shadow-lg hover:shadow-red-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                🏎️
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-red-400">
                  Formula 1
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  The strategy, the drama, the tech—it&apos;s the perfect sport.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">
                    Race weekends
                  </span>
                  <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">
                    Data nerd
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Traveling */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-indigo-600/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                ✈️
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-purple-400">
                  Traveling
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  New places, new perspectives.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                    Adventure
                  </span>
                  <span className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                    Photography
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Food & Restaurants */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-yellow-600/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                🍽️
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-amber-400">
                  Food Explorer
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Always hunting for the next great restaurant.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-500/20 px-2 py-1 text-xs text-amber-300">
                    New cuisines
                  </span>
                  <span className="rounded-full bg-amber-500/20 px-2 py-1 text-xs text-amber-300">
                    Local gems
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Coffee */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-amber-700/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="absolute right-3 top-3 text-5xl opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30">
                ☕
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-orange-400">
                  Coffee Culture
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Latte art appreciator.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-300">
                    Pour-over
                  </span>
                  <span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-300">
                    Local roasters
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <AnimateOnScroll animation="fade-up" delay={400}>
        <div className="mt-16 text-sm text-white/60">
          Want the professional story instead?{" "}
          <a
            href="/about"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            See my About page
          </a>
          .
        </div>
      </AnimateOnScroll>
    </div>
  );
}

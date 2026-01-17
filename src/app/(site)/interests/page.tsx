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

      <AnimateOnScroll animation="fade-up" delay={400}>
        <div className="mt-10 text-sm text-white/60">
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

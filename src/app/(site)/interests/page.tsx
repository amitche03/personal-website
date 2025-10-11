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
    <div className="py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Interests</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Outside of school, here's what I've been learning and implementing.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {topics.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
          >
            <div className="mb-2 text-2xl">{t.icon}</div>
            <div className="text-lg font-semibold">{t.title}</div>
            <p className="mt-1 text-sm text-white/70">{t.blurb}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {t.links.map((l) => (
                <li key={l.href}>
                  <a
                    className="text-emerald-400 hover:text-emerald-300"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-white/60">
        Want the professional story instead?{" "}
        <a href="/about" className="text-emerald-400 hover:text-emerald-300">
          See my About page
        </a>
        .
      </div>
    </div>
  );
}

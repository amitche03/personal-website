"use client";
import AnimateOnScroll from "./animate-on-scroll";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags?: string[];
  current?: boolean;
};

const experiences: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "ServiceNow",
    location: "Milpitas, CA",
    period: "Jan 2026 – Present",
    description:
      "Building full-stack features for the Data Connectors team, integrating external data lakes and AI agent workflows on the Now Platform.",
    tags: ["JavaScript", "ServiceNow", "AI", "Trino", "Java"],
    current: true,
  },
  {
    title: "Software Engineering Intern",
    company: "ServiceNow",
    location: "San Diego, CA",
    period: "May 2024 – Aug 2024",
    description:
      "Developed full-stack features for Workflow Data Fabric, enabling seamless integration with external data sources.",
    tags: ["JavaScript", "ServiceNow", "Docker", "Seismic"],
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "UNC Chapel Hill",
    location: "Chapel Hill, NC",
    period: "Aug 2022 – Dec 2025",
    description:
      "TA for COMP 110 (Intro CS), COMP 423 (Software Engineering), and COMP 426 (Modern Web Programming). Mentored 200+ students across multiple semesters.",
    tags: ["Python", "TypeScript", "React", "FastAPI"],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <AnimateOnScroll
            key={`${exp.company}-${exp.period}`}
            animation={index % 2 === 0 ? "fade-right" : "fade-left"}
            delay={index * 100}
          >
            <div
              className={`relative grid gap-4 md:grid-cols-2 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-emerald-500 bg-background md:left-1/2 md:-translate-x-1/2">
                {exp.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-50" />
                )}
              </div>

              {/* Content */}
              <div
                className={`pl-6 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:order-2 md:pl-12 md:text-left"
                }`}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg font-semibold">{exp.title}</span>
                  {exp.current && (
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-emerald-400 font-medium">
                  {exp.company}
                </div>
                <div className="text-sm text-white/50">
                  {exp.location} • {exp.period}
                </div>
                <p className="mt-2 text-sm text-white/70">{exp.description}</p>
                {exp.tags && (
                  <div
                    className={`mt-3 flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-start" : ""}`}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Empty column for alternating layout */}
              <div
                className={
                  index % 2 === 0
                    ? "hidden md:block"
                    : "hidden md:order-1 md:block"
                }
              />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
  color?: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "React / Next.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Java", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Data & Cloud",
    skills: [
      { name: "SQL / Trino", level: 80 },
      { name: "Docker", level: 75 },
      { name: "GCS", level: 70 },
      { name: "Git", level: 90 },
    ],
  },
];

function SkillBar({
  skill,
  isVisible,
  delay,
}: {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/80 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-white/50 group-hover:text-emerald-400 transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-3">
      {skillData.map((category, categoryIndex) => (
        <div
          key={category.category}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-emerald-500/20"
        >
          <h3 className="mb-4 text-lg font-semibold text-emerald-400">
            {category.category}
          </h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                isVisible={isVisible}
                delay={categoryIndex * 200 + skillIndex * 100}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

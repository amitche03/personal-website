"use client";

import Image from "next/image";

type Tech = {
  name: string;
  icon: string;
};

type TechCategory = {
  category: string;
  items: Tech[];
};

const techData: TechCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "/JS Logo.svg" },
      { name: "TypeScript", icon: "/Typescript SVG Icon.svg" },
      { name: "Python", icon: "/Python SVG Icons.svg" },
      { name: "Java", icon: "/Java SVG Icons.svg" },
      { name: "Swift", icon: "/Swift SVG Icons.svg" },
      { name: "C++", icon: "/C Plus Plus Icon.svg" },
      { name: "R", icon: "/R Logo.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "/React SVG Icons.svg" },
      { name: "Next.js", icon: "/Next.js SVG Icon.svg" },
      { name: "Node.js", icon: "/Nodejs02 SVG Icon.svg" },
      { name: "FastAPI", icon: "/FastAPI Icon.svg" },
      { name: "Angular", icon: "/Angular SVG Icons.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "MongoDB", icon: "/Mongo SVG Icon.svg" },
      { name: "GraphQL", icon: "/GraphQL SVG Icon.svg" },
      { name: "Vercel", icon: "/Vercel_dark.svg" },
      { name: "Figma", icon: "/Figma SVG Icons (1).svg" },
      { name: "Gradle", icon: "/Gradle SVG Icons.svg" },
      { name: "Docker", icon: "/Docker SVG Icon.svg" },
    ],
  },
  {
    category: "Data & ML",
    items: [
      { name: "Pandas", icon: "/Pandas SVG Icon (1).svg" },
      { name: "TensorFlow", icon: "/TensorFlow SVG Icons (1).svg" },
    ],
  },
];

function TechIcon({ tech }: { tech: Tech }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-white/[0.08] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      </div>
      <span className="text-xs text-white/60 transition-colors group-hover:text-emerald-400">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="space-y-8">
      {techData.map((category) => (
        <div key={category.category}>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-6">
            {category.items.map((tech) => (
              <TechIcon key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

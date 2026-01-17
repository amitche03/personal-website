import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-emerald-500/5">
      {/* Gradient hover effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-emerald-500/5 group-hover:to-transparent" />

      <div className="relative">
        {project.featured && (
          <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Featured
          </div>
        )}
        <div className="mb-2 text-lg font-semibold group-hover:text-emerald-400 transition-colors duration-200">
          {project.title}
        </div>
        <p className="mb-4 text-sm text-white/70">{project.summary}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/60 transition-colors group-hover:border-emerald-500/20 group-hover:text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-emerald-400 transition-all hover:text-emerald-300 hover:gap-2"
            >
              Live Demo
              <svg
                className="h-4 w-4"
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
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

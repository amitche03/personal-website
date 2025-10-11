import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04]">
      <div className="mb-2 text-lg font-semibold">{project.title}</div>
      <p className="mb-4 text-sm text-white/70">{project.summary}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link href={`/projects/${project.slug}`} className="text-emerald-400 hover:text-emerald-300">Case Study</Link>
        {project.repo && (
          <Link href={project.repo} target="_blank" className="text-white/70 hover:text-white">GitHub</Link>
        )}
        {project.demo && (
          <Link href={project.demo} target="_blank" className="text-white/70 hover:text-white">Live</Link>
        )}
      </div>
    </div>
  );
}

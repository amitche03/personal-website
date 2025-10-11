import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <article className="py-16">
      <h1 className="mb-3 text-4xl font-bold">{project.title}</h1>
      <p className="mb-6 text-white/70">{project.summary}</p>
      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">{t}</span>
        ))}
      </div>
      <div className="prose prose-invert max-w-none">
        <h3>Overview</h3>
        <p>Case study content coming soon.</p>
      </div>
    </article>
  );
}

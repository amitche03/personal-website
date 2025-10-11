import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <h1 className="mb-6 text-4xl font-bold">Projects</h1>
      <p className="mb-10 text-white/70">A selection of work and experiments.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

import ProjectCard from "@/components/project-card";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="relative py-16">
      {/* Gradient background effect */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl" />

      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="mb-10 max-w-2xl text-white/70">
          A selection of work and experiments. From full-stack web apps to
          mobile applications, here&apos;s what I&apos;ve been building.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, index) => (
          <AnimateOnScroll key={p.slug} animation="fade-up" delay={index * 100}>
            <ProjectCard project={p} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

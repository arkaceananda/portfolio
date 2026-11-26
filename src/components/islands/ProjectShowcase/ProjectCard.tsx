import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="flex aspect-[3/5] min-h-[24rem] flex-col rounded-xl border border-silver/20 bg-background p-6 text-foreground shadow-sm"
      style={{ borderColor: project.accentColor }}
    >
      <h3 className="font-fraunces text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm text-silver-dim">
        {project.briefDescription}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-silver/20 px-3 py-1 font-mono text-xs text-silver"
          >
            {tech}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 min-h-11 self-start rounded-md px-5 text-sm font-medium text-background"
        style={{ backgroundColor: project.accentColor }}
      >
        Lihat detail
      </button>
    </article>
  );
}

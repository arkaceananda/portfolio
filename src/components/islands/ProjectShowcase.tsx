import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/types";
import ProjectCard from "./ProjectShowcase/ProjectCard";
import ProjectModal from "./ProjectShowcase/ProjectModal";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  const go = (direction: -1 | 1): void => {
    setActiveIndex((current) =>
      (current + direction + projects.length) % projects.length
    );
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "ArrowLeft") go(-1);
    if (event.key === "ArrowRight") go(1);
  };

  return (
    <div>
      <div
        role="group"
        aria-label="Carousel project"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Project sebelumnya"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-silver/20 text-silver hover:text-foreground"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full shrink-0 px-1">
                <ProjectCard project={project} onOpen={() => setSelected(project)} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Project berikutnya"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-silver/20 text-silver hover:text-foreground"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p aria-live="polite" className="mt-4 text-center font-mono text-xs text-silver-dim">
        {activeIndex + 1} / {projects.length}
      </p>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

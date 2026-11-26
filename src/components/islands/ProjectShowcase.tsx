import { useState } from "react";

import type { Project } from "@/types";
import ProjectCarousel from "./ProjectShowcase/ProjectCarousel";
import ProjectModal from "./ProjectShowcase/ProjectModal";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <div>
      <ProjectCarousel projects={projects} onOpen={setSelected} />
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

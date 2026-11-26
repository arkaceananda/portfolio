import { useEffect } from "react";
import { Download, ExternalLink, X } from "lucide-react";

import type { Project } from "@/types";
import PhoneMockup from "./PhoneMockup";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 gap-6 overflow-y-auto rounded-2xl bg-background p-6 md:grid-cols-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail project"
          className="absolute top-4 right-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-silver hover:text-foreground"
        >
          <X size={22} />
        </button>

        <div className="md:col-span-1">
          <h2 className="font-fraunces text-2xl font-semibold text-foreground">
            {project.title}
          </h2>
          <p className="mt-3 text-sm text-silver">{project.longDescription}</p>
          <h3 className="mt-5 font-mono text-xs uppercase tracking-widest text-silver-dim">
            Problem
          </h3>
          <p className="mt-1 text-sm text-silver">{project.problem}</p>
          <h3 className="mt-5 font-mono text-xs uppercase tracking-widest text-silver-dim">
            Solution
          </h3>
          <p className="mt-1 text-sm text-silver">{project.solution}</p>
          <h3 className="mt-5 font-mono text-xs uppercase tracking-widest text-silver-dim">
            Key features
          </h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-silver">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-silver/20 px-4 text-sm text-foreground hover:bg-silver/10"
            >
              <ExternalLink size={16} /> Source
            </a>
            <a
              href={project.apkUrl}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-silver/20 px-4 text-sm text-foreground hover:bg-silver/10"
            >
              <Download size={16} /> APK
            </a>
          </div>
        </div>

        <div className="flex justify-center md:col-span-3">
          <PhoneMockup videoUrl={project.videoUrl} title={project.title} />
        </div>
      </div>
    </div>
  );
}

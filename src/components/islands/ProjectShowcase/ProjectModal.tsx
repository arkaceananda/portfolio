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

  const showPhone = project.platform === "mobile" && Boolean(project.videoUrl);
  const hasPreview = showPhone || Boolean(project.videoUrl || project.previewImage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className={`relative grid max-h-[90vh] w-full max-w-4xl gap-6 overflow-y-auto rounded-2xl bg-background p-6 ${hasPreview ? "md:grid-cols-5" : "grid-cols-1"}`}
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

        <div className={hasPreview ? "md:col-span-3" : undefined}>
          <h2 className="font-fraunces text-2xl font-semibold text-foreground">
            {project.title}
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-silver-dim">
            {project.platform}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-silver">
            {project.longDescription}
          </p>
          <div className="mt-4 space-y-3">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-silver-dim">Problem</h3>
              <p className="text-sm text-silver">{project.problem}</p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-silver-dim">Solution</h3>
              <p className="text-sm text-silver">{project.solution}</p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-silver-dim">Highlights</h3>
              <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-silver">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="before:mr-1 before:text-silver-dim before:content-['·']">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-silver/20 px-4 text-sm text-foreground hover:bg-silver/10"
              >
                <ExternalLink size={16} /> Source
              </a>
            )}
            {project.apkUrl && (
              <a
                href={project.apkUrl}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-silver/20 px-4 text-sm text-foreground hover:bg-silver/10"
              >
                <Download size={16} /> APK
              </a>
            )}
            {project.binaryUrl && (
              <a
                href={project.binaryUrl}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-silver/20 px-4 text-sm text-foreground hover:bg-silver/10"
              >
                <Download size={16} /> {project.binaryLabel ?? "Download"}
              </a>
            )}
          </div>
        </div>

        {hasPreview && (
          <div className={`flex justify-center ${hasPreview ? "md:col-span-2" : ""}`}>
            {showPhone && project.videoUrl ? (
              <PhoneMockup videoUrl={project.videoUrl} title={project.title} />
            ) : project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-xs rounded-xl"
                aria-label={`Demo ${project.title}`}
              />
            ) : project.previewImage ? (
              <img
                src={project.previewImage}
                alt={`Preview ${project.title}`}
                className="w-full max-w-xs rounded-xl object-cover"
              />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

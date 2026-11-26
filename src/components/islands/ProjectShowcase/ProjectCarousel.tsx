import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

export default function ProjectCarousel({
  projects,
  onOpen,
}: ProjectCarouselProps) {
  const [active, setActive] = useState(() => Math.floor(projects.length / 2));
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const count = projects.length;

  const scrollToCard = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current;
    if (!viewport || count === 0) return;
    const cards = viewport.querySelectorAll<HTMLElement>("[data-carousel-card]");
    const card = cards[index];
    if (!card) return;
    viewport.scrollTo({
      left: card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2,
      behavior,
    });
    setActive(index);
  }, [count]);

  const step = (direction: -1 | 1): void => {
    const next = (active + direction + count) % count;
    scrollToCard(next);
  };

  useEffect(() => {
    scrollToCard(Math.floor(count / 2), "auto");
  }, [count, scrollToCard]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || count === 0) return;
    const onScroll = (): void => {
      const cards = viewport.querySelectorAll<HTMLElement>("[data-carousel-card]");
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setActive(closest);
      cards.forEach((card, index) => {
        const distance = Math.min(
          Math.abs(index - closest),
          count - Math.abs(index - closest)
        );
        const focused = distance === 0;
        card.style.opacity = focused ? "1" : "0.45";
        card.style.filter = focused ? "none" : "blur(2px)";
        card.style.transform = focused ? "scale(1)" : "scale(0.94)";
        card.style.zIndex = focused ? "20" : "10";
      });
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [count]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>): void => {
    dragStart.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>): void => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(delta) > 48) step(delta < 0 ? 1 : -1);
  };

  return (
    <div className="relative w-full">
      <div
        ref={viewportRef}
        role="group"
        aria-label="Carousel project"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-min(85vw,22rem)/2)] py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-[calc(50%-min(45vw,26rem)/2)] lg:px-[calc(50%-min(30vw,22rem)/2)]"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-carousel-card
            data-active={index === active}
            className="w-[min(85vw,22rem)] shrink-0 snap-center transition-all duration-300 sm:w-[min(45vw,26rem)] lg:w-[min(30vw,22rem)]"
          >
            <ProjectCard project={project} onOpen={() => onOpen(project)} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Project sebelumnya"
        className="absolute top-1/2 left-2 z-30 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-silver/20 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-silver/10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Project berikutnya"
        className="absolute top-1/2 right-2 z-30 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-silver/20 bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-silver/10"
      >
        <ChevronRight size={20} />
      </button>

      <p aria-live="polite" className="mt-4 text-center font-mono text-xs text-silver-dim">
        {active + 1} / {count}
      </p>
    </div>
  );
}

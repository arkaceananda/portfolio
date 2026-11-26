import { useEffect, useState } from "react";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function HeroBackground() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent): void =>
      setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-60"
    >
      <FlickeringGrid
        color="rgb(160, 160, 160)"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        maxOpacity={0.3}
        className="h-full w-full"
      />
    </div>
  );
}

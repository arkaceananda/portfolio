import { LightRays } from "@/components/magicui/light-rays";

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="hero-rays pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <LightRays
        count={5}
        color="var(--hero-ray-color)"
        blur={48}
        speed={18}
        length="65vh"
        className="h-full w-full"
      />
    </div>
  );
}

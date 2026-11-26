import { lazy, Suspense, useEffect, useState } from "react";

const Lanyard = lazy(() => import("@/components/Lanyard"));

interface DitherCardProps {
  className?: string;
}

export default function DitherCard({ className }: DitherCardProps) {
  const [size, setSize] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.55 : 0.32
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = (): void => setSize(query.matches ? 0.55 : 0.32);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className={`h-full w-full ${className ?? ""}`}>
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center rounded-2xl border border-silver/20 bg-background">
            <img
              src="/profile.svg"
              alt="Foto profil Arka Aceananda"
              className="h-full w-full object-cover"
            />
          </div>
        }
      >
        <Lanyard
          frontImage="/profile.svg"
          backImage="/profile-dither.svg"
          anchor="right"
          imageFit="cover"
          orientation="portrait"
          finish="glossy"
          size={size}
          strapLength={0.42}
          strapWidth={0.75}
          strapColor="#1a1a1a"
          metal="silver"
          gravity={1}
          damping={0.6}
          elasticity={0.5}
          breeze={0}
          interactive
          intro
        />
      </Suspense>
    </div>
  );
}

import { useTypewriter } from "@/hooks/useTypewriter";

const ROLES = ["Android Developer", "Kotlin Developer", "Compose Enthusiast"];

export default function Typewriter() {
  const text = useTypewriter({ words: ROLES });

  return (
    <span className="font-mono text-silver">
      {text}
      <span className="cursor-blink ml-0.5" aria-hidden="true">
        |
      </span>
    </span>
  );
}

import type { ReactNode } from "react";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

interface HoverButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function HoverButton({
  href,
  children,
  className,
}: HoverButtonProps) {
  const handleClick = (): void => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InteractiveHoverButton
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </InteractiveHoverButton>
  );
}

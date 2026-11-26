import type { ReactNode } from "react";
import { ArrowUp, LayoutGrid, Mail, Sparkles } from "lucide-react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { navItems } from "@/data/navigation";

const ICONS: Record<string, ReactNode> = {
  "layout-grid": <LayoutGrid size={20} />,
  sparkles: <Sparkles size={20} />,
  mail: <Mail size={20} />,
  "arrow-up": <ArrowUp size={20} />,
};

export default function MobileDock() {
  return (
    <nav
      aria-label="Navigasi mobile"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center pb-[calc(24px+env(safe-area-inset-bottom))] sm:hidden"
    >
      <Dock direction="middle" className="border-silver/20 bg-background/80">
        {navItems.map((item) => (
          <DockIcon
            key={item.href}
            className="group relative min-h-11 min-w-11 text-silver hover:text-foreground"
          >
            <a
              href={item.href}
              aria-label={item.label}
              className="flex min-h-11 min-w-11 items-center justify-center"
            >
              {ICONS[item.icon] ?? null}
            </a>
            <span className="pointer-events-none absolute -top-9 rounded bg-foreground px-2 py-1 text-xs whitespace-nowrap text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              {item.label}
            </span>
          </DockIcon>
        ))}
      </Dock>
    </nav>
  );
}

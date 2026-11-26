import { useEffect, useState } from "react";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = document.documentElement.dataset.theme;
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  const handleThemeChange = (next: "light" | "dark"): void => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage can be unavailable (private mode, disabled storage)
    }
    setTheme(next);
  };

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={handleThemeChange}
      aria-label="Ganti tema"
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-silver transition-colors hover:text-foreground [&_svg]:h-5 [&_svg]:w-5"
    />
  );
}

import { useEffect, useState } from "react";

import { Terminal } from "@/components/magicui/terminal";

export default function FooterTerminal() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = (): void => setTime(formatter.format(new Date()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <Terminal sequence={false} className="border-silver/20 bg-[#141414]">
      <div className="footer-terminal min-h-48" role="group" aria-label="Terminal: whoami">
        <p className="terminal-prompt">
          <span className="t-user">arkaaceananda@fedora</span>{" "}
          <span className="t-dim">in</span> <span className="t-dir">~</span>{" "}
          <span className="t-dim">at</span>{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="mx-1 inline-block align-[-2px]"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <time aria-hidden="true">{time}</time>
        </p>
        <p className="terminal-cmd">
          <span className="t-arrow">&gt;</span> <span className="t-whoami">whoami</span>
        </p>
        <p className="terminal-out">Arka Aceananda - Android Developer</p>
        <p className="terminal-out t-dim">
          Kotlin · Jetpack Compose{" "}
          <span className="cursor-blink" aria-hidden="true">
            █
          </span>
        </p>
      </div>
    </Terminal>
  );
}

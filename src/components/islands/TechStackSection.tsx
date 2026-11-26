import type { ReactNode } from "react";
import {
  Box,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";

import { IconCloud } from "@/components/magicui/icon-cloud";

const ICONS: ReactNode[] = [
  <Code key="code" />,
  <Smartphone key="smartphone" />,
  <Layers key="layers" />,
  <Database key="database" />,
  <GitBranch key="git" />,
  <Palette key="palette" />,
  <Terminal key="terminal" />,
  <Cloud key="cloud" />,
  <Zap key="zap" />,
  <Box key="box" />,
  <Cpu key="cpu" />,
  <Globe key="globe" />,
];

export default function TechStackSection() {
  return <IconCloud icons={ICONS} showControl />;
}

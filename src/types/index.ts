export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface TechSkill {
  name: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  briefDescription: string;
  longDescription: string;
  techStack: string[];
  platform: "mobile" | "web" | "desktop" | "cli";
  videoUrl?: string;
  previewImage?: string;
  githubUrl: string;
  apkUrl?: string;
  binaryUrl?: string;
  binaryLabel?: string;
  accentColor: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
}

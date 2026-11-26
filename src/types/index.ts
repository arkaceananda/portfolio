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
  videoUrl: string;
  githubUrl: string;
  apkUrl: string;
  accentColor: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
}

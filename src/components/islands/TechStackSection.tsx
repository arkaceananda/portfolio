import OrbitImages from "@/components/OrbitImages";

interface OrbitSkill {
  src: string;
  alt: string;
}

const SKILLS: OrbitSkill[] = [
  { src: "/tech/kotlin.svg", alt: "Kotlin" },
  { src: "/tech/android.svg", alt: "Android" },
  { src: "/tech/java.svg", alt: "Java" },
  { src: "/tech/sqlite.svg", alt: "SQLite" },
  { src: "/tech/firebase.svg", alt: "Firebase" },
  { src: "/tech/linux.svg", alt: "Linux" },
  { src: "/tech/git.svg", alt: "Git" },
  { src: "/tech/github.svg", alt: "GitHub" },
];

export default function TechStackSection() {
  return <OrbitImages images={SKILLS} itemSize={92} pathColor="currentColor" showPath />;
}

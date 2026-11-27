import ProfileCard from "@/components/ProfileCard";

export default function IntroCard() {
  return (
    <ProfileCard
      avatarUrl="/avatar.webp"
      name="Arka Aceananda"
      title="Android Developer"
      handle=""
      status="Junior Developer"
      statusColor="#4ade80"
      contactText="Contact"
      onContactClick={() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      theme="dark"
      enableTilt={false}
      intro={false}
    />
  );
}

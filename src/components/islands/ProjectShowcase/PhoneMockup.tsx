import { Android as AndroidMockup } from "@/components/magicui/android";

interface PhoneMockupProps {
  videoUrl: string;
  title: string;
}

export default function PhoneMockup({ videoUrl, title }: PhoneMockupProps) {
  return (
    <div data-theme="dark" className="w-[220px] max-w-full sm:w-[240px]">
      <AndroidMockup
        videoSrc={videoUrl}
        width={433}
        height={882}
        className="h-auto w-full"
        aria-label={`Demo ${title}`}
      />
    </div>
  );
}

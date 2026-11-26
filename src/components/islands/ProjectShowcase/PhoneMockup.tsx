interface PhoneMockupProps {
  videoUrl: string;
  title: string;
}

export default function PhoneMockup({ videoUrl, title }: PhoneMockupProps) {
  return (
    <div className="relative w-[260px] rounded-[40px] border-[8px] border-black bg-black p-1 shadow-2xl">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[32px] bg-black">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          aria-label={`Demo ${title}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/30" />
    </div>
  );
}

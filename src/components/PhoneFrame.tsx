import Image from "next/image";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "@/data/screens";

type FrameSize = "sm" | "md" | "lg";

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  size?: FrameSize;
  /** Set on the single above-the-fold frame (hero) so it loads eagerly. */
  priority?: boolean;
  className?: string;
}

const frames: Record<
  FrameSize,
  { width: string; radius: string; screenRadius: string; pad: string; island: string }
> = {
  sm: {
    width: "w-[200px]",
    radius: "rounded-[28px]",
    screenRadius: "rounded-[22px]",
    pad: "p-1.5",
    island: "top-2 h-4 w-16",
  },
  md: {
    width: "w-[280px]",
    radius: "rounded-[36px]",
    screenRadius: "rounded-[30px]",
    pad: "p-2",
    island: "top-2.5 h-5 w-20",
  },
  lg: {
    width: "w-[320px]",
    radius: "rounded-[44px]",
    screenRadius: "rounded-[36px]",
    pad: "p-2.5",
    island: "top-3 h-6 w-24",
  },
};

const sizesAttr: Record<FrameSize, string> = {
  sm: "200px",
  md: "280px",
  lg: "320px",
};

/**
 * Reusable iPhone frame around a real beta screenshot.
 *
 * The frame keeps the screenshot's native 1320×2868 aspect ratio so the
 * layout never shifts while the image loads. Used in the hero, the app
 * showcase, how-it-works, and the brands placement cards.
 */
export function PhoneFrame({
  src,
  alt,
  caption,
  size = "md",
  priority = false,
  className = "",
}: PhoneFrameProps) {
  const f = frames[size];

  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div
        className={`relative ${f.width} max-w-full aspect-[1320/2868] bg-ink ${f.pad} ${f.radius} shadow-[0_8px_24px_-8px_rgba(20,20,20,0.16),0_40px_80px_-24px_rgba(20,20,20,0.3)]`}
      >
        {/* Dynamic Island */}
        <div
          aria-hidden
          className={`absolute left-1/2 -translate-x-1/2 z-10 bg-ink rounded-full ${f.island}`}
        />
        <div className={`relative size-full overflow-hidden ${f.screenRadius} bg-ivory`}>
          <Image
            src={src}
            alt={alt}
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT}
            sizes={sizesAttr[size]}
            priority={priority}
            className="size-full object-cover object-top"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-[13px] text-ink/55 text-center leading-snug max-w-[220px]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

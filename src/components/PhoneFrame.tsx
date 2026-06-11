"use client";

import Image from "next/image";
import { useState } from "react";

type FrameSize = "sm" | "md" | "lg";

interface PhoneFrameProps {
  src: string;
  alt: string;
  caption?: string;
  size?: FrameSize;
  /** Above-the-fold frame (hero): preloads the image. */
  priority?: boolean;
  /** Load eagerly without preload hints (carousel screens). */
  eager?: boolean;
  className?: string;
}

// Outer radius per size; screen radius = outer − 10 (the uniform bezel width).
const frames: Record<FrameSize, { width: string; radius: string; screenRadius: string; sizes: string }> = {
  sm: { width: "w-[200px]", radius: "rounded-[36px]", screenRadius: "rounded-[26px]", sizes: "180px" },
  md: { width: "w-[264px]", radius: "rounded-[44px]", screenRadius: "rounded-[34px]", sizes: "244px" },
  lg: { width: "w-[320px]", radius: "rounded-[52px]", screenRadius: "rounded-[42px]", sizes: "300px" },
};

/**
 * The single iPhone-frame implementation used by the hero, how-it-works,
 * app showcase, and the brands placement cards.
 *
 * The simulator screenshots are full captures that already contain the
 * real iOS status bar and Dynamic Island, so the frame draws NO island and
 * NO status bar — just an even ink bezel. The screen keeps the capture's
 * exact 1320/2868 aspect ratio, so images render with zero crop and zero
 * layout shift; if one fails to load, a neutral ivory screen with the
 * wordmark renders instead of a blank rectangle.
 */
export function PhoneFrame({
  src,
  alt,
  caption,
  size = "md",
  priority = false,
  eager = false,
  className = "",
}: PhoneFrameProps) {
  const f = frames[size];
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div
        className={`${f.width} max-w-full bg-ink p-2.5 ${f.radius} shadow-[0_30px_60px_-22px_rgba(20,20,20,0.35)]`}
      >
        <div
          className={`relative w-full aspect-[1320/2868] overflow-hidden ${f.screenRadius} bg-ivory`}
        >
          {failed ? (
            <div
              role="img"
              aria-label={alt}
              className="size-full flex items-center justify-center"
            >
              <span className="font-display text-lg text-ink/40 tracking-tight">
                WearWhere
              </span>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={f.sizes}
              priority={priority}
              loading={priority ? undefined : eager ? "eager" : "lazy"}
              className="object-cover object-top"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-[13px] text-ink/55 text-center leading-snug max-w-55">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

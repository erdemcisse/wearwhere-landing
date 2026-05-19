import type { ReactNode } from "react";

interface MockPhoneFrameProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

/**
 * A non-photographic phone frame for showcasing mock interface previews.
 * Always carries a "Beta interface preview" label so visitors don't read
 * the contents as live App Store screenshots.
 */
export function MockPhoneFrame({
  children,
  label = "Beta interface preview",
  className = "",
}: MockPhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink text-ivory text-[0.6rem] font-medium tracking-[0.18em] uppercase px-3 py-1.5">
        <span className="size-1 rounded-full bg-coral" aria-hidden />
        {label}
      </span>

      <div
        className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[44px] bg-ink p-2.5 shadow-[0_24px_60px_-20px_rgba(20,20,20,0.32),0_8px_24px_-8px_rgba(20,20,20,0.16)]"
        role="img"
        aria-label={label}
      >
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-ink z-20" />

        {/* Screen */}
        <div className="relative size-full overflow-hidden rounded-[36px] bg-ivory">
          {children}
        </div>
      </div>
    </div>
  );
}

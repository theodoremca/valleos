import type { ReactNode } from "react";

/** iOS-ish status bar — the product frames are all mobile-first. */
export function StatusBar({ time = "9:41", tone = "ink" }: { time?: string; tone?: "ink" | "paper" }) {
  const color = tone === "paper" ? "text-paper" : "text-ink";
  return (
    <div className={`flex items-center justify-between px-6 pb-1 pt-3 ${color}`}>
      <span className="t-num text-[12px] font-semibold">{time}</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <svg width="15" height="10" viewBox="0 0 16 11" fill="none" aria-hidden="true">
          <rect x="0" y="7" width="2.6" height="4" rx="0.7" fill="currentColor" />
          <rect x="4.2" y="5" width="2.6" height="6" rx="0.7" fill="currentColor" />
          <rect x="8.4" y="2.6" width="2.6" height="8.4" rx="0.7" fill="currentColor" />
          <rect x="12.6" y="0" width="2.6" height="11" rx="0.7" fill="currentColor" opacity="0.35" />
        </svg>
        <svg width="20" height="10" viewBox="0 0 22 11" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="18" height="10" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="12.5" height="7" rx="1.8" fill="currentColor" />
          <path d="M20.4 4v3a2 2 0 0 0 0-3Z" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

export function TabBar({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="mt-auto flex items-center justify-between border-t border-line bg-paper/90 px-4 pb-5 pt-2.5 backdrop-blur">
      {items.map((item) => (
        <span
          key={item}
          className={`text-[10.5px] font-medium tracking-[-0.005em] ${
            item === active ? "text-ink" : "text-ink-40"
          }`}
        >
          <span
            className={`mx-auto mb-1 block h-[3px] w-4 rounded-full ${
              item === active ? "bg-ink" : "bg-transparent"
            }`}
          />
          {item}
        </span>
      ))}
    </div>
  );
}

/**
 * Device frame. Deliberately restrained: a single bezel ring and a
 * long soft shadow — no glossy 3D chrome.
 */
export function PhoneFrame({
  children,
  className = "",
  screenClassName = "",
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2.6rem] bg-gradient-to-b from-night-4 to-night p-[3px] shadow-[0_2px_5px_rgba(12,20,31,0.12),0_40px_80px_-40px_rgba(12,20,31,0.55)]">
        <div className="rounded-[2.45rem] bg-night p-[5px]">
          <div
            className={`relative flex flex-col overflow-hidden rounded-[2.1rem] bg-paper ${screenClassName}`}
          >
            <span
              className="absolute left-1/2 top-2 z-20 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-night"
              aria-hidden="true"
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


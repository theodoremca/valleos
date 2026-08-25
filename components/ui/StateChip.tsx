import type { ReactNode } from "react";

export type StateKind =
  | "go"
  | "caution"
  | "reject"
  | "stale"
  | "proposed"
  | "manual"
  | "ai"
  | "neutral";

const light: Record<StateKind, string> = {
  go: "bg-go-lite text-go-deep ring-go/20",
  caution: "bg-caution-lite text-caution ring-caution/25",
  reject: "bg-reject-lite text-reject ring-reject/25",
  stale: "bg-stale-lite text-stale ring-stale/25",
  proposed: "bg-proposed-lite text-proposed ring-proposed/20",
  manual: "bg-manual-lite text-manual ring-manual/25",
  ai: "bg-ai-lite text-ai ring-ai/20",
  neutral: "bg-bone text-ink-55 ring-line",
};

const dark: Record<StateKind, string> = {
  go: "bg-go-glow/12 text-go-glow ring-go-glow/25",
  caution: "bg-caution-glow/12 text-caution-glow ring-caution-glow/25",
  reject: "bg-reject-glow/12 text-reject-glow ring-reject-glow/25",
  stale: "bg-white/[0.06] text-ink-25 ring-white/12",
  proposed: "bg-proposed/20 text-proposed-lite ring-proposed/40",
  manual: "bg-manual/20 text-manual-lite ring-manual/40",
  ai: "bg-ai-glow/12 text-ai-glow ring-ai-glow/25",
  neutral: "bg-white/[0.05] text-paper/55 ring-white/10",
};

export function StateChip({
  kind = "neutral",
  tone = "ink",
  children,
  dot = false,
  className = "",
}: {
  kind?: StateKind;
  tone?: "ink" | "paper";
  children: ReactNode;
  dot?: boolean;
  className?: string;
}) {
  const palette = tone === "paper" ? dark : light;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] font-mono text-[10.5px] font-medium uppercase leading-[1.5] tracking-[0.075em] ring-1 ring-inset ${palette[kind]} ${className}`}
    >
      {dot && <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />}
      {children}
    </span>
  );
}

/** Tick / cross / dash glyph used by the readiness checks. */
export function StateGlyph({
  kind,
  className = "",
}: {
  kind: "pass" | "fail" | "unknown";
  className?: string;
}) {
  if (kind === "pass") {
    return (
      <span
        className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-go text-white ${className}`}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 6.3 4.8 8.6 9.5 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
        </svg>
      </span>
    );
  }
  if (kind === "fail") {
    return (
      <span
        className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-reject text-white ${className}`}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M3.2 3.2 8.8 8.8M8.8 3.2 3.2 8.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`hatch-stale inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-stale-lite text-stale ring-1 ring-inset ring-stale/30 ${className}`}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3 6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      </svg>
    </span>
  );
}

import type { ReactNode } from "react";

type Tone = "ink" | "paper";

/** label · value row — the product's basic economics line. */
export function DataRow({
  label,
  sub,
  value,
  tone = "ink",
  emphasis = "normal",
  className = "",
}: {
  label: ReactNode;
  sub?: ReactNode;
  value: ReactNode;
  tone?: Tone;
  emphasis?: "normal" | "strong" | "negative" | "positive" | "muted";
  className?: string;
}) {
  const labelTone = tone === "paper" ? "text-paper/55" : "text-ink-55";
  const subTone = tone === "paper" ? "text-paper/35" : "text-ink-40";

  const valueTone =
    emphasis === "negative"
      ? tone === "paper"
        ? "text-reject-glow"
        : "text-reject"
      : emphasis === "positive"
        ? tone === "paper"
          ? "text-go-glow"
          : "text-go"
        : emphasis === "muted"
          ? tone === "paper"
            ? "text-paper/40"
            : "text-ink-40"
          : tone === "paper"
            ? "text-paper"
            : "text-ink";

  return (
    <div className={`flex items-baseline justify-between gap-4 py-2.5 ${className}`}>
      <span className="min-w-0">
        <span
          className={`block text-[0.8125rem] leading-snug ${labelTone} ${
            emphasis === "strong" ? "font-medium" : ""
          }`}
        >
          {label}
        </span>
        {sub && <span className={`block text-[11.5px] leading-snug ${subTone}`}>{sub}</span>}
      </span>
      <span
        className={`t-num shrink-0 text-[0.875rem] ${
          emphasis === "strong" ? "font-semibold" : "font-medium"
        } ${valueTone}`}
      >
        {value}
      </span>
    </div>
  );
}

/** Big number + caption, used for RPM / margin / profit cells. */
export function MetricCell({
  label,
  value,
  tone = "ink",
  emphasis = "normal",
  className = "",
}: {
  label: ReactNode;
  value: ReactNode;
  tone?: Tone;
  emphasis?: "normal" | "positive" | "negative" | "muted";
  className?: string;
}) {
  const valueTone =
    emphasis === "positive"
      ? tone === "paper"
        ? "text-go-glow"
        : "text-go"
      : emphasis === "negative"
        ? tone === "paper"
          ? "text-reject-glow"
          : "text-reject"
        : emphasis === "muted"
          ? tone === "paper"
            ? "text-paper/35"
            : "text-ink-40"
          : tone === "paper"
            ? "text-paper"
            : "text-ink";

  return (
    <div className={className}>
      <div
        className={`t-label ${tone === "paper" ? "text-paper/40" : "text-ink-40"} text-[10px]`}
      >
        {label}
      </div>
      <div className={`t-num mt-1.5 text-[1.375rem] font-semibold leading-none ${valueTone}`}>
        {value}
      </div>
    </div>
  );
}

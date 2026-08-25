import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "ink" | "paper";

export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`t-label inline-flex items-center gap-2 ${
        tone === "paper" ? "text-paper/45" : "text-ink-40"
      } ${className}`}
    >
      <span
        className={`h-px w-6 ${tone === "paper" ? "bg-paper/30" : "bg-ink-25"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

type SectionHeadProps = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
  size?: "md" | "lg";
};

export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = "ink",
  align = "left",
  className = "",
  size = "md",
}: SectionHeadProps) {
  const titleSize =
    size === "lg"
      ? "text-[clamp(2.5rem,6.2vw,5.25rem)]"
      : "text-[clamp(2.1rem,4.6vw,3.75rem)]";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={`t-head mt-5 ${titleSize} ${
            tone === "paper" ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={120}>
          <p
            className={`t-sub mt-6 max-w-[54ch] text-[1.0625rem] md:text-[1.1875rem] ${
              align === "center" ? "mx-auto" : ""
            } ${tone === "paper" ? "text-paper/60" : "text-ink-55"}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

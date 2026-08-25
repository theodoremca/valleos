import type { ReactNode } from "react";

type Variant = "primary" | "primary-dark" | "accent" | "ghost" | "ghost-dark";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-night-3 shadow-[0_1px_2px_rgba(12,20,31,0.16),0_10px_24px_-14px_rgba(12,20,31,0.6)] hover:shadow-[0_2px_4px_rgba(12,20,31,0.18),0_16px_34px_-16px_rgba(12,20,31,0.7)]",
  "primary-dark":
    "bg-paper text-ink hover:bg-bone shadow-[0_10px_30px_-16px_rgba(0,0,0,0.9)]",
  accent:
    "bg-go text-white hover:bg-go-deep shadow-[0_1px_2px_rgba(7,92,51,0.24),0_12px_26px_-14px_rgba(7,92,51,0.7)]",
  ghost:
    "border border-line bg-paper text-ink hover:border-ink-40 hover:bg-bone",
  "ghost-dark":
    "border border-white/18 text-paper hover:border-white/40 hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[0.9375rem]",
  lg: "h-[52px] px-7 text-[1.0625rem]",
};

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
};

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  arrow = false,
}: CtaProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
      {arrow && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
        >
          <path
            d="M3 8h9.5M8.5 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </svg>
      )}
    </a>
  );
}

/** Understated text link with a rule that draws in on hover. */
export function TextLink({
  href,
  children,
  tone = "ink",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium tracking-[-0.01em] ${
        tone === "paper" ? "text-paper/80 hover:text-paper" : "text-ink-70 hover:text-ink"
      } transition-colors duration-200 ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${
            tone === "paper" ? "bg-paper" : "bg-ink"
          }`}
        />
      </span>
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5">
        <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      </svg>
    </a>
  );
}

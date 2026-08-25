type LogoProps = {
  tone?: "ink" | "paper";
  className?: string;
  showWord?: boolean;
};

/**
 * The mark is a V whose final stroke turns into the "go" accent —
 * the moment a load clears its checks.
 */
export function Logo({ tone = "ink", className = "", showWord = true }: LogoProps) {
  const onDark = tone === "paper";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          width="24"
          height="24"
          rx="6.5"
          fill={onDark ? "#ffffff" : "#0c141f"}
        />
        <path
          d="M6.3 6.2 L12 16.9 L15.2 10.9"
          stroke={onDark ? "#0c141f" : "#ffffff"}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
        <path
          d="M15.2 10.9 L17.7 6.2"
          stroke={onDark ? "#0b7a45" : "#35d382"}
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg>
      {showWord && (
        <span
          className={`text-[1.115rem] font-semibold tracking-[-0.03em] ${
            onDark ? "text-paper" : "text-ink"
          }`}
        >
          ValleOS
        </span>
      )}
    </span>
  );
}

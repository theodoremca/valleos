"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * One shared IntersectionObserver for every reveal on the page.
 * Elements unobserve themselves once they have played.
 */
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
  }
  return sharedObserver;
}

type RevealProps = {
  as?: ElementType;
  variant?: "up" | "scale" | "left" | "right";
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  style,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = getObserver();
    if (!observer) {
      node.classList.add("is-in");
      return;
    }
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

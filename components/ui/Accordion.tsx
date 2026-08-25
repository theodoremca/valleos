"use client";

import { useId, useState } from "react";

export type QA = { q: string; a: string };

export function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`text-[1.0625rem] font-medium leading-snug tracking-[-0.015em] transition-colors duration-200 md:text-[1.1875rem] ${
                    isOpen ? "text-ink" : "text-ink-70 group-hover:text-ink"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 block size-4 shrink-0 text-ink-40 transition-colors duration-200 group-hover:text-ink"
                >
                  <span className="absolute left-0 top-1/2 block h-px w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 block h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-55 md:text-[1rem]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

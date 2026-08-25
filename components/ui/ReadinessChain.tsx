"use client";

import { useState } from "react";
import { StateChip, StateGlyph } from "./StateChip";

type Mode = "ready" | "blocked";

const layers = [
  {
    key: "carrier",
    n: "01",
    label: "Carrier",
    claim: "Authority and insurance verified",
    source: "Government record",
    ready: "Authority active · insurance valid to Nov 30, 2026 · last check Aug 20",
    blocked: "Authority active · insurance valid to Nov 30, 2026 · last check Aug 20",
    failsWhenBlocked: false,
  },
  {
    key: "truck",
    n: "02",
    label: "Truck",
    claim: "In the synced fleet, in service",
    source: "Motive",
    ready: "Truck 204 · VIN …8H4421 · Motive status active · 4 min ago",
    blocked: "Truck 204 · VIN …8H4421 · Motive status active · 4 min ago",
    failsWhenBlocked: false,
  },
  {
    key: "driver",
    n: "03",
    label: "Driver",
    claim: "Active and not flagged",
    source: "Motive + owner flags",
    ready: "Luis Herrera · Motive active · no do-not-dispatch flag",
    blocked: "Luis Herrera · Motive active · no do-not-dispatch flag",
    failsWhenBlocked: false,
  },
  {
    key: "hours",
    n: "04",
    label: "Hours",
    claim: "Enough hours, from fresh data",
    source: "Motive ELD",
    ready: "9h 20m drive available vs 7h 10m needed · HOS 4 min ago",
    blocked: "Last HOS data 3h 42m old. The freshness limit is 60 minutes.",
    failsWhenBlocked: true,
  },
];

export function ReadinessChain() {
  const [mode, setMode] = useState<Mode>("ready");
  const blocked = mode === "blocked";

  return (
    <div>
      {/* state switch */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="t-label text-paper/40">Readiness check &middot; RM-2408</p>
        <div
          className="inline-flex rounded-full border border-white/12 bg-white/[0.04] p-1"
          role="group"
          aria-label="Readiness scenario"
        >
          {(
            [
              ["ready", "All four pass"],
              ["blocked", "Hours go stale"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setMode(value)}
              aria-pressed={mode === value}
              className={`rounded-full px-4 py-1.5 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                mode === value ? "bg-paper text-ink" : "text-paper/55 hover:text-paper"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* the four layers */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer) => {
          const fails = blocked && layer.failsWhenBlocked;
          return (
            <div
              key={layer.key}
              className={`card-night relative flex flex-col p-4 transition-colors duration-500 ${
                fails ? "border-reject-glow/40 bg-reject/[0.09]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="t-num text-[11px] text-paper/25">{layer.n}</span>
                {fails ? (
                  <StateChip kind="stale" tone="paper">
                    Unknown
                  </StateChip>
                ) : (
                  <StateChip kind="go" tone="paper">
                    Verified
                  </StateChip>
                )}
              </div>

              <div className="mt-3 flex items-start gap-2.5">
                <StateGlyph kind={fails ? "unknown" : "pass"} className="mt-0.5" />
                <span>
                  <span className="block text-[1.0625rem] font-semibold leading-none tracking-[-0.02em] text-paper">
                    {layer.label}
                  </span>
                  <span className="mt-1.5 block text-[0.8125rem] leading-snug text-paper/50">
                    {layer.claim}
                  </span>
                </span>
              </div>

              <p
                className={`mt-3.5 border-t pt-3 text-[11.5px] leading-snug ${
                  fails
                    ? "border-reject-glow/25 text-reject-glow"
                    : "border-white/8 text-paper/40"
                }`}
              >
                {blocked ? layer.blocked : layer.ready}
              </p>

              <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.09em] text-paper/25">
                {layer.source}
              </p>
            </div>
          );
        })}
      </div>

      {/* the merge — four inputs, one outcome */}
      <div className="relative hidden h-14 lg:block" aria-hidden="true">
        {[12.5, 37.5, 62.5, 87.5].map((left) => (
          <span
            key={left}
            className={`absolute top-0 block h-7 w-px transition-colors duration-500 ${
              blocked && left === 87.5 ? "bg-reject-glow/60" : "bg-white/15"
            }`}
            style={{ left: `${left}%` }}
          />
        ))}
        <span
          className={`absolute top-7 block h-px transition-colors duration-500 ${
            blocked ? "bg-reject-glow/35" : "bg-white/15"
          }`}
          style={{ left: "12.5%", right: "12.5%" }}
        />
        <span
          className={`absolute left-1/2 top-7 block h-7 w-px transition-colors duration-500 ${
            blocked ? "bg-reject-glow/60" : "bg-go-glow/60"
          }`}
        />
      </div>

      <div className="h-6 lg:hidden" aria-hidden="true">
        <span className="mx-auto block h-full w-px bg-white/15" />
      </div>

      {/* the outcome */}
      <div
        className={`rounded-[14px] border p-5 transition-colors duration-500 md:p-7 ${
          blocked
            ? "border-reject-glow/30 bg-reject/[0.10]"
            : "border-go-glow/25 bg-go-glow/[0.07]"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="min-w-0">
            <p
              className={`t-head text-[clamp(1.75rem,3.4vw,2.5rem)] ${
                blocked ? "text-reject-glow" : "text-go-glow"
              }`}
            >
              {blocked ? "Dispatch blocked" : "Dispatch ready"}
            </p>
            <p className="mt-3 max-w-[58ch] text-[0.9375rem] leading-snug text-paper/60">
              {blocked
                ? "Unknown is a block, not a pass. Loads already in transit keep running; nothing new goes out until the hours are fresh — and the screen names which check failed and how to fix it."
                : "All four inputs are current. The dispatch is recorded as Dante Okafor acting for Red Mesa Freight, with the economics snapshot attached."}
            </p>
          </div>

          <div className="shrink-0">
            <StateChip kind={blocked ? "reject" : "go"} tone="paper" dot>
              {blocked ? "Hours unknown" : "4 of 4 pass"}
            </StateChip>
          </div>
        </div>

        {blocked && (
          <p className="mt-5 border-t border-white/10 pt-4 text-[0.8125rem] leading-snug text-paper/45">
            There is no override for a failed readiness check &mdash; not for a dispatcher, not for
            the owner, not for the AI.
          </p>
        )}
      </div>
    </div>
  );
}

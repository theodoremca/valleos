"use client";

import { useRef } from "react";
import { StateChip, type StateKind } from "./StateChip";

type Step = {
  n: string;
  title: string;
  body: string;
  chip: string;
  kind: StateKind;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Load received",
    body: "A rate confirmation is uploaded and read. Every extracted field stays proposed until a person confirms it — including the time zone on the pickup.",
    chip: "Proposed",
    kind: "proposed",
  },
  {
    n: "02",
    title: "Economics evaluated",
    body: "Revenue against deadhead, fuel, driver pay and fixed cost, from the carrier's own profile. Accept, Caution or Reject, with the reasons named.",
    chip: "Verdict",
    kind: "go",
  },
  {
    n: "03",
    title: "Driver and truck verified",
    body: "Carrier, truck, driver and hours of service — all four checked at the moment of dispatch. Any failure blocks it and says which one.",
    chip: "4 checks",
    kind: "go",
  },
  {
    n: "04",
    title: "Dispatched",
    body: "The binding action, with a receipt: who dispatched, for which carrier, at what time, against which economics snapshot.",
    chip: "Recorded",
    kind: "go",
  },
  {
    n: "05",
    title: "In transit",
    body: "Position, speed and ETA against the appointment — each stamped with how fresh the ELD data is. Stale is labelled stale, never drawn as live.",
    chip: "Live",
    kind: "go",
  },
  {
    n: "06",
    title: "At the receiver",
    body: "Detention warns while the truck is still sitting: dwell, when free time ended, and the amount accruing. Not after the fact.",
    chip: "Detention",
    kind: "caution",
  },
  {
    n: "07",
    title: "Proof captured",
    body: "BOL and POD photographed from the load itself, attributed to the driver. The POD runs on a 24-hour clock until it arrives.",
    chip: "24 h clock",
    kind: "proposed",
  },
  {
    n: "08",
    title: "Invoice ready",
    body: "Only once every document is reviewed and every proposed charge is approved, adjusted or waived. Lines visibly sum to the total.",
    chip: "Reconciled",
    kind: "go",
  },
  {
    n: "09",
    title: "Paid",
    body: "Payments are recorded against the invoice with amount, date, reference and who recorded them. ValleOS does not move money.",
    chip: "Recorded",
    kind: "neutral",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <article className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <span className="t-num text-[0.8125rem] font-medium text-ink-25">{step.n}</span>
        <StateChip kind={step.kind}>{step.chip}</StateChip>
      </div>
      <h3 className="t-head mt-4 text-[1.1875rem] md:text-[1.3125rem]">{step.title}</h3>
      <p className="mt-2.5 text-[0.875rem] leading-snug text-ink-55">{step.body}</p>
    </article>
  );
}

export function LifecycleRail() {
  const rail = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const node = rail.current;
    if (!node) return;
    node.scrollBy({ left: dir * (node.clientWidth * 0.62), behavior: "smooth" });
  };

  return (
    <div>
      {/* Desktop / tablet: a horizontal run that bleeds off the right edge */}
      <div className="hidden md:block">
        <div className="mb-6 flex items-center justify-between gap-6">
          <div className="flex flex-1 items-center gap-3">
            <span className="t-label whitespace-nowrap text-ink-40">
              Nine states, one record
            </span>
            <span className="size-1.5 rounded-full bg-ink-25" aria-hidden="true" />
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="size-1.5 rounded-full bg-go" aria-hidden="true" />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => nudge(-1)}
              className="flex size-9 items-center justify-center rounded-full border border-line text-ink-55 transition-colors duration-200 hover:border-ink-40 hover:text-ink"
            >
              <span className="sr-only">Previous steps</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3.5M7.5 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              className="flex size-9 items-center justify-center rounded-full border border-line text-ink-55 transition-colors duration-200 hover:border-ink-40 hover:text-ink"
            >
              <span className="sr-only">Next steps</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={rail}
          className="rail -mx-5 flex snap-x snap-mandatory overflow-x-auto md:-mx-10 xl:-mx-14"
        >
          <span
            className="w-5 shrink-0 md:w-10 xl:w-14"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`w-[268px] shrink-0 snap-start px-6 py-7 lg:w-[288px] ${
                i === 0 ? "pl-0" : "border-l border-line"
              }`}
            >
              <StepCard step={step} />
            </div>
          ))}
          <span
            className="w-5 shrink-0 md:w-10 xl:w-14"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile: the same run as a vertical timeline */}
      <ol className="md:hidden">
        {steps.map((step, i) => (
          <li key={step.n} className="relative flex gap-4 pb-8 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 size-2.5 shrink-0 rounded-full ${
                  i === steps.length - 1 ? "bg-go" : "bg-ink-25"
                }`}
                aria-hidden="true"
              />
              {i < steps.length - 1 && (
                <span className="mt-1.5 w-px flex-1 bg-line" aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0 flex-1 pb-1">
              <StepCard step={step} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

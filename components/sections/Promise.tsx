import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { StateChip, StateGlyph } from "@/components/ui/StateChip";

/* 01 — the economics fragment */
function EconomicsFragment() {
  const lines = [
    ["Gross rate", "$1,630.00"],
    ["Deadhead · 38 mi", "8.3%"],
    ["Fuel · 6.4 mpg", "−$265.64"],
    ["Driver pay · $0.62/mi", "−$283.96"],
    ["Fixed cost · $0.95/mi", "−$435.10"],
  ];
  return (
    <div className="card-ui p-3.5">
      <div className="space-y-1.5">
        {lines.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-3">
            <span className="text-[12.5px] leading-tight text-ink-55">{label}</span>
            <span className="t-num text-[12.5px] font-medium text-ink-70">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-line pt-2.5">
        <span className="text-[12.5px] font-medium text-ink">Projected margin</span>
        <span className="t-num text-[15px] font-semibold text-go">39.6%</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <StateChip kind="go">Accept</StateChip>
        <StateChip kind="caution">Caution</StateChip>
        <StateChip kind="reject">Reject</StateChip>
      </div>
    </div>
  );
}

/* 02 — the readiness fragment */
function ReadinessFragment() {
  const rows = [
    ["Carrier", "Verified"],
    ["Truck", "In service"],
    ["Driver", "Active"],
    ["Hours", "Fresh · 4 min"],
  ];
  return (
    <div className="card-ui p-3.5">
      <ul className="space-y-2">
        {rows.map(([label, state]) => (
          <li key={label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <StateGlyph kind="pass" />
              <span className="text-[12.5px] font-medium text-ink">{label}</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-go-deep">
              {state}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 rounded-[9px] bg-reject-lite px-2.5 py-2">
        <StateGlyph kind="unknown" />
        <span className="text-[11.5px] leading-tight text-reject">
          Any one fails and the dispatch is blocked — with the reason named.
        </span>
      </div>
    </div>
  );
}

/* 03 — the execution fragment */
function ExecutionFragment() {
  const rows: Array<[string, string, "go" | "caution" | "reject" | "neutral" | "proposed"]> = [
    ["In transit · RM-2408", "ETA 8:10 AM MDT", "go"],
    ["Detention running", "2h 37m · $18.50", "caution"],
    ["POD due", "3h 12m", "caution"],
    ["Invoice ready", "$1,858.50", "go"],
  ];
  return (
    <div className="card-ui p-3.5">
      <ul className="space-y-2.5">
        {rows.map(([label, value, kind]) => (
          <li key={label} className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2">
              <span
                className={`size-1.5 shrink-0 rounded-full ${
                  kind === "go" ? "bg-go" : kind === "caution" ? "bg-caution" : "bg-ink-25"
                }`}
                aria-hidden="true"
              />
              <span className="truncate text-[12.5px] text-ink-70">{label}</span>
            </span>
            <span className="t-num shrink-0 text-[12px] font-medium text-ink">{value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-line pt-2.5 text-[11.5px] leading-snug text-ink-40">
        Nothing becomes invoice-ready until its documents are reviewed and its exceptions are
        resolved.
      </p>
    </div>
  );
}

const columns = [
  {
    n: "01",
    title: "Know what the load is really worth.",
    body: "Gross rate, deadhead, fuel, driver pay and fixed cost, run against your own numbers — not an industry average. Every load ends in a verdict with the reasons and the thresholds behind it.",
    fragment: <EconomicsFragment />,
  },
  {
    n: "02",
    title: "Know whether you're ready to dispatch.",
    body: "Carrier authority and insurance. A truck that's really in service. A driver who's active and not flagged. Enough hours, from data fresh enough to trust. All four, or the dispatch is blocked.",
    fragment: <ReadinessFragment />,
  },
  {
    n: "03",
    title: "Know what happens next.",
    body: "Live load status, detention caught while the truck is still sitting, exceptions with evidence, BOL and POD on a 24-hour clock, and an invoice that only opens when the proof is in.",
    fragment: <ExecutionFragment />,
  },
];

export function Promise() {
  return (
    <section id="product" className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="shell">
        <SectionHead
          eyebrow="The decisions, not the features"
          title={
            <>
              A better way to run
              <br className="hidden sm:block" /> every load.
            </>
          }
          lede="ValleOS connects the three decisions that determine whether a load makes money: what it's worth, whether you can legally run it, and what it takes to get paid for it."
          size="lg"
        />

        <div className="mt-16 grid gap-px bg-line md:mt-20 lg:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal
              key={col.n}
              delay={i * 110}
              className="flex flex-col bg-bone pt-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="t-num text-[13px] font-medium text-ink-25">{col.n}</span>
              <h3 className="t-head mt-4 max-w-[16ch] text-[1.625rem] md:text-[1.875rem]">
                {col.title}
              </h3>
              <p className="t-sub mt-4 max-w-[42ch] text-[0.9375rem] text-ink-55">{col.body}</p>
              <div className="mt-7 lg:mt-auto lg:pt-9">{col.fragment}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

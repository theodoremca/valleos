"use client";

import { useRef, useState } from "react";
import { StateChip } from "./StateChip";

type LedgerLine = {
  label: string;
  sub?: string;
  value: string;
  weight?: "line" | "total" | "result";
  sign?: "neg" | "pos";
};

type Verdict = {
  id: string;
  key: "accept" | "caution" | "reject";
  word: string;
  loadId: string;
  broker: string;
  lane: string;
  confidence: string;
  reason: string;
  metrics: Array<{ label: string; value: string; emphasis?: "pos" | "neg" }>;
  ledger: LedgerLine[];
  why?: Array<{ head: string; body: string }>;
  aside?: { head: string; body: string };
  note: string;
  actions: string[];
  record: string;
};

const verdicts: Verdict[] = [
  {
    id: "accept",
    key: "accept",
    word: "Accept",
    loadId: "RM-2408",
    broker: "Apex Logistics",
    lane: "Phoenix, AZ → Albuquerque, NM",
    confidence: "High",
    reason:
      "Clears Red Mesa's minimum all-in RPM of $2.40 with deadhead inside the 25% threshold. Recommendation only — you decide.",
    metrics: [
      { label: "All-in RPM", value: "$3.56" },
      { label: "Margin", value: "39.6%", emphasis: "pos" },
      { label: "Profit", value: "$645" },
      { label: "Deadhead", value: "8.3%" },
    ],
    why: [
      {
        head: "All-in RPM $3.56 against a $2.40 minimum",
        body: "Red Mesa's own floor, set in their cost profile — not an industry benchmark.",
      },
      {
        head: "Deadhead 8.3% — inside the 25% limit",
        body: "38 empty miles from Truck 204's position in Mesa, AZ to the shipper.",
      },
      {
        head: "Every input is current",
        body: "Hours of service 4 minutes old; cost profile updated Aug 2.",
      },
    ],
    ledger: [
      { label: "Linehaul", value: "$1,450.00" },
      { label: "Fuel surcharge", value: "$180.00" },
      { label: "Revenue", value: "$1,630.00", weight: "total" },
      { label: "Loaded miles", value: "420" },
      { label: "Deadhead to pickup", sub: "Truck 204, Mesa AZ", value: "38" },
      { label: "Total miles", value: "458", weight: "total" },
      { label: "Fixed cost", sub: "$0.95 / mi × 458", value: "−$435.10", sign: "neg" },
      { label: "Fuel", sub: "6.4 mpg @ $3.71 → $0.58 / mi", value: "−$265.64", sign: "neg" },
      { label: "Driver pay", sub: "$0.62 / mi × 458", value: "−$283.96", sign: "neg" },
      { label: "All-in cost", value: "−$984.70", weight: "total", sign: "neg" },
      { label: "Profit", value: "$645.30", weight: "result", sign: "pos" },
    ],
    aside: {
      head: "Not in this estimate",
      body: "Tolls and lumper aren't modelled in MVP economics. Cost profile last updated by Marisol Vega on Aug 2.",
    },
    note: "Clearing the floor is not the same as being told to take it.",
    actions: ["Book this load", "Counter", "Pass"],
    record: "Booking records who, when, this economics snapshot, and the known risks.",
  },
  {
    id: "caution",
    key: "caution",
    word: "Caution",
    loadId: "RM-2416",
    broker: "TQL",
    lane: "Albuquerque, NM → Denver, CO",
    confidence: "Medium",
    reason:
      "Profitable, but thin — and deadhead is over Red Mesa's 25% limit. Worth a counter before you commit.",
    metrics: [
      { label: "All-in RPM", value: "$2.57" },
      { label: "Margin", value: "9.1%" },
      { label: "Profit", value: "$139" },
      { label: "Deadhead", value: "31%", emphasis: "neg" },
    ],
    ledger: [
      { label: "Revenue", value: "$1,520.00", weight: "total" },
      { label: "Loaded miles", value: "449" },
      { label: "Deadhead to pickup", sub: "Truck 204 → Santa Fe, NM", value: "142" },
      { label: "Total miles", value: "591", weight: "total" },
      { label: "All-in cost", value: "−$1,380.63", weight: "total", sign: "neg" },
      { label: "Profit", value: "$139.37", weight: "result" },
    ],
    why: [
      {
        head: "Deadhead 31% — over the 25% threshold",
        body: "142 mi from Truck 204's last position to the pickup in Santa Fe.",
      },
      {
        head: "Margin under the carrier's 15% floor",
        body: "$139 profit on $1,520 of revenue.",
      },
      {
        head: "Confidence lowered: fuel price is 9 days old",
        body: "Cost profile fuel price $3.71, last updated Aug 12.",
      },
    ],
    aside: {
      head: "To reach 15% margin",
      body: "Counter at $1,690 (+$170), or reposition after a closer backhaul. Alternatives are suggestions, not actions.",
    },
    note: "Every threshold shown is the carrier's own setting, not an industry standard.",
    actions: ["Counter at $1,690", "Book anyway", "Pass"],
    record: "The threshold that produced each flag is named, because it is yours to change.",
  },
  {
    id: "reject",
    key: "reject",
    word: "Reject",
    loadId: "RM-2415",
    broker: "Echo Global",
    lane: "Albuquerque, NM → Denver, CO",
    confidence: "High",
    reason:
      "This load loses money at the offered rate. Negative margin is always a reject — no amount of volume fixes it.",
    metrics: [
      { label: "All-in RPM", value: "$1.36" },
      { label: "Margin", value: "−33.9%", emphasis: "neg" },
      { label: "Profit", value: "−$305", emphasis: "neg" },
      { label: "Deadhead", value: "47%", emphasis: "neg" },
    ],
    ledger: [
      { label: "Linehaul", sub: "no fuel surcharge offered", value: "$900.00" },
      { label: "Loaded miles", value: "449" },
      { label: "Deadhead to pickup", sub: "212 mi to Farmington, NM", value: "212" },
      { label: "Total miles", value: "661", weight: "total" },
      { label: "All-in cost", value: "−$1,205.00", weight: "total", sign: "neg" },
      { label: "Loss", value: "−$305.00", weight: "result", sign: "neg" },
    ],
    why: [
      {
        head: "Rate is below cost",
        body: "$900 of revenue against $1,205 of cost for 661 total miles.",
      },
      {
        head: "Deadhead 47% — nearly double the 25% limit",
        body: "212 mi to reach the pickup in Farmington, NM.",
      },
    ],
    aside: {
      head: "Break-even would need",
      body: "At least $1,421 with the same deadhead, or a pickup within ~60 mi of the truck at the offered $900.",
    },
    note: "You can still book it. The override is recorded with your name and your reason.",
    actions: ["Counter at $1,650", "Pass", "Book anyway — against recommendation"],
    record: "There is no silent override. Not for a person, not for the AI.",
  },
];

const skin = {
  accept: {
    wash: "bg-go-lite",
    text: "text-go-deep",
    soft: "text-go-deep/70",
    chip: "go" as const,
    rail: "bg-go",
    tab: "bg-go text-white",
  },
  caution: {
    wash: "bg-caution-lite",
    text: "text-caution",
    soft: "text-caution/75",
    chip: "caution" as const,
    rail: "bg-caution",
    tab: "bg-caution text-white",
  },
  reject: {
    wash: "bg-reject-lite",
    text: "text-reject",
    soft: "text-reject/75",
    chip: "reject" as const,
    rail: "bg-reject",
    tab: "bg-reject text-white",
  },
};

function Ledger({ lines }: { lines: LedgerLine[] }) {
  return (
    <dl>
      {lines.map((line, i) => {
        const isTotal = line.weight === "total";
        const isResult = line.weight === "result";
        return (
          <div
            key={`${line.label}-${i}`}
            className={`flex items-baseline justify-between gap-4 py-[9px] ${
              isTotal || isResult ? "border-t border-line" : ""
            } ${isResult ? "mt-1 border-t-ink/25" : ""}`}
          >
            <dt className="min-w-0">
              <span
                className={`block text-[0.8125rem] leading-tight ${
                  isResult ? "font-semibold text-ink" : isTotal ? "font-medium text-ink" : "text-ink-55"
                }`}
              >
                {line.label}
              </span>
              {line.sub && (
                <span className="mt-0.5 block text-[11px] leading-tight text-ink-40">
                  {line.sub}
                </span>
              )}
            </dt>
            <dd
              className={`t-num shrink-0 ${isResult ? "text-[1.0625rem] font-semibold" : "text-[0.8125rem] font-medium"} ${
                line.sign === "neg"
                  ? "text-reject"
                  : line.sign === "pos"
                    ? "text-go"
                    : isTotal || isResult
                      ? "text-ink"
                      : "text-ink-70"
              }`}
            >
              {line.value}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function VerdictShowcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const v = verdicts[active];
  const s = skin[v.key];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % verdicts.length
        : (active - 1 + verdicts.length) % verdicts.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Load evaluation verdicts"
        onKeyDown={onKeyDown}
        className="inline-flex rounded-full border border-line bg-paper p-1"
      >
        {verdicts.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`verdict-tab-${item.id}`}
            aria-selected={i === active}
            aria-controls={`verdict-panel-${item.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-[0.875rem] font-medium tracking-[-0.01em] transition-colors duration-300 sm:px-6 ${
              i === active ? skin[item.key].tab : "text-ink-55 hover:text-ink"
            }`}
          >
            {item.word}
          </button>
        ))}
      </div>

      <div
        key={v.id}
        role="tabpanel"
        id={`verdict-panel-${v.id}`}
        aria-labelledby={`verdict-tab-${v.id}`}
        className="anim-card card-ui mt-6 overflow-hidden"
      >
        {/* load header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-8">
          <div className="min-w-0">
            <span className="t-num text-[0.9375rem] font-semibold text-ink">{v.loadId}</span>
            <span className="ml-3 text-[0.875rem] text-ink-55">
              {v.broker}
              <span className="text-ink-25"> · </span>
              {v.lane}
            </span>
          </div>
          <StateChip kind="neutral">Acting for Red Mesa Freight</StateChip>
        </div>

        {/* the verdict itself */}
        <div className={`${s.wash} px-5 py-6 md:px-8 md:py-8`}>
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="min-w-0 max-w-[46ch]">
              <p className={`t-head text-[clamp(2rem,4.4vw,3rem)] ${s.text}`}>{v.word}</p>
              <p className={`mt-3 text-[0.9375rem] leading-snug md:text-[1rem] ${s.soft}`}>
                {v.reason}
              </p>
            </div>
            <div className="shrink-0">
              <span className={`t-label block ${s.soft}`}>Confidence</span>
              <span className={`mt-1.5 block text-[1.25rem] font-semibold ${s.text}`}>
                {v.confidence}
              </span>
            </div>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[10px] bg-white/50 sm:grid-cols-4">
            {v.metrics.map((m) => (
              <div key={m.label} className="bg-white/85 px-4 py-3.5">
                <dt className="t-label text-[10px] text-ink-40">{m.label}</dt>
                <dd
                  className={`t-num mt-1.5 text-[1.375rem] font-semibold leading-none ${
                    m.emphasis === "pos"
                      ? "text-go"
                      : m.emphasis === "neg"
                        ? "text-reject"
                        : "text-ink"
                  }`}
                >
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* the working */}
        <div className="grid gap-8 px-5 py-7 md:grid-cols-2 md:gap-12 md:px-8 md:py-9">
          <div>
            <p className="t-label mb-2 text-ink-40">The working</p>
            <Ledger lines={v.ledger} />
          </div>

          <div className="flex flex-col gap-5">
            {v.why && (
              <div>
                <p className="t-label mb-3 text-ink-40">Why {v.word.toLowerCase()}</p>
                <ul className="space-y-3.5">
                  {v.why.map((item) => (
                    <li key={item.head} className="flex gap-3">
                      <span
                        className={`mt-[7px] h-px w-4 shrink-0 ${s.rail}`}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-[0.875rem] font-medium leading-snug text-ink">
                          {item.head}
                        </span>
                        <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-55">
                          {item.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {v.aside && (
              <div className="rounded-[10px] bg-bone p-4">
                <p className="text-[0.8125rem] font-semibold text-ink">{v.aside.head}</p>
                <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-55">{v.aside.body}</p>
              </div>
            )}

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {v.actions.map((action, i) => (
                  <span
                    key={action}
                    className={`rounded-full px-3.5 py-2 text-[0.8125rem] font-medium ${
                      i === 0
                        ? "bg-ink text-paper"
                        : "border border-line text-ink-55"
                    }`}
                  >
                    {action}
                  </span>
                ))}
              </div>
              <p className="mt-3.5 text-[11.5px] leading-snug text-ink-40">{v.record}</p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[0.9375rem] leading-snug text-ink-55">
        <span className="font-medium text-ink">{v.note}</span>
      </p>
    </div>
  );
}

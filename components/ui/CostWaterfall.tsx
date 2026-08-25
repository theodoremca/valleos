"use client";

import { useInView } from "@/components/primitives/useInView";
import { CountUp } from "@/components/primitives/CountUp";

const GROSS = 4500;

type Row = {
  label: string;
  note: string;
  delta: number;
  running: number;
  previous: number;
};

const rows: Row[] = [
  {
    label: "Gross rate",
    note: "The only number on the posting",
    delta: GROSS,
    running: 4500,
    previous: 4500,
  },
  {
    label: "Deadhead",
    note: "Empty miles to reach the pickup",
    delta: -380,
    running: 4120,
    previous: 4500,
  },
  {
    label: "Fuel",
    note: "Your mpg, at the diesel price you pay",
    delta: -720,
    running: 3400,
    previous: 4120,
  },
  {
    label: "Driver pay",
    note: "The agreed rate for the driver who runs it",
    delta: -900,
    running: 2500,
    previous: 3400,
  },
  {
    label: "Fixed operating cost",
    note: "Truck note, insurance, permits, overhead",
    delta: -640,
    running: 1860,
    previous: 2500,
  },
];

const pct = (v: number) => `${(v / GROSS) * 100}%`;

const money = (v: number) => `${v < 0 ? "−" : ""}$${Math.abs(v).toLocaleString("en-US")}`;

export function CostWaterfall() {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");

  return (
    <div ref={ref} className="card-ui overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5 md:px-7">
        <span className="t-label text-ink-40">Load economics &middot; example</span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.09em] text-ink-25">
          Before booking
        </span>
      </div>

      <div className="px-5 py-5 md:px-7 md:py-7">
        <ol className="space-y-4 md:space-y-[18px]">
          {rows.map((row, i) => {
            const isGross = i === 0;
            return (
              <li key={row.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="min-w-0">
                    <span
                      className={`block text-[0.9375rem] leading-tight ${
                        isGross ? "font-semibold text-ink" : "font-medium text-ink-70"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[11.5px] leading-tight text-ink-40">
                      {row.note}
                    </span>
                  </span>
                  <span
                    className={`t-num shrink-0 text-[0.9375rem] font-semibold ${
                      isGross ? "text-ink" : "text-reject"
                    }`}
                  >
                    {money(row.delta)}
                  </span>
                </div>

                <div className="relative mt-2 h-[10px] overflow-hidden rounded-full bg-bone">
                  {/* the slice this line takes away */}
                  <div
                    className="hatch-stale absolute inset-y-0 left-0 rounded-full bg-reject-lite transition-[width] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      width: inView ? pct(row.previous) : "0%",
                      transitionDelay: `${i * 130}ms`,
                    }}
                  />
                  {/* what is still yours after it */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-ink transition-[width] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      width: inView ? pct(row.running) : "0%",
                      transitionDelay: `${i * 130 + 90}ms`,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ol>

        {/* the number that actually matters */}
        <div className="mt-7 rounded-[12px] bg-go-lite p-5">
          <div className="flex items-end justify-between gap-4">
            <span>
              <span className="t-label block text-go-deep/60">Actual projected margin</span>
              <span className="t-num mt-2 block text-[clamp(2.25rem,5vw,3.25rem)] font-semibold leading-none text-go-deep">
                <CountUp value={1860} prefix="$" duration={1600} />
              </span>
            </span>
            <span className="t-num pb-1 text-right text-[0.9375rem] font-semibold text-go-deep">
              <CountUp value={41.3} decimals={1} suffix="%" duration={1600} />
              <span className="mt-0.5 block font-sans text-[11px] font-medium tracking-normal text-go-deep/60">
                of gross
              </span>
            </span>
          </div>
          <div className="relative mt-4 h-[10px] overflow-hidden rounded-full bg-go/12">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-go transition-[width] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: inView ? pct(1860) : "0%", transitionDelay: "760ms" }}
            />
          </div>
        </div>

        <p className="mt-5 text-[12px] leading-snug text-ink-40">
          Example figures. ValleOS runs this against your carrier&rsquo;s own cost profile &mdash;
          fixed cost per mile, your mpg and diesel price, and each driver&rsquo;s pay agreement.
          Tolls and lumper are not modelled.
        </p>
      </div>
    </div>
  );
}

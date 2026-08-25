import { StateChip, StateGlyph } from "./StateChip";
import { DataRow, MetricCell } from "./DataRow";

/* Every value below is taken from the ValleOS MVP screen set
   (E6 economics, E12 readiness, F5 AI drafts) so the marketing
   surface and the product agree. */

export function LoadEconomicsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`card-float flex w-[310px] flex-col p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="t-label text-ink-40">Load economics</span>
        <span className="t-num text-[11px] font-medium text-ink-40">RM-2408</span>
      </div>

      <p className="mt-2 text-[13px] leading-tight text-ink-70">
        Apex Logistics
        <span className="text-ink-25"> · </span>
        Phoenix → Albuquerque
      </p>

      <div className="mt-3.5 grid grid-cols-3 gap-3 border-y border-line-2 py-3">
        <MetricCell label="All-in RPM" value="$3.56" />
        <MetricCell label="Margin" value="39.6%" emphasis="positive" />
        <MetricCell label="Profit" value="$645" />
      </div>

      <div className="pt-1">
        <DataRow label="Revenue" value="$1,630.00" />
        <DataRow label="Total miles" sub="420 loaded + 38 deadhead" value="458" />
        <DataRow label="All-in cost" value="−$984.70" emphasis="negative" />
      </div>

      <div className="mt-2 flex flex-1 items-end" aria-hidden="true" />
      <div className="flex items-center justify-between rounded-[9px] bg-go-lite px-3 py-2.5">
        <span className="text-[13px] font-semibold tracking-[-0.01em] text-go-deep">Accept</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-go-deep/65">
          Confidence high
        </span>
      </div>
    </div>
  );
}

const checks = [
  { label: "Carrier", detail: "Authority active · insurance to Nov 30" },
  { label: "Truck", detail: "204 · in service · Motive 4 min" },
  { label: "Driver", detail: "Luis Herrera · active, not flagged" },
  { label: "Hours", detail: "9h 20m available vs 7h 10m needed" },
];

export function ReadinessCard({ className = "" }: { className?: string }) {
  return (
    <div className={`card-float w-[286px] p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="t-label text-ink-40">Dispatch readiness</span>
        <StateChip kind="go">4 of 4</StateChip>
      </div>

      <ul className="mt-3 space-y-2.5">
        {checks.map((check) => (
          <li key={check.label} className="flex items-start gap-2.5">
            <StateGlyph kind="pass" className="mt-px" />
            <span className="min-w-0">
              <span className="block text-[13px] font-medium leading-tight text-ink">
                {check.label}
              </span>
              <span className="block text-[11px] leading-tight text-ink-40">{check.detail}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 flex items-center gap-2 border-t border-line-2 pt-3">
        <span className="anim-ring size-1.5 rounded-full bg-go" aria-hidden="true" />
        <span className="text-[12.5px] font-medium text-go-deep">Ready to dispatch</span>
      </div>
    </div>
  );
}

export function RecommendationCard({ className = "" }: { className?: string }) {
  return (
    <div className={`card-float w-[298px] p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="t-label text-ink-40">ValleOS recommends</span>
        <StateChip kind="ai">AI draft</StateChip>
      </div>

      <p className="mt-2.5 text-[1.375rem] font-semibold leading-none tracking-[-0.03em] text-go-deep">
        Accept
      </p>

      <p className="mt-2.5 text-[12.5px] leading-snug text-ink-55">
        Margin 39.6% clears Red Mesa&rsquo;s 15% floor; deadhead 8.3% is inside the 25% limit.
      </p>

      <div className="mt-3.5 flex items-center gap-2 rounded-[9px] bg-bone px-3 py-2">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-ink-55">
          <path
            d="M7 1.4 12 3.3v3.4c0 3-2.1 5.2-5 5.9-2.9-.7-5-2.9-5-5.9V3.3L7 1.4Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <span className="text-[11.5px] font-medium text-ink-70">
          Human approval required to book
        </span>
      </div>
    </div>
  );
}

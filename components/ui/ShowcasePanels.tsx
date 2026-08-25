import { StateChip } from "./StateChip";

function PanelShell({
  title,
  meta,
  chip,
  children,
  className = "",
}: {
  title: string;
  meta: string;
  chip?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`card-ui flex flex-col overflow-hidden ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <div className="min-w-0">
          <p className="t-num text-[0.875rem] font-semibold text-ink">{title}</p>
          <p className="mt-0.5 truncate text-[11.5px] text-ink-40">{meta}</p>
        </div>
        {chip}
      </div>
      {children}
    </div>
  );
}

/* F1 — the load, live, with everyone who touched it */
export function LiveLoadPanel({ className = "" }: { className?: string }) {
  const timeline = [
    {
      head: "Loaded · BOL uploaded",
      meta: "3:55 PM MST · Luis · detention 7 min, $3.50 proposed",
      chip: "Review",
      kind: "proposed" as const,
    },
    {
      head: "Arrived at shipper",
      meta: "1:48 PM MST · Luis — corrected from 1:31 by Dante, reason on record",
    },
    {
      head: "Dispatched",
      meta: "9:33 AM MST · Dante Okafor for Red Mesa Freight",
    },
    {
      head: "Booked · economics snapshot",
      meta: "9:32 AM MST · Accept · $645 profit at 39.6%",
    },
  ];

  return (
    <PanelShell
      title="RM-2408"
      meta="Apex Logistics · Luis Herrera · Truck 204"
      chip={<StateChip kind="go" dot>In transit</StateChip>}
      className={className}
    >
      <div className="grid grid-cols-3 gap-px border-b border-line bg-line">
        {[
          ["ETA receiver", "8:10 AM MDT"],
          ["vs appointment", "−50 min"],
          ["Drive left", "5h 28m"],
        ].map(([label, value]) => (
          <div key={label} className="bg-paper px-4 py-3">
            <p className="t-label text-[9.5px] text-ink-40">{label}</p>
            <p className="t-num mt-1.5 text-[1.0625rem] font-semibold leading-none text-ink">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-b border-line bg-bone/60 px-5 py-2.5">
        <span className="anim-ring size-1.5 rounded-full bg-go" aria-hidden="true" />
        <span className="text-[11.5px] text-ink-55">I-40 E · 61 mph</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.08em] text-ink-40">
          Motive · 2 min ago
        </span>
      </div>

      <ol className="flex-1 px-5 py-4">
        {timeline.map((entry, i) => (
          <li key={entry.head} className="relative flex gap-3 pb-4 last:pb-0">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1.5 size-[7px] shrink-0 rounded-full ${
                  i === 0 ? "bg-ink" : "bg-ink-25"
                }`}
                aria-hidden="true"
              />
              {i < timeline.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[12.5px] font-medium leading-tight text-ink">{entry.head}</p>
                {entry.chip && <StateChip kind={entry.kind}>{entry.chip}</StateChip>}
              </div>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-40">{entry.meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </PanelShell>
  );
}

/* F2 — the money you lose by not noticing */
export function DetentionPanel({ className = "" }: { className?: string }) {
  return (
    <PanelShell
      title="Detention · RM-2408"
      meta="Smith's Distribution · Albuquerque · receiver"
      chip={<StateChip kind="caution" dot>Running</StateChip>}
      className={className}
    >
      <div className="px-5 py-5">
        <p className="t-num text-[clamp(2.75rem,7vw,3.75rem)] font-semibold leading-none text-ink">
          2:37
        </p>
        <p className="t-label mt-2 text-ink-40">Dwell at the receiver</p>

        <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-[9px] bg-line">
          {[
            ["Arrived", "9:04 AM"],
            ["Free ended", "11:04 AM"],
            ["Chargeable", "0:37"],
          ].map(([label, value]) => (
            <div key={label} className="bg-paper px-3 py-2.5">
              <dt className="t-label text-[9.5px] text-ink-40">{label}</dt>
              <dd className="t-num mt-1 text-[0.875rem] font-semibold text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex items-center justify-between rounded-[10px] bg-caution-lite px-4 py-3">
          <span>
            <span className="block text-[11.5px] text-caution/80">
              Accruing now · 2 h free, then $30/h
            </span>
            <span className="t-num mt-1 block text-[1.25rem] font-semibold leading-none text-caution">
              $18.50
            </span>
          </span>
          <StateChip kind="proposed">Proposed</StateChip>
        </div>

        <p className="mt-4 text-[11.5px] leading-snug text-ink-55">
          &ldquo;Waiting on dock, 2 trucks ahead.&rdquo; Gate ticket attached; arrival confirmed by
          driver check-in and Motive GPS within 0.1 mi.
        </p>
        <p className="mt-3 border-t border-line pt-3 text-[11px] leading-snug text-ink-40">
          The amount stays proposed until the carrier owner reviews it on the invoice. Nothing goes
          to the broker without approval.
        </p>
      </div>
    </PanelShell>
  );
}

/* F4 — what is blocking money right now */
export function ExceptionsPanel({ className = "" }: { className?: string }) {
  const rows: Array<{ head: string; meta: string; chip: string; kind: "caution" | "reject" | "stale" | "go" }> = [
    {
      head: "RM-2408 · detention at receiver",
      meta: "2h 37m dwell · $18.50 accruing · Luis",
      chip: "Live",
      kind: "caution",
    },
    {
      head: "RM-2391 · POD",
      meta: "Delivered Wed 6:40 PM MDT · due in 3h 12m · driver reminded 8:00 AM",
      chip: "Due 3h",
      kind: "caution",
    },
    {
      head: "RM-2377 · POD",
      meta: "Delivered Mon 4:15 PM MST · overdue 2d 17h · blocks the invoice",
      chip: "Overdue",
      kind: "reject",
    },
    {
      head: "RM-2370 · claim — 2 pallets damaged",
      meta: "Opened Aug 18 · 4 photos · blocks invoice-ready until resolved or waived",
      chip: "Open",
      kind: "stale",
    },
  ];

  return (
    <PanelShell
      title="Exceptions"
      meta="6 open across 5 loads · Red Mesa Freight"
      chip={<StateChip kind="neutral">Dispatcher view</StateChip>}
      className={className}
    >
      <div className="grid grid-cols-3 gap-px border-b border-line bg-line">
        {[
          ["Detention now", "1"],
          ["POD overdue", "2"],
          ["Open claims", "1"],
        ].map(([label, value]) => (
          <div key={label} className="bg-paper px-4 py-3">
            <p className="t-label text-[9.5px] text-ink-40">{label}</p>
            <p className="t-num mt-1.5 text-[1.0625rem] font-semibold leading-none text-ink">
              {value}
            </p>
          </div>
        ))}
      </div>

      <ul className="flex-1 divide-y divide-line-2">
        {rows.map((row) => (
          <li key={row.head} className="flex items-start gap-3 px-5 py-3">
            <span className="min-w-0 flex-1">
              <span className="block text-[12.5px] font-medium leading-tight text-ink">
                {row.head}
              </span>
              <span className="mt-0.5 block text-[11px] leading-snug text-ink-40">{row.meta}</span>
            </span>
            <StateChip kind={row.kind}>{row.chip}</StateChip>
          </li>
        ))}
      </ul>

      <p className="border-t border-line px-5 py-3 text-[11px] leading-snug text-ink-40">
        Every line says what it blocks. Uploaded is not the same as reviewed.
      </p>
    </PanelShell>
  );
}

/* H2 — the invoice, with its proof attached */
export function InvoicePanel({ className = "" }: { className?: string }) {
  const lines: Array<[string, string, boolean?]> = [
    ["Linehaul · Phoenix → Albuquerque", "$1,450.00"],
    ["Fuel surcharge", "$180.00"],
    ["Detention · receiver · 1h 47m @ $30/h", "$53.50"],
    ["Lumper reimbursement · receipt attached", "$175.00"],
    ["Detention · shipper", "waived", true],
  ];

  return (
    <PanelShell
      title="RMF-2026-0142"
      meta="RM-2408 · to Apex Logistics · Net 30, due Sep 22"
      chip={<StateChip kind="go">Invoice-ready</StateChip>}
      className={className}
    >
      <div className="flex-1 px-5 py-4">
        <dl>
          {lines.map(([label, value, muted]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 py-[7px]">
              <dt className="min-w-0 text-[12.5px] leading-snug text-ink-55">{label}</dt>
              <dd
                className={`t-num shrink-0 text-[12.5px] font-medium ${
                  muted ? "text-ink-40" : "text-ink"
                }`}
              >
                {value}
              </dd>
            </div>
          ))}
          <div className="mt-1 flex items-baseline justify-between gap-4 border-t border-ink/20 pt-3">
            <dt className="text-[0.875rem] font-semibold text-ink">Total</dt>
            <dd className="t-num text-[1.25rem] font-semibold text-ink">$1,858.50</dd>
          </div>
        </dl>

        <p className="t-label mt-5 text-ink-40">Attached proof</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {["Rate con", "BOL", "POD · 2 pp", "Lumper receipt", "Gate ticket", "Arrival log"].map(
            (doc) => (
              <span
                key={doc}
                className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink-55"
              >
                {doc}
              </span>
            ),
          )}
        </div>

        <p className="mt-4 border-t border-line pt-3 text-[11px] leading-snug text-ink-40">
          Sending records the recipient, the sender and the time. It does not mark the invoice paid
          — ValleOS records payments, it does not process them.
        </p>
      </div>
    </PanelShell>
  );
}

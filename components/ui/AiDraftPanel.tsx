import { StateChip } from "./StateChip";

const facts = [
  ["Verdict", "Accept"],
  ["Margin", "31%"],
  ["Readiness", "4 / 4"],
];

const audit = [
  {
    head: "AI blocked from drafting RM-2415 with Ray Tso",
    body: "Reason: HOS stale 3h 42m — the same block a person gets.",
    time: "8:12 AM",
  },
  {
    head: "RM-2408 booked — AI draft, approved by Marisol Vega",
    body: "Logged as AI plus the approving human.",
    time: "Aug 19",
  },
];

export function AiDraftPanel() {
  return (
    <div className="card-ui overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-6">
        <div className="min-w-0">
          <p className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
            AI dispatcher drafts
          </p>
          <p className="mt-0.5 text-[12px] text-ink-40">
            Enabled by Marisol Vega
            <span className="text-ink-25"> · </span>
            approver: Marisol
          </p>
        </div>
        <StateChip kind="ai" dot>
          AI
        </StateChip>
      </div>

      <p className="border-b border-line bg-ai-lite/50 px-5 py-3 text-[0.8125rem] leading-snug text-ai md:px-6">
        The AI drafts. It never books. Every draft ran the same economics and readiness checks you
        would.
      </p>

      <div className="space-y-3 px-5 py-5 md:px-6">
        {/* live draft */}
        <article className="rounded-[12px] border border-ai/25 bg-ai-lite/40 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
                Draft booking · RM-2412 backhaul
              </p>
              <p className="mt-1 text-[12.5px] text-ink-55">
                Sprouts DC, Albuquerque → Phoenix
                <span className="text-ink-25"> · </span>
                $1,380 + $140 FSC
              </p>
            </div>
            <StateChip kind="proposed">Draft</StateChip>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-[9px] bg-line">
            {facts.map(([label, value]) => (
              <div key={label} className="bg-paper px-3 py-2.5">
                <dt className="t-label text-[9.5px] text-ink-40">{label}</dt>
                <dd
                  className={`t-num mt-1 text-[1rem] font-semibold leading-none ${
                    label === "Verdict" ? "text-go" : "text-ink"
                  }`}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <dl className="mt-3.5 space-y-2">
            {[
              ["Proposed driver", "Luis Herrera · after RM-2408 delivery"],
              ["Why", "12 mi deadhead from Smith's; pickup Sat 7 AM fits Luis's 10-hour reset."],
              ["Evidence", "Rate con (reviewed) · HOS 4 min · cost profile Aug 2"],
              ["Expires", "Today 6:00 PM MST, or on any HOS change"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3 text-[12px] leading-snug">
                <dt className="w-[92px] shrink-0 text-ink-40">{label}</dt>
                <dd className="min-w-0 text-ink-70">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-ai/15 pt-3.5">
            <span className="rounded-full bg-ink px-3.5 py-1.5 text-[12.5px] font-medium text-paper">
              Send to Marisol
            </span>
            <span className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] font-medium text-ink-55">
              Edit draft
            </span>
            <span className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] font-medium text-ink-55">
              Discard
            </span>
          </div>
          <p className="mt-2.5 text-[11px] text-ink-40">
            Needs approval from Marisol Vega (owner) before anything binds.
          </p>
        </article>

        {/* a draft that invalidated itself */}
        <article className="hatch-stale rounded-[12px] border border-line bg-bone/60 p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="text-[0.875rem] font-medium text-ink-55">
              Draft assignment · RM-2415 · proposed Maria Ruiz
            </p>
            <StateChip kind="stale">Expired</StateChip>
          </div>
          <p className="mt-2 text-[12px] leading-snug text-ink-55">
            Maria&rsquo;s available hours dropped to 2h 10m since this was drafted. A material state
            change invalidates the draft — it wasn&rsquo;t quietly kept.
          </p>
        </article>
      </div>

      <div className="border-t border-line px-5 py-4 md:px-6">
        <p className="t-label text-ink-40">Audit</p>
        <ul className="mt-3 space-y-3">
          {audit.map((entry) => (
            <li key={entry.head} className="flex gap-3">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-ink-25" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-medium leading-snug text-ink">
                  {entry.head}
                </span>
                <span className="mt-0.5 block text-[11.5px] leading-snug text-ink-40">
                  {entry.body}
                </span>
              </span>
              <span className="t-num shrink-0 text-[11px] text-ink-25">{entry.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

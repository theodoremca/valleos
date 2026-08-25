import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { StateChip } from "@/components/ui/StateChip";

const providers = [
  {
    name: "Motive",
    status: "Live",
    kind: "go" as const,
    body: "One read-only connection brings across vehicles, drivers, hours of service and locations. Syncs every five minutes, and every value carries the time it was read.",
    scopes: ["Vehicles", "Drivers", "Hours of service", "Vehicle locations"],
  },
  {
    name: "Samsara",
    status: "Coming soon",
    kind: "stale" as const,
    body: "The setup step is 'connect your ELD', not 'connect Motive'. Additional providers slot into the same flow without redesigning it.",
  },
  {
    name: "Geotab",
    status: "Coming soon",
    kind: "stale" as const,
    body: "Until a provider is live, a carrier can add trucks and drivers manually — clearly marked unverified, with no hours of service.",
  },
];

const notYet = [
  "Load-board search and backhaul planning",
  "Broker and shipper portals",
  "Factoring and payment processing",
  "Settlements, pay weeks and payroll",
  "IFTA and maintenance",
  "CRM, campaigns and carrier packets",
];

export function Integrations() {
  return (
    <section id="integrations" className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Integrations"
              title={
                <>
                  Your existing systems.
                  <br className="hidden sm:block" /> One operating layer.
                </>
              }
              lede="ValleOS doesn't ask a carrier to type in a fleet. It connects to the systems that already know the truth, reads them, and stamps everything with how fresh it is."
            />

            <Reveal delay={200}>
              <div className="mt-9 border-l-2 border-go pl-5">
                <p className="text-[1.0625rem] font-medium leading-snug tracking-[-0.015em] text-ink">
                  ValleOS reads your ELD. It never writes to it.
                </p>
                <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-snug text-ink-40">
                  No duty-status changes, no log edits, and stale data is never shown as current.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px bg-line">
              {providers.map((provider, i) => (
                <Reveal
                  key={provider.name}
                  delay={i * 90}
                  className="bg-bone py-7 first:pt-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="t-head text-[1.5rem] md:text-[1.75rem]">{provider.name}</h3>
                    <StateChip kind={provider.kind} dot={provider.kind === "go"}>
                      {provider.status}
                    </StateChip>
                  </div>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-snug text-ink-55">
                    {provider.body}
                  </p>
                  {provider.scopes && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {provider.scopes.map((scope) => (
                        <span
                          key={scope}
                          className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-ink-55"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-10 rounded-[14px] border border-line bg-paper p-6">
                <p className="t-label text-ink-40">Deliberately not in this release</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {notYet.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.875rem] leading-snug text-ink-55">
                      <span className="mt-[9px] h-px w-3 shrink-0 bg-ink-25" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-4 text-[0.8125rem] leading-snug text-ink-40">
                  Deferred, not rejected. Where one of these touches a screen, it appears in its
                  honest state — &ldquo;load-board search, not configured&rdquo; — rather than being
                  hidden.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

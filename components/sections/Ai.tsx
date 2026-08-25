import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/SectionHead";
import { AiDraftPanel } from "@/components/ui/AiDraftPanel";

const may = [
  "Read a rate confirmation and draft the load — every value stays proposed until a person reviews it",
  "Run the economics and recommend Accept, Caution or Reject",
  "Draft a booking, and an assignment from drivers and trucks that already pass readiness",
  "Flag detention while it runs, an overdue POD, or data that has gone stale",
];

const never = [
  "Book a load or accept a rate",
  "Assign a driver who fails a readiness check",
  "Message a broker without the owner's approval",
  "Move money, or act as the carrier",
];

export function Ai() {
  return (
    <section id="ai" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>AI dispatcher</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="t-head mt-5 text-[clamp(2.25rem,5.2vw,4.5rem)]">
              AI can help run the work.
              <br className="hidden md:block" />{" "}
              <span className="text-ink-40">It doesn&rsquo;t get to run the business.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal variant="scale" className="lg:col-span-7">
            <AiDraftPanel />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="t-sub max-w-[46ch] text-[1.0625rem] text-ink-55 md:text-[1.125rem]">
                The AI dispatcher is enabled by the carrier owner, scoped like any other
                dispatcher, and revoked the same way. It works through the same checks, gets the
                same blocks, and lands on the same audit trail.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10">
                <p className="t-label text-ink-40">What it may do</p>
                <ul className="mt-4 space-y-3">
                  {may.map((item) => (
                    <li key={item} className="flex gap-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="mt-[5px] shrink-0 text-go"
                      >
                        <path d="M2.5 7.4 5.6 10.5 11.5 3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
                      </svg>
                      <span className="text-[0.9375rem] leading-snug text-ink-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9">
                <p className="t-label text-ink-40">What it may never do</p>
                <ul className="mt-4 space-y-3">
                  {never.map((item) => (
                    <li key={item} className="flex gap-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="mt-[5px] shrink-0 text-reject"
                      >
                        <path d="M3.6 3.6 10.4 10.4M10.4 3.6 3.6 10.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
                      </svg>
                      <span className="text-[0.9375rem] leading-snug text-ink-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 rounded-[14px] bg-ink p-6">
                <p className="t-head text-[1.5rem] text-paper md:text-[1.75rem]">
                  AI recommends. You decide.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-snug text-paper/55">
                  Every binding action names its approver before it can happen, and records both the
                  AI and the human once it does. Zero autonomous bookings is a product requirement,
                  not a setting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

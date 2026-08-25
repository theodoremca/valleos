import Image from "next/image";
import { blur } from "@/lib/blur";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/SectionHead";

const rules = [
  {
    n: "01",
    title: "Only the owner grants access",
    body: "Office staff can run loads, fleet, brokers and invoices — but cannot grant or revoke a dispatcher. That stays with the carrier owner.",
  },
  {
    n: "02",
    title: "Scope is explicit",
    body: "Intake, evaluate, book, assign and dispatch, monitor, chase documents, message brokers — each one on or off, per dispatcher.",
  },
  {
    n: "03",
    title: "Revoke is instant",
    body: "Access is lost on the next action. Nothing is erased: the loads they dispatched stay on the record with their name on them.",
  },
  {
    n: "04",
    title: "Carriers stay separate",
    body: "A dispatcher working three carriers sees three separate worlds. No cross-carrier list, search or export.",
  },
];

export function Delegation() {
  return (
    <section id="delegation" className="relative isolate bg-night">
      {/* full-bleed photographic beat */}
      <div className="relative h-[380px] overflow-hidden md:h-[460px] lg:h-[520px]">
        <Image
          src="/img/dock.jpg"
          alt="A trailer backed onto a loading dock, with a worker checking the doors"
          fill
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={blur["dock"]}
          className="object-cover object-[46%_42%] [filter:grayscale(0.35)_contrast(1.06)_brightness(0.7)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,13,20,0.92)_0%,rgba(8,13,20,0.66)_46%,rgba(8,13,20,0.4)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,#080d14,transparent)]"
        />

        <div className="shell absolute inset-0 flex flex-col justify-center">
          <Reveal>
            <Eyebrow tone="paper">Delegated dispatch</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="t-head mt-5 max-w-[18ch] text-[clamp(2.25rem,5.4vw,4.5rem)] text-paper">
              Acting for the carrier. Never as the carrier.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="shell pb-24 pt-14 md:pb-32 md:pt-16 lg:pb-40">
        <Reveal>
          <p className="t-sub max-w-[62ch] text-[1.0625rem] text-paper/60 md:text-[1.1875rem]">
            An employee, an outside dispatch office, an independent, or the AI — whoever dispatches
            works under access the carrier grants and can take back, on the carrier&rsquo;s own
            authority and insurance. Same screens, same checks, same audit trail.
          </p>
        </Reveal>

        <dl className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {rules.map((rule, i) => (
            <Reveal key={rule.n} delay={i * 80} className="bg-night pt-7 lg:px-7 lg:first:pl-0">
              <span className="t-num text-[12px] text-paper/25">{rule.n}</span>
              <dt className="mt-3.5 text-[1.0625rem] font-semibold tracking-[-0.02em] text-paper">
                {rule.title}
              </dt>
              <dd className="mt-2.5 max-w-[38ch] pb-1 text-[0.875rem] leading-snug text-paper/45">
                {rule.body}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={200}>
          <p className="mt-12 max-w-[62ch] border-l border-white/15 pl-5 text-[0.9375rem] leading-snug text-paper/50">
            A dispatcher&rsquo;s fee is agreed with the carrier outside ValleOS. They never take a
            cut of freight revenue and never tender a load onward &mdash; that is the line between
            dispatching and brokering, and the product holds it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { CountUp } from "@/components/primitives/CountUp";

const parameters = [
  {
    value: 4,
    suffix: "",
    label: "Readiness checks",
    detail: "Carrier, truck, driver and hours — before any dispatch.",
  },
  {
    value: 60,
    suffix: " min",
    label: "Freshness limit",
    detail: "Older hours-of-service data counts as unknown, and unknown blocks.",
  },
  {
    value: 24,
    suffix: " h",
    label: "POD clock",
    detail: "Starts at delivery and stays visible until the document arrives.",
  },
  {
    value: 0,
    suffix: "",
    label: "Autonomous bookings",
    detail: "A named human approves anything that binds. By design, not by setting.",
  },
];

const outcomes = [
  {
    n: "01",
    title: "Fewer preventable losses",
    body: "Every load gets an Accept, Caution or Reject with its reasons, against the carrier's real cost profile, before anyone commits.",
    measure: "% of accepted loads meeting target RPM and margin · deadhead %",
  },
  {
    n: "02",
    title: "No illegal dispatch",
    body: "Verified authority and insurance, a truck that is really in service, an active driver, fresh hours — all four, or the dispatch is blocked and says why.",
    measure: "% of carriers dispatch-ready · blocked dispatch attempts",
  },
  {
    n: "03",
    title: "Delivery to paid, faster",
    body: "Detention is caught while it is running, the POD is chased on a 24-hour clock, and a load becomes invoice-ready only once its proof is reviewed.",
    measure: "% of PODs within 24 h · median delivery → invoice sent · invoice aging",
  },
  {
    n: "04",
    title: "Dispatch you can delegate",
    body: "Hand dispatch to a person or to the AI, scope exactly what they may do, and revoke it instantly — with every action attributed.",
    measure: "zero autonomous bookings · zero cross-carrier access leaks",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="shell">
        <SectionHead
          eyebrow="What it is measured on"
          title={
            <>
              Four numbers that
              <br className="hidden sm:block" /> don&rsquo;t move.
            </>
          }
          lede="These are product parameters, not customer results. ValleOS is a first release — so what follows is what the system guarantees and how it holds itself to account, not a claim about someone else's fleet."
          size="lg"
        />

        <dl className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {parameters.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="bg-bone py-8 lg:px-7 lg:first:pl-0">
              <dt className="t-num text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
                <CountUp value={item.value} suffix={item.suffix} duration={1400} />
              </dt>
              <dd className="mt-4">
                <span className="block text-[0.9375rem] font-medium tracking-[-0.01em] text-ink">
                  {item.label}
                </span>
                <span className="mt-1.5 block max-w-[34ch] text-[0.875rem] leading-snug text-ink-40">
                  {item.detail}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-20 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {outcomes.map((item, i) => (
            <Reveal key={item.n} delay={(i % 2) * 90}>
              <div className="rule mb-6" />
              <div className="flex items-baseline gap-4">
                <span className="t-num text-[13px] font-medium text-ink-25">{item.n}</span>
                <h3 className="t-head text-[1.375rem] md:text-[1.625rem]">{item.title}</h3>
              </div>
              <p className="mt-3.5 max-w-[48ch] pl-9 text-[0.9375rem] leading-snug text-ink-55">
                {item.body}
              </p>
              <p className="mt-4 pl-9 font-mono text-[11px] uppercase leading-relaxed tracking-[0.07em] text-ink-40">
                Measured by {item.measure}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { TextLink } from "@/components/primitives/Cta";

const audiences = [
  {
    role: "Carrier owners",
    claim: "Know where your money is going.",
    body: "You set the cost profile, so every verdict runs on your numbers. You see who is dispatching on your authority, and you can take it back.",
    points: [
      "Protect margins with your own thresholds",
      "Grant and revoke dispatch access — owner only",
      "See fleet readiness before it blocks you",
      "Every load, driver and truck under your company",
      "Invoice completed loads and see what is owed",
    ],
  },
  {
    role: "Dispatchers",
    claim: "Work faster without losing control.",
    body: "Multiple carriers from one login, each in its own world. Economics before you commit, readiness before you dispatch, and exceptions before they cost anyone money.",
    points: [
      "Three carriers, three separate worlds",
      "All-in economics including deadhead",
      "Who is available, hours left, and how fresh",
      "Blocked with the exact failing check named",
      "Live status without calling the driver",
    ],
  },
  {
    role: "Drivers",
    claim: "Know what happens next.",
    body: "One screen per load and one valid action at a time. Every appointment carries its time zone, and everything you record carries your name.",
    points: [
      "Only your own loads",
      "One-tap status at every stage",
      "Photograph the BOL and the POD",
      "Report a delay or detention from the load",
      "See your own pay per completed load",
    ],
  },
];

export function Audience() {
  return (
    <section id="audience" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="shell">
        <SectionHead
          eyebrow="Who it is for"
          title={
            <>
              Same system.
              <br className="hidden sm:block" /> Three different jobs.
            </>
          }
          lede="Small motor carriers, owner-operators, fleet owners, dispatch offices, and independent dispatchers working several carriers at once. Everyone sees what their role needs — and nothing it doesn't."
          size="lg"
        />

        <div className="mt-16 grid gap-px bg-line lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <Reveal
              key={audience.role}
              delay={i * 110}
              className="flex flex-col bg-paper pt-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="t-label text-ink-40">{audience.role}</span>
              <h3 className="t-head mt-4 max-w-[15ch] text-[1.625rem] md:text-[1.875rem]">
                {audience.claim}
              </h3>
              <p className="t-sub mt-4 max-w-[40ch] text-[0.9375rem] text-ink-55">
                {audience.body}
              </p>
              <ul className="mt-7 space-y-2.5 border-t border-line pt-6">
                {audience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="mt-[5px] shrink-0 text-go"
                    >
                      <path
                        d="M2.5 7.4 5.6 10.5 11.5 3.8"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="square"
                      />
                    </svg>
                    <span className="text-[0.875rem] leading-snug text-ink-70">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pb-1 lg:mt-auto lg:pt-7">
                <TextLink href="#demo">See it for {audience.role.toLowerCase()}</TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { VerdictShowcase } from "@/components/ui/VerdictShowcase";

export function Verdicts() {
  return (
    <section id="verdicts" className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Load evaluation"
            title={
              <>
                Every load gets a decision.
                <br className="hidden sm:block" /> Not a guess.
              </>
            }
            lede="Three verdicts, each with the reasons, the numbers behind them, and the threshold that produced them. The product recommends. A named person decides."
            size="lg"
            className="lg:max-w-2xl"
          />
          <Reveal delay={160} className="shrink-0 lg:pb-3">
            <p className="max-w-[26ch] border-l border-line pl-5 text-[0.9375rem] leading-snug text-ink-55">
              A negative-margin load is always a Reject. Booking it anyway is allowed &mdash; and
              recorded.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" className="mt-14 md:mt-16">
          <VerdictShowcase />
        </Reveal>
      </div>
    </section>
  );
}

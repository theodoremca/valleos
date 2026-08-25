import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import {
  DetentionPanel,
  ExceptionsPanel,
  InvoicePanel,
  LiveLoadPanel,
} from "@/components/ui/ShowcasePanels";

const captions = [
  ["Live load", "Position, ETA and every actor who touched the record."],
  ["Detention", "Warned while the truck is still sitting, not at settlement."],
  ["Exceptions", "Everything blocking money, across the carrier's active loads."],
  ["Invoice and proof", "Lines that reconcile, with the evidence attached."],
];

export function Showcase() {
  return (
    <section id="showcase" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="shell">
        <SectionHead
          eyebrow="Inside the product"
          title={
            <>
              The half of the job
              <br className="hidden sm:block" /> that happens after dispatch.
            </>
          }
          lede="Detention that nobody notices, a POD that never arrives, a claim that quietly holds an invoice hostage. These are the screens where small carriers actually lose money — so they are the screens ValleOS spends its detail on."
          size="lg"
        />

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-12">
          <Reveal variant="scale" className="lg:col-span-7">
            <p className="mb-3 flex items-baseline gap-3">
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
                {captions[0][0]}
              </span>
              <span className="text-[0.875rem] text-ink-40">{captions[0][1]}</span>
            </p>
            <LiveLoadPanel className="h-[calc(100%-2.25rem)]" />
          </Reveal>

          <Reveal variant="scale" delay={90} className="lg:col-span-5">
            <p className="mb-3 flex items-baseline gap-3">
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
                {captions[1][0]}
              </span>
              <span className="text-[0.875rem] text-ink-40">{captions[1][1]}</span>
            </p>
            <DetentionPanel className="h-[calc(100%-2.25rem)]" />
          </Reveal>

          <Reveal variant="scale" delay={60} className="lg:col-span-5">
            <p className="mb-3 flex items-baseline gap-3">
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
                {captions[3][0]}
              </span>
              <span className="hidden text-[0.875rem] text-ink-40 xl:inline">
                {captions[3][1]}
              </span>
            </p>
            <InvoicePanel className="h-[calc(100%-2.25rem)]" />
          </Reveal>

          <Reveal variant="scale" delay={120} className="lg:col-span-7">
            <p className="mb-3 flex items-baseline gap-3">
              <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.015em] text-ink">
                {captions[2][0]}
              </span>
              <span className="text-[0.875rem] text-ink-40">{captions[2][1]}</span>
            </p>
            <ExceptionsPanel className="h-[calc(100%-2.25rem)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

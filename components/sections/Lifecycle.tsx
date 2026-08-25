import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { LifecycleRail } from "@/components/ui/LifecycleRail";

export function Lifecycle() {
  return (
    <section id="lifecycle" className="overflow-hidden bg-bone py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="From dispatch to payment"
            title={
              <>
                Most software stops
                <br className="hidden sm:block" /> at dispatch.
              </>
            }
            lede="A load is not finished when the truck rolls. It is finished when the money arrives — and every gap between those two points is where small carriers lose it."
            size="lg"
            className="lg:max-w-2xl"
          />
        </div>
      </div>

      <div className="shell mt-14 md:mt-16">
        <Reveal variant="scale">
          <LifecycleRail />
        </Reveal>
      </div>
    </section>
  );
}

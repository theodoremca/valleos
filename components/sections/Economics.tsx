import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/SectionHead";
import { TextLink } from "@/components/primitives/Cta";
import { CostWaterfall } from "@/components/ui/CostWaterfall";

export function Economics() {
  return (
    <section id="economics" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>The claim this product lives on</Eyebrow>
              </Reveal>

              <Reveal delay={60}>
                <h2 className="t-head mt-5 text-[clamp(2.25rem,5vw,4.25rem)]">
                  A $4,500 load isn&rsquo;t necessarily a $4,500 win.
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="t-sub mt-6 max-w-[46ch] text-[1.0625rem] text-ink-55 md:text-[1.125rem]">
                  The rate is the only number on the posting. Deadhead, fuel, driver pay and fixed
                  cost are the numbers that decide whether the load was worth running &mdash; and
                  most carriers meet them weeks later, at settlement, when the money is already
                  gone.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="t-sub mt-5 max-w-[46ch] text-[1.0625rem] text-ink-55 md:text-[1.125rem]">
                  ValleOS runs them before the load is booked. Not so you can do the math &mdash; so
                  you never have to.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 border-l-2 border-go pl-5">
                  <p className="text-[1.0625rem] font-medium leading-snug tracking-[-0.015em] text-ink">
                    The product does the math. A person still makes the call.
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-snug text-ink-40">
                    ValleOS never books a load, accepts a rate, or sends money on its own.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8">
                  <TextLink href="#verdicts">See how a verdict is reached</TextLink>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal variant="scale" className="lg:col-span-6 lg:col-start-7">
            <CostWaterfall />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

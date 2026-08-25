import Image from "next/image";
import { blur } from "@/lib/blur";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/SectionHead";
import { ReadinessChain } from "@/components/ui/ReadinessChain";

export function Verification() {
  return (
    <section id="verification" className="relative isolate overflow-hidden bg-night py-24 md:py-32 lg:py-40">
      {/* atmosphere, not decoration */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image
            src="/img/storm-run.jpg"
            alt=""
            fill
            sizes="46vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blur["storm-run"]}
            className="object-cover object-[54%_30%] opacity-60 [filter:grayscale(0.6)_contrast(1.08)_brightness(0.72)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#080d14_0%,rgba(8,13,20,0.72)_38%,rgba(8,13,20,0.55)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,#080d14,transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(to_top,#080d14,transparent)]" />
        </div>
      </div>

      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="paper">Readiness</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="t-head mt-5 text-[clamp(2.5rem,6vw,5.25rem)] text-paper">
                No one operates{" "}
                <br />
                unverified.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-5 lg:pt-4">
            <p className="t-sub max-w-[46ch] text-[1.0625rem] text-paper/60 md:text-[1.125rem]">
              Four independent conditions decide whether a load can legally leave. ValleOS checks
              all four at the moment of dispatch, from sources the carrier doesn&rsquo;t
              self-report &mdash; and shows its working either way.
            </p>
            <p className="t-sub mt-5 max-w-[46ch] text-[1.0625rem] text-paper/60 md:text-[1.125rem]">
              Missing data is treated as a block, never as a pass.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" className="mt-14 md:mt-20">
          <ReadinessChain />
        </Reveal>
      </div>
    </section>
  );
}

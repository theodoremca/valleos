import Image from "next/image";
import { blur } from "@/lib/blur";
import { Reveal } from "@/components/primitives/Reveal";
import { Cta } from "@/components/primitives/Cta";

export function FinalCta() {
  return (
    <section id="demo" className="relative isolate overflow-hidden bg-night">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/img/depot-mono.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL={blur["depot-mono"]}
          className="object-cover object-[50%_62%] opacity-[0.33]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#080d14_4%,rgba(8,13,20,0.62)_46%,rgba(8,13,20,0.88)_100%)]" />
      </div>

      <div className="shell py-28 md:py-40 lg:py-48">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="t-label text-paper/40">ValleOS</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="t-display mt-6 text-[clamp(2.75rem,7.2vw,6.5rem)] text-paper">
              Run every load with more certainty.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="t-sub mx-auto mt-7 max-w-[44ch] text-[1.0625rem] text-paper/60 md:text-[1.25rem]">
              Know what&rsquo;s profitable. Know what&rsquo;s ready. Know what happens next.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Cta href="mailto:hello@valleos.com?subject=ValleOS%20demo" variant="primary-dark" size="lg" arrow>
                Get a demo
              </Cta>
              <Cta href="#product" variant="ghost-dark" size="lg">
                Explore ValleOS
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { blur } from "@/lib/blur";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "@/components/primitives/SectionHead";
import { DriverPhone } from "@/components/ui/DriverPhone";

const points = [
  {
    title: "Only their own loads",
    body: "Never another driver's, never the carrier's rates. The rate confirmation is viewable; the rate is not on the screen.",
  },
  {
    title: "One valid action at a time",
    body: "Arrived, loaded, rolling, delivered. Actions that don't apply to the current state are absent, not greyed out.",
  },
  {
    title: "Delay and detention from the load",
    body: "The driver sees dwell, when free time ended, and whether detention is chargeable — with a photo attached.",
  },
  {
    title: "BOL and POD, photographed on the spot",
    body: "Captured from the load screen while the truck is still there, timestamped and attributed.",
  },
  {
    title: "Their own pay per completed load",
    body: "And no one else's.",
  },
];

export function Driver() {
  return (
    <section id="driver" className="relative isolate overflow-hidden bg-night py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="paper">Driver</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="t-head mt-5 text-[clamp(2.25rem,5vw,4.25rem)] text-paper">
                Simple for the people on the road.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-sub mt-6 max-w-[46ch] text-[1.0625rem] text-paper/60 md:text-[1.125rem]">
                A driver shouldn&rsquo;t have to understand the whole system. They need to know
                what happens next — and every appointment needs a time zone they can trust.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-10 space-y-5 border-t border-white/10 pt-8">
                {points.map((point) => (
                  <div key={point.title}>
                    <dt className="text-[0.9375rem] font-medium tracking-[-0.01em] text-paper">
                      {point.title}
                    </dt>
                    <dd className="mt-1 max-w-[46ch] text-[0.875rem] leading-snug text-paper/45">
                      {point.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 max-w-[46ch] border-l border-white/15 pl-5 text-[0.875rem] leading-snug text-paper/50">
                A double tap or an out-of-order check-in needs a dispatcher correction, with a
                reason — so it can never silently move detention or pay.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* The photograph is the ground; the phone sits on it, half off its edge. */}
            <div className="relative">
              <Reveal
                variant="scale"
                className="absolute inset-y-10 left-0 hidden w-[74%] lg:block"
              >
                <div className="relative h-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/img/driver-cab.jpg"
                    alt="A driver at the wheel of a tractor unit, seen in silhouette"
                    fill
                    sizes="34vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blur["driver-cab"]}
                    className="object-cover object-[34%_50%] opacity-90"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,13,20,0.5),rgba(8,13,20,0.05)_45%,rgba(8,13,20,0.55))]"
                  />
                </div>
              </Reveal>

              {/* Small screens get the photograph above the phone, not behind it. */}
              <Reveal variant="scale" className="lg:hidden">
                <div className="relative aspect-[5/3] overflow-hidden rounded-[16px] sm:aspect-[16/9]">
                  <Image
                    src="/img/driver-cab.jpg"
                    alt=""
                    fill
                    sizes="92vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blur["driver-cab"]}
                    className="object-cover object-[34%_45%] opacity-90"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,13,20,0.6),transparent_60%)]"
                  />
                </div>
              </Reveal>

              <Reveal
                variant="scale"
                delay={140}
                className="relative mx-auto -mt-20 w-fit sm:-mt-28 lg:mt-0 lg:mr-0 lg:flex lg:justify-end"
              >
                <DriverPhone />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

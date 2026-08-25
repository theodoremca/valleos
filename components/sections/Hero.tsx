import Image from "next/image";
import { blur } from "@/lib/blur";
import { Cta } from "@/components/primitives/Cta";
import {
  LoadEconomicsCard,
  ReadinessCard,
  RecommendationCard,
} from "@/components/ui/ProductCards";

const loop = [
  "Verify the carrier",
  "Sync the fleet",
  "Evaluate the economics",
  "Check readiness",
  "Dispatch, execute, invoice",
];

const trust = [
  {
    title: "Verified by government record",
    detail: "Company, authority and insurance — re-checked on a schedule.",
  },
  {
    title: "Fleet and hours from Motive",
    detail: "Read-only ELD data, stamped with how fresh it is.",
  },
  {
    title: "Closed on the driver's evidence",
    detail: "Timestamped check-ins, photographed BOL and POD.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      {/* warm wash behind the opening */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(120%_70%_at_18%_0%,#fbf9f5_0%,#f6f4f0_38%,#ffffff_78%)]"
      />

      <div className="shell pt-14 md:pt-20 lg:pt-[86px]">
        <div className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 py-1.5 pl-2.5 pr-4 backdrop-blur">
          <span className="anim-ring size-1.5 rounded-full bg-go" aria-hidden="true" />
          <span className="t-label text-ink-55">
            A dispatch operating system for small trucking companies
          </span>
        </div>

        <h1
          className="t-display anim-rise mt-7 text-[clamp(2.85rem,8.3vw,8.125rem)] md:mt-9"
          style={{ animationDelay: "80ms" }}
        >
          Know the load{" "}
          <br />
          <span className="relative inline-block">
            before
            <span
              aria-hidden="true"
              className="anim-underline absolute -bottom-[0.04em] left-0 block h-[0.055em] w-full bg-go"
            />
          </span>{" "}
          you take the load.
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div
            className="anim-rise lg:col-span-7 xl:col-span-6"
            style={{ animationDelay: "180ms" }}
          >
            <p className="t-sub max-w-[52ch] text-[1.0625rem] text-ink-55 md:text-[1.25rem]">
              ValleOS helps small trucking companies evaluate the real economics of every load,
              verify dispatch readiness, manage execution, and get paid — from one operating
              system.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Cta href="#demo" size="lg" arrow>
                Get a demo
              </Cta>
              <Cta href="#economics" variant="ghost" size="lg">
                See how it works
              </Cta>
            </div>
          </div>

          <div
            className="anim-rise lg:col-span-4 lg:col-start-9"
            style={{ animationDelay: "260ms" }}
          >
            <p className="t-label text-ink-40">The operating loop</p>
            <ol className="mt-3.5 border-t border-line">
              {loop.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3 border-b border-line py-2.5 text-[0.9375rem] text-ink-70"
                >
                  <span className="t-num w-5 text-[11px] text-ink-25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Cinematic band + floating product fragments */}
      <div className="shell-wide mt-12 md:mt-16">
        <div className="relative">
          <div
            className="anim-card relative aspect-[4/3] overflow-hidden rounded-[16px] bg-bone-2 sm:aspect-[16/9] md:rounded-[22px] lg:aspect-[2.05/1]"
            style={{ animationDelay: "340ms" }}
          >
            <Image
              src="/img/hero-fleet.jpg"
              alt="Three tractor-trailers running a two-lane highway at golden hour"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blur["hero-fleet"]}
              className="object-cover object-[50%_58%] [filter:saturate(0.9)_contrast(1.04)_brightness(0.98)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,20,31,0.34),rgba(12,20,31,0.03)_40%,transparent_66%),radial-gradient(120%_90%_at_50%_50%,transparent_45%,rgba(12,20,31,0.16)_100%)]"
            />
          </div>

          {/* Desktop: fragments anchored to three corners so the trucks stay clear */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div
              className="anim-card absolute right-[3%] top-[6%]"
              style={{ animationDelay: "620ms" }}
            >
              <div className="anim-float" style={{ animationDelay: "1.4s" }}>
                <LoadEconomicsCard />
              </div>
            </div>

            <div
              className="anim-card absolute bottom-[7%] left-[3%]"
              style={{ animationDelay: "780ms" }}
            >
              <div className="anim-float" style={{ animationDelay: "2.1s" }}>
                <ReadinessCard />
              </div>
            </div>

            <div
              className="anim-card absolute bottom-[9%] right-[7%]"
              style={{ animationDelay: "920ms" }}
            >
              <div className="anim-float" style={{ animationDelay: "2.9s" }}>
                <RecommendationCard />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: the same fragments, stacked rather than shrunk */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:hidden">
          <LoadEconomicsCard className="w-full sm:row-span-2" />
          <ReadinessCard className="w-full" />
          <RecommendationCard className="w-full" />
        </div>
      </div>

      {/* The three independent sources of truth */}
      <div className="shell mt-16 md:mt-24">
        <div className="rule" />
        <dl className="grid gap-px bg-line sm:grid-cols-3">
          {trust.map((item) => (
            <div key={item.title} className="bg-paper py-7 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt className="max-w-[30ch] text-[0.9375rem] font-medium leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </dt>
              <dd className="mt-1.5 max-w-[36ch] text-[0.875rem] leading-snug text-ink-40">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
        <div className="rule" />
      </div>
    </section>
  );
}

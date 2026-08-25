import { Logo } from "@/components/primitives/Logo";

const columns = [
  {
    head: "Product",
    links: [
      ["Load economics", "#economics"],
      ["Verdicts", "#verdicts"],
      ["Readiness", "#verification"],
      ["AI dispatcher", "#ai"],
      ["Lifecycle", "#lifecycle"],
    ],
  },
  {
    head: "Solutions",
    links: [
      ["For carrier owners", "#audience"],
      ["For dispatchers", "#audience"],
      ["For drivers", "#driver"],
      ["Integrations", "#integrations"],
    ],
  },
  {
    head: "Resources",
    links: [
      ["How it works", "#lifecycle"],
      ["FAQ", "#faq"],
      ["Get a demo", "#demo"],
    ],
  },
  {
    head: "Company",
    links: [
      ["Contact", "mailto:hello@valleos.com"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pb-10 pt-16 text-paper md:pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="paper" />
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-snug text-paper/45">
              A dispatch operating system for small trucking companies — one that knows when a load
              loses money, and won&rsquo;t let anyone dispatch illegally.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
            aria-label="Footer"
          >
            {columns.map((column) => (
              <div key={column.head}>
                <p className="t-label text-paper/35">{column.head}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[0.875rem] text-paper/60 transition-colors duration-200 hover:text-paper"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-paper/35">
            &copy; {new Date().getFullYear()} ValleOS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#top"
              className="text-[0.8125rem] text-paper/35 transition-colors duration-200 hover:text-paper/70"
            >
              Privacy
            </a>
            <a
              href="#top"
              className="text-[0.8125rem] text-paper/35 transition-colors duration-200 hover:text-paper/70"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

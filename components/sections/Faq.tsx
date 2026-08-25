import { Reveal } from "@/components/primitives/Reveal";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Accordion, type QA } from "@/components/ui/Accordion";

const faqs: QA[] = [
  {
    q: "How does ValleOS calculate load profitability?",
    a: "From your own cost profile: fixed cost per mile, your average mpg and the diesel price you pay, and each driver's individual pay agreement. Revenue minus deadhead, fuel, driver pay and fixed cost gives all-in RPM, profit and margin — with the working shown line by line. Tolls and lumper aren't modelled yet, and the verdict says so.",
  },
  {
    q: "Does ValleOS book loads automatically?",
    a: "No. ValleOS calculates, ranks and explains — booking, rate acceptance and assignment are always human actions. That's a product requirement, not a setting.",
  },
  {
    q: "Can the AI dispatch loads on its own?",
    a: "No. The AI drafts intake, economics, bookings and assignments, and every draft runs the same checks a person would. A named human approves anything binding, every action is logged as AI plus the approving human, and drafts expire on any material change — like a driver's hours dropping.",
  },
  {
    q: "What happens when HOS data is stale?",
    a: "Hours of service older than 60 minutes count as unknown, and unknown is a block, not a pass. New dispatch stops for that driver until the data is fresh; loads already in transit continue. The stale state is labelled with its age everywhere it appears.",
  },
  {
    q: "Can I manage multiple carriers?",
    a: "Yes. A dispatcher works several carriers from one login, with a context bar that always names the carrier they're acting for. Each carrier is a separate world — no cross-carrier lists, search or export — and revoked access ends on the next action while the history stays.",
  },
  {
    q: "Can I control what my dispatcher can access?",
    a: "Scope is set per dispatcher: intake and evaluation, booking, assigning and dispatching, monitoring, documents, and whether they can message brokers directly. Some things are off-limits regardless of scope — your settings, your cost profile, your invoices and bank details. Only the owner grants or revokes access.",
  },
  {
    q: "Does ValleOS replace my ELD?",
    a: "No. ValleOS connects to your ELD read-only — Motive today — and syncs trucks, drivers, hours and locations. It never writes to the ELD, never edits logs, and never shows stale data as current.",
  },
  {
    q: "What happens when a driver or truck isn't verified?",
    a: "A truck or driver added manually is marked unverified and carries no hours of service. Dispatching a manual driver needs the owner's explicit acknowledgment, logged each time. A truck Motive reports out of service can't be dispatched at all.",
  },
  {
    q: "How does ValleOS help with detention?",
    a: "The clock starts at the driver's arrival check-in, backed by GPS. You're warned while detention is running — dwell, when free time ends, and the amount accruing — not after the truck has left. The charge stays proposed until the carrier owner approves, adjusts or waives it on the invoice.",
  },
  {
    q: "How does invoicing work?",
    a: "A load becomes invoice-ready only when its documents are reviewed and its exceptions resolved. The invoice lines visibly sum to the total, proof is attached, and payments are recorded against it — full or partial — with amount, date, reference and who recorded them. ValleOS does not move money.",
  },
  {
    q: "Who is ValleOS built for?",
    a: "Small motor carriers, owner-operators and fleet owners running one to a few dozen trucks, the dispatch offices that work for them, and independent dispatchers managing several carriers. If the business currently runs on spreadsheets, texts, load-board tabs and paper BOLs, this is who it's for.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="Questions"
                title={
                  <>
                    Asked before
                    <br className="hidden sm:block" /> anyone signs.
                  </>
                }
                lede="Straight answers about what the product does — and what it deliberately doesn't."
              />
            </div>
          </div>

          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

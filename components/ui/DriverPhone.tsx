import { PhoneFrame, StatusBar, TabBar } from "./Phone";
import { StateChip } from "./StateChip";

const stops = [
  {
    n: "1",
    kind: "Pickup",
    name: "Shamrock Foods DC",
    address: "2540 N 32nd St, Phoenix, AZ 85008",
    when: "Thu Aug 21 · 2:00–4:00 PM",
    zone: "MST (Phoenix, no DST)",
    meta: "Appt # 77812 · Dock 14 · ask for receiving",
    current: true,
  },
  {
    n: "2",
    kind: "Delivery",
    name: "Smith's Distribution Center",
    address: "4800 Edith Blvd NE, Albuquerque, NM 87107",
    when: "Fri Aug 22 · 9:00 AM",
    zone: "MDT (Mountain Daylight)",
    meta: "Lumper on receiver — get the receipt",
    current: false,
  },
];

export function DriverPhone({ className = "" }: { className?: string }) {
  return (
    <PhoneFrame className={className} screenClassName="h-[600px] w-[286px]">
      <StatusBar />

      <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-2">
        <div className="min-w-0">
          <p className="t-num text-[1.0625rem] font-semibold leading-none text-ink">RM-2408</p>
          <p className="mt-1 truncate text-[11.5px] text-ink-40">
            Apex Logistics · for Red Mesa Freight
          </p>
        </div>
        <StateChip kind="neutral">Dispatched</StateChip>
      </div>

      <div className="mx-4 rounded-[10px] bg-go-lite px-3 py-2.5">
        <p className="text-[12px] font-semibold leading-tight text-go-deep">
          Next: check in when you arrive at the shipper
        </p>
        <p className="mt-1 text-[11px] leading-tight text-go-deep/70">
          Pickup window opens 2:00 PM MST. You&rsquo;re 38 mi out.
        </p>
      </div>

      <div className="mt-3.5 flex-1 overflow-hidden px-4">
        <p className="t-label text-ink-40">Stops</p>
        <ol className="mt-2.5 space-y-2.5">
          {stops.map((stop) => (
            <li
              key={stop.n}
              className={`rounded-[10px] border px-3 py-2.5 ${
                stop.current ? "border-ink/15 bg-bone" : "border-line"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[11.5px] font-semibold text-ink">
                  {stop.n} · {stop.kind} — {stop.name}
                </span>
              </div>
              <p className="mt-1 text-[10.5px] leading-tight text-ink-40">{stop.address}</p>
              <p className="mt-1.5 text-[11px] font-medium leading-tight text-ink">
                {stop.when}{" "}
                <span className="font-mono text-[10px] font-normal tracking-[0.04em] text-ink-55">
                  {stop.zone}
                </span>
              </p>
              <p className="mt-1 text-[10.5px] leading-tight text-ink-40">{stop.meta}</p>
            </li>
          ))}
        </ol>

        <div className="mt-3.5 flex gap-1.5">
          {["Rate con", "BOL at pickup", "POD at delivery"].map((doc, i) => (
            <span
              key={doc}
              className={`flex-1 truncate rounded-full border px-2 py-1 text-center text-[9.5px] font-medium ${
                i === 0 ? "border-line text-ink-55" : "border-dashed border-line text-ink-40"
              }`}
            >
              {doc}
            </span>
          ))}
        </div>

        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="mt-4 w-full rounded-full bg-ink py-3 text-[13px] font-semibold text-paper"
        >
          I&rsquo;ve arrived at the shipper
        </button>
        <p className="mt-2 text-center text-[10px] text-ink-40">
          Only the next valid check-in is shown.
        </p>
      </div>

      <TabBar items={["Loads", "Pay", "Profile"]} active="Loads" />
    </PhoneFrame>
  );
}

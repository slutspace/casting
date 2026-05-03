import Link from "next/link";
import { CastingRow } from "@/components/casting-row";
import { castingCalls } from "@/lib/data";
import {
  Blob,
  Blob2,
  HighlightedText,
  Clapper,
  Sparkle,
  ArrowDoodle,
} from "@/components/illustrations";

export const metadata = {
  title: "Casting Calls · Casting / NY",
};

const STATUSES = ["All", "Open", "Final Callbacks", "Closing Soon", "Closed"];
const TYPES = [
  "All",
  "Editorial",
  "Campaign",
  "Film",
  "Series",
  "Runway",
  "Lookbook",
  "Commercial",
];

export default function CastingCallsPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -left-32 w-[36rem] h-[36rem] text-butter/60 -z-10" />
        <Blob2 className="absolute top-10 -right-32 w-[34rem] h-[34rem] text-rose/50 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Clapper className="w-4 h-4" />
                Index 02 · Live briefs
              </span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                Open <HighlightedText color="sun">briefs</HighlightedText>.
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                {castingCalls.length} public castings on the desk. Private
                commissions are routed through Concierge and are not listed
                here. Submissions close at 18:00 ET on the listed date.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/concierge" className="btn-primary">
                  <Sparkle className="w-3.5 h-3.5 text-butter" />
                  Brief a private cast
                </Link>
                <Link href="/clients" className="btn-ghost">
                  Become a client
                  <ArrowDoodle className="w-6 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="pb-8">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="rounded-[2rem] bg-bone border-2 border-ink p-5 md:p-6 shadow-sticker space-y-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="eyebrow shrink-0">Status</span>
              {STATUSES.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  className={`shrink-0 px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-all ${
                    i === 0
                      ? "bg-ink text-bone"
                      : "bg-bone border-2 border-ink/15 text-ink/70 hover:border-ink hover:text-ink hover:-translate-y-0.5"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="eyebrow shrink-0">Type</span>
              {TYPES.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className={`shrink-0 px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-all ${
                    i === 0
                      ? "bg-sun text-ink"
                      : "bg-bone border-2 border-ink/15 text-ink/70 hover:border-ink hover:text-ink hover:-translate-y-0.5"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-4">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 space-y-3">
          {castingCalls.map((c) => (
            <CastingRow key={c.id} call={c} />
          ))}
          <div className="mt-8 text-center text-[13px] text-ink/50">
            End of public listings · {castingCalls.length} of 62 shown · 9
            private commissions hidden
          </div>
        </div>
      </section>
    </>
  );
}

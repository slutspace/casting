import { TalentCard } from "@/components/talent-card";
import { creators } from "@/lib/data";
import {
  Blob,
  Blob2,
  HighlightedText,
  Sparkle,
  StarsCluster,
} from "@/components/illustrations";

export const metadata = {
  title: "Roster · Casting / NY",
};

const FILTERS = [
  "All",
  "Editorial",
  "Runway",
  "Movement",
  "Couture",
  "Beauty",
  "Tailoring",
  "Conceptual",
  "Fine Art",
  "Lingerie",
  "Avant-Garde",
];

const BOROUGHS = ["All", "Manhattan", "Brooklyn", "Queens", "Bronx", "Beyond"];

export default function TalentPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -right-32 w-[36rem] h-[36rem] text-mint/60 -z-10" />
        <Blob2 className="absolute -bottom-32 -left-24 w-[34rem] h-[34rem] text-butter/50 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-4">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Sparkle className="w-4 h-4 text-sun" />
                Index 01 · The Roster
              </span>
              <StarsCluster className="w-36 h-11 opacity-90 hidden md:block" />
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                Talent, <br />
                <HighlightedText color="rose">on file</HighlightedText>.
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                {creators.length} performers visible to you. Full roster of
                1,284 unlocks at Tier 2 client verification. All measurements,
                rates, and reels disclosed inside authenticated views.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="pb-8">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="rounded-[2.25rem] md:rounded-[3rem] bg-bone border-2 border-ink p-5 md:p-7 shadow-sticker space-y-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="eyebrow shrink-0">Discipline</span>
              {FILTERS.map((f, i) => (
                <button
                  key={f}
                  type="button"
                  className={`shrink-0 px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-all ${
                    i === 0
                      ? "bg-ink text-bone"
                      : "bg-bone border-2 border-ink/15 text-ink/70 hover:border-ink hover:text-ink hover:-translate-y-0.5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <span className="eyebrow shrink-0">Borough</span>
              {BOROUGHS.map((b, i) => (
                <button
                  key={b}
                  type="button"
                  className={`shrink-0 px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-all ${
                    i === 0
                      ? "bg-sun text-ink"
                      : "bg-bone border-2 border-ink/15 text-ink/70 hover:border-ink hover:text-ink hover:-translate-y-0.5"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8 text-[13px] text-ink/60">
            <Sparkle className="w-4 h-4 text-rouge" />
            Hover any face to peek behind the file
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {creators.map((c, i) => (
              <TalentCard key={c.id} creator={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

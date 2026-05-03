import Link from "next/link";
import {
  Sparkle,
  Heart,
  Camera,
  Eye,
  Star,
  Blob,
  Blob2,
  HighlightedText,
  ArrowDoodle,
} from "@/components/illustrations";

export const metadata = {
  title: "Journal · Casting / NY",
};

const ENTRIES = [
  {
    issue: "Vol. III · Iss. 04",
    title:
      "On Restraint: Why the Most Photographed City Stopped Wanting to Be Seen.",
    author: "Editorial Desk",
    date: "May 2026",
    cat: "Essay",
    bg: "bg-butter",
    icon: <Eye className="w-7 h-4" />,
    img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    issue: "Vol. III · Iss. 03",
    title: "Vera Osei in conversation with the rouge of restraint.",
    author: "with Margaux Hadley",
    date: "Apr 2026",
    cat: "Profile",
    bg: "bg-rose",
    icon: <Heart className="w-6 h-6 text-rouge" />,
    img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1600&q=80",
  },
  {
    issue: "Vol. III · Iss. 02",
    title:
      "The model's bill of rights, the platform's bill of obligations.",
    author: "Renée Vasquez, Esq.",
    date: "Mar 2026",
    cat: "Brief",
    bg: "bg-mint",
    icon: <Star className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    issue: "Vol. III · Iss. 01",
    title: "How a casting house thinks about leaks before they happen.",
    author: "Cassius Wren",
    date: "Feb 2026",
    cat: "Field Note",
    bg: "bg-sky",
    icon: <Camera className="w-7 h-5" />,
    img: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function JournalPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -left-32 w-[36rem] h-[36rem] text-lavender/60 -z-10" />
        <Blob2 className="absolute -bottom-32 -right-24 w-[34rem] h-[34rem] text-butter/60 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Sparkle className="w-3.5 h-3.5" />
                The Journal · Vol. III
              </span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                The{" "}
                <HighlightedText color="rose">house journal</HighlightedText>
                <span className="text-rouge">.</span>
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                Essays, briefs, and field notes from the desk. Edited slowly,
                published rarely.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-6 md:gap-8">
          {ENTRIES.map((e, i) => (
            <Link
              key={e.title}
              href="#"
              className={`group rounded-[2rem] border-2 border-ink p-6 md:p-8 ${e.bg} ${
                i % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              } shadow-sticker hover:shadow-cardlift hover:-translate-y-1 transition-all duration-500 ease-bounce2 flex flex-col gap-5`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-bone border-2 border-ink flex items-center justify-center">
                  {e.icon}
                </div>
                <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/50">
                  {e.issue}
                </span>
              </div>
              <span className="pill-ink self-start">{e.cat}</span>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-editorial group-hover:text-rouge transition-colors">
                {e.title}
              </h2>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-2 border-ink bg-ink/5">
                <img
                  src={e.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between text-[12px] mt-auto pt-4 border-t-2 border-dashed border-ink/15">
                <span className="font-medium">{e.author}</span>
                <span className="text-ink/50 font-mono">{e.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

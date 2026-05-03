import Link from "next/link";
import {
  Sparkle,
  Camera,
  FilmReel,
  Eye,
  Star,
  Heart,
  Lightning,
  HighlightedText,
  Stamp,
  Blob,
  Blob2,
  ArrowDoodle,
} from "@/components/illustrations";

export const metadata = {
  title: "For Clients · Casting / NY",
};

const TIERS = [
  {
    name: "Studio",
    price: "Per booking",
    blurb:
      "Brief one cast at a time. Public roster access after Tier 2 verification.",
    bullets: [
      "Tier 2 client verification",
      "Public roster + open briefs",
      "Self-serve booking flow",
      "5 business day SLA",
    ],
    cta: "Verify",
    href: "/sign-in",
    bg: "bg-butter",
    icon: <Camera className="w-7 h-5" />,
  },
  {
    name: "House",
    price: "$2,400 / mo",
    blurb:
      "Recurring access for production houses, magazines, and independent labels.",
    bullets: [
      "Tier 3 verification + dedicated lead",
      "Private brief board",
      "Direct talent contact + NDA",
      "Bookings dashboard + audit log",
      "1–4 hour SLA business hours",
    ],
    cta: "Apply",
    href: "/concierge",
    bg: "bg-ink text-bone",
    icon: <FilmReel className="w-7 h-7 text-butter" />,
    featured: true,
  },
  {
    name: "Atelier",
    price: "Custom",
    blurb:
      "For collectors and heritage clients commissioning private work.",
    bullets: [
      "Tier 4 with two-person verification",
      "Concierge desk · always-on lead",
      "View-once delivery + forensic chain",
      "Tenant-isolated content vault",
      "Counsel-to-counsel intake",
    ],
    cta: "Concierge",
    href: "/concierge",
    bg: "bg-rose",
    icon: <Eye className="w-7 h-4" />,
  },
];

const VERIFICATION = [
  ["Legal entity", "Articles of incorporation. EIN. We check.", "bg-butter"],
  ["Counsel reachable", "A working number for your general counsel.", "bg-rose"],
  ["Beneficial ownership", "FinCEN-grade UBO disclosure.", "bg-mint"],
  ["Sanctions clearance", "OFAC + global sanctions screen.", "bg-sky"],
  ["Track record", "Two prior shoots verifiable.", "bg-lavender"],
  ["Banking", "Verified payment account. No personal cards on Atelier.", "bg-peach"],
];

export default function ClientsPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -left-32 w-[36rem] h-[36rem] text-mint/60 -z-10" />
        <Blob2 className="absolute top-20 -right-32 w-[34rem] h-[34rem] text-rose/50 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Star className="w-3.5 h-3.5" />
                Become a client
              </span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                A short list, <br />
                <HighlightedText color="butter">opened to you</HighlightedText>
                <span className="text-rouge">.</span>
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                Three ways to work with the house. The cost is verification —
                we won't show our roster to anyone who hasn't shown us theirs.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-[2.5rem] border-2 border-ink p-8 md:p-10 flex flex-col gap-7 shadow-sticker transition-transform duration-500 ease-bounce2 ${
                t.featured
                  ? "md:scale-105 md:-translate-y-2"
                  : i === 0
                    ? "hover:-rotate-1"
                    : "hover:rotate-1"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl border-2 ${
                    t.featured
                      ? "bg-bone border-bone"
                      : "bg-bone border-ink"
                  } flex items-center justify-center`}
                >
                  {t.icon}
                </div>
                {t.featured && (
                  <Stamp
                    text="POPULAR"
                    className="w-16 h-16 text-sun animate-spin-slow"
                  />
                )}
              </div>

              <div className="space-y-3">
                <div
                  className={`text-[10px] uppercase tracking-wide3 font-mono ${
                    t.featured ? "text-sun" : "text-ink/50"
                  }`}
                >
                  {t.name}
                </div>
                <div className="font-display text-5xl tracking-editorial leading-none">
                  {t.price}
                </div>
                <p
                  className={`text-[14px] ${
                    t.featured ? "text-bone/70" : "text-ink/70"
                  }`}
                >
                  {t.blurb}
                </p>
              </div>

              <ul
                className={`space-y-2.5 text-[13px] flex-1 ${
                  t.featured ? "text-bone/85" : "text-ink/80"
                }`}
              >
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className={t.featured ? "text-sun" : "text-rouge"}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={t.href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                  t.featured
                    ? "bg-sun text-ink hover:bg-butter"
                    : "bg-ink text-bone hover:-translate-y-0.5"
                }`}
              >
                {t.cta}
                <ArrowDoodle
                  className={`w-5 h-3 ${
                    t.featured ? "text-ink" : "text-butter"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-4 space-y-3">
              <div className="eyebrow flex items-center gap-2">
                <Lightning className="w-4 h-4" />
                Verification
              </div>
              <h2 className="font-display text-4xl md:text-6xl tracking-editorial leading-[1.05]">
                We verify <br />
                that you{" "}
                <HighlightedText color="rose">exist</HighlightedText>.
              </h2>
            </div>
            <p className="md:col-span-8 text-[15px] text-ink/70 leading-relaxed md:pl-8 max-w-2xl">
              We don't verify your taste. We verify that you exist as a real
              entity that can sign a real contract and clear a real check.
              Six things, ~48 hours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERIFICATION.map(([t, d, bg], i) => (
              <div
                key={t}
                className={`${bg} rounded-[1.75rem] border-2 border-ink p-7 ${
                  i % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                } transition-transform`}
              >
                <div className="w-10 h-10 rounded-full bg-bone border-2 border-ink flex items-center justify-center text-[12px] font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-2xl tracking-editorial leading-tight mb-2">
                  {t}
                </div>
                <p className="text-[14px] text-ink/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

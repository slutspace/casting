import Link from "next/link";
import {
  Sparkle,
  Heart,
  Smile,
  Camera,
  Eye,
  FilmReel,
  Clapper,
  Lightning,
  Star,
  Blob,
  Blob2,
  HighlightedText,
  ArrowDoodle,
} from "@/components/illustrations";

export const metadata = {
  title: "The House · Casting / NY",
};

const PRINCIPLES = [
  {
    n: "01",
    t: "Non-indexable",
    d: "Every roster page, brief, and reel sits below the indexable web. URLs expire. Crawlers receive 401.",
    bg: "bg-butter",
    icon: <Eye className="w-7 h-4" />,
  },
  {
    n: "02",
    t: "2257 vault",
    d: "Custodian of Records on staff. Every scene record on file before content is playable. Audit-ready.",
    bg: "bg-rose",
    icon: <Heart className="w-6 h-6 text-rouge" />,
  },
  {
    n: "03",
    t: "DMCA team",
    d: "Submissions counter-noticed properly. Fraudulent claimants tracked across the open web.",
    bg: "bg-mint",
    icon: <Lightning className="w-6 h-6" />,
  },
  {
    n: "04",
    t: "KMS encryption",
    d: "AES-256 at rest. Per-content keys. KMS rotation on takedown. Cryptographic shredding on offboard.",
    bg: "bg-sky",
    icon: <Sparkle className="w-6 h-6" />,
  },
  {
    n: "05",
    t: "Group channels",
    d: "Subscriber chat, member-only reels, private events. Not a Discord. A studio.",
    bg: "bg-lavender",
    icon: <Smile className="w-6 h-6" />,
  },
  {
    n: "06",
    t: "Enterprise tenancy",
    d: "Studios and agencies operate private libraries on the same plane with BYOK isolation.",
    bg: "bg-peach",
    icon: <FilmReel className="w-6 h-6" />,
  },
];

const TEAM = [
  {
    name: "Margaux Hadley",
    role: "Founding Partner · Operations",
    bg: "Formerly IMG. Twelve years booking the city.",
    avatar: "MH",
    color: "bg-butter",
  },
  {
    name: "Idris Mahmoud",
    role: "Founding Partner · Production",
    bg: "Editorial film director. Cannes Lion '23.",
    avatar: "IM",
    color: "bg-rose",
  },
  {
    name: "Renée Vasquez, Esq.",
    role: "General Counsel",
    bg: "Adult & creator law since 2014.",
    avatar: "RV",
    color: "bg-sky",
  },
  {
    name: "Cassius Wren",
    role: "Custodian of Records",
    bg: "2257 / DMCA / records integrity.",
    avatar: "CW",
    color: "bg-mint",
  },
];

export default function AgencyPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -right-32 w-[40rem] h-[40rem] text-butter/60 -z-10" />
        <Blob2 className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] text-lavender/50 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Star className="w-3.5 h-3.5" />
                The House · Est. 2026
              </span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                A casting house, <br />
                <span className="italic font-light">not</span> an{" "}
                <HighlightedText color="rose">agency</HighlightedText>.
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                The workspace where talent and clients meet under terms the
                talent sets. We do not own contracts. We do not own rights. We
                do not own faces.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-[2.5rem] bg-butter border-2 border-ink p-10 md:p-12 shadow-sticker -rotate-1 hover:rotate-0 transition-transform duration-500 ease-bounce2">
            <span className="pill-ink mb-4 inline-flex">
              <Heart className="w-3 h-3 text-rouge" /> For talent
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-editorial leading-tight mb-5">
              Represented, never owned.
            </h2>
            <ul className="space-y-3 text-[15px] text-ink/80 mb-6">
              <li className="flex gap-3">
                <span className="text-rouge">→</span> You set the rate. We
                don't negotiate against you.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Standard 88 / 12 split on
                platform-routed work.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Same-week payouts. USDC,
                ACH, or wire.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> One-tap consent
                revocation. Content gone in &lt;1h.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Forensic watermark proves
                any leak. We chase it.
              </li>
            </ul>
            <Link href="/apply" className="btn-primary">
              <Sparkle className="w-3.5 h-3.5 text-butter" />
              Apply to the roster
            </Link>
          </div>

          <div className="rounded-[2.5rem] bg-sky border-2 border-ink p-10 md:p-12 shadow-sticker rotate-1 hover:rotate-0 transition-transform duration-500 ease-bounce2">
            <span className="pill-ink mb-4 inline-flex">
              <Camera className="w-3 h-3 text-butter" /> For clients
            </span>
            <h2 className="font-display text-4xl md:text-5xl tracking-editorial leading-tight mb-5">
              A short list, opened.
            </h2>
            <ul className="space-y-3 text-[15px] text-ink/80 mb-6">
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Public briefs visible
                after Tier 2 verification.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Concierge-routed private
                commissions.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> Direct talent contact
                with NDA enforcement.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> View-once playback for
                sensitive deliverables.
              </li>
              <li className="flex gap-3">
                <span className="text-rouge">→</span> SOC 2-scoped audit trail
                per booking.
              </li>
            </ul>
            <Link href="/clients" className="btn-ghost">
              Become a client
              <ArrowDoodle className="w-6 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-4 space-y-3">
              <div className="eyebrow flex items-center gap-2">
                <Lightning className="w-4 h-4" />
                The operation
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-editorial">
                Built for the loud internet, run as a quiet house.
              </h2>
            </div>
            <p className="md:col-span-8 text-[15px] text-ink/70 leading-relaxed md:pl-8">
              The whole stack — wallet, ledger, payout router, 2257 vault,
              DMCA system, hosting layer — is one integrated platform. No
              vendor seams, no orphaned states, no "the content is down but
              earnings still flow" bugs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((c, i) => (
              <div
                key={c.t}
                className={`${c.bg} ${
                  i % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                } rounded-[1.75rem] border-2 border-ink p-7 transition-transform duration-300`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-bone border-2 border-ink flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-ink/40">
                    {c.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl tracking-editorial leading-tight mb-2">
                  {c.t}
                </h3>
                <p className="text-[14px] text-ink/80 leading-snug">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-4 space-y-3">
              <div className="eyebrow flex items-center gap-2">
                <Smile className="w-4 h-4" />
                The desk
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-editorial">
                People at the door.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((p, i) => (
              <div
                key={p.name}
                className="rounded-[1.75rem] bg-bone border-2 border-ink/10 hover:border-ink p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${p.color} border-2 border-ink flex items-center justify-center font-display text-2xl mb-5 shadow-sticker ${
                    i % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]"
                  }`}
                >
                  {p.avatar}
                </div>
                <div className="font-display text-2xl tracking-editorial leading-tight">
                  {p.name}
                </div>
                <div className="text-[11px] uppercase tracking-wide3 font-mono text-ink/50 mt-1.5">
                  {p.role}
                </div>
                <p className="text-[14px] text-ink/70 mt-3">{p.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { creators, findCreator } from "@/lib/data";
import {
  Sparkle,
  Heart,
  Star,
  Stamp,
  Camera,
  Eye,
  HighlightedText,
  ArrowDoodle,
  Blob,
  Squiggle,
} from "@/components/illustrations";

interface Props {
  params: { handle: string };
}

export function generateStaticParams() {
  return creators.map((c) => ({ handle: c.handle }));
}

export function generateMetadata({ params }: Props) {
  const creator = findCreator(params.handle);
  if (!creator) return { title: "Talent · Casting / NY" };
  return {
    title: `${creator.displayName} · Casting / NY`,
    description: creator.tagline,
  };
}

const STAT_BG = ["bg-butter", "bg-rose", "bg-sky", "bg-mint", "bg-lavender"];

export default function TalentProfilePage({ params }: Props) {
  const creator = findCreator(params.handle);
  if (!creator) notFound();

  const others = creators.filter((c) => c.id !== creator.id).slice(0, 4);
  const stats = [
    { l: "Bookings", v: String(creator.bookings) },
    { l: "Reels", v: String(creator.reels) },
    { l: "Followers", v: creator.followers },
    {
      l: "Rating",
      v: creator.rating ? creator.rating.toFixed(2) : "—",
    },
    {
      l: "Day rate",
      v: creator.rateCardCents
        ? `$${(creator.rateCardCents / 100).toLocaleString()}`
        : "On request",
    },
  ];

  return (
    <article>
      <section className="relative pt-8 pb-12 md:pb-20 overflow-hidden">
        <Blob className="absolute -top-20 -right-32 w-[36rem] h-[36rem] text-sky/60 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <Link
            href="/talent"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-ink/60 hover:text-ink mb-6 group"
          >
            <span aria-hidden className="group-hover:-translate-x-0.5 transition-transform">
              ←
            </span>
            Back to roster
          </Link>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill-sun">
                  <Sparkle className="w-3 h-3" /> Tier {creator.tier}
                </span>
                <span className="pill-mint">
                  <Camera className="w-3 h-3" /> {creator.disciplines[0]}
                </span>
                <span className="pill-outline">
                  {creator.borough ?? creator.city}
                </span>
                <span className="pill-outline font-mono">
                  File №{creator.id.slice(-4)}
                </span>
              </div>
              <h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.86] tracking-editorial">
                {creator.displayName.split(" ")[0]}
                <br />
                <HighlightedText color="butter">
                  <span className="italic font-light">
                    {creator.displayName.split(" ").slice(1).join(" ")}
                  </span>
                </HighlightedText>
                <span className="text-rouge">.</span>
              </h1>
              <p className="text-ink/70 text-xl max-w-xl">{creator.tagline}</p>
            </div>

            <div className="md:col-span-5 relative">
              <Stamp
                text={`TIER ${creator.tier}`}
                className="absolute -top-6 -right-4 w-24 h-24 text-rouge animate-spin-slow z-10"
              />
              <div className="relative aspect-portrait overflow-hidden rounded-[3rem] border-4 border-ink bg-ink/5 shadow-cardlift rotate-2 hover:rotate-0 transition-transform duration-700 ease-bounce2">
                <Image
                  src={creator.coverUrl}
                  alt={`${creator.displayName} cover`}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="pill-ink">@{creator.handle}</span>
                  {creator.unionMemberships?.[0] && (
                    <span className="pill-rose">
                      {creator.unionMemberships[0]}
                    </span>
                  )}
                </div>
              </div>
              {creator.rating && creator.rating >= 4.95 && (
                <div className="absolute -bottom-5 -left-5 bg-sun border-2 border-ink rounded-2xl px-4 py-3 rotate-[-8deg] shadow-sticker">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-ink" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wide3 font-mono">
                        House favorite
                      </div>
                      <div className="font-display text-xl leading-none">
                        {creator.rating.toFixed(2)} avg
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`${STAT_BG[i]} rounded-[1.75rem] border-2 border-ink p-5 hover:-rotate-1 transition-transform`}
            >
              <div className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
                {s.l}
              </div>
              <div className="font-display text-3xl md:text-4xl tracking-editorial leading-none mt-2">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-8">
          <aside className="md:col-span-4 space-y-6">
            <Card label="Statement" bg="bg-bone">
              <p className="text-[15px] leading-relaxed text-ink/80">
                {creator.bio}
              </p>
            </Card>
            <Card label="Disciplines" bg="bg-cream">
              <ul className="flex flex-wrap gap-2">
                {creator.disciplines.map((d) => (
                  <li
                    key={d}
                    className="px-3 py-1.5 text-[12px] font-medium rounded-full bg-bone border-2 border-ink/15"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Card>
            <Card label="Languages" bg="bg-bone">
              <p className="text-[14px] flex flex-wrap gap-2">
                {creator.languages.map((l) => (
                  <span key={l} className="pill-sky">
                    {l}
                  </span>
                ))}
              </p>
            </Card>
            {creator.representedBy && (
              <Card label="Representation" bg="bg-bone">
                <p className="text-[14px]">{creator.representedBy}</p>
              </Card>
            )}
          </aside>

          <div className="md:col-span-8 space-y-8">
            {creator.measurements && (
              <Card label="Specifications" bg="bg-bone">
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6">
                  {Object.entries(creator.measurements).map(([k, v], i) => (
                    <div
                      key={k}
                      className={`rounded-2xl p-3 ${
                        ["bg-butter", "bg-rose", "bg-mint", "bg-sky", "bg-lavender", "bg-peach", "bg-cream"][i % 7]
                      }`}
                    >
                      <dt className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60 mb-1">
                        {k}
                      </dt>
                      <dd className="font-display text-2xl tracking-editorial leading-none">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>
            )}

            <Card label="Reels & stills" bg="bg-bone">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  creator.coverUrl,
                  creator.portraitUrl,
                  creator.coverUrl,
                  creator.portraitUrl,
                  creator.coverUrl,
                  creator.portraitUrl,
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-portrait overflow-hidden rounded-2xl border-2 border-ink/10 bg-ink/5 group"
                  >
                    <Image
                      src={src}
                      alt={`${creator.displayName} portfolio ${i + 1}`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2 left-2 pill-ink">
                      {String(i + 1).padStart(2, "0")} / 06
                    </div>
                    <div className="absolute bottom-2 right-2 pill-sun">
                      <Eye className="w-3 h-2" /> auth
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-ink/50">
                <Sparkle className="w-3 h-3 text-rouge" />
                Forensic watermark active · all playback session-bound
              </div>
            </Card>

            <div className="relative bg-ink text-bone rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
              <Blob className="absolute -top-16 -right-16 w-72 h-72 text-rouge/30" />
              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="pill-sun mb-3">
                    <Sparkle className="w-3 h-3" /> Booking
                  </div>
                  <div className="font-display text-3xl md:text-5xl leading-tight tracking-editorial">
                    Available <br />
                    May — August.
                  </div>
                  <div className="text-[14px] text-bone/70 mt-3">
                    Submit a brief or contact the desk for private commissions.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    href="/casting-calls"
                    className="inline-flex items-center gap-2 bg-sun text-ink px-6 py-3 text-[13px] font-semibold rounded-full hover:bg-butter hover:-translate-y-0.5 transition-all"
                  >
                    <Sparkle className="w-3.5 h-3.5" />
                    Cast {creator.displayName.split(" ")[0]}
                  </Link>
                  <Link
                    href="/concierge"
                    className="inline-flex items-center gap-2 border-2 border-bone/40 text-bone px-6 py-[10px] text-[13px] font-medium rounded-full hover:bg-bone hover:text-ink transition-all"
                  >
                    Concierge desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t-2 border-dashed border-ink/15">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3">Adjacent roster</div>
              <h2 className="font-display text-4xl md:text-6xl tracking-editorial">
                Also in the file.
              </h2>
            </div>
            <Link href="/talent" className="btn-ghost">
              Full roster
              <ArrowDoodle className="w-6 h-3" />
            </Link>
          </div>
          <Squiggle className="w-full h-3 text-ink/20 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {others.map((c, i) => (
              <Link
                key={c.id}
                href={`/talent/${c.handle}`}
                className="block group hover:-translate-y-1 transition-transform"
              >
                <div className="relative aspect-portrait overflow-hidden rounded-[1.75rem] border-2 border-ink bg-ink/5">
                  <Image
                    src={c.portraitUrl}
                    alt={c.displayName}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-3 font-display text-xl tracking-editorial">
                  {c.displayName}
                </div>
                <div className="text-[12px] text-ink/60">{c.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function Card({
  label,
  children,
  bg,
}: {
  label: string;
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className={`${bg} rounded-[1.75rem] border-2 border-ink/10 p-6 space-y-3`}
    >
      <div className="flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-rouge" />
        <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

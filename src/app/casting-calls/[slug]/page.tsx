import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { castingCalls, findCastingCall } from "@/lib/data";
import {
  Sparkle,
  Clapper,
  Camera,
  Heart,
  Eye,
  HighlightedText,
  Stamp,
  ArrowDoodle,
} from "@/components/illustrations";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return castingCalls.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const call = findCastingCall(params.slug);
  if (!call) return { title: "Casting Call · Casting / NY" };
  return { title: `${call.title} · Casting / NY` };
}

const STAT_BG = ["bg-butter", "bg-rose", "bg-mint", "bg-sky", "bg-lavender", "bg-peach"];

export default function CastingCallPage({ params }: Props) {
  const call = findCastingCall(params.slug);
  if (!call) notFound();

  const stats = [
    { l: "Status", v: call.status, accent: call.status === "Closing Soon" },
    { l: "Closes", v: call.closesOn },
    { l: "Spots", v: String(call.spots) },
    { l: "Submissions", v: String(call.submissionsCount) },
    { l: "Day rate", v: call.ratePerDayLabel },
    { l: "Union", v: call.union },
  ];

  return (
    <article>
      <section className="pt-8 pb-10">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <Link
            href="/casting-calls"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-ink/60 hover:text-ink mb-6 group"
          >
            <span aria-hidden className="group-hover:-translate-x-0.5 transition-transform">
              ←
            </span>
            All briefs
          </Link>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill-sun">
                  <Clapper className="w-3 h-3" /> {call.productionType}
                </span>
                <span className="pill-mint">{call.union}</span>
                <span className="pill-outline font-mono">{call.id}</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-editorial">
                {call.title}
              </h1>
              <div className="text-ink/70 text-lg">
                {call.productionHouse}
              </div>
            </div>

            <div className="md:col-span-5 relative">
              {call.status === "Closing Soon" && (
                <Stamp
                  text="CLOSING"
                  className="absolute -top-6 -left-6 w-24 h-24 text-rouge animate-spin-slow z-10"
                />
              )}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border-4 border-ink bg-ink/5 shadow-cardlift -rotate-2 hover:rotate-0 transition-transform duration-700 ease-bounce2">
                <Image
                  src={call.posterUrl}
                  alt={call.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="pill-ink">
                    <Camera className="w-3 h-3 text-butter" /> Brief
                  </span>
                  <span className="pill-rose">{call.shootWindow}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`${STAT_BG[i]} rounded-[1.5rem] border-2 border-ink p-4 ${
                i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
              } transition-transform`}
            >
              <div className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
                {s.l}
              </div>
              <div
                className={`font-display text-2xl md:text-3xl tracking-editorial leading-tight mt-1 ${
                  s.accent ? "text-rouge" : ""
                }`}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-8">
          <aside className="md:col-span-4 space-y-4">
            <SideCard label="Location" icon={<Camera className="w-5 h-5" />}>
              {call.location}
            </SideCard>
            <SideCard label="Shoot window" icon={<Sparkle className="w-4 h-4" />}>
              {call.shootWindow}
            </SideCard>
            <SideCard label="Usage" icon={<Eye className="w-5 h-3" />}>
              {call.usage}
            </SideCard>
            <SideCard label="Exclusivity" icon={<Heart className="w-4 h-4 text-rouge" />}>
              {call.exclusivity}
            </SideCard>
            {(call.director || call.photographer || call.stylist) && (
              <SideCard label="Production team" icon={<Clapper className="w-5 h-5" />}>
                <ul className="space-y-1 text-[14px] text-ink/80">
                  {call.director && <li>Director · {call.director}</li>}
                  {call.photographer && <li>Photographer · {call.photographer}</li>}
                  {call.stylist && <li>Stylist · {call.stylist}</li>}
                </ul>
              </SideCard>
            )}
          </aside>

          <div className="md:col-span-8 space-y-8">
            <div className="rounded-[2rem] bg-cream border-2 border-ink/10 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rouge" />
                <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
                  Brief
                </span>
              </div>
              <p className="text-xl md:text-2xl font-display leading-[1.3] tracking-editorial text-ink/90 max-w-3xl">
                {call.brief}
              </p>
            </div>

            <div className="rounded-[2rem] bg-bone border-2 border-ink/10 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rouge" />
                <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
                  Requirements
                </span>
              </div>
              <ol className="space-y-3">
                {call.requirements.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-cream"
                  >
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full ${
                        ["bg-butter", "bg-rose", "bg-mint", "bg-sky", "bg-lavender"][
                          i % 5
                        ]
                      } border-2 border-ink flex items-center justify-center text-[11px] font-bold`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[15px] pt-1">{r}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative bg-ink text-bone rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="pill-sun mb-3">
                    <Sparkle className="w-3 h-3" /> Submission
                  </div>
                  <div className="font-display text-3xl md:text-4xl leading-tight tracking-editorial">
                    Submit through <br /> your roster file.
                  </div>
                  <div className="text-[14px] text-bone/70 mt-3">
                    Self-submissions accepted from Tier 2 and above. Agency
                    submissions accepted from agencies of record.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    href="/sign-in"
                    className="inline-flex items-center gap-2 bg-sun text-ink px-6 py-3 text-[13px] font-semibold rounded-full hover:bg-butter hover:-translate-y-0.5 transition-all"
                  >
                    <Sparkle className="w-3.5 h-3.5" />
                    Submit
                  </Link>
                  <Link
                    href="/agency"
                    className="inline-flex items-center gap-2 border-2 border-bone/40 text-bone px-6 py-[10px] text-[13px] font-medium rounded-full hover:bg-bone hover:text-ink transition-all"
                  >
                    Submit via agency
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-[12px] font-mono text-ink/50 grid sm:grid-cols-2 gap-3 px-2">
              <div>Brief reference: {call.id}</div>
              <div className="sm:text-right">
                Closes {call.closesOn} · auto-locked at 18:00 ET
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function SideCard({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.5rem] bg-bone border-2 border-ink/10 p-5">
      <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
        <span className="w-7 h-7 rounded-xl bg-cream border-2 border-ink/10 flex items-center justify-center">
          {icon}
        </span>
        {label}
      </div>
      <div className="text-[15px] text-ink/90">{children}</div>
    </div>
  );
}

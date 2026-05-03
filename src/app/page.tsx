import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { TalentCard } from "@/components/talent-card";
import { CastingRow } from "@/components/casting-row";
import { Ticker } from "@/components/ticker";
import {
  Sparkle,
  Heart,
  Camera,
  Clapper,
  Eye,
  Lightning,
  Blob,
  Blob2,
  ArrowDoodle,
  Confetti,
  Stamp,
  HighlightedText,
  RainbowArch,
  MegaphoneFun,
  SneakersRunway,
  MicStage,
  StarsCluster,
  DiscoOrb,
} from "@/components/illustrations";
import { castingCalls, creators, press } from "@/lib/data";

export default function HomePage() {
  const featuredTalent = creators.slice(0, 4);
  const featuredCalls = castingCalls.slice(0, 5);

  return (
    <>
      <Hero />
      <Ticker />
      <ManifestoCards />
      <Numbers />
      <FeaturedTalent talent={featuredTalent} />
      <CallsSection calls={featuredCalls} />
      <ConciergeBlock />
      <PressStrip />
      <CtaBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Blob
        className="absolute -top-32 -left-32 w-[42rem] h-[42rem] text-butter/70 -z-10 animate-bob"
      />
      <Blob2 className="absolute -bottom-32 -right-24 w-[38rem] h-[38rem] text-rose/50 -z-10" />

      <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-16 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-7 fade-up">
            <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rouge opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rouge" />
              </span>
              Spring intake · 47 spots open
            </span>

            <h1 className="font-display text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.88] tracking-editorial">
              The casting <br />
              house that{" "}
              <HighlightedText color="butter">
                <span className="italic font-light">actually</span>
              </HighlightedText>{" "}
              <br />
              roots for you
              <span className="text-rouge">.</span>
            </h1>

            <p className="text-lg md:text-xl text-ink/70 max-w-xl leading-snug">
              A New York-bred home for performers, models, directors, and
              creators. Friendly desk. Private playback. Same-week payouts.
              Zero crawler tourism.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-3">
              <RainbowArch className="w-[7.25rem] h-[3.25rem] md:w-36 md:h-16 shrink-0 opacity-95 drop-shadow-sm" />
              <MegaphoneFun className="w-[4.25rem] h-[3.75rem] shrink-0 drop-shadow-sm" />
              <StarsCluster className="w-[6.5rem] h-10 md:w-28 md:h-11 shrink-0 hidden sm:block" />
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/apply" className="btn-primary">
                <Sparkle className="w-3.5 h-3.5 text-butter" />
                Join the roster
              </Link>
              <Link href="/clients" className="btn-ghost">
                Brief a casting
                <ArrowDoodle className="w-6 h-3 text-ink" />
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-[13px] text-ink/60">
              <div className="flex -space-x-2">
                {creators.slice(0, 4).map((c) => (
                  <div
                    key={c.id}
                    className="w-9 h-9 rounded-full border-2 border-bone overflow-hidden bg-ink/10"
                  >
                    <img
                      src={c.portraitUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>
                <span className="font-semibold text-ink">1,284 creators</span>{" "}
                already on file
              </span>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <Stamp
              text="EST. 2026"
              className="absolute -top-8 -left-8 w-28 h-28 text-rouge animate-spin-slow z-10"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] md:rounded-[4rem] lg:rounded-[4.5rem] border-4 border-ink bg-ink/5 shadow-cardlift rotate-2 hover:rotate-0 transition-transform duration-700 ease-bounce2">
              <Image
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1400&q=80"
                alt="Cover editorial"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="pill-sun shadow-sticker">
                  <Sparkle className="w-3 h-3" /> Cover Story
                </span>
                <span className="pill-ink">04 / 26</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent">
                <div className="font-display text-2xl text-bone leading-tight">
                  Vera Osei on the rouge of restraint.
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-mint border-2 border-ink rounded-[1.35rem] md:rounded-[1.75rem] px-4 py-3 rotate-[-6deg] shadow-sticker">
              <div className="text-[10px] uppercase tracking-wide3 font-mono">
                Avg. payout
              </div>
              <div className="font-display text-2xl leading-none">
                $4.2k <span className="text-[12px] font-normal">/ week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoCards() {
  const cards = [
    {
      title: "Private by default",
      blurb:
        "Every link expires. Every viewer is bound. Every leak is attributable. Roster pages and reels live below the indexable web.",
      bg: "bg-butter",
      icon: <Eye className="w-12 h-6 text-ink" />,
      tilt: "-rotate-2",
    },
    {
      title: "Represented, never owned",
      blurb:
        "You set the rate. You revoke consent. We handle the boring legal scaffolding so you don't have to read 40 pages of fine print.",
      bg: "bg-rose",
      icon: <Heart className="w-7 h-7 text-rouge" />,
      tilt: "rotate-1",
    },
    {
      title: "A New York house",
      blurb:
        "Operated out of a converted Chelsea showroom. Production calendars built around five blocks, not five continents.",
      bg: "bg-sky",
      icon: <SneakersRunway className="w-[5.5rem] h-9 text-ink" />,
      tilt: "-rotate-1",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-3 eyebrow">A statement</div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-editorial">
            We do <span className="italic font-light">not</span> believe a
            creator's career should be a permanent record on someone else's
            index.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`${c.bg} ${c.tilt} hover:rotate-0 transition-all duration-500 ease-bounce2 rounded-[2.25rem] md:rounded-[3rem] border-2 border-ink p-8 md:p-9 shadow-sticker hover:shadow-cardlift hover:-translate-y-1`}
            >
              <div className="w-[4.25rem] h-[4.25rem] md:w-[4.5rem] md:h-[4.5rem] rounded-[1.125rem] md:rounded-[1.35rem] bg-bone border-2 border-ink flex items-center justify-center mb-6 shadow-sticker overflow-hidden px-1">
                {c.icon}
              </div>
              <h3 className="font-display text-3xl tracking-editorial leading-tight mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-ink/80 leading-relaxed">
                {c.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { v: "1,284", l: "Vetted creators", bg: "bg-butter", icon: Sparkle },
    { v: "62", l: "Casting calls live", bg: "bg-mint", icon: Camera },
    { v: "3.4M", l: "Private sessions", bg: "bg-sky", icon: Eye },
    { v: "0", l: "Indexed URLs", bg: "bg-rose", icon: Heart },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const tilt =
              i % 2 === 0
                ? "hover:-rotate-2"
                : "hover:rotate-2";
            return (
              <div
                key={s.l}
                className={`${s.bg} ${tilt} transition-transform duration-500 ease-bounce2 rounded-[2.25rem] md:rounded-[3rem] border-2 border-ink p-6 md:p-8 shadow-sticker`}
              >
                <Icon className="w-8 h-8 text-ink mb-4" />
                <div className="font-display text-5xl md:text-7xl leading-none tracking-editorial">
                  {s.v}
                </div>
                <div className="text-[12px] uppercase tracking-wide2 font-medium mt-3">
                  {s.l}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedTalent({ talent }: { talent: typeof creators }) {
  return (
    <Section
      eyebrow="The Roster · Spring 26"
      title={
        <>
          Some <HighlightedText color="rose">brilliant</HighlightedText> faces.
        </>
      }
      description={
        <>
          A working selection from the current roster. Detailed measurements,
          reels, and rate cards live inside authenticated views.
        </>
      }
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12">
        <MicStage className="w-14 h-[4.5rem] md:w-16 md:h-[5rem] text-ink animate-bob drop-shadow-sm" />
        <StarsCluster className="w-32 h-10 md:w-40 md:h-11 opacity-90" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {talent.map((c, i) => (
          <TalentCard key={c.id} creator={c} index={i} />
        ))}
      </div>
      <div className="mt-12 flex justify-end">
        <Link
          href="/talent"
          className="btn-ghost"
        >
          View full roster
          <ArrowDoodle className="w-6 h-3" />
        </Link>
      </div>
    </Section>
  );
}

function CallsSection({ calls }: { calls: typeof castingCalls }) {
  return (
    <section className="py-20 md:py-28 bg-cream rounded-[2.5rem] md:rounded-[3.5rem] lg:rounded-[4rem] mx-3 md:mx-6 lg:mx-10">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-3 eyebrow flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center justify-center rounded-[1rem] bg-sun border-2 border-ink p-1.5 shadow-sticker">
              <Clapper className="w-5 h-5" />
            </span>
            Live briefs
            <DiscoOrb className="w-10 h-11 shrink-0 hidden sm:block -rotate-6" />
          </div>
          <div className="md:col-span-6">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-editorial">
              Briefs <HighlightedText color="sky">in studio</HighlightedText>.
            </h2>
          </div>
          <div className="md:col-span-3 text-[15px] text-ink/70 leading-relaxed">
            Open submissions for the next four weeks. Concierge-routed private
            commissions are not listed publicly.
          </div>
        </div>

        <div className="space-y-3">
          {calls.map((c) => (
            <CastingRow key={c.id} call={c} />
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-[13px] text-ink/60">
            Showing {calls.length} of 62 open · 9 private commissions hidden
          </div>
          <Link href="/casting-calls" className="btn-primary">
            All open calls
            <ArrowDoodle className="w-6 h-3 text-butter" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ConciergeBlock() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Blob
        className="absolute -top-20 -right-32 w-[36rem] h-[36rem] text-lavender/60 -z-10"
      />
      <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 bg-ink text-bone rounded-full px-4 py-1.5 text-[12px] font-medium">
            <Eye className="w-4 h-3 text-butter" /> Concierge desk
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-editorial">
            For commissions <br />
            that never appear{" "}
            <span className="italic font-light">on a list</span>.
          </h2>
          <p className="text-ink/70 max-w-xl text-lg">
            Single-recipient deliveries. Closed-set productions. View-once
            playback bound to a named viewer. The desk takes briefs from a
            short list of clients only.
          </p>
          <div className="flex gap-3 pt-2">
            <Link href="/concierge" className="btn-primary">
              Brief the desk
            </Link>
            <Link href="/concierge" className="btn-ghost">
              How it works
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative bg-bone border-2 border-ink rounded-[2.75rem] md:rounded-[3.25rem] p-8 md:p-10 shadow-cardlift -rotate-2 hover:rotate-0 transition-transform duration-500 ease-bounce2">
            <Confetti className="absolute -top-4 -left-4 w-32 h-12" />
            <div className="flex items-center justify-between mb-5">
              <span className="pill-lav">Sample engagement</span>
              <span className="font-mono text-[11px] text-ink/40">
                CC-2026-0408
              </span>
            </div>
            <dl className="text-[14px] grid grid-cols-2 gap-y-3.5 gap-x-6">
              <dt className="text-ink/50">Setting</dt>
              <dd className="font-medium">SoHo, closed set</dd>
              <dt className="text-ink/50">Crew size</dt>
              <dd className="font-medium">6 · NDA bound</dd>
              <dt className="text-ink/50">Delivery</dt>
              <dd className="font-medium">View-once</dd>
              <dt className="text-ink/50">Watermark</dt>
              <dd className="font-medium">Forensic A/B</dd>
              <dt className="text-ink/50">Day rate</dt>
              <dd className="font-display text-2xl leading-none">$12,000</dd>
            </dl>
            <div className="mt-6 pt-5 border-t-2 border-dashed border-ink/15 text-[12px] text-ink/50">
              All commissions covered under platform 2257 vault &amp; DMCA
              system.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressStrip() {
  return (
    <Section
      eyebrow="In print"
      title={
        <>
          What they wrote{" "}
          <HighlightedText color="mint">about us</HighlightedText>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {press.map((p, i) => {
          const colors = ["bg-butter", "bg-rose", "bg-sky", "bg-mint"];
          const tilt =
            i % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";
          return (
            <a
              key={p.headline}
              href={p.url}
              className={`group block rounded-[2rem] md:rounded-[2.35rem] border-2 border-ink ${colors[i]} p-6 md:p-7 shadow-sticker hover:shadow-cardlift hover:-translate-y-1 ${tilt} transition-all duration-300`}
            >
              <div className="text-[10px] uppercase tracking-wide3 text-ink/60 font-mono mb-3">
                {p.outlet}
              </div>
              <div className="font-display text-2xl leading-tight tracking-editorial">
                {p.headline}
              </div>
              <div className="mt-5 pt-4 border-t-2 border-dashed border-ink/20 flex items-center justify-between text-[11px] font-mono text-ink/50">
                <span>{p.date}</span>
                <span aria-hidden>↗</span>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function CtaBlock() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="relative bg-ink text-bone rounded-[3.25rem] md:rounded-[4rem] lg:rounded-[4.5rem] p-10 md:p-16 overflow-hidden">
          <Blob
            className="absolute -top-20 -right-20 w-96 h-96 text-rouge/40"
          />
          <Blob2
            className="absolute -bottom-32 -left-16 w-96 h-96 text-butter/20"
          />
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-sun text-ink rounded-full px-4 py-1.5 text-[12px] font-semibold">
                <Lightning className="w-3 h-3" />
                Apply in under 8 minutes
              </div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-editorial">
                Bring your face. <br />
                We'll bring{" "}
                <span className="text-sun italic font-light">the work</span>.
              </h2>
              <p className="text-bone/70 max-w-xl text-lg">
                Roster applications are reviewed weekly. Acceptance rate sits
                under 4%. Applicants who aren't invited get their files
                cryptographically shredded within 30 days. No drama, no list.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-sun text-ink px-7 py-4 text-[14px] font-bold rounded-[999px] hover:bg-butter hover:-translate-y-1 transition-all duration-300 shadow-sticker"
              >
                <Sparkle className="w-4 h-4" />
                Start your application
              </Link>
              <Link
                href="/sign-in"
                className="text-bone/70 hover:text-bone text-[13px] underline underline-offset-4"
              >
                Already on the roster?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

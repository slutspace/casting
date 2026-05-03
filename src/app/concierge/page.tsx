import Link from "next/link";
import {
  Sparkle,
  Eye,
  Heart,
  Camera,
  Clapper,
  Stamp,
  Confetti,
  Blob,
  Blob2,
  HighlightedText,
} from "@/components/illustrations";

export const metadata = {
  title: "Concierge Desk · Casting / NY",
};

const STEPS = [
  {
    n: "01",
    t: "Intake",
    d: "A short call with the desk. We learn the work, the recipient, and the constraints. No NDA at this stage.",
    bg: "bg-butter",
    icon: <Camera className="w-7 h-5" />,
  },
  {
    n: "02",
    t: "Brief",
    d: "Talent shortlist (3–6) presented privately. Rates negotiated. NDA and consent terms drafted by counsel.",
    bg: "bg-rose",
    icon: <Heart className="w-6 h-6 text-rouge" />,
  },
  {
    n: "03",
    t: "Production",
    d: "Closed set. Six-person crew typical. No on-set photography. All footage encrypted at capture.",
    bg: "bg-mint",
    icon: <Clapper className="w-7 h-7" />,
  },
  {
    n: "04",
    t: "Delivery",
    d: "View-once playback bound to the named recipient. Forensic A/B watermark. Session expires on first complete view.",
    bg: "bg-sky",
    icon: <Eye className="w-7 h-4" />,
  },
];

export default function ConciergePage() {
  return (
    <>
      <header className="relative overflow-hidden bg-ink text-bone rounded-b-[3rem] mb-16">
        <Blob className="absolute -top-32 -right-20 w-[40rem] h-[40rem] text-rouge/30" />
        <Blob2 className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] text-butter/15" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone text-ink rounded-full px-4 py-1.5 text-[12px] font-semibold">
                <Eye className="w-4 h-3" />
                The Concierge Desk
              </span>
            </div>
            <div className="md:col-span-9 space-y-8">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                For commissions <br />
                that never appear{" "}
                <span className="italic font-light text-sun">on a list</span>
                <span className="text-rouge">.</span>
              </h1>
              <p className="text-bone/70 max-w-2xl text-lg">
                Single-recipient deliveries. Closed-set productions. View-once
                playback bound to a named viewer. The desk takes briefs from a
                short list of clients only.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
            <div className="md:col-span-4 space-y-3">
              <div className="eyebrow flex items-center gap-2">
                <Clapper className="w-4 h-4" />
                How it works
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-editorial">
                Four meetings.{" "}
                <HighlightedText color="butter">
                  One delivery
                </HighlightedText>
                .
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`${s.bg} rounded-[1.75rem] border-2 border-ink p-7 ${
                  i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
                } transition-transform duration-500 ease-bounce2 shadow-sticker`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-bone border-2 border-ink flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-display text-3xl tracking-editorial">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl tracking-editorial leading-tight mb-2">
                  {s.t}
                </h3>
                <p className="text-[14px] text-ink/80 leading-snug">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="relative bg-bone border-2 border-ink rounded-[3rem] p-8 md:p-12 shadow-cardlift">
            <Confetti className="absolute -top-4 -right-4 w-40 h-12" />
            <Stamp
              text="DISCREET"
              className="absolute -top-8 -left-8 w-24 h-24 text-rouge animate-spin-slow z-10"
            />
            <span className="pill-sun mb-4 inline-flex">
              <Sparkle className="w-3 h-3" />
              Brief the desk
            </span>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-editorial mb-2">
              A short note <br />
              is enough.
            </h2>
            <p className="text-ink/60 mb-10">
              Replies in 24 hours, M–F. Never on the open web. Never indexed.
            </p>

            <form className="space-y-5">
              <Field label="Your name" placeholder="" />
              <Field label="Organization (optional)" placeholder="" />
              <Field label="Email" placeholder="" />
              <Field
                label="The shape of the work"
                multiline
                placeholder="One paragraph. Voice over polish."
              />
              <Field
                label="Recipient profile"
                placeholder="Single collector · Studio · Brand · Self"
              />
              <Field
                label="Budget range"
                placeholder="$10,000 — $50,000+ / day"
              />
              <button type="submit" className="btn-primary w-full justify-center mt-4 py-3.5">
                <Sparkle className="w-3.5 h-3.5 text-butter" />
                Send to the desk
              </button>
            </form>
          </div>

          <div className="mt-10 text-center text-[13px] text-ink/60">
            Not for a private commission?{" "}
            <Link href="/casting-calls" className="font-semibold underline underline-offset-4 hover:text-rouge">
              See open briefs
            </Link>{" "}
            or{" "}
            <Link href="/clients" className="font-semibold underline underline-offset-4 hover:text-rouge">
              become a client
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  multiline,
}: {
  label: string;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[11px] uppercase tracking-wide2 font-medium text-ink/70">
        {label}
      </span>
      {multiline ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full bg-cream border-2 border-ink/15 focus:border-ink rounded-2xl px-4 py-3 text-[15px] outline-none placeholder:text-ink/30 resize-none transition-colors"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-cream border-2 border-ink/15 focus:border-ink rounded-2xl px-4 py-3 text-[15px] outline-none placeholder:text-ink/30 transition-colors"
        />
      )}
    </label>
  );
}

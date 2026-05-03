import Link from "next/link";
import {
  Sparkle,
  Smile,
  Heart,
  Camera,
  Stamp,
  Blob,
  Blob2,
  HighlightedText,
  ArrowDoodle,
  Confetti,
} from "@/components/illustrations";

export const metadata = {
  title: "Apply · Casting / NY",
};

export default function ApplyPage() {
  return (
    <>
      <header className="relative overflow-hidden">
        <Blob className="absolute -top-32 -right-32 w-[36rem] h-[36rem] text-rose/50 -z-10" />
        <Blob2 className="absolute -bottom-32 -left-24 w-[34rem] h-[34rem] text-mint/50 -z-10" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-16 pb-12 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 space-y-3">
              <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
                <Smile className="w-4 h-4" />
                Application 01 / 04
              </span>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-editorial">
                Apply to <br />
                the{" "}
                <HighlightedText color="butter">
                  <span className="italic font-light">roster</span>
                </HighlightedText>
                <span className="text-rouge">.</span>
              </h1>
              <p className="text-ink/70 max-w-2xl text-lg">
                We accept under 4% of applicants. Your file is private during
                review and is destroyed if you are not invited. Takes about 8
                minutes.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <form className="space-y-8">
            <Group num="01" title="Identity" bg="bg-butter" icon={<Smile className="w-6 h-6" />}>
              <Field label="Legal name" placeholder="Casey Vance Rivera" />
              <Field
                label="Stage / handle"
                placeholder="amelia.vance"
                prefix="@"
              />
              <Row>
                <Field label="Date of birth" placeholder="MM / DD / YYYY" />
                <Field label="Pronouns" placeholder="she / her" />
              </Row>
              <Field label="Borough · City" placeholder="TriBeCa, New York" />
            </Group>

            <Group
              num="02"
              title="Discipline"
              bg="bg-rose"
              icon={<Camera className="w-6 h-6" />}
            >
              <Field
                label="Primary discipline"
                placeholder="Editorial · Movement · Couture"
              />
              <Field
                label="Years working"
                placeholder="3"
                hint="Self-reported. We verify against agency records when available."
              />
              <Field
                label="Agency of record (optional)"
                placeholder="Mother / NY"
              />
              <Field
                label="Union memberships (optional)"
                placeholder="SAG-AFTRA"
              />
            </Group>

            <Group
              num="03"
              title="Statement"
              bg="bg-sky"
              icon={<Heart className="w-6 h-6 text-rouge" />}
            >
              <Field
                label="Why Casting / NY"
                multiline
                placeholder="Three to four sentences. Voice over polish."
              />
              <Field
                label="What you protect"
                multiline
                placeholder="The work you would never post on the open internet. Discretion is the point."
              />
            </Group>

            <Group
              num="04"
              title="Verification"
              bg="bg-mint"
              icon={<Sparkle className="w-6 h-6" />}
            >
              <UploadDropzone
                label="Government ID"
                detail="Front + back · destroyed after Jumio scan"
              />
              <UploadDropzone
                label="Recent portrait"
                detail="JPEG · single subject · last 90 days"
              />
              <UploadDropzone
                label="Reel (optional)"
                detail="Up to 3 minutes · MP4 / MOV · 1080p+"
              />
            </Group>

            <div className="relative rounded-[2rem] bg-cream border-2 border-ink p-6 md:p-8 shadow-sticker space-y-3 text-[14px] text-ink/70">
              <Confetti className="absolute -top-3 -right-3 w-32 h-12" />
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rouge" />
                <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60">
                  Privacy notice
                </span>
              </div>
              <p>
                By submitting, you authorize Casting / NY (Hated By Many&nbsp;LLC)
                to verify your identity through Jumio and to retain your file
                under our 2257 vault for the duration of review. Files of
                non-invited applicants are cryptographically shredded within
                30 days of decision.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <Link
                href="/"
                className="text-[12px] font-medium text-ink/60 hover:text-ink"
              >
                ← Cancel
              </Link>
              <button type="submit" className="btn-primary">
                <Sparkle className="w-3.5 h-3.5 text-butter" />
                Submit application
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Group({
  num,
  title,
  bg,
  icon,
  children,
}: {
  num: string;
  title: string;
  bg: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="rounded-[2rem] bg-bone border-2 border-ink overflow-hidden shadow-sticker">
      <legend className="sr-only">{title}</legend>
      <div className={`${bg} px-6 py-5 flex items-center gap-4 border-b-2 border-ink`}>
        <div className="w-12 h-12 rounded-2xl bg-bone border-2 border-ink flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1 flex items-baseline gap-3">
          <span className="text-[10px] uppercase tracking-wide3 font-mono">
            Step {num}
          </span>
          <span className="font-display text-3xl tracking-editorial">
            {title}
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-5">{children}</div>
    </fieldset>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
}

function Field({
  label,
  placeholder,
  multiline,
  prefix,
  hint,
}: {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  prefix?: string;
  hint?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[11px] uppercase tracking-wide2 font-medium text-ink/70">
        {label}
      </span>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-3.5 text-ink/40 font-mono text-[14px]">
            {prefix}
          </span>
        )}
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
            className={`w-full bg-cream border-2 border-ink/15 focus:border-ink rounded-2xl py-3 text-[15px] outline-none placeholder:text-ink/30 transition-colors ${
              prefix ? "pl-9 pr-4" : "px-4"
            }`}
          />
        )}
      </div>
      {hint && <span className="text-[12px] text-ink/50">{hint}</span>}
    </label>
  );
}

function UploadDropzone({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-ink/30 hover:border-ink hover:bg-cream p-5 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[13px] font-semibold mb-0.5">{label}</div>
          <div className="text-[12px] text-ink/60">{detail}</div>
        </div>
        <button
          type="button"
          className="text-[12px] font-semibold px-4 py-2 rounded-full bg-ink text-bone hover:bg-ink/85 transition-colors"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

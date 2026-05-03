import Link from "next/link";
import {
  Smile,
  Sparkle,
  Heart,
  Confetti,
  Blob,
  Blob2,
  HighlightedText,
} from "@/components/illustrations";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <Blob className="absolute -top-32 -left-32 w-[40rem] h-[40rem] text-butter/60 -z-10 animate-bob" />
      <Blob2 className="absolute -bottom-32 -right-24 w-[40rem] h-[40rem] text-rose/50 -z-10" />
      <Confetti className="absolute top-20 right-20 w-48 h-16" />

      <div className="max-w-8xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
            <Sparkle className="w-3.5 h-3.5 text-rouge" />
            404 · file closed
          </span>
          <h1 className="font-display text-7xl md:text-9xl leading-[0.9] tracking-editorial">
            Not on{" "}
            <HighlightedText color="rose">file</HighlightedText>
            <span className="text-rouge">.</span>
          </h1>
          <p className="text-ink/70 max-w-xl text-lg">
            The page you requested is not in our index. That is sometimes
            because it is private. It is sometimes because it does not exist.
            We do not distinguish.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/" className="btn-primary">
              <Heart className="w-3.5 h-3.5 text-rouge" />
              Return to the front desk
            </Link>
            <Link href="/talent" className="btn-ghost">
              The roster
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-butter border-4 border-ink flex items-center justify-center shadow-sticker animate-bob">
              <Smile className="w-32 h-32 md:w-40 md:h-40 text-ink" />
            </div>
            <div className="absolute -top-4 -right-4 bg-rose border-2 border-ink rounded-2xl px-3 py-2 rotate-12 font-display text-2xl shadow-sticker">
              404!
            </div>
            <div className="absolute -bottom-2 -left-4 bg-mint border-2 border-ink rounded-full px-4 py-1.5 -rotate-6 text-[12px] font-semibold shadow-sticker">
              try again?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Creator } from "@/lib/types";
import { Sparkle, Heart } from "@/components/illustrations";

const STICKER_COLORS = [
  "bg-sun",
  "bg-rose",
  "bg-sky",
  "bg-mint",
  "bg-lavender",
  "bg-butter",
] as const;

const SHADOW_COLORS = [
  "shadow-stickerSun",
  "shadow-stickerRose",
  "shadow-stickerSky",
  "shadow-stickerMint",
  "shadow-stickerRouge",
  "shadow-sticker",
] as const;

export function TalentCard({
  creator,
  index,
}: {
  creator: Creator;
  index: number;
}) {
  const sticker = STICKER_COLORS[index % STICKER_COLORS.length];
  const shadow = SHADOW_COLORS[index % SHADOW_COLORS.length];
  const tilt =
    index % 3 === 0
      ? "hover:-rotate-1"
      : index % 3 === 1
        ? "hover:rotate-1"
        : "hover:-rotate-2";

  return (
    <Link
      href={`/talent/${creator.handle}`}
      className={`group block relative transition-transform duration-500 ease-bounce2 ${tilt}`}
    >
      <div
        className={`relative aspect-portrait overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-ink/5 border-2 border-ink ${shadow}`}
      >
        <Image
          src={creator.portraitUrl}
          alt={creator.displayName}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial scale-100 group-hover:scale-[1.06]"
        />

        <div
          className={`absolute -top-3 -left-3 w-12 h-12 rounded-[1.125rem] ${sticker} border-2 border-ink flex items-center justify-center text-[11px] font-bold rotate-[-12deg] group-hover:rotate-12 transition-transform duration-500`}
        >
          №{String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute top-3 right-3">
          <span className="pill-ink shadow-sticker">
            <Sparkle className="w-2.5 h-2.5 text-butter" />
            Tier {creator.tier}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
          <div className="flex items-center justify-between text-bone text-[11px] font-medium">
            <span className="rounded-full bg-bone/15 backdrop-blur px-2.5 py-1">
              {creator.borough ?? creator.city}
            </span>
            <span className="rounded-full bg-bone/15 backdrop-blur px-2.5 py-1">
              {creator.disciplines[0]}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
        <div>
          <div className="font-display text-2xl tracking-editorial leading-none">
            {creator.displayName}
          </div>
          <div className="text-[13px] text-ink/60 mt-1.5">
            {creator.tagline}
          </div>
        </div>
        <div className="flex items-center gap-1 text-[12px] text-ink/50 font-medium whitespace-nowrap shrink-0">
          <Heart className="w-3 h-3 text-rouge" />
          {creator.rating?.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}

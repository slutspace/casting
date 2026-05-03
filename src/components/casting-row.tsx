import Link from "next/link";
import type { CastingCall } from "@/lib/types";
import {
  Camera,
  Clapper,
  FilmReel,
  Eye,
  Sparkle,
  Star,
} from "@/components/illustrations";

const TYPE_ICON: Record<CastingCall["productionType"], typeof Camera> = {
  Editorial: Camera,
  Campaign: Star,
  Film: Clapper,
  Series: FilmReel,
  Runway: Sparkle,
  Lookbook: Camera,
  Commercial: FilmReel,
  "Private Commission": Eye,
};

const TYPE_BG: Record<CastingCall["productionType"], string> = {
  Editorial: "bg-butter",
  Campaign: "bg-rose",
  Film: "bg-mint",
  Series: "bg-sky",
  Runway: "bg-lavender",
  Lookbook: "bg-peach",
  Commercial: "bg-sun",
  "Private Commission": "bg-ink text-bone",
};

export function CastingRow({ call }: { call: CastingCall }) {
  const Icon = TYPE_ICON[call.productionType] ?? Camera;
  const iconBg = TYPE_BG[call.productionType] ?? "bg-butter";

  const statusPill: Record<CastingCall["status"], string> = {
    Open: "pill-mint",
    "Final Callbacks": "pill-sun",
    "Closing Soon": "pill-rose",
    Closed: "pill-outline",
  };

  return (
    <Link
      href={`/casting-calls/${call.slug}`}
      className="group flex items-center gap-5 rounded-[1.75rem] md:rounded-[2.25rem] bg-bone border-2 border-ink/10 hover:border-ink hover:shadow-cardlift hover:-translate-y-1 p-4 md:p-5 transition-all duration-300"
    >
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] md:rounded-[1.35rem] ${iconBg} flex items-center justify-center border-2 border-ink shrink-0 group-hover:rotate-6 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-[10px] uppercase tracking-wide3 font-mono text-ink/40">
            {call.id}
          </span>
          <span className="pill-outline">{call.productionType}</span>
        </div>
        <div className="font-display text-xl md:text-2xl leading-tight tracking-editorial group-hover:text-rouge transition-colors truncate">
          {call.title}
        </div>
        <div className="text-[12px] text-ink/60 mt-1 truncate">
          {call.location} · {call.shootWindow}
        </div>
      </div>

      <div className="hidden md:flex flex-col items-end gap-1.5 shrink-0">
        <span className={statusPill[call.status]}>{call.status}</span>
        <div className="font-mono text-[12px] tabular-nums">
          {call.ratePerDayLabel}
        </div>
      </div>
    </Link>
  );
}

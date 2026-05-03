import { tickerLines } from "@/lib/data";
import { Sparkle } from "@/components/illustrations";

const COLORS = [
  "bg-sun",
  "bg-rose",
  "bg-sky",
  "bg-mint",
  "bg-lavender",
  "bg-butter",
  "bg-peach",
];

export function Ticker() {
  const items = [...tickerLines, ...tickerLines, ...tickerLines];
  return (
    <div className="border-y-2 border-ink bg-ink py-4 overflow-hidden">
      <div className="flex gap-6 ticker-track w-max">
        {items.map((line, i) => (
          <span
            key={`${line}-${i}`}
            className={`shrink-0 inline-flex items-center gap-3 ${
              COLORS[i % COLORS.length]
            } text-ink rounded-[999px] px-5 py-2.5 text-[12px] font-semibold whitespace-nowrap`}
          >
            <Sparkle className="w-3 h-3" />
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

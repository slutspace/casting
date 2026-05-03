import Link from "next/link";
import { Sparkle, SkylineNY, StarsCluster } from "@/components/illustrations";

const PRIMARY_NAV = [
  { href: "/talent", label: "Talent" },
  { href: "/casting-calls", label: "Casting Calls" },
  { href: "/agency", label: "The House" },
  { href: "/journal", label: "Journal" },
  { href: "/dashboard", label: "Dashboard" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-bone text-[11px] py-2">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <Sparkle className="w-3 h-3 text-butter" />
            <span className="font-medium">Spring intake is open</span>
            <span className="text-bone/50 hidden sm:inline">
              — applications close May&nbsp;30
            </span>
          </span>
          <span className="hidden md:inline text-bone/60 font-mono">
            New York · 09:00 — 19:00 ET
          </span>
        </div>
      </div>

      <div className="bg-bone/90 backdrop-blur-md border-b border-ink/10 rounded-b-[1.75rem] md:rounded-b-[2.25rem] shadow-soft">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 select-none group"
            aria-label="Casting / NY home"
          >
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-[1.125rem] md:rounded-[1.35rem] bg-sun group-hover:bg-butter transition-colors shadow-sticker"
              aria-hidden
            >
              <Sparkle className="w-5 h-5 text-ink" />
            </span>
            <span className="font-display text-2xl md:text-3xl tracking-editorial leading-none">
              casting<span className="text-rouge">.</span>ny
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="nav-link hidden sm:inline">
              Sign in
            </Link>
            <Link href="/apply" className="btn-primary">
              Join the roster
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pb-2 flex items-end justify-between gap-4">
          <SkylineNY className="w-full max-w-[min(100%,28rem)] h-10 md:h-12 text-ink shrink min-w-0" />
          <StarsCluster className="hidden sm:block w-28 h-10 md:w-36 md:h-11 shrink-0 text-ink opacity-90" />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import {
  Sparkle,
  Heart,
  Smile,
  WavyDivider,
  Confetti,
  Spotlights,
  DiscoOrb,
} from "@/components/illustrations";

export function SiteFooter() {
  return (
    <footer className="mt-32">
      <WavyDivider className="w-full h-8 text-ink" />
      <div className="bg-ink text-bone rounded-t-[2.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4rem] -mt-1">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 pt-20 pb-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-6 space-y-8">
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-[1.35rem] md:rounded-[1.5rem] bg-sun shadow-sticker">
                  <Sparkle className="w-7 h-7 text-ink" />
                </span>
                <Confetti className="w-36 h-14" />
                <Spotlights className="hidden md:block w-24 h-14 text-bone shrink-0 opacity-90" />
                <DiscoOrb className="hidden lg:block w-14 h-16 text-bone shrink-0" />
              </div>
              <div className="font-display text-5xl md:text-7xl leading-[0.9] tracking-editorial">
                A warm, weird <br />
                home for <br />
                creators
                <span className="text-sun">.</span>
              </div>
              <p className="text-bone/70 max-w-md text-lg">
                Casting / NY is a closed workspace where talent, agencies, and
                clients meet without the noise of the open web. Invitation-led.
                Non-indexable. Operated under Hated By Many&nbsp;LLC.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 bg-sun text-ink px-6 py-3 text-[13px] font-semibold rounded-full hover:bg-butter hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply to the roster
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-2 border-2 border-bone/40 text-bone px-6 py-[10px] text-[13px] font-medium rounded-full hover:bg-bone hover:text-ink hover:-translate-y-0.5 transition-all duration-300"
                >
                  For clients
                </Link>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px]">
              <FooterCol
                label="Talent"
                items={[
                  ["Roster", "/talent"],
                  ["Apply", "/apply"],
                  ["Dashboard", "/dashboard"],
                  ["Payouts", "/dashboard"],
                ]}
              />
              <FooterCol
                label="Clients"
                items={[
                  ["Casting calls", "/casting-calls"],
                  ["Concierge desk", "/concierge"],
                  ["Pricing", "/clients"],
                  ["Enterprise", "/clients"],
                ]}
              />
              <FooterCol
                label="Studio"
                items={[
                  ["The House", "/agency"],
                  ["Journal", "/journal"],
                  ["Press", "#"],
                  ["Contact", "#"],
                ]}
              />
              <FooterCol
                label="Trust"
                items={[
                  ["Trust & safety", "#"],
                  ["18 U.S.C. § 2257", "#"],
                  ["DMCA", "#"],
                  ["Privacy", "#"],
                ]}
              />
              <div className="space-y-4 col-span-2 sm:col-span-3 pt-6 sm:pt-0">
                <div className="rounded-[1.75rem] md:rounded-[2rem] bg-bone/5 border border-bone/10 p-5 md:p-6 flex items-center gap-4">
                  <Smile className="w-12 h-12 text-butter shrink-0" />
                  <div>
                    <div className="text-bone font-medium mb-0.5">
                      Get the desk's monthly note
                    </div>
                    <div className="text-bone/60 text-[12px]">
                      One short letter. No invoices, no spam, no unsubscribe
                      drama.
                    </div>
                  </div>
                </div>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@studio.nyc"
                    className="flex-1 bg-bone/10 border border-bone/20 rounded-full px-5 py-3 text-[13px] placeholder:text-bone/40 outline-none focus:border-bone/60"
                  />
                  <button
                    type="submit"
                    className="bg-sun text-ink px-5 py-3 text-[12px] font-semibold rounded-full hover:bg-butter transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[12px] font-mono text-bone/50">
            <div className="flex items-center gap-2">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 text-rouge inline-block" /> in
              Manhattan ·{" "}
              <span className="text-bone/40">© {new Date().getFullYear()}</span>{" "}
              Hated By Many&nbsp;LLC
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span>SOC 2 Type II in scope</span>
              <span>NY Talent Agency Lic. pending</span>
              <span>noindex / nofollow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  items,
}: {
  label: string;
  items: [string, string][];
}) {
  return (
    <div className="space-y-3">
      <div className="text-[10px] uppercase tracking-wide3 text-sun font-mono">
        {label}
      </div>
      <ul className="space-y-2 text-bone/80">
        {items.map(([t, h]) => (
          <li key={t}>
            <Link href={h} className="hover:text-bone transition-colors">
              {t}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

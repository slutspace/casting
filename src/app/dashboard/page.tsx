import Image from "next/image";
import Link from "next/link";
import { bookings, creators, uploads } from "@/lib/data";
import {
  Sparkle,
  Heart,
  Star,
  Camera,
  Eye,
  Lightning,
  Smile,
  Confetti,
  ArrowDoodle,
  Stamp,
  HighlightedText,
} from "@/components/illustrations";

export const metadata = {
  title: "Dashboard · Casting / NY",
};

const KPI_BG = ["bg-butter", "bg-rose", "bg-mint", "bg-sky"];

export default function DashboardPage() {
  const me = creators[0];
  const totalEarnings = uploads.reduce((s, u) => s + u.earningsCents, 0);
  const playable = uploads.filter((u) => u.state === "playable").length;

  return (
    <div>
      <header className="relative overflow-hidden">
        <Confetti className="absolute top-12 right-12 w-40 h-16 opacity-80" />
        <div className="max-w-8xl mx-auto px-6 lg:px-10 py-10 md:py-14 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
              <Smile className="w-4 h-4" />
              Tier {me.tier} · file in good standing
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-editorial">
              Hey,{" "}
              <HighlightedText color="butter">
                <span className="italic font-light">
                  {me.displayName.split(" ")[0]}
                </span>
              </HighlightedText>
              <span className="text-rouge">.</span>
            </h1>
            <p className="text-ink/60 text-lg max-w-xl">
              Two callbacks pending. One private commission awaiting NDA
              countersign. Your file looks clean.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end gap-3 flex-wrap">
            <Link href="/dashboard" className="btn-primary">
              <Sparkle className="w-3.5 h-3.5 text-butter" />
              Upload reel
            </Link>
            <Link href="/dashboard" className="btn-ghost">
              Bookings
            </Link>
          </div>
        </div>
      </header>

      <section className="pb-8">
        <div className="max-w-8xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard
            bg={KPI_BG[0]}
            label="MTD earnings"
            value={`$${(totalEarnings / 100).toLocaleString()}`}
            delta="+18.4%"
            icon={<Lightning className="w-5 h-5" />}
          />
          <KpiCard
            bg={KPI_BG[1]}
            label="Playable reels"
            value={String(playable)}
            delta="this month"
            icon={<Camera className="w-5 h-5" />}
          />
          <KpiCard
            bg={KPI_BG[2]}
            label="Active sessions"
            value="218"
            delta="+12% · 24h"
            icon={<Eye className="w-6 h-3" />}
          />
          <KpiCard
            bg={KPI_BG[3]}
            label="House rating"
            value={me.rating?.toFixed(2) ?? "—"}
            delta="top 5%"
            icon={<Star className="w-5 h-5" />}
          />
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-6 lg:px-10 py-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Block
            label="Library"
            title="Your reels in studio."
            action={
              <Link href="/dashboard" className="btn-ghost">
                <Sparkle className="w-3 h-3" />
                Upload reel
              </Link>
            }
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {uploads.map((u) => (
                <UploadCard key={u.id} upload={u} />
              ))}
            </div>
          </Block>

          <Block label="Recent activity" title="Audit log.">
            <div className="rounded-[2rem] bg-bone border-2 border-ink/10 overflow-hidden">
              {[
                {
                  ts: "08:14",
                  msg: "Session 9b3e revoked · concurrent geo anomaly · NY → Lagos in 18m",
                  level: "warn",
                },
                {
                  ts: "08:02",
                  msg: "License key issued for UP-01HZ9001 · viewer 2c1a · IP-bound",
                  level: "info",
                },
                {
                  ts: "07:51",
                  msg: "Watermark seed rotation completed · all reels",
                  level: "info",
                },
                {
                  ts: "07:46",
                  msg: "Boudoir Series 04 left transcoder · awaiting 2257 review",
                  level: "info",
                },
                {
                  ts: "07:30",
                  msg: "Payout USDC 482.10 · settled · txn 0x8c4a…f1",
                  level: "ok",
                },
              ].map((row, i) => (
                <div
                  key={row.ts}
                  className={`grid grid-cols-12 gap-3 py-3 px-5 items-center ${
                    i !== 0 ? "border-t border-dashed border-ink/15" : ""
                  }`}
                >
                  <span className="col-span-2 md:col-span-1 text-[11px] font-mono text-ink/40 tabular-nums">
                    {row.ts}
                  </span>
                  <span className="col-span-3 md:col-span-2">
                    <span
                      className={
                        row.level === "warn"
                          ? "pill-rose"
                          : row.level === "ok"
                            ? "pill-mint"
                            : "pill-outline"
                      }
                    >
                      {row.level}
                    </span>
                  </span>
                  <span className="col-span-7 md:col-span-9 text-[13px] text-ink/80">
                    {row.msg}
                  </span>
                </div>
              ))}
            </div>
          </Block>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-[2rem] border-2 border-ink p-6 shadow-sticker bg-bone">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-24 overflow-hidden rounded-2xl border-2 border-ink bg-ink/5 shrink-0">
                <Image
                  src={me.portraitUrl}
                  alt={me.displayName}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display text-2xl tracking-editorial leading-tight">
                  {me.displayName}
                </div>
                <div className="text-[12px] text-ink/60 mt-1">
                  @{me.handle}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="pill-sun">Tier {me.tier}</span>
                  <span className="pill-mint">{me.borough}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t-2 border-dashed border-ink/15 text-center">
              <Mini bg="bg-butter" l="Booked" v={String(me.bookings)} />
              <Mini bg="bg-rose" l="Reels" v={String(me.reels)} />
              <Mini bg="bg-sky" l="Rating" v={me.rating?.toFixed(2) ?? "—"} />
            </div>
            <Link
              href={`/talent/${me.handle}`}
              className="mt-5 block text-center btn-ghost w-full"
            >
              View public file
              <ArrowDoodle className="w-5 h-3" />
            </Link>
          </div>

          <Block label="Bookings" title="Your week.">
            <ul className="space-y-3">
              {bookings.map((b, i) => {
                const colors = ["bg-mint", "bg-rose", "bg-butter", "bg-sky"];
                return (
                  <li
                    key={b.id}
                    className={`rounded-[1.5rem] ${colors[i % colors.length]} border-2 border-ink/15 hover:border-ink p-4 transition-colors`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-display text-lg leading-tight tracking-editorial">
                          {b.title}
                        </div>
                        <div className="text-[12px] text-ink/60 mt-0.5">
                          {b.client}
                        </div>
                      </div>
                      <span
                        className={
                          b.status === "Confirmed"
                            ? "pill-ink"
                            : b.status === "On Hold"
                              ? "pill-rose"
                              : b.status === "Pending"
                                ? "pill-outline"
                                : "pill-outline"
                        }
                      >
                        {b.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t-2 border-dashed border-ink/15 text-[11px] font-mono">
                      <div>{b.callTime}</div>
                      <div className="text-right font-semibold">
                        {b.rateLabel}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Block>

          <Block label="Compliance" title="All quiet.">
            <div className="rounded-[1.75rem] bg-bone border-2 border-ink/10 p-5 space-y-2.5">
              <CheckRow ok label="2257 record on file" />
              <CheckRow ok label="ID verified · Jumio · Tier 4" />
              <CheckRow ok label="W-9 / 1099 routing active" />
              <CheckRow ok label="WebAuthn enrolled" />
              <CheckRow label="DPA addendum · 1 pending signature" />
            </div>
          </Block>
        </aside>
      </div>
    </div>
  );
}

function KpiCard({
  bg,
  label,
  value,
  delta,
  icon,
}: {
  bg: string;
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`${bg} rounded-[2rem] border-2 border-ink p-5 md:p-6 shadow-sticker hover:-translate-y-1 transition-transform`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-2xl bg-bone border-2 border-ink flex items-center justify-center">
          {icon}
        </div>
        <span className="pill-ink">{delta}</span>
      </div>
      <div className="text-[11px] uppercase tracking-wide3 font-mono text-ink/60 mb-1">
        {label}
      </div>
      <div className="font-display text-3xl md:text-4xl leading-none tracking-editorial">
        {value}
      </div>
    </div>
  );
}

function Block({
  label,
  title,
  action,
  children,
}: {
  label: string;
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="text-[10px] uppercase tracking-wide3 font-mono text-ink/40 mb-1">
            {label}
          </div>
          {title && (
            <h2 className="font-display text-3xl md:text-4xl tracking-editorial">
              {title}
            </h2>
          )}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function Mini({ l, v, bg }: { l: string; v: string; bg: string }) {
  return (
    <div className={`${bg} rounded-2xl py-2`}>
      <div className="font-display text-xl leading-none">{v}</div>
      <div className="text-[10px] uppercase tracking-wide3 font-mono text-ink/60 mt-1">
        {l}
      </div>
    </div>
  );
}

function UploadCard({ upload }: { upload: (typeof uploads)[number] }) {
  const stateLabel: Record<typeof upload.state, string> = {
    playable: "pill-mint",
    pipeline_running: "pill-sun",
    pending_2257_review: "pill-sun",
    uploading: "pill-outline",
    taken_down: "pill-rose",
  };
  return (
    <div className="rounded-[1.75rem] bg-bone border-2 border-ink/10 hover:border-ink overflow-hidden transition-colors">
      <div className="relative aspect-video">
        <Image
          src={upload.posterUrl}
          alt={upload.title}
          fill
          sizes="(min-width:768px) 33vw, 100vw"
          className="object-cover"
        />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="pill-ink">{upload.duration}</span>
          <span className="pill-sun">{upload.accessTier}</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="font-display text-lg leading-tight tracking-editorial">
          {upload.title}
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3 border-t-2 border-dashed border-ink/15 text-[11px] font-mono">
          <div>
            <div className="text-ink/40 uppercase tracking-wide2">Views</div>
            <div className="tabular-nums font-semibold">
              {upload.views.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-ink/40 uppercase tracking-wide2">$</div>
            <div className="tabular-nums font-semibold">
              {upload.earningsLabel}
            </div>
          </div>
          <div className="text-right flex items-end justify-end">
            <span className={stateLabel[upload.state]}>
              {upload.state.replace(/_/g, " ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckRow({ ok, label }: { ok?: boolean; label: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[14px]">
      <span className="text-ink/80">{label}</span>
      <span className={ok ? "pill-mint" : "pill-rose"}>
        {ok ? "✓ ok" : "○ pending"}
      </span>
    </div>
  );
}

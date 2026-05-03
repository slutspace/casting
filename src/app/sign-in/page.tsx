import Link from "next/link";
import {
  Sparkle,
  Smile,
  Heart,
  Confetti,
  Stamp,
  Blob,
  Blob2,
  ArrowDoodle,
} from "@/components/illustrations";

export const metadata = {
  title: "Sign In · Casting / NY",
};

export default function SignInPage() {
  return (
    <section className="min-h-[80vh] grid md:grid-cols-2">
      <div className="hidden md:block relative bg-ink text-bone overflow-hidden rounded-tr-[3rem] md:rounded-tr-none md:rounded-r-[3rem] m-4 md:m-6">
        <Blob className="absolute -top-10 -right-10 w-96 h-96 text-rouge/40" />
        <Blob2 className="absolute -bottom-20 -left-10 w-96 h-96 text-butter/30" />
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sun text-ink shadow-sticker">
              <Sparkle className="w-5 h-5" />
            </span>
            <span className="font-display text-2xl tracking-editorial">
              casting<span className="text-rouge">.</span>ny
            </span>
          </div>
          <div className="space-y-6 max-w-md">
            <Stamp text="MEMBERS" className="w-24 h-24 text-sun" />
            <div className="font-display text-5xl leading-[0.95] tracking-editorial">
              You are entering a non-indexable surface.
            </div>
            <p className="text-bone/70 text-sm">
              Sessions are device-bound, IP-bound, and forensically
              attributable. You will be challenged on every new device.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
        <Confetti className="absolute top-12 right-12 w-40 h-16 opacity-80" />
        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 bg-bone border-2 border-ink rounded-full px-4 py-1.5 text-[12px] font-semibold shadow-sticker">
              <Smile className="w-4 h-4" />
              Sign in
            </span>
            <h1 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-editorial">
              Welcome back
              <span className="text-rouge">.</span>
            </h1>
          </div>

          <form className="space-y-5">
            <Field type="email" label="Email" placeholder="you@studio.nyc" />
            <Field
              type="password"
              label="Password"
              placeholder="••••••••••"
              hintRight={
                <Link
                  href="#"
                  className="text-ink/40 hover:text-rouge text-[12px] font-medium"
                >
                  Recover
                </Link>
              }
            />

            <button
              type="submit"
              className="btn-primary w-full justify-center py-3.5"
            >
              <Sparkle className="w-3.5 h-3.5 text-butter" />
              Continue
            </button>

            <div className="grid grid-cols-3 items-center gap-2 text-[10px] uppercase tracking-wide3 font-mono text-ink/40">
              <span className="h-px bg-ink/15" />
              <span className="text-center">or</span>
              <span className="h-px bg-ink/15" />
            </div>

            <div className="grid gap-2">
              <button
                type="button"
                className="w-full bg-cream border-2 border-ink/15 hover:border-ink py-3 text-[13px] font-medium rounded-full transition-colors"
              >
                Continue with WebAuthn
              </button>
              <button
                type="button"
                className="w-full bg-cream border-2 border-ink/15 hover:border-ink py-3 text-[13px] font-medium rounded-full transition-colors"
              >
                Continue with SSO (Enterprise)
              </button>
            </div>
          </form>

          <div className="rounded-2xl bg-cream border-2 border-dashed border-ink/20 p-4 text-[13px] text-ink/70 flex items-center gap-3">
            <Heart className="w-4 h-4 text-rouge shrink-0" />
            <span>
              Not on the roster yet?{" "}
              <Link
                href="/apply"
                className="font-semibold text-ink underline underline-offset-4 hover:text-rouge"
              >
                Apply to join
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  type,
  label,
  placeholder,
  hintRight,
}: {
  type: string;
  label: string;
  placeholder?: string;
  hintRight?: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="flex items-center justify-between text-[11px] uppercase tracking-wide2 font-medium text-ink/70">
        <span>{label}</span>
        {hintRight}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-cream border-2 border-ink/15 focus:border-ink rounded-2xl px-4 py-3 text-[15px] outline-none placeholder:text-ink/30 transition-colors"
      />
    </label>
  );
}

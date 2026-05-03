import { SVGProps } from "react";

type IllProps = SVGProps<SVGSVGElement>;

export function Sparkle({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M12 0c.6 6 2 11 12 12-10 1-11.4 6-12 12-.6-6-2-11-12-12 10-1 11.4-6 12-12z" />
    </svg>
  );
}

export function Star({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M12 1l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 15.8l-6.2 4.5L8.2 12.9 2 8.4h7.6L12 1z" />
    </svg>
  );
}

export function Heart({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M12 21s-7.5-4.7-9.5-9.5C1 7.5 4 4 7.5 4 9.7 4 11.3 5.3 12 6.7 12.7 5.3 14.3 4 16.5 4 20 4 23 7.5 21.5 11.5 19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

export function Smile({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
      aria-hidden
      {...rest}
    >
      <circle cx="32" cy="32" r="28" />
      <circle cx="22" cy="26" r="2.5" fill="currentColor" />
      <circle cx="42" cy="26" r="2.5" fill="currentColor" />
      <path d="M20 38 Q 32 50 44 38" />
    </svg>
  );
}

export function Camera({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...rest}
    >
      <rect x="3" y="10" width="58" height="34" rx="6" />
      <path d="M20 10 L24 4 L40 4 L44 10" />
      <circle cx="32" cy="27" r="10" />
      <circle cx="32" cy="27" r="5" />
      <circle cx="52" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function Clapper({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...rest}
    >
      <rect x="3" y="20" width="58" height="33" rx="3" fill="currentColor" fillOpacity="0.08" />
      <path
        d="M3 20 L10 5 L20 8 L13 23 M20 8 L30 11 L23 26 M30 11 L40 14 L33 29 M40 14 L50 17 L43 32 M50 17 L61 20 L54 35"
      />
      <line x1="3" y1="35" x2="61" y2="35" />
    </svg>
  );
}

export function FilmReel({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
      aria-hidden
      {...rest}
    >
      <circle cx="32" cy="32" r="28" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <circle cx="32" cy="12" r="5" />
      <circle cx="32" cy="52" r="5" />
      <circle cx="12" cy="32" r="5" />
      <circle cx="52" cy="32" r="5" />
    </svg>
  );
}

export function Eye({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M2 18 Q 32 -8 62 18 Q 32 44 2 18 Z" />
      <circle cx="32" cy="18" r="7" fill="currentColor" />
      <circle cx="34" cy="16" r="2" fill="#fbf8f1" />
    </svg>
  );
}

export function Hand({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M22 10 c0-3 5-3 5 0 v18 l1-12 c0-3 5-3 5 0 v14 l1-10 c0-3 5-3 5 0 v14 l1-7 c0-3 5-3 5 0 v18 c0 8-5 14-15 14 -10 0-15-6-17-14 l-7-15 c-1-3 3-5 5-3 l5 7 V14 c0-3 5-3 5 0 v14 z" />
    </svg>
  );
}

export function Lightning({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M14 1 L3 14 H10 L8 23 L21 9 H13 L14 1 Z" />
    </svg>
  );
}

export function ArrowDoodle({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M3 30 Q 20 8, 40 22 T 75 14" />
      <path d="M68 6 L75 14 L67 22" />
    </svg>
  );
}

export function Squiggle({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M2 8 Q 15 0, 30 8 T 60 8 T 90 8 T 120 8 T 150 8 T 180 8 T 198 8" />
    </svg>
  );
}

export function Blob({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M44.6,-58.7C56.4,-50.6,63.7,-35.5,68.5,-19.5C73.3,-3.5,75.5,13.4,69.5,27.5C63.6,41.6,49.4,52.9,33.7,60.4C18,67.9,0.7,71.5,-15,68.5C-30.6,65.5,-44.6,55.8,-54.7,42.6C-64.7,29.4,-70.8,12.7,-69.6,-3.4C-68.5,-19.5,-60.2,-35.1,-48.1,-43.4C-36,-51.7,-20.1,-52.7,-3.5,-48.5C13.1,-44.3,32.8,-66.8,44.6,-58.7Z" transform="translate(100 100)" />
    </svg>
  );
}

export function Blob2({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M50.4,-65.5C62.4,-54.4,67.4,-37,71.4,-19.5C75.4,-2,78.5,15.7,71.6,28.4C64.7,41.1,47.9,48.8,31.6,56.4C15.3,64,-0.5,71.5,-16.7,69.9C-32.9,68.3,-49.6,57.6,-58.5,43C-67.5,28.5,-68.8,10.1,-65.6,-6.7C-62.5,-23.5,-54.9,-38.7,-43.1,-50.5C-31.4,-62.4,-15.7,-70.9,1.7,-73C19.1,-75.1,38.3,-76.6,50.4,-65.5Z" transform="translate(100 100)" />
    </svg>
  );
}

export function Stamp({
  className = "",
  text = "VERIFIED",
  ...rest
}: IllProps & { text?: string }) {
  const id = `stamp-${text.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
      {...rest}
    >
      <defs>
        <path
          id={id}
          d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="60"
        cy="60"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text fill="currentColor" fontSize="11" fontWeight="700" letterSpacing="2">
        <textPath href={`#${id}`} startOffset="0">
          {`${text} · ${text} · ${text} · `}
        </textPath>
      </text>
      <path
        d="M60 50 l2.4 7.4H70l-6.2 4.5 2.4 7.4L60 64.8l-6.2 4.5 2.4-7.4L50 57.4h7.6L60 50z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Confetti({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      aria-hidden
      {...rest}
    >
      <circle cx="20" cy="20" r="4" fill="#ffe27a" />
      <rect x="48" y="10" width="8" height="3" rx="1.5" fill="#d83a3a" transform="rotate(20 52 12)" />
      <circle cx="80" cy="40" r="3" fill="#bfe0ff" />
      <rect x="100" y="22" width="9" height="3" rx="1.5" fill="#bfe7c8" transform="rotate(-30 104 24)" />
      <circle cx="130" cy="14" r="4" fill="#d6c8ff" />
      <rect x="150" y="36" width="9" height="3" rx="1.5" fill="#ffb547" transform="rotate(45 154 38)" />
      <circle cx="180" cy="22" r="3" fill="#ffb6c8" />
      <path d="M30 60 l5 -8 l5 8 z" fill="#ffe27a" />
      <path d="M170 56 l5 -8 l5 8 z" fill="#d83a3a" />
    </svg>
  );
}

export function WavyDivider({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 1200 30"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      {...rest}
    >
      <path
        d="M0 15 Q 75 0, 150 15 T 300 15 T 450 15 T 600 15 T 750 15 T 900 15 T 1050 15 T 1200 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZigZag({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      {...rest}
    >
      <path d="M2 14 L20 2 L40 14 L60 2 L80 14 L100 2 L120 14 L140 2 L160 14 L180 2 L198 14" />
    </svg>
  );
}

/** Playful NYC skyline — chunky rounded buildings */
export function SkylineNY({ className = "", ...rest }: IllProps) {
  return (
    <svg
      viewBox="0 0 240 96"
      fill="none"
      className={className}
      aria-hidden
      {...rest}
    >
      <path
        d="M8 88V52h24v36H8zm32-48v48h28V40h-28zm36 28v20h22V68h-22zm28-36v56h26V32h-26zm32 16v40h24V48h-24zm28-24v64h30V24h-30zm36 12v52h28V36h-28zm32-20v72h26V16h-26z"
        fill="currentColor"
        opacity="0.18"
      />
      <rect x="10" y="56" width="20" height="30" rx="6" fill="#ffb547" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="42" y="44" width="22" height="42" rx="7" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="76" y="52" width="18" height="34" rx="6" fill="#bfe0ff" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="106" y="38" width="22" height="48" rx="8" fill="#ffb6c8" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="138" y="50" width="20" height="36" rx="6" fill="#bfe7c8" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="168" y="28" width="26" height="58" rx="9" fill="#d6c8ff" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="202" y="20" width="22" height="66" rx="8" fill="#ffc8a8" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="53" cy="38" r="5" fill="#1a1a1a" />
      <path d="M118 30v12l8-6-8-6z" fill="#d83a3a" stroke="#1a1a1a" strokeWidth="1.5" />
    </svg>
  );
}

/** Theater spotlights — blobby cones */
export function Spotlights({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 120 72" fill="none" className={className} aria-hidden {...rest}>
      <ellipse cx="28" cy="62" rx="18" ry="6" fill="currentColor" opacity="0.12" />
      <ellipse cx="92" cy="62" rx="18" ry="6" fill="currentColor" opacity="0.12" />
      <path d="M28 58 L12 12 L44 12 Z" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M92 58 L76 10 L108 10 Z" fill="#bfe0ff" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="28" cy="58" r="7" fill="#ffb547" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="92" cy="58" r="7" fill="#ffb6c8" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function MegaphoneFun({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 72 64" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M12 28c0-8 10-14 22-14s22 6 22 14v12c0 8-10 14-22 14S12 48 12 40V28z"
        fill="#ffe27a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M56 24l12-6v28l-12-6V24z" fill="#ffb547" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round" />
      <rect x="6" y="30" width="10" height="16" rx="4" fill="#bfe7c8" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M18 38h8" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 14l3 4 5-2-2 5 4 3-5 1 1 5-4-3-4 3 1-5-5-1 4-3-2-5 5 2z" fill="#d83a3a" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
}

export function RainbowArch({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 120 64" fill="none" className={className} aria-hidden {...rest}>
      <path d="M10 52 A50 50 0 0 1 110 52" stroke="#ffe27a" strokeWidth="8" strokeLinecap="round" />
      <path d="M18 52 A42 42 0 0 1 102 52" stroke="#ffb547" strokeWidth="8" strokeLinecap="round" />
      <path d="M26 52 A34 34 0 0 1 94 52" stroke="#ffb6c8" strokeWidth="8" strokeLinecap="round" />
      <path d="M34 52 A26 26 0 0 1 86 52" stroke="#bfe0ff" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 52 A18 18 0 0 1 78 52" stroke="#bfe7c8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="60" cy="52" r="5" fill="#d6c8ff" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function MicStage({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 64 80" fill="none" className={className} aria-hidden {...rest}>
      <ellipse cx="32" cy="68" rx="22" ry="8" fill="currentColor" opacity="0.1" />
      <rect x="26" y="34" width="12" height="28" rx="6" fill="#1a1a1a" />
      <path
        d="M20 22c0-8 5.4-14 12-14s12 6 12 14v10c0 8-5.4 14-12 14s-12-6-12-14V22z"
        fill="#ffb6c8"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M32 8v10" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="6" r="3" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function SneakersRunway({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 96 48" fill="none" className={className} aria-hidden {...rest}>
      <path
        d="M8 34c0-6 8-10 22-10h28c10 0 18 4 22 10v6H8v-6z"
        fill="#bfe0ff"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M14 26h56" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="22" r="5" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="44" cy="20" r="5" fill="#ffb547" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="62" cy="22" r="5" fill="#ffb6c8" stroke="#1a1a1a" strokeWidth="2" />
      <path
        d="M52 34c0-6 8-10 22-10h8c4 0 8 2 10 6v10H52V34z"
        fill="#bfe7c8"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
    </svg>
  );
}

export function DiscoOrb({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 64 72" fill="none" className={className} aria-hidden {...rest}>
      <line x1="32" y1="4" x2="32" y2="14" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="38" r="22" fill="#d6c8ff" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M18 32h28M16 40h32M18 48h28" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.35" />
      <polygon points="32,22 34,28 40,28 35,32 37,38 32,34 27,38 29,32 24,28 30,28" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="44,36 46,40 50,40 47,43 48,47 44,44 40,47 41,43 38,40 42,40" fill="#ffb6c8" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
}

export function StarsCluster({ className = "", ...rest }: IllProps) {
  return (
    <svg viewBox="0 0 120 44" fill="none" className={className} aria-hidden {...rest}>
      <path d="M14 10l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8L14 10z" fill="#ffb547" stroke="#1a1a1a" strokeWidth="1.2" />
      <path d="M42 6l1.2 3.7h3.9l-3.2 2.3 1.2 3.7-3.1-2.3-3.1 2.3 1.2-3.7-3.2-2.3h3.9L42 6z" fill="#ffe27a" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M62 22l2 6.2h6.5l-5.3 3.9 2 6.2-5.2-3.8-5.2 3.8 2-6.2-5.3-3.9h6.5l2-6.2z" fill="#d83a3a" stroke="#1a1a1a" strokeWidth="1.3" />
      <path d="M94 12l1.5 4.6h4.9l-4 2.9 1.5 4.6-3.9-2.8-3.9 2.8 1.5-4.6-4-2.9h4.9l1.5-4.6z" fill="#bfe0ff" stroke="#1a1a1a" strokeWidth="1.1" />
      <circle cx="78" cy="8" r="4" fill="#bfe7c8" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="28" cy="30" r="3.5" fill="#ffb6c8" stroke="#1a1a1a" strokeWidth="1.5" />
    </svg>
  );
}

export function Avatar({
  initials = "?",
  className = "",
  bg = "#ffe27a",
  ...rest
}: IllProps & { initials?: string; bg?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden {...rest}>
      <rect width="64" height="64" rx="32" fill={bg} />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="24"
        fontWeight="700"
        fill="#1a1a1a"
      >
        {initials}
      </text>
    </svg>
  );
}

export function MarqueeStar({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block animate-spin-slow ${className}`}
      aria-hidden
    >
      <Sparkle className="w-full h-full" />
    </span>
  );
}

export function HighlightedText({
  children,
  color = "butter",
  className = "",
}: {
  children: React.ReactNode;
  color?: "butter" | "rose" | "mint" | "sky" | "lavender" | "sun";
  className?: string;
}) {
  const colorMap: Record<string, string> = {
    butter: "bg-butter",
    rose: "bg-rose",
    mint: "bg-mint",
    sky: "bg-sky",
    lavender: "bg-lavender",
    sun: "bg-sun",
  };
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className={`absolute -inset-x-1 inset-y-1 -z-10 rounded-2xl md:rounded-3xl ${colorMap[color]}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

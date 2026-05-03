import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          50: "#faf9f6",
          100: "#f3f1ec",
          200: "#e2ddd2",
          300: "#c3bcab",
          400: "#8e8676",
          500: "#5a5346",
          600: "#3a342b",
          700: "#26221c",
          800: "#171513",
          900: "#0e0d0c",
        },
        bone: "#fbf8f1",
        cream: "#fff7e6",
        butter: "#ffe27a",
        sun: "#ffb547",
        peach: "#ffc8a8",
        rose: "#ffb6c8",
        sky: "#bfe0ff",
        mint: "#bfe7c8",
        lavender: "#d6c8ff",
        oxblood: "#5a1614",
        rouge: "#d83a3a",
        plum: "#3a1f55",
      },
      fontFamily: {
        display: ["var(--font-display)", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        hand: ["var(--font-hand)", "var(--font-display)", "cursive"],
      },
      letterSpacing: {
        editorial: "-0.02em",
        wide2: "0.14em",
        wide3: "0.22em",
      },
      borderRadius: {
        blob: "62% 38% 47% 53% / 45% 55% 45% 55%",
        squircle: "2rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
      },
      fontSize: {
        "10xl": ["clamp(4rem, 14vw, 18rem)", { lineHeight: "0.86" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        bounce2: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        editorial: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(26, 26, 26, 0.18)",
        sticker: "4px 4px 0 0 #1a1a1a",
        stickerSun: "5px 5px 0 0 #ffb547",
        stickerRouge: "5px 5px 0 0 #d83a3a",
        stickerSky: "5px 5px 0 0 #bfe0ff",
        stickerMint: "5px 5px 0 0 #bfe7c8",
        stickerRose: "5px 5px 0 0 #ffb6c8",
        cardlift: "0 18px 40px -20px rgba(26, 26, 26, 0.35)",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        bob: "bob 4s ease-in-out infinite",
        "spin-slow": "spinSlow 18s linear infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        pop: "pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;

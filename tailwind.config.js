/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0B",
        graphite: {
          DEFAULT: "#131316",
          surface: "#16161A",
          elevated: "#1C1C20",
          border: "#26262B",
        },
        gold: {
          DEFAULT: "#C9A24B",
          dim: "#8C7634",
          bright: "#E0BC6B",
        },
        ivory: {
          DEFAULT: "#F5F4F0",
          dim: "#A8A8AC",
          faint: "#6B6B70",
        },
      },
      fontFamily: {
        display: ["var(--font-geist)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gold-glow":
          "radial-gradient(circle at 50% 0%, rgba(201,162,75,0.12), transparent 60%)",
        "grain": "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};

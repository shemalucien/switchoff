// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/**/*.tsx"],
  presets: [sharedConfig],
  darkMode: "class", // Enables dark mode based on the 'dark' class in HTML

  theme: {
    extend: {
      colors: {
        // Core Switchoff brand palette — keeps the existing blue/white/gray
        // identity but gives it names so it stays consistent across the app.
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#b7dbff",
          300: "#84c2ff",
          400: "#4aa1ff",
          500: "#2f7ef9", // primary blue
          600: "#1c5fe0",
          700: "#164ab4",
          800: "#153f8f",
          900: "#163871",
          950: "#0f2247",
        },
        accent: {
          // the cyan used on the Energy Drink line
          400: "#5eead4",
          500: "#22d3c8",
          600: "#0fb8ac",
        },
        silver: {
          // the silver/white used on the Nice Guarana line
          100: "#f5f6f8",
          200: "#e7e9ee",
          300: "#d3d7e0",
          400: "#b7bdc9",
        },
        dark: {
          primary: "#0b1120",
          secondary: "#151d30",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px 0 rgba(15, 34, 71, 0.06)",
        "card-hover": "0 16px 40px -12px rgba(15, 34, 71, 0.25)",
        glow: "0 0 0 1px rgba(47,126,249,0.15), 0 8px 24px -8px rgba(47,126,249,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      animation: {
        "fade-in": "fade-in .3s ease-out both",
        "fade-up": "fade-up .4s ease-out both",
        "scale-in": "scale-in .2s ease-out both",
        shimmer: "shimmer 1.6s linear infinite",
      },
      transitionTimingFunction: {
        snappy: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};

export default config;

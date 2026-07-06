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
        // Core Switchoff brand palette.
        // Updated 2026: the logo's primary color moved from blue to a
        // metallic gold, so `brand` is now gold. Every existing
        // bg-brand-500 / text-brand-600 / border-brand-400 class across the
        // app picks this up automatically — no other files need to change
        // just for this.
        brand: {
          50: "#fdf9ec",
          100: "#fbf1d2",
          200: "#f3dfa3",
          300: "#e9c86e",
          400: "#ddb048",
          500: "#c99730", // primary gold
          600: "#a97c22",
          700: "#86611b",
          800: "#654815",
          900: "#43300e",
          950: "#2b1e09",
        },
        accent: {
          // the cyan used on the Energy Drink line — unchanged, this is a
          // product-specific color rather than the overall site identity
          400: "#5eead4",
          500: "#22d3c8",
          600: "#0fb8ac",
        },
        // New: the blue → green gradient used in the logo's lightning-bolt
        // icon (the "o" in "off"). Use as e.g.
        // bg-gradient-to-r from-bolt-blue to-bolt-green
        bolt: {
          blue: "#2e9bf0",
          green: "#3ecf8e",
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
        // Updated to match the new gold brand color (was rgba(47,126,249,...))
        glow: "0 0 0 1px rgba(201,151,48,0.18), 0 8px 24px -8px rgba(201,151,48,0.45)",
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
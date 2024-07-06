// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
  darkMode: "class", // Enables dark mode based on the 'dark' class in HTML

  theme: {
    extend: {
      colors: {
        // Define your dark mode color palette
        dark: {
          primary: "#1A202C", // Example primary dark color
          secondary: "#2D3748", // Example secondary dark color
          // Add more dark mode colors as needed
        },
      },
    },
  },
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          base: "#4A234A",
          light: "#6B346B",
          dark: "#2A132A",
          lavender: "#967BB6",
          plum: "#8E4585",
          lilac: "#E6E6FA",
        },
        gray: {
          light: "#D0D0D0",
          medium: "#A0A0A0",
          dark: "#606060",
          charcoal: "#36454F",
          silver: "#C0C0C0",
        },
      },
    },
  },
  plugins: [],
};

export default config;

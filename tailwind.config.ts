import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f6f2",
        graphite: "#2f343f",
        "muted-gold": "#b89c6a",
        "soft-gray": "#d8dbe2"
      },
      boxShadow: {
        premium: "0 20px 60px rgba(47, 52, 63, 0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;

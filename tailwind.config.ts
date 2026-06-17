import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F33",
        graphite: "#243447",
        line: "#D8DDE4",
        paper: "#FFFFFF",
        field: "#E5E7EB",
        teal: "#3A506B",
        copper: "#F97316",
        steel: "#6B7280"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(11, 31, 51, 0.14)",
        panel: "0 16px 45px rgba(11, 31, 51, 0.09)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

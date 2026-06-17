import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        graphite: "#1F2933",
        line: "#CBD5E1",
        paper: "#F8FAFC",
        field: "#E2E8F0",
        teal: "#2563EB",
        copper: "#2563EB",
        steel: "#64748B"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 24, 39, 0.14)",
        panel: "0 16px 45px rgba(17, 24, 39, 0.09)"
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

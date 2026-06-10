import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171a1f",
        graphite: "#414850",
        line: "#d7dce2",
        paper: "#f5f6f8",
        field: "#e9edf2",
        teal: "#255dc7",
        copper: "#c24b1a",
        steel: "#677582"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 26, 31, 0.14)",
        panel: "0 16px 45px rgba(23, 26, 31, 0.09)"
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

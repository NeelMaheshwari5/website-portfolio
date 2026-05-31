import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        graphite: "#2f3834",
        line: "#d9ddd7",
        paper: "#f7f7f2",
        field: "#eef3f1",
        teal: "#1f7a78",
        copper: "#b76435",
        steel: "#60727f"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 32, 28, 0.12)",
        panel: "0 16px 45px rgba(23, 32, 28, 0.09)"
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

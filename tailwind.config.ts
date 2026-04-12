import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "monospace"],
      },
      colors: {
        black: "#090806",
        sand: "#ddd0ba",
        muted: "#5a5040",
        surface: "#131210",
        "surface-2": "#1c1a16",
        border: "#2e2b24",
        red: "#c42b1a",
        amber: "#c8920a",
        concrete: "#3a3730",
      },
      letterSpacing: {
        widest: "0.22em",
        wider: "0.12em",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.88" }],
        "9xl":  ["8rem",  { lineHeight: "0.88" }],
        "8xl":  ["6rem",  { lineHeight: "0.90" }],
      },
    },
  },
  plugins: [],
};
export default config;

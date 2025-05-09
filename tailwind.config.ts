import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-orange-600",
    "bg-orange-500",
    "hover:bg-orange-600",
    "text-white",
    "px-6",
    "py-2",
    "rounded",
    "shadow",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500", // Orange (your brand)
        secondary: "#000000",
        background: "#FFFFFF",
        softgray: "#CCCCCC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.05em",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};

export default config;

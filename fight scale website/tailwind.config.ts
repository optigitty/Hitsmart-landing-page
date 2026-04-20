import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A4D36",
        "bg-alt": "#083D2B",
        "text-primary": "#FFFFFF",
        "text-secondary": "rgb(255 255 255 / 0.65)",
        accent: "#E8D5A0",
        hairline: "rgb(255 255 255 / 0.12)",
      },
      fontFamily: {
        body: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;

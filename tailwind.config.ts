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
        gray: "#E0E1DD",
        blue: {
          DEFAULT: "#415A77",
          100: "#778DA9",
        },
      },
      fontFamily: {
        gambarino: ["var(--font-gambarino)"],
        robotoSlab: ["var(--font-roboto-slab)"],
      },
      fontSize: {
        "9xl": "20.4rem",
      },
    },
  },
  plugins: [],
};
export default config;

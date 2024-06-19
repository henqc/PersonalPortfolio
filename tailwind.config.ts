import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        gray: "#1c1c22",
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

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
          DEFAULT: "#4593FF",
          100: "#589eff",
        },
      },
      fontFamily: {
        gambarino: ["var(--font-gambarino)"],
        robotoSlab: ["var(--font-roboto-slab)"],
        robotoSlabLight: ["var(--font-roboto-slab-light)"],
      },
      fontSize: {
        "9xl": "20.4rem",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slider: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        slider: "slider 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

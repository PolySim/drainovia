import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        bebas: '"Bebas Neue", sans-serif',
        m2: '"M PLUS 2", Helvetica, sans-serif',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        8: "8px",
        12: "12px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        apparition: {
          "0%": { opacity: "0", transform: "translateY(4rem)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: { apparition: "apparition 0.5s linear forwards" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

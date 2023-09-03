import type { Config } from "tailwindcss";

const   config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clr: {
          primary: {
            "000": "hsl(166 54% 60%)",
            50: "hsl(164 55% 92%)",
            100: "hsl(165 54% 88%)",
            200: "hsl(166 54% 84%)",
            300: "hsl(165 54% 76%)",
            400: "hsl(166 54% 72%)",
            500: "hsl(166 54% 68%)",
            600: "hsl(166 54% 64%)",
            700: "hsl(166 54% 56%)",
            800: "hsl(166 54% 52%)",
            900: "hsl(166 54% 48%)",
          },
          dark: {
            bg: "hsl(180 3% 12%)",
            white: "hsl(0 0% 100%)",

            gray: {
              50: "hsl(0 0% 97%)",
              100: "hsl(0 0% 93%)",
              200: "hsl(0 0% 84%)",
              300: "hsl(0 0% 65%)",
              400: "hsl(0 0% 40%)",
              500: "hsl(0 0% 27%)",
              600: "hsl(0 0% 20%)",
            },
          },

          success: {
            primary: "hsl(157 100% 34%)",

            100: "hsl(158 59% 87%)",
            200: "hsl(157 63% 75%)",
            300: "hsl(157 59% 69%)",
            400: "hsl(157 56% 57%)",
            500: "hsl(157 63% 46%)",
            600: "hsl(157 100% 27%)",
          },
          info: {
            primary: "hsl(214 87% 64%)",
            100: "hsl(215 89% 93%)",
            200: "hsl(214 86% 89%)",
            300: "hsl(214 87% 85%)",
            400: "hsl(215 87% 78%)",
            500: "hsl(214 87% 71%)",
            600: "hsl(215 55% 52%)",
          },

          warning: {
            primary: "hsl(34 100% 63%)",
            rating: "hsl(44 100% 58%)",
            100: "hsl(34 100% 93%)",
            200: "hsl(34 100% 89%)",
            300: "hsl(34 100% 85%)",
            400: "hsl(34 100% 78%)",
            500: "hsl(34 100% 71%)",
            600: "hsl(34 63% 52%)",
          },
          danger: {
            primary: "hsl(358 89% 64%)",
            300: "hsl(357 89% 85%)",
            400: "hsl(358 89% 78%)",
            100: "hsl(358 89% 93%)",
            200: "hsl(358 89% 89%)",
            500: "hsl(358 89% 71%)",
            600: "hsl(358 56% 52%)",
          },
        },
      },

      spacing: {
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4rem",
        "8xl": "4.5rem",
        "9xl": "5rem",
        "10xl": "5.5rem",
        "11xl": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;

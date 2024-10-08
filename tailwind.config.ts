import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        black: "#000000",
        darkGray: "#221f1f",
        lightGray: "#B3B3B3",
        white: "#FFFFFF",
      },
      objectPosition: {
        'left': 'left',
        'center': 'center',
        'right': 'right',       
      }
    },
  },
  plugins: [],
};
export default config;

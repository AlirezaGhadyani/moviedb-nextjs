import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/components/**/*.{tsx,ts,js,jsx,mdx}",
    "./src/app/**/*.{tsx,ts,js,jsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{tsx,ts,js,jsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;

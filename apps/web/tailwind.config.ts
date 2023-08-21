import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "var(--first-color)",
        black: "var(--black-color)",
        "black-light": "var(--black-color-light)",
        white: "var(--white-color)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        "text-light": "var(--text-color-light)",
        body: "var(--body-color)",
        container: "var(--container-color)",
      },
      fontFamily: {
        player: ["var(--font-player)"],
        suite: ["var(--font-suite)"],
      },
      fontSize: {
        biggest: "var(--biggest-font-size)",
        h1: "var(--h1-font-size)",
        h2: "var(--h2-font-size)",
        h3: "var(--h3-font-size)",
        normal: "var(--normal-font-size)",
        small: "var(--small-font-size)",
        smaller: "var(--smaller-font-size)",
      },
      zIndex: {
        tooltip: "var(--z-tooltip)",
        fixed: "var(--z-fixed)",
      },
    },
  },
  plugins: [],
};
export default config;

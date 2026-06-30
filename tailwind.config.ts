import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ever:  "#1C4ED8",
        ever2: "#0F2C66",
        ink:   "#0D1A2B",
        bone:  "#FFFFFF",
        mist:  "#EAF1FC",
        sage:  "#CBD8EC",
        gold:  "#DA3A0A",
        gold2: "#B22F07",
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans:  ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', "sans-serif"],
      },
      maxWidth: { content: "1120px" },
    },
  },
  plugins: [],
};
export default config;

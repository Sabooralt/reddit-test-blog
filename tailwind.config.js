/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Instrument Sans Variable"', "sans-serif"],
      },
      colors: {
        primary: "#ddd0",
        secondary: "#000",
        gray: "#d9dae2",
      },
      animation: {
        marquee: "marquee 200s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

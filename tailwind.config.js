/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Instrument Sans Variable"', "sans-serif"],
      },
      colors:{
        primary: "#ddd0",
        secondary: "#000",
      }
    },
  },
  plugins: [],
};

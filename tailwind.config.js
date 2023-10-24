/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        dela: ["Dela Gothic One", "sans-serif"],
        oi: ["Oi", "sans-serif"],
      },
      colors: {
        pink: "#ff73b5",
        green: "#042f1a",
        lightGreen: "#d4ed6d",
        lessGreen: "#1abe71",
        orange: "#ffb500",
      },
    },
  },
  plugins: [],
};

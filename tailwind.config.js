/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};

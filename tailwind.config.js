/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C23B31",
        secondary: "#F2DCDA",
        acent: "#D99337",
      },
    },
  },
  plugins: [],
};

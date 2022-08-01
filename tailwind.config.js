/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C23B31",
        secondary: "#F2DCDA",
        acent: "#D99337",
        pokemon: {
          bug: "#3B9950",
          dark: "#5A5979",
          dragon: "#61CAD9",
          electric: "#FBFB72",
          fairy: "#EA1369",
          fire: "#F08030",
          fighting: "#EF6138",
          flying: "#93B2C7",
          ghost: "#27CB4F",
          grass: "#7AC74C",
          ground: "#6E491F",
          ice: "#D8F0FA",
          normal: "#A8A878",
          poison: "#9B69D9",
          psychic: "#F81C91",
          rock: "#8B3E21",
          steel: "#42BD94",
          water: "#86A8FC",
        },
      },
    },
  },
  plugins: [],
};

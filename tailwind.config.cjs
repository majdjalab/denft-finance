/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        dimWhite: "#FFF",
        dimYellow: "#FFBF00",
        dimBlue: "rgba(255, 191, 0, 0.1)",
      },
      fontFamily: {
        PlayfairDisplay: ['serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

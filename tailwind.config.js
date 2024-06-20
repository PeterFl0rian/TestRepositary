/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#111011",
        primary: "#0052a4",
        secondary: "#81C784",
        tertiary: "#B0BEC5",
        navbar: "rgba(176,190,197,0.2)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/backgrounds/Hero.jpg')",
      },
    },
  },
  plugins: [],
};
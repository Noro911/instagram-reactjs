/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#ffffff",
          400: "#c5c5c5",
          500: "#888888",
          600: "#3e3e42",
          700: "#2d2d30",
          800: "#252526",
          900: "#1e1e1e",
          950: "#000000",
        },
      },
      margin: {
        center: "0 auto",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

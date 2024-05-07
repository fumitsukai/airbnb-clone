/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      circular: "Circular",
    },
    extend: {
      colors: {
        red: "#FF5A5F",
        green: "#00A699",
        "red-light": "#FC642D",
        "gray-light": "#f7f7f7",
        "gray-dark": "#767676",
        "gray-md": "#ddd",
      },
    },
  },
  plugins: [],
};

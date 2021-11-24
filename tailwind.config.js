const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        rose: colors.rose,
        emerald: colors.emerald,
        black: {
          100: "#383838",
          200: "#2e2e2e",
          300: "#252525",
          400: "#1b1b1b",
          500: "#111111",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', 'sans-serif'],
      },
        colors: {
          dark: "#1b1b1b",
          light: "#1b1b1b",
          primary: "#B63E96", // 240,86,199
          primaryDark: "#58E6D9", // 80,230,217
      },
    },
  },
  plugins: [],
}


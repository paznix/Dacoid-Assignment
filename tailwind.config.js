/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rob: ["Roboto", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
      },
      colors:{
        db: "#95BEFF",
        lb: "#7B91FF",
        fb: "#829DFF",

      },
    },
  },
  plugins: [],
}
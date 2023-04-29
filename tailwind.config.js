/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        xs : "320px"
      },
      colors : {
        main : "#F59E0B"
      },
      fontFamily : {
        "bruno" : "Bruno Ace SC"
      }
    },
  },
  plugins: [],
}
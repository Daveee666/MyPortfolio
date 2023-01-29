/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        freehand:"Freehand",
        script:"Kaushan Script",
      },
      colors:{
        blu:"#223464",
        chead:"#16BAE7 !important"
      }
    },
  },
  plugins: [],
}

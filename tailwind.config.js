/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary:'#3d3c3c',
        bgSecondary:'#1f232e',
        bgTertiary:'#2a2b37',
        txtPrimary:'#cccbce',
        txtSecondary:'#5a5c68',
        brPrimary:'gold'
      }
    },
  },
  plugins: [],
}

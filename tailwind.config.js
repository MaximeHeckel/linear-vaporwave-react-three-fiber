/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: true
  }
}
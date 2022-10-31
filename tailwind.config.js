/** @type {import('tailwindcss').Config} */
module.exports = {
    //...
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [require("daisyui")],
    daisyui: {
      themes: true
    }
  }
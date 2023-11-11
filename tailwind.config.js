/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    variants: {
      extend:{}
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes:[
        'dark',]// default theme
  }
}
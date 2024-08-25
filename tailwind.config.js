/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // './node_modules/preline/preline.js',
     flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'shade-100': '#efefef',
        // Add other shades if needed
      },
      fontFamily:{
        'fontScript': ['Kaushan Script', "sans-serif"],
        'Roboto':['Roboto',"sans-serif"],
        'Anek':["Anek Devanagari","sans-serif"]
      }
    },
    keyframes: {
      bounceSlow: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
    animation: {
      bounceSlow: 'bounceSlow 2s infinite',
    },
  },
  variants: {},
  plugins: [
    // require('preline/plugin'),
    flowbite.plugin(),
  ],
}

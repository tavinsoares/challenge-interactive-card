/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': "375px",
      'lg': "1440px"
    },
    extend: {
      fontFamily: {
        sans: ['grotesk', ...defaultTheme.fontFamily.sans],
     },
    },
    colors: {
      'white': "#ffffff",
      'purple': {
        dark: "#210930"
      },
      'grayish-violet': {
        DEFAULT: '#dedddf',
        dark: '#8e8593',
        'very-dark': '#21092f',
      },
      
      red: '#ff5252',
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'light-blue': '#6448fe',
      'metallic-violet': '#600594'
    })
  },
  plugins: [],
}

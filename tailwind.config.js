/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'black':'#000000',
          'bgLogin':'rgba(0, 0, 0, 0.3)',
          'blueLight':'#002D74',
          'blueLight2':'#002D74',
          'blueBtn':'#002D74',
          'blueHover':'#206ab1',
          'gray':'#D1D5DB',
          'errorColor':'#F14C4C',
          'colorSuccess':'#1E8018',
          'bgLight':'#fffff',
        },
        dark: {
          background: 'rgb(0 0 0 0.6)',
          text: '#ffffff',
        },


      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


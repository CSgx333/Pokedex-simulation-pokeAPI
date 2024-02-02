/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue1': '#2d388a',
        'Blue2': '#00aeef',
        'Pokedex': '#d30a40',
        'Pokedex2': '#93042c',
        'Pokedex3': '#ed5d79',
        'Pokedex4': '#ff2a4e',
        'Blue3' : '#0f92b0',
        'Screen1' : '#51ad60',
        'Screen2' : '#2e6838',
        'Slate' : '#02302d',
        'Yellow1' : '#fbe01d',
        'GPokedex': '#685f62',
        'WPokedex': '#dedede'
      },
      fontFamily: {
        Turret: ['Turret Road']
      }
    },
  },
  plugins: [],
}
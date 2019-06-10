module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#22292f',
      'white': '#ffffff',

      'grey-darkest': '#1e1e1e',
      'grey-darker': '#333',
      'grey-dark': '#777',
      'grey': '#555',
      'grey-light': '#999',
      'grey-lighter': '#e7e7e7',
      'grey-lightest': '#f8f8f8',

      'teal-darker': '#4e707f',
      'teal-dark': '#7297a8',
      'teal': '#7397a7',
      'teal-light': '#acc8d5',
      'teal-lighter': '#cedee6',
      'teal-lightest': '#dee9ef',

      'blue': '#2a8ebd',

      'red-dark': '#cc1f1a',
      'red': '#e3342f',
      'red-light': '#d9534f',
    },
    extend: {
      screens: {
        'sm': '576px',
        'lg': '992px',
        'xl': '1200px'
      },
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'box-shadow': 'box-shadow 0.25s ease-in-out',
        'zoom': 'all 0.25s ease-in-out',
      },
      variants: ['responsive', 'hover'],
    })
  ]
}

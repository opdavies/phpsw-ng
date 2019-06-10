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
    fontFamily: {
      'sans': [
        'Helvetica Neue',
        'sans-serif'
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif'
      ]
    },
    extend: {
      boxShadow: {
        circle: '0 0 10px #ccc'
      },
      screens: {
        sm: '576px',
        lg: '992px',
        xl: '1200px'
      },
      width: {
        '1/7': '14.285%',
        '1/8': '12.5%'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-list-reset')(),

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

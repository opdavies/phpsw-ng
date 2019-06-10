module.exports = {
  theme: {
    extend: {
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

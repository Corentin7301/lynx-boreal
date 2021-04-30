module.exports = {
  purge: [
    './*.html',
    './src/assets/tailwindPerso.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGreen: '#373D20',
        lightGreen: '#717744',
        eggWhite: '#F8F4E3',
        whiteTransparent: 'rgba(248, 244, 227, 0.2)',
      },
      fontFamily: {
        'montserrat': ['montserrat','sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGreen: '#373D20',
        lightGreen: '#717744',
        eggWhite: '#F8F4E3',
        whiteTransparent: 'rgba(248, 244, 227, 0.2)',
      },
      backgroundImage: theme => ({
        'lynxBoreal': "url('https://res.cloudinary.com/corentin7301/image/upload/v1619705946/lynx-boreal/lynx-boreal_pt76il.jpg')",
        'map': "url('https://res.cloudinary.com/corentin7301/image/upload/v1619705946/lynx-boreal/map_ifquei.jpg')",
        'babyLynx': "url('https://res.cloudinary.com/corentin7301/image/upload/v1619705946/lynx-boreal/baby-lynx_dwckv2.jpg')",
        'pisteLynx': "url('https://res.cloudinary.com/corentin7301/image/upload/v1619705946/lynx-boreal/piste-lynx_trkbj4.jpg')",
      }),
      fontFamily: {
        'montserrat': ['montserrat']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

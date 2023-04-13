import { extendTheme, Theme } from "native-base";

export const theme = extendTheme({

  components: {
    Button: {
      defaultProps: {
        colorScheme: 'red',
        _pressed: { bg: 'primary.700' },
      },
    },
  },

  sizes: {
    15: 60,
    22: 88,
  },

  colors: {
    primary: {
      50: '#e8dcff',
      100: '#dac8ff',
      200: '#b894ff',
      300: '#977ed9',
      400: '#7d68b3',
      500: '#62528d',
      600: '#483c67',
      700: '#241e34',
      800: '#191622',
      900: '#0F0D14',
    },
  }
})
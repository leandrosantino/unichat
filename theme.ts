import { extendTheme, Theme } from "native-base";

export const theme = extendTheme({

  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {

      },
      defaultProps: {
        colorScheme: 'red',
        _pressed: { bg: 'primary.700' },


      },
    },
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
      800: '#120f1a',
      900: '#0F0D14',
    },
  }
})
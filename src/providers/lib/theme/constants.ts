import { extendTheme } from 'native-base';
import { Colors } from './colors';

const CustomTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        backgroundColor: Colors.primary[`500`],
      },
      defaultProps: {
        size: 'md',
      },
    },
    Container: {
      baseStyle: {
        padding: 16,
      },
    },
    Box: {
      baseStyle: ({ colorMode }: any) => {
        return {
          backgroundColor: colorMode === 'dark' ?  Colors.bgDark : Colors.bgLight,
          fontWeight: 'normal',
        };
      },
    },
  },
  fontConfig: {
    SpaceMono: {
      100: {
        normal: 'SpaceMono',
      },
      200: {
        normal: 'SpaceMono',
      },
      300: {
        normal: 'SpaceMono',
      },
      400: {
        normal: 'SpaceMono',
      },
      500: {
        normal: 'SpaceMono',
      },
      600: {
        normal: 'SpaceMono',
      },
      700: {
        normal: 'SpaceMono',
      },
      800: {
        normal: 'SpaceMono',
      },
      900: {
        normal: 'SpaceMono',
      },
    },
  },
  fonts: {
    heading: 'SpaceMono',
    body: 'SpaceMono',
    mono: 'SpaceMono',
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
});

export default CustomTheme;

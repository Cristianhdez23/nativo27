import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const SITE_TITLE = 'Nativo 27';

const BLACK = '#000000';
const ROYAL = '#0a2783';
const GREYBLUE = '#63afaf';
const DUCK_EGG_BLUE = '#e7f1fc';
const BROWNISH_GREY = '#5c5c5c';
const WARM_GREY = '#4a4a4a';
const GRAY = '#979797';
const LIGHT_GREY = '#1f0e5c';
const LIGHT_GREY_2 = '#d6d6d6';
const TRANSPARENT_GREY = 'rgba(10, 39, 131, 0.25)';
const WHITE = '#ffffff';
const LIGHT_GREY_3 = '#b3bfd9';

export const PRIMARY_COLOR = ROYAL;
export const SECONDARY_COLOR = GREYBLUE;
export const TEXT_DARK = BROWNISH_GREY;
export const TEXT_DEFAULT = WARM_GREY;
export const TEXT_LIGHT = LIGHT_GREY;
export const TEXT_CAPTION = TRANSPARENT_GREY;
export const BORDER_LIGHT_GRAY = LIGHT_GREY_2;
export const BORDER_GRAY = GRAY;
export const TRANSPARENT = 'transparent';
export const TRANSPARENT_BLACK = 'rgba(0, 0, 0, 0.1)';
export const TRANSPARENT_BLACK_2 = 'rgba(0, 0, 0, 0.73)';
export const TRANSPARENT_BLACK_3 = 'rgba(0, 0, 0, 0.5)';

export const rem = (pixelSize) => `${pixelSize / 16}rem`;

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: PRIMARY_COLOR,
      main: PRIMARY_COLOR,
      dark: PRIMARY_COLOR,
      disabled: TRANSPARENT_BLACK,
      contrastText: WHITE,
      white: WHITE,
      black: BLACK,
      gray: GRAY,
      transparent: TRANSPARENT,
    },
    secondary: {
      light: SECONDARY_COLOR,
      main: SECONDARY_COLOR,
      dark: LIGHT_GREY,
      contrastText: WHITE,
    },
    text: {
      main: TEXT_DEFAULT,
      secondary: TEXT_DARK,
      light: TEXT_LIGHT
    },
    background: {
      main: WHITE,
      default: WHITE,
      card: LIGHT_GREY_3,
      lightBlue: DUCK_EGG_BLUE,
      borderColor: BORDER_GRAY
    },
    lines: {
      main: TRANSPARENT_BLACK,
      dark: TRANSPARENT_BLACK_2,
      light: TRANSPARENT_BLACK_3,
      border: BORDER_LIGHT_GRAY
    }
  },
  typography: {
    fontSize: 13,
    htmlFontSize: 13
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent'
      }
    },
    MuiTypography: {
      body2: {
        // fontFamily: PRIMARY_FONT,
        fontSize: rem(18),
        color: TEXT_DEFAULT
      },
    },
  }
});

export default theme;
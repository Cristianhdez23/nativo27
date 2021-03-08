import { createMuiTheme } from "@material-ui/core/styles";

export const SITE_TITLE = "Nativo 27";

const BLACK = "#000000";
const WHITE = "#ffffff";
const TRANSPARENT = "transparent";

const MAIN_GREEN_DARK = "#304e43";
const MAIN_GREEN_DARK_TWO = "#337b5a";
const MAIN_GREEN_DARK_THREE = "#2f5f32";

const SECONDARY_GREEN_LIGHT = "#528160";
const SECONDARY_GREEN_LIGHT_TWO = "#a1b192";

const MAIN_YELLOW = "#ddc26c";

const MAIN_GRAY = "#919191";
const MAIN_GRAY_TWO = "#8e8e8e";

export const rem = (pixelSize) => `${pixelSize / 16}rem`;

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: MAIN_GREEN_DARK,
      light: SECONDARY_GREEN_LIGHT,
      dark: MAIN_GREEN_DARK_TWO,
      disabled: TRANSPARENT,
      contrastText: MAIN_GRAY_TWO,
      white: WHITE,
      black: BLACK,
      gray: MAIN_GRAY,
      transparent: TRANSPARENT,
    },
    secondary: {
      main: SECONDARY_GREEN_LIGHT,
      light: SECONDARY_GREEN_LIGHT_TWO,
      dark: MAIN_GRAY_TWO,
      contrastText: MAIN_YELLOW,
    },
    text: {
      main: WHITE,
      secondary: MAIN_GRAY,
      light: MAIN_GREEN_DARK,
    },
    background: {
      main: MAIN_GREEN_DARK,
      default: MAIN_GREEN_DARK_TWO,
      card: MAIN_GREEN_DARK_THREE,
    },
    lines: {
      main: MAIN_GREEN_DARK_TWO,
      dark: MAIN_GREEN_DARK_THREE,
      light: SECONDARY_GREEN_LIGHT,
      border: SECONDARY_GREEN_LIGHT_TWO,
    },
  },
  typography: {
    fontSize: 13,
    htmlFontSize: 13,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "transparent",
      },
    },
    MuiTypography: {
      h2: {
        // fontFamily: PRIMARY_FONT,
        fontWeight: "bold",
        fontSize: rem(41),
        color: WHITE,
        position: "relative",
        paddingTop: 15,

        "&:before": {
          content: '""',
          backgroundColor: WHITE,
          width: 35,
          height: 5,
          position: "absolute",
          top: 0,
          left: 0,
        },
      },
      body2: {
        // fontFamily: PRIMARY_FONT,
        fontSize: rem(18),
        color: WHITE,
      },
    },
  },
});

export default theme;

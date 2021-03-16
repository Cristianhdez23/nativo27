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

const MAIN_BACKGROUND = "#fffcf3";
const MAIN_BACKGROUND_TRANSPARENT = "rgba(255,252,243,1)";

const BACKDROP_BACKGROUND = "rgba(0, 0, 0, 0.1)";

const TEXT_PARAGRAPH = "#606060";
const TEXT_PARAGRAPH_TWO = "#c1bfb9";

export const ICON_COLOR = "#c2b56a";

export const PRIMARY_FONT =
  "quiche-display , Roboto, Helvetica, Arial, sansSerif";

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
      light: TEXT_PARAGRAPH,
    },
    background: {
      main: MAIN_BACKGROUND,
      default: MAIN_BACKGROUND,
      card: MAIN_BACKGROUND_TRANSPARENT,
      light: BACKDROP_BACKGROUND,
    },
    lines: {
      main: MAIN_GREEN_DARK_TWO,
      dark: MAIN_GREEN_DARK_THREE,
      light: SECONDARY_GREEN_LIGHT,
      border: TEXT_PARAGRAPH_TWO,
    },
  },
  typography: {
    fontFamily: PRIMARY_FONT,
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
        fontFamily: PRIMARY_FONT,
        fontWeight: "500",
        fontSize: rem(20),
        color: WHITE,
        position: "relative",
        paddingTop: 16,
        paddingBottom: 16,

        "&:before": {
          content: '""',
          backgroundColor: WHITE,
          width: 25,
          height: 3,
          position: "absolute",
          top: 0,
          left: 0,
        },
      },
      h3: {
        fontFamily: PRIMARY_FONT,
        color: WHITE,
        fontSize: rem(20),
        fontWeight: "300",
      },
      // Mainly for <p></p> tags
      body1: {
        fontFamily: PRIMARY_FONT,
        fontSize: rem(14),
        fontWeight: "300",
        color: WHITE,
      },
      body2: {
        fontFamily: PRIMARY_FONT,
        fontSize: rem(18),
        color: WHITE,
      },
    },
  },
});

export default theme;

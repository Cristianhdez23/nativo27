import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  carouselSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("lg")]: {
      margin: "130px 0 0 0",
    },
  },
  carouselSectionBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  // ----||----|| Carousel Styles ||----||----
  carouselBlock: {
    position: "relative",

    "& div:nth-child(2)": {
      border: "1px solid pink",
      display: "flex",
      justifyContent: "flex-start",
      [theme.breakpoints.up("lg")]: {
        right: "50%",
        transform: "translateX(calc(150%))",
        width: "100%",
        maxWidth: 450,
      },
    },

    "& div:nth-child(3)": {
      border: "1px solid green",
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.up("lg")]: {
        left: "50%",
        transform: "translateX(calc(-150%))",
        width: "100%",
        maxWidth: 450,
      },
    },
  },
  carouselItem: {
    border: "1px solid red",
    display: "flex",
    margin: "auto",
    height: 650,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 450,
    },
  },
  indicatorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "auto",
    margin: 0,
    zIndex: 11,
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      maxWidth: 450,
      transform: "translateX(calc(-50% - 37.5px))",
    },
  },
  indicatorIcon: {
    cursor: "pointer",
    color: "#2f5f32",
    fontSize: 25,
    "&:hover": {
      color: theme.palette.secondary.contrastText,
    },
  },
  indicatorIconGeneralStyle: {
    "&:hover": {
      background: theme.palette.primary.transparent,
    },
  },
  indicatorIconActive: {
    "& > span > svg": {
      color: theme.palette.secondary.contrastText,
    },
  },
  // ----||----|| Text Styles ||----||----
  paragraphBlock: {
    margin: "45px 15px 0 15px",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      marginTop: 0,
      height: 550,
    },
  },
  paragraphBlockToRight: {
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
      marginLeft: 30,
      "& > p": {
        paddingLeft: "20%",
        "&:before": {
          height: "50%",
        },
      },
    },
  },
  watermarkBlock: {
    position: "absolute",
    bottom: -45,
    width: 150,
    height: 150,
    [theme.breakpoints.up("lg")]: {
      width: 250,
      height: 250,
    },
  },
  watermarkRight: {
    right: -30,
  },
  watermark: {
    backgroundColor: theme.palette.background.main,
  },
  paragraph: {
    boxSizing: "border-box",
    position: "relative",
    textAlign: "justify",
    color: theme.palette.text.light,
    paddingLeft: "12%",
    letterSpacing: 2,
    lineHeight: "28px",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      width: 5,
      height: "35%",
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(16),
    },
  },
  // ----||----|| Disclaimer Styles ||----||----
  disclaimer: {
    display: "flex",
    margin: "10px auto 0 auto",
    color: theme.palette.lines.border,
    letterSpacing: "1px",
    fontSize: rem(6),
    [theme.breakpoints.up("lg")]: {
      maxWidth: 450,
      fontSize: rem(8),
    },
  },
  navButtons: {
    border: "1px solid red",
    backgroundColor: `${theme.palette.primary.transparent} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.transparent} !important`,
    },
  },
  NextIcon: {
    height: 69,
    width: 69,
  },
  PreviousIcon: {
    height: 69,
    width: 69,
  },
  nextArrowIcon: {
    transform: "rotate(90deg)",
    fill: theme.palette.primary.dark,
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(65),
    },
  },
  previousArrowIcon: {
    transform: "rotate(270deg)",
    fill: theme.palette.primary.dark,
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(65),
    },
  },
}));

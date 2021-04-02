import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  carouselSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("md")]: {
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
      display: "flex",
      justifyContent: "flex-start",
      maxWidth: 205,
      right: "50%",
      transform: "translateX(calc(150%))",
      width: "100%",
      zIndex: 1,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 470,
      },
    },

    "& div:nth-child(3)": {
      display: "flex",
      justifyContent: "flex-end",
      maxWidth: 205,
      left: "50%",
      transform: "translateX(calc(-150%))",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 450,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: 470,
      },
    },
  },
  carouselItem: {
    display: "flex",
    margin: "auto",
    height: 335,
    width: "100%",
    maxWidth: 240,
    [theme.breakpoints.up("sm")]: {
      height: 600,
      maxWidth: 400,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 450,
    },
    [theme.breakpoints.up("lg")]: {
      height: 600,
      maxWidth: 470,
    },
  },
  indicatorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "100%",
    margin: 0,
    zIndex: 11,
    maxWidth: 240,
    transform: "translateX(calc(-50% - 22.5px))",
    [theme.breakpoints.up("sm")]: {
      transform: "translateX(calc(-50% - 37.5px))",
      maxWidth: 400,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 450,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 470,
    },
  },
  indicatorIcon: {
    cursor: "pointer",
    color: "#2f5f32",
    fontSize: 15,
    "&:hover": {
      color: theme.palette.secondary.contrastText,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 25,
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
      width: 3,
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
    color: theme.palette.text.light,
    letterSpacing: "0.5px",
    textAlign: 'justify',
    fontSize: rem(8),
    maxWidth: 240,
    [theme.breakpoints.up("sm")]: {
      letterSpacing: "1px",
      fontSize: rem(10),
      maxWidth: 400,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 450,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 480,
    },
  },
  navButtons: {
    backgroundColor: `${theme.palette.primary.transparent} !important`,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.transparent} !important`,
    },
  },
  NextIcon: {
    height: 40,
    width: 40,
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      margin: "initial",
      height: 69,
      width: 69,
    },
  },
  PreviousIcon: {
    height: 40,
    width: 40,
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      margin: "initial",
      height: 69,
      width: 69,
    },
  },
  nextArrowIcon: {
    transform: "rotate(90deg)",
    fill: theme.palette.primary.dark,
    fontSize: rem(40),
    [theme.breakpoints.up("sm")]: {
      fontSize: rem(45),
    },
  },
  previousArrowIcon: {
    transform: "rotate(270deg)",
    fill: theme.palette.primary.dark,
    fontSize: rem(40),
    [theme.breakpoints.up("sm")]: {
      fontSize: rem(45),
    },
  },
}));

import { makeStyles } from "@material-ui/styles";
import { rem, PRIMARY_FONT } from "../../constants/constants";

export default makeStyles((theme) => ({
  CarouselBanner: {
    width: "100%",
    minWidth: "100%",
    backgroundColor: theme.palette.background.main,
    position: "relative",
  },
  imageContainer: {
    height: "100vh",
    width: "100%",
    minHeight: "100vh",
    minWidth: "100%",
    position: "relative",
  },
  imageBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.light,
  },
  //
  carouselBlock: {
    position: "relative",
    height: "100%",
  },
  carouselItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  indicatorIconTemplate: {
    width: 100,
    height: 40,
    "&:before": {
      content: '""',
      backgroundColor: theme.palette.primary.gray,
      width: 25,
      height: 4,
      position: "absolute",
      top: 7.5,
      left: 35,
    },
    "&:hover": {
      "&:before": {
        content: '""',
        backgroundColor: theme.palette.primary.white,
      },
    },
    [theme.breakpoints.up("sm")]: {
      width: 150,
      height: 55,
    },
    [theme.breakpoints.up("md")]: {
      width: 150,
      height: 42,
    },
    [theme.breakpoints.up("lg")]: {
      width: 150,
      height: 55,
    },
  },
  indicatorContainer: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-start",
    "& > button:nth-child(1)": {
      "&:before": {
        content: '"01"',
        position: "absolute",
        top: 0,
        left: 0,
      },
      "&:after": {
        content: '"Naturaleza"',
        position: "absolute",
        bottom: 0,
        left: 0,
      },
    },
    "& > button:nth-child(2)": {
      "&:before": {
        content: '"02"',
        position: "absolute",
        top: 0,
        left: 0,
      },
      "&:after": {
        content: '"Arquitectura"',
        position: "absolute",
        bottom: 0,
        left: 0,
      },
    },
    "& > button:nth-child(3)": {
      "&:before": {
        content: '"03"',
        position: "absolute",
        top: 0,
        left: 0,
      },
      "&:after": {
        content: '"Cerritos"',
        position: "absolute",
        bottom: 0,
        left: 0,
      },
    },
  },
  indicatorIconGeneralStyle: {
    fontFamily: PRIMARY_FONT,
    fontSize: rem(14),
    fontWeight: 300,
    letterSpacing: "1px",
    color: theme.palette.primary.gray,
    position: "relative",
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 0,
    "&:hover": {
      color: theme.palette.primary.white,
      "& > span > span": {
        "&:before": {
          content: '""',
          backgroundColor: theme.palette.primary.white,
        },
      },
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: rem(16),
      marginLeft: 30,
      marginBottom: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(21),
      marginLeft: 60,
      marginBottom: 60,
    }
  },
  indicatorIconActive: {
    color: theme.palette.primary.white,
    "& > span > span": {
      "&:before": {
        content: '""',
        backgroundColor: theme.palette.primary.white,
      },
    },
  },
  //
  informationBlock: {
    margin: "20px 20px 0 20px",
    padding: "35px 45px",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      height: 220,
      zIndex: 2,
      position: "absolute",
      bottom: 0,
      right: 0,
      margin: 0,
      transform: "translateY(25%)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      height: 220,
      zIndex: 2,
      position: "absolute",
      bottom: 0,
      right: 0,
      margin: 0,
      transform: "translateY(25%)",
    },
    "&.primary": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.secondary": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&.tertiary": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  dataBlock:{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageTitle: {
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(25),
    },
  },
  imageParagraph: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 250,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(18),
      maxWidth: 570,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "initial",
    },
  },
}));

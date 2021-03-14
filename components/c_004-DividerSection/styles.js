import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  dividerSection: {
    height: 300,
    width: "100%",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      marginTop: 130,
      height: 360,
    },
  },
  dividerTextBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "100%",
    overflow: "hidden",
    "&.primary": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.secondary": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&.tertiary": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&.fourth": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  hoja: {
    position: "absolute",
    width: 150,
    height: 150,
    [theme.breakpoints.up("lg")]: {
      width: 250,
      height: 250,
    },
    "&.tertiary": {
      height: 175,
      [theme.breakpoints.up("lg")]: {
        height: 285,
      },
    },
  },
  hojaLeft: {
    top: -10,
    left: -20,
    transform: "rotate(180deg)",
    [theme.breakpoints.up("lg")]: {
      top: -15,
      left: -35,
    },
    "&.tertiary": {
      top: -40,
      left: "calc(100% - 120px)",
      [theme.breakpoints.up("lg")]: {
        top: -65,
        left: "calc(100% - 205px)",
      },
    },
  },
  hojaRight: {
    bottom: -10,
    right: -20,
    [theme.breakpoints.up("lg")]: {
      bottom: -15,
      right: -35,
    },
    "&.tertiary": {
      bottom: -40,
      right: "calc(100% - 120px)",
      [theme.breakpoints.up("lg")]: {
        bottom: -65,
        right: "calc(100% - 205px)",
      },
    },
  },
  dataSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerData: {
    zIndex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: "5px",
    padding: "0 5px",
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(35),
    },
    "&.primary": {
      maxWidth: "initial",
      "&-description": {
        maxWidth: 330,
        [theme.breakpoints.up("sm")]: {
          maxWidth: 425,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 650,
        },
      },
      
    },
    "&.secondary": {
      maxWidth: 365,
      "&-description": {
        maxWidth: 275,
        [theme.breakpoints.up("sm")]: {
          maxWidth: 500,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 700,
        },
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 'initial',
      },
    },
    "&.tertiary": {
      maxWidth: "initial",
      "&-description": {
        maxWidth: "initial",
        [theme.breakpoints.up("lg")]: {
          maxWidth: 1000,
        },
      },
    },
    "&.fourth": {
      maxWidth: 320,
      "&-description": {
        maxWidth: 330,
        [theme.breakpoints.up("sm")]: {
          maxWidth: 500,
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: 700,
        },
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: 'initial',
      },
    },
  },
  dividerDataTitle: {
    fontWeight: "bold",
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
}));

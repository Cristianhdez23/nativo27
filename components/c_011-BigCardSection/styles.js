import { makeStyles } from "@material-ui/styles";
import { rem, BACKDROP_BACKGROUND_TWO } from "../../constants/constants";

export default makeStyles((theme) => ({
  Footer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
    margin: "45px 20px 0 20px",
    [theme.breakpoints.up("lg")]: {
      height: "90vh",
      flexDirection: "row",
      margin: "130px 0 0 0",
    },
  },
  imageSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    boxSizing: "border-box",
    [theme.breakpoints.up("lg")]: {
      height: "90vh",
      width: "calc(100% / 3)",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "pink",
      },
    },
  },
  imgContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  firstImage: {
    marginRight: 3,
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        zIndex: 2,
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        width: 0,
        height: "100%",
        background: theme.palette.primary.gray,
        transition: "width .3s ease-in",
      },
      "&:hover": {
        "&:after": {
          width: "100%",
          transition: "width .3s ease-out",
        },
      },
    },
  },
  secondImage: {
    margin: "0 3px",
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        zIndex: 2,
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        width: 0,
        height: "100%",
        background: theme.palette.primary.light,
        transition: "width .3s ease-in",
      },
      "&:hover": {
        "&:after": {
          width: "100%",
          transition: "width .3s ease-out",
        },
      },
    },
  },
  thirdIimage: {
    marginLeft: 3,
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        zIndex: 2,
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        width: 0,
        height: "100%",
        background: theme.palette.primary.main,
        transition: "width .3s ease-in",
      },
      "&:hover": {
        "&:after": {
          width: "100%",
          transition: "width .3s ease-out",
        },
      },
    },
  },
  ImageText: {
    position: "absolute",
    textTransform: "uppercase",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    fontSize: rem(35),
    zIndex: 12,
    "& > span": {
      height: 22,
      fontWeight: 400,
      fontSize: rem(26),
    },
  },
  firsText: {
    letterSpacing: "7px",
    "& > span": {
      letterSpacing: "3.5px",
    },
  },
  secondText: {
    letterSpacing: "7px",
    "& > span": {
      letterSpacing: "2px",
    },
  },
  thridText: {
    letterSpacing: "8px",
    "& > span": {
      letterSpacing: "2.5px",
    },
  },
}));

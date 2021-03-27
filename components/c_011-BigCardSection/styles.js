import { makeStyles } from "@material-ui/styles";
import { rem, BACKDROP_BACKGROUND_TWO } from "../../constants/constants";

export default makeStyles((theme) => ({
  BigCardSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
    margin: "45px 20px 0 20px",
    [theme.breakpoints.up("md")]: {
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
    height: 180,
    width: "100%",
    marginBottom: 3,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      height: "90vh",
      width: "calc(100% / 3)",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "pink",
      },
    },
  },
  imgContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  firstImage: {
    [theme.breakpoints.up("md")]: {
      marginRight: 3,
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
    [theme.breakpoints.up("md")]: {
      margin: "0 3px",
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
    [theme.breakpoints.up("md")]: {
      marginLeft: 3,
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
    fontSize: rem(24),
    zIndex: 12,
    "& > span": {
      height: 22,
      fontWeight: 400,
      fontSize: rem(19),
    },
    [theme.breakpoints.up("md")]: {
      fontSize: rem(35),
      "& > span": {
        fontSize: rem(26),
      },
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

import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  ImageBanner: {
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
  informationBlock: {
    margin: '20px 20px 0 20px',
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

import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  GridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageRight: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
    },
  },
  ImageSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("md")]: {
      margin: "130px 0 0 0",
    },
  },
  imageBlock: {
    margin: "0 15px",
    height: 266,
    [theme.breakpoints.up("lg")]: {
      height: 550,
      maxWidth: 550,
      margin: "0 auto",
    },
  },
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
  paragraphBlockToLeft: {
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      marginLeft: 0,
      "& > p": {
        paddingLeft: 0,
        paddingRight: "20%",
        "&:before": {
          left: "99.5%",
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
  watermarkLeft: {
    left: -30,
    [theme.breakpoints.up("lg")]: {
      top: 0,
    },
  },
  watermark: {
    backgroundColor: theme.palette.background.main,
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    position: "relative",
    color: theme.palette.text.light,
    paddingLeft: "12%",
    fontWeight: 400,
    lineHeight: "20px",
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
      lineHeight: "25px",
    },
  },
  paragraphisImageToRight: {
    display: "block",
    textAlign: "right",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 0,
      paddingRight: "12%",
      "&:after": {
        height: 0,
      },
    },
    "&:before": {
      height: 0,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: 3,
      height: "35%",
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        height: 0,
      }
    },
  },
  secondaryTitle: {
    display: "block",
  },
  paragraphTitle: {
    fontWeight: "bold",
  },
}));

import { makeStyles } from "@material-ui/styles";
import { rem, BACKDROP_BACKGROUND_TWO } from "../../constants/constants";

export default makeStyles((theme) => ({
  ImageGridSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
    margin: "45px 20px 0 20px",
    [theme.breakpoints.up("md")]: {
      margin: "150px 0 0 0",
    },
  },
  title: {
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.gray,
    fontWeight: 500,
    letterSpacing: 3,
    fontSize: rem(14),
    [theme.breakpoints.up("md")]: {
      height: 20,
      fontSize: rem(16),
      "&:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        right: -95,
        transform: "translateY(-50%)",
        width: 85,
        height: 3,
        background: theme.palette.primary.main,
        transition: "width .3s",
      },
      "&:before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: -95,
        transform: "translateY(-50%)",
        width: 85,
        height: 3,
        background: theme.palette.primary.main,
        transition: "width .3s",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        content: '""',
        width: 195,
        right: -205,
      },
      "&:before": {
        content: '""',
        width: 195,
        left: -205,
      },
    },
  },
  GeneralImagesGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingLeft: 20,
    paddingRight: 20,
  },
  FirstGeneralImagesGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: 80,
    },
    "@media only screen and (max-width: 1193px) and (min-width: 960px)": {
      marginTop: 30,
    },
  },
  ImagesContainer: {
    cursor: "pointer",
    order: 1,
    maxWidth: 500,
    maxHeight: 500,
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
      marginTop: 0,
      marginBottom: 0,
      marginRight: 5,
      maxWidth: 460,
      maxHeight: 460,
      "& > div > img": {
        transition: "transform .5s ease !important",
      },
      "&:hover": {
        "& > div > img": {
          transform: "scale(1.2)",
        },
      },
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 5,
      maxWidth: 610,
      maxHeight: 610,
    },
    "@media only screen and (max-width: 1193px) and (min-width: 960px)": {
      marginRight: 0,
      marginTop: 5,
      marginBottom: 5,
    },
  },

  SecondImagesContainer: {
    order: 2,
    maxWidth: 500,
    maxHeight: 500,
    [theme.breakpoints.up("md")]: {
      order: 1,
      maxWidth: 470,
      maxHeight: 470,
    },
    "@media only screen and (max-width: 1193px) and (min-width: 960px)": {
      order: 2,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 620,
      maxHeight: 620,
    },
  },
  MiniImagesContainer: {
    [theme.breakpoints.down("sm")]: {
      "& > div:nth-of-type(even)": {
        paddingLeft: 5,
      },
      "& > div:nth-of-type(odd)": {
        paddingRight: 5,
      },
      "& > div:nth-child(1),  div:nth-child(2) ": {
        paddingBottom: 10,
      },
    },
  },
  takenBy: {
    fontSize: rem(10),
    color: theme.palette.text.light,
    textAlign: "end",
    letterSpacing: 1,
    [theme.breakpoints.up("md")]: {
      fontSize: rem(12),
    },
  },
  auxBox: {
    margin: 0,
  },
  paragraph: {
    color: theme.palette.text.light,
    textAlign: "center",
    fontWeight: 300,
    marginTop: 20,
    fontSize: rem(14),
    letterSpacing: 1,
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
      fontSize: rem(18),
    },
  },
}));

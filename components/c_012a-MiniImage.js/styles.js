import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  secondImage: {
    boxSizing: "border-box",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
      paddingBottom: 0,
      maxWidth: 225,
      maxHeight: 225,
      margin: 5,
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
      margin: 5,
      maxWidth: 300,
      maxHeight: 300,
      height: 700,
    },
  },
  imageSecondBlock: {
    [theme.breakpoints.up("md")]: {
      margin: "5px 10px 5px 0",
    },
    "@media only screen and (max-width: 1193px) and (min-width: 960px)": {
      margin: 5,
    },
    [theme.breakpoints.up("xl")]: {
      margin: "5px 10px 5px 0",
    },
  },
}));

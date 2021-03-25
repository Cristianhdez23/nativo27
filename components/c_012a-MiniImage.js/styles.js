import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  secondImage: {
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      maxWidth: 250,
      maxHeight: 250,
      // //TODO: DELETE THIS STATIC HEIGHT
      height: 600,
      margin: 5,
    },
    [theme.breakpoints.up("xl")]: {
      margin: 5,
      maxWidth: 300,
      maxHeight: 300,
      height: 700,
    },
  },
  imageSecondBlock: {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      margin: "5px 10px 5px 0",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "5px 10px 5px 0",
    },
  },
}));

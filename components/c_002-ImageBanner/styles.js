import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  ImageBanner: {
    width: "100%",
    minWidth: "100%",
    backgroundColor: theme.palette.background.main,
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
    backgroundColor: theme.palette.primary.main,
    margin: 15,
    padding: "25px 34px",
  },
  imageParagraph: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: 250,
    },
  },
}));

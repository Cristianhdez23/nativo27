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
    [theme.breakpoints.up("lg")]: {
      margin: "150px 0 0 0",
    },
  },
  title: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.gray,
    fontWeight: 500,
    letterSpacing: 3,
    fontSize: rem(16),
    // "&:after": {
    //   content: '""',
    //   backgroundColor: theme.palette.primary.main,
    //   width: "65%",
    //   height: 4,
    //   position: "absolute",
    //   top: "50%",
    //   left: "-70%",
    //   transform: "translateY(-50%)",
    // },
    // "&:before": {
    //   content: '""',
    //   backgroundColor: theme.palette.primary.main,
    //   width: "65%",
    //   height: 4,
    //   position: "absolute",
    //   top: "50%",
    //   right: "-70%",
    //   transform: "translateY(-50%)",
    // },
  },
  GeneralImagesGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  FirstGeneralImagesGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: 100,
    },
  },
  ImagesContainer: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("md")]: {
      marginRight: 5,
      maxWidth: 510,
      maxHeight: 510,
      // //TODO: DELETE THIS STATIC HEIGHT
      height: 700,
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: 5,
      maxWidth: 610,
      maxHeight: 610,
    },
  },

  SecondImagesContainer: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 520,
      maxHeight: 520,
      height: 700,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 620,
      maxHeight: 620,
    },
  },
}));

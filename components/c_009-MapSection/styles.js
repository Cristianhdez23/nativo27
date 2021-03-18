import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  MapSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("lg")]: {
      margin: "130px 0 0 0",
    },
  },
  mapSectionBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  // ----||----|| Map Styles ||----||----

  // ----||----|| Text Styles ||----||----
  paragraphBlock: {
    margin: "0 15px",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      marginTop: 0,
    },
  },
  paragraphBlockToRight: {
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
      marginLeft: 30,
    },
  },
  watermarkBlock: {
    position: "absolute",
    top: -45,
    width: 150,
    height: 150,
    [theme.breakpoints.up("lg")]: {
      top: '-100%',
      width: 250,
      height: 250,
    },
  },
  watermarkRight: {
    right: -30,
  },
  watermark: {
    backgroundColor: theme.palette.background.main,
  },
  paragraphTitle: {
    fontSize: rem(20),
    maxWidth: 300,
    textAlign: "left",
    fontWeight: 400,
    padding: "20px 0 17px 0",
    "&:before": {
      content: '""',
      backgroundColor: theme.palette.primary.main,
      width: 30,
      height: 3,
      position: "absolute",
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 400,
      fontSize: rem(26),
    },
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    position: "relative",
    textAlign: "justify",
    color: theme.palette.text.light,
    letterSpacing: 1,
    lineHeight: "28px",
    fontWeight: 400,
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(16),
      fontWeight: 300,
    },
  },
  mapBlock: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  mapContainer: {
    margin: "60px 15px 0 15px",
    height: 300,
    [theme.breakpoints.up("lg")]: {
      height: 550,
      maxWidth: 600,
      margin: "0 auto",
    },
  },
}));

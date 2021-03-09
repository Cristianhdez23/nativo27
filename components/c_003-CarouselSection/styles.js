import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  // ----||----|| Carousel Styles ||----||----
  carouselSection: {
    boxSizing: "border-box",
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.primary.transparent,
    padding: "200px 0",
    [theme.breakpoints.up("md")]: {
      padding: "150px 0",
    },
  },
  carouselSectionBlock: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  textToLeft: {
    flexDirection: "row-reverse",
  },
  carouselBlock: {
    position: "relative",
  },
  carouselItem: {
    display: "flex",
    margin: "auto",
    height: 750,
    width: "89%",
  },
  indicatorContainer: {
    margin: 0,
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "89%",
    transform: "translateX(calc(-50% - 35px))",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 11,
  },
  indicatorIcon: {
    cursor: "pointer",
    color: "#2f5f32",
    fontSize: 25,
    "&:hover": {
      color: theme.palette.secondary.contrastText,
    },
  },
  indicatorIconGeneralStyle: {
    "&:hover": {
      background: theme.palette.primary.transparent,
    },
  },
  indicatorIconActive: {
    "& > span > svg": {
      color: theme.palette.secondary.contrastText,
    },
  },
  // ----||----|| Text Styles ||----||----
  informationBlock: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 750,
    width: "80%",
  },
  informationBlockToLeft: {
    marginLeft: "0",
    marginRight: "auto",

    "&:before": {
      content: '""',
      backgroundColor: "#337b5a",
      width: 5,
      height: 150,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: 0,
    },
  },
  informationBlockToRight: {
    marginLeft: "auto",
    marginRight: "0",

    "&:before": {
      content: '""',
      backgroundColor: "#337b5a",
      width: 5,
      height: 150,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
    },
  },
}));

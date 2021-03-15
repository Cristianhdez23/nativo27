import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  TabsSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("lg")]: {
      margin: "130px 0 0 0",
    },
  },
  tabsBlock: {
    "& > div > div > button:not(:first-child):not(:last-child)": {
      "&:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        width: 2,
        height: 20,
        backgroundColor: theme.palette.primary.dark,
      },
      "&:before": {
        content: '""',
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        width: 2,
        height: 20,
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  indicatorTab: {
    display: "none",
  },
  Tab: {
    fontWeight: "bold",
    letterSpacing: "1px",
    color: theme.palette.primary.gray,
    fontSize: rem(15),
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(18),
    },
  },
  selectedTab: {
    color: theme.palette.primary.dark,
  },
  tabData: {
    marginTop: 20,
    [theme.breakpoints.up("lg")]: {
      marginTop: 50,
    },
  },
  GridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  informationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    order: 2,
    marginTop: 30,
    [theme.breakpoints.up("lg")]: {
      marginTop: 0,
      order: 1,
    },
  },
  imageContainer: {
    order: 1,
    [theme.breakpoints.up("lg")]: {
      order: 2,
    },
  },
  imageBlock: {
    margin: "0 15px",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: 350,
      maxWidth: 350,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
      maxWidth: 500,
      margin: "0 auto",
    },
  },
  disclaimer: {
    display: "flex",
    margin: "5px 15px 0 15px",
    color: theme.palette.lines.border,
    letterSpacing: "0.5px",
    textAlign: "justify",
    fontSize: rem(8),
    [theme.breakpoints.up("sm")]: {
      margin: "5px auto 0 auto",
      letterSpacing: "1px",
      fontSize: rem(9),
      maxWidth: 350,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 500,
    },
  },
  TabTitle: {
    textTransform: "uppercase",
    color: theme.palette.lines.dark,
    fontWeight: "bold",
    fontSize: rem(23),
    letterSpacing: "3px",
    position: "relative",
    paddingBottom: 20,
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(calc(-50%))",
      width: "70%",
      height: 4,
      background: theme.palette.lines.dark,
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: 35,
      fontSize: rem(35),
    },
  },
  TabDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.gray,
    fontWeight: "bold",
    fontSize: rem(23),
    letterSpacing: "3px",
    paddingTop: 20,
    [theme.breakpoints.up("lg")]: {
      fontSize: rem(35),
      paddingTop: 35,
    },
  },
}));

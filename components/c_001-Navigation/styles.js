import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  // ----||----|| Desktop Navbar Styles ||----||----
  appBar: {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 1300,
    width: "100vw",
    boxShadow: 'none'
  },
  toolbar: {
    flexWrap: "wrap",
    backgroundColor: theme.palette.primary.transparent,
    transition: theme.transitions.create(["padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // TODO: ADJUST HEIGHT
    height: 100,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
  },
  // ----||----|| Desktop Navbar Logo Styles ||----||----
  headerLogo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& img": {
      transition: "all 1s ease-in-out",
      width: 114,
    },
    [theme.breakpoints.up("lg")]: {
      "& img": {
        // width: 190,
      },
    },
  },
  // ----||----|| Desktop Navbar List Styles ||----||----
  desktopNavBlock: {
    display: "flex",
    alignItems: "center",
  },
  desktopNav: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  },
  desktopNavItemsList: {
    display: "flex",
    padding: 0,
    "& > a": {
      flexShrink: 0,
      width: "auto",
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
  // ----||----|| Desktop Navbar Items Styles ||----||----
  drawerLink: {
    textDecoration: "none",
    color: theme.palette.primary.white,
    display: "block",
    maxWidth: 190,
    margin: "auto auto 20px auto",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textTransform: "uppercase",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "auto",
      marginRight: 39,
      maxWidth: "auto",
      textAlign: "start",
    },
    "& > span": {
      fontWeight: 500,
      color: "inherit",
    },
    "&:after": {
      content: '""',
      display: "block",
      width: 0,
      height: 2,
      background: theme.palette.primary.white,
      transition: "width .3s",
    },
    "&:hover": {
      background: theme.palette.background.card,
      color: theme.palette.text.light,
      borderRadius: 7,
      [theme.breakpoints.up("lg")]: {
        background: "none",
        borderRadius: "none",
        color: theme.palette.primary.white,
        "&:after": {
          width: "100%",
        },
      },
    },
  },
  activeLink: {
    background: theme.palette.background.card,
    color: theme.palette.text.light,
    borderRadius: 7,
    [theme.breakpoints.up("lg")]: {
      background: "none",
      borderRadius: "none",
      color: theme.palette.primary.white,
      "&:after": {
        width: "100%",
      },
    },
  },
  // ----||----|| Mobile SwipeableDrawer Styles ||----||----
  mobileNav: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  menuMobileButton: {
    borderRadius: 0,
    padding: 0,
    color: theme.palette.primary.white,
  },
  drawerMobileClose: {
    background: "rgba(0, 0, 0, 0.9)",
    width: "100%",
  },
  closeIconBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 31px",
    ...theme.mixins.toolbar,
    height: 85,
    marginBottom: 85,
    [theme.breakpoints.up("md")]: {
      height: 95,
    },
    "& > button": {
      color: theme.palette.primary.white,
    },
  },
}));

import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  // ----||----|| Desktop Navbar Styles ||----||----
  appBar: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    zIndex: 1300,
    boxShadow: "none",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.primary.transparent,
    },
  },
  toolbar: {
    height: 56,
    flexWrap: "wrap",
    paddingLeft: 12,
    paddingRight: 12,
    transition: theme.transitions.create(["padding"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("lg")]: {
      height: 80,
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
  toolbarDataBlock: {
    height: "100%",
  },
  // ----||----|| Desktop Navbar Logo Styles ||----||----
  headerLogo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    maxHeight: 56,
    "& img": {
      height: "auto",
      maxHeight: 56,
      transition: "all 1s ease-in-out",
      width: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      maxHeight: 80,
      "& img": {
        maxHeight: 75,
      },
    },
  },
  // ----||----|| Desktop Navbar List Styles ||----||----
  desktopNavBlock: {
    display: "flex",
    alignItems: "center",
  },
  desktopNav: {
    display: "none",
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
        marginRight: 0,
      },
    },
  },
  // ----||----|| Desktop Navbar Items Styles ||----||----
  drawerLink: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    "& > span": {
      fontWeight: 500,
      color: "inherit",
    },
    "&:after": {
      content: '""',
      display: "block",
      width: 0,
      height: 2,
      background: theme.palette.primary.main,
      transition: "width .3s",
    },
    "&:hover": {
      color: theme.palette.primary.main,
      background: "none",
      "&:after": {
        width: "100%",
      },
    },
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.primary.white,
      marginRight: 39,
      "&:after": {
        background: theme.palette.primary.white,
      },
      "&:hover": {
        color: theme.palette.primary.white,
      },
    },
  },
  activeLink: {
    background: "none",
    color: theme.palette.primary.main,
    "&:after": {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      color: theme.palette.primary.white,
    },
  },
  // ----||----|| Mobile SwipeableDrawer Styles ||----||----
  mobileLogoBlock: {
    height: 56,
  },
  mobileNav: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row-reverse",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  mobileNavItemsList: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    "& > a": {
      flexShrink: 0,
      width: "auto",
      display: "table",
      margin: "0 auto 30px auto",
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
  menuMobileButton: {
    borderRadius: 0,
    padding: 0,
    color: theme.palette.primary.main,
    "& > span > svg": {
      fontSize: 35,
    },
  },
  drawerMobileClose: {
    background: theme.palette.background.card,
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
  },
  logoDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  logoMobile: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  // ----||----|| Scrolling Styles ||----||----
  scrolling: {
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.main,
  },
  drawerLinkScrolling: {
    color: theme.palette.primary.main,
    marginRight: 39,
    "&:after": {
      background: theme.palette.primary.main,
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

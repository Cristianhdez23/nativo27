import React, { useEffect } from "react";
import Link from "next/link";
import {
  Grid,
  Hidden,
  Toolbar,
  AppBar,
  IconButton,
  SwipeableDrawer,
  List,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons";
import { SITE_TITLE } from "../../constants/constants";
import { NAV_ITEMS } from "./data/navItems";
import ActiveLink from "./ActiveLink";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [shadow, setShadow] = React.useState(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getBodyScrollTop = () => {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (getBodyScrollTop() > 30) {
        setShadow(1);
      } else {
        setShadow(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollInLgScreen = shadow === 1 && isLargeScreen;

  const navMenuList = NAV_ITEMS.map(({ id, slug, title }) => {
    return (
      <ActiveLink key={id} href={slug} activeClassName={classes.activeLink}>
        <a
          className={`${classes.drawerLink} ${
            scrollInLgScreen ? classes.drawerLinkScrolling : ""
          }`}
        >
          <Typography variant="body2" component="span">
            {title}
          </Typography>
        </a>
      </ActiveLink>
    );
  });
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={shadow}
        className={`${classes.appBar} ${
          scrollInLgScreen ? classes.scrolling : ""
        }`}
      >
        <Toolbar className={`${classes.toolbar}`}>
          <Grid container className={`${classes.toolbarDataBlock}`}>
            <Grid item xs={8} md={3}>
              <Link href="/">
                <a className={classes.headerLogo}>
                  {isLargeScreen && (
                    <img
                      className={classes.logo}
                      src={
                        shadow === 0
                          ? `/photos/logo/logo_nativo27-white.svg`
                          : `/photos/logo/logo_nativo27-green.svg`
                      }
                      alt={SITE_TITLE}
                    />
                  )}
                  {!isLargeScreen && (
                    <img
                      className={classes.logo}
                      src="/photos/logo/logo_nativo27-green.svg"
                      alt={SITE_TITLE}
                    />
                  )}
                </a>
              </Link>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={9} className={classes.desktopNavBlock}>
                <nav className={classes.desktopNav}>
                  <List className={classes.desktopNavItemsList}>
                    {navMenuList}
                  </List>
                </nav>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <div className={classes.mobileNav}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={classes.menuMobileButton}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        classes={{
          paper: classes.drawerMobileClose,
        }}
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        onClick={handleDrawerClose}
      >
        <div className={classes.closeIconBlock}>
          <Grid container className={classes.mobileLogoBlock}>
            <Grid item xs={8} md={3}>
              <Link href="/">
                <a className={classes.headerLogo}>
                  <img
                    src="/photos/logo/logo_nativo27-green.svg"
                    alt={SITE_TITLE}
                  />
                </a>
              </Link>
            </Grid>
          </Grid>
          <IconButton
            className={classes.menuMobileButton}
            onClick={handleDrawerClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <List className={classes.mobileNavItemsList}>{navMenuList}</List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Navigation;

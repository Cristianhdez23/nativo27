import React from "react";
import Link from "next/link";
import {
  Grid,
  Hidden,
  Toolbar,
  AppBar,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  Typography,
} from "@material-ui/core";
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons";
import { SITE_TITLE } from "../../constants/constants";
import { NAV_ITEMS } from "./navItems";
import ActiveLink from "./ActiveLink";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navMenuList = NAV_ITEMS.map(({ id, slug, title }) => {
    return (
      <ActiveLink key={id} href={slug} activeClassName={classes.activeLink}>
        <a className={`${classes.drawerLink}`}>
          <Typography variant="body2" component="span">
            {title}
          </Typography>
        </a>
      </ActiveLink>
    );
  });

  return (
    <React.Fragment>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={`${classes.toolbar}`}>
          <Grid container>
            <Grid item xs={8} md={3}>
              <Link href="/">
                <a className={classes.headerLogo}>
                  <img src="" alt={SITE_TITLE} />
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
              <nav className={classes.mobileNav}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={classes.menuMobileButton}
                >
                  <MenuIcon />
                </IconButton>
              </nav>
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
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{navMenuList}</List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Navigation;

import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import useStyles from "./styles";

const MiniImage = ({ children, secondBlock }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6}
      className={`${classes.secondImage} ${
        secondBlock ? classes.imageSecondBlock : ""
      }`}
    >
      {children}
    </Grid>
  );
};

export default MiniImage;

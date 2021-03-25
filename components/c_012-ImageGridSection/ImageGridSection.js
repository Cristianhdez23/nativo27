import React from "react";
import Image from "material-ui-image";
import MiniImage from "../c_012a-MiniImage.js/MiniImage";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

const ImageGridSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.ImageGridSection}>
      <article className={`${classes.titleBlock}`}>
        <Typography component="h3" className={`${classes.title}`}>
          La naturaleza es el principal protagonista
        </Typography>
      </article>
      <Grid
        container
        className={`${classes.GeneralImagesGrid} ${classes.FirstGeneralImagesGrid}`}
      >
        <Grid item xs={12} sm={12} md={12} xl={5} className={classes.ImagesContainer}>
          1
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={5} className={classes.SecondImagesContainer}>
          <Grid container>
            <MiniImage>A1</MiniImage>
            <MiniImage>A2</MiniImage>
            <MiniImage>A3</MiniImage>
            <MiniImage>A4</MiniImage>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={`${classes.GeneralImagesGrid}`}>
        <Grid item xs={12} sm={12} md={12} xl={5} className={classes.SecondImagesContainer}>
          <Grid container>
            <MiniImage secondBlock>A1</MiniImage>
            <MiniImage secondBlock>A2</MiniImage>
            <MiniImage secondBlock>A3</MiniImage>
            <MiniImage secondBlock>A4</MiniImage>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={5} className={classes.ImagesContainer}>
          1
        </Grid>
      </Grid>
    </section>
  );
};

export default ImageGridSection;

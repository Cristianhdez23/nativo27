import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Stop as IndicatorBtn } from "@material-ui/icons";

import useStyles from "./styles";

const CarouselSection = ({ textToLeft }) => {
  const classes = useStyles();
  return (
    <section className={classes.carouselSection}>
      <Grid
        container
        className={`${classes.carouselSectionBlock} ${
          textToLeft ? classes.textToLeft : ""
        }`}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Carousel
            className={classes.carouselBlock}
            animation="slide"
            IndicatorIcon={<IndicatorBtn className={classes.indicatorIcon} />}
            indicatorContainerProps={{
              className: classes.indicatorContainer,
            }}
            indicatorIconButtonProps={{
              className: classes.indicatorIconGeneralStyle,
            }}
            activeIndicatorIconButtonProps={{
              className: classes.indicatorIconActive,
            }}
            autoPlay={false}
          >
            <Paper className={classes.carouselItem}>xs=1</Paper>
            <Paper className={classes.carouselItem}>xs=2</Paper>
            <Paper className={classes.carouselItem}>xs=3</Paper>
            <Paper className={classes.carouselItem}>xs=4</Paper>
            <Paper className={classes.carouselItem}>xs=5</Paper>
            <Paper className={classes.carouselItem}>xs=6</Paper>
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <article
            className={`${classes.informationBlock} ${
              textToLeft ? classes.informationBlockToLeft : classes.informationBlockToRight
            }`}
          >
            <Typography variant="h3" component="h3">
              Lorem ipsum dolor sit amet, consectetuer
            </Typography>
            <Typography variant="body1" component="p">
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            </Typography>
          </article>
        </Grid>
      </Grid>
    </section>
  );
};

export default CarouselSection;

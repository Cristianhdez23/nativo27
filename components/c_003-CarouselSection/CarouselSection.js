import React from "react";
import Image from "material-ui-image";
import Carousel from "react-material-ui-carousel";
import { Grid, Button, Typography } from "@material-ui/core";
import { SITE_TITLE } from "../../constants/constants";
import {
  Stop as IndicatorBtn,
  ExpandLess as ExpandLessIcon,
} from "@material-ui/icons";

import useStyles from "./styles";

const CarouselSection = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.carouselSection}>
      <Grid container className={`${classes.carouselSectionBlock} `}>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Carousel
            swipe
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
            navButtonsProps={{
              className: classes.navButtons,
            }}
            NavButton={({ onClick, className, style, next, prev }) => {
              return (
                <Button
                  onClick={onClick}
                  className={`${className} ${next && classes.NextIcon} ${
                    prev && classes.PreviousIcon
                  }`}
                  style={style}
                >
                  {next && (
                    <ExpandLessIcon className={`${classes.nextArrowIcon}`} />
                  )}
                  {prev && (
                    <ExpandLessIcon
                      className={`${classes.previousArrowIcon}`}
                    />
                  )}
                </Button>
              );
            }}
          >
            <div className={classes.carouselItem}>xs=1</div>
            <div className={classes.carouselItem}>xs=3</div>
            <div className={classes.carouselItem}>xs=4</div>
          </Carousel>
          <p className={classes.disclaimer}>
            *Las imágenes y planos son representación arquitectónica del
            proyecto, pueden estar sujetas a modificaciones sin previo aviso.
            Áreas aproximadas.
          </p>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={5}>
          <article
            className={`${classes.paragraphBlock} ${classes.paragraphBlockToRight}`}
          >
            <span
              className={`${classes.watermarkBlock} ${classes.watermarkRight}`}
            >
              <Image
                className={classes.watermark}
                src="/photos/logo/marca-nativo27.svg"
                alt={SITE_TITLE}
              />
            </span>
            {data?.map(({ description }, index) => {
              return (
                <Typography
                  key={index}
                  variant="body1"
                  component="p"
                  className={classes.paragraph}
                >
                  {description}
                </Typography>
              );
            })}
          </article>
        </Grid>
      </Grid>
    </section>
  );
};

export default CarouselSection;

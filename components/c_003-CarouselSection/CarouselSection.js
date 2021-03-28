import React from "react";
import Image from "material-ui-image";
import Carousel from "react-material-ui-carousel";
import { CAROUSEL_IMAGES_DATA } from "../../jsonData/arquitectura/2.2-carouselImagesData";
import { DISCLAIMER_DATA } from "../../jsonData/arquitectura/2.3-disclaimerData";
import { Grid, Button, Typography } from "@material-ui/core";
import { SITE_TITLE } from "../../constants/constants";
import {
  Stop as IndicatorBtn,
  ExpandLess as ExpandLessIcon,
} from "@material-ui/icons";

import useStyles from "./styles";

const CarouselSection = ({ data }) => {
  const classes = useStyles();

  const carouselImages = CAROUSEL_IMAGES_DATA.map(({ slug }, index) => {
    return (
      <div className={classes.carouselItem} key={index}>
        <Image
          src={slug}
          animationDuration={1000}
          disableSpinner
          style={{
            paddingTop: "0",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  });

  const disclaimerData = DISCLAIMER_DATA.map(({ description }, index) => {
    return (
      <Typography key={index} component="p" className={classes.disclaimer}>
        {description}
      </Typography>
    );
  });
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
            {carouselImages}
          </Carousel>
          {disclaimerData}
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

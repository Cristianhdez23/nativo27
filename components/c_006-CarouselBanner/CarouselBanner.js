import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "material-ui-image";
import { Typography, Paper, Button } from "@material-ui/core";

import useStyles from "./styles";

const CarouselBanner = ({ data, color }) => {
  const classes = useStyles();
  return (
    <section className={classes.CarouselBanner}>
      <article className={classes.imageContainer}>
        <div className={classes.imageBackdrop}></div>
        <Carousel
          swipe
          autoPlay
          interval={10000}
          navButtonsAlwaysInvisible
          className={classes.carouselBlock}
          IndicatorIcon={<span className={classes.indicatorIconTemplate} />} // Previous Example
          indicatorContainerProps={{
            className: classes.indicatorContainer,
          }}
          indicatorIconButtonProps={{
            className: classes.indicatorIconGeneralStyle,
          }}
          activeIndicatorIconButtonProps={{
            className: classes.indicatorIconActive,
          }}
        >
          <article className={classes.carouselItem}>
            <Image
              src="/photos/homepage/1-Banner-Naturaleza.jpg"
              animationDuration={1000}
              disableSpinner
              style={{
                paddingTop: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </article>
          <article className={classes.carouselItem}>
            <Image
              src="/photos/homepage/1-Banner-Arquitectura.jpg"
              animationDuration={1000}
              disableSpinner
              style={{
                paddingTop: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </article>
          <article className={classes.carouselItem}>
            <Image
              src="/photos/homepage/1-Banner-Cerritos.jpg"
              animationDuration={1000}
              disableSpinner
              style={{
                paddingTop: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </article>
        </Carousel>
      </article>
      <section className={`${classes.informationBlock} ${color}`}>
        {data?.map(({ title, description }, index) => {
          return (
            <article key={index}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.imageTitle}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.imageParagraph}
              >
                {description}
              </Typography>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CarouselBanner;

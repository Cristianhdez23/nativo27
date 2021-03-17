import React from "react";
import Image from "material-ui-image";
import Iframe from "react-iframe";
import { MAP_DATA } from "../../jsonData/2-mapData";
import { Grid, Button, Typography } from "@material-ui/core";
import { SITE_TITLE } from "../../constants/constants";

import useStyles from "./styles";

const MapSection = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.MapSection}>
      <Grid container className={`${classes.mapSectionBlock} `}>
        <Grid item xs={12} sm={12} md={12} lg={5} className={classes.mapBlock}>
          <article className={classes.mapContainer}>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5017.039615372586!2d-74.04478798467441!3d4.708531842899297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f854d855f1269%3A0x5c28788b69343fb3!2sCountry%20Club%20De%20Bogota!5e1!3m2!1sen!2sco!4v1615936780944!5m2!1sen!2sco"
              className={classes.mapa}
              height="100%"
              width="100%"
              allowfullscreen
            />
          </article>
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
            {MAP_DATA?.map(({ title, description }, index) => {
              return (
                <Typography
                  key={index}
                  variant="body1"
                  component="p"
                  className={classes.paragraph}
                >
                  {title && (
                    <span className={classes.paragraphTitle}>{title}</span>
                  )}
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

export default MapSection;

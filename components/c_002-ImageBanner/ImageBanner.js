import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const ImageBanner = ({ srcImage, data, color }) => {
  const classes = useStyles();
  return (
    <section className={classes.ImageBanner}>
      <article className={classes.imageContainer}>
        <div className={classes.imageBackdrop}></div>
        <Image
          src={srcImage}
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

export default ImageBanner;

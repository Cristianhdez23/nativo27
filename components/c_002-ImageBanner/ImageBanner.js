import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const ImageBanner = ({ srcImage, title }) => {
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
      <section className={classes.informationBlock}>
        {/* CHANGE IT TO READ JSON FILE */}
        <article>
          <Typography variant="h2" component="h2">
            El encanto del eje cafetero
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.imageParagraph}
          >
            Cerritos - Pereira es una de las zonas con mayor desarrollo y
            crecimiento en el Eje Cafetero.
          </Typography>
        </article>
      </section>
    </section>
  );
};

export default ImageBanner;

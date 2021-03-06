import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const BigCardSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.BigCardSection}>
      {/* First */}
      <article className={`${classes.imageSection} ${classes.firstImage}`}>
        <div className={classes.imgContainer}>
          <Image
            src="/photos/homepage/3-First-Image.jpg"
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
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.firsText}`}
        >
          <span>Casas Modernas</span>Y Dinamicas
        </Typography>
      </article>
      {/* Second */}
      <article className={`${classes.imageSection} ${classes.secondImage}`}>
        <Image
          src="/photos/homepage/3-Second-Image.jpg"
          animationDuration={1000}
          disableSpinner
          style={{
            paddingTop: "0",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.secondText}`}
        >
          <span>Contacto con la</span>
          naturaleza
        </Typography>
      </article>
      {/* Third */}
      <article className={`${classes.imageSection} ${classes.thirdIimage}`}>
        <Image
          src="/photos/homepage/3-Third-Image.jpg"
          animationDuration={1000}
          disableSpinner
          style={{
            paddingTop: "0",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.thridText}`}
        >
          <span>Sector el tigre</span>
          en Pereira
        </Typography>
      </article>
    </section>
  );
};

export default BigCardSection;

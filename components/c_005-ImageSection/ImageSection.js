import React from "react";
import Image from "material-ui-image";
import { SITE_TITLE } from "../../constants/constants";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const ImageSection = ({ srcImage, isImageToRight, isImageToLeft }) => {
  const classes = useStyles();
  return (
    <section className={classes.ImageSection}>
      <article className={classes.imageBlock}>
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
      <article className={`${classes.paragraphBlock}`}>
        <span
          className={`${classes.watermarkBlock} ${isImageToLeft ? classes.watermarkRight : ""} ${
            isImageToRight ? classes.watermarkLeft : ""
          }`}
        >
          <Image
            className={classes.watermark}
            src="/photos/logo/marca-nativo27.svg"
            alt={SITE_TITLE}
          />
        </span>
        <Typography variant="body1" component="p" className={classes.paragraph}>
          Cerritos cuenta con una gran infraestructura vial que comunica el
          sector con Pereira y ciudades como Cali, Cartago, entre otras. El
          sector dispone de una ubicación estratégica a pocos minutos del
          aeropuerto internacional Matecaña, con vuelos directos hacia todo el
          territorio nacional y destinos internacionales como Miami y Panamá.
          Las características anteriores le brindan a Cerritos la oportunidad de
          ser un territorio logístico donde se promueve el clima de negocios.
        </Typography>
      </article>
    </section>
  );
};
// 345
export default ImageSection;

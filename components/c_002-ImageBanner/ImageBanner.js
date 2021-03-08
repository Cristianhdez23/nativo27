import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const ImageBanner = ({ srcImage, title, colorBg }) => {
  const classes = useStyles();
  return (
    <section className={classes.imageContainer}>
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
      <div className={classes.informationBlock}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {title}
        </Typography>
      </div>
    </section>
  );
};

export default ImageBanner;

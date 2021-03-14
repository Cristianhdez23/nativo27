import React from "react";
import Image from "material-ui-image";
import { SITE_TITLE } from "../../constants/constants";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

const ImageSection = ({ srcImage, isImageToRight, isImageToLeft, data }) => {
  const classes = useStyles();
  return (
    <section className={classes.ImageSection}>
      <Grid
        container
        className={`${classes.GridContainer}  ${
          isImageToLeft ? classes.imageLeft : ""
        } ${isImageToRight ? classes.imageRight : ""}`}
      >
        <Grid item xs={12} sm={12} md={12} lg={5}>
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
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <article
            className={`${classes.paragraphBlock} ${
              isImageToLeft ? classes.paragraphBlockToRight : ""
            } ${isImageToRight ? classes.paragraphBlockToLeft : ""}`}
          >
            <span
              className={`${classes.watermarkBlock} ${
                isImageToLeft ? classes.watermarkRight : ""
              } ${isImageToRight ? classes.watermarkLeft : ""}`}
            >
              <Image
                className={classes.watermark}
                src="/photos/logo/marca-nativo27.svg"
                alt={SITE_TITLE}
              />
            </span>
            {data?.map(({ title, description }, index) => {
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
// 345
export default ImageSection;

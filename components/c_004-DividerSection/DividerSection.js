import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const DividerSection = ({ srcImage, useImageOnly, color, data }) => {
  const classes = useStyles();

  return (
    <section className={classes.dividerSection}>
      {useImageOnly && (
        <>
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
        </>
      )}
      {!useImageOnly && (
        <div className={`${classes.dividerTextBlock} ${color}`}>
          <span className={`${classes.hoja} ${classes.hojaLeft} ${color}`}>
            <Image
              src={`/photos/hojasSection/hoja-${color}-section.svg`}
              animationDuration={1000}
              disableSpinner
              style={{
                backgroundColor: "transparent",
                paddingTop: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </span>

          {data?.map(({ title, description }, index) => {
            return (
              <section key={index} className={classes.dataSection}>
                <Typography
                  variant="h3"
                  component="h3"
                  className={`${classes.dividerData} ${color}`}
                >
                  <span className={classes.dividerDataTitle}>{title}</span>
                </Typography>
                <Typography
                  variant="h3"
                  component="h4"
                  className={`${classes.dividerData} ${color}-description`}
                >
                  {description}
                </Typography>
              </section>
            );
          })}

          <span className={`${classes.hoja} ${classes.hojaRight} ${color}`}>
            <Image
              src={`/photos/hojasSection/hoja-${color}-section.svg`}
              animationDuration={1000}
              disableSpinner
              style={{
                backgroundColor: "transparent",
                paddingTop: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </span>
        </div>
      )}
    </section>
  );
};

export default DividerSection;

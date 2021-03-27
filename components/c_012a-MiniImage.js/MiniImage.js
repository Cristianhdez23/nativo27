import React from "react";
import Image from "material-ui-image";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const MiniImage = ({ secondBlock, imageSrc }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6}
      className={`${classes.secondImage} ${
        secondBlock ? classes.imageSecondBlock : ""
      }`}
    >
      <Image
        src={imageSrc}
        animationDuration={1000}
        disableSpinner
        style={{
          paddingTop: "100% ",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Grid>
  );
};

export default MiniImage;

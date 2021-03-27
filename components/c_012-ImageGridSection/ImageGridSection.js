import React from "react";
import Image from "material-ui-image";
import MiniImage from "../c_012a-MiniImage.js/MiniImage";
import { Typography, Grid } from "@material-ui/core";
// --||----||----|| JSON DATA ||----||----||-- //
import { FIRST_GRID_DATA } from "../../jsonData/naturaleza/2-FirstGridData";
import { SECOND_GRID_DATA } from "../../jsonData/naturaleza/2.1-FirstGridData";

// --||----||----|| JSON DATA ||----||----||-- //
import useStyles from "./styles";

const ImageGridSection = () => {
  const classes = useStyles();

  const componentProps = {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    xl: 5,
  };

  const firstSetImage = FIRST_GRID_DATA.map(({ slug }, index) => {
    return <MiniImage imageSrc={slug} key={index} />;
  });

  const secondSetImage = SECOND_GRID_DATA.map(({ slug }, index) => {
    return <MiniImage secondBlock imageSrc={slug} key={index} />;
  });

  return (
    <section className={classes.ImageGridSection}>
      <article className={`${classes.titleBlock}`}>
        <Typography component="h3" className={`${classes.title}`}>
          La naturaleza es el principal protagonista
        </Typography>
      </article>
      <Grid
        container
        className={`${classes.GeneralImagesGrid} ${classes.FirstGeneralImagesGrid}`}
      >
        <Grid {...componentProps} className={classes.ImagesContainer}>
          <Image
            src={"/photos/naturaleza/2-Grid-Image.jpg"}
            animationDuration={1000}
            disableSpinner
            style={{
              paddingTop: "100% ",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid {...componentProps} className={classes.SecondImagesContainer}>
          <Grid container className={classes.MiniImagesContainer}>
            {firstSetImage}
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={`${classes.GeneralImagesGrid}`}>
        <Grid {...componentProps} className={classes.SecondImagesContainer}>
          <Grid container className={classes.MiniImagesContainer}>
            {secondSetImage}
          </Grid>
        </Grid>
        <Grid {...componentProps} className={classes.ImagesContainer}>
          <Image
            src={"/photos/naturaleza/7-Grid-Image.jpg"}
            animationDuration={1000}
            disableSpinner
            style={{
              paddingTop: "100% ",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.GeneralImagesGrid}>
        <Grid
          item
          xs={12}
          xl={5}
          className={`${classes.ImagesContainer} ${classes.auxBox}`}
        />
        <Grid item xs={12} xl={5} className={classes.ImagesContainer}>
          <Typography variant="body1" component="p" className={classes.takenBy}>
            *Fotografías tomadas por Camila Mejía
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.GeneralImagesGrid}>
        <Grid item xs={12} sm={9} lg={8}>
          <Typography
            variant="body1"
            component="p"
            className={classes.paragraph}
          >
            Región extensa en biodiversidad de Colombia, cuenta con 22.645
            registros biológicos con 3.592 especies en flora y fauna. Pereira es
            una de las mayores áreas de bosques en la ecorregión cafetera. La
            zona permite la realización de actividades como el avistamiento de
            aves, las caminatas ecológicas y el ciclomontañismo.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default ImageGridSection;

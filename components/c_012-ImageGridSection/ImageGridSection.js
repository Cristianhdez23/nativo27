import React from "react";
import Image from "material-ui-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Typography, Grid } from "@material-ui/core";
import MiniImage from "../c_012a-MiniImage.js/MiniImage";
// --||----||----|| JSON DATA ||----||----||-- //
import { FIRST_GRID_DATA } from "../../jsonData/naturaleza/2-FirstGridData";
import { SECOND_GRID_DATA } from "../../jsonData/naturaleza/2.1-FirstGridData";
// --||----||----|| JSON DATA ||----||----||-- //
import useStyles from "./styles";

const ImageGridSection = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const gridImages = ["/photos/naturaleza/2-Grid-Image.jpg"];

  FIRST_GRID_DATA.map(({ slug }) => {
    gridImages.push(slug);
  });
  gridImages.push("/photos/naturaleza/7-Grid-Image.jpg");
  SECOND_GRID_DATA.map(({ slug }) => {
    gridImages.push(slug);
  });

  const handleGridImageClick = (value) => {
    console.log("🚀", gridImages[value]);
    setSelectedImage(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const componentProps = {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    xl: 5,
  };

  const bigGridImage = (srcImage, imageValue, index) => {
    return (
      <Grid
        key={index}
        {...componentProps}
        className={classes.ImagesContainer}
        onClick={() => handleGridImageClick(imageValue)}
      >
        <Image
          src={srcImage}
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
  const firstSetImage = FIRST_GRID_DATA.map(({ slug, value }, index) => {
    return (
      <MiniImage
        srcImage={slug}
        key={index}
        handleGridImageClick={handleGridImageClick}
        imageValue={value}
      />
    );
  });

  const secondSetImage = SECOND_GRID_DATA.map(({ slug, value }, index) => {
    return (
      <MiniImage
        secondBlock
        srcImage={slug}
        key={index}
        handleGridImageClick={handleGridImageClick}
        imageValue={value}
      />
    );
  });

  return (
    <>
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
          {bigGridImage("/photos/naturaleza/2-Grid-Image.jpg", 0)}
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
          {bigGridImage("/photos/naturaleza/7-Grid-Image.jpg", 5)}
        </Grid>
        <Grid container className={classes.GeneralImagesGrid}>
          <Grid
            item
            xs={12}
            xl={5}
            className={`${classes.ImagesContainer} ${classes.auxBox}`}
          />
          <Grid item xs={12} xl={5} className={classes.ImagesContainer}>
            <Typography
              variant="body1"
              component="p"
              className={classes.takenBy}
            >
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
              registros biológicos con 3.592 especies en flora y fauna. Pereira
              es una de las mayores áreas de bosques en la ecorregión cafetera.
              La zona permite la realización de actividades como el avistamiento
              de aves, las caminatas ecológicas y el ciclomontañismo.
            </Typography>
          </Grid>
        </Grid>
      </section>
      {open && (
        <Lightbox
          enableZoom={false}
          mainSrc={gridImages[selectedImage]}
          nextSrc={gridImages[(selectedImage + 1) % gridImages.length]}
          prevSrc={
            gridImages[
              (selectedImage + gridImages.length - 1) % gridImages.length
            ]
          }
          onCloseRequest={() => handleClose()}
          onMovePrevRequest={() =>
            setSelectedImage(
              (selectedImage + gridImages.length - 1) % gridImages.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImage((selectedImage + 1) % gridImages.length)
          }
        />
      )}
    </>
  );
};

export default ImageGridSection;

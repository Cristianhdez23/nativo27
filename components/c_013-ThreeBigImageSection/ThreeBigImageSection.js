import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const ThreeBigImageSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.ThreeBigImageSection}>
      {/* <article className={classes.TitlesData}> */}
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.firsText}`}
        >
          <span>Casas Modernas</span>Y Dinamicas
        </Typography>
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.secondText}`}
        >
          <span>Contacto con la</span>
          naturaleza
        </Typography>
        <Typography
          component="h4"
          className={`${classes.ImageText} ${classes.thridText}`}
        >
          <span>Sector el tigre</span>
          en Pereira
        </Typography>
      {/* </article> */}
      <section className={classes.composition}>
        <article
          className={`big-image ${classes.Image} ${classes.FirstImage}`}
        ></article>
        <article
          className={`big-image ${classes.Image} ${classes.SecondImage}`}
        ></article>
        <article
          className={`big-image ${classes.Image} ${classes.ThirdImage}`}
        ></article>
      </section>
    </section>
  );
};

export default ThreeBigImageSection;

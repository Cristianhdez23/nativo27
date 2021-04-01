import Link from "next/link";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const ThreeBigImageSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.ThreeBigImageSection}>
      <Typography
        component="h4"
        className={`${classes.ImageText} ${classes.firsText}`}
      >
        <Link href="/arquitectura">
          <a className={classes.Link}>
            <span>Casas Modernas</span>Y Dinamicas
          </a>
        </Link>
      </Typography>
      <Typography
        component="h4"
        className={`${classes.ImageText} ${classes.secondText}`}
      >
        <Link href="/naturaleza">
          <a className={classes.Link}>
            <span>Contacto con la</span>
            naturaleza
          </a>
        </Link>
      </Typography>
      <Typography
        component="h4"
        className={`${classes.ImageText} ${classes.thridText}`}
      >
        <Link href="/cerritos">
          <a className={classes.Link}>
            <span>Sector el tigre</span>
            en Pereira
          </a>
        </Link>
      </Typography>
      <section className={classes.composition}>
        <article
          className={`big-image ${classes.Image} ${classes.FirstImage}`}
        />
        <article
          className={`big-image ${classes.Image} ${classes.SecondImage}`}
        />
        <article
          className={`big-image ${classes.Image} ${classes.ThirdImage}`}
        />
      </section>
    </section>
  );
};

export default ThreeBigImageSection;

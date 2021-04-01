import Link from "next/link";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const ThreeBigImageSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.ThreeBigImageSection}>
      <Link href="/arquitectura">
        <a>
          <Typography
            component="h4"
            className={`${classes.ImageText} ${classes.firsText}`}
          >
            <span>Casas Modernas</span>Y Dinamicas
          </Typography>
        </a>
      </Link>
      <Link href="/naturaleza">
        <a>
          <Typography
            component="h4"
            className={`${classes.ImageText} ${classes.secondText}`}
          >
            <span>Contacto con la</span>
            naturaleza
          </Typography>
        </a>
      </Link>
      <Link href="/cerritos">
        <a>
          <Typography
            component="h4"
            className={`${classes.ImageText} ${classes.thridText}`}
          >
            <span>Sector el tigre</span>
            en Pereira
          </Typography>
        </a>
      </Link>
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

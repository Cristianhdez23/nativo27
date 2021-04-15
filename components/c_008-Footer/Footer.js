import React from "react";
import Image from "material-ui-image";
import { FOOTER_DATA } from "../../jsonData/1-footerData";
import { Typography, Grid, Link } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      <div className={classes.footerInformation}>
        <div className={classes.socialIcons}>
          <Link
            className={classes.iconClasses}
            href="https://www.instagram.com/proyecto.nativo27/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
          <Link
            className={classes.iconClasses}
            href="https://www.facebook.com/proyecto.nativo27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          {/* <Link
            className={classes.iconClasses}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </Link> */}
          <Link
            className={classes.iconClasses}
            href="mailto:constructoresexpertossa@gmail.com?Subject=Nativo27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlineIcon />
          </Link>
        </div>
        <span className={classes.division} />
        {FOOTER_DATA?.map(({ city, address, location }, index) => {
          return (
            <React.Fragment key={index}>
              <Typography component="span" className={classes.city}>
                {city}
              </Typography>
              <Typography component="span" className={classes.address}>
                {address}
              </Typography>
              <Typography component="span" className={classes.address}>
                {location}
              </Typography>
            </React.Fragment>
          );
        })}
      </div>
      <div className={`${classes.footerImage}`}>
        <article className={classes.imageBlock}>
          <Image
            src={`/photos/logo/Insumos_pagina_constructores_expertos.svg`}
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
      </div>
    </footer>
  );
};

export default Footer;

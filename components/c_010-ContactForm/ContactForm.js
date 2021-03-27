import { useState } from "react";
import Image from "material-ui-image";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { SITE_TITLE } from "../../constants/constants";

import useStyles from "./styles";

const ContactForm = () => {
  const classes = useStyles();

  return (
    <section className={classes.ContactForm} name="scroll-to-form-section">
      <Grid container className={classes.contactBlock}>
        <span className={`${classes.watermarkBlock}`}>
          <Image
            className={classes.watermark}
            src="/photos/logo/marca-nativo27.svg"
            alt={SITE_TITLE}
          />
        </span>
        <Grid item xs={12} sm={12} md={12} lg={5} className={classes.dataBlock}>
          <Typography
            variant="h3"
            component="h3"
            className={classes.titleContactSection}
          >
            Si deseas más información contáctanos
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} className={classes.formBlock}>
          <form
            className={classes.form}
            autoComplete="off"
            name="contact"
            method="post"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              required
              fullWidth
              label="Nombre"
              id="nombre"
              name="nombre"
              variant="standard"
              type="text"
              className={classes.TextField}
              InputLabelProps={{
                classes: {
                  root: classes.InputLabel,
                  focused: classes.InputLabelFocused,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.inputTextField,
                  underline: classes.underline,
                },
              }}
            />
            <TextField
              fullWidth
              label="Teléfono"
              id="telefono"
              name="telefono"
              variant="standard"
              type="text"
              className={classes.TextField}
              InputLabelProps={{
                classes: {
                  root: classes.InputLabel,
                  focused: classes.InputLabelFocused,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.inputTextField,
                  underline: classes.underline,
                },
              }}
            />
            <TextField
              required
              fullWidth
              label="Email"
              id="email"
              name="email"
              variant="standard"
              type="email"
              className={classes.TextField}
              InputLabelProps={{
                classes: {
                  root: classes.InputLabel,
                  focused: classes.InputLabelFocused,
                },
              }}
              InputProps={{
                classes: {
                  input: classes.inputTextField,
                  underline: classes.underline,
                },
              }}
            />
            <div data-netlify-recaptcha="true"></div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.sendBtn}
            >
              Enviar
            </Button>
          </form>
        </Grid>
      </Grid>
    </section>
  );
};

export default ContactForm;

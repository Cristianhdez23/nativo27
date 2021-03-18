import { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import useStyles from "./styles";

const ContactForm = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <section className={classes.ContactForm}>
      <Grid container className={classes.contactBlock}>
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
          {/* <form
            className={classes.form}
            autoComplete="off"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              required
              fullWidth
              label="Nombre"
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
              name="telefono"
              variant="standard"
              type="tel"
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
          </form> */}
          {success && (
            <p style={{ color: "green" }}>Successfully submitted form!</p>
          )}
          <form name="contact" method="post" className={classes.FormContacto}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </Grid>
      </Grid>
    </section>
  );
};

export default ContactForm;

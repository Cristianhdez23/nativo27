import { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import InputForm from "../c_010a-InputForm/InputForm";

import useStyles from "./styles";

const ContactForm = () => {
  const classes = useStyles();

  const [inputsValue, setInputsValue] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputsValue((inputsValue) => ({
      ...inputsValue,
      [event.target.name]: event.target.value,
    }));
  };

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
            method="post"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              required
              fullWidth
              label="Nombre"
              id="name"
              name="name"
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
          </form> */}
          <form name="contact" method="post" className={classes.form}>
            <input type="hidden" name="form-name" value="contact" />
            <InputForm
              handleInputChange={handleInputChange}
              label="Nombre"
              name="nombre"
              variant="outlined"
              type="text"
              autoFocus
            />
            <InputForm
              handleInputChange={handleInputChange}
              label="Email"
              name="email"
              variant="outlined"
              type="email"
            />
            <InputForm
              handleInputChange={handleInputChange}
              label="Telefono"
              name="telefono"
              variant="outlined"
              type="text"
            />
            <TextField
              name="mensaje"
              label="Mensaje"
              multiline
              className={classes.textArea}
              variant="outlined"
              onChange={handleInputChange}
              required
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.EnviarBTN}
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

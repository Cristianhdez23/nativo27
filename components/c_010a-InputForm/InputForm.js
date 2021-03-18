import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';

const InputForm = ({ handleInputChange, label, name, variant, type, autoFocus }) => {
  const classes = useStyles();
  return (
    <TextField
      variant={variant}
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      type={type}
      onChange={handleInputChange}
      className={classes.inputForm}
      />
  );
};

export default InputForm;
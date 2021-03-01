import React, { Fragment, useState } from "react";
import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function InputText({ inputHandler, blurHandler, value }) {
  const classes = useStyles();

  return (
    <InputBase
      variant="outlined"
      type="number"
      size="medium"
      value={value ? value : ""}
      placeholder="Operand"
      className={classes.textField}
      onChange={(e) => inputHandler && inputHandler(e.target.value)}
      onBlur={(e) => blurHandler && blurHandler(e.target.value)}
      required
    />
  );
}

const useStyles = makeStyles({
  textField: {
    width: "300px",
    height: "55px",
    border: "2px solid #A8F1E1",
    borderRadius: 5,
    padding: "2px",
  },
});

import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function CustomButton({ onClickHandler, children }) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      onClick={() => onClickHandler && onClickHandler()}
      className={classes.button}
    >
      {children}
    </Button>
  );
}

const useStyles = makeStyles({
  button: {
    marginLeft: "1%",
    backgroundColor: "#A8F1E1",
    width: "300px",
    height: "55px",
    alignSelf: "center",
  },
});

import React, { Fragment, useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";

export default function FirstOperand({ getFirstOperand, showEvaluator }) {
  const [firstOperand, setFirstOperand] = useState(0);
  const classes = useStyles();
  return (
    <Fragment>
      <Box component="div">
        <Typography
          variant="h3"
          justify="center"
          className={classes.typography}
        >
          Expression <br /> Evaluator
        </Typography>
      </Box>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.secondContainer}
      >
        <Box component="div" className={classes.textFieldContainer}>
          <InputText
            inputHandler={(val) => setFirstOperand(val)}
            blurHandler={(val) => getFirstOperand(val)}
          />
        </Box>
        <Box component="div">
          <CustomButton onClickHandler={() => showEvaluator(true)}>
            Add operand
          </CustomButton>
        </Box>
      </Grid>
    </Fragment>
  );
}

const useStyles = makeStyles({
  typography: {
    color: "#A8F1E1",
    textAlign: "center",
    marginTop: "10vh",
  },
  secondContainer: {
    marginTop: "10vh",
  },
  textFieldContainer: {
    margin: "5px",
  },
});

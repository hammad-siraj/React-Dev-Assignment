import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  Grid,
  InputBase,
} from "@material-ui/core";
import InputText from "../components/InputText";
import CustomButton from "../components/CustomButton";

export default function Evaluator({ firstOperand }) {
  const [localFirstOperand, setLocalFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    setLocalFirstOperand(Number(firstOperand));
  }, [firstOperand]);

  const evaluate = () => {
    let result;
    switch (operator) {
      case "+":
        result = localFirstOperand + secondOperand;
        setResult(result);
        setLocalFirstOperand(result);
        break;
      case "-":
        result = localFirstOperand - secondOperand;
        setResult(result);
        setLocalFirstOperand(result);
        break;
      case "*":
        result = localFirstOperand * secondOperand;
        setResult(result);
        setLocalFirstOperand(result);
        break;
      case "/":
        result = localFirstOperand / secondOperand;
        setResult(result);
        setLocalFirstOperand(result);
        break;
    }
  };

  return (
    <Grid
      justify="center"
      alignItems="center"
      container
      className={classes.container}
    >
      <Box className={classes.valuesContainer}>
        <Box item xs={6} md={6} className={classes.valueBox}>
          <h3>{firstOperand}</h3>
        </Box>
        <Box item xs={6} md={6} className={classes.valueBox}>
          <h3>{secondOperand}</h3>
        </Box>
        <Box item xs={6} md={6} className={classes.valueBox}>
          <h3>{operator}</h3>
        </Box>
      </Box>
      <Box item className={classes.equalBox}>
        <h2>=</h2>
      </Box>
      <Box item className={classes.result}>
        <h2>{result}</h2>
      </Box>

      <Grid
        direction="column"
        container
        className={classes.bottomFieldsContainer}
      >
        <Grid
          container
          direction="row"
          wrap="nowrap"
          justify="center"
          alignItems="center"
          className={classes.rightAlign}
        >
          <FormControl className={classes.formControl}>
            <Select
              labelId="select-operator"
              onChange={(e) => setOperator(e.target.value)}
              className={classes.selectEmpty}
              input={<BootstrapInput placeholder="Operator" />}
            >
              <MenuItem value="+">+</MenuItem>
              <MenuItem value="-"> - </MenuItem>
              <MenuItem value="*">*</MenuItem>
              <MenuItem value="/">/</MenuItem>
            </Select>
          </FormControl>

          <InputText inputHandler={(val) => setSecondOperand(Number(val))} />
        </Grid>
        <CustomButton onClickHandler={() => evaluate()}>
          Add operation
        </CustomButton>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    zIndex: 10,
    backgroundColor: "white",
  },
  formControl: {
    width: "50vh",
    height: "55px",
    marginRight: "2px",
  },

  valuesContainer: {
    marginTop: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  valueBox: {
    width: "70px",
    height: "10vh",
    backgroundColor: "#ECF5F7",
    margin: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  equalBox: {
    width: "100vw",
    height: "10vh",
    margin: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    width: "100vw",
    height: "10vh",
    margin: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#A8F1E1",
    fontSize: "400%",
  },
  bottomFieldsContainer: {
    marginTop: "10vh",
    width: "90%",
    padding: 10,
  },
  rightAlign: {
    margin: "1%",
  },
  centerAlign: {
    textAlign: "center",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    height: "40px",
    border: "2px solid #A8F1E1",
    borderRadius: 5,
    maxWidth: "300px",
    padding: "5px",
    fontSize: "20px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 5,
      borderColor: "#A8F1E1",
    },
  },
}))(InputBase);

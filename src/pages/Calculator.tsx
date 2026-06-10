import React from "react";
import CalculatorField from "../components/Calculator/CalculatorField";
import ClcPad from "../components/Calculator/Clcpad";
import { Box } from "@mui/material";
import MathOperator from "../components/Calculator/MathOperator";
const Calculator = () => {
  const [numInput, setInput] = React.useState("");
  const [buffer, setBuffer] = React.useState("");
  const [numSecond, setSecond] = React.useState("");
  const [operator, setOperator] = React.useState("");
  let k = [];

  for (let i = 0; i <= 9; i++) {
    k.push(i);
  }

  const numberBack = (value: number) => {
    setInput(numInput + value.toString());
  };

  const handleOperator = (operator: string) => {
    setOperator(operator);
    switch (operator) {
      case "+":
      case "-":
      case "*":
      case "/":
        {
        setBuffer(numInput);
        setInput("");
        setSecond(numInput + " " + operator + " ");
        break;
      }
    }
  };

  const handleEquation = () => {
    let result;
    
    switch (operator) {
      case "+": {
        result = Number(buffer) + Number(numInput);
        setSecond(
          numSecond.toString() +
            numInput.toString() +
            " = " +
            result.toString(),
        );
        break;
      }
      case "-": {
        result = Number(buffer) - Number(numInput);
        setSecond(
          numSecond.toString() +
            numInput.toString() +
            " = " +
            result.toString(),
        );
        break;
      }
      case "*": {
        result = Number(buffer) * Number(numInput);
        setSecond(
          numSecond.toString() +
            numInput.toString() +
            " = " +
            result.toString(),
        );
        break;
      }
      case "/": {
        result = Number(buffer) / Number(numInput);
        setSecond(
          numSecond.toString() +
            numInput.toString() +
            " = " +
            result.toString(),
        );
        break;
      }
    }
  };
   const handleClear = () => {
     setSecond("");
     setBuffer("");
     setInput("");
     setOperator("");
   };

  return (
    <div>
      <CalculatorField inputString={numInput}></CalculatorField>
      <CalculatorField inputString={numSecond}></CalculatorField>
      <Box
        sx={{
          display: "block",
          width: "250px",
        }}
      >
        {k.map((index) => (
          <ClcPad numClc={index} back={numberBack} key={index} />
        ))}
        <MathOperator
          onOperatorClick={handleOperator}
          onEqualClick={handleEquation}
          onClearClick={handleClear}
        />
      </Box>
    </div>
  );
  
};
export default Calculator;
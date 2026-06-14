import { Button } from "@mui/material";
interface MathOperatorProps {
  onOperatorClick: (op: string) => void;
  onEqualClick: () => void;
  onClearClick: () => void;
}
const MathOperator = (props: MathOperatorProps) => {
  const operators = ["+", "-", "*", "/"];
  return (
    <div>
      {operators.map((op) => (
        <Button onClick={() => props.onOperatorClick(op)}>{op}</Button>
      ))}
      <Button onClick={props.onEqualClick}>=</Button>
      <Button onClick={props.onClearClick}>Clear</Button>
    </div>
  );
};
export default MathOperator;

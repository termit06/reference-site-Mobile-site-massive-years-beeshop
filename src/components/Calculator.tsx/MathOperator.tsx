import { Button } from "@mui/material"
interface MathOperatorProps{
    onOperatorClick: (op: string) => void;
    onEqualClick: () => void;
    onClearClick: () => void;
}
const MathOperator = ({ onOperatorClick, onEqualClick, onClearClick }: MathOperatorProps) => {
    const operators = ["+", "-", "*", "/"];
    return (
      <div>
        {operators.map((op) => (
          <Button key={op} onClick={() => onOperatorClick(op)}>
            {op}
          </Button>
        ))}
            <Button onClick={onEqualClick}>=</Button>
            <Button onClick={onClearClick}>Clear</Button>
      </div>
    );
}
export default MathOperator
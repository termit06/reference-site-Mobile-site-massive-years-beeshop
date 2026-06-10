import { Button } from "@mui/material"
interface MathOperatorProps{
    onOperatorClick: (op: string) => void;
    onEqualClick: () => void;
    onClearClick: () => void;
}
const MathOperator = (props: MathOperatorProps) => {
    const operators = ["+", "-", "*", "/"];
    return (
      <div>
        {operators.map((op) => (
          <Button
            key={op}
            sx={{
              borderColor: "lime",
              color: "lime",
              backgroundColor: "blue",
            }}
            onClick={() => props.onOperatorClick(op)}
          >
            {op}
          </Button>
        ))}
        <Button
          sx={{
            borderColor: "lime",
            color: "lime",
            backgroundColor: "blue",
          }}
          onClick={props.onEqualClick}
        >
          =
        </Button>
        <Button
          sx={{
            display: "flex",
            fontSize: 40,
            borderColor: "red",
            borderWidth: 1,
            color: "red",
            backgroundColor: "orange",
          }}
          onClick={props.onClearClick}
        >
          Clear
        </Button>
      </div>
    );
}
export default MathOperator
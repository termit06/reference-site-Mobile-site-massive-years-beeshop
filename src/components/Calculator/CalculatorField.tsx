import { TextField } from "@mui/material";
interface calculatorFieldProps {
    inputString: string
}
const CalculatorField = (props: calculatorFieldProps) => {
    return <TextField value={props.inputString}/>
}
export default CalculatorField;
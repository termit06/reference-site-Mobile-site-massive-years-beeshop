import { Button } from '@mui/material';
interface clcPadProps {
    numClc: number,
    back: (value: number) => void;
}
const ClcPad = (props: clcPadProps) => {
    const proceed = (n: number) => {
        props.back(n)
    }
    return (
      <Button
        onClick={() => proceed(props.numClc)}
        className="main-button's"
        >{props.numClc}</Button>
    );
}
export default ClcPad
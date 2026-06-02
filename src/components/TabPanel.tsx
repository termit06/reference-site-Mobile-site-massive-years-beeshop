import {
    Box
} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode; //дочерний элемент
    index: number; //номер элемента массива
    value: number; //номер отображаемого элемента
}

const TabPanel = (props: TabPanelProps) => {
    return <Box
        hidden={props.value !== props.index}
    >
        <Box>
            {props.children}
        </Box>
    </Box>
}

export default TabPanel;
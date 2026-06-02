import { Box, Modal, Typography } from "@mui/material";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Current.css';

const Current = () => { 
    const [amp, setAmp] = React.useState(''); 
    const [oma, setOma] = React.useState('');
    const [turnOn, setTurnOn] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const [isButtonRed, setIsButtonRed] = React.useState<boolean>(false);
    const [showFuseMessage, setShowFuseMessage] = React.useState<boolean>(false);
    const [canToggleSwitch, setCanToggleSwitch] = React.useState<boolean>(true);
    const [isFieldsDisabled, setIsFieldsDisabled] = React.useState<boolean>(false); 

    const handleChange = (event: SelectChangeEvent) => {
        if (turnOn && !isFieldsDisabled) {
            setAmp(event.target.value);
        }
    };

    const handleChange2 = (event: SelectChangeEvent) => {
        if (turnOn && !isFieldsDisabled) {
            setOma(event.target.value);
        }
    }

    const theme = createTheme({
        palette: {
            primary: isButtonRed ? red : green,
        },
    });

    const changeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (canToggleSwitch) {
            setTurnOn(e.target.checked);
            setOpen(!e.target.checked);
            if (e.target.checked) {
                setShowFuseMessage(false);
            }
        }
    }

    const toggleButtonColor = () => {
        if (turnOn) {
            setIsButtonRed(true);
            setCanToggleSwitch(false); 
            setIsFieldsDisabled(true); 
            setTimeout(() => {
                setIsButtonRed(false);
                setShowFuseMessage(true);
                setCanToggleSwitch(true); 
                setIsFieldsDisabled(false); 
            }, 5000);
        }
    }

    return (
        
        <Box>
            <Typography component={'h1'} style={{ textAlign: "center" }}>
                Исследование эффективности действия защитного
                заземления и зануление
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="Amp-simple-select-helper-label">I ср =</InputLabel>
                <Select
                    labelId="Amp-simple-select-helper-label"
                    id="Amp-simple-select-helper"
                    value={amp}
                    label="Amp"
                    onChange={handleChange}
                    disabled={!turnOn || isFieldsDisabled} 
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10 A</MenuItem>
                    <MenuItem value={20}>20 A</MenuItem>
                    <MenuItem value={30}>30 A</MenuItem>
                </Select>
                <FormHelperText>Amp</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="Oma-simple-select-helper-label">R3</InputLabel>
                <Select
                    labelId="Oma-simple-select-helper-label"
                    id="Oma-simple-select-helper-label"
                    value={oma}
                    label="Oma"
                    onChange={handleChange2}
                    disabled={!turnOn || isFieldsDisabled} 
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10 Oma</MenuItem>
                    <MenuItem value={14}>14 Oma</MenuItem>
                    <MenuItem value={18}>18 Oma</MenuItem>
                    <MenuItem value={20}>20 Oma</MenuItem>
                    <MenuItem value={24}>24 Oma</MenuItem>
                    <MenuItem value={26}>26 Oma</MenuItem>
                    <MenuItem value={30}>30 Oma</MenuItem>
                </Select>
                <FormHelperText>Oma</FormHelperText>
            </FormControl>
            <h2>R0 = 4 Oma</h2>
            <FormGroup>
               
                <FormControlLabel 
                  control={<Switch checked={turnOn} onChange={(e) => changeSwitch(e)} disabled={!canToggleSwitch} />} 
                  label="вкл/выкл стенд" 
                />
            </FormGroup>
            <Stack spacing={0} direction={"row"}>
                <ThemeProvider theme={theme}>
                    <Button
                        variant="outlined"
                        onClick={toggleButtonColor}
                        disabled={!turnOn}
                        color="primary"
                    >
                        Пробой на корпус
                    </Button>
                </ThemeProvider>
            </Stack>
            <Box sx={{
               
            }}/>
            {showFuseMessage && (
                <Typography variant="body1" color="error" style={{ textAlign: "left", marginTop: "20px" }}>
                    Информация: Пожалуйста замените предохранитель. Для смены предохранителя выключите,
                     замените предохранитель и включите стенд.
                </Typography>
            )}

            <Modal
                open={!turnOn && open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ background: '#fff' }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Нет питания
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Пожалуйста включите стенд
                    </Typography>
                </Box>
            </Modal>

        </Box>
        

    );
}

export default Current;

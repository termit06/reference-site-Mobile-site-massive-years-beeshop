import { Box, Typography } from "@mui/material";

const ShutdownPower = () => {
    return <Box sx={{
        width: "900px"
    }}>
        <Typography
            component="h1"
            align="center"
            fontSize={32}
            color="red"
            sx={{
                fontWeight: 700
            }}
        >
            Выключение PowerShell
        </Typography>
        <Typography>
            Как разрешить в Windows выполнение скриптов PowerShell
Проблема заключается в том, что политика выполнения скриптов запрещает выполнять эти самые скрипты. Узнать текущее значение политики можно командой:

1
Get-ExecutionPolicy
Для своей системы я получил значение:

1
Restricted
Чтобы разрешить выполнение файлов с расширением .ps1, то есть чтобы запустить скрипт PowerShell в Windows, выполните команду:

1
Set-ExecutionPolicy unrestricted
Когда поступит запрос, введите Y.

Данные команды нужно выполнять в PowerShell, а не в CMD.
        </Typography>
    </Box>
}

export default ShutdownPower;
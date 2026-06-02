import { useNavigate } from "react-router-dom"
import { getPageRoute } from "../helpers/MenuDate"

import {
  Box,
  Button,
  Toolbar
} from "@mui/material";


const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      className='wrapper'
      sx={{
        display: 'flex'
      }}
    >
      <Toolbar
        sx={{
          width: '300px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        {getPageRoute().map((menu, key) => (
          <Button
            onClick={() => navigate(menu.path)}
            variant="outlined"
            color="error"
            fullWidth
            key={'menu-route-' + key}
            sx={{
              mb: 2,
              textTransform: 'math-auto',
              fontSize: '18px'
            }}
          >
            {menu.namePage}
          </Button>
        ))}
      </Toolbar>
      <Box
        sx={{
          m: 'auto'
        }}
      >
      </Box>
    </Box>
  )
}

export default MainPage
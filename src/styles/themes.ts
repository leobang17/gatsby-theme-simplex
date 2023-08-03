import { createTheme } from '@mui/material'
import { blue, purple } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    mode: 'dark',
  },
})

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    mode: 'light',
  },
})

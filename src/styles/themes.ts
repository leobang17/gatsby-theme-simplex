import {
  PaletteColor,
  PaletteColorOptions,
  PaletteMode,
  createTheme,
} from '@mui/material'
import { teal } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    navbar: PaletteColor
  }
  interface PaletteOptions {
    navbar?: PaletteColorOptions
  }
}

export const configureTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      primary: {
        main: teal[600],
      },
      secondary: {
        main: '#146C94',
      },
      mode,
    },
  })
}
